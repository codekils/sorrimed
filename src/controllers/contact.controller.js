const dataLayer = require("../data");

function renderContactPage(request, response, next) {
  try {
    const contact = dataLayer.getContactData();
    const location = dataLayer.getLocationData();

    response.render("layouts/main", {
      page: "contact",
      title: "Contato | SorriMed",
      description:
        "Fale com a SorriMed pelo WhatsApp, telefone ou e-mail e agende seu atendimento.",
      contact,
      location,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { renderContactPage };
