/* =========================================================
   4개국 여행 회화 데이터
   필드: hz=현지표기, py=로마자/병음, pr=한글발음, ko=한국어뜻
   ========================================================= */
const COUNTRIES = {
  tw: {
    code: "tw", flag: "🇹🇼", name: "대만 여행 회화", short: "Taiwan",
    sub: "번체자 · 한글발음 · 한국어뜻 (Web Speech TTS)",
    lang: ["zh-TW", "zh-HK", "zh-CN"],
    theme: { c1: "#c8102e", c2: "#8a0a1f", gold: "#e4b04a", bg: "#fff7ef", border: "#f1d9b3" },
    marketName: "야시장 (夜市)",
    currency: { code: "TWD", symbol: "NT$", name: "대만 달러", krwRate: 44, defaultService: 10 },
    presetMenu: {
      rest: [
        { name: "牛肉麵", price: 220 },
        { name: "滷肉飯", price: 80 },
        { name: "小籠包", price: 200 },
        { name: "炒飯", price: 150 },
        { name: "蚵仔煎", price: 90 },
        { name: "三杯雞", price: 280 },
        { name: "排骨飯", price: 120 },
        { name: "珍珠奶茶", price: 60 },
      ],
      market: [
        { name: "胡椒餅", price: 60 },
        { name: "大腸包小腸", price: 70 },
        { name: "雞排", price: 80 },
        { name: "蚵仔麵線", price: 75 },
        { name: "臭豆腐", price: 70 },
        { name: "大王カスタード", price: 100 },
        { name: "烤魷魚", price: 150 },
        { name: "芒果冰", price: 120 },
      ],
    },
    denominations: { notes: [2000, 1000, 500, 200, 100], coins: [50, 10, 5, 1] },
    data: [
      { id: "greet", title: "기본 인사", icon: "👋", items: [
        { hz: "你好",           py: "nǐ hǎo",                  pr: "니 하오",          ko: "안녕하세요" },
        { hz: "您好",           py: "nín hǎo",                 pr: "닌 하오",          ko: "안녕하세요 (존댓말)" },
        { hz: "早安",           py: "zǎo ān",                  pr: "짜오 안",          ko: "좋은 아침입니다" },
        { hz: "晚安",           py: "wǎn ān",                  pr: "완 안",            ko: "안녕히 주무세요" },
        { hz: "謝謝",           py: "xiè xiè",                 pr: "씨에씨에",         ko: "감사합니다" },
        { hz: "不客氣",         py: "bú kè qì",                pr: "부 커 치",         ko: "천만에요" },
        { hz: "對不起",         py: "duì bù qǐ",               pr: "뚜이 부 치",       ko: "죄송합니다" },
        { hz: "沒關係",         py: "méi guān xi",             pr: "메이 꽌시",        ko: "괜찮아요" },
        { hz: "再見",           py: "zài jiàn",                pr: "짜이 찌엔",        ko: "안녕히 가세요" },
        { hz: "請問",           py: "qǐng wèn",                pr: "칭 원",            ko: "실례합니다 (질문할 때)" },
        { hz: "我是韓國人",     py: "wǒ shì hán guó rén",      pr: "워 스 한궈런",     ko: "저는 한국인입니다" },
        { hz: "我聽不懂",       py: "wǒ tīng bù dǒng",         pr: "워 팅 부 둥",      ko: "못 알아듣겠어요" },
        { hz: "你會說英文嗎?",  py: "nǐ huì shuō yīng wén ma", pr: "니 후이 슈어 잉원 마", ko: "영어 하실 줄 아세요?" },
        { hz: "請再說一次",     py: "qǐng zài shuō yí cì",     pr: "칭 짜이 슈어 이 츠", ko: "다시 말씀해 주세요" },
        { hz: "好的",           py: "hǎo de",                  pr: "하오 더",          ko: "네, 좋아요" },
      ]},
      { id: "food", title: "식당", icon: "🍜", items: [
        { hz: "我要點餐",           py: "wǒ yào diǎn cān",           pr: "워 야오 디엔 찬",     ko: "주문할게요" },
        { hz: "請給我菜單",         py: "qǐng gěi wǒ cài dān",       pr: "칭 게이 워 차이단",   ko: "메뉴판 주세요" },
        { hz: "這個多少錢?",        py: "zhè ge duō shǎo qián",      pr: "쩌거 뚜어 샤오 치엔", ko: "이거 얼마예요?" },
        { hz: "我要這個",           py: "wǒ yào zhè ge",             pr: "워 야오 쩌거",        ko: "이거 주세요" },
        { hz: "推薦什麼?",          py: "tuī jiàn shén me",          pr: "투이 찌엔 션머",      ko: "뭐가 맛있어요? (추천)" },
        { hz: "不要香菜",           py: "bú yào xiāng cài",          pr: "부 야오 샹차이",      ko: "고수 빼주세요" },
        { hz: "不要辣",             py: "bú yào là",                 pr: "부 야오 라",          ko: "맵지 않게 해주세요" },
        { hz: "很好吃",             py: "hěn hǎo chī",               pr: "헌 하오 츠",          ko: "아주 맛있어요" },
        { hz: "請給我一杯水",       py: "qǐng gěi wǒ yì bēi shuǐ",   pr: "칭 게이 워 이 베이 슈이", ko: "물 한 잔 주세요" },
        { hz: "買單",               py: "mǎi dān",                   pr: "마이 딴",             ko: "계산해주세요" },
        { hz: "可以刷卡嗎?",        py: "kě yǐ shuā kǎ ma",          pr: "커이 슈아카 마",      ko: "카드 결제 되나요?" },
        { hz: "我要外帶",           py: "wǒ yào wài dài",            pr: "워 야오 와이 따이",   ko: "포장할게요" },
        { hz: "內用",               py: "nèi yòng",                  pr: "네이 융",             ko: "매장에서 먹어요" },
        { hz: "請再來一份",         py: "qǐng zài lái yí fèn",       pr: "칭 짜이 라이 이 펀",  ko: "하나 더 주세요" },
        { hz: "我對花生過敏",       py: "wǒ duì huā shēng guò mǐn",  pr: "워 뚜이 화셩 꾸어민", ko: "저는 땅콩 알레르기가 있어요" },
        { hz: "廁所在哪裡?",        py: "cè suǒ zài nǎ lǐ",          pr: "처수어 짜이 날리",    ko: "화장실 어디예요?" },
      ]},
      { id: "sight", title: "관광지", icon: "📸", items: [
        { hz: "請問怎麼去?",            py: "qǐng wèn zěn me qù",                pr: "칭원 쩐머 취",        ko: "어떻게 가나요?" },
        { hz: "這附近有什麼好玩的?",    py: "zhè fù jìn yǒu shén me hǎo wán de", pr: "쩌 푸찐 요우 션머 하오 완더", ko: "이 근처에 뭐가 볼만해요?" },
        { hz: "門票多少錢?",            py: "mén piào duō shǎo qián",            pr: "먼 피아오 뚜어샤오 치엔", ko: "입장료가 얼마예요?" },
        { hz: "可以拍照嗎?",            py: "kě yǐ pāi zhào ma",                 pr: "커이 파이짜오 마",    ko: "사진 찍어도 돼요?" },
        { hz: "可以幫我拍照嗎?",        py: "kě yǐ bāng wǒ pāi zhào ma",         pr: "커이 빵 워 파이짜오 마", ko: "사진 좀 찍어주실래요?" },
        { hz: "營業時間是幾點?",        py: "yíng yè shí jiān shì jǐ diǎn",      pr: "잉예 스찌엔 스 지디엔", ko: "영업 시간이 몇 시예요?" },
        { hz: "有英文導覽嗎?",          py: "yǒu yīng wén dǎo lǎn ma",           pr: "요우 잉원 따오란 마", ko: "영어 가이드 있어요?" },
        { hz: "我迷路了",               py: "wǒ mí lù le",                       pr: "워 미 루 러",         ko: "길을 잃었어요" },
        { hz: "這裡是哪裡?",            py: "zhè lǐ shì nǎ lǐ",                  pr: "쩌리 스 날리",        ko: "여기가 어디예요?" },
        { hz: "離這裡遠嗎?",            py: "lí zhè lǐ yuǎn ma",                 pr: "리 쩌리 위엔 마",     ko: "여기서 멀어요?" },
        { hz: "走路可以到嗎?",          py: "zǒu lù kě yǐ dào ma",               pr: "쩌우루 커이 따오 마", ko: "걸어갈 수 있나요?" },
        { hz: "請幫我指路",             py: "qǐng bāng wǒ zhǐ lù",               pr: "칭 빵 워 즈 루",      ko: "길 좀 알려주세요" },
        { hz: "這是紀念品店嗎?",        py: "zhè shì jì niàn pǐn diàn ma",       pr: "쩌 스 찌니엔핀 디엔 마", ko: "여기 기념품 가게인가요?" },
        { hz: "好美!",                  py: "hǎo měi",                           pr: "하오 메이",           ko: "정말 예뻐요!" },
      ]},
      { id: "shop", title: "쇼핑", icon: "🛍️", items: [
        { hz: "這個多少錢?",        py: "zhè ge duō shǎo qián",       pr: "쩌거 뚜어샤오 치엔",  ko: "이거 얼마예요?" },
        { hz: "太貴了",             py: "tài guì le",                 pr: "타이 꾸이 러",        ko: "너무 비싸요" },
        { hz: "可以便宜一點嗎?",    py: "kě yǐ pián yí yì diǎn ma",   pr: "커이 피엔이 이디엔 마", ko: "좀 깎아주실 수 있어요?" },
        { hz: "有打折嗎?",          py: "yǒu dǎ zhé ma",              pr: "요우 다 저 마",       ko: "할인되나요?" },
        { hz: "我只是看看",         py: "wǒ zhǐ shì kàn kan",         pr: "워 즈스 칸칸",        ko: "그냥 구경하는 거예요" },
        { hz: "可以試穿嗎?",        py: "kě yǐ shì chuān ma",         pr: "커이 스촨 마",        ko: "입어봐도 돼요?" },
        { hz: "有大一點的嗎?",      py: "yǒu dà yì diǎn de ma",       pr: "요우 따 이디엔 더 마", ko: "더 큰 사이즈 있어요?" },
        { hz: "有小一點的嗎?",      py: "yǒu xiǎo yì diǎn de ma",     pr: "요우 샤오 이디엔 더 마", ko: "더 작은 사이즈 있어요?" },
        { hz: "有別的顏色嗎?",      py: "yǒu bié de yán sè ma",       pr: "요우 비에더 옌써 마", ko: "다른 색 있어요?" },
        { hz: "我要這個",           py: "wǒ yào zhè ge",              pr: "워 야오 쩌거",        ko: "이걸로 할게요" },
        { hz: "可以刷卡嗎?",        py: "kě yǐ shuā kǎ ma",           pr: "커이 슈아카 마",      ko: "카드 결제 되나요?" },
        { hz: "可以退稅嗎?",        py: "kě yǐ tuì shuì ma",          pr: "커이 투이 슈이 마",   ko: "세금 환급 되나요?" },
        { hz: "請給我收據",         py: "qǐng gěi wǒ shōu jù",        pr: "칭 게이 워 쇼우쮜",   ko: "영수증 주세요" },
        { hz: "請幫我包起來",       py: "qǐng bāng wǒ bāo qǐ lái",    pr: "칭 빵 워 빠오 치라이", ko: "포장해주세요" },
      ]},
      { id: "transport", title: "교통", icon: "🚇", items: [
        { hz: "我要去這裡",          py: "wǒ yào qù zhè lǐ",                 pr: "워 야오 취 쩌리",    ko: "여기로 가주세요 (주소 보이며)" },
        { hz: "到機場多少錢?",       py: "dào jī chǎng duō shǎo qián",       pr: "따오 찌창 뚜어샤오 치엔", ko: "공항까지 얼마예요?" },
        { hz: "請跳錶",              py: "qǐng tiào biǎo",                   pr: "칭 티아오 비아오",   ko: "미터기 켜주세요" },
        { hz: "請在這裡停",          py: "qǐng zài zhè lǐ tíng",             pr: "칭 짜이 쩌리 팅",    ko: "여기서 세워주세요" },
        { hz: "請開後車廂",          py: "qǐng kāi hòu chē xiāng",           pr: "칭 카이 호우 처샹",  ko: "트렁크 열어주세요" },
        { hz: "捷運站在哪裡?",       py: "jié yùn zhàn zài nǎ lǐ",           pr: "지에윈쨘 짜이 날리", ko: "MRT역이 어디예요?" },
        { hz: "我要一張悠遊卡",      py: "wǒ yào yì zhāng yōu yóu kǎ",       pr: "워 야오 이 쨩 요우요우카", ko: "요유카드 한 장 주세요" },
        { hz: "怎麼加值?",           py: "zěn me jiā zhí",                   pr: "쩐머 찌아즈",        ko: "충전 어떻게 해요?" },
        { hz: "這班車去哪裡?",       py: "zhè bān chē qù nǎ lǐ",             pr: "쩌 빤처 취 날리",    ko: "이 차 어디로 가요?" },
        { hz: "下一站是哪裡?",       py: "xià yí zhàn shì nǎ lǐ",            pr: "샤 이 쨘 스 날리",   ko: "다음 역이 어디예요?" },
        { hz: "我要換車嗎?",         py: "wǒ yào huàn chē ma",               pr: "워 야오 환처 마",    ko: "갈아타야 하나요?" },
        { hz: "請問高鐵站怎麼走?",   py: "qǐng wèn gāo tiě zhàn zěn me zǒu", pr: "칭원 까오티에쨘 쩐머 쩌우", ko: "고속철(HSR)역 어떻게 가요?" },
        { hz: "計程車在哪裡招?",     py: "jì chéng chē zài nǎ lǐ zhāo",      pr: "찌청처 짜이 날리 짜오", ko: "택시 어디서 잡아요?" },
        { hz: "塞車嗎?",             py: "sāi chē ma",                       pr: "싸이처 마",          ko: "길 막혀요?" },
      ]},
      { id: "emerg", title: "긴급상황", icon: "🚨", items: [
        { hz: "救命!",               py: "jiù mìng",                              pr: "찌우 밍",             ko: "도와주세요! (살려주세요)" },
        { hz: "請叫救護車",          py: "qǐng jiào jiù hù chē",                  pr: "칭 쨔오 찌우후처",    ko: "구급차 불러주세요" },
        { hz: "請叫警察",            py: "qǐng jiào jǐng chá",                    pr: "칭 쨔오 징차",        ko: "경찰 불러주세요" },
        { hz: "我生病了",            py: "wǒ shēng bìng le",                      pr: "워 셩삥 러",          ko: "저 아파요" },
        { hz: "我肚子痛",            py: "wǒ dù zi tòng",                         pr: "워 뚜즈 퉁",          ko: "배가 아파요" },
        { hz: "我頭痛",              py: "wǒ tóu tòng",                           pr: "워 토우퉁",           ko: "머리가 아파요" },
        { hz: "醫院在哪裡?",         py: "yī yuàn zài nǎ lǐ",                     pr: "이위엔 짜이 날리",    ko: "병원이 어디예요?" },
        { hz: "藥局在哪裡?",         py: "yào jú zài nǎ lǐ",                      pr: "야오쥐 짜이 날리",    ko: "약국이 어디예요?" },
        { hz: "我的錢包掉了",        py: "wǒ de qián bāo diào le",                pr: "워더 치엔빠오 땨오 러", ko: "지갑을 잃어버렸어요" },
        { hz: "我的護照不見了",      py: "wǒ de hù zhào bú jiàn le",              pr: "워더 후짜오 부 찌엔 러", ko: "여권을 잃어버렸어요" },
        { hz: "我的手機被偷了",      py: "wǒ de shǒu jī bèi tōu le",              pr: "워더 쇼우찌 뻬이 토우 러", ko: "휴대폰을 도둑맞았어요" },
        { hz: "請幫我聯絡韓國辦事處", py: "qǐng bāng wǒ lián luò hán guó bàn shì chù", pr: "칭 빵 워 리엔루어 한궈 빤스추", ko: "한국 대표부에 연락해주세요" },
        { hz: "我需要翻譯",          py: "wǒ xū yào fān yì",                      pr: "워 쉬야오 판이",      ko: "통역이 필요해요" },
        { hz: "請幫幫我",            py: "qǐng bāng bāng wǒ",                     pr: "칭 빵빵 워",          ko: "도와주세요" },
      ]},
    ]
  },

  jp: {
    code: "jp", flag: "🇯🇵", name: "일본 여행 회화", short: "Japan",
    sub: "일본어 · 한글발음 · 한국어뜻 (Web Speech TTS)",
    lang: ["ja-JP", "ja"],
    theme: { c1: "#bc002d", c2: "#7a0020", gold: "#e8a5b5", bg: "#fff5f7", border: "#f5d0d8" },
    marketName: "이자카야 (居酒屋)",
    currency: { code: "JPY", symbol: "¥", name: "일본 엔", krwRate: 9.5, defaultService: 10 },
    presetMenu: {
      rest: [
        { name: "ラーメン", price: 1000 },
        { name: "寿司セット", price: 2500 },
        { name: "天ぷら定食", price: 1800 },
        { name: "うどん", price: 800 },
        { name: "牛丼", price: 600 },
        { name: "とんかつ定食", price: 1500 },
        { name: "カレーライス", price: 900 },
        { name: "親子丼", price: 1100 },
      ],
      market: [
        { name: "焼き鳥", price: 350 },
        { name: "唐揚げ", price: 600 },
        { name: "枝豆", price: 400 },
        { name: "餃子", price: 550 },
        { name: "刺身盛り", price: 1500 },
        { name: "お好み焼き", price: 900 },
        { name: "だし巻き卵", price: 600 },
        { name: "生ビール", price: 550 },
      ],
    },
    denominations: { notes: [10000, 5000, 2000, 1000], coins: [500, 100, 50, 10, 5, 1] },
    data: [
      { id: "greet", title: "기본 인사", icon: "👋", items: [
        { hz: "こんにちは",                 py: "konnichiwa",                  pr: "콘니치와",            ko: "안녕하세요" },
        { hz: "おはようございます",         py: "ohayō gozaimasu",             pr: "오하요-고자이마스",   ko: "좋은 아침입니다" },
        { hz: "こんばんは",                 py: "konbanwa",                    pr: "콘방와",              ko: "안녕하세요 (저녁)" },
        { hz: "おやすみなさい",             py: "oyasumi nasai",               pr: "오야스미나사이",      ko: "안녕히 주무세요" },
        { hz: "ありがとうございます",       py: "arigatō gozaimasu",           pr: "아리가토-고자이마스", ko: "감사합니다" },
        { hz: "どういたしまして",           py: "dō itashimashite",            pr: "도-이타시마시테",     ko: "천만에요" },
        { hz: "すみません",                 py: "sumimasen",                   pr: "스미마셍",            ko: "죄송합니다 / 실례합니다" },
        { hz: "大丈夫です",                 py: "daijōbu desu",                pr: "다이죠-부데스",       ko: "괜찮아요" },
        { hz: "さようなら",                 py: "sayōnara",                    pr: "사요-나라",           ko: "안녕히 가세요" },
        { hz: "ちょっとすみません",         py: "chotto sumimasen",            pr: "촛토 스미마셍",       ko: "실례합니다 (질문)" },
        { hz: "韓国人です",                 py: "kankokujin desu",             pr: "캉코쿠진 데스",       ko: "한국인입니다" },
        { hz: "分かりません",               py: "wakarimasen",                 pr: "와카리마셍",          ko: "못 알아듣겠어요" },
        { hz: "英語が話せますか?",          py: "eigo ga hanasemasu ka",       pr: "에이고가 하나세마스카", ko: "영어 하실 줄 아세요?" },
        { hz: "もう一度お願いします",       py: "mō ichido onegai shimasu",    pr: "모-이치도 오네가이시마스", ko: "다시 말씀해 주세요" },
        { hz: "はい、いいです",             py: "hai, ii desu",                pr: "하이, 이-데스",       ko: "네, 좋아요" },
      ]},
      { id: "food", title: "식당", icon: "🍣", items: [
        { hz: "注文します",                 py: "chūmon shimasu",              pr: "츄-몬 시마스",        ko: "주문할게요" },
        { hz: "メニューください",           py: "menyū kudasai",               pr: "메뉴- 쿠다사이",      ko: "메뉴판 주세요" },
        { hz: "これはいくらですか?",        py: "kore wa ikura desu ka",       pr: "코레와 이쿠라데스카", ko: "이거 얼마예요?" },
        { hz: "これください",               py: "kore kudasai",                pr: "코레 쿠다사이",       ko: "이거 주세요" },
        { hz: "おすすめは何ですか?",        py: "osusume wa nan desu ka",      pr: "오스스메와 난데스카", ko: "뭐가 맛있어요?" },
        { hz: "パクチー抜きでお願いします", py: "pakuchī nuki de onegaishimasu", pr: "파쿠치- 누키데 오네가이시마스", ko: "고수 빼주세요" },
        { hz: "辛くしないでください",       py: "karaku shinaide kudasai",     pr: "카라쿠 시나이데 쿠다사이", ko: "맵지 않게 해주세요" },
        { hz: "とても美味しいです",         py: "totemo oishii desu",          pr: "토테모 오이시-데스",  ko: "아주 맛있어요" },
        { hz: "お水ください",               py: "o-mizu kudasai",              pr: "오미즈 쿠다사이",     ko: "물 한 잔 주세요" },
        { hz: "お会計お願いします",         py: "o-kaikei onegaishimasu",      pr: "오카이케- 오네가이시마스", ko: "계산해주세요" },
        { hz: "カードで払えますか?",        py: "kādo de haraemasu ka",        pr: "카-도데 하라에마스카", ko: "카드 결제 되나요?" },
        { hz: "持ち帰りでお願いします",     py: "mochikaeri de onegaishimasu", pr: "모치카에리데 오네가이시마스", ko: "포장할게요" },
        { hz: "店内で食べます",             py: "tennai de tabemasu",          pr: "텐나이데 타베마스",   ko: "매장에서 먹어요" },
        { hz: "もう一つください",           py: "mō hitotsu kudasai",          pr: "모- 히토츠 쿠다사이", ko: "하나 더 주세요" },
        { hz: "ピーナッツアレルギーです", py: "pīnattsu arerugī desu",        pr: "피-낫츠 아레루기-데스", ko: "땅콩 알레르기가 있어요" },
        { hz: "トイレはどこですか?",        py: "toire wa doko desu ka",       pr: "토이레와 도코데스카", ko: "화장실 어디예요?" },
      ]},
      { id: "sight", title: "관광지", icon: "📸", items: [
        { hz: "どうやって行きますか?",      py: "dō yatte ikimasu ka",                pr: "도-얏테 이키마스카",  ko: "어떻게 가나요?" },
        { hz: "この近くに何かありますか?",  py: "kono chikaku ni nanika arimasu ka",  pr: "코노 치카쿠니 나니카 아리마스카", ko: "이 근처에 뭐가 볼만해요?" },
        { hz: "入場料はいくらですか?",      py: "nyūjōryō wa ikura desu ka",          pr: "뉴-죠-료-와 이쿠라데스카", ko: "입장료가 얼마예요?" },
        { hz: "写真を撮ってもいいですか?",  py: "shashin o tottemo ii desu ka",       pr: "샤신오 톳테모 이-데스카", ko: "사진 찍어도 돼요?" },
        { hz: "写真を撮ってもらえますか?",  py: "shashin o totte moraemasu ka",       pr: "샤신오 톳테 모라에마스카", ko: "사진 좀 찍어주실래요?" },
        { hz: "営業時間は何時ですか?",      py: "eigyō jikan wa nanji desu ka",       pr: "에-교- 지칸와 난지데스카", ko: "영업 시간이 몇 시예요?" },
        { hz: "英語のガイドはありますか?", py: "eigo no gaido wa arimasu ka",         pr: "에-고노 가이도와 아리마스카", ko: "영어 가이드 있어요?" },
        { hz: "道に迷いました",             py: "michi ni mayoimashita",              pr: "미치니 마요이마시타", ko: "길을 잃었어요" },
        { hz: "ここはどこですか?",          py: "koko wa doko desu ka",               pr: "코코와 도코데스카",   ko: "여기가 어디예요?" },
        { hz: "遠いですか?",                py: "tōi desu ka",                        pr: "토-이데스카",         ko: "여기서 멀어요?" },
        { hz: "歩いて行けますか?",          py: "aruite ikemasu ka",                  pr: "아루이테 이케마스카", ko: "걸어갈 수 있나요?" },
        { hz: "道を教えてください",         py: "michi o oshiete kudasai",            pr: "미치오 오시에테 쿠다사이", ko: "길 좀 알려주세요" },
        { hz: "ここはお土産屋さんですか?",  py: "koko wa o-miyageya-san desu ka",     pr: "코코와 오미야게야상 데스카", ko: "기념품 가게인가요?" },
        { hz: "きれいですね!",              py: "kirei desu ne",                      pr: "키레이데스네",        ko: "정말 예뻐요!" },
      ]},
      { id: "shop", title: "쇼핑", icon: "🛍️", items: [
        { hz: "これはいくらですか?",        py: "kore wa ikura desu ka",               pr: "코레와 이쿠라데스카",   ko: "이거 얼마예요?" },
        { hz: "高すぎます",                 py: "takasugimasu",                        pr: "타카스기마스",          ko: "너무 비싸요" },
        { hz: "少し安くしてください",       py: "sukoshi yasuku shite kudasai",        pr: "스코시 야스쿠 시테 쿠다사이", ko: "좀 깎아주세요" },
        { hz: "割引はありますか?",          py: "waribiki wa arimasu ka",              pr: "와리비키와 아리마스카", ko: "할인되나요?" },
        { hz: "見ているだけです",           py: "mite iru dake desu",                  pr: "미테이루다케데스",      ko: "그냥 구경하는 거예요" },
        { hz: "試着してもいいですか?",      py: "shichaku shitemo ii desu ka",         pr: "시챠쿠 시테모 이-데스카", ko: "입어봐도 돼요?" },
        { hz: "大きいサイズはありますか?",  py: "ōkii saizu wa arimasu ka",            pr: "오-키- 사이즈와 아리마스카", ko: "더 큰 사이즈 있어요?" },
        { hz: "小さいサイズはありますか?",  py: "chiisai saizu wa arimasu ka",         pr: "치-사이 사이즈와 아리마스카", ko: "더 작은 사이즈 있어요?" },
        { hz: "別の色はありますか?",        py: "betsu no iro wa arimasu ka",          pr: "베츠노 이로와 아리마스카", ko: "다른 색 있어요?" },
        { hz: "これにします",               py: "kore ni shimasu",                     pr: "코레니 시마스",         ko: "이걸로 할게요" },
        { hz: "カードで払えますか?",        py: "kādo de haraemasu ka",                pr: "카-도데 하라에마스카",  ko: "카드 결제 되나요?" },
        { hz: "免税できますか?",            py: "menzei dekimasu ka",                  pr: "멘제이 데키마스카",     ko: "세금 환급 되나요?" },
        { hz: "レシートをください",         py: "reshīto o kudasai",                   pr: "레시-토오 쿠다사이",    ko: "영수증 주세요" },
        { hz: "包んでください",             py: "tsutsunde kudasai",                   pr: "츠츤데 쿠다사이",       ko: "포장해주세요" },
      ]},
      { id: "transport", title: "교통", icon: "🚇", items: [
        { hz: "ここまでお願いします",       py: "koko made onegaishimasu",             pr: "코코마데 오네가이시마스", ko: "여기로 가주세요" },
        { hz: "空港までいくらですか?",      py: "kūkō made ikura desu ka",             pr: "쿠-코-마데 이쿠라데스카", ko: "공항까지 얼마예요?" },
        { hz: "メーターをお願いします",     py: "mētā o onegaishimasu",                pr: "메-타-오 오네가이시마스", ko: "미터기 켜주세요" },
        { hz: "ここで止めてください",       py: "koko de tomete kudasai",              pr: "코코데 토메테 쿠다사이", ko: "여기서 세워주세요" },
        { hz: "トランクを開けてください",   py: "toranku o akete kudasai",             pr: "토랑쿠오 아케테 쿠다사이", ko: "트렁크 열어주세요" },
        { hz: "駅はどこですか?",            py: "eki wa doko desu ka",                 pr: "에키와 도코데스카",     ko: "지하철역이 어디예요?" },
        { hz: "ICカードが欲しいです",       py: "IC kādo ga hoshii desu",              pr: "아이씨- 카-도가 호시-데스", ko: "교통카드 주세요" },
        { hz: "どうやってチャージしますか?", py: "dō yatte chāji shimasu ka",          pr: "도-얏테 챠-지 시마스카", ko: "충전 어떻게 해요?" },
        { hz: "この電車はどこ行きですか?",  py: "kono densha wa doko iki desu ka",     pr: "코노 덴샤와 도코이키데스카", ko: "이 차 어디로 가요?" },
        { hz: "次の駅はどこですか?",        py: "tsugi no eki wa doko desu ka",        pr: "츠기노 에키와 도코데스카", ko: "다음 역이 어디예요?" },
        { hz: "乗り換えますか?",            py: "norikaemasu ka",                      pr: "노리카에마스카",        ko: "갈아타야 하나요?" },
        { hz: "新幹線の駅はどこですか?",    py: "shinkansen no eki wa doko desu ka",   pr: "신칸센노 에키와 도코데스카", ko: "신칸센역 어디예요?" },
        { hz: "タクシー乗り場はどこですか?", py: "takushī noriba wa doko desu ka",      pr: "타쿠시- 노리바와 도코데스카", ko: "택시 어디서 잡아요?" },
        { hz: "渋滞していますか?",          py: "jūtai shite imasu ka",                pr: "쥬-타이 시테이마스카",  ko: "길 막혀요?" },
      ]},
      { id: "emerg", title: "긴급상황", icon: "🚨", items: [
        { hz: "助けて!",                    py: "tasukete",                            pr: "타스케테",              ko: "도와주세요!" },
        { hz: "救急車を呼んでください",     py: "kyūkyūsha o yonde kudasai",           pr: "큐-큐-샤오 욘데 쿠다사이", ko: "구급차 불러주세요" },
        { hz: "警察を呼んでください",       py: "keisatsu o yonde kudasai",            pr: "케이사츠오 욘데 쿠다사이", ko: "경찰 불러주세요" },
        { hz: "病気です",                   py: "byōki desu",                          pr: "뵤-키데스",             ko: "저 아파요" },
        { hz: "お腹が痛いです",             py: "onaka ga itai desu",                  pr: "오나카가 이타이데스",   ko: "배가 아파요" },
        { hz: "頭が痛いです",               py: "atama ga itai desu",                  pr: "아타마가 이타이데스",   ko: "머리가 아파요" },
        { hz: "病院はどこですか?",          py: "byōin wa doko desu ka",               pr: "뵤-인와 도코데스카",    ko: "병원이 어디예요?" },
        { hz: "薬局はどこですか?",          py: "yakkyoku wa doko desu ka",            pr: "약쿄쿠와 도코데스카",   ko: "약국이 어디예요?" },
        { hz: "財布を失くしました",         py: "saifu o nakushimashita",              pr: "사이후오 나쿠시마시타", ko: "지갑을 잃어버렸어요" },
        { hz: "パスポートを失くしました",   py: "pasupōto o nakushimashita",           pr: "파스포-토오 나쿠시마시타", ko: "여권을 잃어버렸어요" },
        { hz: "スマホを盗まれました",       py: "sumaho o nusumaremashita",            pr: "스마호오 누스마레마시타", ko: "휴대폰을 도둑맞았어요" },
        { hz: "韓国大使館に連絡してください", py: "kankoku taishikan ni renraku shite kudasai", pr: "캉코쿠 타이시칸니 렌라쿠 시테 쿠다사이", ko: "한국 대사관에 연락해주세요" },
        { hz: "通訳が必要です",             py: "tsūyaku ga hitsuyō desu",             pr: "츠-야쿠가 히츠요-데스", ko: "통역이 필요해요" },
        { hz: "助けてください",             py: "tasukete kudasai",                    pr: "타스케테 쿠다사이",     ko: "도와주세요" },
      ]},
    ]
  },

  th: {
    code: "th", flag: "🇹🇭", name: "태국 여행 회화", short: "Thailand",
    sub: "태국어 · 한글발음 · 한국어뜻 (Web Speech TTS)",
    lang: ["th-TH", "th"],
    theme: { c1: "#ed8936", c2: "#9c4221", gold: "#fbd38d", bg: "#fffaf0", border: "#fbd38d" },
    marketName: "야시장 (ตลาดกลางคืน)",
    currency: { code: "THB", symbol: "฿", name: "태국 바트", krwRate: 40, defaultService: 17 },
    presetMenu: {
      rest: [
        { name: "ผัดไทย", price: 80 },
        { name: "ต้มยำกุ้ง", price: 150 },
        { name: "แกงเขียวหวาน", price: 120 },
        { name: "ข้าวผัด", price: 70 },
        { name: "ส้มตำ", price: 60 },
        { name: "ก๋วยเตี๋ยว", price: 60 },
        { name: "ผัดกะเพรา", price: 80 },
        { name: "ข้าวมันไก่", price: 70 },
      ],
      market: [
        { name: "หมูปิ้ง", price: 15 },
        { name: "มะม่วงข้าวเหนียว", price: 80 },
        { name: "ปอเปี๊ยะ", price: 30 },
        { name: "ลูกชิ้นปิ้ง", price: 20 },
        { name: "ไก่ทอด", price: 60 },
        { name: "เครป", price: 50 },
        { name: "น้ำมะพร้าว", price: 40 },
        { name: "โรตี", price: 40 },
      ],
    },
    denominations: { notes: [1000, 500, 100, 50, 20], coins: [10, 5, 2, 1] },
    data: [
      { id: "greet", title: "기본 인사", icon: "🙏", items: [
        { hz: "สวัสดี",                       py: "sawatdee",                pr: "싸왓디-",              ko: "안녕하세요" },
        { hz: "สวัสดีครับ/ค่ะ",                py: "sawatdee khrap/kha",      pr: "싸왓디- 크랍/카",      ko: "안녕하세요 (남/여)" },
        { hz: "อรุณสวัสดิ์",                  py: "arun sawat",              pr: "아룬 싸왓",            ko: "좋은 아침입니다" },
        { hz: "ราตรีสวัสดิ์",                 py: "ratri sawat",             pr: "라뜨리- 싸왓",         ko: "안녕히 주무세요" },
        { hz: "ขอบคุณ",                       py: "khop khun",               pr: "컵쿤",                 ko: "감사합니다" },
        { hz: "ไม่เป็นไร",                    py: "mai pen rai",             pr: "마이 뺀 라이",         ko: "천만에요 / 괜찮아요" },
        { hz: "ขอโทษ",                        py: "kho thot",                pr: "커- 톳",               ko: "죄송합니다" },
        { hz: "ลาก่อน",                       py: "la kon",                  pr: "라- 껀",               ko: "안녕히 가세요" },
        { hz: "ขอถามหน่อย",                   py: "kho tham noi",            pr: "커- 탐 너이",          ko: "실례합니다 (질문)" },
        { hz: "ผม/ฉันเป็นคนเกาหลี",          py: "phom/chan pen khon kaoli", pr: "폼/찬 뺀 콘 까올리-", ko: "저는 한국인입니다" },
        { hz: "ฟังไม่เข้าใจ",                 py: "fang mai khao chai",      pr: "팡 마이 카오 짜이",    ko: "못 알아듣겠어요" },
        { hz: "พูดภาษาอังกฤษได้ไหม",          py: "phut phasa angkrit dai mai", pr: "풋 파-사- 앙끄릿 다이 마이", ko: "영어 하실 줄 아세요?" },
        { hz: "พูดอีกครั้งได้ไหม",            py: "phut ik khrang dai mai",  pr: "풋 익 크랑 다이 마이", ko: "다시 말씀해 주세요" },
        { hz: "ตกลง",                         py: "tok long",                pr: "똑 롱",                ko: "네, 좋아요" },
      ]},
      { id: "food", title: "식당", icon: "🍲", items: [
        { hz: "ขอสั่งอาหาร",                  py: "kho sang ahan",           pr: "커- 쌍 아한-",         ko: "주문할게요" },
        { hz: "ขอเมนูหน่อย",                  py: "kho menu noi",            pr: "커- 메누- 너이",       ko: "메뉴판 주세요" },
        { hz: "อันนี้เท่าไหร่",                py: "an ni thao rai",         pr: "안 니- 타오 라이",     ko: "이거 얼마예요?" },
        { hz: "เอาอันนี้",                    py: "ao an ni",                pr: "아오 안 니-",          ko: "이거 주세요" },
        { hz: "แนะนำอะไรครับ/ค่ะ",            py: "naenam arai khrap/kha",   pr: "내- 남 아라이 크랍/카", ko: "뭐가 맛있어요?" },
        { hz: "ไม่เอาผักชี",                  py: "mai ao phak chi",         pr: "마이 아오 팍치-",      ko: "고수 빼주세요" },
        { hz: "ไม่เผ็ด",                      py: "mai phet",                pr: "마이 펫",              ko: "맵지 않게 해주세요" },
        { hz: "อร่อยมาก",                     py: "aroi mak",                pr: "아러이 막",            ko: "아주 맛있어요" },
        { hz: "ขอน้ำหน่อย",                   py: "kho nam noi",             pr: "커- 남- 너이",         ko: "물 한 잔 주세요" },
        { hz: "เช็คบิลครับ/ค่ะ",               py: "chek bin khrap/kha",     pr: "첵빈 크랍/카",         ko: "계산해주세요" },
        { hz: "จ่ายบัตรได้ไหม",                py: "chai bat dai mai",       pr: "짜이 밧 다이 마이",    ko: "카드 결제 되나요?" },
        { hz: "เอากลับบ้าน",                  py: "ao klap baan",            pr: "아오 끌랍 반-",        ko: "포장할게요" },
        { hz: "ทานที่นี่",                    py: "than thi ni",             pr: "탄 티- 니-",           ko: "매장에서 먹어요" },
        { hz: "ขออีกที่",                     py: "kho ik thi",              pr: "커- 익 티-",           ko: "하나 더 주세요" },
        { hz: "ผม/ฉันแพ้ถั่ว",                py: "phom/chan phae thua",     pr: "폼/찬 패- 투-아",      ko: "땅콩 알레르기 있어요" },
        { hz: "ห้องน้ำอยู่ที่ไหน",            py: "hong nam yu thi nai",     pr: "헝 남- 유- 티- 나이",  ko: "화장실 어디예요?" },
      ]},
      { id: "sight", title: "관광지", icon: "📸", items: [
        { hz: "ไปยังไง",                      py: "pai yang ngai",           pr: "빠이 양응아이",        ko: "어떻게 가나요?" },
        { hz: "แถวนี้มีอะไรน่าเที่ยว",        py: "thaeo ni mi arai na thiao", pr: "태우 니- 미- 아라이 나- 티-아오", ko: "이 근처 볼만한 곳?" },
        { hz: "ค่าเข้าเท่าไหร่",              py: "kha khao thao rai",       pr: "카- 카오 타오 라이",   ko: "입장료가 얼마예요?" },
        { hz: "ถ่ายรูปได้ไหม",                py: "thai rup dai mai",        pr: "타이 룹 다이 마이",    ko: "사진 찍어도 돼요?" },
        { hz: "ช่วยถ่ายรูปให้หน่อย",          py: "chuai thai rup hai noi",  pr: "추-아이 타이 룹 하이 너이", ko: "사진 좀 찍어주세요" },
        { hz: "เปิดกี่โมง",                   py: "poet ki mong",            pr: "쁘ㅓㅈ 끼- 몽",        ko: "영업 시간이 몇 시예요?" },
        { hz: "มีไกด์ภาษาอังกฤษไหม",          py: "mi gai phasa angkrit mai",pr: "미- 가이 파-사- 앙끄릿 마이", ko: "영어 가이드 있어요?" },
        { hz: "หลงทาง",                       py: "long thang",              pr: "롱 탕-",               ko: "길을 잃었어요" },
        { hz: "ที่นี่คือที่ไหน",              py: "thi ni khue thi nai",     pr: "티- 니- 크-ㅣ 티- 나이", ko: "여기가 어디예요?" },
        { hz: "ไกลไหม",                       py: "klai mai",                pr: "끌라이 마이",          ko: "멀어요?" },
        { hz: "เดินไปได้ไหม",                 py: "doen pai dai mai",        pr: "떠은 빠이 다이 마이",  ko: "걸어갈 수 있나요?" },
        { hz: "ช่วยบอกทางหน่อย",              py: "chuai bok thang noi",     pr: "추-아이 벅 탕- 너이",  ko: "길 좀 알려주세요" },
        { hz: "ที่นี่ขายของฝากไหม",           py: "thi ni khai khong fak mai", pr: "티- 니- 카이 컹 팍- 마이", ko: "기념품 가게인가요?" },
        { hz: "สวยมาก",                       py: "suai mak",                pr: "쑤-아이 막",           ko: "정말 예뻐요!" },
      ]},
      { id: "shop", title: "쇼핑", icon: "🛍️", items: [
        { hz: "อันนี้เท่าไหร่",                py: "an ni thao rai",         pr: "안 니- 타오 라이",     ko: "이거 얼마예요?" },
        { hz: "แพงเกินไป",                    py: "phaeng koen pai",         pr: "팽- 끄ㅓㄴ 빠이",      ko: "너무 비싸요" },
        { hz: "ลดได้ไหม",                     py: "lot dai mai",             pr: "롯 다이 마이",         ko: "좀 깎아주실 수 있어요?" },
        { hz: "มีลดราคาไหม",                  py: "mi lot rakha mai",        pr: "미- 롯 라카- 마이",    ko: "할인되나요?" },
        { hz: "แค่ดูเฉยๆ",                    py: "khae du choei choei",     pr: "캐- 두- 처-이 처-이",  ko: "그냥 구경하는 거예요" },
        { hz: "ลองได้ไหม",                    py: "long dai mai",            pr: "렁- 다이 마이",        ko: "입어봐도 돼요?" },
        { hz: "มีไซส์ใหญ่กว่านี้ไหม",         py: "mi sai yai kwa ni mai",   pr: "미- 사이 야이 꽈- 니- 마이", ko: "더 큰 사이즈 있어요?" },
        { hz: "มีไซส์เล็กกว่านี้ไหม",         py: "mi sai lek kwa ni mai",   pr: "미- 사이 렉 꽈- 니- 마이", ko: "더 작은 사이즈 있어요?" },
        { hz: "มีสีอื่นไหม",                  py: "mi si uen mai",           pr: "미- 씨- 으-ㄴ 마이",   ko: "다른 색 있어요?" },
        { hz: "เอาอันนี้",                    py: "ao an ni",                pr: "아오 안 니-",          ko: "이걸로 할게요" },
        { hz: "จ่ายบัตรได้ไหม",               py: "chai bat dai mai",        pr: "짜이 밧 다이 마이",    ko: "카드 결제 되나요?" },
        { hz: "ขอ tax refund ได้ไหม",         py: "kho tax refund dai mai", pr: "커- 택스 리펀드 다이 마이", ko: "세금 환급 되나요?" },
        { hz: "ขอใบเสร็จ",                    py: "kho bai set",             pr: "커- 바이 셋",          ko: "영수증 주세요" },
        { hz: "ช่วยห่อให้หน่อย",              py: "chuai ho hai noi",        pr: "추-아이 허- 하이 너이", ko: "포장해주세요" },
      ]},
      { id: "transport", title: "교통", icon: "🛺", items: [
        { hz: "ไปที่นี่",                     py: "pai thi ni",              pr: "빠이 티- 니-",         ko: "여기로 가주세요" },
        { hz: "ไปสนามบินเท่าไหร่",            py: "pai sanam bin thao rai",  pr: "빠이 싸남- 빈 타오 라이", ko: "공항까지 얼마예요?" },
        { hz: "เปิดมิเตอร์หน่อย",             py: "poet miter noi",          pr: "쁘ㅓㅈ 미떠- 너이",    ko: "미터기 켜주세요" },
        { hz: "จอดตรงนี้",                    py: "chot trong ni",           pr: "쩟 뜨롱 니-",          ko: "여기서 세워주세요" },
        { hz: "เปิดท้ายรถ",                   py: "poet thai rot",           pr: "쁘ㅓㅈ 타이 롯",       ko: "트렁크 열어주세요" },
        { hz: "BTS อยู่ที่ไหน",               py: "BTS yu thi nai",          pr: "비-티-에스 유- 티- 나이", ko: "BTS역이 어디예요?" },
        { hz: "ขอบัตรแรบบิท",                 py: "kho bat rabbit",          pr: "커- 밧 래빗",          ko: "래빗카드 주세요" },
        { hz: "เติมเงินยังไง",                py: "toem ngoen yang ngai",    pr: "뜸 응언 양응아이",     ko: "충전 어떻게 해요?" },
        { hz: "รถคันนี้ไปไหน",                py: "rot khan ni pai nai",     pr: "롯 칸 니- 빠이 나이",  ko: "이 차 어디로 가요?" },
        { hz: "ป้ายต่อไปคือที่ไหน",           py: "pai to pai khue thi nai", pr: "빠-이 떠- 빠이 크-ㅣ 티- 나이", ko: "다음 역이 어디예요?" },
        { hz: "ต้องเปลี่ยนรถไหม",             py: "tong plian rot mai",      pr: "떵 쁠리-안 롯 마이",   ko: "갈아타야 하나요?" },
        { hz: "สถานีรถไฟอยู่ที่ไหน",          py: "sathani rot fai yu thi nai", pr: "싸타-니- 롯 파이 유- 티- 나이", ko: "기차역이 어디예요?" },
        { hz: "ตรงไหนเรียกแท็กซี่",           py: "trong nai riak taxi",     pr: "뜨롱 나이 리-악 택시-",ko: "택시 어디서 잡아요?" },
        { hz: "รถติดไหม",                     py: "rot tit mai",             pr: "롯 띳 마이",           ko: "길 막혀요?" },
      ]},
      { id: "emerg", title: "긴급상황", icon: "🚨", items: [
        { hz: "ช่วยด้วย",                     py: "chuai duai",              pr: "추-아이 두-아이",      ko: "도와주세요!" },
        { hz: "เรียกรถพยาบาล",                py: "riak rot phayaban",       pr: "리-악 롯 파야반-",     ko: "구급차 불러주세요" },
        { hz: "เรียกตำรวจ",                   py: "riak tamruat",            pr: "리-악 땀루-앗",        ko: "경찰 불러주세요" },
        { hz: "ผม/ฉันป่วย",                   py: "phom/chan puai",          pr: "폼/찬 뿌-아이",        ko: "저 아파요" },
        { hz: "ปวดท้อง",                      py: "puat thong",              pr: "뿌-앗 텅-",            ko: "배가 아파요" },
        { hz: "ปวดหัว",                       py: "puat hua",                pr: "뿌-앗 후-아",          ko: "머리가 아파요" },
        { hz: "โรงพยาบาลอยู่ที่ไหน",          py: "rong phayaban yu thi nai", pr: "롱 파야반- 유- 티- 나이", ko: "병원이 어디예요?" },
        { hz: "ร้านขายยาอยู่ที่ไหน",          py: "ran khai ya yu thi nai",  pr: "란- 카이 야- 유- 티- 나이", ko: "약국이 어디예요?" },
        { hz: "กระเป๋าเงินหายไป",             py: "krapao ngoen hai pai",    pr: "끄라빠오 응언 하이 빠이", ko: "지갑을 잃어버렸어요" },
        { hz: "หนังสือเดินทางหาย",            py: "nangsue doenthang hai",   pr: "낭쓰- 떠은탕- 하이",   ko: "여권을 잃어버렸어요" },
        { hz: "มือถือถูกขโมย",                py: "muethue thuk khamoei",    pr: "므-트- 툭 카머이",     ko: "휴대폰을 도둑맞았어요" },
        { hz: "ช่วยติดต่อสถานทูตเกาหลี",      py: "chuai tit to sathan thut kaoli", pr: "추-아이 띳 떠- 싸타-ㄴ 툿 까올리-", ko: "한국 대사관에 연락해주세요" },
        { hz: "ต้องการล่าม",                  py: "tong kan lam",            pr: "떵 깐- 람-",           ko: "통역이 필요해요" },
        { hz: "ช่วยฉันด้วย",                  py: "chuai chan duai",         pr: "추-아이 찬 두-아이",   ko: "도와주세요" },
      ]},
    ]
  },

  vn: {
    code: "vn", flag: "🇻🇳", name: "베트남 여행 회화", short: "Vietnam",
    sub: "베트남어 · 한글발음 · 한국어뜻 (Web Speech TTS)",
    lang: ["vi-VN", "vi"],
    theme: { c1: "#da251d", c2: "#8a0a0a", gold: "#ffcd00", bg: "#fffdf2", border: "#fde68a" },
    marketName: "야시장 (Chợ đêm)",
    currency: { code: "VND", symbol: "₫", name: "베트남 동", krwRate: 0.055, defaultService: 15 },
    presetMenu: {
      rest: [
        { name: "Phở bò", price: 50000 },
        { name: "Bún chả", price: 50000 },
        { name: "Cơm tấm", price: 45000 },
        { name: "Bánh mì", price: 25000 },
        { name: "Bún bò Huế", price: 55000 },
        { name: "Gỏi cuốn", price: 40000 },
        { name: "Cơm gà", price: 50000 },
        { name: "Mì Quảng", price: 50000 },
      ],
      market: [
        { name: "Bánh xèo", price: 40000 },
        { name: "Chả giò", price: 30000 },
        { name: "Nem nướng", price: 60000 },
        { name: "Xôi", price: 25000 },
        { name: "Cà phê sữa đá", price: 25000 },
        { name: "Sinh tố", price: 35000 },
        { name: "Bánh tráng nướng", price: 25000 },
        { name: "Chè", price: 20000 },
      ],
    },
    denominations: { notes: [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000], coins: [] },
    data: [
      { id: "greet", title: "기본 인사", icon: "👋", items: [
        { hz: "Xin chào",                          py: "Xin chao",                       pr: "신 짜오",              ko: "안녕하세요" },
        { hz: "Chào anh / Chào chị",              py: "Chao anh / Chao chi",            pr: "짜오 아잉 / 짜오 찌",  ko: "안녕하세요 (남/여)" },
        { hz: "Chào buổi sáng",                   py: "Chao buoi sang",                 pr: "짜오 부오이 상",       ko: "좋은 아침입니다" },
        { hz: "Chúc ngủ ngon",                    py: "Chuc ngu ngon",                  pr: "쭉 응우 응온",         ko: "안녕히 주무세요" },
        { hz: "Cảm ơn",                           py: "Cam on",                         pr: "깜 언",                ko: "감사합니다" },
        { hz: "Không có gì",                      py: "Khong co gi",                    pr: "콩 꺼 지",             ko: "천만에요" },
        { hz: "Xin lỗi",                          py: "Xin loi",                        pr: "신 로이",              ko: "죄송합니다" },
        { hz: "Không sao",                        py: "Khong sao",                      pr: "콩 사오",              ko: "괜찮아요" },
        { hz: "Tạm biệt",                         py: "Tam biet",                       pr: "땀 비엣",              ko: "안녕히 가세요" },
        { hz: "Cho hỏi",                          py: "Cho hoi",                        pr: "쩌 호이",              ko: "실례합니다 (질문)" },
        { hz: "Tôi là người Hàn Quốc",            py: "Toi la nguoi Han Quoc",          pr: "또이 라 응어이 한 꾸옥", ko: "저는 한국인입니다" },
        { hz: "Tôi không hiểu",                   py: "Toi khong hieu",                 pr: "또이 콩 히에우",       ko: "못 알아듣겠어요" },
        { hz: "Bạn nói tiếng Anh được không?",    py: "Ban noi tieng Anh duoc khong",   pr: "반 너이 띠엥 아잉 드억 콩", ko: "영어 하실 줄 아세요?" },
        { hz: "Xin nói lại lần nữa",              py: "Xin noi lai lan nua",            pr: "신 너이 라이 런 느어", ko: "다시 말씀해 주세요" },
        { hz: "Vâng, được",                       py: "Vang, duoc",                     pr: "벙, 드억",             ko: "네, 좋아요" },
      ]},
      { id: "food", title: "식당", icon: "🍜", items: [
        { hz: "Tôi muốn gọi món",                 py: "Toi muon goi mon",               pr: "또이 무온 거이 먼",    ko: "주문할게요" },
        { hz: "Cho tôi xem thực đơn",             py: "Cho toi xem thuc don",           pr: "쩌 또이 셈 특 던",     ko: "메뉴판 주세요" },
        { hz: "Cái này bao nhiêu?",               py: "Cai nay bao nhieu",              pr: "까이 나이 바오 니에우", ko: "이거 얼마예요?" },
        { hz: "Cho tôi cái này",                  py: "Cho toi cai nay",                pr: "쩌 또이 까이 나이",    ko: "이거 주세요" },
        { hz: "Bạn gợi ý món gì?",                py: "Ban goi y mon gi",               pr: "반 거이 이 먼 지",     ko: "뭐가 맛있어요?" },
        { hz: "Không cho rau mùi",                py: "Khong cho rau mui",              pr: "콩 쩌 자우 무이",      ko: "고수 빼주세요" },
        { hz: "Không cay",                        py: "Khong cay",                      pr: "콩 까이",              ko: "맵지 않게 해주세요" },
        { hz: "Rất ngon",                         py: "Rat ngon",                       pr: "젓 응온",              ko: "아주 맛있어요" },
        { hz: "Cho tôi một ly nước",              py: "Cho toi mot ly nuoc",            pr: "쩌 또이 못 리 느억",   ko: "물 한 잔 주세요" },
        { hz: "Tính tiền",                        py: "Tinh tien",                      pr: "띤 띠엔",              ko: "계산해주세요" },
        { hz: "Có thể trả thẻ không?",            py: "Co the tra the khong",           pr: "꺼 테 짜 테 콩",       ko: "카드 결제 되나요?" },
        { hz: "Cho tôi mang đi",                  py: "Cho toi mang di",                pr: "쩌 또이 망 디",        ko: "포장할게요" },
        { hz: "Ăn ở đây",                         py: "An o day",                       pr: "안 어 더이",           ko: "매장에서 먹어요" },
        { hz: "Cho thêm một phần nữa",            py: "Cho them mot phan nua",          pr: "쩌 템 못 펀 느어",     ko: "하나 더 주세요" },
        { hz: "Tôi dị ứng đậu phộng",             py: "Toi di ung dau phong",           pr: "또이 지 응 더우 퐁",   ko: "땅콩 알레르기 있어요" },
        { hz: "Nhà vệ sinh ở đâu?",               py: "Nha ve sinh o dau",              pr: "냐 베 신 어 더우",     ko: "화장실 어디예요?" },
      ]},
      { id: "sight", title: "관광지", icon: "📸", items: [
        { hz: "Đi như thế nào?",                  py: "Di nhu the nao",                 pr: "디 느 테 나오",        ko: "어떻게 가나요?" },
        { hz: "Gần đây có gì hay?",               py: "Gan day co gi hay",              pr: "건 더이 꺼 지 하이",   ko: "이 근처에 뭐가 볼만해요?" },
        { hz: "Vé vào bao nhiêu?",                py: "Ve vao bao nhieu",               pr: "베 바오 바오 니에우",  ko: "입장료가 얼마예요?" },
        { hz: "Có thể chụp ảnh không?",           py: "Co the chup anh khong",          pr: "꺼 테 쭙 아잉 콩",     ko: "사진 찍어도 돼요?" },
        { hz: "Chụp giúp tôi với",                py: "Chup giup toi voi",              pr: "쭙 줍 또이 버이",      ko: "사진 좀 찍어주세요" },
        { hz: "Mở cửa mấy giờ?",                  py: "Mo cua may gio",                 pr: "머 끄어 머이 저",      ko: "영업 시간이 몇 시예요?" },
        { hz: "Có hướng dẫn tiếng Anh không?",    py: "Co huong dan tieng Anh khong",   pr: "꺼 흐엉 전 띠엥 아잉 콩", ko: "영어 가이드 있어요?" },
        { hz: "Tôi bị lạc đường",                 py: "Toi bi lac duong",               pr: "또이 비 락 드엉",      ko: "길을 잃었어요" },
        { hz: "Đây là đâu?",                      py: "Day la dau",                     pr: "더이 라 더우",         ko: "여기가 어디예요?" },
        { hz: "Có xa không?",                     py: "Co xa khong",                    pr: "꺼 사 콩",             ko: "멀어요?" },
        { hz: "Có thể đi bộ không?",              py: "Co the di bo khong",             pr: "꺼 테 디 보 콩",       ko: "걸어갈 수 있나요?" },
        { hz: "Chỉ đường giúp tôi",               py: "Chi duong giup toi",             pr: "찌 드엉 줍 또이",      ko: "길 좀 알려주세요" },
        { hz: "Đây là cửa hàng lưu niệm phải không?", py: "Day la cua hang luu niem phai khong", pr: "더이 라 끄어 항 르우 니엠 파이 콩", ko: "기념품 가게인가요?" },
        { hz: "Đẹp quá!",                         py: "Dep qua",                        pr: "뎁 꽈",                ko: "정말 예뻐요!" },
      ]},
      { id: "shop", title: "쇼핑", icon: "🛍️", items: [
        { hz: "Cái này bao nhiêu?",               py: "Cai nay bao nhieu",              pr: "까이 나이 바오 니에우", ko: "이거 얼마예요?" },
        { hz: "Đắt quá",                          py: "Dat qua",                        pr: "닷 꽈",                ko: "너무 비싸요" },
        { hz: "Bớt một chút được không?",         py: "Bot mot chut duoc khong",        pr: "벗 못 쭛 드억 콩",     ko: "좀 깎아주실 수 있어요?" },
        { hz: "Có giảm giá không?",               py: "Co giam gia khong",              pr: "꺼 잠 자 콩",          ko: "할인되나요?" },
        { hz: "Tôi chỉ xem thôi",                 py: "Toi chi xem thoi",               pr: "또이 찌 셈 토이",      ko: "그냥 구경하는 거예요" },
        { hz: "Có thể thử không?",                py: "Co the thu khong",               pr: "꺼 테 트 콩",          ko: "입어봐도 돼요?" },
        { hz: "Có cỡ lớn hơn không?",             py: "Co co lon hon khong",            pr: "꺼 꺼 런 헌 콩",       ko: "더 큰 사이즈 있어요?" },
        { hz: "Có cỡ nhỏ hơn không?",             py: "Co co nho hon khong",            pr: "꺼 꺼 뇨 헌 콩",       ko: "더 작은 사이즈 있어요?" },
        { hz: "Có màu khác không?",               py: "Co mau khac khong",              pr: "꺼 마우 칵 콩",        ko: "다른 색 있어요?" },
        { hz: "Tôi lấy cái này",                  py: "Toi lay cai nay",                pr: "또이 러이 까이 나이",  ko: "이걸로 할게요" },
        { hz: "Có thể trả thẻ không?",            py: "Co the tra the khong",           pr: "꺼 테 짜 테 콩",       ko: "카드 결제 되나요?" },
        { hz: "Có hoàn thuế không?",              py: "Co hoan thue khong",             pr: "꺼 호안 투에 콩",      ko: "세금 환급 되나요?" },
        { hz: "Cho tôi hóa đơn",                  py: "Cho toi hoa don",                pr: "쩌 또이 호아 던",      ko: "영수증 주세요" },
        { hz: "Gói lại giúp tôi",                 py: "Goi lai giup toi",               pr: "거이 라이 줍 또이",    ko: "포장해주세요" },
      ]},
      { id: "transport", title: "교통", icon: "🛵", items: [
        { hz: "Đến chỗ này",                      py: "Den cho nay",                    pr: "덴 쩌 나이",           ko: "여기로 가주세요" },
        { hz: "Đến sân bay bao nhiêu?",           py: "Den san bay bao nhieu",          pr: "덴 산 바이 바오 니에우", ko: "공항까지 얼마예요?" },
        { hz: "Bật đồng hồ giúp tôi",             py: "Bat dong ho giup toi",           pr: "벗 동 호 줍 또이",     ko: "미터기 켜주세요" },
        { hz: "Dừng ở đây",                       py: "Dung o day",                     pr: "증 어 더이",           ko: "여기서 세워주세요" },
        { hz: "Mở cốp xe",                        py: "Mo cop xe",                      pr: "머 꼽 세",             ko: "트렁크 열어주세요" },
        { hz: "Ga tàu điện ở đâu?",               py: "Ga tau dien o dau",              pr: "가 따우 디엔 어 더우", ko: "지하철역이 어디예요?" },
        { hz: "Cho tôi mua thẻ giao thông",       py: "Cho toi mua the giao thong",     pr: "쩌 또이 무어 테 자오 통", ko: "교통카드 주세요" },
        { hz: "Nạp tiền thế nào?",                py: "Nap tien the nao",               pr: "납 띠엔 테 나오",      ko: "충전 어떻게 해요?" },
        { hz: "Xe này đi đâu?",                   py: "Xe nay di dau",                  pr: "세 나이 디 더우",      ko: "이 차 어디로 가요?" },
        { hz: "Trạm tiếp theo là đâu?",           py: "Tram tiep theo la dau",          pr: "짬 띠엡 테오 라 더우", ko: "다음 역이 어디예요?" },
        { hz: "Tôi phải đổi xe không?",           py: "Toi phai doi xe khong",          pr: "또이 파이 도이 세 콩", ko: "갈아타야 하나요?" },
        { hz: "Ga xe lửa đi thế nào?",            py: "Ga xe lua di the nao",           pr: "가 세 르어 디 테 나오", ko: "기차역 어떻게 가요?" },
        { hz: "Bắt taxi ở đâu?",                  py: "Bat taxi o dau",                 pr: "밧 택시 어 더우",      ko: "택시 어디서 잡아요?" },
        { hz: "Có kẹt xe không?",                 py: "Co ket xe khong",                pr: "꺼 껫 세 콩",          ko: "길 막혀요?" },
      ]},
      { id: "emerg", title: "긴급상황", icon: "🚨", items: [
        { hz: "Cứu tôi với!",                     py: "Cuu toi voi",                    pr: "끄우 또이 버이",       ko: "도와주세요!" },
        { hz: "Gọi xe cứu thương",                py: "Goi xe cuu thuong",              pr: "거이 세 끄우 트엉",    ko: "구급차 불러주세요" },
        { hz: "Gọi cảnh sát",                     py: "Goi canh sat",                   pr: "거이 까잉 삿",         ko: "경찰 불러주세요" },
        { hz: "Tôi bị bệnh",                      py: "Toi bi benh",                    pr: "또이 비 벤",           ko: "저 아파요" },
        { hz: "Tôi đau bụng",                     py: "Toi dau bung",                   pr: "또이 다우 붕",         ko: "배가 아파요" },
        { hz: "Tôi đau đầu",                      py: "Toi dau dau",                    pr: "또이 다우 더우",       ko: "머리가 아파요" },
        { hz: "Bệnh viện ở đâu?",                 py: "Benh vien o dau",                pr: "벤 비엔 어 더우",      ko: "병원이 어디예요?" },
        { hz: "Hiệu thuốc ở đâu?",                py: "Hieu thuoc o dau",               pr: "히에우 투옥 어 더우",  ko: "약국이 어디예요?" },
        { hz: "Tôi mất ví",                       py: "Toi mat vi",                     pr: "또이 멋 비",           ko: "지갑을 잃어버렸어요" },
        { hz: "Tôi mất hộ chiếu",                 py: "Toi mat ho chieu",               pr: "또이 멋 호 찌에우",    ko: "여권을 잃어버렸어요" },
        { hz: "Điện thoại của tôi bị mất cắp",    py: "Dien thoai cua toi bi mat cap",  pr: "디엔 토아이 꾸어 또이 비 멋 깝", ko: "휴대폰을 도둑맞았어요" },
        { hz: "Liên lạc đại sứ quán Hàn Quốc",    py: "Lien lac dai su quan Han Quoc",  pr: "리엔 락 다이 스 꽌 한 꾸옥", ko: "한국 대사관에 연락해주세요" },
        { hz: "Tôi cần phiên dịch",               py: "Toi can phien dich",             pr: "또이 껀 피엔 직",      ko: "통역이 필요해요" },
        { hz: "Giúp tôi với",                     py: "Giup toi voi",                   pr: "줍 또이 버이",         ko: "도와주세요" },
      ]},
    ]
  }
};

