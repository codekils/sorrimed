const assert = require("node:assert/strict");
const { before, after, test } = require("node:test");
const fs = require("node:fs/promises");
const http = require("node:http");
const os = require("node:os");
const path = require("node:path");
const app = require("../../src/app");
const dataLayer = require("../../src/data");
const { getHomeData } = require("../../src/data/home.data");
const { getServicesData } = require("../../src/data/services.data");
const { getProfessionalsData } = require("../../src/data/professionals.data");
const {
  getInsurancePlansData,
} = require("../../src/data/insurance-plans.data");
const { renderAboutPage } = require("../../src/controllers/about.controller");
const {
  renderContactPage,
} = require("../../src/controllers/contact.controller");
const {
  renderServicesPage,
} = require("../../src/controllers/services.controller");
const {
  renderLocationPage,
} = require("../../src/controllers/location.controller");
const {
  renderProfessionalsPage,
} = require("../../src/controllers/professionals.controller");
const {
  renderInsurancePlansPage,
} = require("../../src/controllers/insurance-plans.controller");

let server;
let baseUrl;

function request(path) {
  return fetch(`${baseUrl}${path}`);
}

before(async () => {
  server = http.createServer(app);
  await new Promise((resolve) => server.listen(0, resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  await new Promise((resolve, reject) =>
    server.close((error) => (error ? reject(error) : resolve())),
  );
});

test("carrega a aplicação e renderiza a view inicial", async () => {
  const response = await request("/");
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(body, /Seu sorriso merece/);
  assert.match(body, /Clínica geral/);
  assert.match(body, /Dra\. Marina Costa/);
  assert.match(body, /id="main-navigation"/);
  assert.match(body, /href="\/"[^>]*>Início<\/a>/);
  assert.match(body, />Sobre</);
  assert.match(body, />Serviços</);
  assert.match(body, />Profissionais</);
  assert.match(body, />Convênios</);
  assert.match(body, />Contato</);
});

test("gera os links de WhatsApp, telefone, e-mail e mapa", async () => {
  const response = await request("/");
  const body = await response.text();

  assert.match(body, /https:\/\/wa\.me\/5511999990000/);
  assert.match(body, /href="tel:\+5511999990000"/);
  assert.match(body, /href="mailto:oi@sorrimed\.test"/);
  assert.match(body, /href="\/localizacao"/);
});

test("mantém Header e Footer apontando para as rotas institucionais", async () => {
  const response = await request("/");
  const body = await response.text();

  assert.match(body, /<a href="\/"[^>]*>Início<\/a>/);
  assert.match(body, /<a href="\/sobre">Sobre<\/a>/);
  assert.match(body, /<a href="\/servicos">Serviços<\/a>/);
  assert.match(body, /<a href="\/profissionais">Profissionais<\/a>/);
  assert.match(body, /<a href="\/convenios">Convênios<\/a>/);
  assert.match(body, /<a href="\/contato">Contato<\/a>/);
});

test("compartilha Header e Footer e marca a página ativa", async () => {
  const pages = [
    ["/", "Início"],
    ["/sobre", "Sobre"],
    ["/servicos", "Serviços"],
    ["/profissionais", "Profissionais"],
    ["/contato", "Contato"],
    ["/localizacao", null],
  ];

  for (const [path, label] of pages) {
    const response = await request(path);
    const body = await response.text();

    assert.equal(response.status, 200);
    assert.equal((body.match(/class="site-header"/g) || []).length, 1);
    assert.equal((body.match(/class="site-footer"/g) || []).length, 1);
    assert.doesNotMatch(
      body,
      /href="#(?:about|services|professionals|contact)"/,
    );
    const mainNavigation =
      body.match(/<nav id="main-navigation"[\s\S]*?<\/nav>/)?.[0] || "";
    assert.doesNotMatch(mainNavigation, />Localização<\/a>/);
    if (label)
      assert.match(body, new RegExp(`aria-current="page"[^>]*>${label}<\\/a>`));
  }
});

test("renderiza a página de contato com canais e links normalizados", async () => {
  const response = await request("/contato");
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(body, /<title>Contato \| SorriMed<\/title>/);
  assert.match(body, /href="https:\/\/wa\.me\/5511999990000"/);
  assert.match(body, /href="tel:\+5511999990000"/);
  assert.match(body, /href="mailto:oi@sorrimed\.test"/);
  assert.match(body, /Chamar no WhatsApp/);
});

test("renderiza contato com campos ausentes sem inventar canais", async () => {
  const original = dataLayer.getContactData;
  dataLayer.getContactData = () => ({ phone: "+55 (11) 00000-0000" });

  try {
    const response = await request("/contato");
    const body = await response.text();

    assert.equal(response.status, 200);
    assert.match(body, /href="tel:\+5511000000000"/);
    assert.doesNotMatch(body, /wa\.me/);
    assert.doesNotMatch(body, /mailto:/);
  } finally {
    dataLayer.getContactData = original;
  }
});

test("renderiza estado vazio de contato sem fallback fictício", async () => {
  const original = dataLayer.getContactData;
  dataLayer.getContactData = () => ({});

  try {
    const response = await request("/contato");
    const body = await response.text();

    assert.equal(response.status, 200);
    assert.match(body, /Ainda não há canais de contato disponíveis/);
    assert.doesNotMatch(body, /wa\.me|tel:|mailto:/);
  } finally {
    dataLayer.getContactData = original;
  }
});

test("propaga erro ao carregar contato sem fallback silencioso", () => {
  const response = {
    render: () => {
      throw new Error("render should not be called");
    },
  };
  const original = dataLayer.getContactData;
  dataLayer.getContactData = () => {
    throw new Error("Unable to read data file contact.json");
  };

  try {
    let handled = false;
    renderContactPage({}, response, (error) => {
      handled = true;
      assert.match(error.message, /contact\.json/);
    });
    assert.equal(handled, true);
  } finally {
    dataLayer.getContactData = original;
  }
});

test("responde o estado da aplicação", async () => {
  const response = await request("/health");
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.deepEqual(body.data.status, "ok");
});

test("serve arquivos públicos sem expor diretórios internos", async () => {
  const cssResponse = await request("/css/foundation.css");
  const sourceResponse = await request("/src/app.js");

  assert.equal(cssResponse.status, 200);
  assert.equal(sourceResponse.status, 404);
});

test("retorna 404 para rota inexistente", async () => {
  const response = await request("/rota-inexistente");
  const body = await response.text();

  assert.equal(response.status, 404);
  assert.match(body, /Página não encontrada/);
});

test("mantém o contrato de erro para futuras rotas da API", async () => {
  const response = await request("/api/v1/rota-inexistente");
  const body = await response.json();

  assert.equal(response.status, 404);
  assert.deepEqual(body, {
    success: false,
    error: {
      code: "NOT_FOUND",
      message: "Página não encontrada.",
    },
  });
});

test("carrega objeto válido na camada de dados", () => {
  const clinic = dataLayer.getClinicData();

  assert.equal(clinic.name, "SorriMed");
  assert.equal(clinic.description.includes("SorriMed"), true);
  assert.ok(Array.isArray(clinic.values));
});

test("carrega coleção válida na camada de dados", () => {
  const professionals = dataLayer.getProfessionalsData();

  assert.ok(Array.isArray(professionals));
  assert.equal(professionals.length, 3);
  assert.equal(professionals[0].name, "Dra. Marina Costa");
});

test("carrega os oito recursos JSON com estruturas básicas válidas", () => {
  const clinic = dataLayer.getClinicData();
  const professionals = dataLayer.getProfessionalsData();
  const services = dataLayer.getServicesData();
  const insurancePlans = dataLayer.getInsurancePlansData();
  const testimonials = dataLayer.getTestimonialsData();
  const media = dataLayer.getMediaData();
  const contact = dataLayer.getContactData();
  const location = dataLayer.getLocationData();

  assert.equal(typeof clinic.name, "string");
  assert.ok(Array.isArray(clinic.values));
  assert.ok(
    professionals.every(
      (item) => item.id && item.name && item.specialty && item.description,
    ),
  );
  assert.ok(
    services.every(
      (item) => item.id && item.name && item.description && "image" in item,
    ),
  );
  assert.ok(
    insurancePlans.every(
      (item) => item.id && item.name && "logo" in item && "description" in item,
    ),
  );
  assert.ok(
    testimonials.every(
      (item) => item.id && item.name && "photo" in item && item.text,
    ),
  );
  assert.ok(
    media.every(
      (item) =>
        item.id && item.type && item.url && item.title && item.description,
    ),
  );
  assert.equal(typeof contact.whatsapp, "string");
  assert.equal(typeof contact.phone, "string");
  assert.equal(typeof contact.email, "string");
  assert.equal(typeof location.address, "string");
  assert.equal(typeof location.mapUrl, "string");
});

test("propaga erro ao ler insurance-plans.json inválido", async () => {
  const temporaryDirectory = await fs.mkdtemp(
    path.join(os.tmpdir(), "sorrimed-insurance-"),
  );
  await fs.writeFile(
    path.join(temporaryDirectory, "insurance-plans.json"),
    "{invalid",
  );

  assert.throws(
    () => dataLayer.getInsurancePlansData(temporaryDirectory),
    /Unable to read data file insurance-plans\.json/,
  );

  await fs.rm(temporaryDirectory, { recursive: true });
});

test("lança erro para JSON inválido na camada de dados", async () => {
  const temporaryDirectory = await fs.mkdtemp(
    path.join(os.tmpdir(), "sorrimed-data-"),
  );
  await fs.writeFile(path.join(temporaryDirectory, "clinic.json"), "{invalid");

  assert.throws(
    () => dataLayer.getClinicData(temporaryDirectory),
    /Unable to read data file clinic\.json/,
  );

  await fs.rm(temporaryDirectory, { recursive: true });
});

test("lança erro para arquivo inexistente na camada de dados", async () => {
  const temporaryDirectory = await fs.mkdtemp(
    path.join(os.tmpdir(), "sorrimed-data-"),
  );

  assert.throws(
    () => dataLayer.getLocationData(temporaryDirectory),
    /Unable to read data file location\.json/,
  );

  await fs.rm(temporaryDirectory, { recursive: true });
});

test("aceita coleção vazia armazenada em JSON", async () => {
  const temporaryDirectory = await fs.mkdtemp(
    path.join(os.tmpdir(), "sorrimed-data-"),
  );
  await fs.writeFile(path.join(temporaryDirectory, "services.json"), "[]");

  assert.deepEqual(dataLayer.getServicesData(temporaryDirectory), []);

  await fs.rm(temporaryDirectory, { recursive: true });
});

test("propaga erro quando dados da Home estão inválidos", async () => {
  const temporaryDirectory = await fs.mkdtemp(
    path.join(os.tmpdir(), "sorrimed-home-"),
  );
  await fs.writeFile(path.join(temporaryDirectory, "clinic.json"), "{invalid");

  assert.throws(
    () => getHomeData(temporaryDirectory),
    /Unable to read data file clinic\.json/,
  );

  await fs.rm(temporaryDirectory, { recursive: true });
});

test("carrega os dados de serviços pela camada de dados", () => {
  const services = getServicesData();

  assert.ok(Array.isArray(services));
  assert.equal(services.length > 0, true);
  assert.equal(services[0].name, "Clínica geral");
});

test("renderiza a página de serviços em /servicos", async () => {
  const response = await request("/servicos");
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(body, /Serviços/);
  assert.match(body, /Clínica geral/);
  assert.match(body, /Ortodontia/);
  assert.match(body, /Estética dental/);
});

test("renderiza a página Sobre em /sobre com os dados institucionais", async () => {
  const response = await request("/sobre");
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(body, /<title>Sobre \| SorriMed<\/title>/);
  assert.match(body, /SorriMed/);
  assert.match(body, /cuidado odontológico claro, próximo e responsável/i);
  assert.match(body, /Atendimento humanizado/);
  assert.match(body, /Equipe multidisciplinar/);
  assert.match(body, /https:\/\/wa\.me\/5511999990000/);
});

test("renderiza estado vazio de Sobre sem inventar conteúdo", () => {
  let renderPayload;
  const response = {
    render: (page, context) => {
      renderPayload = { page, context };
    },
  };
  const original = dataLayer.getClinicData;
  dataLayer.getClinicData = () => ({});

  try {
    renderAboutPage({}, response, () => {
      throw new Error("next should not be called");
    });
    assert.equal(renderPayload.page, "layouts/main");
    assert.deepEqual(renderPayload.context.clinic, {});
  } finally {
    dataLayer.getClinicData = original;
  }
});

test("propaga erro ao carregar Sobre sem fallback silencioso", () => {
  const response = {
    render: () => {
      throw new Error("render should not be called");
    },
  };
  const original = dataLayer.getClinicData;
  dataLayer.getClinicData = () => {
    throw new Error("Unable to read data file clinic.json");
  };

  try {
    let handled = false;
    renderAboutPage({}, response, (error) => {
      handled = true;
      assert.match(error.message, /clinic\.json/);
    });
    assert.equal(handled, true);
  } finally {
    dataLayer.getClinicData = original;
  }
});

test("renderiza estado vazio da página de serviços sem converter em erro silencioso", () => {
  let renderPayload;
  const response = {
    render: (page, context) => {
      renderPayload = { page, context };
    },
  };

  const original = dataLayer.getServicesData;
  dataLayer.getServicesData = () => [];

  try {
    renderServicesPage({}, response, () => {
      throw new Error("next should not be called");
    });

    assert.equal(renderPayload.page, "layouts/main");
    assert.equal(renderPayload.context.page, "services");
    assert.deepEqual(renderPayload.context.services, []);
    assert.match(renderPayload.context.title, /Serviços/);
  } finally {
    dataLayer.getServicesData = original;
  }
});

test("propaga erro ao carregar serviços sem converter em lista vazia", () => {
  const response = {
    render: () => {
      throw new Error("render should not be called");
    },
  };

  const original = dataLayer.getServicesData;
  dataLayer.getServicesData = () => {
    throw new Error("Unable to read data file services.json");
  };

  try {
    let handled = false;
    renderServicesPage({}, response, (error) => {
      handled = true;
      assert.match(error.message, /services\.json/);
    });

    assert.equal(handled, true);
  } finally {
    dataLayer.getServicesData = original;
  }
});

test("carrega os profissionais pela camada de dados", () => {
  const professionals = getProfessionalsData();

  assert.ok(Array.isArray(professionals));
  assert.equal(professionals.length, 3);
  assert.equal(professionals[0].name, "Dra. Marina Costa");
});

test("renderiza a página de profissionais em /profissionais", async () => {
  const response = await request("/profissionais");
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(body, /Profissionais/);
  assert.match(body, /Dra\. Marina Costa/);
  assert.match(body, /Dr\. Rafael Nunes/);
  assert.match(body, /Dra\. Lívia Martins/);
});

test("renderiza estado vazio da página de profissionais sem converter em erro silencioso", () => {
  let renderPayload;
  const response = {
    render: (page, context) => {
      renderPayload = { page, context };
    },
  };

  const original = dataLayer.getProfessionalsData;
  dataLayer.getProfessionalsData = () => [];

  try {
    renderProfessionalsPage({}, response, () => {
      throw new Error("next should not be called");
    });

    assert.equal(renderPayload.page, "layouts/main");
    assert.equal(renderPayload.context.page, "professionals");
    assert.deepEqual(renderPayload.context.professionals, []);
    assert.match(renderPayload.context.title, /Profissionais/);
  } finally {
    dataLayer.getProfessionalsData = original;
  }
});

test("propaga erro ao carregar profissionais sem converter em lista vazia", () => {
  const response = {
    render: () => {
      throw new Error("render should not be called");
    },
  };

  const original = dataLayer.getProfessionalsData;
  dataLayer.getProfessionalsData = () => {
    throw new Error("Unable to read data file professionals.json");
  };

  try {
    let handled = false;
    renderProfessionalsPage({}, response, (error) => {
      handled = true;
      assert.match(error.message, /professionals\.json/);
    });

    assert.equal(handled, true);
  } finally {
    dataLayer.getProfessionalsData = original;
  }
});

test("o menu principal aponta para /profissionais", async () => {
  const response = await request("/");
  const body = await response.text();

  assert.match(body, /href="\/profissionais"/);
});

test("o menu principal aponta Sobre para /sobre", async () => {
  const response = await request("/");
  const body = await response.text();

  assert.match(body, /<a href="\/sobre">Sobre<\/a>/);
});

test("carrega os convênios pela camada de dados", () => {
  const insurancePlans = getInsurancePlansData();

  assert.ok(Array.isArray(insurancePlans));
  assert.equal(insurancePlans.length, 3);
  assert.equal(insurancePlans[0].name, "Plano Sorriso Essencial");
});

test("renderiza a página de convênios com cards e fallback de logo", async () => {
  const response = await request("/convenios");
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(body, /Plano Sorriso Essencial/);
  assert.match(body, /Rede Bem-Estar Dental/);
  assert.match(body, /Programa fictício criado para validar/);
  assert.match(body, /<span>PS<\/span>/);
  assert.match(body, /Chamar no WhatsApp/);
});

test("renderiza estado vazio da página de convênios sem converter em erro silencioso", () => {
  let renderPayload;
  const response = {
    render: (page, context) => {
      renderPayload = { page, context };
    },
  };

  const original = dataLayer.getInsurancePlansData;
  dataLayer.getInsurancePlansData = () => [];

  try {
    renderInsurancePlansPage({}, response, () => {
      throw new Error("next should not be called");
    });

    assert.equal(renderPayload.page, "layouts/main");
    assert.equal(renderPayload.context.page, "insurance-plans");
    assert.deepEqual(renderPayload.context.insurancePlans, []);
    assert.match(renderPayload.context.title, /Convênios/);
  } finally {
    dataLayer.getInsurancePlansData = original;
  }
});

test("propaga erro ao carregar convênios sem converter em lista vazia", () => {
  const response = {
    render: () => {
      throw new Error("render should not be called");
    },
  };

  const original = dataLayer.getInsurancePlansData;
  dataLayer.getInsurancePlansData = () => {
    throw new Error("Unable to read data file insurance-plans.json");
  };

  try {
    let handled = false;
    renderInsurancePlansPage({}, response, (error) => {
      handled = true;
      assert.match(error.message, /insurance-plans\.json/);
    });

    assert.equal(handled, true);
  } finally {
    dataLayer.getInsurancePlansData = original;
  }
});

test("o menu principal aponta para /convenios", async () => {
  const response = await request("/");
  const body = await response.text();

  assert.match(body, /href="\/convenios"/);
});

test("renderiza a página de localização em /localizacao com endereço e mapa", async () => {
  const response = await request("/localizacao");
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(body, /<title>Localização \| SorriMed<\/title>/);
  assert.match(body, /Rua das Acácias, 240/);
  assert.match(body, /href="https:\/\/www\.google\.com\/maps\/search[^"]*"/);
  assert.match(body, /target="_blank"/);
  assert.match(body, /rel="noopener noreferrer"/);
  assert.match(body, /https:\/\/wa\.me\/5511999990000/);
});

test("renderiza dados parciais de localização sem quebrar a página", async () => {
  const original = dataLayer.getLocationData;
  dataLayer.getLocationData = () => ({ address: "Rua Parcial, 10" });

  try {
    const response = await request("/localizacao");
    const body = await response.text();

    assert.equal(response.status, 200);
    assert.match(body, /Rua Parcial, 10/);
    assert.doesNotMatch(body, /Abrir no mapa/);
  } finally {
    dataLayer.getLocationData = original;
  }
});

test("renderiza estado vazio de localização sem inventar endereço ou mapa", async () => {
  const original = dataLayer.getLocationData;
  dataLayer.getLocationData = () => ({});

  try {
    const response = await request("/localizacao");
    const body = await response.text();

    assert.equal(response.status, 200);
    assert.match(body, /Ainda não há informações de localização disponíveis/);
    assert.doesNotMatch(body, /Abrir no mapa/);
  } finally {
    dataLayer.getLocationData = original;
  }
});

test("propaga erro ao carregar localização sem fallback silencioso", () => {
  const response = {
    render: () => {
      throw new Error("render should not be called");
    },
  };

  const original = dataLayer.getLocationData;
  dataLayer.getLocationData = () => {
    throw new Error("Unable to read data file location.json");
  };

  try {
    let handled = false;
    renderLocationPage({}, response, (error) => {
      handled = true;
      assert.match(error.message, /location\.json/);
    });

    assert.equal(handled, true);
  } finally {
    dataLayer.getLocationData = original;
  }
});

test("a Home aponta para a página de localização", async () => {
  const response = await request("/");
  const body = await response.text();

  assert.match(body, /href="\/localizacao"/);
  assert.match(body, /Abrir no Google Maps/);
});
