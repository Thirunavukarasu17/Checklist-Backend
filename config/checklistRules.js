module.exports = [
    {
        name: 'Valuation Fee Paid',
        condition: (data) => data.isValuationFeePaid === true,
    },
    {
        name: 'UK Resident',
        condition: (data) => data.isUkResident === true,
    },
    {
        name: 'Risk Rating Medium',
        condition: (data) => data.riskRating === 'Medium',
    },
    {
        name: 'LTV [Loan To Value] Below 60%',
        condition: (data) => {
            const ltv = parseFloat(data.ltv.replace('%', ''));
            return ltv < 60;
        },
    },
];
