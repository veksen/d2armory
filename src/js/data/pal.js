var data = data || {};

data.pal = {
  short: 'pal',
  long: 'Paladin',
  remainingSkills: 0,
  skills: {
    defensive: {
      prayer: {
        base: 0,
        preReqOf: ['cleansing'],
        row: 1,
        col: 1
      },
      resistFire: {
        base: 0,
        row: 1,
        col: 3
      },
      defiance: {
        base: 0,
        preReqOf: ['vigor'],
        row: 2,
        col: 2
      },
      resistCold: {
        base: 0,
        row: 2,
        col: 3
      },
      cleansing: {
        base: 0,
        preReqs: ['prayer'],
        preReqOf: ['vigor', 'meditation'],
        row: 3,
        col: 1
      },
      resistLightning: {
        base: 0,
        row: 3,
        col: 3
      },
      vigor: {
        base: 0,
        preReqs: ['cleansing', 'defiance'],
        preReqOf: ['redemption'],
        row: 4,
        col: 2
      },
      meditation: {
        base: 0,
        preReqs: ['cleansing'],
        row: 5,
        col: 1
      },
      redemption: {
        base: 0,
        preReqs: ['vigor'],
        row: 6,
        col: 2
      },
      salvation: {
        base: 0,
        row: 6,
        col: 3
      }
    },
    offensive: {
      might: {
        base: 0,
        preReqOf: ['holyFire'],
        row: 1,
        col: 1
      },
      holyFire: {
        base: 0,
        preReqs: ['might'],
        preReqOf: ['holyFreeze'],
        row: 2,
        col: 2
      },
      thorns: {
        base: 0,
        preReqOf: ['sanctuary'],
        row: 2,
        col: 3
      },
      blessedAim: {
        base: 0,
        preReqs: ['might'],
        preReqOf: ['concentration'],
        row: 3,
        col: 1
      },
      concentration: {
        base: 0,
        preReqs: ['blessedAim'],
        preReqOf: ['fanaticism'],
        row: 4,
        col: 1
      },
      holyFreeze: {
        base: 0,
        preReqs: ['holyFire'],
        preReqOf: ['holyShock', 'sanctuary'],
        row: 4,
        col: 2
      },
      holyShock: {
        base: 0,
        preReqs: ['holyFreeze'],
        row: 5,
        col: 2
      },
      sanctuary: {
        base: 0,
        preReqs: ['holyFreeze', 'thorns'],
        preReqOf: ['conviction'],
        row: 5,
        col: 3
      },
      fanaticism: {
        base: 0,
        preReqs: ['conviction'],
        row: 6,
        col: 1
      },
      conviction: {
        base: 0,
        preReqs: ['sanctuary'],
        row: 6,
        col: 3
      }
    },
    pcombat: {
      sacrifice: {
        base: 0,
        preReqOf: ['zeal'],
        row: 1,
        col: 1
      },
      smite: {
        base: 0,
        preReqOf: ['charge'],
        row: 1,
        col: 3
      },
      holyBolt: {
        base: 0,
        preReqOf: ['blessedHammer'],
        row: 2,
        col: 2
      },
      zeal: {
        base: 0,
        preReqs: ['sacrifice'],
        preReqOf: ['vengeance'],
        row: 3,
        col: 1
      },
      charge: {
        base: 0,
        preReqs: ['smite'],
        preReqOf: ['holyShield'],
        row: 3,
        col: 3
      },
      blessedHammer: {
        base: 0,
        preReqs: ['holyBolt'],
        preReqOf: ['holyShield', 'fistOfTheHeavens'],
        row: 4,
        col: 2
      },
      vengeance: {
        base: 0,
        preReqs: ['zeal'],
        preReqOf: ['conversion'],
        row: 4,
        col: 1
      },
      conversion: {
        base: 0,
        preReqs: ['vengeance'],
        preReqOf: ['fistOfTheHeavens'],
        row: 5,
        col: 1
      },
      holyShield: {
        base: 0,
        preReqs: ['blessedHammer', 'charge'],
        row: 5,
        col: 3
      },
      fistOfTheHeavens: {
        base: 0,
        preReqs: ['conversion', 'blessedHammer'],
        row: 6,
        col: 2
      }
    }
  }
};
