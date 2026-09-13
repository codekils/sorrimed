const dataLayer = require("../data");

function renderProfessionalsPage(request, response, next) {
  try {
    const professionals = dataLayer.getProfessionalsData();
    const contact = dataLayer.getContactData();
    const location = dataLayer.getLocationData();

    response.render("layouts/main", {
      page: "professionals",
      title: "Profissionais | SorriMed",
      description:
        "Conheça a equipe de profissionais da SorriMed e descubra o cuidado que acompanha cada fase do seu sorriso.",
      professionals,
      contact,
      location,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { renderProfessionalsPage };
