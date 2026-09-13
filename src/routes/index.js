const express = require("express");
const { renderHomePage } = require("../controllers/home.controller");
const { renderAboutPage } = require("../controllers/about.controller");
const { renderServicesPage } = require("../controllers/services.controller");
const {
  renderProfessionalsPage,
} = require("../controllers/professionals.controller");
const {
  renderInsurancePlansPage,
} = require("../controllers/insurance-plans.controller");
const { renderContactPage } = require("../controllers/contact.controller");
const { renderLocationPage } = require("../controllers/location.controller");
const { getHealth } = require("../controllers/health.controller");

const router = express.Router();

router.get("/", renderHomePage);
router.get("/sobre", renderAboutPage);
router.get("/servicos", renderServicesPage);
router.get("/profissionais", renderProfessionalsPage);
router.get("/convenios", renderInsurancePlansPage);
router.get("/localizacao", renderLocationPage);
router.get("/contato", renderContactPage);
router.get("/health", getHealth);

module.exports = router;
