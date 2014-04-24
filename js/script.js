/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/
var Base64 = {

	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		input = Base64._utf8_encode(input);

		while (i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

		}

		return output;
	},

	// public method for decoding
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		while (i < input.length) {

			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}

		}

		output = Base64._utf8_decode(output);

		return output;

	},

	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	},

	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while ( i < utftext.length ) {

			c = utftext.charCodeAt(i);

			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}

		}

		return string;
	}

}

var charlvl = 99;
var skillquests = 12;
var basemin = 0;
var basemax = 20;
var skill = {
	// amazon
	jav:{
		jab:{
			base:0,
			preReqOf:['powerStrike', 'impale']
		}, powerStrike:{
			base:0,
			preReqs:['jab'],
			preReqOf:['chargedStrike']
		}, poisonJavelin:{
			base:0,
			preReqOf:['lightningBolt']
		}, impale:{
			base:0,
			preReqs:['jab'],
			preReqOf:['fend']
		}, lightningBolt:{
			base:0,
			preReqs:['poisonJavelin'],
			preReqOf:['chargedStrike', 'plagueJavelin']
		}, chargedStrike:{
			base:0,
			preReqs:['powerStrike', 'lightningBolt'],
			preReqOf:['lightningStrike']
		}, plagueJavelin:{
			base:0,
			preReqs:['lightningBolt'],
			preReqOf:['lightningFury']
		}, fend:{
			base:0,
			preReqs:['impale']
		}, lightningStrike:{
			base:0,
			preReqs:['chargedStrike']
		}, lightningFury:{
			base:0,
			preReqs:['plagueJavelin']
		}
	},
	passive:{
		innerSight:{
			base:0,
			preReqOf:['slowMissiles']
		}, dodge:{
			base:0,
			preReqOf:['avoid']
		}, criticalStrike:{
			base:0,
			preReqOf:['penetrate']
		}, slowMissiles:{
			base:0,
			preReqs:['innerSight'],
			preReqOf:['decoy']
		}, avoid:{
			base:0,
			preReqs:['dodge'],
			preReqOf:['evade']
		}, penetrate:{
			base:0,
			preReqs:['criticalStrike'],
			preReqOf:['pierce']
		}, decoy:{
			base:0,
			preReqs:['slowMissiles'],
			preReqOf:['valkyrie']
		}, evade:{
			base:0,
			preReqs:['avoid'],
			preReqOf:['valkyrie']
		}, valkyrie:{
			base:0,
			preReqs:['decoy', 'evade']
		}, pierce:{
			base:0,
			preReqs:['penetrate']
		}
	},
	bow:{
		magicArrow:{
			base:0,
			preReqOf:['multipleShot']
		}, fireArrow:{
			base:0,
			preReqOf:['explodingArrow']
		}, coldArrow:{
			base:0,
			preReqOf:['iceArrow','guidedArrow']
		}, multipleShot:{
			base:0,
			preReqs:['magicArrow'],
			preReqOf:['explodingArrow', 'iceArrow']
		}, explodingArrow:{
			base:0,
			preReqs:['fireArrow', 'multipleShot'],
			preReqOf:['strafe']
		}, iceArrow:{
			base:0,
			preReqs:['coldArrow'],
			preReqOf:['freezingArrow']
		}, guidedArrow:{
			base:0,
			preReqs:['coldArrow', 'multipleShot'],
			preReqOf:['immolationArrow']
		}, immolationArrow:{
			base:0,
			preReqs:['guidedArrow']
		}, strafe:{
			base:0,
			preReqs:['explodingArrow']
		}, freezingArrow:{
			base:0,
			preReqs:['iceArrow']
		}
	},
	// assassin
	ma:{
		tigerStrike:{
			base:0,
			preReqOf:['cobraStrike']
		}, dragonTalon:{
			base:0,
			preReqOf:['dragonClaw']
		}, fistsOfFire:{
			base:0,
			preReqOf:['clawsOfThunder']
		}, dragonClaw:{
			base:0,
			preReqs:['dragonTalon'],
			preReqOf:['dragonTail']
		}, cobraStrike:{
			base:0,
			preReqs:['tigerStrike'],
			preReqOf:['phoenixStrike']
		}, clawsOfThunder:{
			base:0,
			preReqs:['fistsOfFire'],
			preReqOf:['bladesOfIce']
		}, dragonTail:{
			base:0,
			preReqs:['dragonClaw'],
			preReqOf:['dragonFlight']
		}, bladesOfIce:{
			base:0,
			preReqs:['clawsOfThunder'],
			preReqOf:['phoenixStrike']
		}, dragonFlight:{
			base:0,
			preReqs:['dragonTail']
		}, phoenixStrike:{
			base:0,
			preReqs:['bladesOfIce','cobraStrike']
		}
	},
	shadow:{
		clawMastery:{
			base:0,
			preReqOf:['burstOfSpeed','weaponBlock']
		}, psychicHammer:{
			base:0,
			preReqOf:['cloakOfShadows']
		}, burstOfSpeed:{
			base:0,
			preReqs:['clawMastery'],
			preReqOf:['fade']
		}, weaponBlock:{
			base:0,
			preReqs:['clawMastery'],
			preReqOf:['shadowWarrior']
		}, cloakOfShadows:{
			base:0,
			preReqs:['psychicHammer'],
			preReqOf:['mindBlast','shadowWarrior']
		}, fade:{
			base:0,
			preReqs:['burstOfSpeed'],
			preReqOf:['venom']
		}, shadowWarrior:{
			base:0,
			preReqs:['cloakOfShadows','weaponBlock'],
			preReqOf:['shadowMaster']
		}, mindBlast:{
			base:0,
			preReqs:['cloakOfShadows']
		}, venom:{
			base:0,
			preReqs:['fade']
		}, shadowMaster:{
			base:0,
			preReqs:['shadowWarrior']
		}
	},
	traps:{
		fireBlast:{
			base:0,
			preReqOf:['shockWeb','wakeOfFire']
		}, shockWeb:{
			base:0,
			preReqs:['fireBlast'],
			preReqOf:['chargedBoltSentry']
		}, bladeSentinel:{
			base:0,
			preReqOf:['bladeFury']
		}, chargedBoltSentry:{
			base:0,
			preReqs:['shockWeb'],
			preReqOf:['lightningSentry']
		}, wakeOfFire:{
			base:0,
			preReqs:['fireBlast'],
			preReqOf:['bladeFury','wakeOfInferno']
		}, bladeFury:{
			base:0,
			preReqs:['wakeOfFire','shockWeb'],
			preReqOf:['bladeShield']
		}, lightningSentry:{
			base:0,
			preReqs:['chargedBoltSentry'],
			preReqOf:['deathSentry']
		}, wakeOfInferno:{
			base:0,
			preReqs:['wakeOfFire']
		}, deathSentry:{
			base:0,
			preReqs:['lightningSentry']
		}, bladeShield:{
			base:0,
			preReqs:['bladeFury']
		}
	},
	// barb
	warcries:{
		howl:{
			base:0,
			preReqOf:['taunt', 'shout']
		}, findPotion:{
			base:0,
			preReqOf:['findItem']
		}, taunt:{
			base:0,
			preReqs:['howl'],
			preReqOf:['battleCry']
		}, shout:{
			base:0,
			preReqs:['howl'],
			preReqOf:['battleOrders']
		}, findItem:{
			base:0,
			preReqs:['findPotion'],
			preReqOf:['grimWard']
		}, battleCry:{
			base:0,
			preReqs:['taunt'],
			preReqOf:['warCry']
		}, battleOrders:{
			base:0,
			preReqs:['shout'],
			preReqOf:['warCry', 'battleCommand']
		}, grimWard:{
			base:0,
			preReqs:['findItem']
		}, warCry:{
			base:0,
			preReqs:['battleCry', 'battleOrders']
		}, battleCommand:{
			base:0,
			preReqs:['battleOrders']
		}
	},
	masteries:{
		swordMastery:{
			base:0
		}, axeMastery:{
			base:0
		}, maceMastery:{
			base:0
		}, polearmMastery:{
			base:0
		}, throwingMastery:{
			base:0
		}, spearMastery:{
			base:0
		}, increasedStamina:{
			base:0,
			preReqOf:['increasedSpeed']
		}, ironSkin:{
			base:0,
			preReqOf:['naturalResistances']
		}, increasedSpeed:{
			base:0,
			preReqs:['increasedStamina']
		}, naturalResistances:{
			base:0,
			preReqs:['ironSkin']
		}
	},
	bcombat:{
		bash:{
			base:0,
			preReqOf:['stun', 'doubleSwing']
		}, leap:{
			base:0,
			preReqOf:['leapAttack']
		}, doubleSwing:{
			base:0,
			preReqs:['bash'],
			preReqOf:['doubleThrow']
		}, stun:{
			base:0,
			preReqs:['bash'],
			preReqOf:['concentrate']
		}, doubleThrow:{
			base:0,
			preReqs:['doubleSwing'],
			preReqOf:['frenzy']
		}, leapAttack:{
			base:0,
			preReqs:['leap'],
			preReqOf:['whirlwind']
		}, concentrate:{
			base:0,
			preReqs:['stun'],
			preReqOf:['berserk', 'frenzy']
		}, frenzy:{
			base:0,
			preReqs:['concentrate', 'doubleThrow']
		}, whirlwind:{
			base:0,
			preReqs:['leapAttack', 'concentrate']
		}, berserk:{
			base:0,
			preReqs:['concentrate']
		}
	},
	// druid
	ele:{
		firestorm:{
			base:0,
			preReqOf:['moltenBoulder']
		}, moltenBoulder:{
			base:0,
			preReqs:['firestorm'],
			preReqOf:['fissure']
		}, arcticBlast:{
			base:0,
			preReqOf:['cycloneArmor']
		}, fissure:{
			base:0,
			preReqs:['moltenBoulder'],
			preReqOf:['volcano']
		}, cycloneArmor:{
			base:0,
			preReqs:['arcticBlast'],
			preReqOf:['twister']
		}, twister:{
			base:0,
			preReqs:['cycloneArmor'],
			preReqOf:['tornado']
		}, volcano:{
			base:0,
			preReqs:['fissure'],
			preReqOf:['armageddon']
		}, tornado:{
			base:0,
			preReqs:['twister'],
			preReqOf:['hurricane']
		}, armageddon:{
			base:0,
			preReqs:['volcano', 'hurricane']
		}, hurricane:{
			base:0,
			preReqs:['tornado'],
			preReqOf:['armageddon']
		}
	},
	ss:{
		werewolf:{
			base:0,
			preReqOf:['lycanthropy']
		}, lycanthropy:{
			base:0,
			preReqs:['werewolf']
		}, werebear:{
			base:0,
			preReqOf:['maul']
		}, feralRage:{
			base:0,
			preReqs:['werewolf'],
			preReqOf:['rabies', 'fireClaws']
		}, maul:{
			base:0,
			preReqs:['werebear'],
			preReqOf:['fireClaws']
		}, rabies:{
			base:0,
			preReqs:['feralRage'],
			preReqOf:['fury']
		}, fireClaws:{
			base:0,
			preReqs:['feralRage', 'maul'],
			preReqOf:['hunger']
		}, hunger:{
			base:0,
			preReqs:['fireClaws']
		}, shockWave:{
			base:0,
			preReqs:['maul']
		}, fury:{
			base:0,
			preReqs:['rabies']
		}
	},
	dsummon:{
		raven:{
			base:0,
			preReqOf:['summonSpiritWolf']
		}, poisonCreeper:{
			base:0,
			preReqOf:['carrionVine']
		}, oakSage:{
			base:0,
			preReqOf:['heartOfWolverine', 'summonDireWolf']
		}, summonSpiritWolf:{
			base:0,
			preReqs:['raven'],
			preReqOf:['summonDireWolf']
		}, carrionVine:{
			base:0,
			preReqs:['poisonCreeper'],
			preReqOf:['solarCreeper']
		}, heartOfWolverine:{
			base:0,
			preReqs:['oakSage'],
			preReqOf:['spiritOfBarbs']
		}, summonDireWolf:{
			base:0,
			preReqs:['oakSage', 'summonSpiritWolf'],
			preReqOf:['summonGrizzly']
		}, solarCreeper:{
			base:0,
			preReqs:['carrionVine']
		}, spiritOfBarbs:{
			base:0,
			preReqs:['heartOfWolverine']
		}, summonGrizzly:{
			base:0,
			preReqs:['summonDireWolf']
		}
	},
	// pally
	defensive:{
		prayer:{
			base:0,
			preReqOf:['cleansing']
		}, resistFire:{
			base:0
		}, defiance:{
			base:0,
			preReqOf:['vigor']
		}, resistCold:{
			base:0
		}, cleansing:{
			base:0,
			preReqs:['prayer'],
			preReqOf:['vigor', 'meditation']
		}, resistLightning:{
			base:0
		}, vigor:{
			base:0,
			preReqs:['cleansing', 'defiance'],
			preReqOf:['redemption']
		}, meditation:{
			base:0,
			preReqs:['cleansing']
		}, redemption:{
			base:0,
			preReqs:['vigor']
		}, salvation:{
			base:0
		}
	},
	offensive:{
		might:{
			base:0,
			preReqOf:['holyFire']
		}, holyFire:{
			base:0,
			preReqs:['might'],
			preReqOf:['holyFreeze']
		}, thorns:{
			base:0,
			preReqOf:['sanctuary']
		}, blessedAim:{
			base:0,
			preReqs:['might'],
			preReqOf:['concentration']
		}, concentration:{
			base:0,
			preReqs:['blessedAim'],
			preReqOf:['fanaticism']
		}, holyFreeze:{
			base:0,
			preReqs:['holyFire'],
			preReqOf:['holyShock', 'sanctuary']
		}, holyShock:{
			base:0,
			preReqs:['holyFreeze']
		}, sanctuary:{
			base:0,
			preReqs:['holyFreeze', 'thorns'],
			preReqOf:['conviction']
		}, fanaticism:{
			base:0,
			preReqs:['conviction']
		}, conviction:{
			base:0,
			preReqs:['sanctuary']
		}
	},
	pcombat:{
		sacrifice:{
			base:0,
			preReqOf:['zeal']
		}, smite:{
			base:0,
			preReqOf:['charge']
		}, holyBolt:{
			base:0,
			preReqOf:['blessedHammer']
		}, zeal:{
			base:0,
			preReqs:['sacrifice'],
			preReqOf:['vengeance']
		}, charge:{
			base:0,
			preReqs:['smite'],
			preReqOf:['holyShield']
		}, blessedHammer:{
			base:0,
			preReqs:['holyBolt'],
			preReqOf:['holyShield', 'fistOfTheHeavens']
		}, vengeance:{
			base:0,
			preReqs:['zeal'],
			preReqOf:['conversion']
		}, conversion:{
			base:0,
			preReqs:['vengeance'],
			preReqOf:['fistOfTheHeavens']
		}, holyShield:{
			base:0,
			preReqs:['blessedHammer', 'charge']
		}, fistOfTheHeavens:{
			base:0,
			preReqs:['conversion', 'blessedHammer']
		}
	},
	// necro
	nsummon:{
		skeletonMastery:{
			base:0,
			preReqs:['raiseSkeleton']
		}, raiseSkeleton:{
			base:0,
			preReqOf:['skeletonMastery', 'skeletalMage']
		}, clayGolem:{
			base:0,
			preReqOf:['golemMastery', 'bloodGolem']
		}, golemMastery:{
			base:0,
			preReqs:['clayGolem'],
			preReqOf:['summonResist']
		}, skeletalMage:{
			base:0,
			preReqs:['raiseSkeleton'],
			preReqOf:['revive']
		}, bloodGolem:{
			base:0,
			preReqs:['clayGolem'],
			preReqOf:['ironGolem']
		}, summonResist:{
			base:0,
			preReqs:['golemMastery']
		}, ironGolem:{
			base:0,
			preReqs:['bloodGolem'],
			preReqOf:['fireGolem', 'revive']
		}, fireGolem:{
			base:0,
			preReqs:['ironGolem']
		}, revive:{
			base:0,
			preReqs:['ironGolem', 'skeletalMage']
		}
	},
	bnp:{
		teeth:{
			base:0,
			preReqOf:['corpseExplosion']
		}, boneArmor:{
			base:0,
			preReqs:['boneWall']
		}, poisonDagger:{
			base:0,
			preReqOf:['poisonExplosion']
		}, corpseExplosion:{
			base:0,
			preReqs:['teeth'],
			preReqOf:['poisonExplosion', 'boneSpear']
		}, boneWall:{
			base:0,
			preReqs:['boneArmor'],
			preReqOf:['bonePrison']
		}, poisonExplosion:{
			base:0,
			preReqs:['poisonDagger', 'corpseExplosion'],
			preReqOf:['poisonNova']
		}, boneSpear:{
			base:0,
			preReqs:['corpseExplosion'],
			preReqOf:['boneSpirit']
		}, bonePrison:{
			base:0,
			preReqs:['boneSpear', 'boneWall']
		}, poisonNova:{
			base:0,
			preReqs:['poisonExplosion']
		}, boneSpirit:{
			base:0,
			preReqs:['boneSpear']
		}
	},
	curses:{
		amplifyDamage:{
			base:0,
			preReqOf:['ironMaiden', 'weaken']
		}, dimVision:{
			base:0,
			preReqOf:['confuse']
		}, weaken:{
			base:0,
			preReqs:['amplifyDamage'],
			preReqOf:['terror']
		}, ironMaiden:{
			base:0,
			preReqs:['amplifyDamage'],
			preReqOf:['lifeTap']
		}, terror:{
			base:0,
			preReqs:['weaken'],
			preReqOf:['decrepify']
		}, confuse:{
			base:0,
			preReqs:['dimVision'],
			preReqOf:['attract']
		}, lifeTap:{
			base:0,
			preReqs:['ironMaiden'],
			preReqOf:['lowerResist']
		}, attract:{
			base:0,
			preReqs:['confuse']
		}, decrepify:{
			base:0,
			preReqs:['terror'],
			preReqOf:['lowerResist']
		}, lowerResist:{
			base:0,
			preReqs:['lifeTap', 'decrepify']
		}
	},
	// sorc
	cold:{
		iceBolt:{
			base:0,
			preReqOf:['iceBlast']
		}, frozenArmor:{
			base:0,
			preReqOf:['shiverArmor']
		}, frostNova:{
			base:0,
			preReqOf:['blizzard']
		}, iceBlast:{
			base:0,
			preReqs:['iceBolt'],
			preReqOf:['glacialSpike', 'shiverArmor']
		}, shiverArmor:{
			base:0,
			preReqs:['frozenArmor', 'iceBlast'],
			preReqOf:['chillingArmor']
		}, glacialSpike:{
			base:0,
			preReqs:['iceBlast'],
			preReqOf:['blizzard']
		}, blizzard:{
			base:0,
			preReqs:['frostNova', 'glacialSpike'],
			preReqOf:['frozenOrb']
		}, chillingArmor:{
			base:0,
			preReqs:['shiverArmor']
		}, frozenOrb:{
			base:0,
			preReq:['blizzard']
		}, coldMastery:{
			base:0
		}
	},
	lite:{
		chargedBolt:{
			base:0,
			preReqOf:['lightning']
		}, staticField:{
			base:0,
			preReqOf:['nova']
		}, telekinesis:{
			base:0,
			preReqOf:['teleport']
		}, nova:{
			base:0,
			preReqs:['staticField'],
			preReqOf:['thunderStorm']
		}, lightning:{
			base:0,
			preReqs:['chargedBolt'],
			preReqOf:['chainLightning']
		}, chainLightning:{
			base:0,
			preReqs:['lightning'],
			preReqOf:['thunderStorm', 'energyShield']
		}, teleport:{
			base:0,
			preReqs:['telekinesis'],
			preReqOf:['energyShield']
		}, thunderStorm:{
			base:0,
			preReqs:['nova', 'chainLightning']
		}, energyShield:{
			base:0,
			preReqs:['chainLightning', 'teleport']
		}, lightningMastery:{
			base:0
		}
	},
	fire:{
		fireBolt:{
			base:0,
			preReqOf:['fireBall']
		}, warmth:{
			base:0,
			preReqOf:['enchant']
		}, inferno:{
			base:0,
			preReqOf:['blaze']
		}, blaze:{
			base:0,
			preReqs:['inferno'],
			preReqOf:['fireWall']
		}, fireBall:{
			base:0,
			preReqs:['fireBolt'],
			preReqOf:['meteor', 'enchant']
		}, fireWall:{
			base:0,
			preReqs:['blaze'],
			preReqOf:['meteor']
		}, enchant:{
			base:0,
			preReqs:['fireBall', 'warmth'],
			preReqOf:['hydra']
		}, meteor:{
			base:0,
			preReqs:['fireWall', 'fireBall']
		}, fireMastery:{
			base:0
		}, hydra:{
			base:0,
			preReqs:['enchant']
		}
	}
};

