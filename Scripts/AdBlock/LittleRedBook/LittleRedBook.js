
const version = 'V1.0.10';

let body = $response.body;
if (body) {
    switch (!0) {
        case/api\/sns\/v\d\/note\/widgets/.test($request.url):
            try {
                let e = JSON.parse(body), t = ["goods_card_v2", "note_next_step"];
                for (let a of t) e.data?.[a] && delete e.data[a];
                body = JSON.stringify(e)
            } catch (s) {
                console.log("widgets: " + s)
            }
            break;
        case/api\/sns\/v\d\/note\/redtube/.test($request.url):
            try {
                let o = JSON.parse(body);
                for (let d of o.data.items) d.related_goods_num && (d.related_goods_num = 0), d.has_related_goods && (d.has_related_goods = !1), d.media_save_config && (d.media_save_config = {
                    disable_save: !1,
                    disable_watermark: !0,
                    disable_weibo_cover: !0
                }), d.share_info && (d.share_info.function_entries = [{type: "video_download"}, {type: "generate_image"}, {type: "copy_link"}, {type: "native_voice"}, {type: "video_speed"}, {type: "dislike"}, {type: "report"}, {type: "video_feedback"}]);
                body = JSON.stringify(o)
            } catch (r) {
                console.log("redtube: " + r)
            }
            break;
        case/api\/sns\/v\d\/note\/videofeed/.test($request.url):
            try {
                let i = JSON.parse(body);
                for (let l of i.data) l.related_goods_num && (l.related_goods_num = 0), l.has_related_goods && (l.has_related_goods = !1), l.media_save_config && (l.media_save_config = {
                    disable_save: !1,
                    disable_watermark: !0,
                    disable_weibo_cover: !0
                }), l.share_info && (l.share_info.function_entries = [{type: "video_download"}, {type: "generate_image"}, {type: "copy_link"}, {type: "native_voice"}, {type: "video_speed"}, {type: "dislike"}, {type: "report"}, {type: "video_feedback"}]);
                body = JSON.stringify(i)
            } catch (n) {
                console.log("videofeed: " + n)
            }
            break;
        case/api\/sns\/v\d\/note\/feed/.test($request.url):
            try {
                let c = JSON.parse(body);
                for (let y of c.data) if (y.related_goods_num && (y.related_goods_num = 0), y.has_related_goods && (y.has_related_goods = !1), y.note_list) for (let g of y.note_list) g.media_save_config = {
                    disable_save: !1,
                    disable_watermark: !0,
                    disable_weibo_cover: !0
                };
                body = JSON.stringify(c)
            } catch (f) {
                console.log("feed: " + f)
            }
            break;
        case/api\/sns\/v\d\/homefeed\/categories\?/.test($request.url):
            try {
                let b = JSON.parse(body);
                b.data.categories = b.data.categories.filter(e => !("homefeed.shop" == e.oid || "homefeed.live" == e.oid)), body = JSON.stringify(b)
            } catch (p) {
                console.log("categories: " + p)
            }
            break;
        case/api\/sns\/v\d\/search\/hint/.test($request.url):
            try {
                let h = JSON.parse(body);
                h.data?.hint_words && (h.data.hint_words = [{
                    title: "搜索笔记",
                    type: "firstEnterOther#itemCfRecWord#搜索笔记#1",
                    search_word: "搜索笔记"
                }]), body = JSON.stringify(h)
            } catch (v) {
                console.log("hint: " + v)
            }
            break;
        case/api\/sns\/v\d\/search\/hot_list/.test($request.url):
            try {
                let m = JSON.parse(body);
                m.data = {
                    scene: "",
                    title: "",
                    items: [],
                    host: "",
                    background_color: {},
                    word_request_id: ""
                }, body = JSON.stringify(m)
            } catch (u) {
                console.log("hot_list: " + u)
            }
            break;
        case/api\/sns\/v\d\/search\/trending/.test($request.url):
            try {
                let k = JSON.parse(body);
                k.data = {title: "", queries: [], type: "", word_request_id: ""}, body = JSON.stringify(k)
            } catch ($) {
                console.log("trending: " + $)
            }
            break;
        case/api\/sns\/v\d\/system_service\/splash_config/.test($request.url):
            try {
                let w = JSON.parse(body);
                w.data.ads_groups.forEach(e => {
                    e.start_time = "2208963661", e.end_time = "2209050061", e.ads && e.ads.forEach(e => {
                        e.start_time = "2208963661", e.end_time = "2209050061"
                    })
                }), body = JSON.stringify(w)
            } catch (_) {
                console.log("splash_config: " + _)
            }
            break;
        case/api\/sns\/v\d\/homefeed\?/.test($request.url):
            try {
                let q = JSON.parse(body);
                q.data = q.data.filter(e => !e.is_ads), body = JSON.stringify(q)
            } catch (E) {
                console.log("homefeed: " + E)
            }
            break;
        case/api\/sns\/v\d\/system_service\/config\?/.test($request.url):
            try {
                let x = JSON.parse(body),
                    C = ["store", "splash", "loading_img", "app_theme", "cmt_words", "highlight_tab"];
                for (let O of C) x.data?.[O] && delete x.data[O];
                body = JSON.stringify(x)
            } catch (R) {
                console.log("system_service: " + R)
            }
            break;
        default:
            $done({})
    }
    $done({body})
} else $done({});