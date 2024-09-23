const axios = require("axios");
const config = require("../config/config");

const buildSoapEnvelope = (method, params) => {
  let soapBody = "";
  for (const key in params) {
    soapBody += `<${key}>${params[key]}</${key}>`;
  }

  return `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://127.0.0.1:8000/soap-server">
      <soapenv:Header/>
      <soapenv:Body>
        <ws:${method}>
          ${soapBody}
        </ws:${method}>
      </soapenv:Body>
    </soapenv:Envelope>
  `;
};

const callSoapService = async (method, params) => {
  const soapEnvelope = buildSoapEnvelope(method, params);

  try {
    const response = await axios.post(config.soapServiceUrl, soapEnvelope, {
      headers: {
        "Content-Type": "text/xml",
        SOAPAction: `http://127.0.0.1:8000/soap-server#${method}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error en ${method}:`, error.message);
    throw new Error(`Error al llamar al método ${method} en SOAP`);
  }
};

module.exports = {
  registerClient: async (data) => {
    try {
      console.log("Llamando a registerClient en SOAP con los datos:", data);
      const result = await callSoapService("registerClient", data);
      console.log("Respuesta de registerClient:", result);
      return result;
    } catch (error) {
      console.error("Error en registerClient (truncado):", error.message);
      throw new Error("Error al registrar cliente en SOAP");
    }
  },
  loadWallet: async (data) => {
    try {
      console.log("Llamando a loadWallet en SOAP con los datos:", data);
      const result = await callSoapService("loadWallet", data);
      console.log("Respuesta de loadWallet:", result);
      return result;
    } catch (error) {
      console.error("Error en loadWallet (truncado):", error.message);
      throw new Error("Error al recargar billetera en SOAP");
    }
  },
  makePayment: async (data) => {
    try {
      console.log("Llamando a makePayment en SOAP con los datos:", data);
      const result = await callSoapService("makePayment", data);
      console.log("Respuesta de makePayment:", result);
      return result;
    } catch (error) {
      console.error("Error en makePayment (truncado):", error.message);
      throw new Error("Error al realizar el pago en SOAP");
    }
  },
  confirmPayment: async (data) => {
    try {
      console.log("Llamando a confirmPayment en SOAP con los datos:", data);
      const result = await callSoapService("confirmPayment", data);
      console.log("Respuesta de confirmPayment:", result);
      return result;
    } catch (error) {
      console.error("Error en confirmPayment (truncado):", error.message);
      throw new Error("Error al confirmar el pago en SOAP");
    }
  },
  checkBalance: async (data) => {
    try {
      console.log("Llamando a checkBalance en SOAP con los datos:", data);
      const result = await callSoapService("checkBalance", data);
      console.log("Respuesta de checkBalance:", result);
      return result;
    } catch (error) {
      console.error("Error en checkBalance (truncado):", error.message);
      throw new Error("Error al consultar el saldo en SOAP");
    }
  },
};
