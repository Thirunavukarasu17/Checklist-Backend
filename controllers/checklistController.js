const { fetchChecklistData } = require('../services/checklistService');
const checklistRules = require('../config/checklistRules');

const evaluateChecklist = async (req, res) => {
    try {
        const data = await fetchChecklistData();


        const results = checklistRules.map((rule) => ({
            ruleName: rule.name,
            status: rule.condition(data) ? 'Passed' : 'Failed',
        }));

  
        const applicationDetails = {
            applicationNumber: data.applicationNumber,
            applicationTypeName:data.applicationTypeName,
            brokerName: data.brokerID.firstName,
            brokerEmail: data.brokerID.email,
            solicitorName: data.solicitorID.nameOfAccountHolder,
            solicitorFirm: data.solicitorID.nameOfFirm,
            ltv: data.ltv,
        };

        res.json({ applicationDetails, results });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { evaluateChecklist };
