export function calculateLoss(level, promotion, blessings){

    var baseExpLoss =  ( (level + 50) / 100 ) * 50 * (Math.pow(level, 2) - 5 * level + 8);
    var promoReduction = promotion ? (Math.pow(0.92, blessings.length)*0.7) : Math.pow(0.92, blessings.length);
    var totalExp = (50/3) * (Math.pow(level, 3) - 6*Math.pow(level, 2) + 17 * level - 12);

    var finalLoss = level < 25 ? baseExpLoss * 0.1 : baseExpLoss * promoReduction;
    var levelLoss = finalLoss / totalExp;

    var results = {
        expLoss: finalLoss,
        levelLoss
    };

    return{
        type: "EXP_LOSS",
        payload: results
    };

};