function checkPreReq(e, tab)
{
	var preReqs = skill[tab][e].preReqs;
	if (!preReqs)
		return true;
	for (var i=0; i<preReqs.length; i++) {
		var preReq = preReqs[i];
		if (skill[tab][preReq]['base'] <= 0)
			// failed at least this preReq
			return false;
	}
	// passed all requirements
	return true;
}
function checkPreReqOf(e, tab)
{
	var preReqOf = skill[tab][e].preReqOf;
	if (!preReqOf)
		return true;
	for (var i=0; i<preReqOf.length; i++) {
		var ispreReqOf = preReqOf[i];
		if (skill[tab][ispreReqOf]['base'] > 0)
			// failed at least this preReq
			return false;
	}
	// passed all requirements
	return true;
}
function updateRemaining(elem, operation)
{
	// elem.closest('.tab').siblings('.remaining-skills').find('.rem').text('test');
	rem = elem.closest('.tab').siblings('.counter-wrapper').find('.rem');
	current = rem.text();
	rem.text(parseInt(current)+operation);
}
function updateLevelRequired(elem, operation)
{
	req = elem.closest('.tab').siblings('.counter-wrapper').find('.lvl');
	current = req.text();
	req.text(parseInt(current)+operation);
}
function hasRemaining(elem)
{
	rem = elem.closest('.tab').siblings('.counter-wrapper').find('.rem');
	current = rem.text();
	if(current > 0) {
		return true;
	}
	else {
		return false;
	}
}
function getLvlReq(elem)
{
	classes = elem.attr('class');
	row = classes.split(' ').splice(0,1).join();
	switch(row)
	{
		case 'r1': req = 1; break;
		case 'r2': req = 6; break;
		case 'r3': req = 12; break;
		case 'r4': req = 18; break;
		case 'r5': req = 24; break;
		case 'r6': req = 30; break;
	}
	return req;
}

