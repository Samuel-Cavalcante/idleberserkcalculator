
const awakeningLevel = {
    "D": 10,
    "C": 25,
    "B": 50,
    "A": 120,
    "S": 200,
    "SR": 300,
    "SSR": 500,
}

function skillsPoints(skill, level, awk) {

    if (level == awk) {
        return parseInt(0);
    }

    let total_price = (level * 100)
    const array = []

    for (let i = level; i < awk; i++) {

        total_price = (total_price + 100)
        array.push(total_price)

        if (i == awk - 1) {

            let sum = array.reduce(function (a, b) { return a + b; }, 0);
            console.log(`${skill} - Level: ${level}/120 - Crystals needed to max: ${sum}\n`)
            return sum;
        }
    }
}

function quantityDungeons(total, reward) {
    let num = total / reward

    if (num % 1 != 0) {
        return parseInt(num) + 1;

    } else {
        return num
    }
}

function awakeningCalc() {

    console.log("\nawakening Calculator")

    const awkLevel = awakeningLevel.A
    
    console.log(`Rank Berserker: ${Object.keys(awakeningLevel)[3]} \n`)

    const data = {
        attack: skillsPoints('Attack', 100, awkLevel),
        skilldamage: skillsPoints('Skill Damage', 76, awkLevel),
        bossdamage: skillsPoints('Boss Damage', 60, awkLevel),
        berserkattack: skillsPoints('Berserk Attack', 80, awkLevel),
        health: skillsPoints('Health', 50, awkLevel),
        berserkcriticaldamage: skillsPoints('Berserk Critical Damage', 90, awkLevel)
    }

    let total = Object.values(data).reduce(function (a, b) { return a + b; }, 0);
    const reward = 11500
    let totalDungeons = quantityDungeons(total, reward)

    console.log(`\nCrystals necessary to MAX ALL: ${total}`);
    console.log(`Dragon's Realm Reward: ${reward}`);
    console.log(`Necessary DGS: ${totalDungeons}`);
}

awakeningCalc()
console.log("\n")
