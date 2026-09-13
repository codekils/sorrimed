const { getHomeData, getInsurancePlansData } = require("../data");

function renderHomePage(request, response, next) {
  try {
    const home = getHomeData();
    home.insurancePlans = getInsurancePlansData();
    response.render("layouts/main", {
      page: "home",
      title: "SorriMed | Odontologia com cuidado próximo",
      description: home.clinic.shortDescription,
      home,
      contact: home.contact,
      location: home.location,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { renderHomePage };
