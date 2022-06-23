const express = require('express');
const { DigiByteService } = require('../Services/DigiByteService');

const router = express.Router();

const digiByteService = new DigiByteService();

router.get('/wallet/new', (req, res) => {
  try {
    const wallet = DigiByteService.getNewWallet();
    res.json({ wallet });
  } catch (error) {
    res.json({ error: error?.message });
  }
});

router.get('/wallet/balance/:address', async (req, res) => {
  try {
    const { address } = req.params;
    const balance = await digiByteService.getWalletBalance(address);
    res.json({
      balance,
    });
  } catch (error) {
    res.json({ error: error?.message });
  }
});

router.post('/transactions', async (req, res) => {
  try {
    const {
      to, from, privateKey, amount,
    } = req.body;
    const result = await digiByteService.sendTransaction(to, from, privateKey, amount);
    res.json({
      ...result,
    });
  } catch (error) {
    res.json({ error: error?.message });
  }
});

router.get('/transactions/in/:address', async (req, res) => {
  try {
    const { address } = req.params;
    const transactions = await digiByteService.getIncommingTransactions(address);
    res.json({
      transactions,
    });
  } catch (error) {
    res.json({ error: error?.message });
  }
});

module.exports = router;
