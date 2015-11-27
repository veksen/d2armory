new Vue({
  el: '#planner',

  data: {
    classes: [
      {
        short: 'zon',
        long: 'Amazon',
        skills: {
          jav: {
            jab: {
              base: 0,
              preReqOf: ['powerStrike', 'impale'],
              desc: 'creates a magical arrow or bolt that does extra damage',
              row: 1,
              col: 1,
              prop: {
                dmg: {
                  formula: 'formula dmg',
                  'tpl': 'Damage: +%dmg%',
                  1: 1,
                  2: 2,
                  3: 3,
                  4: 5,
                  5: 5
                },
                ar: {
                  formula: 'formula ar',
                  'tpl': 'To Attack Rating: +%ar% percent',
                  1: 10,
                  2: 19,
                  3: 28,
                  4: 37,
                  5: 46
                },
                mana: {
                  formula: 'formula mana',
                  'tpl': 'Mana Cost +%mana%',
                  1: 1.5,
                  2: 1.3,
                  3: 1.2,
                  4: 1.1,
                  5: 1
                }
              }
            },
            powerStrike: {
              base: 0,
              preReqs: ['jab'],
              preReqOf: ['chargedStrike'],
              row: 2,
              col: 2
            },
            poisonJavelin: {
              base: 0,
              preReqOf: ['lightningBolt'],
              row: 2,
              col: 3
            },
            impale: {
              base: 0,
              preReqs: ['jab'],
              preReqOf: ['fend'],
              row: 3,
              col: 1
            },
            lightningBolt: {
              base: 0,
              preReqs: ['poisonJavelin'],
              preReqOf: ['chargedStrike', 'plagueJavelin'],
              row: 3,
              col: 3
            },
            chargedStrike: {
              base: 0,
              preReqs: ['powerStrike', 'lightningBolt'],
              preReqOf: ['lightningStrike'],
              row: 4,
              col: 2
            },
            plagueJavelin: {
              base: 0,
              preReqs: ['lightningBolt'],
              preReqOf: ['lightningFury'],
              row: 4,
              col: 3
            },
            fend: {
              base: 0,
              preReqs: ['impale'],
              row: 5,
              col: 1
            },
            lightningStrike: {
              base: 0,
              preReqs: ['chargedStrike'],
              row: 6,
              col: 2
            },
            lightningFury: {
              base: 0,
              preReqs: ['plagueJavelin'],
              row: 6,
              col: 3
            }
          },
          passive: {
            innerSight: {
              base: 0,
              preReqOf: ['slowMissiles'],
              row: 1,
              col: 1
            },
            dodge: {
              base: 0,
              preReqOf: ['avoid'],
              row: 2,
              col: 2
            },
            criticalStrike: {
              base: 0,
              preReqOf: ['penetrate'],
              row: 1,
              col: 3
            },
            slowMissiles: {
              base: 0,
              preReqs: ['innerSight'],
              preReqOf: ['decoy'],
              row: 3,
              col: 1
            },
            avoid: {
              base: 0,
              preReqs: ['dodge'],
              preReqOf: ['evade'],
              row: 3,
              col: 2
            },
            penetrate: {
              base: 0,
              preReqs: ['criticalStrike'],
              preReqOf: ['pierce'],
              row: 4,
              col: 3
            },
            decoy: {
              base: 0,
              preReqs: ['slowMissiles'],
              preReqOf: ['valkyrie'],
              row: 5,
              col: 1
            },
            evade: {
              base: 0,
              preReqs: ['avoid'],
              preReqOf: ['valkyrie'],
              row: 5,
              col: 2
            },
            valkyrie: {
              base: 0,
              preReqs: ['decoy', 'evade'],
              row: 6,
              col: 1
            },
            pierce: {
              base: 0,
              preReqs: ['penetrate'],
              row: 6,
              col: 3
            }
          },
          bow: {
            magicArrow: {
              base: 0,
              preReqOf: ['multipleShot'],
              row: 1,
              col: 2
            },
            fireArrow: {
              base: 0,
              preReqOf: ['explodingArrow'],
              row: 1,
              col: 3
            },
            coldArrow: {
              base: 0,
              preReqOf: ['iceArrow', 'guidedArrow'],
              row: 2,
              col: 1
            },
            multipleShot: {
              base: 0,
              preReqs: ['magicArrow'],
              preReqOf: ['explodingArrow', 'iceArrow'],
              row: 2,
              col: 2
            },
            explodingArrow: {
              base: 0,
              preReqs: ['fireArrow', 'multipleShot'],
              preReqOf: ['strafe'],
              row: 3,
              col: 3
            },
            iceArrow: {
              base: 0,
              preReqs: ['coldArrow'],
              preReqOf: ['freezingArrow'],
              row: 4,
              col: 1
            },
            guidedArrow: {
              base: 0,
              preReqs: ['coldArrow', 'multipleShot'],
              preReqOf: ['immolationArrow'],
              row: 4,
              col: 2
            },
            immolationArrow: {
              base: 0,
              preReqs: ['guidedArrow'],
              row: 5,
              col: 2
            },
            strafe: {
              base: 0,
              preReqs: ['explodingArrow'],
              row: 5,
              col: 3
            },
            freezingArrow: {
              base: 0,
              preReqs: ['iceArrow'],
              row: 6,
              col: 1
            }
          }
        }
      },
      {
        short: 'sin',
        long: 'Assassin',
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
      },
      {
        short: 'bar',
        long: 'Barbarian',
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
      },
      {
        short: 'dru',
        long: 'Druid',
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
      },
      {
        short: 'pal',
        long: 'Paladin',
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
      },
      {
        short: 'nec',
        long: 'Necromancer',
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
      },
      {
        short: 'sor',
        long: 'Sorceress',
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
      }
    ]
  },

  methods: {
    incrementSkill: function(skill) {
      skill.base++;
    },

    decrementSkill: function(skill) {
      skill.base--;
    }
  }
});