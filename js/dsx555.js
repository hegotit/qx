/*
 大师兄&555


# 555
# https://app-v1.ecoliving168.com/api/v1/advert/config?pack=  开屏广告
# https://a.weilai555.com:1000/api/v1/app/config? url reject
# https://app-v1.ecoliving168.com/api/v1/movie/index_recommend?pack=
# ^https?:\/\/[\w+\.\-\:]+\/api\/v\d\/movie\/index_recommend url script-response-body http://192.168.2.170:8080/dsx555.js

====================================
[rewrite_local]
# 555_
^https?:\/\/[\w+\.\-\:]+\/api\/v\d\/app\/config\? url reject
# 555_开屏
^https?:\/\/[\w+\.\-\:]+\/api\/v\d\/advert\/config\?pack= url reject
#555_首页轮播图 首页信息流 我的页面推广
^https?:\/\/[\w+\.\-\:]+\/api\/v\d\/movie\/index_recommend url script-response-body https://raw.githubusercontent.com/wf021325/qx/master/js/dsx555.js


# 大师兄_去更新弹窗_加密文本
^http:\/\/sdk\.alibaba\.com\.ailbaba\.me\/dsx\.php\/v6\/version url reject
# 大师兄_排行榜页面_加密文本 影响投屏
#^http:\/\/sdk\.alibaba\.com\.ailbaba\.me\/dsx\.php\/v6\/app_config url reject
# 大师兄_去通告_Json对象
^http:\/\/sdk\.alibaba\.com\.ailbaba\.me\/dsx\.php\/v6\/top_notice url reject-dict


[mitm]
hostname = run.api.qyfxgd.cn , *.weilai555.com , *.ecoliving168.com , sdk.alibaba.com.ailbaba.me
====================================
 */

let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

if (url.includes('/movie/index_recommend')) {
    obj.data = obj.data.filter(t => "advert_self" !== t.layout);// data[2].layout='advert_self'  删除 data[2] 留下其他
    obj.data.forEach(t => {
        t.list = t.list.filter(t => 3 !== t.type)//data[0].list[2].type=3  删除 data[0].list[2] 留下其他
    });
    body = JSON.stringify(obj)
}

$done({body});


//data[2].layout='advert_self'
//data[2].data='{"channel":"ios","data":{"image":"https://vpic.cms.qq.com/nj_vpic/2997368263/1672589369406893485/4798783723275000326","url":"https://60074705.com:8888/?channelCode=app-ios"}}'

//data[0].list[2].type=3
//data[0].list[2].image='https://vpic.cms.qq.com/nj_vpic/2997368263/1672587171289317820/1058165247617016544'

