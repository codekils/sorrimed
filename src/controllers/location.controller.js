const dataLayer = require("../data");

function renderLocationPage(request, response, next) {
  try {
    const location = dataLayer.getLocationData();
    const contact = dataLayer.getContactData();

    response.render("layouts/main", {
      page: "location",
      title: "Localização | SorriMed",
      description:
        "Veja onde a SorriMed está localizada e abra o endereço no mapa.",
      location,
      contact,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { renderLocationPage };
