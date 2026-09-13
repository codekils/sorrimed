const dataLayer = require("../data");

function renderInsurancePlansPage(request, response, next) {
  try {
    const insurancePlans = dataLayer.getInsurancePlansData();
    const contact = dataLayer.getContactData();
    const location = dataLayer.getLocationData();

    response.render("layouts/main", {
      page: "insurance-plans",
      title: "Convênios | SorriMed",
      description:
        "Conheça os convênios e planos aceitos pela SorriMed e converse com a equipe sobre seu atendimento.",
      insurancePlans,
      contact,
      location,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { renderInsurancePlansPage };