/* =========================================================
   라우팅 + UI 렌더링
   ========================================================= */
const $home    = document.getElementById("home");
const $app     = document.getElementById("app");
const $tabs    = document.getElementById("tabs");
const $main    = document.getElementById("main");
const $search  = document.getElementById("search");
const $searchWrap = document.querySelector(".search-wrap");
const $hdrFlag = document.getElementById("hdr-flag");
const $hdrTitle= document.getElementById("hdr-title");
const $hdrSub  = document.getElementById("hdr-sub");
const $ftName  = document.getElementById("ft-name");
const $homeBtn = document.getElementById("home-btn");

let currentCountry = null;
let activeTab = null;       // "calc" | "fx" | "phrase"
let activeSub = null;       // 회화 안의 카테고리 id
let playingBtn = null;

document.querySelectorAll(".country-btn").forEach(btn => {
  btn.addEventListener("click", () => enterCountry(btn.dataset.country));
});
$homeBtn.addEventListener("click", () => exitToHome());

function enterCountry(code) {
  const c = COUNTRIES[code];
  if (!c) return;
  currentCountry = c;
  activeTab = "calc";
  activeSub = c.data[0].id;

  document.documentElement.style.setProperty("--c1", c.theme.c1);
  document.documentElement.style.setProperty("--c2", c.theme.c2);
  document.documentElement.style.setProperty("--gold", c.theme.gold);
  document.documentElement.style.setProperty("--bg", c.theme.bg);
  document.documentElement.style.setProperty("--border", c.theme.border);
  document.querySelector('meta[name="theme-color"]').setAttribute("content", c.theme.c1);

  $hdrFlag.textContent = c.flag;
  $hdrTitle.textContent = c.name;
  $hdrSub.textContent = c.sub;
  $ftName.textContent = c.short;

  buildTabsAndSections(c);
  $search.value = "";
  updateSearchVisibility();

  $home.classList.add("hide");
  $app.classList.add("show");
  window.scrollTo({ top: 0 });
}

