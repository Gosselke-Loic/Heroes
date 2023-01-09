const checkNewHero = (object) => {

    const isString = (string) => {
        return typeof string === "string";
    };
    const isNumber = (number) => {
        return typeof number === "number";
    };
    
    const parseName = (name) => {
        if(!isString(name)) {
            throw new Error("incorrect name")
        };
        return name;
    };
    const parseDamage = (damage) => {
        if(!isNumber(damage) && damage > 7) {
            throw new Error("incorrect damage")
        };
        return damage;
    }
    const parseDefense = (defense) => {
        if(!isNumber(defense) && defense > 7) {
            throw new Error("incorrect defense")
        };
        return defense;
    }
    const parseSpeed = (speed) => {
        if(!isNumber(speed) && speed > 7) {
            throw new Error("incorrect speed")
        };
        return speed;
    }
    const parseSkill = (skill) => {
        if(!isString(skill)) {
            throw new Error("incorrect skill")
        };
        return skill;
    }
    const parselevel = (level) => {
        if(level !== 7) {
            throw new Error("incorrect level")
        };
        return level;
    }
    const parseGold = (gold) => {
        if(!isNumber(gold)) {
            throw new Error("incorrect gold")
        };
        return gold;
    }
    const parseWeapons = (weapons) => {
        if(!isString(weapons)) {
            throw new Error("incorrect weapons")
        };
        return weapons;
    }

    const newHero = {
        name: parseName(object.name),
        skill: parseSkill(object.skill),
        damage: parseDamage(object.damage),
        defense: parseDefense(object.defense),
        speed: parseSpeed(object.speed),
        level: parselevel(object.level),
        gold: parseGold(object.gold),
        weapons: parseWeapons(object.weapons)
    }
    return newHero;
};

module.exports = { checkNewHero };