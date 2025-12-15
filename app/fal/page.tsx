"use client";
import { useEffect, useState } from "react";

type Explain = {
  title: string;
  text: string;
};

/* ================= TAROT ================= */
const TAROT_EXPLAINS: Record<string, Explain> = {
  Cups01: {
    title: "TAROT - KUPA ASI",
    text:
      "Kalp açılıyor, yeni bir duygu başlıyor.\n" +
      "İyi bir haber, taze bir his geliyor.\n" +
      "Kalbini açık tutmalısın."
  },
  Cups02: {
    title: "TAROT - KUPALAR İKİLİSİ",
    text:
      "Bir ilişki, arkadaşlık veya iş birliği sağlam bir temele oturuyor.\n" +
      "Uyumlu bir bağ, iki taraf da aynı frekansta.\n" +
      "İletişim kopukluğuna dikkat et."
  },
  Cups03: {
    title: "TAROT - KUPALAR ÜÇLÜSÜ",
    text:
      "Kutlama, rahatlama ve iyi haber enerjisi.\n" +
      "Sosyallik artıyor; destekleyen çevre, dostluk ve paylaşım öne çıkıyor.\n" +
      "Küçük bir yanlış anlaşılmaya karşı dikkatli ol."
  },
  Cups04: {
    title: "TAROT - KUPA DÖRTLÜSÜ",
    text:
      "İlgi ve motivasyonun düşük olabilir; elindeki fırsatı göremiyorsun.\n" +
      "Seni sıkan konulara ara ver, ortam değiştir veya küçük bir keyif anı yarat."
  },
  Cups05: {
    title: "TAROT - KUPA BEŞLİSİ",
    text:
      "Hayal kırıklığı veya kayıp hissi öne çıkıyor; moral düşmüş olabilir.\n" +
      "Ama arkanda hâlâ duran iki sağlam fırsat var, Geçmişten çıkıp önündekine bakmaya başlarsan onları göreceksin."
  },
  Cups06: {
    title: "TAROT - KUPA ALTILISI",
    text:
      "Geçmişten gelen bir hatıra, tanıdık bir his veya eski bir bağ gündeme geliyor.\n" +
      "Bu kart bazen çocukluk neşesini ve sade mutluluğu da hatırlatır. O enerjiyi kucakla ama geçmişe çok takılıp kalma."
  },
  Cups07: {
    title: "TAROT - KUPA YEDİLİSİ",
    text:
      "Önünde çok seçenek var, o yüzden kafa biraz karışık—hayaller güzel ama karar vermek zorlaşıyor.\n" +
      "Bu dönem biraz ayıklama zamanı; gereksizleri kenara koyup gerçekten içini rahatlatanı seçmeye doğru gitmelisin."
  },
  Cups08: {
    title: "TAROT - KUPA SEKİZLİSİ",
    text:
      "Seni artık doldurmayan bir şeyden uzaklaşma isteği var; “tamam, burası bitti” hissi gibi.\n" +
      "Daha huzurlu olana yöneliyorsun. Ama kararsızlık olursa adım atmanı geciktirebilir—iç sesin zaten neyin doğru olduğunu söylüyor."
  },
  Cups09: {
    title: "TAROT - KUPA DOKUZLUSU",
    text:
      "Dilek enerjisi. İçten istediğin bir şey oluyor ya da kapıda.\n" +
      "Rahatlama, memnuniyet, “oh be” hissi. Kendine güven artıyor. Çok zorlamazsan, takıntı haline getirmezsen, hayat onu sana daha rahat getirir."
  },
  Cups10: {
    title: "TAROT - KUPA ONLUSU",
    text:
      "Duygusal huzur ve tamlık hissi. “Evet ya, her şey yerini buluyor” enerjisi.\n" +
      "Aile, ilişki veya yakın çevrede sıcaklık ve destek artıyor. Beklentilerini azaltırsan, olaylar daha doğal akar."
  },
  Cups11: {
    title: "TAROT - KUPA PRENSİ",
    text:
      "Hafif, tatlı bir sürpriz kapıda. Duygusal bir mesaj, hoş bir konuşma, beklenmedik bir ilgi gelebilir.\n" +
      "Aşırı alınganlık veya hayale kapılıp gerçekleri kaçırma."
  },
  Cups12: {
    title: "TAROT - KUPA ŞÖVALYESİ",
    text:
      "Romantik, nazik ve iyi niyetli bir teklif var.\n" +
      "Birinin yaklaşması, bir davet, güzel bir konuşma veya duygusal bir adım gelebilir. Ama karşı taraftan ikinci bir adım gelmeden sen acele etme; önce onun niyetini netleştirmesini beklemek daha sağlıklı olur."
  },
  Cups13: {
    title: "TAROT - KUPA KRALİÇESİ",
    text:
      "Duygusal sezgi çok güçlü; karşındakinin niyetini kolayca hissediyorsun.\n" +
      "Şefkat, anlayış ve sakin bir güven enerjisi var. İç sesin bu dönemde doğruyu net söylüyor. Aşırı duyarlılık, alınganlık veya duyguları fazla sahiplenme olabilir. Herkesi yük gibi üstüne alma, bir adım geri durunca denge yerine oturur."
  },
  Cups14: {
    title: "TAROT - KUPA KRALI",
    text:
      "Duygular kontrollü ve olgun.\n" +
      "Sakin, anlayışlı ve dengeli bir enerji; ne hissettiğini biliyor ve taşırmadan yönetebiliyorsun. Karşındakine biraz açık olmak, yükü daha da hafifletir."
  },
  Pents01: {
    title: "TAROT - TILSIM ASI",
    text:
      "Yeni bir maddi fırsat, sağlam bir başlangıç.\n" +
      "Para, iş, sağlık veya düzen konusunda “toprak” enerjisi açılıyor. Küçük ama güven veren bir adım kapıda. Fırsat kapıda ama değerlendirmeyi geciktiriyor olabilirsin; erteleme veya kararsızlık ilerlemeyi yavaşlatır."
  },
  Pents02: {
    title: "TAROT - TILSIM İKİLİSİ",
    text:
      "İki şey arasında dengede durmaya çalışıyorsun; yoğun ama kontrol sende.\n" +
      "Biraz akışa bıraktığında işler kendiliğinden toparlanıyor. Fazla yüklenme, her şeyi aynı anda taşıman gerekmiyor. Birini seç, diğerleri zaten sırayla çözülür."
  },
  Pents03: {
    title: "TAROT - TILSIM ÜÇLÜSÜ",
    text:
      "Bir işin adım adım sağlamlaşıyor.\n" +
      "Destek, iş birliği ve birlikte büyütme enerjisi güçlü. Uyumsuzluk olursa, net bir konuşma her şeyi hemen toparlatır."
  },
  Pents04: {
    title: "TAROT - TILSIM DÖRTLÜSÜ",
    text:
      "Bir şeyi sıkı sıkıya tutma, risk almama ve güveni koruma hali.\n" +
      "Maddi ya da duygusal olarak “aman dağılmasın” hissi var. Biraz gevşemek ve fazlalıkları bırakmak iyi gelir, rahatlayınca akış açılır."
  },
  Pents05: {
    title: "TAROT - TILSIM BEŞLİSİ",
    text:
      "Geçici bir sıkışmışlık, yorgunluk ya da “kimse anlamıyor” hissi olabilir.\n" +
      "Enerji düşük ama durum kalıcı değil; destek kapıda. Toparlanma ve rahatlama dönemi, bir çıkış yolu görünür, yük hafifler."
  },
  Pents06: {
    title: "TAROT - TILSIM ALTILISI",
    text:
      "Alma–verme dengesi öne çıkıyor.\n" +
      "Birinden destek görebilir ya da sen başkasına el uzatabilirsin. Enerji adil akması için, fazla vermekten ya da karşılık beklemekten kaçınmalısın."
  },
  Pents07: {
    title: "TAROT - TILSIM YEDİLİSİ",
    text:
      "Sabır ve bekleme enerjisi.\n" +
      "Ektiğin bir şeyin yavaş yavaş meyve vermesi gibi… Sonuç geliyor ama acele edersen yorulursun. “Boşa mı uğraştım?” hissine kaplırsan sadece minicik bir dokunuş yeterli olacak."
  },
  Pents08: {
    title: "TAROT - TILSIM SEKİZLİSİ",
    text:
      "Bir konuda kendini geliştiriyorsun; ne kadar düzenli uğraşırsan o kadar net sonuç alırsın.\n" +
      "Dikkat dağınıklığı veya işi yarım bırakma olabilir, küçük bir düzen kurmak durumu hemen toparlatır."
  },
  Pents09: {
    title: "TAROT - TILSIM DOKUZLUSU",
    text:
      "Emeklerinin karşılığını alma, rahatlama ve “iyi ki uğraşmışım” hissi.\n" +
      "Maddi ya da kişisel anlamda kendi gücünü hissettiğin bir dönem. Değerinin farkına varmak için daha geniş bir açıdan bakman yeter."
  },
  Pents10: {
    title: "TAROT - TILSIM ONLUSU",
    text:
      "Uzun vadeli güven, düzen ve bolluk enerjisi.\n" +
      "Aile, iş veya maddi konularda sağlamlık hissi verir; temelin güçlü. Ama sen yine de herkesin yükünü üstüne alma. Biraz gevşeyince denge yerine oturur."
  },
  Pents11: {
    title: "TAROT - TILSIM PRENSİ",
    text:
      "Yeni bir fırsat, öğrenme ve pratik adım enerjisi.\n" +
      "Küçük ama sağlam bir başlangıç; para, iş veya yetenek konusunda ilerleme ışığı yanıyor. Erteleme veya dikkatin çabuk dağılması olabilir, odağı toparlayınca yol hemen açılır."
  },
  Pents12: {
    title: "TAROT - TILSIM ŞÖVALYESİ",
    text:
      "Sabırlı, düzenli ve sağlam bir ilerleme enerjisi.\n" +
      "Yavaş ama emin adımlar; başladığın şey istikrarla büyüyor. Küçük engeller olsa bile sen yoluna devam et."
  },
  Pents13: {
    title: "TAROT - TILSIM KRALİÇESİ",
    text:
      "Hem kendine hem çevrene iyi bakma, düzeni koruma ve rahatlık yaratma hali.\n" +
      "Maddi ve duygusal anlamda kontrol sende. Kendini fazla yorma ya da herkese yetişmeye çalışma olabilir. Biraz kendine zaman ayırınca denge hemen geri gelir."
  },
  Pents14: {
    title: "TAROT - TILSIM KRALI",
    text:
      "Ne yapıyorsan uzun vadeli düşünerek yapıyorsun; para, iş veya düzen konusunda sağlam bir kontrol hissi var.\n" +
      "Aşırı kontrol etme ya da “her şey benim istediğim gibi olsun” baskısı olabilir. Biraz esnetince her şey yoluna girer."
  },
  Swords01: {
    title: "TAROT - KILIÇ ASI",
    text:
      "Keskin bir netlik geliyor.\n" +
      "Zihnin açılıyor, doğru kararı görüyorsun. Yeni bir fikir, karar veya konuşma “tamam, işte bu” dedirtebilir. Bir noktaya odaklanmak her şey berraklaştıracak."
  },
  Swords02: {
    title: "TAROT - KILIÇ İKİLİSİ",
    text:
      "Kararsızlık ve “bekleyeyim de netleşsin” hissi.\n" +
      "İki seçenek arasında duruyorsun; acele etmemen iyi ama sonsuza kadar da beklememek lazım. Gözünü açma ve karar verme anı. Böylece hangi yolun seni rahatlattığını daha net görürsün."
  },
  Swords04: {
    title: "TAROT - KILIÇ DÖRTLÜSÜ",
    text:
      "Dinlenme, durup nefes alma ve zihni toparlama enerjisi.\n" +
      "Kısa bir süreliğine geri çekilmek, sessizlik ya da küçük bir mola sana iyi gelecek. Bu kart, “şu an acele etme, toparlanıyorsun” der."
  },
  Swords05: {
    title: "TAROT - KILIÇ BEŞLİSİ",
    text:
      "“Kazandım ama içim rahat değil” kartı.\n" +
      "Tartışma, kapris, inatlaşma… Haksız da olsan haklı da olsan, geride bir burukluk bırakma hali. Bazen “bu mücadeleye değer miydi?” hissi gelir. Bir taraf “gel bir orta yol bulalım” diyebilirse iç huzur yavaş yavaş yerine oturur."
  },
  Swords06: {
    title: "TAROT - KILIÇ ALTILISI",
    text:
      "Zihnen yorgunsun ve “buradan çıkmam lazım” hissi ağır basıyor ama ama ayağına bir şey takılıyor gibi.\n" +
      "Kararsızlık, “gitsem mi kalsam mı?” hali. Yavaş yavaş toparlanıp, yükü arkada bırakırsan, daha dingin bir döneme geçeceksin."
  },
  Swords07: {
    title: "TAROT - KILIÇ YEDİLİSİ",
    text:
      "Bir şeyleri sessiz sedasız çözme hali.\n" +
      "Ufak gizlilikler, açık konuşulmayan durumlar, bazen de karşı tarafta hafif kaçamak davranışlar. Aman dikkat gizli kalanlar görünür olup; saklanan açığa çıkabilir."
  },
  Swords08: {
    title: "TAROT - KILIÇ SEKİZLİSİ",
    text:
      "Kendini sıkışmış hissetme.\n" +
      "“Ne yapacağımı bilmiyorum” duygusu. Aslında yol var ama panik ve düşünce yükü yüzünden göremiyorsun. Durumunu değiştirebilecek güce sahip olduğunuzu unutmayın."
  },
  Swords09: {
    title: "TAROT - KILIÇ DOKUZLUSU",
    text:
      "Gece uyutmayan düşünceler.\n" +
      "Gereğinden büyük endişe, kuruntu, “ya şöyle olursa?” korkusu. Zihin seni yoruyor; gerçek durum genelde düşündüğün kadar karanlık değil. Kaygıdan uzaklaşıp biraz nefes aldığınızda, geleceğiniz önünüzde açılacaktır."
  },
  Swords11: {
    title: "TAROT - KILIÇ PRENSİ",
    text:
      "Merak, tetikte olma, bir şeyi hemen çözme isteği.\n" +
      "Hızlı zihin, yeni fikirler, araştırma modu… Bazen de fazla kurcalama veya lafı pat diye söyleme hali. Yanlış anlaşılmalara ve dedikoduya maruz kalmamak için biraz daha düşünerek hareket etmek daha iyi olur."
  },
  Swords12: {
    title: "TAROT - KILIÇ ŞÖVALYESİ",
    text:
      "Hız, kararlılık, “ben gidiyorum” enerjisi.\n" +
      "Bir işe atılma, direk konuya dalma, beklemeden harekete geçme. Zihinsel netlik yüksek ama sabırsızlık da olabilir. Plansız adım atmamak, düşünerek konuşmak ve önce bir durup yönü netleştirmek daha sağlıklı olur."
  },
  Swords13: {
    title: "TAROT - KILIÇ KRALİÇESİ",
    text:
      "Netlik, sezgi ve mantık dengesi, duygusal sisleri kesip doğruyu görme.\n" +
      "Mesafe koyarak düşünme, sağduyulu karar verme. Biraz yumuşamak ve açık fikirli olmak, iletişimi daha rahat ve anlaşılır kılar."
  },
  Swords14: {
    title: "TAROT - KILIÇ KRALI",
    text:
      "Mantık, tarafsızlık, net karar verme.\n" +
      "Duygudan çok akla yaslanma. Otorite, düzgün iletişim, adil duruş. Biraz esnemek ve duyguyu da hesaba katmak fayda sağlar."
  },
  Wands01: {
    title: "TAROT - DEĞNEK ASI",
    text:
      "Bu kart bir kıvılcım anı. İçinden gelen ani bir heves, “bunu yapmak istiyorum” hissi.\n" +
      "Henüz plan yok ama enerji var. İlham taze, motivasyon canlı. Cesaret ya da hareket eksik; erteleyip söndürüyor olabilirsin. Kıvılcımı fark ettiysen, küçük de olsa bir adım at."
  },
  "Değnek İkilisi": {
    title: "TAROT - DEĞNEK İKİLİSİ",
    text:
      "Kararsızlık içindesin; ‘ya olmazsa?’ ve ‘acaba daha iyisi var mı?’ diye düşündüğün bir dönemdesin.\n" +
      "Aslında elinde sağlam bir temel var. Bir adım daha atarsan alan genişleyecek ve yol kendiliğinden açılacak."
  },
  "Değnek Üçlüsü": {
    title: "TAROT - DEĞNEK ÜÇLÜSÜ",
    text:
      "Bir adım atmışsın ve şimdi ufka bakıyorsun; fırsatlar, haberler, yeni yollar yaklaşmakta.\n" +
      "Ama bir yandan da “ya yanlış tarafa bakıyorsam?” diye bir tereddüdün var. Aslında seçeneklerin açık, biraz sabır, biraz güven… netlik gelince resim kendiliğinden tamamlanacak."
  },
  "Değnek Dörtlüsü": {
    title: "TAROT - DEĞNEK DÖRTLÜSÜ",
    text:
      "Mutluluk kapıda ama sen tam içine giremiyorsun. ‘Sevineyim mi, yoksa daha erken mi?’ tereddüdü var.\n" +
      "Bir tık gevşesen, keyif kendiliğinden akacak ve emeğinin meyvesini alacaksın."
  },
  "Değnek Beşlisi": {
    title: "TAROT - DEĞNEK BEŞLİSİ",
    text:
      "Ufak tefek sürtüşmeler, aynı anda herkesin konuştuğu bir ortam.\n" +
      "“Kim haklı çıkacak bakalım” havası var. Boş tartışmalara girme. Biraz sabır, biraz da esnek bakış açısı yeter. Rahat bırakınca işler kendiliğinden toparlanıyor."
  },
  "Değnek Altılısı": {
    title: "TAROT - DEĞNEK ALTILISI",
    text:
      "‘Oh be, sonunda!’ hissini yaşayabilmek ve çevreden onay, destek alabilmek için elinden gelenin en iyisini yap ve kendini kutla.\n" +
      "Mesele zaferden çok, kendini haklı bulmayı öğrenmen. Esas ödül senin iç rahatlığın."
  },
  "Değnek Yedilisi": {
    title: "TAROT - DEĞNEK YEDİLİSİ",
    text:
      "Kendi duruşunu koruma dönemindesin; bazen açıklama yapmak zorundaymışsın gibi hissetsen de aslında sağlam zemindesin.\n" +
      "Gereksiz tartışmalara girme, enerjini gerçekten önemli olana sakla."
  },
  "Değnek Sekizlisi": {
    title: "TAROT - DEĞNEK SEKİZLİSİ",
    text:
      "Olaylar ya peş peşe geliyor ya da birden tıkanıyor, ama kendine net bir yön belirlersen amacına rahatlıkla ulaşabilirsin.\n" +
      "Değişim istiyorsan, o kıvılcımı önce sen yakmalısın; hareketi başlatınca her şey hızla yerine oturacak."
  },
  "Değnek Dokuzlusu": {
    title: "TAROT - DEĞNEK DOKUZLUSU",
    text:
      "Bir şey için çok çabalamışsın, enerjin düşmüş ama hâlâ ayaktasın.\n" +
      "Şu an aşırı tetikte olman normal; çünkü eski yorgunluklar bugünü gereğinden sert gösteriyor. Ama gerçekten son düzlüğe girmişsin. Biraz sabır, biraz da kendine şefkat… hepsi yerine oturacak."
  },
  "Değnek Onlusu": {
    title: "TAROT - DEĞNEK ONLUSU",
    text:
      "Üstüne çok yük almışsın.\n" +
      "‘Her şeyi ben halledeyim’ modu çalışıyor ama omuzların dolmuş. İş bitmeye yakın ama yorgunluk fazla. Biraz paylaşsan, biraz bıraksan hem rahatlayacak hem de özgürleşeceksin."
  },
  "Page of Wands": { // PRENS
    title: "TAROT - DEĞNEK PRENSİ",
    text:
      "İçinde bir heves kıpırdıyor. Yeni bir fikir, yeni bir yön, “yapsam mı?” dedirten bir enerji var.\n" +
      "Daha yolun tamamını görmüyorsun ama ilk adımı attığında gerisi kendini gösterecek. Kalbini dinlerken aklını tamamen geride bırakmadan kendine bir şans ver."
  },
  "Değnek Şövalyesi": {
    title: "TAROT - DEĞNEK ŞÖVALYESİ",
    text:
      "Ateş gibi bir enerjin var ama dozunu kaçırmamalısın.\n" +
      "Bir şey istiyorsun ama sabır düşük ve yön biraz karışık. Sakin bir nefes al, detayları kaçırma. Unutma: nereye gittiğini bilmeyen, hiçbir yere gidemez."
  },
  "Değnek Kraliçesi": {
    title: "TAROT - DEĞNEK KRALİÇESİ",
    text:
      "İçindeki potansiyeli açığa çıkarırsan bitiş çizgisine bir adım daha yaklaşırsın.\n" +
      "Çevrendeki insanlara dikkat et, seçici ol ve enerjini doğru alana aktar. Ayrıntılara özen gösterip sezgilerine güvenirsen yolun açacak."
  },
  "Değnek Kralı": {
    title: "TAROT - DEĞNEK KRALI",
    text:
      "Gücünü fark edersen ve adımların planlı olursa güçlü sonuçlar alırsın.\n" +
      "Biraz sakinlik, biraz strateji her şeyi toparlar. Detaylara özen göster ve enerjini doğru alanlara yönelt; o zaman etkini iki katına çıkarırsın."
  },
  Judgement: {
    title: "TAROT - MAHKEME",
    text:
      "Geçmişi bırakıp kendinle dürüstçe yüzleştiğinde yepyeni bir kapı açılıyor.\n" +
      "İç sesin dinle, neyin doğru, neyin bitmiş, neyin seni çağırdığını daha net duyacaksın. Kendini affet ve adım at. Yeni bir başlangıç seni bekliyor."
  },
  justice: {
    title: "TAROT - ADALET",
    text:
      "Kendine dürüst ol, net ol. İçinde ne doğruysa ona bak.\n" +
      "Gerçekten sana en iyi uyacak yolu bulmak için zor bir seçim yapman gerekebilir. Uzun vadede seni en iyi hissettirecek seçeneği tercih edersen, yolun açılacak."
  },
  lovers: {
    title: "TAROT - AŞIKLAR",
    text:
      "Bir seçim var; bu ilişki, iş ya da hayat yönü olabilir.\n" +
      "Sadece duyguyla gitme, sonra ‘keşke düşünseydim’ dersin. Sadece mantıkla gitme, içte bir boşluk kalır. Seçimini kalbinle aklının buluştuğu yerden yap, o zaman önündeki adımlar daha görünür ve daha akıcı olacak."
  },
  star: {
    title: "TAROT - YILDIZ",
    text:
      "Umudun tekrar canlandığı bir dönemdesin.\n" +
      "İçinde uzun zamandır kısık kalan ışık yeniden parlıyor. Ne yapacağını tam bilmiyor olsan bile aradığın yön yavaş yavaş beliriyor. İç sesine güven; sakin kalırsan yol kendiliğinden açılacak."
  },
  strength: {
    title: "TAROT - GÜÇ",
    text:
      "Kendine karşı yumuşak olursan içindeki güç daha rahat akacak.\n" +
      "Zorladıkça değil, sakinledikçe toparlanıyorsun. Cesaretin de var, dayanıklılığın da… Duygularını bastırma ama onların seni sürüklemesine de izin verme; dengeyi bulduğun anda her şey daha kolay ilerleyecek."
  },
  temperance: {
    title: "TAROT - DENGE",
    text:
      "Her şeyi hemen çözmek zorunda değilsin.\n" +
      "Dozunu tutturunca işler kendiliğinden yumuşuyor. Ama ipin ucunu kaçırırsan da bedenin, ruhun hemen sinyal veriyor: gerilim, huzursuzluk, sabırsızlık… Kendinle kavga etmeden, orta yolu bul; o zaman akış zaten geliyor."
  },
  "the-chariot": {
    title: "TAROT - SAVAŞ ARABASI",
    text:
      "Bu kart “tamam, artık yola çıkıyoruz” hali.\n" +
      "Dağınık duygular, dış sesler, engeller… hepsi var ama seni durdurmuyor. Çok zorlamadan ya da yönü kaybetmeden devam etmelisin. Mesajı basit: Nereye gittiğini bilirsen yol seni taşır; bilmezsen yorulursun."
  },
  "the-emperor": {
    title: "TAROT - İMPARATOR",
    text:
      "Bu kart “buradayım ve sorumluluk bende” diyor.\n" +
      "Netlik, sınır koyma, sağlam durma hali. Duygudan çok akıl, kaostan çok düzen. Hayatında “bunu ben taşıyorum” dediğin bir alan var. İnatlaşmadan, her şeyi tek başına yüklenmeden devam etmelisin; yükün altında ezilmek zorunda değilsin."
  },
  "the-empress": {
    title: "TAROT - İMPARATORİÇE",
    text:
      "Zorlamadan büyüyen şeyler, ilgi gördükçe açılan duygular, bedenle ve hayatla temas hâli.\n" +
      "Şimdi şefkatli olma zamanı; ister bir kişiye, ister bir çocuğa, ister bir projeye… İlgi verdiğin şey büyür ama kendini de beslemen gerekir. Yumuşak ol ama zayıf olma."
  },
  "the-fool": {
    title: "TAROT - DELİ",
    text:
      "İçinde bir merak, “bilmiyorum ama denemek istiyorum” hâli.\n" +
      "Mantık “dur” dese bile iç ses “git” diyor. Her şey planlı olmak zorunda değil; bazen kendine güvenip yürümek gerekir. Kalbini dinlerken aklını tamamen geride bırakmadan kendine bir şans ver."
  },
  "the-hanged-man": {
    title: "TAROT - ASILAN ADAM",
    text:
      "Ya gereksiz yere bekliyorsun ya da bırakman gereken şeyi inatla tutuyorsun.\n" +
      "Bu kart bir şey yapmadan önce durup, olan bitene geniş açıdan bakmanı tavsiye eder. Askıda kalmak rahatsız edici olabilir ama bu bir ceza değil; fark etme zamanı."
  },
  "the-hermit": {
    title: "TAROT - ERMİŞ",
    text:
      "Gürültüden uzaklaşmak, sessizlik, kendi sesini duymak en net rehberdir.\n" +
      "En iyi cevap içinde; kendini dinlemekten korkma. İçindeki potansiyelin farkına var ama oraya kapanıp kalma. Gördüğün ışığın rehberliğinde tekrar hayata karış."
  },
  "the-hierophant": {
    title: "TAROT - AZİZ",
    text:
      "Sorgulamadan ya da sırf isyan olsun diye reddetmemelisin.\n" +
      "Öğrenmeye, anlamaya açık ol ve deneyimi olan, güvenilir kişilerden destek almaya çalış. Kendi yolunu bularken, senden önce yürümüş olanların bilgisini tamamen yok sayma."
  },
  "the-high-priestess": {
    title: "TAROT - BAŞRAHİBE",
    text:
      "Bu kart sezgi, iç bilgelik ve sessiz bilgiyi anlatır.\n" +
      "Her şey hemen açılmak zorunda değil; bazı cevaplar zamana bırakılır. Mantıktan çok hisler konuşur. İçten içe sezdiğin gerçek mi değil mi, bekle, cevap zorladığında değil, sakinleştiğinde ortaya çıkacak."
  },
  "the-magician": {
    title: "TAROT - BÜYÜCÜ",
    text:
      "Başlamak için bilgin, becerin, imkânın var, kapı açık.\n" +
      "Sadece odaklanıp adım atman gerekiyor. Potansiyelini küçümseme ve gücü yanlış yönde kullanma. Gücünü nasıl kullandığın sonucu belirler."
  },
  "the-moon": {
    title: "TAROT - AY",
    text:
      "Bu kart belirsiz bir süreçten geçmeyi anlatır; her şey net değil ama bu kötü olduğu anlamına gelmez.\n" +
      "Duygular dalgalı olabilir; bu yüzden acele karar yerine gözlem iyi gelir. Netlik gelene kadar kendine karşı nazik ol."
  },
  "the-sun": {
    title: "TAROT - GÜNEŞ",
    text:
      "Bu kart açıklık, ferahlık ve “oh be” hissi.\n" +
      "Bir şeyler aydınlanıyor, yük hafifliyor. Ama sen kendini kısıyor, mutlu olmaya izin vermiyor olabilirsin. Güneş orada; perdeleri biraz aralaman yeter."
  },
  "wheel-of-fortune": {
    title: "TAROT - KADER ÇARKI",
    text:
      "Bu kart değişimi anlatır. Kontrol sende değil ama hareket var.\n" +
      "Bir döngü kapanıp yenisi açılıyor. Şans, zamanlama ve beklenmedik gelişmeler devrede. Zorladıkça değil, akışa uydukça ilerler. Çark dönüyorsa, sen de direnmek yerine yönünü ayarla."
  },
  world: {
    title: "TAROT - DÜNYA",
    text:
      "Bir döngü kapanıyor, parça parça olan şeyler yerli yerine oturmuş.\n" +
      "Emek karşılığını buluyor ve yeni bir seviyeye geçiliyor. Döngü kapanmak istiyor ama ters giden bir şey varsa, belki de sen tamamlamayı erteliyorsundur."
  }
};

