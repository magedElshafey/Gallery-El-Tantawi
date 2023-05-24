// slider
import kitchen from "../assets/kitchen.jpg";
import furn from "../assets/furniture.gif";
import maforsh from "../assets/maforshat.jpg";
import magic from "../assets/magic.jpg";
// offers
import less1000 from "../assets/less1000.jpg";
import free from "../assets/freeT.jpg";
import dailyOffers from "../assets/Daily-Deals-AR_4.jpg";
// kitchen
import fire from "../assets/fire.png";
import boiler from "../assets/boiler.png";
import grill from "../assets/grill.png";
import toster from "../assets/toester.png";
// all products
import pro1 from "../assets/products/pro-01.jpg";
import pro2 from "../assets/products/pro-02.jpeg";
import pro3 from "../assets/products/pro-03.jpg";
import pro4 from "../assets/products/pro-04.jpg";
import pro5 from "../assets/products/pro-05.jpg";
import pro6 from "../assets/products/pro-06.jpg";
import pro7 from "../assets/products/pro-07.jpg";
import pro8 from "../assets/products/pro-08.jpg";
import pro9 from "../assets/products/pro-09.jpg";
import pro10 from "../assets/products/pro-10.jpg";
import pro11 from "../assets/products/pro-11.jpg";
// machine
import pro12 from "../assets/air-cond-1.png";
import pro13 from "../assets/refregirator.png";
import pro14 from "../assets/washing-machine.png";
import pro15 from "../assets/grill.png";
// cooking
import pro19 from "../assets/file_170.png";
import pro16 from "../assets/file_171.png";
import pro17 from "../assets/file_172.png";
import pro18 from "../assets/file_173.png";
// home
import pro20 from "../assets/file_174.png";
import pro21 from "../assets/file_175.png";
import pro22 from "../assets/file176.png";
import pro23 from "../assets/file_178.png";
// fine home
import pro24 from "../assets/file_180.png";
import pro25 from "../assets/file_181.png";
import pro26 from "../assets/file_182.png";
import pro27 from "../assets/file_183.png";
// rooms
import room1 from "../assets/room-01.png";
import room2 from "../assets/room-02.png";
import room3 from "../assets/room-03.png";
import room4 from "../assets/room-04.png";
import room5 from "../assets/room-05.png";
import room6 from "../assets/room-06.png";
import room7 from "../assets/room-07.png";
import room8 from "../assets/room-08.png";
import room9 from "../assets/room-09.png";
import room10 from "../assets/room-10.png";
import room11 from "../assets/room-11.png";
import room12 from "../assets/room-12.png";
// mafroshat
import m0 from "../assets/file_190.png";
import m1 from "../assets/file_191.png";
import m2 from "../assets/file_192.png";
import m3 from "../assets/file_193.png";
import m4 from "../assets/file_194.png";
import m5 from "../assets/file_195.png";
import m6 from "../assets/file_196.png";
import m7 from "../assets/file_197.png";
import m8 from "../assets/file_198.png";
import m9 from "../assets/file_199.png";
import m10 from "../assets/file_200.png";
import m11 from "../assets/file_201.png";
import m12 from "../assets/file_202.png";
export const offers = [
  {
    path: "/offers/kitchen",
    img: kitchen,
  },
  {
    path: "/offers/magic",
    img: magic,
  },
  {
    path: "/offers/mafrosh",
    img: maforsh,
  },
  {
    path: "/offers/furn",
    img: furn,
  },
];
export const offerImg = [
  {
    title: "أقل من 1000 ",
    img: less1000,
    path: "/offers/less",
  },
  {
    title: "العروض اليومية",
    img: dailyOffers,
    path: "/offers/daily",
  },
  {
    title: "شحن مجاني",
    img: free,
    path: "/offers/free",
  },
];
export const kitchenOffers = [
  {
    name: "قلايات",
    img: fire,
    id: 1,
  },
  {
    name: "شوايات كهربائية",
    img: grill,
    id: 2,
  },
  {
    name: "توستر",
    img: toster,
    id: 3,
  },
  {
    name: "غلايات",
    img: boiler,
    id: 4,
  },
];