function exitToHome() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (playingBtn) { playingBtn.classList.remove("playing"); playingBtn = null; }
  currentCountry = null;
  $home.classList.remove("hide");
  $app.classList.remove("show");
  window.scrollTo({ top: 0 });
}

function buildTabsAndSections(c) {
  $tabs.innerHTML = "";
  $main.innerHTML = "";

  // 메인 탭 3개: 계산 / 환율 / 회화
  const mainTabs = [
    { id: "calc",   label: "💰 계산" },
    { id: "fx",     label: "💱 환율" },
    { id: "phrase", label: "💬 회화" },
  ];
  mainTabs.forEach((t, idx) => {
    const btn = document.createElement("button");
    btn.dataset.tab = t.id;
    btn.innerHTML = t.label;
    if (idx === 0) btn.classList.add("active");
    btn.addEventListener("click", () => selectTab(t.id));
    $tabs.appendChild(btn);
  });

  // 계산
  const calcSec = document.createElement("section");
  calcSec.className = "tab-section active";
  calcSec.id = "sec-calc";
  calcSec.innerHTML = renderCalcSection(c);
  $main.appendChild(calcSec);

  // 환율
  const fxSec = document.createElement("section");
  fxSec.className = "tab-section";
  fxSec.id = "sec-fx";
  fxSec.innerHTML = renderFxSection(c);
  $main.appendChild(fxSec);

  // 회화 (sub-tab + sub-section)
  const phraseSec = document.createElement("section");
  phraseSec.className = "tab-section";
  phraseSec.id = "sec-phrase";
  phraseSec.innerHTML = renderPhraseSection(c);
  $main.appendChild(phraseSec);

  bindCalc(calcSec, c);
  bindFx(fxSec, c);
  bindPhrase(phraseSec, c);
}

