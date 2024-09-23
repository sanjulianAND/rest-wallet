require("dotenv").config();

module.exports = {
  soapServiceUrl:
    process.env.SOAP_SERVICE_URL || "http://127.0.0.1:8000/soap-server?wsdl",
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || "development",
};
