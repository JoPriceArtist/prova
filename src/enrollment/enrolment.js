//Seems to work fine.  TODO tests

const feesFreeAllowedVisaType = {
    CITIZEN: 'CITIZEN',
    RESIDENT: 'RESIDENT',
    REFUGEE: 'REFUGEE',
    CHCH_RESPONSE: 'CHCH_RESPONSE',
}

const FEES_FREE_CUTOFF_YEAR = 2019;

const feesFreeEligible = (enrolmentYear, visaType, isAdultLearner) => {
    if (enrolmentYear < FEES_FREE_CUTOFF_YEAR) {
        return false;
    }
    if (isAdultLearner) {
        return false;
    }
    if (!Object.values(feesFreeAllowedVisaType).includes(visaType)) {
        return false;
    }
    return true;
}

module.exports = { feesFreeEligible }

