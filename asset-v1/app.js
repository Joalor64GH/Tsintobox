/* 0.5.4 2022-11-UNRELEASED ??:??:?? */
var app = new function() {
    this.name = "Paradisky", this.version = "1", this.date = "2022", this.folder = "asset-v1/", this.looptime = 3076, this.bpm = 130, this.totalframe = 260, this.nbpolo = 7, this.nbloopbonus = 8, this.bonusloopA = !0, this.bonusendloopA = !8, this.recmaxloop = 48, this.recminloop = 6, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#121212", this.col0 = "#919191", this.col1 = "#5f5f5f", this.col2 = "#4b4b4b", this.col3 = "#373737", this.col4 = "#232323", this.animearray = [{
        name: "1_armon",
        color: "0000ff",
        uniqsnd: !0
    }, {
        name: "2_kick",
        color: "0000ff",
        uniqsnd: !0
    }, {
        name: "3_scutzi",
        color: "0000ff",
        uniqsnd: !0
    }, {
        name: "4_cymbaul",
        color: "0000ff",
        uniqsnd: !0
    }, {
        name: "5_kcu",
        color: "0000ff",
        uniqsnd: !0
    }, {
        name: "6_slapbass",
        color: "f200ff",
        uniqsnd: !1
    }, {
        name: "7_clickbash",
        color: "f200ff",
        uniqsnd: !1
    }, {
        name: "8_clappa",
        color: "f200ff",
        uniqsnd: !0
    }, {
        name: "9_tom",
        color: "f200ff",
        uniqsnd: !0
    }, {
        name: "10_guito",
        color: "f200ff",
        uniqsnd: !1
    }, {
        name: "11_square",
        color: "00f715",
        uniqsnd: !1
    }, {
        name: "12_vio",
        color: "00f715",
        uniqsnd: !1
    }, {
        name: "13_bling",
        color: "00f715",
        uniqsnd: !1
    }, {
        name: "14_demoend",
        color: "00f715",
        uniqsnd: !0
    }, {
        name: "15_demoend",
        color: "00f715",
        uniqsnd: !0
    }, {
        name: "16_demoend",
        color: "f5c000",
        uniqsnd: !0
    }, {
        name: "17_demoend",
        color: "f5c000",
        uniqsnd: !0
    }, {
        name: "18_demoend",
        color: "f5c000",
        uniqsnd: !0
    }, {
        name: "19_demoend",
        color: "f5c000",
        uniqsnd: !0
    }, {
        name: "20_demoend",
        color: "f5c000",
        uniqsnd: !0
    }], this.bonusarray = [/*No bonus lol*/];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};
