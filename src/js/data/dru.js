var data = data || {};

data.dru = {
  short: 'dru',
  long: 'Druid',
  remainingSkills: 0,
  skills: {
    ele: {
      firestorm: {
        base: 0,
        preReqOf: ['moltenBoulder'],
        row: 1,
        col: 1
      },
      moltenBoulder: {
        base: 0,
        preReqs: ['firestorm'],
        preReqOf: ['fissure'],
        row: 2,
        col: 1
      },
      arcticBlast: {
        base: 0,
        preReqOf: ['cycloneArmor'],
        row: 2,
        col: 3
      },
      fissure: {
        base: 0,
        preReqs: ['moltenBoulder'],
        preReqOf: ['volcano'],
        row: 3,
        col: 1
      },
      cycloneArmor: {
        base: 0,
        preReqs: ['arcticBlast'],
        preReqOf: ['twister'],
        row: 3,
        col: 3
      },
      twister: {
        base: 0,
        preReqs: ['cycloneArmor'],
        preReqOf: ['tornado'],
        row: 4,
        col: 2
      },
      volcano: {
        base: 0,
        preReqs: ['fissure'],
        preReqOf: ['armageddon'],
        row: 5,
        col: 1
      },
      tornado: {
        base: 0,
        preReqs: ['twister'],
        preReqOf: ['hurricane'],
        row: 5,
        col: 2
      },
      armageddon: {
        base: 0,
        preReqs: ['volcano', 'hurricane'],
        row: 6,
        col: 1
      },
      hurricane: {
        base: 0,
        preReqs: ['tornado'],
        preReqOf: ['armageddon'],
        row: 6,
        col: 2
      }
    },
    ss: {
      werewolf: {
        base: 0,
        preReqOf: ['lycanthropy'],
        row: 1,
        col: 1
      },
      lycanthropy: {
        base: 0,
        preReqs: ['werewolf'],
        row: 1,
        col: 2
      },
      werebear: {
        base: 0,
        preReqOf: ['maul'],
        row: 2,
        col: 3
      },
      feralRage: {
        base: 0,
        preReqs: ['werewolf'],
        preReqOf: ['rabies', 'fireClaws'],
        row: 3,
        col: 1
      },
      maul: {
        base: 0,
        preReqs: ['werebear'],
        preReqOf: ['fireClaws'],
        row: 3,
        col: 3
      },
      rabies: {
        base: 0,
        preReqs: ['feralRage'],
        preReqOf: ['fury'],
        row: 4,
        col: 1
      },
      fireClaws: {
        base: 0,
        preReqs: ['feralRage', 'maul'],
        preReqOf: ['hunger'],
        row: 4,
        col: 2
      },
      hunger: {
        base: 0,
        preReqs: ['fireClaws'],
        row: 5,
        col: 2
      },
      shockWave: {
        base: 0,
        preReqs: ['maul'],
        row: 5,
        col: 3
      },
      fury: {
        base: 0,
        preReqs: ['rabies'],
        row: 6,
        col: 1
      }
    },
    dsummon: {
      raven: {
        base: 0,
        preReqOf: ['summonSpiritWolf'],
        row: 1,
        col: 2
      },
      poisonCreeper: {
        base: 0,
        preReqOf: ['carrionVine'],
        row: 1,
        col: 3
      },
      oakSage: {
        base: 0,
        preReqOf: ['heartOfWolverine', 'summonDireWolf'],
        row: 2,
        col: 1
      },
      summonSpiritWolf: {
        base: 0,
        preReqs: ['raven'],
        preReqOf: ['summonDireWolf'],
        row: 2,
        col: 2
      },
      carrionVine: {
        base: 0,
        preReqs: ['poisonCreeper'],
        preReqOf: ['solarCreeper'],
        row: 3,
        col: 3
      },
      heartOfWolverine: {
        base: 0,
        preReqs: ['oakSage'],
        preReqOf: ['spiritOfBarbs'],
        row: 4,
        col: 1
      },
      summonDireWolf: {
        base: 0,
        preReqs: ['oakSage', 'summonSpiritWolf'],
        preReqOf: ['summonGrizzly'],
        row: 4,
        col: 2
      },
      solarCreeper: {
        base: 0,
        preReqs: ['carrionVine'],
        row: 5,
        col: 3
      },
      spiritOfBarbs: {
        base: 0,
        preReqs: ['heartOfWolverine'],
        row: 6,
        col: 1
      },
      summonGrizzly: {
        base: 0,
        preReqs: ['summonDireWolf'],
        row: 6,
        col: 2
      }
    }
  }
};
