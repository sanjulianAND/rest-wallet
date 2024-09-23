const soap = require("soap");
const config = require("../config/config");

let soapClient = null;

const getSoapClient = async () => {
  if (!soapClient) {
    try {
      console.log("Intentando crear cliente SOAP en:", config.soapServiceUrl);
      soapClient = await soap.createClientAsync(config.soapServiceUrl);
      console.log("Cliente SOAP creado exitosamente");
    } catch (error) {
      const truncatedMessage = error.message.substring(0, 500);
      console.error(
        "Error al crear el cliente SOAP (truncado):",
        truncatedMessage
      );
      throw new Error("Error al conectar con el servicio SOAP");
    }
  }
  return soapClient;
};

module.exports = {
  registerClient: async (data) => {
    try {
      console.log("Llamando a registerClient en SOAP con los datos:", data);
      const client = await getSoapClient();
      const result = await client.registerClientAsync(data);
      console.log("Respuesta de registerClient:", result);
      return result[0];
    } catch (error) {
      const truncatedMessage = error.message.substring(0, 500);
      console.error("Error en registerClient (truncado):", truncatedMessage);
      throw new Error("Error al registrar cliente en SOAP");
    }
  },
  loadWallet: async (data) => {
    try {
      console.log("Llamando a loadWallet en SOAP con los datos:", data);
      const client = await getSoapClient();
      const result = await client.loadWalletAsync(data);
      console.log("Respuesta de loadWallet:", result);
      return result[0];
    } catch (error) {
      const truncatedMessage = error.message.substring(0, 500);
      console.error("Error en loadWallet (truncado):", truncatedMessage);
      throw new Error("Error al recargar billetera en SOAP");
    }
  },
  makePayment: async (data) => {
    try {
      console.log("Llamando a makePayment en SOAP con los datos:", data);
      const client = await getSoapClient();
      const result = await client.makePaymentAsync(data);
      console.log("Respuesta de makePayment:", result);
      return result[0];
    } catch (error) {
      const truncatedMessage = error.message.substring(0, 500);
      console.error("Error en makePayment (truncado):", truncatedMessage);
      throw new Error("Error al realizar el pago en SOAP");
    }
  },
  confirmPayment: async (data) => {
    try {
      console.log("Llamando a confirmPayment en SOAP con los datos:", data);
      const client = await getSoapClient();
      const result = await client.confirmPaymentAsync(data);
      console.log("Respuesta de confirmPayment:", result);
      return result[0];
    } catch (error) {
      const truncatedMessage = error.message.substring(0, 500);
      console.error("Error en confirmPayment (truncado):", truncatedMessage);
      throw new Error("Error al confirmar el pago en SOAP");
    }
  },
  checkBalance: async (data) => {
    try {
      console.log("Llamando a checkBalance en SOAP con los datos:", data);
      const client = await getSoapClient();
      const result = await client.checkBalanceAsync(data);
      console.log("Respuesta de checkBalance:", result);
      return result[0];
    } catch (error) {
      const truncatedMessage = error.message.substring(0, 500);
      console.error("Error en checkBalance (truncado):", truncatedMessage);
      throw new Error("Error al consultar el saldo en SOAP");
    }
  },
};
