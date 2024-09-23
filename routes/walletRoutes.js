const express = require("express");
const router = express.Router();
const walletController = require("../controllers/walletController");

console.log(walletController);

router.post("/register-client", walletController.registerClient);
router.post("/load-wallet", walletController.loadWallet);
router.post("/make-payment", walletController.makePayment);
router.post("/confirm-payment", walletController.confirmPayment);
router.get("/check-balance", walletController.checkBalance);

module.exports = router;