function cardHTML(it, tabId, i) {
  return `
    <div class="card" data-hanzi="${escapeHtml(it.hz)}" data-search="${escapeHtml((it.hz + " " + it.py + " " + it.pr + " " + it.ko).toLowerCase())}">
      <button class="speak-btn" aria-label="발음 듣기" data-tab="${tabId}" data-i="${i}">🔊</button>
      <div class="hanzi">${escapeHtml(it.hz)}</div>
      <div class="pinyin">${escapeHtml(it.py)}</div>
      <div class="pron">${escapeHtml(it.pr)}</div>
      <div class="meaning">${escapeHtml(it.ko)}</div>
    </div>
  `;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function selectTab(id) {
  activeTab = id;
  document.querySelectorAll("nav.tabs button").forEach(b =>
    b.classList.toggle("active", b.dataset.tab === id));
  document.querySelectorAll(".tab-section").forEach(s =>
    s.classList.toggle("active", s.id === "sec-" + id));
  updateSearchVisibility();
  if (id === "phrase") applyFilter($search.value.trim());
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateSearchVisibility() {
  if (!$searchWrap) return;
  $searchWrap.style.display = (activeTab === "phrase") ? "" : "none";
}

$search.addEventListener("input", e => applyFilter(e.target.value.trim()));

function applyFilter(q) {
  if (!currentCountry) return;
  if (activeTab !== "phrase") return;
  const phraseSec = document.getElementById("sec-phrase");
  if (!phraseSec) return;
  const query = q.toLowerCase();
  const isSearching = query.length > 0;

  currentCountry.data.forEach(tab => {
    const sub = phraseSec.querySelector("#sub-" + tab.id);
    if (!sub) return;
    if (isSearching) {
      sub.classList.add("active");
    } else {
      sub.classList.toggle("active", tab.id === activeSub);
    }
    let visibleCount = 0;
    sub.querySelectorAll(".card").forEach(card => {
      const match = !isSearching || card.dataset.search.includes(query);
      card.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });
    let empty = sub.querySelector(".empty");
    if (isSearching && visibleCount === 0) {
      if (!empty) {
        empty = document.createElement("div");
        empty.className = "empty";
        empty.textContent = "검색 결과가 없습니다";
        sub.appendChild(empty);
      }
    } else if (empty) {
      empty.remove();
    }
  });

  if (!isSearching) {
    phraseSec.querySelectorAll(".sub-tab").forEach(b =>
      b.classList.toggle("active", b.dataset.sub === activeSub));
  }
}

/* =========================================================
   회화 (sub-tab + sub-section)
   ========================================================= */
function renderPhraseSection(c) {
  return `
    <nav class="sub-tabs">
      ${c.data.map((tab, idx) => `<button class="sub-tab${idx===0?' active':''}" type="button" data-sub="${tab.id}">${tab.icon} ${tab.title}</button>`).join("")}
    </nav>
    <div class="sub-content">
      ${c.data.map((tab, idx) => `
        <div class="sub-section${idx===0?' active':''}" id="sub-${tab.id}">
          <div class="section-title">${tab.icon} ${tab.title} · ${tab.items.length}개 표현</div>
          <div class="card-list">
            ${tab.items.map((it, i) => cardHTML(it, tab.id, i)).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function bindPhrase(root, c) {
  root.querySelectorAll(".sub-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      activeSub = btn.dataset.sub;
      root.querySelectorAll(".sub-tab").forEach(b => b.classList.toggle("active", b === btn));
      root.querySelectorAll(".sub-section").forEach(s =>
        s.classList.toggle("active", s.id === "sub-" + activeSub));
      applyFilter($search.value.trim());
    });
  });
}

/* =========================================================
   계산 탭 (식당 / 야시장 또는 맞춤)
   ========================================================= */
function renderCalcSection(c) {
  return `
    <div class="accordion" data-acc="rest">
      <button class="acc-head" type="button"><span>🍽️ 식당 계산</span><span class="arrow">▼</span></button>
      <div class="acc-body">
        ${calcFormHTML(c, "rest", true)}
      </div>
    </div>
    <div class="accordion" data-acc="market">
      <button class="acc-head" type="button"><span>🌃 ${escapeHtml(c.marketName)} 계산</span><span class="arrow">▼</span></button>
      <div class="acc-body">
        ${calcFormHTML(c, "market", false)}
      </div>
    </div>
  `;
}

function calcFormHTML(c, key, withService) {
  const cur = c.currency;
  const preset = (c.presetMenu && c.presetMenu[key]) || [];
  const deno = c.denominations || { notes: [], coins: [] };
  const presetChips = preset.length ? `
    <div class="preset-wrap">
      <div class="preset-label">🍽️ 자주 먹는 메뉴</div>
      <div class="preset-chips" data-preset="${key}">
        ${preset.map(m => `<button type="button" class="preset-chip" data-name="${m.name}" data-price="${m.price}">${m.name}<span class="price">${cur.symbol}${fmtMoney(m.price)}</span></button>`).join("")}
      </div>
    </div>` : "";
  const notesRow = deno.notes && deno.notes.length ? `
    <div class="deno-row">
      <div class="label">지폐</div>
      <div class="deno-chips">
        ${deno.notes.map(v => `<button type="button" class="deno-chip" data-val="${v}">${fmtMoney(v)}</button>`).join("")}
      </div>
    </div>` : "";
  const coinsRow = deno.coins && deno.coins.length ? `
    <div class="deno-row">
      <div class="label">동전</div>
      <div class="deno-chips">
        ${deno.coins.map(v => `<button type="button" class="deno-chip" data-val="${v}">${fmtMoney(v)}</button>`).join("")}
      </div>
    </div>` : "";
  return `
    ${presetChips}
    <div class="menu-list" data-list="${key}">
      <div class="menu-item">
        <input type="text" class="name" placeholder="메뉴 이름 (선택)">
        <input type="number" class="price" placeholder="가격" inputmode="decimal" step="any">
        <button class="del" type="button" aria-label="삭제">✕</button>
      </div>
    </div>
    <button class="add-menu" type="button" data-add="${key}">+ 메뉴 추가</button>
    ${withService ? `
      <div class="calc-row">
        <label>봉사료/세금</label>
        <input type="number" class="service" inputmode="decimal" step="any" value="${cur.defaultService}">
        <span class="suffix">%</span>
      </div>` : ""}
    <div class="calc-row">
      <label>인원수</label>
      <input type="number" class="people" inputmode="numeric" min="1" value="1">
      <span class="suffix">명</span>
    </div>
    <div class="calc-result" data-result="${key}">
      <div class="row"><span>합계</span><span class="r-sum">${cur.symbol} 0</span></div>
      ${withService ? `<div class="row"><span>봉사료/세금</span><span class="r-svc">${cur.symbol} 0</span></div>` : ""}
      <div class="row total"><span>총액</span><span class="r-total">${cur.symbol} 0</span></div>
      <div class="row per"><span>1인당</span><span class="r-per">${cur.symbol} 0</span></div>
      <div class="row"><span>원화 환산 (총액)</span><span class="r-krw">₩ 0</span></div>
    </div>
    <div class="paid-wrap" data-paid-wrap="${key}">
      <div class="preset-label" style="margin-top:12px;">💵 받은 돈</div>
      ${notesRow}
      ${coinsRow}
      <div class="paid-row">
        <label class="paid-label">받은 금액</label>
        <input type="number" class="paid" inputmode="decimal" step="any" placeholder="0">
        <button type="button" class="paid-clear" aria-label="초기화">✕</button>
      </div>
      <div class="calc-result change-box">
        <div class="row total"><span>거스름돈</span><span class="r-change">—</span></div>
      </div>
    </div>
  `;
}

function bindCalc(root, c) {
  root.querySelectorAll(".acc-head").forEach(head => {
    head.addEventListener("click", () => {
      head.parentElement.classList.toggle("open");
    });
  });

  root.querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.add;
      const list = root.querySelector(`[data-list="${key}"]`);
      const row = document.createElement("div");
      row.className = "menu-item";
      row.innerHTML = `
        <input type="text" class="name" placeholder="메뉴 이름 (선택)">
        <input type="number" class="price" placeholder="가격" inputmode="decimal" step="any">
        <button class="del" type="button" aria-label="삭제">✕</button>
      `;
      list.appendChild(row);
      recalc(root, c);
    });
  });

  root.addEventListener("click", e => {
    const del = e.target.closest(".del");
    if (del) {
      const item = del.closest(".menu-item");
      const list = del.closest(".menu-list");
      if (list && list.querySelectorAll(".menu-item").length > 1) {
        item.remove();
      } else {
        item.querySelectorAll("input").forEach(i => i.value = "");
      }
      recalc(root, c);
      return;
    }
    const presetChip = e.target.closest(".preset-chip");
    if (presetChip) {
      const chips = presetChip.closest(".preset-chips");
      const key = chips.dataset.preset;
      const list = root.querySelector(`[data-list="${key}"]`);
      const firstItem = list.querySelector(".menu-item");
      const firstName = firstItem.querySelector(".name");
      const firstPrice = firstItem.querySelector(".price");
      let target;
      if (!firstName.value && !firstPrice.value) {
        target = firstItem;
      } else {
        target = document.createElement("div");
        target.className = "menu-item";
        target.innerHTML = `
          <input type="text" class="name" placeholder="메뉴 이름 (선택)">
          <input type="number" class="price" placeholder="가격" inputmode="decimal" step="any">
          <button class="del" type="button" aria-label="삭제">✕</button>
        `;
        list.appendChild(target);
      }
      target.querySelector(".name").value = presetChip.dataset.name;
      target.querySelector(".price").value = presetChip.dataset.price;
      recalc(root, c);
      return;
    }
    const denoChip = e.target.closest(".deno-chip");
    if (denoChip) {
      const wrap = denoChip.closest(".paid-wrap");
      const paidInput = wrap.querySelector(".paid");
      const cur = parseFloat(paidInput.value) || 0;
      const add = parseFloat(denoChip.dataset.val) || 0;
      paidInput.value = cur + add;
      recalc(root, c);
      return;
    }
    const paidClear = e.target.closest(".paid-clear");
    if (paidClear) {
      const wrap = paidClear.closest(".paid-wrap");
      wrap.querySelector(".paid").value = "";
      recalc(root, c);
      return;
    }
  });

  root.addEventListener("input", e => {
    if (e.target.matches("input")) recalc(root, c);
  });
}

