const dataLayer = require("../data");

function renderServicesPage(request, response, next) {
  try {
    const services = dataLayer.getServicesData();
    const contact = dataLayer.getContactData();
    const location = dataLayer.getLocationData();

    response.render("layouts/main", {
      page: "services",
      title: "Serviços | SorriMed",
      description:
        "Conheça os serviços odontológicos da SorriMed e fale com a equipe para agendar sua consulta.",
      services,
      contact,
      location,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { renderServicesPage };
