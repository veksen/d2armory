var data = data || {};

data.nec = {
  short: 'nec',
  long: 'Necromancer',
  remainingSkills: 0,
  skills: {
    nsummon: {
      skeletonMastery: {
        base: 0,
        preReqs: ['raiseSkeleton'],
        row: 1,
        col: 1
      },
      raiseSkeleton: {
        base: 0,
        preReqOf: ['skeletonMastery', 'skeletalMage'],
        row: 1,
        col: 3
      },
      clayGolem: {
        base: 0,
        preReqOf: ['golemMastery', 'bloodGolem'],
        row: 2,
        col: 2
      },
      golemMastery: {
        base: 0,
        preReqs: ['clayGolem'],
        preReqOf: ['summonResist'],
        row: 3,
        col: 1
      },
      skeletalMage: {
        base: 0,
        preReqs: ['raiseSkeleton'],
        preReqOf: ['revive'],
        row: 3,
        col: 3
      },
      bloodGolem: {
        base: 0,
        preReqs: ['clayGolem'],
        preReqOf: ['ironGolem'],
        row: 4,
        col: 2
      },
      summonResist: {
        base: 0,
        preReqs: ['golemMastery'],
        row: 5,
        col: 1
      },
      ironGolem: {
        base: 0,
        preReqs: ['bloodGolem'],
        preReqOf: ['fireGolem', 'revive'],
        row: 5,
        col: 2
      },
      fireGolem: {
        base: 0,
        preReqs: ['ironGolem'],
        row: 6,
        col: 2
      },
      revive: {
        base: 0,
        preReqs: ['ironGolem', 'skeletalMage'],
        row: 6,
        col: 3
      }
    },
    bnp: {
      teeth: {
        base: 0,
        preReqOf: ['corpseExplosion'],
        row: 1,
        col: 2
      },
      boneArmor: {
        base: 0,
        preReqs: ['boneWall'],
        row: 1,
        col: 3
      },
      poisonDagger: {
        base: 0,
        preReqOf: ['poisonExplosion'],
        row: 2,
        col: 1
      },
      corpseExplosion: {
        base: 0,
        preReqs: ['teeth'],
        preReqOf: ['poisonExplosion', 'boneSpear'],
        row: 2,
        col: 2
      },
      boneWall: {
        base: 0,
        preReqs: ['boneArmor'],
        preReqOf: ['bonePrison'],
        row: 3,
        col: 3
      },
      poisonExplosion: {
        base: 0,
        preReqs: ['poisonDagger', 'corpseExplosion'],
        preReqOf: ['poisonNova'],
        row: 4,
        col: 1
      },
      boneSpear: {
        base: 0,
        preReqs: ['corpseExplosion'],
        preReqOf: ['boneSpirit'],
        row: 4,
        col: 2
      },
      bonePrison: {
        base: 0,
        preReqs: ['boneSpear', 'boneWall'],
        row: 5,
        col: 3
      },
      poisonNova: {
        base: 0,
        preReqs: ['poisonExplosion'],
        row: 6,
        col: 1
      },
      boneSpirit: {
        base: 0,
        preReqs: ['boneSpear'],
        row: 6,
        col: 2
      }
    },
    curses: {
      amplifyDamage: {
        base: 0,
        preReqOf: ['ironMaiden', 'weaken'],
        row: 1,
        col: 2
      },
      dimVision: {
        base: 0,
        preReqOf: ['confuse'],
        row: 2,
        col: 1
      },
      weaken: {
        base: 0,
        preReqs: ['amplifyDamage'],
        preReqOf: ['terror'],
        row: 2,
        col: 3
      },
      ironMaiden: {
        base: 0,
        preReqs: ['amplifyDamage'],
        preReqOf: ['lifeTap'],
        row: 3,
        col: 2
      },
      terror: {
        base: 0,
        preReqs: ['weaken'],
        preReqOf: ['decrepify'],
        row: 3,
        col: 3
      },
      confuse: {
        base: 0,
        preReqs: ['dimVision'],
        preReqOf: ['attract'],
        row: 4,
        col: 1
      },
      lifeTap: {
        base: 0,
        preReqs: ['ironMaiden'],
        preReqOf: ['lowerResist'],
        row: 4,
        col: 2
      },
      attract: {
        base: 0,
        preReqs: ['confuse'],
        row: 5,
        col: 1
      },
      decrepify: {
        base: 0,
        preReqs: ['terror'],
        preReqOf: ['lowerResist'],
        row: 5,
        col: 3
      },
      lowerResist: {
        base: 0,
        preReqs: ['lifeTap', 'decrepify'],
        row: 6,
        col: 2
      }
    }
  }
};
