var data = data || {};

data.sin = {
  short: 'sin',
  long: 'Assassin',
  remainingSkills: 0,
  skills: {
    ma: {
      tigerStrike: {
        base: 0,
        preReqOf: ['cobraStrike'],
        row: 1,
        col: 2
      },
      dragonTalon: {
        base: 0,
        preReqOf: ['dragonClaw'],
        row: 1,
        col: 3
      },
      fistsOfFire: {
        base: 0,
        preReqOf: ['clawsOfThunder'],
        row: 2,
        col: 1
      },
      dragonClaw: {
        base: 0,
        preReqs: ['dragonTalon'],
        preReqOf: ['dragonTail'],
        row: 2,
        col: 3
      },
      cobraStrike: {
        base: 0,
        preReqs: ['tigerStrike'],
        preReqOf: ['phoenixStrike'],
        row: 3,
        col: 2
      },
      clawsOfThunder: {
        base: 0,
        preReqs: ['fistsOfFire'],
        preReqOf: ['bladesOfIce'],
        row: 4,
        col: 1
      },
      dragonTail: {
        base: 0,
        preReqs: ['dragonClaw'],
        preReqOf: ['dragonFlight'],
        row: 4,
        col: 3
      },
      bladesOfIce: {
        base: 0,
        preReqs: ['clawsOfThunder'],
        preReqOf: ['phoenixStrike'],
        row: 5,
        col: 1
      },
      dragonFlight: {
        base: 0,
        preReqs: ['dragonTail'],
        row: 5,
        col: 3
      },
      phoenixStrike: {
        base: 0,
        preReqs: ['bladesOfIce', 'cobraStrike'],
        row: 6,
        col: 2
      }
    },
    shadow: {
      clawMastery: {
        base: 0,
        preReqOf: ['burstOfSpeed', 'weaponBlock'],
        row: 1,
        col: 2
      },
      psychicHammer: {
        base: 0,
        preReqOf: ['cloakOfShadows'],
        row: 1,
        col: 3
      },
      burstOfSpeed: {
        base: 0,
        preReqs: ['clawMastery'],
        preReqOf: ['fade'],
        row: 2,
        col: 1
      },
      weaponBlock: {
        base: 0,
        preReqs: ['clawMastery'],
        preReqOf: ['shadowWarrior'],
        row: 3,
        col: 2
      },
      cloakOfShadows: {
        base: 0,
        preReqs: ['psychicHammer'],
        preReqOf: ['mindBlast', 'shadowWarrior'],
        row: 3,
        col: 3
      },
      fade: {
        base: 0,
        preReqs: ['burstOfSpeed'],
        preReqOf: ['venom'],
        row: 4,
        col: 1
      },
      shadowWarrior: {
        base: 0,
        preReqs: ['cloakOfShadows', 'weaponBlock'],
        preReqOf: ['shadowMaster'],
        row: 4,
        col: 2
      },
      mindBlast: {
        base: 0,
        preReqs: ['cloakOfShadows'],
        row: 5,
        col: 3
      },
      venom: {
        base: 0,
        preReqs: ['fade'],
        row: 6,
        col: 1
      },
      shadowMaster: {
        base: 0,
        preReqs: ['shadowWarrior'],
        row: 6,
        col: 2
      }
    },
    traps: {
      fireBlast: {
        base: 0,
        preReqOf: ['shockWeb', 'wakeOfFire'],
        row: 1,
        col: 2
      },
      shockWeb: {
        base: 0,
        preReqs: ['fireBlast'],
        preReqOf: ['chargedBoltSentry'],
        row: 2,
        col: 1
      },
      bladeSentinel: {
        base: 0,
        preReqOf: ['bladeFury'],
        row: 2,
        col: 3
      },
      chargedBoltSentry: {
        base: 0,
        preReqs: ['shockWeb'],
        preReqOf: ['lightningSentry'],
        row: 3,
        col: 1
      },
      wakeOfFire: {
        base: 0,
        preReqs: ['fireBlast'],
        preReqOf: ['bladeFury', 'wakeOfInferno'],
        row: 3,
        col: 2
      },
      bladeFury: {
        base: 0,
        preReqs: ['wakeOfFire', 'shockWeb'],
        preReqOf: ['bladeShield'],
        row: 4,
        col: 3
      },
      lightningSentry: {
        base: 0,
        preReqs: ['chargedBoltSentry'],
        preReqOf: ['deathSentry'],
        row: 5,
        col: 1
      },
      wakeOfInferno: {
        base: 0,
        preReqs: ['wakeOfFire'],
        row: 5,
        col: 2
      },
      deathSentry: {
        base: 0,
        preReqs: ['lightningSentry'],
        row: 6,
        col: 1
      },
      bladeShield: {
        base: 0,
        preReqs: ['bladeFury'],
        row: 6,
        col: 3
      }
    }
  }
};