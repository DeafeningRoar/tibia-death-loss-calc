export function calculateLoss(level, promotion, vocation){
   
    var promoReduction = promotion && level >= 20 ? 0.7 : 1;
 
    var baseExpLoss =  ( (level + 50) / 100 ) * 50 * (Math.pow(level, 2) - 5 * level + 8);
    var totalExp = (50/3) * (Math.pow(level, 3) - 6*Math.pow(level, 2) + 17 * level - 12);

    var blessExpLoss = level <= 24 ? baseExpLoss * 0.1 : baseExpLoss * (0.2 * promoReduction);
    var blessLevelLoss = blessExpLoss / totalExp;

    var noBlessExpLoss = level <= 24 ? baseExpLoss * 0.1 : (baseExpLoss * promoReduction);
    var noBlessLevelLoss = noBlessExpLoss / totalExp;

    var hitpoints = calculateStats(level, vocation).hitpoints;
    var manapoints = calculateStats(level, vocation).manapoints;
    var capacity = calculateStats(level, vocation).capacity;

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


function calculateStats(level, vocation){
    
    var hitpoints = 145;
    var manapoints = 50;
    var capacity = 390;


    if(level <= 8){
        hitpoints += (level * 5);
        manapoints += (level * 5);
        capacity += (level * 10);
    } else if(vocation === 'knight'){
        hitpoints +=  ((level - 8) * 15);
        manapoints += ((level - 8) * 5);
        capacity += ((level - 8) * 25);
    } else if(vocation === 'paladin'){
        hitpoints += ((level - 8) * 10);
        manapoints +=((level - 8) * 15);
        capacity += ((level - 8) * 20);
    } else if(vocation === 'sorcerer' || vocation === 'druid') {
        hitpoints += ((level - 8) * 5);
        manapoints += ((level - 8) * 30);
        capacity += ((level - 8) * 10);
    }

    var results = {
        hitpoints,
        manapoints,
        capacity
    }

    return results;
}