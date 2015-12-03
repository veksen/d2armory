var vm = new Vue({
  el: '#planner',

  data: {
    activeClass: 'zon',
    config: {
      charLevel: 99,
      skillQuests: 12,
      baseMin: 0,
      baseMax: 20
    },
    classes: {
      zon: data.zon,
      sin: data.sin,
      bar: data.bar,
      dru: data.dru,
      pal: data.pal,
      nec: data.nec,
      sor: data.sor
    }
  },

  watch: {
    'classes': {
      handler: function () {
        return this.remainingSkills(this.classes);
      },
      deep: true
    }
  },

  methods: {
    switchClass: function (_class) {
      this.activeClass = _class.short;
    },

    incrementSkill: function (skill) {
      if (skill.base < this.config.baseMax &&
          vm.checkPreReq(skill)) {
        skill.base++;
      }
    },

    decrementSkill: function (skill) {
      if (skill.base > this.config.baseMin &&
          vm.checkPreReqOf(skill)) {
        skill.base--;
      }
    },

    resetSkills: function (_class) {
      for (var tab in _class.skills) {
        for (var skill in _class.skills[tab]) {
          _class.skills[tab][skill].base = 0;
        }
      }
      // _class.skills.forEach(function(tab) {
      //   tab.forEach(function(skill) {
      //     skill.base = 0;
      //   });
      // });
    },

    totalSkills: function (_class) {
      var count = 0;
      for (var tab in _class.skills) {
        for (var skill in _class.skills[tab]) {
          count += _class.skills[tab][skill].base;
        }
      }
      // _class.skills.forEach(function(tab) {
      //   tab.forEach(function(skill) {
      //     count += skill.base;
      //   });
      // });

      return count;
    },

    remainingSkills: function (classes) {
      for (var _class in classes) {
        classes[_class].remainingSkills = vm.config.charLevel + vm.config.skillQuests - 1 - vm.totalSkills(classes[_class]);
      }
    },

    findSkillByKey: function (key) {
      for (var _class in this.classes) {
        for (var tab in this.classes[_class].skills) {
          for (var skill in this.classes[_class].skills[tab]) {
            if (skill === key) {
              return this.classes[_class].skills[tab][skill];
            }
          }
        }
      }
    },

    // TODO: this should probably be named differently
    checkPreReq: function (skill) {
      var preReqs = skill.preReqs;
      if (!preReqs) {
        return true;
      }
      for (var i = 0; i < preReqs.length; i++) {
        var preReq = vm.findSkillByKey(preReqs[i]);
        if (preReq.base <= 0) {
          // failed at least this preReq
          return false;
        }
      }
      // passed all requirements
      return true;
    },

    checkPreReqOf: function (skill) {
      var preReqsOf = skill.preReqOf;
      if (!preReqsOf || skill.base - 1 > this.config.baseMin) {
        return true;
      }
      for (var i = 0; i < preReqsOf.length; i++) {
        var preReqOf = vm.findSkillByKey(preReqsOf[i]);
        if (preReqOf.base > 0) {
          // failed at least this preReq
          return false;
        }
      }
      // passed all requirements
      return true;
    }

  }
});
