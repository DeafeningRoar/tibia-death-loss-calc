export function calculateLoss(level, promotion, vocation){

    var promoReduction = 1;

    if(promotion)
    {
        promoReduction = 0.7;
    }
    

    var baseExpLoss =  ( (level + 50) / 100 ) * 50 * (Math.pow(level, 2) - 5 * level + 8);
    var totalExp = (50/3) * (Math.pow(level, 3) - 6*Math.pow(level, 2) + 17 * level - 12);

    var blessExpLoss = level < 25 ? baseExpLoss * 0.1 : baseExpLoss * (Math.pow(0.92, 5)*promoReduction);
    var blessLevelLoss = blessExpLoss / totalExp;

    var noBlessExpLoss = level < 25 ? baseExpLoss * 0.1 : baseExpLoss * promoReduction;
    var noBlessLevelLoss = noBlessExpLoss / totalExp;

    var hitpoints = 185;
    var manapoints = 90;
    var capacity = 470;

    if(vocation === 'knight'){
        hitpoints += ((level - 8) * 15);
        manapoints += ((level - 8) * 5);
        capacity += ((level - 8) * 25);
    } else if(vocation === 'paladin'){
        hitpoints += ((level - 8) * 10);
        manapoints += ((level - 8) * 15);
        capacity += ((level - 8) * 20);
    } else if(vocation === 'sorcerer' || vocation === 'druid') {
        hitpoints += ((level - 8) * 5);
        manapoints += ((level - 8) * 30);
        capacity += ((level - 8) * 10);
    }

    var results = {
        blessExpLoss,
        blessLevelLoss,
        noBlessExpLoss,
        noBlessLevelLoss,
        hitpoints,
        manapoints,
        capacity
    };

    return results;
};