function recalc(root, c) {
  const cur = c.currency;
  ["rest", "market"].forEach(key => {
    const list = root.querySelector(`[data-list="${key}"]`);
    if (!list) return;
    let sum = 0;
    list.querySelectorAll(".menu-item").forEach(item => {
      const v = parseFloat(item.querySelector(".price").value);
      if (!isNaN(v)) sum += v;
    });
    const accBody = list.closest(".acc-body");
    const svcInput = accBody.querySelector(".service");
    const svcRate = svcInput ? (parseFloat(svcInput.value) || 0) : 0;
    const svc = sum * svcRate / 100;
    const total = sum + svc;
    const peopleInput = accBody.querySelector(".people");
    let people = parseInt(peopleInput.value, 10);
    if (!people || people < 1) people = 1;
    const per = total / people;
    const krw = total * cur.krwRate;

    const result = root.querySelector(`[data-result="${key}"]`);
    result.querySelector(".r-sum").textContent = `${cur.symbol} ${fmtMoney(sum)}`;
    const svcEl = result.querySelector(".r-svc");
    if (svcEl) svcEl.textContent = `${cur.symbol} ${fmtMoney(svc)}`;
    result.querySelector(".r-total").textContent = `${cur.symbol} ${fmtMoney(total)}`;
    result.querySelector(".r-per").textContent = `${cur.symbol} ${fmtMoney(per)}`;
    result.querySelector(".r-krw").textContent = `₩ ${fmtMoney(Math.round(krw))}`;

    const paidWrap = root.querySelector(`[data-paid-wrap="${key}"]`);
    if (paidWrap) {
      const paidInput = paidWrap.querySelector(".paid");
      const paid = parseFloat(paidInput.value) || 0;
      const change = paid - total;
      const changeEl = paidWrap.querySelector(".r-change");
      if (paid === 0) {
        changeEl.textContent = "—";
        changeEl.classList.remove("short");
      } else if (change >= 0) {
        changeEl.textContent = `${cur.symbol} ${fmtMoney(change)}`;
        changeEl.classList.remove("short");
      } else {
        changeEl.textContent = `부족: ${cur.symbol} ${fmtMoney(-change)}`;
        changeEl.classList.add("short");
      }
    }
  });
}