//{"msg":"生成成功","data":[{"layout":"index_recommend_carousel","title":"轮播图","list":[{"image":"http://t1.szrtcpa.com/2023/07/26/3cc582eacfe8c.jpg","type":1,"title":"封神第一部","sub_title":"战争,奇幻","label":"热播","click":"796884cc8c25"},{"image":"https://img.ynajax.com:2391/storage/images/2023/07/733/5d29ec3615620beab37c81f7be8f84d2.jpg","type":1,"title":"长安三万里","sub_title":"动画/历史","label":"热播","click":"796885cc8c23"},{"image":"https://vpic.cms.qq.com/nj_vpic/2997368263/1672587171289317820/1058165247617016544","type":3,"title":"","sub_title":"","label":"","click":"https://79553678.com:8888"},{"image":"http://t1.szrtcpa.com/2023/07/05/1aa80cd3ac270.jpg","type":1,"title":"八角笼中","sub_title":"剧情/动作","label":"热播","click":"796a82ce8223"},{"image":"https://vpic.cms.qq.com/nj_vpic/2997368263/1672654115094187954/4939591070217557892","type":3,"title":"","sub_title":"","label":"","click":"https://64334270.com/8hz733"},{"image":"https://img.ynajax.com:2391/storage/images/2023/07/499/445ce461277921c25030eaaa74b442b1.jpg","type":1,"title":"奥本海默","sub_title":"剧情/历史/传记","label":"新片上线","click":"796f85c9"},{"image":"https://vpic.cms.qq.com/nj_vpic/2997368263/1672588080581218318/5656086845064506776","type":3,"title":"","sub_title":"","label":"","click":"https://60942644.com:8888/?channelCode=8044"},{"image":"https://img.ynajax.com:2391/storage/images/2023/07/373/9b9b5597de639ec3b6b41481fb96a142.jpg","type":1,"title":"超能一家人","sub_title":"喜剧 / 家庭 / 奇幻","label":"新片上线","click":"7b6781cd84"},{"image":"https://vpic.cms.qq.com/nj_vpic/2997368263/1677551941128327490/8079528143548149142","type":3,"title":"","sub_title":"","label":"","click":"http://d23f9gkn0byj85.cloudfront.net/swh4bx.pdf"},{"image":"https://t1.szrtcpa.com/2023/07/25/fb7f10b3b4590.jpg","type":1,"title":"茶啊二中","sub_title":"喜剧/奇幻","label":"动画","click":"796885cc8c21"},{"image":"https://img.ynajax.com:2391/storage/images/2023/07/33/9af8479628c6868923e8fc0e92644c2f.jpg","type":1,"title":"别叫我赌神","sub_title":"剧情/家庭/运动","label":"热播","click":"796b87cb842e"}],"right":{}},{"layout":"base","title":"最新上线·全网热播","list":[{"id":"7b66","name":"百炼成神","cover":"https://t1.021huaying.com/uploads/2023-06-10/20/ee53ddf8af24c04b661ab387ef80a575.webp","year":"2022","dynamic":"更新至39集","type_name":"动漫","label":"8.1"},{"id":"7d6f","name":"完美世界","cover":"https://t1.021huaying.com/uploads/2023-06-09/4a/18b8931dd0a27391f62ecaef1960270e.webp","year":"2021","dynamic":"更新至120集","type_name":"动漫","label":"多人收藏"},{"id":"7166","name":"绝世武魂","cover":"https://t1.021huaying.com/uploads/2023-06-10/b1/897ac44e1eb80b21d1acbf7ddcb11be2.webp","year":"2020","dynamic":"第291集","type_name":"动漫","label":"多人收藏"},{"id":"796c8a","name":"刘老根5","cover":"https://t1.021huaying.com/uploads/2023-07-19/7d/6158ddd35bdb0e8d28372f30d297556d.webp","year":"2022","dynamic":"第40集","type_name":"剧集","label":""},{"id":"796a80","name":"狩猎","cover":"https://t1.021huaying.com/uploads/2023-06-09/0b/e451c5abab5310813b5a6b728eef0e97.webp","year":"2022","dynamic":"正片","type_name":"电影","label":"多人收藏"},{"id":"796b81","name":"元龙第三季","cover":"https://t1.021huaying.com/uploads/2023-06-10/92/fe25f239f1f6b641736d2dc09d292ad0.webp","year":"2022","dynamic":"第16集","type_name":"动漫","label":"7.5"},{"id":"796781","name":"是大臣第三季","cover":"https://t1.021huaying.com/uploads/2023-06-09/1a/8300aa475e17d1e18da3c8ed53ff2d70.webp","year":"1982","dynamic":"第7集","type_name":"剧集","label":"9.9"},{"id":"7a6d87","name":"喜剧之王","cover":"https://t1.021huaying.com/uploads/2023-06-09/8a/14714c1da038d4a68293bce89d8e8299.webp","year":"1999","dynamic":"正片","type_name":"电影","label":"高分推荐"},{"id":"7a6981","name":"仙剑奇侠传","cover":"https://t1.021huaying.com/uploads/2023-06-09/cd/33878ac8fae766995e54568e9275e475.webp","year":"2005","dynamic":"更新至13集","type_name":"剧集","label":"9.1"}],"right":{}},{"layout":"advert_self","title":"","list":[],"right":{},"data":{"channel":"ios","data":{"image":"https://vpic.cms.qq.com/nj_vpic/2997368263/1672589369406893485/4798783723275000326","url":"https://60074705.com:8888/?channelCode=app-ios"}}},{"layout":"base","title":"近期热门电影","list":[{"id":"796884cc8c25","name":"封神第一部朝歌风云","cover":"https://t1.021huaying.com/uploads/2023-07-21/16/b2e7c106f8a982c349c1d684e6f37e19.webp","year":"2023","dynamic":"抢先版","type_name":"","label":"7.7"},{"id":"796885cc8c23","name":"长安三万里","cover":"https://t1.021huaying.com/uploads/2023-07-06/ad/a8ae589761c3bedcea622d17fad58c05.webp","year":"2023","dynamic":"更新至抢先版","type_name":"","label":"热度飙升"},{"id":"796a82ce8223","name":"八角笼中","cover":"https://t1.021huaying.com/uploads/2023-06-10/9d/a7e04a386c892727ba0adff894e7ae07.webp","year":"2023","dynamic":"更新至抢先版","type_name":"","label":"热度飙升"},{"id":"796885cc8c21","name":"茶啊二中","cover":"https://t1.021huaying.com/uploads/2023-07-24/38/9bb366894759f990c3d272436feed66a.webp","year":"2023","dynamic":"清晰版","type_name":"","label":"多人收藏"},{"id":"7b6781cd84","name":"超能一家人","cover":"https://t1.021huaying.com/uploads/2023-06-10/a9/e4e0827d7e2544ea9357e880a6db145d.webp","year":"2023","dynamic":"纪录片","type_name":"","label":"多人收藏"},{"id":"796a84cf8521","name":"消失的她","cover":"https://t1.021huaying.com/uploads/2023-06-10/7f/7e7913479076b66bc7c00b7b424b5087.webp","year":"2022","dynamic":"更新至抢先版","type_name":"","label":"推荐"},{"id":"796884cc8327","name":"零号追杀","cover":"https://t1.021huaying.com/uploads/2023-07-21/21/0df6747c1960065272c3d86ffeeb9965.webp","year":"2023","dynamic":"HD","type_name":"","label":"多人收藏"},{"id":"796a87cf8d21","name":"扫毒3人在天涯","cover":"https://t1.021huaying.com/uploads/2023-06-09/df/4298a9cc0bba1b32a9faacc67d7cf16a.webp","year":"2023","dynamic":"先行版","type_name":"","label":"推荐"},{"id":"796b87cb842e","name":"别叫我赌神","cover":"https://t1.021huaying.com/uploads/2023-06-10/22/590decdd77ca0ae9e067e935e064a289.webp","year":"2023","dynamic":"1080P","type_name":"","label":"推荐"}],"right":{"text":"查看更多","type":"tabs","data":{"index":1,"param":{}}}},{"layout":"advert_self","title":"","list":[],"right":{},"data":{"channel":"ios","data":{"image":"https://vpic.cms.qq.com/nj_vpic/2997368263/1672589128373829559/5089327747030259410","url":"https://57929907.com:8888/?channelCode=df199"}}},{"layout":"base","title":"Netflix热门推荐","list":[{"id":"716683","name":"路德灵异侦探社","year":"2023","cover":"https://t1.021huaying.com/uploads/2023-06-09/49/e9a084b7b2f70821859a5c853b912cda.webp","dynamic":"第08集","type_name":"","label":""},{"id":"796880ce8621","name":"绝世网红","year":"2023","cover":"https://t1.021huaying.com/uploads/2023-06-09/1a/0a5df12c670d88431ef1bd04550e72b0.webp","dynamic":"已完结","type_name":"","label":"多人收藏"},{"id":"706782ce87","name":"甜蜜家园","year":"2020","cover":"https://t1.021huaying.com/uploads/2023-06-09/90/a68b83fe964ebf44811afc67920b0db5.webp","dynamic":"第10集","type_name":"","label":"7.8"},{"id":"796a86c8832e","name":"人选之人造浪者","year":"2023","cover":"https://t1.021huaying.com/uploads/2023-06-09/03/c25cfe0c50e6906c884a23f5f00303bf.webp","dynamic":"第08集","type_name":"","label":""},{"id":"7b6c85cf","name":"怪奇物语第一季","year":"2016","cover":"https://t1.021huaying.com/uploads/2023-06-10/4f/e071383aba68891abae3698ba7448167.webp","dynamic":"第08集","type_name":"","label":"9.0"},{"id":"7b6784cb86","name":"米沙与狼","year":"2021","cover":"https://t1.021huaying.com/uploads/2023-06-09/69/5fa2eb0d25f6436131e449d4c4098484.webp","dynamic":"正片","type_name":"","label":""},{"id":"7b6d87ce","name":"国王永远的君主","year":"2020","cover":"https://t1.021huaying.com/uploads/2023-06-09/c5/0be5ceaa57c114ec6f6c46ad42fd7cec.webp","dynamic":"第16集","type_name":"","label":"7.1"},{"id":"796d80cc","name":"维京传奇英灵神殿第二季","year":"2023","cover":"https://t1.021huaying.com/uploads/2023-06-10/0a/001b7db7a6e98d8757b6dea586a5d9b0.webp","dynamic":"第08集","type_name":"","label":""},{"id":"796887cb8724","name":"黑镜第六季","year":"2023","cover":"https://t1.021huaying.com/uploads/2023-06-15/64/dd0d423ed9d1cd021d7258a157130819.webp","dynamic":"5集全","type_name":"","label":"多人收藏"}],"right":{"text":"查看更多","type":"tabs","data":{"index":2,"param":{"class":"netflix"}}}},{"layout":"advert_self","title":"","list":[],"right":{},"data":{"channel":"ios","data":{"image":"https://vpic.cms.qq.com/nj_vpic/2997368263/1672589398708873836/7563543196960949128","url":"https://79553678.com:8888"}}},{"layout":"base","title":"近期热门日韩剧","list":[{"id":"7a6f84c9","name":"金科长","cover":"https://t1.021huaying.com/uploads/2023-06-09/64/fc5f2fbe829ea404fce207d9e2eb54cb.webp","year":"2017","dynamic":"20集全","type_name":"","label":"8.5"},{"id":"7a6a84c4","name":"请回答1988","cover":"https://t1.021huaying.com/uploads/2023-06-09/c3/5837be1dd0c9ea7bd06b425246fed32c.webp","year":"2015","dynamic":"第20集","type_name":"","label":"9.7"},{"id":"7a698bc4","name":"她爱上了我的谎","cover":"https://t1.021huaying.com/uploads/2023-06-09/bd/56ad4f482794eb2ec9df7d0f9cac716e.webp","year":"2017","dynamic":"16集全","type_name":"","label":""},{"id":"7a698ac4","name":"三流之路","cover":"https://t1.021huaying.com/uploads/2023-06-09/e9/ce195e19d3f6b97d19d14d82bd201c1a.webp","year":"2017","dynamic":"第16集","type_name":"","label":"高分推荐"},{"id":"7e6c85c4","name":"失踪他们存在过","cover":"https://t1.021huaying.com/uploads/2023-06-10/62/28b970f71b1921c1bed87d3b53e58e00.webp","year":"2020","dynamic":"12集全","type_name":"","label":"7.7"},{"id":"7f6684cf","name":"孤独的美食家第一季","cover":"https://t1.021huaying.com/uploads/2023-06-09/fc/8443bc3ff24fd47ae14a3b2a1595dddb.webp","year":"2012","dynamic":"第12集","type_name":"","label":"9.0"},{"id":"706c85cf","name":"现在正在分手中","cover":"https://t1.021huaying.com/uploads/2023-06-10/37/59927de0c8910fc7a04b4bfc42906c09.webp","year":"2021","dynamic":"第16集完结","type_name":"","label":""},{"id":"706a8acc","name":"致我的星星","cover":"https://t1.021huaying.com/uploads/2023-06-10/51/1e6f6a802d7a9baab933721bde6e2b13.webp","year":"2021","dynamic":"完结","type_name":"","label":"高分推荐"},{"id":"706982ce","name":"你与世界终结的日子","cover":"https://t1.021huaying.com/uploads/2023-06-09/40/6a326c02898bae039a560b76bd9a84c4.webp","year":"2021","dynamic":"10集全","type_name":"","label":""}],"right":{"text":"查看更多","type":"tabs","data":{"index":2,"param":{}}}},{"layout":"advert_self","title":"","list":[],"right":{},"data":{"channel":"ios","data":{"image":"https://vpic.cms.qq.com/nj_vpic/2997368263/1677552229211955056/7222252661879232335","url":"http://d23f9gkn0byj85.cloudfront.net/swh4bx.pdf"}}},{"layout":"base","title":"近期热门欧美剧","list":[{"id":"796781","name":"是大臣第三季","cover":"https://t1.021huaying.com/uploads/2023-06-09/1a/8300aa475e17d1e18da3c8ed53ff2d70.webp","year":"1982","dynamic":"第7集","type_name":"","label":"高分推荐"},{"id":"7e6a86","name":"朽木第一季","cover":"https://t1.021huaying.com/uploads/2023-06-09/3d/ec59a719d30b98dcbaa8b0761b269365.webp","year":"2004","dynamic":"已完结","type_name":"","label":"高分推荐"},{"id":"706c84","name":"老友记第四季","cover":"https://t1.021huaying.com/uploads/2023-06-09/98/c6976f29d2e8634cabd9a1d9c70a991a.webp","year":"1997","dynamic":"第24集","type_name":"","label":"高分推荐"},{"id":"716683","name":"路德灵异侦探社","cover":"https://t1.021huaying.com/uploads/2023-06-09/49/e9a084b7b2f70821859a5c853b912cda.webp","year":"2023","dynamic":"第08集","type_name":"","label":""},{"id":"796c86ce","name":"燃情克利夫兰第五季","cover":"https://t1.021huaying.com/uploads/2023-06-09/6a/2915f37a3f9d2374cbb853181b583edc.webp","year":"2014","dynamic":"已完结","type_name":"","label":"高分推荐"},{"id":"7c6a82c5","name":"破产姐妹第二季","cover":"https://t1.021huaying.com/uploads/2023-06-09/99/13b4626e2b9d6cea68867ca4d4325179.webp","year":"2012","dynamic":"第24集","type_name":"","label":"8.9"},{"id":"7c6b85cf","name":"黑袍纠察队第一季","cover":"https://t1.021huaying.com/uploads/2023-06-09/ea/71cda33b17cfd5e1561d389db0c3a6e8.webp","year":"2019","dynamic":"第08集","type_name":"","label":"多人收藏"},{"id":"7d6983ca","name":"继承之战第一季","cover":"https://t1.021huaying.com/uploads/2023-06-09/bf/e9d565d4ab30161ba0040a73a5d471b9.webp","year":"2018","dynamic":"第10集","type_name":"","label":"高分推荐"},{"id":"7f6e82cd","name":"西部世界第二季","cover":"https://t1.021huaying.com/uploads/2023-06-10/47/4043c70b537976795599b054965f8798.webp","year":"2018","dynamic":"第10集","type_name":"","label":""}],"right":{"text":"查看更多","type":"tabs","data":{"index":2,"param":{}}}},{"layout":"base","title":"近期热门港台剧","list":[{"id":"7b6e86ca","name":"陀枪师姐3国语","cover":"https://t1.021huaying.com/uploads/2023-06-09/16/8f99629245fcc6d05a0592e7d5371709.webp","year":"2001","dynamic":"已完结","type_name":"","label":"7.9"},{"id":"716f83cf","name":"法证先锋4国语","cover":"https://t1.021huaying.com/uploads/2023-06-10/14/14fce842c22b3fed8a61765e0d13cc18.webp","year":"2020","dynamic":"已完结","type_name":"","label":""},{"id":"796987ce80","name":"盲侠大律师国语","cover":"https://t1.021huaying.com/uploads/2023-06-10/b5/c7ece2f8b6e772c721c0e930932dc9e2.webp","year":"2017","dynamic":"已完结","type_name":"","label":"7.7"},{"id":"796682cc86","name":"男亲女爱","cover":"https://t1.021huaying.com/uploads/2023-06-09/52/45aa14ef49d002c26ffe1c078d536536.webp","year":"2000","dynamic":"第50集","type_name":"","label":"9.3"},{"id":"7b6984c986","name":"大唐双龙传国语","cover":"https://t1.021huaying.com/uploads/2023-06-09/81/0cd0f5887c31a532d6b50dd473cc4e2a.webp","year":"2004","dynamic":"已完结","type_name":"","label":"7.8"},{"id":"706880cf83","name":"我和僵尸有个约会国语第二部","cover":"https://t1.021huaying.com/uploads/2023-06-09/92/a9e8e1e051057a2cc4f40ad8fca95da2.webp","year":"2000","dynamic":"已完结","type_name":"","label":"高分推荐"},{"id":"70668aca8d","name":"篮球火","cover":"https://t1.021huaying.com/uploads/2023-06-10/a4/6c005bb4043a3b180a54443039a98bdd.webp","year":"2008","dynamic":"已完结","type_name":"","label":""},{"id":"716e8bc98c","name":"金宵大厦2粤语","cover":"https://t1.021huaying.com/uploads/2023-06-10/0b/6ca32e44bce6c4609f1fc142fab55cfe.webp","year":"2022","dynamic":"完结","type_name":"","label":"7.3"},{"id":"716b84cd81","name":"C9特工粤语","cover":"https://t1.021huaying.com/uploads/2023-06-10/67/ea77d86e0179394b910fd8eca9e81021.webp","year":"2020","dynamic":"20集全","type_name":"","label":""}],"right":{"text":"查看更多","type":"tabs","data":{"index":2,"param":{}}}},{"layout":"base","title":"近期热门国产剧","list":[{"id":"796c8a","name":"刘老根5","cover":"https://t1.021huaying.com/uploads/2023-07-19/7d/6158ddd35bdb0e8d28372f30d297556d.webp","year":"2022","dynamic":"第40集","type_name":"","label":""},{"id":"7a6981","name":"仙剑奇侠传","cover":"https://t1.021huaying.com/uploads/2023-06-09/cd/33878ac8fae766995e54568e9275e475.webp","year":"2005","dynamic":"更新至13集","type_name":"","label":"9.1"},{"id":"7c6d80","name":"结爱千岁大人的初恋","cover":"https://t1.021huaying.com/uploads/2023-06-10/64/d39aa9b5c83553ee0874866a8376cf1a.webp","year":"2018","dynamic":"宋茜黄景瑜上演千年绝恋","type_name":"","label":"7.1"},{"id":"796787c9","name":"鹤唳华亭","cover":"https://t1.021huaying.com/uploads/2023-06-09/bd/15b830aa70be70c98d00dfe1bac2dee1.webp","year":"2019","dynamic":"第60集","type_name":"","label":"7.1"},{"id":"7a6f84c4","name":"棋魂","cover":"https://t1.021huaying.com/uploads/2023-06-09/b2/898e424a64d181287eba6f916b9300e5.webp","year":"2020","dynamic":"第36集","type_name":"","label":"高分推荐"},{"id":"7a6985c5","name":"剑王朝","cover":"https://t1.021huaying.com/uploads/2023-06-09/2e/c2a102a138cba2b8c3289492ade2ea2b.webp","year":"2019","dynamic":"已完结","type_name":"","label":""},{"id":"7b6983ce","name":"青囊传","cover":"https://t1.021huaying.com/uploads/2023-06-10/8e/be8af1fef5625be2fd22c4cddaa925e0.webp","year":"2019","dynamic":"第36集","type_name":"","label":""},{"id":"7c6980cd","name":"江照黎明","cover":"https://t1.021huaying.com/uploads/2023-06-09/54/076f9f0396d34c132a61578f6feb8fea.webp","year":"2022","dynamic":"第24集","type_name":"","label":""},{"id":"7d6a87cc","name":"红顶商人胡雪岩","cover":"https://t1.021huaying.com/uploads/2023-06-09/f9/c108182bcc6d0f1b020117ba4eaa96ce.webp","year":"2004","dynamic":"已完结","type_name":"","label":"7.6"}],"right":{"text":"查看更多","type":"tabs","data":{"index":2,"param":{}}}},{"layout":"base","title":"近期热门动漫","list":[{"id":"7b66","name":"百炼成神","cover":"https://t1.021huaying.com/uploads/2023-06-10/20/ee53ddf8af24c04b661ab387ef80a575.webp","year":"2022","dynamic":"更新至39集","type_name":"","label":"多人收藏"},{"id":"7d6f","name":"完美世界","cover":"https://t1.021huaying.com/uploads/2023-06-09/4a/18b8931dd0a27391f62ecaef1960270e.webp","year":"2021","dynamic":"更新至120集","type_name":"","label":"多人收藏"},{"id":"7166","name":"绝世武魂","cover":"https://t1.021huaying.com/uploads/2023-06-10/b1/897ac44e1eb80b21d1acbf7ddcb11be2.webp","year":"2020","dynamic":"第291集","type_name":"","label":"多人收藏"},{"id":"796b81","name":"元龙第三季","cover":"https://t1.021huaying.com/uploads/2023-06-10/92/fe25f239f1f6b641736d2dc09d292ad0.webp","year":"2022","dynamic":"第16集","type_name":"","label":"多人收藏"},{"id":"796b84ca","name":"辛普森一家第二十一季","cover":"https://t1.021huaying.com/uploads/2023-06-09/88/659b46f2279fe534dd8d79966aa29fc6.webp","year":"2009","dynamic":"第23集","type_name":"","label":"高分推荐"},{"id":"7a6f86c8","name":"惊爆游戏","cover":"https://t1.021huaying.com/uploads/2023-06-10/d7/c346a378794e46be0c35c0ad512044b3.webp","year":"2012","dynamic":"已完结","type_name":"","label":"7.5"},{"id":"7a6a8ace","name":"无上神帝","cover":"https://t1.021huaying.com/uploads/2023-07-24/78/71618e19a18ac9a0bd442ee1616dfedf.webp","year":"2020","dynamic":"更新至294集","type_name":"","label":"多人收藏"},{"id":"7b6c8bc4","name":"万界至尊","cover":"https://t1.021huaying.com/uploads/2023-06-09/88/c39598ee913d5606869715c14dfc7025.webp","year":"2022","dynamic":"第50集","type_name":"","label":""},{"id":"7b6885cc","name":"假面骑士Decade","cover":"https://t1.021huaying.com/uploads/2023-06-09/49/33b7982b9fd597585546c9f33f7b43d9.webp","year":"2009","dynamic":"已完结","type_name":"","label":"7.6"}],"right":{"text":"查看更多","type":"tabs","data":{"index":4,"param":{}}}},{"layout":"base","title":"近期热门综艺","list":[{"id":"796e86ce","name":"令人心动的offer第四季","cover":"https://t1.021huaying.com/uploads/2023-06-09/f8/57d0fcd8f2e3b08ce86cf5662c188b42.webp","year":"2022","dynamic":"已完结","type_name":"","label":""},{"id":"7b6f87cc","name":"一袋女王","cover":"https://t1.021huaying.com/uploads/2023-06-09/95/44e1fde6493566b62e8edb25bfaa7f2d.webp","year":"2009","dynamic":"更新至20230725","type_name":"","label":""},{"id":"7b6c81cb","name":"欲罢不能第三季","cover":"https://t1.021huaying.com/uploads/2023-06-10/89/7580094b343a5ed9806cd5b73bdbfc4b.webp","year":"2022","dynamic":"已完结","type_name":"","label":""},{"id":"7b6d83c9","name":"综艺大热门","cover":"https://t1.021huaying.com/uploads/2023-06-09/31/35aa96ca913aace98380592fe9789758.webp","year":"2013","dynamic":"更新至20230725","type_name":"","label":"7.5"},{"id":"7f6f85cb","name":"WOW桃姐","cover":"https://t1.021huaying.com/uploads/2023-06-09/3b/5a5bfa0aff2d1035bb0e30d95c4c7403.webp","year":"2022","dynamic":"更新至第20230113期","type_name":"","label":""},{"id":"796880c586","name":"脱口秀大会第五季","cover":"https://t1.021huaying.com/uploads/2023-06-10/28/dc5d964e800ed211250168f23abc1294.webp","year":"2022","dynamic":"年度特辑下","type_name":"","label":""},{"id":"7b6e87cb80","name":"密室大逃脱第一季","cover":"https://t1.021huaying.com/uploads/2023-06-09/a5/80ffcd162e3d097f8329d2ab2403803d.webp","year":"2019","dynamic":"已完结","type_name":"","label":""},{"id":"706882cd8c","name":"喜欢你我也是第一季","cover":"https://t1.021huaying.com/uploads/2023-06-09/60/a013e32609b91443d79880faccf6a77e.webp","year":"2019","dynamic":"已完结","type_name":"","label":"7.0"},{"id":"706884c586","name":"欢乐喜剧人第一季","cover":"https://t1.021huaying.com/uploads/2023-06-10/99/c590ab459dd82aa26948979e98c730af.webp","year":"2015","dynamic":"已完结","type_name":"","label":"高分推荐"}],"right":{"text":"查看更多","type":"tabs","data":{"index":3,"param":{}}}}]}