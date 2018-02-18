import Numeral from 'numeral';

const defaultValues = {
    totalExp: '',
    stats: {
        hitpoints: '',
        manapoints: '',
        capacity: ''
    },
    fbExpLoss: '',
    nFbExpLoss: '',
    hcfbExpLoss: '',
    hcNfbExpLoss: ''
};

const calculateStats = function(level, vocation){
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
        hitpoints: Numeral(hitpoints).format('0,0'),
        manapoints: Numeral(manapoints).format('0,0'),
        capacity: Numeral(capacity).format('0,0')
    }

    return results;
}


var baseExperienceLoss = function(level, totalExp){
    var result = level < 25 ? 0.1 * totalExp : (( (level + 50) / 100 ) * 50 * (Math.pow(level, 2) - 5 * level + 8));
    return result;
}

const totalExperience = function(level){
    var result = ((50/3) * (Math.pow(level, 3) - 6*Math.pow(level, 2) + 17 * level - 12));
    return result;
}

const expLoss = function(level, base, promotion, hc, bless){
    var reduc = hc ? 1.16 : 1;
    var blessReduc = bless ? (0.08 * 7) : 0;
    var promoReduction = promotion && level >= 20 ? 0.3 : 0;

    var result = base * (reduc - (blessReduc + promoReduction));
    return  result;
}

const expLossCustomBless = function(level, base, promotion, hc, bless){
    var reduc = hc ? 1.16 : 1;
    var blessReduc = (0.08 * bless.length);
    var promoReduction = promotion && level >= 20 ? 0.3 : 0;

    var result = base * (reduc - (blessReduc + promoReduction));
    return  result;
}

const totalResults = function(level, voc, promo){
    level = Number(level);
    

    if(level <= 0){
        return defaultValues;
    }else if(level === 1){
        var stats = calculateStats(level, voc);

        return {
            stats,
            totalExp: 0,
            fbExpLoss: 0,
            nFbExpLoss: 0,
            hcfbExpLoss: 0,
            hcNfbExpLoss: 0
        }
    } else if(level > 1){
        var stats = calculateStats(level, voc);
    
        var totalExp = totalExperience(level);
        var baseExpLoss = baseExperienceLoss(level, totalExp);

        var fbExpLoss = expLoss(level, baseExpLoss, promo, false, true);
        var nFbExpLoss = expLoss(level, baseExpLoss, promo, false, false);

        var hcfbExpLoss = expLoss(level, baseExpLoss, promo, true, true);
        var hcNfbExpLoss = expLoss(level, baseExpLoss, promo, true, false);

        return {
            stats,
            totalExp: Numeral(totalExp).format('0,0'),
            fbExpLoss: Numeral(fbExpLoss).format('0,0'),
            nFbExpLoss: Numeral(nFbExpLoss).format('0,0'),
            hcfbExpLoss: Numeral(hcfbExpLoss).format('0,0'),
            hcNfbExpLoss: Numeral(hcNfbExpLoss).format('0,0')
        };
    }
}

export default { totalResults, expLossCustomBless, baseExperienceLoss, defaultValues };