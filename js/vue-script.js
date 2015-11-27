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
                long: 'Assassin'
            },
            {
                short: 'bar',
                long: 'Barbarian'
            },
            {
                short: 'dru',
                long: 'Druid'
            },
            {
                short: 'pal',
                long: 'Paladin'
            },
            {
                short: 'nec',
                long: 'Necromancer'
            },
            {
                short: 'sor',
                long: 'Sorceress'
            }
        ]
    }
});