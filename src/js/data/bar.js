var data = data || {};

data.bar = {
  short: 'bar',
  long: 'Barbarian',
  remainingSkills: 0,
  skills: {
    warcries: {
      howl: {
        base: 0,
        preReqOf: ['taunt', 'shout'],
        row: 1,
        col: 1
      },
      findPotion: {
        base: 0,
        preReqOf: ['findItem'],
        row: 1,
        col: 3
      },
      taunt: {
        base: 0,
        preReqs: ['howl'],
        preReqOf: ['battleCry'],
        row: 2,
        col: 1
      },
      shout: {
        base: 0,
        preReqs: ['howl'],
        preReqOf: ['battleOrders'],
        row: 2,
        col: 2
      },
      findItem: {
        base: 0,
        preReqs: ['findPotion'],
        preReqOf: ['grimWard'],
        row: 3,
        col: 3
      },
      battleCry: {
        base: 0,
        preReqs: ['taunt'],
        preReqOf: ['warCry'],
        row: 4,
        col: 1
      },
      battleOrders: {
        base: 0,
        preReqs: ['shout'],
        preReqOf: ['warCry', 'battleCommand'],
        row: 5,
        col: 2
      },
      grimWard: {
        base: 0,
        preReqs: ['findItem'],
        row: 5,
        col: 3
      },
      warCry: {
        base: 0,
        preReqs: ['battleCry', 'battleOrders'],
        row: 6,
        col: 1
      },
      battleCommand: {
        base: 0,
        preReqs: ['battleOrders'],
        row: 6,
        col: 2
      }
    },
    masteries: {
      swordMastery: {
        base: 0,
        row: 1,
        col: 1
      },
      axeMastery: {
        base: 0,
        row: 1,
        col: 2
      },
      maceMastery: {
        base: 0,
        row: 1,
        col: 3
      },
      polearmMastery: {
        base: 0,
        row: 2,
        col: 1
      },
      throwingMastery: {
        base: 0,
        row: 2,
        col: 2
      },
      spearMastery: {
        base: 0,
        row: 2,
        col: 3
      },
      increasedStamina: {
        base: 0,
        preReqOf: ['increasedSpeed'],
        row: 3,
        col: 1
      },
      ironSkin: {
        base: 0,
        preReqOf: ['naturalResistances'],
        row: 4,
        col: 3
      },
      increasedSpeed: {
        base: 0,
        preReqs: ['increasedStamina'],
        row: 5,
        col: 1
      },
      naturalResistances: {
        base: 0,
        preReqs: ['ironSkin'],
        row: 6,
        col: 3
      }
    },
    bcombat: {
      bash: {
        base: 0,
        preReqOf: ['stun', 'doubleSwing'],
        row: 1,
        col: 2
      },
      leap: {
        base: 0,
        preReqOf: ['leapAttack'],
        row: 2,
        col: 1
      },
      doubleSwing: {
        base: 0,
        preReqs: ['bash'],
        preReqOf: ['doubleThrow'],
        row: 2,
        col: 3
      },
      stun: {
        base: 0,
        preReqs: ['bash'],
        preReqOf: ['concentrate'],
        row: 3,
        col: 2
      },
      doubleThrow: {
        base: 0,
        preReqs: ['doubleSwing'],
        preReqOf: ['frenzy'],
        row: 3,
        col: 3
      },
      leapAttack: {
        base: 0,
        preReqs: ['leap'],
        preReqOf: ['whirlwind'],
        row: 4,
        col: 1
      },
      concentrate: {
        base: 0,
        preReqs: ['stun'],
        preReqOf: ['berserk', 'frenzy'],
        row: 4,
        col: 2
      },
      frenzy: {
        base: 0,
        preReqs: ['concentrate', 'doubleThrow'],
        row: 5,
        col: 3
      },
      whirlwind: {
        base: 0,
        preReqs: ['leapAttack', 'concentrate'],
        row: 6,
        col: 1
      },
      berserk: {
        base: 0,
        preReqs: ['concentrate'],
        row: 6,
        col: 2
      }
    }
  }
};