export const bestSallers = [
  {
    id: 9,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro1,
    colors: ["أبيض", "ذهبي"],
    originalPrice: 4000,
    offer: 320,
    limited: true,
    freeShipping: true,
  },
  {
    id: 10,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro2,
    colors: ["ذهبي"],
    originalPrice: 20000,
    offer: 820,
    limited: true,
    freeShipping: false,
  },
  {
    id: 11,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro3,
    colors: ["روز"],
    originalPrice: 20000,
    offer: 820,
    limited: false,
    freeShipping: true,
  },
  {
    id: 12,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro4,
    colors: ["روز"],
    originalPrice: 5000,
    offer: 0,
    limited: false,
    freeShipping: false,
  },
  {
    id: 13,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro5,
    colors: ["روز", "أسود", "أبيض", "بني"],
    originalPrice: 5000,
    offer: 0,
    limited: true,
    freeShipping: true,
  },
  {
    id: 14,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro6,
    colors: ["أبيض", "بني"],
    originalPrice: 15000,
    offer: 4000,
    limited: true,
    freeShipping: false,
  },
  {
    id: 15,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro7,
    colors: ["أبيض", "بني"],
    originalPrice: 15000,
    offer: 200,
    limited: false,
    freeShipping: true,
  },
  {
    id: 16,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro8,
    colors: [],
    originalPrice: 15000,
    offer: 0,
    limited: false,
    freeShipping: false,
  },
  {
    id: 17,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro9,
    colors: ["أزرق"],
    originalPrice: 15000,
    offer: 200,
    limited: true,
    freeShipping: true,
  },
  {
    id: 18,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro10,
    colors: ["أزرق"],
    originalPrice: 15000,
    offer: 200,
    limited: true,
    freeShipping: true,
  },
  {
    id: 19,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro11,
    colors: ["أزرق"],
    originalPrice: 15000,
    offer: 200,
    limited: false,
    freeShipping: true,
  },
];
export const machine = [
  {
    name: "تكييفات",
    img: pro12,
    id: 5,
  },
  {
    name: "الغسالات و المجففات",
    img: pro14,
    id: 6,
  },
  {
    name: "الثلاجات و الفريزر",
    img: pro13,
    id: 7,
  },
  {
    name: "الشوايات",
    img: pro15,
    id: 8,
  },
];
export const cooking = [
  {
    name: "حلل",
    img: pro19,
    id: 20,
  },
  {
    name: "قلايات",
    img: pro16,
    id: 21,
  },
  {
    name: "أطقم عشاء",
    img: pro17,
    id: 22,
  },
  {
    name: "صواني فرن",
    img: pro18,
    id: 23,
  },
];
export const home = [
  {
    name: "إكسسوارات التليفيزيون",
    img: pro20,
    id: 24,
  },
  {
    name: "التلفيزيونات",
    img: pro21,
    id: 25,
  },
  {
    name: "أكسسوارات الكومبيوتر",
    img: pro22,
    id: 26,
  },
  {
    name: "لابتوب",
    img: pro23,
    id: 27,
  },
];
export const fineHome = [
  {
    name: " كهربائية",
    img: pro24,
    id: 28,
  },
  {
    name: "مراوح",
    img: pro25,
    id: 29,
  },
  {
    name: "مكاوي",
    img: pro26,
    id: 30,
  },
  {
    name: "دفايات",
    img: pro27,
    id: 31,
  },
];
export const rooms = [
  {
    name: "غرفة المعيشة",
    img: room1,
    id: 32,
  },
  {
    name: "غرفة النوم",
    img: room2,
    id: 33,
  },
  {
    name: "غرفة الطعام",
    img: room3,
    id: 34,
  },
  {
    name: "وحدات تخزين",
    img: room4,
    id: 35,
  },
  {
    name: "ديكور المنزل",
    img: room5,
    id: 36,
  },
  {
    name: "أثاث خارجي",
    img: room6,
    id: 37,
  },
  {
    name: "أثاث المكتب",
    img: room7,
    id: 38,
  },
  {
    name: "الإضاءة",
    img: room8,
    id: 39,
  },
  {
    name: "كنبة ركنة",
    img: room9,
    id: 40,
  },
  {
    name: "مرايات",
    img: room10,
    id: 41,
  },
  {
    name: "براويز",
    img: room11,
    id: 42,
  },
  {
    name: "سجاد",
    img: room12,
    id: 43,
  },
];
export const mafrosh = [
  {
    name: "الوسائد",
    img: m1,
    id: 44,
  },
  {
    name: "المناشف و الفوط",
    img: m2,
    id: 45,
  },
  {
    name: "مراتب",
    img: m3,
    id: 46,
  },
  {
    name: "أغطية الكراسي",
    img: m4,
    id: 47,
  },
  {
    name: "ملايات السراير",
    img: m5,
    id: 48,
  },
  {
    name: "ستارة",
    img: m6,
    id: 49,
  },
  {
    name: "مفارش طاولات",
    img: m7,
    id: 50,
  },
  {
    name: "سجاد & دواسات",
    img: m8,
    id: 51,
  },
  {
    name: "البطاطين",
    img: m9,
    id: 52,
  },
  {
    name: "دفايات السرير",
    img: m10,
    id: 53,
  },
  {
    name: "لحاف",
    img: m11,
    id: 54,
  },
  {
    name: "كوفرتة السرير",
    img: m12,
    id: 55,
  },
];
export const branches = [
  {
    title: "الطناطوي- تقسيم بهاء",
    city: "طلخا",
    governemnt: "الدقهلية",
    address: "طلخا - تقسيم بهاء شارع الجمهورية",
    phone: "01022153359",
    website: "https://www.google.com",
  },
  {
    title: "الطناطوي- صلاح سالم",
    city: "طلخا",
    governemnt: "الدقهلية",
    address: "طلخا - شارع صلاح سالم",
    phone: "01022153359",
    website: "https://www.google.com",
  },
  {
    title: "الطناطوي- الطوميهي",
    city: "المنصورة",
    governemnt: "الدقهلية",
    address: "المنصورة - ميدان الطوميهي",
    phone: "01022153359",
    website: "https://www.google.com",
  },
  {
    title: "الطناطوي- تقسيم بهاء",
    city: "طلخا",
    governemnt: "الدقهلية",
    address: "طلخا - تقسيم بهاء شارع الجمهورية",
    phone: "01022153359",
    website: "https://www.google.com",
  },
];
export const help = [
  {
    id: 1,
    title: "تقسيط بنك مصر",
    insideContent: [
      {
        title: "تقسيط بنك مصر",
        desc: "تقسيط بنك مصر الحد الأدني لعملية التقسيط 500 جنية . التقسيط داخل العروض لكل الأقسام . للعميل الحرية في اختيار فترة التقسيط المناسبة له و حسب رغبتة و علي أساسها تحسب الرسوم الادراية فترة التقسيط بالشهور مصاريف إدراية من 10 الي 12 %",
      },
    ],

    subTitle: [
      {
        title: "تقسيط بنك مصر",
      },
    ],
  },
  {
    id: 2,
    title: "عروض بريميوم",
    insideContent: [
      {
        title: "عروض بريميوم",
        desc: "شروط و أحكام الدفع عن طريق بريميوم كارد - التقسيط لعملاء بريميوم علي 10 شهور بدون فوائد . يتم التقسيط للمنتجات بأسعار و عروض بدون شروط",
      },
    ],
    subTitle: [
      {
        title: "شروط وأحكام الدفع عن طريق بريميوم كارد",
      },
    ],
  },
  {
    id: 3,
    title: "تقسيط البنك الأهلي",
    insideContent: [
      {
        title: "تقسيط البنك الأهلي",
        desc: "التقسيط لعملاء البنك الأهلي المصري حتي 36 شهر بدون فوائد و ذلك حتي نفاذ الكمية . يسري التقسيط علي اي فاتورة بها عروض و يتم تقسيط اي منتج بسعر العرض . يتم تقسيط الفاتورة بحد أدني 500 جنية مصاريف ادارية فترة التقسيط بالشهور من 9 الي 12 %",
      },
    ],
    subTitle: [
      {
        title: "الشروط والأحكام الخاصة بالبنك الأهلي",
      },
    ],
  },
  {
    id: 4,
    title: "من نحن",
    insideContent: [
      {
        title: "من نحن",
        desc: "تم انشاء موقع رنين في عام 2020، ولكن تاريخ التأسيس هذا لا يعيق طموح الموقع في أن يكون في طليعة مواقع التسوق عبر الإنترنت في مصر وخارجها ، مستفيدًا من التجربة التي تتمتع بها رنين في السوق المصري وكذلك العلاقات الوثيقة مع ملايين العملاء.",
      },
      {
        title: "نحن نعد",
        desc: "يضمن موقع raneen.com طريقة الدفع الإلكتروني ، فنحن لسنا مجرد شركة ترسل بضائع وأجهزة لعملائها ، ولكننا منك . يسعى موقع raneen.com إلى تطبيق كل ما هو جديد في مجال التقنيات الحديثة بما يتناسب مع احتياجات العملاء المصريين من خلال توفير الأمن والحرية والمرح والتسوق السهل في أي وقت وفي أي مكان.  ستحصل دائمًا على عروض يومية تناسب جميع الاحتياجات والأذواق بشكل مثير للإعجاب ، مع خدمة جيدة تجعل التسوق تجربة ممتعة.",
      },
      {
        title: "ما نحن متخصصون فيه",
        desc: "موقع raneen.com هو موقع متخصص في مجال تجهيز العرائس وكافة احتياجات الأسر المصرية من الأجهزة الكهربائية والتكنولوجية والأجهزة المنزلية والمفروشات ، بالإضافة إلى الكثير من الإكسسوارات الشخصية والمنزلية ، ويهدف الموقع أن يضم عشرات الآلاف من المنتجات التي لا غنى عنها لكل عروس وكل منزل. يسعى موقع raneen.com إلى جذب عشرات الملايين من الزوار شهريًا ، بناءً على النجاح الكبير الذي حققته رنين من خلال معارضها في مختلف محافظات مصر ، والتي تقدم كل ما هو جديد ومفيد في تجهيز العرائس والاحتياجات المنزلية على أساس قاعدة واسعة من العملاء الذين ارتبطوا دائمًا برنين على مدى السنوات الماضية ، والتي حرصت فيها الشركة على تلبية تطلعات ورغبات وآمال عملائها الكرام.",
      },
      {
        title: "فريقنا",
        desc: "بمفردنا لا نستطيع فعل الكثير ؛ معًا يمكننا أن نفعل الكثير. نعتقد أن الاستثمار في الأفراد هو مفتاح النجاح ، ولهذا السبب نتأكد دائمًا من وجود الشخص المناسب في المكان المناسب،",
      },
    ],
    subTitle: [
      {
        title: "من نحن",
      },
      {
        title: "نحن تعد",
      },
      {
        title: "ما نحن متخصصون فيه",
      },
      {
        title: "فريقنا",
      },
    ],
  },
  {
    id: 5,
    title: "الشروط و الأحكام",
    insideContent: [
      {
        title: "شروط و أحكام الطنطاوي",
        desc: "حرصًا من شركة رنين على راحتكم، وإيمانًا منّا بضرورة مواكبة كل جديد ومناسب في مجالات التقنية، ورغبة في البحث عن بدائل آمنة لعملائنا الأعزاء ينطلق – بحول الله وتوفيقه -  موقع نين .كوم، وفيما يلي البنود والشروط  وكافة الضوابط والأحكام المتعلقة بإستخدام الموقع .",
      },
      {
        title: "سياسة الخصوصية",
        desc: "تُستخدم هذه الصفحة لإعلام زوار الموقع فيما يتعلق بسياساتنا بجمع المعلومات الشخصية واستخدامها والكشف عنها إذا قرر أي شخص استخدام خدمتنا ، موقع raneen.com. إذا اخترت استخدام خدماتنا ، فإنك توافق على جمع واستخدام المعلومات المتعلقة بهذه السياسة. تُستخدم المعلومات الشخصية التي نجمعها لتوفير الخدمة وتحسينها. لن نستخدم أو نشارك معلوماتك مع أي شخص باستثناء ما هو موضح في سياسة الخصوصية هذه.",
      },
      {
        title: "سياسة الاسترجاع",
        desc: "إثبات عملية الشراء ( رقم الطلب – الفاتورة – إلخ ). يجب  الاتصال بخدمة العملاء خلال 48 ساعة في حالة استلام منتج  يختلف عن ما عرض من مواصفات أو تختلف قيمته عن ما تم ذكره بصفحة العرض و يتم إرجاع جميع المنتجات بالإضافة إلى الهدايا المجانية المرفقة ن وجدت و إذا لم يتم إرجاع كافة المنتجات، سيتم رفض عملية الإرجاع .",
      },
      {
        title: "ِشروط الدفع",
        desc: "يتم الدفع عن طريق (البطاقة الائتمانية - الدفع عند الاستلام - او بالطرق المتاحة بالموقع) من أجل تحويل مدفوعات بطاقات الائتمان ، قد نطلب منك فتح حساب مع شركات معالجة الدفع الأخرى التابعة لنا ، بما في ذلك قبول الشروط والأحكام الخاصة بهم وتقديم التفاصيل الخاصة بك نيابة عنك. أنت تصرح لنا بموجب هذا بالقيام بذلك ولن نكون مسؤولين تجاهك عن أي ضرر أو خسارة قد تتكبدها نتيجة لذلك.",
      },
    ],
    subTitle: [
      {
        title: "شروط  وأحكام جاليري الطنطاوي .",
      },
      {
        title: "سياسة الخصوصية",
      },
      {
        title: "سياسة الاسترجاع",
      },
      {
        title: "شروط الدفع",
      },
    ],
  },
  {
    id: 6,
    title: "الأسئلة الأكثر شيوعًا",
    insideContent: [
      {
        title: "أسئلة عامة",
        desc: "معلومات عن  طلباتك من حيث الاغاء او التحقق من حالة الطلب او طريقة الاستلام و الدفع و خلافة",
      },
      {
        title: "أسئلة عن التوصيل",
        desc: "لا استطيع إيجاد منطقتي . ماذا أفعل",
      },
    ],
    subTitle: [
      {
        title: "هل يمكنني إلغاء طلبي؟",
      },
      {
        title: "كيف يمكنني التحقق من حالة طلبي؟",
      },
      {
        title: "لقد استلمت طلبي بدون الفاتورة الضريبية. هل يمكنني طلب ذلك؟",
      },
      {
        title: "لا أستطيع إيجاد منطقتي ، ماذا أفعل؟",
      },
    ],
  },
  {
    id: 7,
    title: "تواصل معنا",
    insideContent: [
      {
        title: "ٍساعات العمل",
        desc: " يسعدنا تلقي استفساراتكم واقتراحتكم عبر جميع  وسائل التواصل الإجتماعي طوال أيام الأسبوع . نعمل من الساعة 9 صباحًا حتى الساعة 10 مساءً.",
      },
      {
        title: "طرق التواصل",
        desc: "علي صفحة الفيسبوك او الانستجرام او من خلال ارقام الفروع او عن طريق زيارة اقرب فرع لكم ",
      },
    ],
    subTitle: [
      {
        title: "ساعات العمل",
      },
      {
        title: "طرق التواصل",
      },
    ],
  },
];
export const allOffers = [
  
]