function switchTab()
{
	$this = $(this);
	dclass = $this.attr('data-class');
	$('.'+dclass).show().siblings().hide();
	$this.addClass('active').siblings().removeClass('active');
	buildState(dclass);
}

function buildState(_class)
{
	// thestate = _class;

	var tree = [];
	$('#'+_class+' .tab').each(function(i) {
		encoded = Base64.encode( $.param($(this).data()) );
		// tree = Base64.encode( 'test' )
		tree[i] = encoded;
	});

	var thestate = _class+'&t1='+tree[0]+'&t2='+tree[1]+'&t3='+tree[2];
	History.replaceState(
		{ state:thestate },
		"Diablo 2 Skill Tree - "+_class,
		"?class="+thestate
	);
}

function zeroPad(num, places) {
	var zero = places - num.toString().length + 1;
	return Array(+(zero > 0 && zero)).join("0") + num;
}

function onSkillUpdate(elem, val)
{
	$this = $(elem);
	$tab = $this.closest('.tab');
	$tree = $this.closest('.tree');
	i = $this.index()+1;
	$tab.data('skill'+zeroPad(i, 2), zeroPad(val, 2));

	buildState($tree.attr('id'));
}

$(function () {
	bnp_str = '';
	for(var k in skill.bnp) {
		var o = skill.bnp[k].base;
		bnp_str += bnp_str.concat(o);
	}

	$('.tree > .tab').bind("contextmenu", function (e) {
		e.preventDefault();
	});
	$('.tree .tab > div').mousedown(function (e) {
		var $this = $(this);
		// $this.attr('unselectable', 'on').css('UserSelect', 'none').css('MozUserSelect', 'none');
		var $tab = $this.parent().attr("id");
		var $skill = $this.attr("id");
		if (e.which == 1) {
			//leftclick
			if (skill[$tab][$skill]['base'] < basemax && checkPreReq($skill, $tab) && hasRemaining($this)) {
				if(getLvlReq($this) > charlvl) return false;
				skill[$tab][$skill]['base'] += 1;
				updateRemaining($this, -1);
				updateLevelRequired($this, 1);
				onSkillUpdate($this, skill[$tab][$skill]['base']);
			}
		} else if (e.which == 3) {
			//rightclick
			if (skill[$tab][$skill]['base'] > basemin && checkPreReqOf($skill, $tab)) {
				skill[$tab][$skill]['base'] -= 1;
				updateRemaining($this, 1);
				updateLevelRequired($this, -1);
			}
		}
		$this.find(".lvl").text(skill[$tab][$skill]['base']);
	});

	$('.class-switcher li').on('click', switchTab);

	$('.remaining-skills .rem').text(charlvl+skillquests-1);
});