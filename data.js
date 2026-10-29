/* =========================================================
   SADAA Hospitality — بيانات الموقع
   كل التعديلات (فنادق، غرف، صور، فريق المبيعات) تتم هنا فقط.
   ========================================================= */

const SITE_CONFIG = {
  // ضع هنا رابط Google Apps Script بعد النشر (انظر README)
  leadsEndpoint: "",
  // رقم واتساب المبيعات الرئيسي (بدون + أو أصفار)
  whatsapp: "966555277419",
  logo: "assets/logos/sadaa-logo.svg",
  // نسخة فاتحة من الشعار للوضع الداكن (اختياري). إن تُركت فارغة يُفتّح الشعار تلقائيًا
  logoDark: "",
  defaultLang: "ar"
};

/* فريق المبيعات — يظهر في كل الصفحات */
const SALES_TEAM = [
  { name: { ar: "ناجي النجدي", en: "Najy AlNajdy" }, role: { ar: "مدير إدارة المبيعات", en: "Sales Director" }, phone: "966555277419", email: "n.alnajdy@sadaa.com.sa", vcard: "https://cdn3.me-qr.com/vcf/vcards/902899.vcf", qr: "assets/qrs/najy-qr.svg" },
  { name: { ar: "محمد النجار", en: "Mohammed Al-Najjar" }, role: { ar: "مساعد مدير إدارة المبيعات", en: "Assistant Sales Director" }, phone: "966558172192", email: "m.saif@sadaa.com.sa", vcard: "https://cdn3.me-qr.com/vcf/vcards/902911.vcf", qr: "assets/qrs/mohammed-qr.svg" },
  { name: { ar: "هيثم شامه", en: "Haytham Shama" }, role: { ar: "مدير مبيعات", en: "Sales Manager" }, phone: "966537724666", email: "h.shama@sadaa.com.sa", vcard: "https://cdn3.me-qr.com/vcf/vcards/cc4dd2b2-c9e8-44d8-be78-4ce18876d37c.vcf", qr: "assets/qrs/haytham-qr.svg" },
  { name: { ar: "محمد النهدي", en: "Mohammad Nahdi" }, role: { ar: "مدير مبيعات", en: "Sales Manager" }, phone: "966537732666", email: "m.najmi@sadaa.com.sa", vcard: "https://cdn3.me-qr.com/vcf/vcards/d95d39c0-c9a1-4fcf-b391-ba37ac4dadd8.vcf", qr: "assets/qrs/nahdi-qr.svg" }
];

/* أيقونات ومسميات المزايا */
const FEATURES = {
  haram:     { i: "kaaba", ar: "إطلالة على الحرم", en: "Haram view" },
  kaaba:     { i: "kaaba", ar: "إطلالة على الكعبة", en: "Kaaba view" },
  pkaaba:    { i: "kaaba", ar: "إطلالة جزئية على الكعبة", en: "Partial Kaaba view" },
  city:      { i: "city", ar: "إطلالة على المدينة", en: "City view" },
  bath:      { i: "bath", ar: "حمّام خاص", en: "Private bathroom" },
  minibar:   { i: "minibar", ar: "ميني بار", en: "Minibar" },
  wifi:      { i: "wifi", ar: "واي فاي مجاني", en: "Free Wi-Fi" },
  tv:        { i: "tv", ar: "شاشة مسطحة", en: "Flat-screen TV" },
  ac:        { i: "ac", ar: "تكييف", en: "Air conditioning" },
  balcony:   { i: "balcony", ar: "شرفة", en: "Balcony" },
  sound:     { i: "sound", ar: "عازل للصوت", en: "Soundproofing" },
  kitchen:   { i: "kitchen", ar: "مطبخ صغير", en: "Kitchenette" },
  bed2:      { i: "bed", ar: "غرفتا نوم", en: "2 bedrooms" },
  bed3:      { i: "bed", ar: "3 غرف نوم", en: "3 bedrooms" },
  bath2:     { i: "bath", ar: "حمّامان", en: "2 bathrooms" },
  bath3:     { i: "bath", ar: "3 حمّامات", en: "3 bathrooms" }
};

