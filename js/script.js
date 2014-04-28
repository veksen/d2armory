var JSON = JSON || {};

// implement JSON.stringify serialization
JSON.stringify = JSON.stringify || function (obj) {

	var t = typeof (obj);
	if (t != "object" || obj === null) {

		// simple data type
		if (t == "string") obj = '"'+obj+'"';
		return String(obj);

	}
	else {

		// recurse array or object
		var n, v, json = [], arr = (obj && obj.constructor == Array);

		for (n in obj) {
			v = obj[n]; t = typeof(v);

			if (t == "string") v = '"'+v+'"';
			else if (t == "object" && v !== null) v = JSON.stringify(v);

			json.push((arr ? "" : '"' + n + '":') + String(v));
		}

		return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
	}
};


// implement JSON.parse de-serialization
JSON.parse = JSON.parse || function (str) {
	if (str === "") str = '""';
	eval("var p=" + str + ";");
	return p;
};

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
function hasRemaining(elem, op)
{
	rem = elem.closest('.tab').siblings('.counter-wrapper').find('.rem');
	current = rem.text();
	result = parseInt(current)+parseInt(op);
	if(result > 1) {
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

function countLvl(c)
{
	getState().c;

	var count = 0;
	$('#'+c).find('.lvl').each(function() {
		var lvl = $(this).html();
		count += parseInt(lvl);
	});

	$('#'+c).find('.remaining-skills span').text(charlvl+skillquests-count-1);
	$('#'+c).find('.required-level span').text(count);
}

function switchTab(c)
{
	if(c.type == 'click') {
		$this = $(this);
		c = $this.attr('data-class');
	}
	else {
		$this = $('.class-switcher').find("[data-class='"+c+"']");
	}
	$('.'+c).show().siblings().hide();
	$this.addClass('active').siblings().removeClass('active');
}

function buildState(c)
{
	var tree = [];
	var tab = 0;
	$('#'+c+' .tab').each(function(tab) {
		var tree_str = '';
		for(i = 1; i <= 10; i++)
		{
			val = $(this).data('skill'+zeroPad(i, 2));
			tree_str += (!val ? zeroPad(0, 2) : val);
		}
		tree[tab] = tree_str;
		tab++;
	});

	var state = 'c='+c+'&t1='+tree[0]+'&t2='+tree[1]+'&t3='+tree[2];
	return state;
}

function QueryStringToJSON()
{
	var pairs = location.search.slice(1).split('&');

	var result = {};
	pairs.forEach(function(pair) {
		pair = pair.split('=');
		result[pair[0]] = decodeURIComponent(pair[1] || '');
	});

	return JSON.parse(JSON.stringify(result));
}

function getState()
{
	var State = QueryStringToJSON();

	return State;
}

function applyState()
{
	if(History.getState().hash != '/') {
		state = [];
		state.c  = getState().c;
		state.t1 = getState().t1;
		state.t2 = getState().t2;
		state.t3 = getState().t3;

		switchTab(state['c']);

		for(var i = 1, state; i <= 3; i++)
		{
			var curtab = $("#"+state['c']).find('.tab').eq(i-1).attr('id');

			var tree = state['t'+i];
			split_tree = tree.match(/.{1,2}/g);

			$tree = $("#"+state['c']).find('.tab').eq(i-1);

			for(var ii = 1; ii <= 10; ii++)
			{
				$tree.data('skill'+zeroPad(ii, 2), split_tree[ii-1]);
				$tree.find('div').find('.lvl').eq(ii-1).each(function() {
					$(this).text(parseInt(split_tree[ii-1]));
				});
				var curskill = $tree.find('div').eq(ii-1).attr('id');
				skill[curtab][curskill]['base'] = parseInt(split_tree[ii-1]);
			}
		}

		setState(state.c);
		countLvl(state.c);
	}
}

function setState(c)
{
	state = buildState(c);

	History.replaceState(
		{ state:state },
		"Diablo 2 Skill Tree - "+humanReadable(c),
		"?"+state
	);
}

function humanReadable(myvar)
{
	switch(myvar) {
		case 'zon': return 'Amazon'; break;
		case 'sin': return 'Assassin'; break;
		case 'bar': return 'Barbarian'; break;
		case 'dru': return 'Druid'; break;
		case 'nec': return 'Necromancer'; break;
		case 'pal': return 'Paladin'; break;
		case 'sor': return 'Sorceress'; break;
	}
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

	setState($tree.attr('id'));
}

$(function () {
	$('.tree > .tab').bind("contextmenu", function (e) {
		e.preventDefault();
	});
	$('.tree .tab > div').mousedown(function (e) {
		var $this = $(this);
		$this.attr('unselectable', 'on').css('UserSelect', 'none').css('MozUserSelect', 'none');
		var $tab = $this.parent().attr("id");
		var $skill = $this.attr("id");
		if (e.which == 1) {
			//leftclick
			if (e.shiftKey) {
				remskills = $this.closest('.tree').find('.remaining-skills .rem').text();
				op = Math.min(remskills, basemax-skill[$tab][$skill]['base']);
			}
			else {
				op = 1;
			}
			if (skill[$tab][$skill]['base'] < basemax && checkPreReq($skill, $tab) && hasRemaining($this, op)) {
				if(getLvlReq($this) > charlvl) return false;
				skill[$tab][$skill]['base'] += op;
				updateRemaining($this, -op);
				updateLevelRequired($this, op);
				onSkillUpdate($this, skill[$tab][$skill]['base']);
			}
		} else if (e.which == 3) {
			//rightclick
			if ((checkPreReqOf($skill, $tab) || skill[$tab][$skill]['base'] > basemin+1) &&
				skill[$tab][$skill]['base'] > basemin) {
				skill[$tab][$skill]['base'] -= 1;
				updateRemaining($this, 1);
				updateLevelRequired($this, -1);
				onSkillUpdate($this, skill[$tab][$skill]['base']);
			}
		}
		$this.find(".lvl").text(skill[$tab][$skill]['base']);
	});

	$('.class-switcher li').on('click', switchTab);

	$('.remaining-skills .rem').text(charlvl+skillquests-1);

	applyState();
});