function fmtMoney(n) {
  if (!isFinite(n)) return "0";
  const abs = Math.abs(n);
  let s;
  if (abs > 0 && abs < 1) s = n.toFixed(2);
  else s = Math.round(n).toString();
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* =========================================================
   환율 탭
   ========================================================= */
function renderFxSection(c) {
  const cur = c.currency;
  return `
    <div class="fx-card">
      <div class="fx-title">${c.flag} ${cur.name} ↔ 한국 원</div>
      <div class="fx-rate-edit">
        <span>환율: 1 ${cur.code} =</span>
        <input type="number" class="rate" inputmode="decimal" step="any" value="${cur.krwRate}">
        <span>KRW</span>
      </div>
      <div class="fx-row">
        <div class="ccy">${cur.symbol} ${cur.code}<small>현지</small></div>
        <input type="number" class="amount fx-local" inputmode="decimal" step="any" placeholder="0">
      </div>
      <div class="fx-row">
        <div class="ccy">₩ KRW<small>한국</small></div>
        <input type="number" class="amount fx-krw" inputmode="decimal" step="any" placeholder="0">
      </div>
      <div class="fx-quick">
        <button type="button" data-q="100">₩100</button>
        <button type="button" data-q="500">₩500</button>
        <button type="button" data-q="1000">₩1,000</button>
        <button type="button" data-q="5000">₩5,000</button>
        <button type="button" data-q="10000">₩10,000</button>
      </div>
    </div>
  `;
}

function bindFx(root, c) {
  const $rate  = root.querySelector(".rate");
  const $local = root.querySelector(".fx-local");
  const $krw   = root.querySelector(".fx-krw");

  function getRate() {
    const r = parseFloat($rate.value);
    return r > 0 ? r : c.currency.krwRate;
  }

  $local.addEventListener("input", () => {
    const v = parseFloat($local.value);
    if (isNaN(v)) { $krw.value = ""; return; }
    $krw.value = Math.round(v * getRate());
  });

  $krw.addEventListener("input", () => {
    const v = parseFloat($krw.value);
    if (isNaN(v)) { $local.value = ""; return; }
    const local = v / getRate();
    $local.value = Math.abs(local) < 1 ? local.toFixed(2) : Math.round(local);
  });

  $rate.addEventListener("input", () => {
    const v = parseFloat($local.value);
    if (!isNaN(v)) $krw.value = Math.round(v * getRate());
  });

  root.querySelectorAll(".fx-quick button").forEach(btn => {
    btn.addEventListener("click", () => {
      $krw.value = btn.dataset.q;
      $krw.dispatchEvent(new Event("input"));
    });
  });
}

/* =========================================================
   TTS - 여성 보이스 우선 매칭
   ========================================================= */
let voices = [];
function loadVoices() {
  voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
}
if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

const FEMALE_HINTS = /Mei-Jia|Hanhan|Yuting|Sin-Ji|Ya-Ling|Zhiyu|Tian-Tian|Kyoko|O-Ren|Nanami|Mizuki|Haruka|Kanya|Linh|An|Female|female|Woman|woman|女/;
const MALE_HINTS = /Otoya|Hattori|Ichiro|Hideki|Tarumi|Takumi|Lee|Ting-Ting|Liang|Kuo-Chang|Yu-shu|Male|male|\bMan\b|男/;

function pickVoice() {
  if (!currentCountry) return null;
  if (!voices.length) loadVoices();
  for (const tag of currentCountry.lang) {
    const re = new RegExp(tag.replace("-", "[-_]"), "i");
    const matches = voices.filter(v => re.test(v.lang));
    if (!matches.length) continue;
    let v = matches.find(x => FEMALE_HINTS.test(x.name));
    if (v) return v;
    v = matches.find(x => !MALE_HINTS.test(x.name));
    if (v) return v;
    return matches[0];
  }
  const base = currentCountry.lang[0].split("-")[0];
  const fallback = voices.filter(v => v.lang.toLowerCase().startsWith(base));
  if (!fallback.length) return null;
  return fallback.find(v => FEMALE_HINTS.test(v.name))
      || fallback.find(v => !MALE_HINTS.test(v.name))
      || fallback[0];
}

function speak(text, btn) {
  if (!("speechSynthesis" in window)) {
    alert("이 브라우저는 음성 합성을 지원하지 않습니다");
    return;
  }
  if (playingBtn) {
    window.speechSynthesis.cancel();
    playingBtn.classList.remove("playing");
    const was = playingBtn;
    playingBtn = null;
    if (was === btn) return;
  }
  const u = new SpeechSynthesisUtterance(text);
  const v = pickVoice();
  if (v) { u.voice = v; u.lang = v.lang; }
  else if (currentCountry) { u.lang = currentCountry.lang[0]; }
  u.rate = 0.85;
  u.pitch = 1.1;
  playingBtn = btn;
  btn.classList.add("playing");
  u.onend = u.onerror = () => {
    btn.classList.remove("playing");
    if (playingBtn === btn) playingBtn = null;
  };
  window.speechSynthesis.speak(u);
}

document.addEventListener("click", e => {
  const btn = e.target.closest(".speak-btn");
  if (!btn) return;
  const card = btn.closest(".card");
  if (!card) return;
  speak(card.dataset.hanzi, btn);
});

window.addEventListener("beforeunload", () => {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
});
