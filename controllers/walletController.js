const soapService = require("../services/soapService");

module.exports = {
  registerClient: async (req, res) => {
    try {
      const { documento, nombres, email, celular } = req.body;
      const result = await soapService.registerClient({
        documento,
        nombres,
        email,
        celular,
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        success: false,
        cod_error: 500,
        message_error: "Error en el servidor",
      });
    }
  },
  loadWallet: async (req, res) => {
    try {
      const { cliente_id, monto } = req.body;
      const result = await soapService.loadWallet({ cliente_id, monto });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        success: false,
        cod_error: 500,
        message_error: "Error en el servidor",
      });
    }
  },
  makePayment: async (req, res) => {
    try {
      const { cliente_id, monto } = req.body;
      const result = await soapService.makePayment({ cliente_id, monto });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        success: false,
        cod_error: 500,
        message_error: "Error en el servidor",
      });
    }
  },
  confirmPayment: async (req, res) => {
    try {
      const { id_sesion, token } = req.body;
      const result = await soapService.confirmPayment({ id_sesion, token });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        success: false,
        cod_error: 500,
        message_error: "Error en el servidor",
      });
    }
  },
  checkBalance: async (req, res) => {
    try {
      const { cliente_id } = req.query;
      const result = await soapService.checkBalance({ cliente_id });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        success: false,
        cod_error: 500,
        message_error: "Error en el servidor",
      });
    }
  },
};