const STD = ["bath", "minibar", "wifi", "tv", "ac"];
const RABWA = ["balcony", "city", "ac", "bath", "tv", "sound", "wifi"];
const RAYYAN = ["kitchen", "city", "ac", "bath", "tv", "wifi"];

/* اختصار لتوليد قائمة صور الغرفة */
const imgs = (folder, room, count) =>
  Array.from({ length: count }, (_, k) => `assets/${folder}/room${room}-img${k + 1}.jpg`);

const SAFWA_ROOM_DESC = {
  ar: "غرفة مجهّزة بالكامل لراحة ضيوف الرحمن، تجمع بين الأناقة ووسائل الراحة الحديثة لإقامة إيمانية مطمئنة.",
  en: "A fully appointed room designed for the comfort of pilgrims, combining elegance with modern amenities for a serene stay."
};

/* =========================================================
   الفنادق
   heroSlides: صور البانر المتحرك + عنوان لكل شريحة.
   لإضافة صور خاصة بالبانر ضعها مثلاً: assets/Tower1/hero-1.jpg
   ========================================================= */
const HOTELS = [
  {
    id: "safwa-tower-1",
    folder: "Tower1",
    city: { ar: "مكة المكرمة", en: "Makkah" },
    stars: 5,
    name: { ar: "فندق الصفوة البرج الأول", en: "Al Safwah Hotel – Tower 1" },
    tagline: { ar: "الإطلالة الأقرب على الكعبة المشرفة", en: "The closest view of the Holy Kaaba" },
    address: { ar: "الهجلة، مقابل بوابة الملك عبدالعزيز، مكة المكرمة", en: "Al Hijlah, opposite King Abdulaziz Gate, Makkah" },
    ratings: { booking: "8.9", expedia: "9.2", google: "4.2" },
    cover: "assets/Tower1/cover.jpg",
    heroSlides: [
      { img: "assets/Tower1/cover.jpg", ar: "مقابل بوابة الملك عبدالعزيز مباشرة", en: "Directly opposite King Abdulaziz Gate" },
      { img: "assets/Tower1/room10-img1.jpg", ar: "استوديوهات وأجنحة مطلة على الكعبة", en: "Studios & suites overlooking the Kaaba" },
      { img: "assets/Tower1/room16-img1.jpg", ar: "جناح رويال بمساحة 130 م²", en: "130 m² Royal Suite" },
      { img: "assets/Tower1/room2-img1.jpg", ar: "مصلى خاص يتسع لأكثر من 800 مصلٍ", en: "Private prayer hall for 800+ worshippers" }
    ],
    highlights: [
      { i: "kaaba", v: "✓", ar: "مقابل بوابة الملك عبدالعزيز", en: "Facing King Abdulaziz Gate" },
      { i: "hotel", v: "292", ar: "وحدة فندقية", en: "Hotel units" },
      { i: "bed", v: "870+", ar: "سرير", en: "Beds" },
      { i: "mosque", v: "800+", ar: "سعة المصلى", en: "Prayer hall capacity" },
      { i: "dining", v: "2", ar: "مطعمان بإطلالة", en: "View restaurants" },
      { i: "parking", v: "200", ar: "موقف خاص", en: "Private parking" }
    ],
    /* المرافق والخدمات: ضع مسار الصورة في img لتظهر كصورة قابلة للتكبير */
    facilities: [
      { i: "mosque", ar: "مصلى خاص", en: "Private prayer hall", dAr: "يتسع لأكثر من 800 مصلٍ", dEn: "Accommodates 800+ worshippers", img: "" },
      { i: "dining", ar: "مطعمان بإطلالة على الحرم", en: "Two Haram-view restaurants", dAr: "إطلالات على المسجد الحرام وأجياد", dEn: "Views of the Haram and Ajyad", img: "" },
      { i: "shop", ar: "سوق تجاري", en: "Shopping arcade", dAr: "منتجات تقليدية وحديثة", dEn: "Traditional and modern products", img: "" },
      { i: "parking", ar: "مواقف خاصة", en: "Private parking", dAr: "200 موقف للنزلاء", dEn: "200 spaces for guests", img: "" }
    ],
    desc: {
      ar: "يقع فندق الصفوة البرج الأول مقابل بوابة الملك عبدالعزيز مباشرة على ساحات المسجد الحرام، ويقدّم إقامة فاخرة من فئة الخمس نجوم مع أقرب الإطلالات على المسجد الحرام والكعبة المشرفة. يضم الفندق 292 وحدة فندقية بأكثر من 870 سريرًا، ومطعمين بإطلالات ساحرة على الحرم وأجياد، ومصلى خاصًا يتسع لأكثر من 800 مصلٍ، وسوقًا تجاريًا متنوعًا، و200 موقف خاص للسيارات.",
      en: "Directly opposite King Abdulaziz Gate on the courtyards of the Grand Mosque, Al Safwah Tower 1 offers a five-star stay with some of the closest views of the Haram and the Holy Kaaba. The hotel features 292 units with 870+ beds, two restaurants overlooking the Haram and Ajyad, a private prayer hall for over 800 worshippers, a shopping arcade and 200 private parking spaces."
    },
    rooms: [
      { ar: "غرفة قياسية توأم بإطلالة على الحرم", en: "Standard Twin Room – Haram View", cap: "2 – 3", size: 20, f: ["haram", ...STD], n: 3, r: 0 },
      { ar: "وحدة قياسية توأم بإطلالة على الكعبة", en: "Standard Twin Unit – Kaaba View", cap: "2", size: 20, f: ["kaaba", ...STD], n: 3, r: 1 },
      { ar: "غرفة ديلوكس توأم بإطلالة على الحرم", en: "Deluxe Twin Room – Haram View", cap: "2 – 4", size: 35, f: ["haram", ...STD], n: 3, r: 2 },
      { ar: "غرفة ديلوكس توأم بإطلالة على الكعبة", en: "Deluxe Twin Room – Kaaba View", cap: "2 – 4", size: 35, f: ["kaaba", ...STD], n: 3, r: 3 },
      { ar: "استوديو بإطلالة على الحرم", en: "Studio – Haram View", cap: "2 – 4", size: 55, f: ["haram", ...STD], n: 3, r: 4 },
      { ar: "غرفة قياسية توأم بدون إطلالة", en: "Standard Twin Room – No View", cap: "2", size: 20, f: STD, n: 3, r: 5 },
      { ar: "غرفة توأم بدون إطلالة", en: "Twin Room – No View", cap: "2 – 4", size: 35, f: STD, n: 3, r: 6 },
      { ar: "غرفة توأم بإطلالة على المدينة", en: "Twin Room – City View", cap: "2 – 4", size: 35, f: ["city", ...STD], n: 3, r: 7 },
      { ar: "غرفة توأم بإطلالة جزئية على الكعبة", en: "Twin Room – Partial Kaaba View", cap: "2 – 4", size: 35, f: ["pkaaba", ...STD], n: 3, r: 8 },
      { ar: "استوديو بإطلالة جزئية على الكعبة", en: "Studio – Partial Kaaba View", cap: "2 – 4", size: 55, f: ["pkaaba", ...STD], n: 3, r: 9 },
      { ar: "استوديو بإطلالة على الكعبة", en: "Studio – Kaaba View", cap: "2 – 4", size: 55, f: ["kaaba", ...STD], n: 3, r: 10 },
      { ar: "جناح جونيور بإطلالة على الحرم", en: "Junior Suite – Haram View", cap: "2 – 4", size: 65, f: ["haram", ...STD], n: 3, r: 11 },
      { ar: "جناح جونيور بإطلالة على الكعبة", en: "Junior Suite – Kaaba View", cap: "2 – 4", size: 65, f: ["kaaba", ...STD], n: 3, r: 12 },
      { ar: "جناح تنفيذي بغرفتي نوم بإطلالة على الكعبة", en: "Executive Two-Bedroom Suite – Kaaba View", cap: "3 – 6", size: 130, f: ["kaaba", "bed2", ...STD], n: 3, r: 13 },
      { ar: "جناح صفوت بغرفتي نوم", en: "Safwat Two-Bedroom Suite", cap: "3 – 6", size: 75, f: ["bed2", ...STD], n: 3, r: 14 },
      { ar: "جناح كبار الشخصيات", en: "VIP Suite", cap: "3 – 4", size: 50, f: STD, n: 3, r: 15 },
      { ar: "جناح رويال بغرفتي نوم بإطلالة على الكعبة", en: "Royal Two-Bedroom Suite – Kaaba View", cap: "5 – 6", size: 130, f: ["kaaba", "bed2", ...STD], n: 3, r: 16 }
    ].map(r => ({ ...r, desc: SAFWA_ROOM_DESC }))
  },

  {
    id: "safwa-tower-3",
    folder: "Tower3",
    city: { ar: "مكة المكرمة", en: "Makkah" },
    stars: 4,
    name: { ar: "فندق الصفوة البرج الثالث", en: "Al Safwah Hotel – Tower 3" },
    tagline: { ar: "200 متر فقط من المسجد الحرام", en: "Only 200 m from the Grand Mosque" },
    address: { ar: "برج الصفوة، الهجلة، مكة المكرمة", en: "Al Safwah Tower, Al Hijlah, Makkah" },
    ratings: { booking: "8.3", expedia: "8.4", google: "4.1" },
    cover: "assets/Tower3/cover.jpg",
    heroSlides: [
      { img: "assets/Tower3/cover.jpg", ar: "على بعد 200 متر من باب الملك عبدالعزيز", en: "200 m from King Abdulaziz Gate" },
      { img: "assets/Tower3/room1-img1.jpg", ar: "غرف ديلوكس بإطلالة على أجياد", en: "Deluxe rooms overlooking Ajyad" },
      { img: "assets/Tower3/room4-img1.jpg", ar: "غرف رباعية مثالية للمجموعات", en: "Quad rooms ideal for groups" }
    ],
    highlights: [
      { i: "kaaba", v: "200 م", ar: "من المسجد الحرام", en: "From the Haram" },
      { i: "hotel", v: "860", ar: "غرفة فندقية", en: "Rooms" },
      { i: "floors", v: "22", ar: "طابقًا", en: "Floors" },
      { i: "dining", v: "3", ar: "مطاعم", en: "Restaurants" },
      { i: "mosque", v: "✓", ar: "مصلى الصفوة", en: "Prayer hall" },
      { i: "shop", v: "✓", ar: "سوق تجاري", en: "Shopping mall" }
    ],
    /* المرافق والخدمات: ضع مسار الصورة في img لتظهر كصورة قابلة للتكبير */
    facilities: [
      { i: "mosque", ar: "مصلى الصفوة", en: "Al Safwah prayer hall", dAr: "صلاة بالقرب من الحرم", dEn: "Pray close to the Haram", img: "" },
      { i: "dining", ar: "3 مطاعم", en: "3 restaurants", dAr: "بوفيه إفطار وغداء وعشاء", dEn: "Breakfast, lunch & dinner buffets", img: "" },
      { i: "bell", ar: "خدمة الطعام في الغرف", en: "In-room dining", dAr: "", dEn: "", img: "" },
      { i: "shop", ar: "سوق تجاري متكامل", en: "Shopping mall", dAr: "متاجر متنوعة", dEn: "A variety of stores", img: "" },
      { i: "parking", ar: "مواقف داخل الفندق", en: "On-site parking", dAr: "", dEn: "", img: "" }
    ],
    desc: {
      ar: "يقع فندق الصفوة البرج الثالث على بعد 200 متر من المسجد الحرام وباب الملك عبدالعزيز، بإطلالات على منطقة أجياد وجبل الكعبة. يضم 860 غرفة موزعة على 22 طابقًا بأنواع تناسب الأفراد والعائلات والمجموعات، وثلاثة مطاعم تقدم بوفيه الإفطار والغداء والعشاء بمأكولات محلية وعالمية، إلى جانب خدمة الطعام في الغرف، ومصلى الصفوة، وسوق تجاري متكامل، ومواقف خاصة داخل الفندق.",
      en: "Al Safwah Tower 3 is just 200 m from the Grand Mosque and King Abdulaziz Gate, with views over Ajyad and Jabal Al Kaaba. Its 860 rooms across 22 floors suit individuals, families and groups. Guests enjoy three restaurants serving breakfast, lunch and dinner buffets with local and international cuisine, in-room dining, the Al Safwah prayer hall, an integrated shopping mall and private on-site parking."
    },
    rooms: [
      { ar: "غرفة ثلاثية بإطلالة على المدينة", en: "Triple Room – City View", bedsAr: "3 أسرّة فردية", bedsEn: "3 single beds", cap: "3", size: 35, f: ["city", ...STD], n: 3, r: 0 },
      { ar: "غرفة ديلوكس مزدوجة أو توأم بإطلالة على المدينة", en: "Deluxe Double/Twin – City View", bedsAr: "سريران فرديان", bedsEn: "2 single beds", cap: "3 – 4", size: 36, f: ["city", ...STD], n: 3, r: 1 },
      { ar: "استوديو بإطلالة على المدينة", en: "Studio – City View", bedsAr: "سريران فرديان", bedsEn: "2 single beds", cap: "3 – 4", size: 40, f: ["city", ...STD], n: 3, r: 2 },
      { ar: "غرفة قياسية مزدوجة أو توأم", en: "Standard Double/Twin Room", bedsAr: "سريران فرديان", bedsEn: "2 single beds", cap: "2 – 3", size: 28, f: STD, n: 3, r: 3 },
      { ar: "غرفة رباعية", en: "Quadruple Room", bedsAr: "4 أسرّة فردية", bedsEn: "4 single beds", cap: "4", size: 40, f: STD, n: 3, r: 4 }
    ].map(r => ({ ...r, desc: SAFWA_ROOM_DESC }))
  },

  {
    id: "rabwa-safwa",
    folder: "rabwa",
    city: { ar: "المدينة المنورة", en: "Madinah" },
    stars: 4,
    name: { ar: "فندق ربوة الصفوة الذهبي", en: "Rabwa Al Safwah Al Thahabi Hotel" },
    tagline: { ar: "120 مترًا من الساحة الغربية للمسجد النبوي", en: "120 m from the Prophet's Mosque western plaza" },
    address: { ar: "المناخة، المدينة المنورة 42311", en: "Al Manakha, Madinah 42311" },
    ratings: { booking: "7.3", expedia: "7.6", google: "4.2" },
    cover: "assets/rabwa/cover.jpg",
    heroSlides: [
      { img: "assets/rabwa/cover.jpg", ar: "بجوار بوابة الملك سعود وبوابة النساء", en: "Next to King Saud Gate & the Women's Gate" },
      { img: "assets/rabwa/room3-img1.jpg", ar: "غرف عائلية حتى 5 أسرّة", en: "Family rooms with up to 5 beds" },
      { img: "assets/rabwa/room0-img1.jpg", ar: "جميع الغرف بشرفة وإطلالة على المدينة", en: "Every room with a balcony & city view" }
    ],
    highlights: [
      { i: "mosque", v: "120 م", ar: "من المسجد النبوي", en: "From Al-Masjid An-Nabawi" },
      { i: "hotel", v: "130", ar: "غرفة فندقية", en: "Rooms" },
      { i: "bed", v: "540+", ar: "سرير", en: "Beds" },
      { i: "coffee", v: "✓", ar: "مقهى", en: "Café" },
      { i: "bell", v: "24/7", ar: "استقبال", en: "Reception" },
      { i: "access", v: "✓", ar: "مرافق لذوي الإعاقة", en: "Accessible facilities" }
    ],
    /* المرافق والخدمات: ضع مسار الصورة في img لتظهر كصورة قابلة للتكبير */
    facilities: [
      { i: "coffee", ar: "مقهى", en: "Café", dAr: "مقهى أنيق لراحة الضيوف", dEn: "A stylish café for guests", img: "" },
      { i: "bell", ar: "استقبال 24 ساعة", en: "24-hour reception", dAr: "", dEn: "", img: "" },
      { i: "dining", ar: "خدمة الغرف", en: "Room service", dAr: "", dEn: "", img: "" },
      { i: "access", ar: "مرافق لذوي الإعاقة", en: "Accessible facilities", dAr: "", dEn: "", img: "" },
      { i: "parking", ar: "مواقف خاصة", en: "Private parking", dAr: "", dEn: "", img: "" }
    ],
    desc: {
      ar: "يقع فندق ربوة الصفوة الذهبي في المدينة المنورة على بعد 120 مترًا فقط من الساحة الغربية للمسجد النبوي، بالقرب من بوابة النساء وبوابة الملك سعود، ويسهّل الوصول إلى أبرز المعالم مثل مسجد قباء ومسجد القبلتين. يضم 130 غرفة على 10 طوابق بأكثر من 540 سريرًا، جميعها مكيفة ومزودة بواي فاي مجاني وشاشات مسطحة وخدمة الغرف، إضافة إلى مقهى أنيق، واستقبال على مدار الساعة، ومواقف خاصة، ومرافق لذوي الإعاقة.",
      en: "Rabwa Al Safwah Al Thahabi Hotel is just 120 m from the western courtyard of the Prophet's Mosque, near the Women's Gate and King Saud Gate, with easy access to Quba and Qiblatain mosques. It offers 130 rooms over 10 floors with 540+ beds, all air-conditioned with free Wi-Fi, flat-screen TVs and room service, plus a stylish café, 24-hour reception, private parking and accessible facilities."
    },
    rooms: [
      { ar: "غرفة ثنائية", en: "Twin Room", bedsAr: "سريران فرديان", bedsEn: "2 single beds", cap: "2", size: 11, f: RABWA, n: 8, r: 0,
        desc: { ar: "غرفة توأم مكيفة بشاشة مسطحة وقنوات فضائية وحمّام خاص، مع شرفة تطل على المدينة.", en: "An air-conditioned twin room with a flat-screen satellite TV, private bathroom and a balcony with city views." } },
      { ar: "غرفة ثلاثية", en: "Triple Room", bedsAr: "3 أسرّة فردية", bedsEn: "3 single beds", cap: "3", size: 16, f: RABWA, n: 5, r: 1,
        desc: { ar: "غرفة ثلاثية مكيفة بشاشة مسطحة وقنوات فضائية وحمّام خاص، مع شرفة تطل على المدينة.", en: "An air-conditioned triple room with a flat-screen satellite TV, private bathroom and a balcony with city views." } },
      { ar: "غرفة رباعية", en: "Quadruple Room", bedsAr: "4 أسرّة فردية", bedsEn: "4 single beds", cap: "4", size: 18, f: RABWA, n: 7, r: 2,
        desc: { ar: "غرفة رباعية مكيفة بشاشة مسطحة وقنوات فضائية وحمّام خاص، مع شرفة تطل على المدينة.", en: "An air-conditioned quadruple room with a flat-screen satellite TV, private bathroom and a balcony with city views." } },
      { ar: "غرفة عائلية خماسية", en: "Family Room", bedsAr: "5 أسرّة فردية", bedsEn: "5 single beds", cap: "5", size: 20, f: RABWA, n: 6, r: 3,
        desc: { ar: "غرفة عائلية مكيفة بخمسة أسرّة، بشاشة مسطحة وحمّام خاص وشرفة تطل على المدينة.", en: "An air-conditioned family room with five beds, a flat-screen TV, private bathroom and a balcony with city views." } }
    ]
  },

  {
    id: "rayyan-towers",
    folder: "rayyan",
    city: { ar: "مكة المكرمة", en: "Makkah" },
    stars: 3,
    name: { ar: "فندق أبراج الريان المكية", en: "Al Rayyan Makkah Towers Hotel" },
    tagline: { ar: "سعة كبرى للمجموعات مع نقل للحرم على مدار الساعة", en: "Large group capacity with 24/7 Haram shuttle" },
    address: { ar: "4257 طريق المسجد الحرام، العزيزية الشمالية، مكة المكرمة 24242", en: "4257 Al Masjid Al Haram Rd, North Al Aziziyah, Makkah 24242" },
    // TODO: تأكيد تقييم Booking (كان مسجّلًا 4.2 وهو غالبًا خطأ) — اتركه فارغًا ليُخفى
    ratings: { booking: "", expedia: "8.6", google: "4.2" },
    cover: "assets/rayyan/cover.jpg",
    heroSlides: [
      { img: "assets/rayyan/cover.jpg", ar: "4 أبراج و1,872 غرفة فندقية", en: "4 towers · 1,872 rooms" },
      { img: "assets/rayyan/room5-img1.jpg", ar: "أجنحة عائلية بثلاث غرف نوم", en: "Three-bedroom family suites" },
      { img: "assets/rayyan/room4-img1.jpg", ar: "مطبخ صغير في جميع الغرف", en: "Kitchenette in every room" }
    ],
    highlights: [
      { i: "bus", v: "24/7", ar: "نقل من وإلى الحرم", en: "Haram shuttle" },
      { i: "hotel", v: "1,872", ar: "غرفة فندقية", en: "Rooms" },
      { i: "dining", v: "8,000+", ar: "سعة المطاعم", en: "Dining capacity" },
      { i: "mosque", v: "700+", ar: "سعة المصلى", en: "Prayer hall" },
      { i: "parking", v: "500", ar: "موقف خاص", en: "Parking spaces" },
      { i: "kids", v: "✓", ar: "نادي أطفال ونادي رياضي", en: "Kids club & gym" }
    ],
    /* المرافق والخدمات: ضع مسار الصورة في img لتظهر كصورة قابلة للتكبير */
    facilities: [
      { i: "bus", ar: "نقل إلى الحرم", en: "Haram shuttle", dAr: "ذهابًا وإيابًا على مدار الساعة", dEn: "Round trips, 24 hours a day", img: "" },
      { i: "dining", ar: "4 مطاعم كبرى", en: "4 large restaurants", dAr: "تستوعب أكثر من 8,000 شخص", dEn: "Seating for 8,000+ guests", img: "" },
      { i: "mosque", ar: "مصلى خاص", en: "Private prayer hall", dAr: "يتسع لأكثر من 700 مصلٍ", dEn: "Accommodates 700+ worshippers", img: "" },
      { i: "kids", ar: "نادي الأطفال", en: "Kids club", dAr: "", dEn: "", img: "" },
      { i: "gym", ar: "نادي رياضي", en: "Fitness center", dAr: "", dEn: "", img: "" },
      { i: "parking", ar: "مواقف خاصة", en: "Private parking", dAr: "500 موقف", dEn: "500 spaces", img: "" }
    ],
    desc: {
      ar: "يقع فندق أبراج الريان المكية في العزيزية الشمالية على طريق المسجد الحرام، على بعد نحو 7.7 كم من الحرم، مع خدمة نقل من وإلى الحرم على مدار الساعة. يتكون من 4 أبراج بارتفاع 18 طابقًا تضم 1,872 غرفة فندقية، ما يجعله خيارًا مثاليًا للمجموعات الكبيرة. يحتوي على 4 مطاعم كبرى تستوعب أكثر من 8,000 شخص في وقت واحد، ومصلى يتسع لأكثر من 700 مصلٍ، ونادٍ للأطفال، ونادٍ رياضي، و500 موقف خاص.",
      en: "Located in North Al Aziziyah on the Haram Road, about 7.7 km from the Grand Mosque, Al Rayyan Makkah Towers provides a 24-hour shuttle to and from the Haram. Four 18-storey towers hold 1,872 rooms, making it ideal for large groups. Facilities include four large restaurants seating 8,000+ guests at once, a prayer hall for 700+ worshippers, a kids club, a fitness center and 500 private parking spaces."
    },
    rooms: [
      { ar: "غرفة ديلوكس مزدوجة", en: "Deluxe Double Room", bedsAr: "سرير مزدوج كبير", bedsEn: "1 large double bed", cap: "2", size: 24, f: RAYYAN, n: 6, r: 0,
        desc: { ar: "غرفة مكيفة بحمّام خاص مع دش ومجفف شعر، ومطبخ صغير بثلاجة، وخزنة، وغلاية كهربائية، وإطلالة على المدينة.", en: "Air-conditioned room with a private shower bathroom and hairdryer, kitchenette with fridge, safe, electric kettle and city views." } },
      { ar: "غرفة ديلوكس توأم", en: "Deluxe Twin Room", bedsAr: "سريران فرديان", bedsEn: "2 single beds", cap: "2", size: 24, f: RAYYAN, n: 6, r: 1,
        desc: { ar: "غرفة توأم مكيفة بحمّام خاص مع دش ومجفف شعر، ومطبخ صغير بثلاجة، وخزنة، وغلاية كهربائية، وإطلالة على المدينة.", en: "Air-conditioned twin room with a private shower bathroom and hairdryer, kitchenette with fridge, safe, electric kettle and city views." } },
      { ar: "غرفة ديلوكس ثلاثية", en: "Deluxe Triple Room", bedsAr: "3 أسرّة فردية", bedsEn: "3 single beds", cap: "3", size: 24, f: RAYYAN, n: 7, r: 2,
        desc: { ar: "غرفة ثلاثية مكيفة بحمّام خاص، ومطبخ صغير بثلاجة، وخزنة، وغلاية كهربائية، وإطلالة على المدينة.", en: "Air-conditioned triple room with a private bathroom, kitchenette with fridge, safe, electric kettle and city views." } },
      { ar: "غرفة ديلوكس رباعية", en: "Deluxe Quadruple Room", bedsAr: "4 أسرّة فردية", bedsEn: "4 single beds", cap: "4", size: 24, f: RAYYAN, n: 8, r: 3,
        desc: { ar: "غرفة رباعية مكيفة بحمّام خاص، ومطبخ صغير بثلاجة، وخزنة، وغلاية كهربائية، وإطلالة على المدينة.", en: "Air-conditioned quadruple room with a private bathroom, kitchenette with fridge, safe, electric kettle and city views." } },
      { ar: "جناح ديلوكس بغرفتي نوم", en: "Deluxe Two-Bedroom Suite", bedsAr: "سرير مزدوج + سريران فرديان", bedsEn: "1 double + 2 single beds", cap: "4", size: 72, f: ["bed2", "bath2", ...RAYYAN], n: 9, r: 4,
        desc: { ar: "جناح مكيف بغرفتي نوم وحمّامين، ومطبخ صغير بثلاجة، وخزنة، وغلاية كهربائية، وشاشة مسطحة وإطلالة على المدينة.", en: "Air-conditioned suite with two bedrooms and two bathrooms, kitchenette with fridge, safe, kettle, flat-screen TV and city views." } },
      { ar: "جناح عائلي بثلاث غرف نوم", en: "Family Three-Bedroom Suite", bedsAr: "سرير مزدوج + 4 أسرّة فردية", bedsEn: "1 double + 4 single beds", cap: "6", size: 72, f: ["bed3", "bath3", ...RAYYAN], n: 12, r: 5,
        desc: { ar: "جناح عائلي واسع بثلاث غرف نوم وثلاثة حمّامات، ومطبخ صغير مجهز، وآلة شاي وقهوة، وخزنة، وإطلالة على المدينة.", en: "Spacious family suite with three bedrooms and three bathrooms, equipped kitchenette, tea & coffee maker, safe and city views." } }
    ]
  },

  /* ريان الجوار — بانتظار البيانات */
  {
    id: "rayyan-jiwar",
    folder: "rayyan-jiwar",
    draft: true,
    city: { ar: "", en: "" },
    stars: 0,
    name: { ar: "فندق ريان الجوار", en: "Rayyan Al Jiwar Hotel" },
    tagline: { ar: "", en: "" },
    address: { ar: "", en: "" },
    ratings: { booking: "", expedia: "", google: "" },
    cover: "assets/rayyan-jiwar/cover.jpg",
    heroSlides: [{ img: "assets/rayyan-jiwar/cover.jpg", ar: "", en: "" }],
    highlights: [],
    /* المرافق والخدمات: ضع مسار الصورة في img لتظهر كصورة قابلة للتكبير */
    facilities: [],
    desc: { ar: "", en: "" },
    rooms: []
  }
];