/* ================= İSKAMBİL ================= */
const ISKAMBIL_EXPLAINS: Record<string, Explain> = {
  "2_of_clubs": {
    title: "İSKAMBİL - SİNEK İKİLİ",
    text:
      "Küçük ama önemli bir başlangıç.\n" +
      "İki seçenek veya iki kişi arasında kalma hali."
  },
  "3_of_clubs": {
    title: "İSKAMBİL - SİNEK ÜÇLÜ",
    text:
      "Gelişme ve hareket.\n" +
      "Bir işin adım adım ilerlemesi."
  },
  "4_of_clubs": {
    title: "İSKAMBİL - SİNEK DÖRTLÜ",
    text:
      "Denge ve sağlam duruş.\n" +
      "Şartları zorlamadan ilerleme."
  }
};

/* ================= SAYFA ================= */
export default function FalPage() {
  
  // TAROT_EXPLAINS anahtarlarından dosya adlarını oluştururken uzantıları da ekliyoruz.
  const tarotCards = Object.keys(TAROT_EXPLAINS).map(k => {
    if (k === 'Judgement') {
      return `${k}.jpg`; // Judgement için özel jpg uzantısı
    }
    // Geri kalanlar için varsayılan uzantı (Page of Wands, Türkçe Değnek isimleri ve Minör Arcana)
    return `${k}.jpeg`; 
  });

  const iskambilCards = Object.keys(ISKAMBIL_EXPLAINS).map(k => `${k}.png`);
  
  const [tarot, setTarot] = useState<string | null>(null);
  const [iskambil, setIskambil] = useState<string | null>(null);
  const [flipT, setFlipT] = useState(false);
  const [flipI, setFlipI] = useState(false);
  // Yorumların görünürlüğünü kontrol eden yeni state
  const [showExplanation, setShowExplanation] = useState(false);

  // Dosya adından (uzantısı silinmiş haliyle) key'i çıkarma fonksiyonu
  const keyFrom = (f: string | null) => (f ? f.replace(/\.(jpeg|jpg|png)$/i, "") : "");
  
  useEffect(() => {
    draw();
  }, []);

  function draw() {
    // Yeni çekimde her şeyi sıfırla
    setFlipT(false);
    setFlipI(false);
    setShowExplanation(false); 
    
    const t = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    const i = iskambilCards[Math.floor(Math.random() * iskambilCards.length)];

    setTarot(t);
    setIskambil(i);

    // 1. Kart açılışlarını başlat
    setTimeout(() => setFlipT(true), 500);
    setTimeout(() => setFlipI(true), 900);
    
    // 2. Kartlar açıldıktan sonra (örneğin 1500ms sonra) yorumları göster
    // En yavaş kart açılımı (flipI) 900ms'de başlıyor ve 700ms sürüyor (transition). 
    // Toplam 1600ms. 1700ms veya 2000ms sonra yorumları göstermek iyi bir zamanlama olur.
    setTimeout(() => setShowExplanation(true), 1700);
  }

  const tarotExplain = tarot ? TAROT_EXPLAINS[keyFrom(tarot)] : null;
  const iskExplain = iskambil ? ISKAMBIL_EXPLAINS[keyFrom(iskambil)] : null;

  return (
    <div style={{ padding: 24, textAlign: "center", fontFamily: "serif" }}>
      <style>{`
        /* Mevcut CSS Stilleri */
        .cards { display:flex; gap:24px; justify-content:center; }
        .card { width:170px; height:260px; perspective:1000px; }
        .inner { width:100%; height:100%; position:relative; transition:700ms; transform-style:preserve-3d; }
        .flip { transform:rotateY(180deg); }
        .face { position:absolute; inset:0; backface-visibility:hidden; border-radius:14px; background:#fff; }
        .front { transform:rotateY(180deg); }
        .img { width:100%; height:100%; object-fit:contain; padding:6px; }
        .box { 
          max-width:620px; 
          margin:20px auto; 
          padding:20px; 
          background:#fff; 
          border-radius:14px; 
          text-align:left; 
          opacity: 0; /* Başlangıçta gizle */
          transform: translateY(10px); /* Hafifçe yukarı kaydırarak girsin */
          transition: opacity 500ms ease-out, transform 500ms ease-out;
        }
        .box.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .title { font-size:20px; margin-bottom:8px; }
        .text { white-space:pre-line; line-height:1.7; }
      `}</style>
      <h1>Fal Ekranı 🔮</h1>
      <div className="cards">
        {/* TAROT */}
        <div className="card">
          <div className={`inner ${flipT ? "flip" : ""}`}>
            <div className="face">
              <img src="/tarot/back.png" className="img" alt="Tarot Kartı Arkası" />
            </div>
            <div className="face front">
              {tarot && <img src={`/tarot/${tarot}`} className="img" alt={tarotExplain?.title || "Tarot Kartı"} />}
            </div>
          </div>
        </div>
        {/* İSKAMBİL */}
        <div className="card">
          <div className={`inner ${flipI ? "flip" : ""}`}>
            <div className="face">
              <img src="/iskambil/back.png" className="img" alt="İskambil Kartı Arkası" />
            </div>
            <div className="face front">
              {iskambil && <img src={`/iskambil/${iskambil}`} className="img" alt={iskExplain?.title || "İskambil Kartı"} />}
            </div>
          </div>
        </div>
      </div>
      
      {/* TAROT YORUMU - showExplanation true olduğunda görünür */}
      {tarotExplain && (
        <div className={`box ${showExplanation ? "visible" : ""}`}>
          <div className="title">{tarotExplain.title}</div>
          <div className="text">{tarotExplain.text}</div>
        </div>
      )}
      
      {/* İSKAMBİL YORUMU - showExplanation true olduğunda görünür */}
      {iskExplain && (
        <div className={`box ${showExplanation ? "visible" : ""}`}>
          <div className="title">{iskExplain.title}</div>
          <div className="text">{iskExplain.text}</div>
        </div>
      )}
      
      <button onClick={draw} style={{ marginTop: 16 }}>
        Tekrar Çek
      </button>
    </div>
  );
}