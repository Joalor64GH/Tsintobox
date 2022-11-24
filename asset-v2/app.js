/* 0.5.4 2022-12-UNRELEASED ??:??:?? */
var app = new function() {
    this.name = "Khram", this.version = "2", this.date = "2022", this.folder = "asset-v2/", this.looptime = 6545, this.bpm = 110, this.totalframe = 232, this.nbpolo = 7, this.nbloopbonus = 4, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 38, this.recminloop = 5, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#1c0d0d", this.col0 = "#EB4B4B", this.col1 = "#C32D2D", this.col2 = "#9B2323", this.col3 = "#691E1E", this.col4 = "#371919", this.animearray = [{
        name: "1_pinat",
        color: "c9ba87",
        uniqsnd: !0
    }, {
        name: "2_baraban",
        color: "c9ba87",
        uniqsnd: !0
    }, {
        name: "3_bongi",
        color: "c9ba87",
        uniqsnd: !0
    }, {
        name: "4_obod",
        color: "c9ba87",
        uniqsnd: !0
    }, {
        name: "5_chasy",
        color: "c9ba87",
        uniqsnd: !0
    }, {
        name: "6_basovyy",
        color: "c9ba87",
        uniqsnd: !0
    }, {
        name: "7_vibroshlepok",
        color: "c9ba87",
        uniqsnd: !0
    }, {
        name: "8_sheyker",
        color: "c9ba87",
        uniqsnd: !0
    }, {
        name: "9_demoend",
        color: "c9ba87",
        uniqsnd: !0
    }, {
        name: "10_demoend",
        color: "c9ba87",
        uniqsnd: !0
    }, {
        name: "11_zashchitnik",
        color: "82a0b8",
        uniqsnd: !0
    }, {
        name: "12_pianino",
        color: "82a0b8",
        uniqsnd: !0
    }, {
        name: "13_piloobraznyy",
        color: "82a0b8",
        uniqsnd: !0
    }, {
        name: "14_skripka",
        color: "82a0b8",
        uniqsnd: !0
    }, {
        name: "15_truba",
        color: "82a0b8",
        uniqsnd: !0
    }, {
        name: "16_demoend",
        color: "82a0b8",
        uniqsnd: !0
    }, {
        name: "17_demoend",
        color: "82a0b8",
        uniqsnd: !0
    }, {
        name: "18_demoend",
        color: "82a0b8",
        uniqsnd: !0
    }, {
        name: "19_demoend",
        color: "82a0b8",
        uniqsnd: !0
    }, {
        name: "20_demoend",
        color: "82a0b8",
        uniqsnd: !0
    }], this.bonusarray = [{
        name: "Unfinished",
        src: "v2-b1-unfinished-hb.mp4",
        code: "1,2,5,11,12",
        sound: "21_bonus_unfinished",
        aspire: "aspire"
    }, {
        name: "Unfinished",
        src: "v2-b2-unfinished-hb.mp4",
        code: "2,4,6,7,15",
        sound: "22_bonus_unfinished",
        aspire: "aspire"
    }, {
        name: "Unfinished",
        src: "v2-b3-unfinished-hb.mp4",
        code: "3,5,8,13,14",
        sound: "23_bonus_unfinished",
        aspire: "aspire"
    }];
    for (var o = 0, n = this.animearray.length; o < n; o++) {
        var i = this.animearray[o].name;
        this.animearray[o].soundA = i + "_a", this.animearray[o].soundB = this.animearray[o].uniqsnd ? i + "_a" : i + "_b", this.animearray[o].anime = i + "-sprite.png", this.animearray[o].animeData = i + ".json"
    }
};