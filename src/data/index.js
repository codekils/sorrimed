const fs = require('node:fs');
const path = require('node:path');

const DEFAULT_DATA_DIRECTORY = path.resolve(__dirname, '..', '..', 'data');

function readJsonData(filename, dataDirectory = DEFAULT_DATA_DIRECTORY) {
  const resolvedDataDirectory = path.resolve(dataDirectory || DEFAULT_DATA_DIRECTORY);
  const filePath = path.join(resolvedDataDirectory, filename);

  let rawData;

  try {
    rawData = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    throw new Error(`Unable to read data file ${filename}: ${error.message}`);
  }

  try {
    return JSON.parse(rawData);
  } catch (error) {
    throw new Error(`Unable to read data file ${filename}: Invalid JSON: ${error.message}`);
  }
}

function getClinicData(dataDirectory = DEFAULT_DATA_DIRECTORY) {
  return readJsonData('clinic.json', dataDirectory);
}

function getProfessionalsData(dataDirectory = DEFAULT_DATA_DIRECTORY) {
  return readJsonData('professionals.json', dataDirectory);
}

function getServicesData(dataDirectory = DEFAULT_DATA_DIRECTORY) {
  return readJsonData('services.json', dataDirectory);
}

function getInsurancePlansData(dataDirectory = DEFAULT_DATA_DIRECTORY) {
  return readJsonData('insurance-plans.json', dataDirectory);
}

function getTestimonialsData(dataDirectory = DEFAULT_DATA_DIRECTORY) {
  return readJsonData('testimonials.json', dataDirectory);
}

function getMediaData(dataDirectory = DEFAULT_DATA_DIRECTORY) {
  return readJsonData('media.json', dataDirectory);
}

function getContactData(dataDirectory = DEFAULT_DATA_DIRECTORY) {
  return readJsonData('contact.json', dataDirectory);
}

function getLocationData(dataDirectory = DEFAULT_DATA_DIRECTORY) {
  return readJsonData('location.json', dataDirectory);
}

function getHomeData(dataDirectory = DEFAULT_DATA_DIRECTORY) {
  return {
    clinic: getClinicData(dataDirectory),
    services: getServicesData(dataDirectory),
    professionals: getProfessionalsData(dataDirectory),
    testimonials: getTestimonialsData(dataDirectory),
    media: getMediaData(dataDirectory),
    contact: getContactData(dataDirectory),
    location: getLocationData(dataDirectory),
  };
}

module.exports = {
  DEFAULT_DATA_DIRECTORY,
  readJsonData,
  getClinicData,
  getProfessionalsData,
  getServicesData,
  getInsurancePlansData,
  getTestimonialsData,
  getMediaData,
  getContactData,
  getLocationData,
  getHomeData,
};
