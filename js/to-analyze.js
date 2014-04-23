var MopTalentCalc = function (I) {
	var w = 90;
	var O = 6;
	var n = 3;
	var j = {
		k: 6,
		d: 11,
		h: 3,
		m: 8,
		n: 10,
		l: 2,
		p: 5,
		r: 4,
		s: 7,
		o: 9,
		w: 1
	};
	var K = {};
	var m = {
		6: "deathknight",
		11: "druid",
		3: "hunter",
		8: "mage",
		10: "monk",
		2: "paladin",
		5: "priest",
		4: "rogue",
		7: "shaman",
		9: "warlock",
		1: "warrior"
	};
	var D = {
		0: 15,
		1: 30,
		2: 45,
		3: 60,
		4: 75,
		5: 90
	};
	var W = {
		0: 56,
		1: 57,
		2: 58,
		3: 60,
		4: 75,
		5: 90
	};
	var an = {};
	var h = {
		0: 2,
		1: 1,
		2: 0
	};
	var V = "!xyz";
	var az = "0zMcmVokRsaqbdrfwihuGINALpTjnyxtgevElBCDFHJKOPQSUWXYZ123456789";
	var g = false;
	var T = 0;
	var U = 0;
	var C = 3;
	var aa = false;
	var q = {
		M: [0, 0, 0],
		m: [0, 0, 0]
	};
	var L = false;
	var H = "";
	var am = w;
	var aj = {};
	var t = {};
	var o = [];
	var Z = true;
	var z = null;
	var M = "tc-parent";
	var f = null;
	var b = false;
	var ad = "";
	var F = null;

	function ar() {
		for (var aA = 0; aA < O; ++aA) {
			o[aA] = 0
		}
	}

	function a() {
		C = 3;
		u($(f).find(".filters > a").first()[0]);
		$(f).find(".mop-spells-table > table").html("");
		$(f).find(".mop-specs").html("");
		U = 0;
		ar();
		Y()
	}

	function al() {
		var aD = $('<a href="javascript:;"></a>');
		var aC = $('<a href="javascript:;"></a>');
		var aB = $('<a id="viewintc-link" href="/talent' + ad + '" target="_blank"></a>');
		var aA = $("<div></div>");
		aD.addClass("talentcalc-button-reset").addClass("icon-delete").text(LANG.tc_resetall).click(function () {
			a();
			ax(T)
		});
		aC.addClass("icon-link").text(LANG.tc_link).click(function () {
			prompt(LANG.prompt_tcbuild, window.location.protocol + "//" + window.location.host + "/talent" + ad)
		});
		aB.addClass("icon-go").text(LANG.tc_viewintc);
		aA.addClass("clear");
		$(f).find(".talentcalc-sidebar-controls").append(Z ? aD : null).append(aC).append(b ? aB : null).append(aA)
	}

	function x() {
		var aC = g_sortJsonArray(g_chr_classes, g_chr_classes);
		for (var aB = 0, aA = aC.length; aB < aA; ++aB) {
			var aF = aC[aB];
			var aD = Icon.create("class_" + g_file_classes[aF], 1, null, "javascript:;");
			var aG = g_chr_classes[aF];
			$(aD).mouseover((function (aI, aH) {
				$WH.Tooltip.showAtCursor(aH, aI, 0, 0, "q")
			}).bind(aD, aG));
			$(aD).mousemove(function (aH) {
				$WH.Tooltip.cursorUpdate(aH)
			}).mouseout(function () {
				$WH.Tooltip.hide()
			});
			var aE = $(aD).find("a");
			aE.attr("data-classid", aF).click(function () {
				var aH = $(this).attr("data-classid");
				if (aH == T) {
					return false
				}
				location.hash = K[aH]
			});
			$(f).find(".tc-classes-splash-inner").append($(aD).clone(true));
			$(f).find(".talentcalc-sidebar .tc-classes-inner").append($(aD))
		}
	}

	function r(aA) {
		C = aA;
		u(this);
		at()
	}

	function e() {
		if (F != null) {
			return
		}
		F = $.extend(true, {}, g_glyphs);
		var aH, aI, aK, aA = [];
		var aG = {};
		var aD = [];
		for (var aC in F) {
			if (!F.hasOwnProperty(aC)) {
				continue
			}
			if (F[aC].item == 0) {
				aD.push(aC);
				continue
			}
			if (aG.hasOwnProperty(F[aC].item)) {
				aD.push(aC);
				continue
			}
			aG[F[aC].item] = 1;
			aA.push({
				glyph: aC,
				item: F[aC].item
			})
		}
		for (var aJ = 0; aJ < aD.length; aJ++) {
			delete F[aD[aJ]]
		}
		aA.sort(function (aM, aL) {
			return $WH.strcmp("x" + aM.item, "x" + aL.item)
		});
		for (var aE = 0, aF = aA.length; aE < aF; ++aE) {
			var aC = aA[aE].glyph;
			aH = F[aC];
			aI = aH.classs;
			aK = aH.type;
			if (!aj[aI]) {
				aj[aI] = {};
				for (var aB = 1; aB <= 2; ++aB) {
					aj[aI][aB] = []
				}
			}
			if (!aj[aI][aK]) {
				continue
			}
			aH.id = aC;
			aH.index = aj[aI][aK].length;
			aj[aI][aK].push(aH.id)
		}
	}

	function af() {
		var aA = $("<div></div>");
		$(aA).addClass("filters");
		var aB = $("<a></a>");
		$(aB).attr("href", "javascript:;");
		$(aB).text(LANG.su_note_all);
		$(aB).click(r.bind(aB.get(0), 3));
		var aE = $("<a></a>");
		$(aE).attr("href", "javascript:;");
		$(aE).text(LANG.classs);
		$(aE).click(r.bind(aE.get(0), 1));
		var aD = $("<a></a>");
		$(aD).attr("href", "javascript:;");
		$(aD).text(LANG.tc_spec);
		$(aD).click(r.bind(aD.get(0), 2));
		$(aA).append(LANG.tc_show + ": ").append(aB).append(" ").append(aE).append(" ").append(aD);
		var aC = $('<div class="mop-spells-table"></div>');
		$(aC).append("<table></table>");
		$(f).find(".mop-spells").append(aA).append(aC)
	}

	function N(aF, aE, aC) {
		var aD = F[aE];
		if (aD && d(aF, aD)) {
			var aA = H[0];
			var aB = H[2];
			if (q[aA][aB]) {
				F[q[aA][aB]].used = 0
			}
			q[aA][aB] = aE;
			aD.used = true;
			if (!aC) {
				ag(aF)
			}
			ap()
		}
	}

	function B(aE, aC) {
		var aA = aE[0];
		var aB = aE[2];
		var aD = q[aA][aB];
		if (aD) {
			q[aA][aB] = 0;
			F[aD].used = 0;
			if (!aC) {
				ag(aE)
			}
			ap();
			return true
		}
	}

	function ae() {
		$(f).find(".glyphslot").each(function () {
			var aA = $(this).attr("data-slot");
			ag(aA)
		})
	}

	function ag(aI) {
		var aH = aI[0],
			aC = aI[2],
			aB = $(f).find('.glyphslot[data-slot="' + aI + '"]'),
			aE = aB.parent("div").get(0),
			aF = aB.get(0),
			aG = $(f).find('.glyphlink[data-slot="' + aI + '"]').get(0),
			aD = null;
		var aA = q[aH][aC];
		if (aA) {
			aD = F[aA];
			aD.used = true;
			if (aD.level > am) {
				B(aI)
			}
		}
		if (aD) {
			Icon.setTexture(aE, 0, aD.icon);
			aG.href = aF.href = "/item=" + aD.item;
			$WH.st(aG, P(aD.name));
			$(aG).removeClass("q0");
			$(aG).addClass("q1");
			return true
		} else {
			Icon.setTexture(aE, 0, "inventoryslot_empty");
			aG.href = aF.href = "javascript:;";
			$WH.st(aG, LANG.tc_empty);
			$(aG).removeClass("q1");
			$(aG).addClass("q0");
			return false
		}
	}

	function P(aA) {
		if (Locale.getId() == LOCALE_ENUS) {
			return aA.replace(/^Glyph of (the )?/i, "")
		}
		return aA
	}

	function ao(aI, aF, aA) {
		Lightbox.setSize(800, 564);
		L = false;
		var aD;
		if (aF) {
			aI.className = "talentcalc-glyphpicker listview";
			var aB = [],
				aG = $WH.ce("div"),
				aH = $WH.ce("a"),
				aE = $WH.ce("div");
			aB.push({
				none: 1
			});
			for (var aC in F) {
				aB.push(F[aC])
			}
			aG.className = "listview";
			$WH.ae(aI, aG);
			aH.className = "screenshotviewer-close";
			aH.href = "javascript:;";
			aH.onclick = Lightbox.hide;
			$WH.ae(aH, $WH.ce("span"));
			$WH.ae(aI, aH);
			aE.className = "clear";
			$WH.ae(aI, aE);
			aD = new Listview({
				template: "glyph",
				id: "glyphs-" + M,
				parent: aG,
				data: aB,
				customFilter: d.bind(0, null),
				createNote: R,
				parentTC: this
			});
			if ($WH.Browser.firefox) {
				$WH.aE(aD.getClipDiv(), "DOMMouseScroll", g_pickerWheel)
			} else {
				aD.getClipDiv().onmousewheel = g_pickerWheel
			}
		} else {
			aD = g_listviews["glyphs-" + M];
			aD.clearSearch();
			aD.updateFilters(true);
			aD.parentTC = this
		}
		setTimeout(function () {
			aD.createNote(aD.noteTop, aD.noteBot);
			aD.focusSearch()
		}, 1)
	}

	function R(aA) {
		$(aA).empty();
		if (L) {
			$(aA).append('<small><b class="q10">' + LANG.tc_glyphnote + "</b></small>")
		}
	}

	function d(aD, aC) {
		if (aC.none) {
			return true
		}
		var aA = aD != null ? aD[0] : H[0];
		var aB = (aC.classs == T && aC.type == X(aA) && !aC.used);
		if (aB && aC.level > am) {
			L = true
		}
		return aB && (aC.level <= am)
	}

	function X(aA) {
		if (aA == "M") {
			return 1
		} else {
			return 2
		}
	}

	function J(aB, aC, aA) {
		if (!ak(aC) && Z) {
			if (aA) {
				if (B(aC)) {
					p(aB, aC)
				}
			} else {
				H = aC;
				Lightbox.show("glyphpicker-" + M, {
					onShow: ao.bind(this)
				})
			}
		} else {
			if (!aA && aB.href != "javascript:;") {
				window.open(aB.href)
			} else {
				return false
			}
		}
	}

	function p(aE, aH) {
		var aG = aH[0];
		var aC = aH[2];
		var aA = q[aG][aC];
		var aI = "",
			aD = "",
			aF = F[aA],
			aB = ak(aH);
		if (aF && !aB) {
			aI += "<b>" + aF.name + "</b>";
			aI += '<br /><span class="q9">' + LANG["tc_glyph" + X(aH[0])] + "</span>";
			aD += '<span class="q">' + aF.description + "</span>"
		} else {
			if (!aB) {
				aI += '<b class="q0">' + LANG.tc_empty + "</b>";
				aI += '<br /><span class="q9">' + LANG["tc_glyph" + X(aH[0])] + "</span>"
			} else {
				aI += '<b class="q0">' + LANG.tc_locked + "</b>";
				aI += '<br /><span class="q9">' + LANG["tc_glyph" + X(aH[0])] + "</span>";
				aD += '<span class="q10">' + $WH.sprintf(LANG.tc_lockgly, s(aH[0])) + "</span>"
			}
		} if (aF && aE.parentNode.className.indexOf("icon") != 0) {
			$WH.Tooltip.setIcon(aF.icon)
		} else {
			$WH.Tooltip.setIcon(null)
		}
		$WH.Tooltip.show(aE, $WH.Tooltip.getMultiPartHtml(aI, aD))
	}

	function s(aA) {
		return 1
	}

	function ak(aA) {
		return false
	}

	function Y() {
		$(f).find(".glyphslot").each(function () {
			B($(this).attr("data-slot"))
		})
	}

	function k() {
		var aD = $(f).find(".tc-glyph-panel");
		var aR = $("<h3>");
		aR.text(LANG.tc_glyphs);
		if (Z) {
			var aK = $("<a>");
			aK.attr("href", "javascript:;");
			aK.click(Y);
			g_addTooltip(aK.get(0), LANG.tc_resetglyphs);
			aK.text("[x]");
			aR.append(aK)
		}
		aD.append(aR);
		var aG = {
			1: "major",
			2: "minor"
		};
		var aE = {
			1: "M",
			2: "m"
		};
		for (var aJ in aG) {
			var aL = $("<div>");
			aL.addClass("talentcalc-sidebar-" + aG[aJ] + "glyphs");
			var aP = $("<b>");
			aP.addClass("q9");
			aP.text(g_item_glyphs[aJ]);
			aL.append(aP);
			aD.append(aL);
			var aO = $("<table>");
			var aA = $("<tbody>");
			aO.addClass("icontab");
			for (var aM = 0; aM < 3; ++aM) {
				var aB = $("<tr>");
				var aF = $("<th>");
				var aI = $("<td>");
				var aC = aE[aJ] + "_" + aM;
				aB.append(aF);
				aB.append(aI);
				var aN = Icon.create("inventoryslot_empty", 0, null, "javascript:;");
				var aH = Icon.getLink(aN);
				$(aH).attr("target", "_blank");
				$(aH).attr("rel", "np");
				$(aH).click($WH.rf);
				$(aH).addClass("glyphslot");
				$(aH).attr("data-slot", aC);
				g_onClick(aH, J.bind(this, aH, aC));
				aH.onmouseover = p.bind(null, aH, aC);
				aH.onmouseout = $WH.Tooltip.hide;
				aF.append(aN);
				var aQ = $("<a>");
				aQ.attr("target", "_blank");
				aQ.attr("rel", "np");
				aQ.get(0).onmousedown = $WH.rf;
				aQ.get(0).onclick = $WH.rf;
				aQ.addClass("glyphlink");
				aQ.addClass("q0");
				aQ.attr("data-slot", aC);
				aQ.text(LANG.tc_empty);
				g_onClick(aQ.get(0), J.bind(this, aQ, aC));
				aQ.get(0).onmouseover = p.bind(null, aQ.get(0), aC);
				aQ.get(0).onmousemove = $WH.Tooltip.cursorUpdate;
				aQ.get(0).onmouseout = $WH.Tooltip.hide;
				aI.append(aQ);
				aI.get(0).oncontextmenu = $WH.rf;
				aA.append(aB)
			}
			aO.append(aA);
			aL.append(aO)
		}
	}

	function ax(aB, aA) {
		if (!t[aB]) {
			aq(aB, av.bind(null, aB, aA))
		} else {
			av(aB, aA)
		}
	}

	function G() {
		f = $WH.ge(M);
		f.innerHTML = '            <div class="tc-classes-splash" style="display: none;">                 <div class="tc-classes-splash-outer">                     <div class="tc-classes-splash-inner"><p>' + LANG.db_chooseclass + '</p></div>                 </div>             </div>             <div class="talentcalc-itself talentcalc talentcalc-default" style="min-height:470px;">                  <div class="talentcalc-ajax-loader" style="display: none"></div>                  <div class="talentcalc-wrapper" style="display: none">                     <div class="talentcalc-main talentcalc-mop">                         <div class="talentcalc-header">                             <div class="talentcalc-header-class"></div>                             <div class="talentcalc-header-reqlevel"></div>                         </div>                         <div class="talentcalc-core"></div>                         <div class="mop-specs-wrapper">                             <div class="mop-specs-header">' + LANG.tc_selectaspec + '</div>                             <div class="mop-specs"></div>                             <div class="mop-spells"></div>                         </div>                     </div>                  </div>                  <div class="talentcalc-sidebar talentcalc-mop">                      <div class="tc-classes">                          <div class="tc-classes-outer">                             <div class="tc-classes-inner"></div>                         </div>                      </div>                      <div class="talentcalc-sidebar-inner">                         <a target="_blank" href="/help=talent-calculator" class="talentcalc-button-help icon-help">' + LANG.help + '</a>                         <div style="" class="talentcalc-sidebar-controls"></div>                         <div class="talentcalc-medrect"></div>                      </div>                      <div class="tc-glyph-panel"></div>                  </div>             </div>'
	}

	function u(aA) {
		$(f).find(".filters > a").each(function (aB) {
			if (aA != this) {
				$(this).removeClass("fselected")
			} else {
				$(this).addClass("fselected")
			}
		})
	}

	function S(aA) {
		U = parseInt($(aA).attr("data-spec")) + 1;
		ap();
		$(f).find(".mop-spec").each(function (aB) {
			if (aA != this) {
				$(this).removeClass("sselected")
			} else {
				$(this).addClass("sselected")
			}
		})
	}

	function A() {
		K = {};
		for (var aA in j) {
			K[j[aA]] = aA
		}
	}

	function l() {
		an = {};
		for (var aA in m) {
			switch (m[aA]) {
			case "deathknight":
				an[aA] = W;
				break;
			default:
				an[aA] = D;
				break
			}
		}
	}

	function E(aI) {
		var aE = (typeof aI !== "undefined" && typeof aI.newURL !== "undefined") ? ("#" + aI.newURL.split("#")[1]) : location.hash;
		ar();
		if (aE.length < 2) {
			T = 0;
			$(f).find(".talentcalc-wrapper").hide();
			$(f).find(".talentcalc-sidebar").hide();
			aw();
			return
		}
		var aB = aE.split("|");
		var aJ = null;
		var aL = null;
		var aC = aB[0][1];
		if (j[aC]) {
			aJ = j[aC];
			var aO = aB[0][2] ? aB[0][2] : 0;
			if (aO && V.indexOf(aO, 0) != -1) {
				aL = V.indexOf(aO, 0) + 1
			}
		}
		var aM = aL ? 1 : 0;
		for (var aA = 2 + aM; aA < Math.min(aB[0].length, 2 + aM + Math.ceil(O / 3)); ++aA) {
			var aF = aA - (2 + aM);
			var aG = aB[0].charCodeAt(aA) - 47;
			for (var aD = (aF * 3); aD < Math.min(O, (aF * 3) + 3); ++aD) {
				o[aD] = (aG >> (2 * (aD - (aF * 3)))) & 3
			}
		}
		var aN = aB[1];
		if (aN) {
			for (var aH = 0; aH < 6; ++aH) {
				var aK = (aH > 2) ? "m" : "M";
				if (aN[aH]) {
					if (!(aN[aH] == "Z") && (az.indexOf(aN[aH]) != -1)) {
						q[aK][aH % 3] = aj[aJ][X(aK)][az.indexOf(aN[aH])]
					} else {
						q[aK][aH % 3] = 0
					}
				} else {
					q[aK][aH % 3] = 0
				}
			}
		}
		ax(aJ, aL)
	}

	function aq(aB, aC) {
		var aA = $(f).find(".talentcalc-ajax-loader");
		aA.show();
		$.ajax({
			url: "/talent",
			data: "classid=" + aB,
			dataType: "json",
			success: function (aD) {
				aA.hide();
				t[aB] = aD;
				aC()
			}
		})
	}

	function v() {
		var aA;
		var aD = "";
		for (var aB = 0; aB < o.length; ++aB) {
			if (o[aB] == 0) {
				break
			}
			aD += (o[aB] - 1).toString()
		}
		var aC = U ? (U - 1) : 0;
		aA = [0, aC, aD];
		for (aB = 0; aB < 6; ++aB) {
			aA.push(parseInt(q[(aB > 2) ? "m" : "M"][aB % 3]) ? parseInt(q[(aB > 2) ? "m" : "M"][aB % 3]) : 0)
		}
		aA.push(0);
		if (z) {
			z(aA)
		}
	}

	function ap() {
		var aA = i();
		if (aA.length > 0) {
			aA = "#" + aA
		}
		if (!b && aA != location.hash) {
			location.hash = aA;
			$("input[name=returntourl]").val(location.href)
		}
		if (aA != ad) {
			ad = aA;
			$(f).find("#viewintc-link").attr("href", "/talent" + ad);
			v()
		}
	}

	//here
	function i() {
		var aE = "";
		if (!T) {
			return aE
		}
		aE += K[T];
		if (U) {
			aE += V.charAt(U - 1)
		}
		for (var aC = 0; aC < Math.ceil(O / 3); ++aC) {
			var aA = 0;
			for (var aD = (aC * 3); aD < Math.min(O, (aC * 3) + 3); ++aD) {
				aA |= (o[aD] << (2 * (aD - (aC * 3))))
			}
			if (aA) {
				aE += String.fromCharCode(47 + aA)
			}
		}
		aE += "|";
		for (var aF in q) {
			for (var aB = 0; aB < q[aF].length; ++aB) {
				if (q[aF][aB]) {
					aE += az.charAt(F[q[aF][aB]].index)
				} else {
					aE += "Z"
				}
			}
		}
		aE = $WH.rtrim(aE, "Z");
		return aE
	}

	function au() {
		PageTemplate.set({
			breadcrumb: T ? [1, 0, T] : [1, 0]
		})
	}

	function aw() {
		$(f).find(".tc-classes-splash").show()
	}

	function ab() {
		$("#mop-comments-section").html("").append('<div id="jkbfksdbl4"></div><div id="lkljbjkb574" class="listview"></div></div>');
		var aA = new Tabs({
			parent: $WH.ge("jkbfksdbl4")
		});
		new Listview({
			template: "comment",
			id: "comments",
			name: LANG.tab_comments,
			tabs: aA,
			parent: "lkljbjkb574",
			data: lv_comments[T]
		});
		aA.flush();
		$("form[name=addcomment]").attr("action", "/comment=add&type=102&typeid=" + T);
		$("input[name=returntourl]").val(location.href);
		$("#mop-feedback").show()
	}

	function av(aC, aA) {
		T = aC;
		U = aA;
		$(f).find(".talentcalc-wrapper").show();
		ah();
		Q();
		ai();
		if (U) {
			S($(f).find(".mop-spec")[U - 1])
		}
		u($(f).find(".filters > a").first()[0]);
		at();
		if (!b) {
			au()
		}
		if (q.M.length || q.m.length) {
			ae()
		}
		$(f).find(".tc-classes-splash").hide();
		if (!g) {
			try {
				var aB = $WH.ce("div");
				aB.className = "block-bg";
				$WH.ae($(f).find(".talentcalc-medrect").get(0), aB);
				var aE = $WH.ce("div");
				$WH.ae(aB, aE);
				Ads.create("medrec", aE);
				g = true
			} catch (aD) {
				void(0)
			}
		}
		$(f).find(".talentcalc-mop").attr("data-class", m[T]);
		$(f).find(".talentcalc-sidebar").show();
		$(f).css("height", 470 + $(f).find(".mop-specs-wrapper").height());
		$(f).find(".talentcalc-header-class").html($WH.sprintf('<a class="c$1" href="/class=$2" target="_blank">$3</a>', T, T, g_chr_classes[T]));
		$(f).find(".talentcalc-sidebar .iconmedium").removeClass("iconmedium-gold-selected");
		$(f).find(".talentcalc-sidebar a[data-classid=" + T + "]").parent().addClass("iconmedium-gold-selected")
	}

	function Q() {
		var aD = true;
		$(f).find(".talentcalc-row .outer").attr("data-selected", "no");
		for (var aA = 0; aA < O; ++aA) {
			var aC = $(f).find(".talentcalc-row[data-row=" + aA + "]");
			aC.attr("data-available", aD ? "yes" : "no");
			if (o[aA]) {
				$(f).find(".talentcalc-row .outer[data-row=" + aA + "][data-col=" + (o[aA] - 1) + "]").attr("data-selected", "yes")
			}
		}
		if (aa == false) {
			var aB = true;
			for (aA = 0; aA < O; aA++) {
				if (o[aA] == 0) {
					aB = false;
					break
				}
			}
			if (aB) {
				$.get("/tc-explored", null, function () {
					AchievementCheck()
				});
				aa = true
			}
		}
		ac();
		ap()
	}

	function ac() {
		$(f).find(".talentcalc-header-reqlevel").html($WH.sprintf("$1<b>$2</b>", LANG.tc_reqlevel, an[T][ay()]))
	}

	function ay() {
		var aB = 0;
		for (var aA = 0; aA < O; ++aA) {
			if (o[aA]) {
				aB = aA
			}
		}
		return aB
	}

	function at() {
		$(f).find(".mop-spells-table > table > tbody").remove();
		$(f).find(".mop-spells-table").css("height", parseInt($(f).find(".mop-specs").css("height")) - 34);
		var aF = $(f).find(".mop-spells-table > table");
		if (C == 2 && !U) {
			aF.append('<tbody><tr><td><span class="color-q10">' + LANG.tc_selectspec + ".</span></td></tr></tbody>");
			return false
		}
		var aD = [];
		if (C & 1) {
			aD.push.apply(aD, t[T].spells[-1])
		}
		if ((C & 2) && U) {
			aD.push.apply(aD, t[T].spells[U - 1])
		}
		aD.sort(function (aM, aL) {
			var aK = aM.minLevel - aL.minLevel;
			if (aK == 0) {
				return aM.name <= aL.name ? -1 : 1
			}
			return aK
		});
		aF.append("<tbody>");
		for (var aE = 0; aE < aD.length; ++aE) {
			var aH = aD[aE];
			var aB = $("<tr></tr>");
			var aC = $('<td class="mop-spells-td-lvl"></td>');
			aC.html(aH.minLevel);
			aB.append(aC);
			var aJ = $('<td class="mop-spells-td-spell"></td>');
			var aI = aH.passive > 0 ? " <b>(" + LANG.tc_passive + ")</b>" : "";
			var aG = aH.mastery ? "<b>" + LANG.traits.mastrtng[1] + ":</b> " : "";
			aJ.html('<span class="tooltip-inside-icon" style="background-image: url(http://wow.zamimg.com/images/wow/icons/small/' + aH.icon + '.jpg)"></span>&nbsp;&nbsp;' + aG + '<a target="_blank" href="/spell=' + aH.id + '">' + aH.name + "</a>" + aI);
			aJ.bind("contextmenu", function () {
				return false
			});
			aJ.mousedown(function (aK) {
				if (aK.which === 3) {
					y($(this))
				}
			});
			var aA = $('<td class="specicon"></td>');
			if (aH.spec != -1) {
				aA.append('<span style="background-image:url(http://wow.zamimg.com/images/wow/icons/mop-talents/spec.png)"></span>');
				aA.mouseover((function (aL, aK) {
					$WH.Tooltip.showAtCursor(aK, aL, 0, 0)
				}).bind(aA, LANG.tc_specializationability));
				aA.mousemove(function (aK) {
					$WH.Tooltip.cursorUpdate(aK)
				}).mouseout(function () {
					$WH.Tooltip.hide()
				});
				aA.bind("contextmenu", function () {
					return false
				});
				aA.mousedown(function (aK) {
					if (aK.which === 3) {
						y($(this))
					}
				})
			} else {
				aA.append("<span></span>")
			}
			aB.append(aA).append(aJ);
			aF.append(aB).append("</tbody>")
		}
	}

	function ai() {
		for (var aC = 0; aC < t[T].specs.length; ++aC) {
			var aB = t[T].specs[aC];
			var aA = $('<a class="mop-spec"></a>');
			aA.attr("data-spec", aC);
			aA.append('<span class="title">' + aB.name + "</span>");
			aA.append('&nbsp;<span class="mop-spec-role" style="background-position: ' + -1 * 16 * h[aB.role] + 'px 0" />');
			aA.append('<span class="mop-spec-img" style="background: url(http://wow.zamimg.com/images/wow/icons/medium/' + aB.icon + '.jpg);"></span>');
			aA.append('<span class="mop-spec-desc">' + aB.description + "</span>");
			aA.attr("href", "javascript:;");
			if (Z) {
				aA.click(function () {
					S(this);
					at()
				})
			}
			$(f).find(".mop-specs").append(aA)
		}
	}

	function ah() {
		$(f).find(".talentcalc-core").html("");
		for (var aD = 0; aD < O; ++aD) {
			var aE = $("<div></div>");
			$(aE).attr("data-row", aD);
			$(aE).addClass("talentcalc-row");
			$(aE).append($WH.sprintf('<div class="outer"><div class="inner">$1</div></div>', an[T][aD]));
			for (var aA = 0; aA < n; ++aA) {
				var aB = t[T].talents[aD][aA];
				var aC = $("<div></div>");
				aC.addClass("outer");
				if (aA == n - 1) {
					aC.addClass("last-child")
				}
				aC.html($WH.sprintf('<div class="inner"><a class="screen" target="_blank" href="$1"></a><div class="iconmedium"><ins style="background-image: url(http://wow.zamimg.com/images/wow/icons/medium/$4.jpg)"></ins><del></del><a class="" target="_blank" rel="np" href="$5"></a></div><table><tbody><tr><td>$3</td></tr></tbody></table></div>', "/spell=" + aB.id, m[T], aB.name, aB.icon, "javascript:;"));
				aC.attr("data-row", aD).attr("data-col", aA).click(function (aF) {
					if (aF.which == 2 || !Z) {
						return
					}
					c($(this))
				}).attr("cursor", "pointer");
				aC.bind("contextmenu", function () {
					return false
				});
				aC.mousedown(function (aF) {
					if (aF.which === 3 && Z) {
						y($(this))
					}
				});
				aC.find("a[class=screen]").click(function (aF) {
					if (aF.which != 2) {
						aF.preventDefault()
					}
				});
				if (o[aD] == aA + 1) {
					aC.attr("data-selected", "yes")
				} else {
					aC.attr("data-selected", "no")
				}
				$(aE).append(aC)
			}
			$(f).find(".talentcalc-core").append(aE)
		}
	}

	function c(aA) {
		var aC = parseInt(aA.attr("data-row"));
		var aB = parseInt(aA.attr("data-col"));
		o[aC] = aB + 1;
		Q()
	}

	function y(aA) {
		var aB = parseInt(aA.attr("data-row"));
		o[aB] = 0;
		Q()
	}
	this.addGlyph = function (aA) {
		if (aA) {
			N(H, aA)
		} else {
			B(H)
		}
		Lightbox.hide()
	};
	this.simplifyGlyphName = function (aA) {
		return P(aA)
	};
	this.setData = function (aA) {
		a();
		this.initialize(aA)
	};
	this.initialize = function (aC) {
		e();
		var aD = null,
			aA = null;
		if (aC) {
			if (aC.hasOwnProperty("editable")) {
				Z = aC.editable
			}
			if (aC.hasOwnProperty("parent")) {
				M = aC.parent
			}
			if (aC.hasOwnProperty("charClass")) {
				aD = aC.charClass
			}
			if (aC.hasOwnProperty("embedded")) {
				b = aC.embedded
			}
			if (aC.hasOwnProperty("onChange")) {
				z = aC.onChange
			}
		}
		G();
		al();
		k.call(this);
		af();
		A();
		l();
		if (!aD) {
			x()
		} else {
			$(f).find(".talentcalc-sidebar .tc-classes").remove();
			if (aC.hasOwnProperty("talents") && aC.talents != null) {
				aC.talents = aC.talents.toString().replace(/[^012]/g, ".");
				for (var aB = 0; aB < Math.max(O, aC.talents.length); ++aB) {
					o[aB] = !isNaN(parseInt(aC.talents[aB])) ? (parseInt(aC.talents[aB]) + 1) : 0
				}
			}
			aA = (aC.hasOwnProperty("specOrder") && aC.specOrder != null) ? (aC.specOrder + 1) : null;
			if (aC.hasOwnProperty("glyphs")) {
				for (var aB = 0; aB < 6; ++aB) {
					q[(aB > 2) ? "m" : "M"][aB % 3] = parseInt(aC.glyphs[aB])
				}
			}
			ax(aD, aA)
		} if (!b) {
			au();
			E();
			window.onhashchange = function (aE) {
				if (((typeof aE.newURL !== "undefined") && aE.newURL.split("#")[1].length == 1) || (location.hash.length == 2)) {
					a();
					E(aE)
				}
			};
			if (typeof (comments_hash) != "undefined") {
				location.hash = comments_hash
			}
		}
	};
	this.initialize(I)
};
Listview.templates.glyph = {
	sort: [1],
	nItemsPerPage: -1,
	hideBands: 2,
	hideNav: 1 | 2,
	hideHeader: 1,
	searchable: 1,
	searchDelay: 100,
	poundable: 0,
	filtrable: 0,
	clip: {
		w: 780,
		h: 486
	},
	onBeforeCreate: function () {
		this.applySort()
	},
	onSearchSubmit: function (a) {
		if (this.nRowsVisible != 1) {
			return
		}
		this.parentTC.addGlyph(a.id)
	},
	columns: [{
		id: "glyph",
		type: "text",
		align: "left",
		value: "name",
		span: 2,
		compute: function (f, j, g) {
			if (f.none) {
				return
			}
			var h = this.parentTC;
			var c = $WH.ce("td");
			c.style.width = "1px";
			c.style.padding = "0";
			c.style.borderRight = "none";
			var d = Icon.create(f.icon, 0, null, "/item=" + f.item),
				e = Icon.getLink(d);
			$WH.ae(c, d);
			$WH.ae(g, c);
			j.style.borderLeft = "none";
			e.onclick = $WH.rf;
			var b = $WH.ce("a");
			b.style.fontFamily = "Verdana, sans-serif";
			b.href = "/item=" + f.item;
			$WH.ae(b, $WH.ct(h.simplifyGlyphName(f.name)));
			j.style.whiteSpace = "nowrap";
			$WH.ae(j, b);
			$(g).click(function (a) {
				if (a.which != 2 || a.target != b) {
					a.preventDefault();
					(h.addGlyph.bind(null, f.id))()
				}
			})
		},
		sortFunc: function (d, c, e) {
			if (d.none) {
				return -1
			}
			return $WH.strcmp(d.name, c.name)
		}
	}, {
		id: "description",
		type: "text",
		align: "left",
		value: "description",
		compute: function (b, f) {
			if (b.none) {
				return
			}
			var e = $WH.ce("div");
			e.className = "small crop";
			f.title = b.description;
			var a = document.createElement("div");
			a.innerHTML = b.description;
			var c = a.textContent || a.innerText || "";
			$WH.ae(e, $WH.ct(c));
			$WH.ae(f, e)
		}
	}, {
		id: "level",
		type: "text",
		align: "center",
		value: "level",
		compute: function (a, b) {
			if (a.none) {
				return
			}
			b.className = "small q0";
			b.style.whiteSpace = "nowrap";
			return LANG.tc_level.replace("%s", a.level)
		}
	}]
};