const dataLayer = require("../data");

function renderAboutPage(request, response, next) {
  try {
    const clinic = dataLayer.getClinicData();
    const contact = dataLayer.getContactData();
    const location = dataLayer.getLocationData();

    response.render("layouts/main", {
      page: "about",
      title: "Sobre | SorriMed",
      description: clinic.description,
      clinic,
      contact,
      location,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { renderAboutPage };
