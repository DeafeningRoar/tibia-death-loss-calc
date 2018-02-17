const calculateStats = function(level, vocation){
    level = Number(level);

    var hitpoints = 145;
    var manapoints = 50;
    var capacity = 390;

    if(level <= 8){
        hitpoints += (level * 5);
        manapoints += (level * 5);
        capacity += (level * 10);
    } else if(vocation === 'knight'){
        hitpoints +=  (40 + (level - 8) * 15);
        manapoints += (40 + (level - 8) * 5);
        capacity += (80 + (level - 8) * 25);
    } else if(vocation === 'paladin'){
        hitpoints += (40 + (level - 8) * 10);
        manapoints +=(40 + (level - 8) * 15);
        capacity += (80 + (level - 8) * 20);
    } else if(vocation === 'sorcerer' || vocation === 'druid') {
        hitpoints += (40 + (level - 8) * 5);
        manapoints += (40 + (level - 8) * 30);
        capacity += (80 + (level - 8) * 10);
    }

    var results = {
        hitpoints,
        manapoints,
        capacity
    }

    return results;
}


var baseExpLoss = function(level){
    level = Number(level);
    var result = (( (level + 50) / 100 ) * 50 * (Math.pow(level, 2) - 5 * level + 8));
    return result;
}

const totalExp = function(level){
    var result = ((50/3) * (Math.pow(level, 3) - 6*Math.pow(level, 2) + 17 * level - 12));
    return result;
}

const expLoss = function(level, base, promotion, hc, bless){
    level = Number(level);
    var reduc = hc ? 1.16 : 1;
    var blessReduc = bless ? (0.08 * 7) : 0;
    var promoReduction = promotion && level >= 20 ? 0.3 : 0;

    var result = level <= 24 ? Math.round(base * 0.1) : Math.round(base * (reduc - (blessReduc + promoReduction)));
    return  result;
}

const levelLoss = function(expLoss, totalExp){
    var result = Math.round((expLoss / totalExp) * 100) / 100;
    return result;
}

export default { calculateStats, levelLoss, expLoss, baseExpLoss, totalExp };