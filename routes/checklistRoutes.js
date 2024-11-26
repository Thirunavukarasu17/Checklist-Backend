const express = require('express');
const { evaluateChecklist } = require('../controllers/checklistController');

const router = express.Router();

router.get('/', evaluateChecklist);

module.exports = router;
