var JSON = JSON || {};

// implement JSON.stringify serialization
JSON.stringify = JSON.stringify || function (obj) {

    var t = typeof (obj);
    if (t != "object" || obj === null) {

      // simple data type
      if (t == "string") obj = '"' + obj + '"';
      return String(obj);

    }
    else {

      // recurse array or object
      var n, v, json = [], arr = (obj && obj.constructor == Array);

      for (n in obj) {
        v = obj[n];
        t = typeof(v);

        if (t == "string") v = '"' + v + '"';
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

function checkPreReq(e, tab) {
  var preReqs = skill[tab][e].preReqs;
  if (!preReqs)
    return true;
  for (var i = 0; i < preReqs.length; i++) {
    var preReq = preReqs[i];
    if (skill[tab][preReq]['base'] <= 0)
    // failed at least this preReq
      return false;
  }
  // passed all requirements
  return true;
}
function checkPreReqOf(e, tab) {
  var preReqOf = skill[tab][e].preReqOf;
  if (!preReqOf)
    return true;
  for (var i = 0; i < preReqOf.length; i++) {
    var ispreReqOf = preReqOf[i];
    if (skill[tab][ispreReqOf]['base'] > 0)
    // failed at least this preReq
      return false;
  }
  // passed all requirements
  return true;
}
function updateRemaining(elem, operation) {
  var rem = elem.closest('.tab').siblings('.counter-wrapper').find('.rem');
  var current = rem.text();
  rem.text(parseInt(current) + operation);
}
function updateLevelRequired(elem, operation) {
  var req = elem.closest('.tab').siblings('.counter-wrapper').find('.lvl');
  var current = req.text();
  req.text(parseInt(current) + operation);
}
function hasRemaining(elem, op) {
  var rem = elem.closest('.tab').siblings('.counter-wrapper').find('.rem');
  var current = rem.text();
  var result = parseInt(current) + parseInt(op);
  if (result > 1) {
    return true;
  }
  else {
    return false;
  }
}
function getLvlReq(elem) {
  var classes = elem.attr('class');
  var row = classes.split(' ').splice(0, 1).join();
  var req;
  switch (row) {
    case 'r1':
      req = 1;
      break;
    case 'r2':
      req = 6;
      break;
    case 'r3':
      req = 12;
      break;
    case 'r4':
      req = 18;
      break;
    case 'r5':
      req = 24;
      break;
    case 'r6':
      req = 30;
      break;
  }
  return req;
}

function countLvl(c) {
  getState().c;

  var count = 0;
  $('#' + c).find('.lvl').each(function () {
    var lvl = $(this).html();
    count += parseInt(lvl);
  });

  $('#' + c).find('.remaining-skills span').text(charlvl + skillquests - count - 1);
  $('#' + c).find('.required-level span').text(count);
}

function switchTab(c) {
  if (c.type == 'click') {
    var $this = $(this);
    c = $this.attr('data-class');
  }
  else {
    $this = $('.class-switcher').find("[data-class='" + c + "']");
  }
  $('.' + c).show().siblings().hide();
  $this.addClass('active').siblings().removeClass('active');
}

function buildState(c) {
  var tree = [];
  var tab = 0;
  $('#' + c + ' .tab').each(function (tab) {
    var tree_str = '';
    for (var i = 1; i <= 10; i++) {
      var val = $(this).data('skill' + zeroPad(i, 2));
      tree_str += (!val ? zeroPad(0, 2) : val);
    }
    tree[tab] = tree_str;
    tab++;
  });

  var state = 'c=' + c + '&t1=' + tree[0] + '&t2=' + tree[1] + '&t3=' + tree[2];
  return state;
}

function QueryStringToJSON() {
  var pairs = location.search.slice(1).split('&');

  var result = {};
  pairs.forEach(function (pair) {
    pair = pair.split('=');
    result[pair[0]] = decodeURIComponent(pair[1] || '');
  });

  return JSON.parse(JSON.stringify(result));
}

function getState() {
  var State = QueryStringToJSON();

  return State;
}

function applyState() {
  if (History.getState().hash != '/') {
    state = [];
    state.c = getState().c;
    state.t1 = getState().t1;
    state.t2 = getState().t2;
    state.t3 = getState().t3;

    switchTab(state['c']);

    for (var i = 1, state; i <= 3; i++) {
      var curtab = $("#" + state['c']).find('.tab').eq(i - 1).attr('id');

      var tree = state['t' + i];
      var split_tree = tree.match(/.{1,2}/g);

      var $tree = $("#" + state['c']).find('.tab').eq(i - 1);

      for (var ii = 1; ii <= 10; ii++) {
        $tree.data('skill' + zeroPad(ii, 2), split_tree[ii - 1]);
        $tree.find('div').find('.lvl').eq(ii - 1).each(function () {
          $(this).text(parseInt(split_tree[ii - 1]));
        });
        var curskill = $tree.find('div').eq(ii - 1).attr('id');
        skill[curtab][curskill]['base'] = parseInt(split_tree[ii - 1]);
      }
    }

    setState(state.c);
    countLvl(state.c);
  }
}

function setState(c) {
  var state = buildState(c);

  History.replaceState(
    {state: state},
    "Diablo 2 Skill Tree Planner - " + humanReadable(c),
    "?" + state
  );
}

function humanReadable(myvar) {
  switch (myvar) {
    case 'zon':
      return 'Amazon';
      break;
    case 'sin':
      return 'Assassin';
      break;
    case 'bar':
      return 'Barbarian';
      break;
    case 'dru':
      return 'Druid';
      break;
    case 'nec':
      return 'Necromancer';
      break;
    case 'pal':
      return 'Paladin';
      break;
    case 'sor':
      return 'Sorceress';
      break;
  }
}

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

function onSkillUpdate(elem, val) {
  var $this = $(elem);
  var $tab = $this.closest('.tab');
  var $tree = $this.closest('.tree');
  var i = $this.index() + 1;
  $tab.data('skill' + zeroPad(i, 2), zeroPad(val, 2));

  setState($tree.attr('id'));
}

function resetSkills() {
  var $this = $(this);
  $this.closest('.tree').find('.lvl').text('0');

  var c = getState().c;
  buildState(c);
  applyState();
}

$(function () {
  applyState();
});
