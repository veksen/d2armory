var data = data || {};

data.sor = {
  short: 'sor',
  long: 'Sorceress',
  remainingSkills: 0,
  skills: {
    cold: {
      iceBolt: {
        base: 0,
        preReqOf: ['iceBlast'],
        row: 1,
        col: 2
      },
      frozenArmor: {
        base: 0,
        preReqOf: ['shiverArmor'],
        row: 1,
        col: 3
      },
      frostNova: {
        base: 0,
        preReqOf: ['blizzard'],
        row: 2,
        col: 1
      },
      iceBlast: {
        base: 0,
        preReqs: ['iceBolt'],
        preReqOf: ['glacialSpike', 'shiverArmor'],
        row: 2,
        col: 2
      },
      shiverArmor: {
        base: 0,
        preReqs: ['frozenArmor', 'iceBlast'],
        preReqOf: ['chillingArmor'],
        row: 3,
        col: 3
      },
      glacialSpike: {
        base: 0,
        preReqs: ['iceBlast'],
        preReqOf: ['blizzard'],
        row: 4,
        col: 2
      },
      blizzard: {
        base: 0,
        preReqs: ['frostNova', 'glacialSpike'],
        preReqOf: ['frozenOrb'],
        row: 5,
        col: 1
      },
      chillingArmor: {
        base: 0,
        preReqs: ['shiverArmor'],
        row: 5,
        col: 3
      },
      frozenOrb: {
        base: 0,
        preReq: ['blizzard'],
        row: 6,
        col: 1
      },
      coldMastery: {
        base: 0,
        row: 6,
        col: 2
      }
    },
    lite: {
      chargedBolt: {
        base: 0,
        preReqOf: ['lightning'],
        row: 1,
        col: 2
      },
      staticField: {
        base: 0,
        preReqOf: ['nova'],
        row: 2,
        col: 1
      },
      telekinesis: {
        base: 0,
        preReqOf: ['teleport'],
        row: 2,
        col: 3
      },
      nova: {
        base: 0,
        preReqs: ['staticField'],
        preReqOf: ['thunderStorm'],
        row: 3,
        col: 1
      },
      lightning: {
        base: 0,
        preReqs: ['chargedBolt'],
        preReqOf: ['chainLightning'],
        row: 3,
        col: 2
      },
      chainLightning: {
        base: 0,
        preReqs: ['lightning'],
        preReqOf: ['thunderStorm', 'energyShield'],
        row: 4,
        col: 2
      },
      teleport: {
        base: 0,
        preReqs: ['telekinesis'],
        preReqOf: ['energyShield'],
        row: 4,
        col: 3
      },
      thunderStorm: {
        base: 0,
        preReqs: ['nova', 'chainLightning'],
        row: 5,
        col: 1
      },
      energyShield: {
        base: 0,
        preReqs: ['chainLightning', 'teleport'],
        row: 5,
        col: 3
      },
      lightningMastery: {
        base: 0,
        row: 6,
        col: 2
      }
    },
    fire: {
      fireBolt: {
        base: 0,
        preReqOf: ['fireBall'],
        row: 1,
        col: 2
      },
      warmth: {
        base: 0,
        preReqOf: ['enchant'],
        row: 1,
        col: 3
      },
      inferno: {
        base: 0,
        preReqOf: ['blaze'],
        row: 2,
        col: 1
      },
      blaze: {
        base: 0,
        preReqs: ['inferno'],
        preReqOf: ['fireWall'],
        row: 3,
        col: 1
      },
      fireBall: {
        base: 0,
        preReqs: ['fireBolt'],
        preReqOf: ['meteor', 'enchant'],
        row: 3,
        col: 2
      },
      fireWall: {
        base: 0,
        preReqs: ['blaze'],
        preReqOf: ['meteor'],
        row: 4,
        col: 1
      },
      enchant: {
        base: 0,
        preReqs: ['fireBall', 'warmth'],
        preReqOf: ['hydra'],
        row: 4,
        col: 3
      },
      meteor: {
        base: 0,
        preReqs: ['fireWall', 'fireBall'],
        row: 5,
        col: 2
      },
      fireMastery: {
        base: 0,
        row: 6,
        col: 2
      },
      hydra: {
        base: 0,
        preReqs: ['enchant'],
        row: 6,
        col: 3
      }
    }
  }
};
