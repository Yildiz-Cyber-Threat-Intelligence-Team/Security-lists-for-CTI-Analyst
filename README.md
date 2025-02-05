# YıldızCTI Framework

Bu proje, Siber Tehdit İstihbaratı (CTI - Cyber Threat Intelligence) kapsamında kullanılan kaynakları kategorize eden bir framework sunar. Amaç, tehdit istihbaratı toplamak için kullanılabilecek çeşitli veri kaynaklarını ve analiz yöntemlerini düzenlemektir.


| Kategori | Açıklama |
|----------|---------|
| **Archives** | Arşivlenmiş siber tehdit verileri ve geçmiş saldırılar |
| **Commercial Services** | Ticari istihbarat hizmetleri ve araçları |
| **Counterfeits** | Sahtecilik ve dolandırıcılıkla ilgili tehditler |
| **CVE Sites** | Ortak Güvenlik Açıkları ve Etkilenmeler (CVE) siteleri |
| **Defacements** | Web sitesi tahribatı ve hackleme olayları |
| **Encode/Decode** | Şifreleme, kodlama ve çözme araçları |
| **Dark Web** | Dark web üzerindeki tehdit aktörleri ve forumlar |
| **Deep Web** | Deep web içerikleri ve erişim yöntemleri |
| **IP / Geolocation** | IP adresi ve coğrafi konum tabanlı analizler |
| **Phishing** | Kimlik avı saldırıları ve korunma yöntemleri |
| **Ransomware Groups** | Fidye yazılım grupları ve faaliyetleri |
| **Intelligence** | Genel tehdit istihbaratı ve analiz yöntemleri |
| **Telegram Hacking/Stealer/Log Channels** | Telegram üzerindeki hackleme, çalıntı veri ve log paylaşım kanalları |
| **Tools** | Siber güvenlik araçları ve analiz yazılımları |
| **Twitter** | Twitter üzerindeki tehdit aktörleri ve bilgi sızıntıları |



## Archives (Arşiv Kaynakları)
Arşiv kaynakları, geçmişte yayınlanmış ancak zamanla erişimi zorlaşmış veya silinmiş verileri geri getirmek için kullanılan hizmetlerdir. Bu tür araçlar, tehdit istihbaratı analizinde kritik rol oynar çünkü saldırganların veya kötü niyetli içeriklerin önceki sürümlerini görmek, saldırı vektörlerini anlamak ve siber tehdit trendlerini takip etmek için gereklidir.

### Kullanım Alanları:
- Silinmiş veya değiştirilen web sayfalarını incelemek
- Geçmiş tehdit raporlarını geri yüklemek
- Siber suçluların eski faaliyetlerini analiz etmek
- Zaman içinde güvenlik açıklarının nasıl değiştiğini görmek

  ### Öne Çıkan Araçlar

| Araç Adı          | Açıklama |
|-------------------|---------|
| **Wayback Machine** | Web sitelerinin geçmiş versiyonlarını arşivleyen en popüler internet arşivleme hizmetidir. |
| **Megalodon** | Dark web ve deep web üzerindeki belirli sitelerin geçmiş sürümlerini saklayan bir arşivleme hizmetidir. |
| **Ghost** | Kullanıcıların belirli web sayfalarını anonim olarak arşivleyerek geri çağırmalarını sağlayan bir araçtır. |
| **CacheView** | Google, Bing ve diğer arama motorlarının önbelleğe aldığı sayfaları geri getirir. |
| **Webcitation** | Akademik ve araştırma amaçlı URL’leri arşivleyen bir sistemdir. |

## Commercial Services (Ticari Hizmetler)

Ticari hizmetler, siber güvenlik ve tehdit istihbaratı alanında uzmanlaşmış, ücretli veya abonelik tabanlı çözümler sunan platformlardır. Bu hizmetler genellikle kurumsal düzeyde kullanılır ve gelişmiş tehdit tespiti, risk analizi, olay müdahalesi gibi konularda destek sağlar.

###  Kullanım Alanları:
- Kurumsal tehdit istihbaratı sağlamak  
- Risk değerlendirme ve yönetim süreçlerini optimize etmek  
- Siber saldırılara karşı önleyici stratejiler geliştirmek  
- Dark web ve deep web üzerindeki tehditleri takip etmek  

###  Öne Çıkan Araçlar:

| Araç Adı         | Açıklama |
|------------------|---------|
| **Aon** | Kurumsal siber güvenlik çözümleri sunan, risk yönetimi ve sigorta hizmetleriyle tanınan bir şirkettir. Tehdit istihbaratı, veri koruma ve olay müdahale konularında destek sağlar. |
| **HCL Software** | Güvenlik çözümleri, olay yönetimi ve tehdit istihbaratı konularında hizmet sunan bir ticari platformdur. Siber saldırılara karşı proaktif savunma mekanizmaları sağlar. |

##  Counterfeits (Sahtecilik Hizmetleri)

Sahtecilik hizmetleri, dark web ve deep web üzerinde yasa dışı olarak sahte belgeler, kimlikler ve lisanslar sağlayan platformları içermektedir. Bu tür hizmetler genellikle dolandırıcılık faaliyetleri, sahte pasaport ve kimlik belgeleri oluşturma gibi yasadışı işlemler için kullanılır.

###  Kullanım Alanları:
- Sahte pasaport ve kimlik belgeleri oluşturma  
- Sahte lisanslar ve sertifikalar sağlama  
- Kimlik hırsızlığı ve dolandırıcılık faaliyetleri  
- Dark web üzerinden yasa dışı işlemler  

###  Öne Çıkan Platformlar:

| Platform Adı         | Açıklama |
|----------------------|---------|
| **Nemesis** | Dark web üzerinde sahte kimlik ve pasaport hizmetleri sağlayan bir platformdur. |
| **Onion License Services** | Sahte sürücü belgesi ve lisans hizmetleri sunan bir hizmettir. |
| **Passport Services** | Sahte pasaportların üretimi ve satışı üzerine odaklanan bir dark web hizmetidir. |
| **HiddenPass** | Sahte kimlik ve pasaport hizmetleri sağlayan bir başka platformdur. |
| **Onion Identity Services** | Sahte kimlik ve pasaport düzenlemeleri yapan bir dark web hizmetidir. |


## CVE Sites (Zafiyet Veritabanları)

CVE (Common Vulnerabilities and Exposures) siteleri, siber güvenlik açıklarını takip etmek ve analiz etmek için kullanılan platformlardır. Bu siteler, dünya çapında keşfedilen güvenlik açıklarını raporlar, belgeler ve sınıflandırır.

###  Kullanım Alanları:
- Yazılım ve donanım güvenlik açıklarını takip etmek  
- Siber güvenlik araştırmalarını desteklemek  
- Açıklara karşı yamaları ve çözümleri incelemek  
- Güvenlik testleri ve pentest süreçlerini optimize etmek  

###  Öne Çıkan Platformlar:

| Platform Adı         | Açıklama |
|----------------------|---------|
| **CVE.org** | Resmi CVE (Common Vulnerabilities and Exposures) veritabanıdır. Güvenlik açıklarının standartlaştırılmış bir şekilde listelenmesini sağlar. |
| **Exploit-db** | Açıklara karşı kullanılabilecek exploit kodlarını içeren geniş bir arşiv sunar. Penetrasyon testleri için önemli bir kaynaktır. |
| **Vuln-cirl** | Güvenlik açıklarını sınıflandıran ve analiz eden bir platformdur. CVE raporlarını detaylı olarak sunar. |
| **CVE-Search Github** | CVE verilerini hızlı bir şekilde sorgulamak için geliştirilmiş bir açık kaynak projedir. |
| **Tenable** | Güvenlik açıklarını yönetmek ve sistemleri korumak için ticari çözümler sunan bir şirkettir. Nessus gibi popüler tarama araçlarıyla bilinir. |
| **CVE-details** | CVE açıklarını detaylı istatistiklerle sunan bir platformdur. Açıklarla ilgili teknik veriler ve etkilenen yazılımlar hakkında bilgi verir. |
| **Rapid7** | Siber güvenlik araştırmaları ve açık tespitinde kullanılan ticari bir platformdur. Metasploit çerçevesinin geliştiricisidir. |
| **Vuldb** | Güvenlik açıkları hakkında topluluk destekli bilgiler sağlayan bir veritabanıdır. Açıkların etkileri ve çözümleri hakkında detaylı analizler sunar. |

##  Defacements (Web Site Defacement Takip Sistemleri)

Defacements (web sitesi tahrifatı), kötü niyetli aktörler tarafından web sitelerinin yetkisiz şekilde değiştirilmesiyle gerçekleşen saldırılardır. Bu saldırılar genellikle mesaj bırakma, siyasi veya hacktivist amaçlarla gerçekleştirilir. Aşağıdaki platformlar, dünya genelinde gerçekleşen defacement saldırılarını takip etmeye olanak sağlar.

###  Kullanım Alanları:
- Web sitesi saldırılarını izlemek ve analiz etmek  
- Saldırgan grupların ve yöntemlerinin takibini yapmak  
- Hedef alınan sektörleri ve bölgeleri belirlemek  
- Siber güvenlik olay müdahalesi için erken uyarı sistemi sağlamak  

###  Öne Çıkan Platformlar:

| Platform Adı         | Açıklama |
|----------------------|---------|
| **Zone-h** | Dünya çapında web sitesi defacement saldırılarını kaydeden en popüler platformlardan biridir. |
| **Mirror-h** | Defaced web sitelerinin arşivlerini tutan ve saldırganların kimliklerini takip eden bir servistir. |
| **Defacer-id** | Özellikle Asya ve Avrupa bölgesinde gerçekleşen defacement saldırılarını izlemek için kullanılan bir veritabanıdır. |
| **Attacker-work** | Hack grupları ve bireysel saldırganların gerçekleştirdiği defacement saldırılarını listeleyen bir kaynaktır. |
| **Ownzyou** | Defaced siteleri ve saldırıların detaylarını raporlayan bir platformdur. Saldırganlar ve hedeflenen siteler hakkında bilgiler içerir. |

##  Encode/Decode (Şifreleme ve Kod Çözme Araçları)

Encode/Decode araçları, verileri farklı kodlama yöntemleriyle şifrelemek veya çözmek için kullanılan çevrimiçi ve yazılımsal çözümlerdir. Bu araçlar, güvenlik testlerinden veri dönüşümüne kadar geniş bir kullanım alanına sahiptir.

### Kullanım Alanları:
- **Şifreleme ve çözme işlemleri**  
- **Güvenlik araştırmaları ve adli bilişim analizleri**  
- **Metin, URL veya dosyaların belirli algoritmalarla kodlanması**  
- **Hashleme ve veri bütünlüğü kontrolü**  

###  Öne Çıkan Araçlar:

| Araç Adı | Açıklama |
|----------|---------|
| **Dencode** | Çeşitli şifreleme ve kodlama algoritmalarını destekleyen, metin ve veri dönüşümleri yapmaya olanak tanıyan bir platformdur. |
| **Cryptii (Caesar)** | Caesar şifreleme ve diğer klasik şifreleme yöntemlerini kullanarak veri kodlama ve çözme işlemleri yapan bir araçtır. |
| **Cacheslut** | Web tarayıcı önbellekleriyle etkileşim sağlayan, URL tabanlı kodlama ve çözme araçları sunan bir platformdur. |
| **Barcodes (QR)** | QR kodları ve diğer barkod türlerini oluşturmak ve çözmek için kullanılan bir araçtır. |
| **Base64** | Metin ve veri kodlamada yaygın olarak kullanılan Base64 formatını şifrelemek ve çözmek için kullanılan bir platformdur. |

##  Dark Web  

Dark Web, geleneksel arama motorları tarafından indekslenmeyen ve genellikle anonim ağlar üzerinden erişilebilen web sitelerinden oluşur. Bu platformlar, güvenlik araştırmacıları, gazeteciler ve istihbarat analistleri için önemli bilgiler içerebilir.  

###  Kullanım Alanları:  
- **Siber tehdit istihbaratı toplamak**  
- **Dark Web üzerindeki güvenlik tehditlerini izlemek**  
- **Anonim forumlar ve kaynaklardan bilgi edinmek**  

###  Öne Çıkan Araçlar:  

| Araç Adı | Açıklama |  
|----------|---------|  
| **Hacking Forums** | Dark Web üzerinde bulunan, siber güvenlik ve hacking ile ilgili tartışmaların yapıldığı forumlardır. Kullanıcılar genellikle güvenlik açıkları, zararlı yazılımlar ve hacking teknikleri hakkında bilgi paylaşır. |  
| **Wiki** | Dark Web hakkında bilgilerin toplandığı, .onion sitelerinin listelendiği ve kullanıcıların çeşitli kaynaklara erişebildiği platformlardır. Örneğin, Hidden Wiki gibi rehberler Dark Web’de sıkça kullanılan siteleri içerir. |  
| **Search Engines** | Dark Web içeriğinde arama yapmaya olanak tanıyan özel arama motorlarıdır. Örneğin, Ahmia ve OnionLand gibi arama motorları, Tor ağındaki siteleri indeksleyerek erişimi kolaylaştırır. |  

##  Deep Web  

Deep Web, genel arama motorları tarafından indekslenmeyen ancak yasal ve özel bilgilere erişim sağlayan web içeriklerinden oluşur. Veritabanları, özel forumlar ve üyelik gerektiren web siteleri bu kategoriye girer.  

###  Kullanım Alanları:  
- **Özel araştırmalar ve veri analizi**  
- **Siber tehditler ve güvenlik olayları hakkında bilgi edinme**  
- **Deep Web üzerindeki özel forumları takip etme**  

###  Öne Çıkan Araçlar:  

| Araç Adı | Açıklama |  
|----------|---------|  
| **Forums** | Deep Web üzerinde yer alan, genellikle kayıt veya özel erişim gerektiren tartışma platformlarıdır. Kullanıcılar siber güvenlik, hacking, tehdit istihbaratı ve çeşitli teknik konular hakkında bilgi paylaşır. Bu forumlar bazen kapalı topluluklara özel olabilir. |  

## IP / Geolocation  

IP ve konum belirleme araçları, internet üzerindeki cihazların IP adreslerini analiz ederek coğrafi konumlarını tespit etmeye yardımcı olur. Siber güvenlik uzmanları, tehdit istihbaratı analistleri ve ağ yöneticileri tarafından sıklıkla kullanılır.  

### Kullanım Alanları:  
- **Tehdit aktörlerinin IP analizini yapmak**  
- **Şüpheli ağ etkinliklerini izlemek**  
- **IP adresi üzerinden coğrafi konum tespiti yapmak**  
- **VPN veya proxy kullanımını belirlemek**  

### Öne Çıkan Araçlar:  

| Araç Adı | Açıklama |  
|----------|---------|  
| **SurfShark** | VPN ve IP gizleme hizmeti sunarak çevrimiçi gizliliği artırır. |  
| **Geolocation** | IP adreslerinin fiziksel konumunu belirlemek için kullanılan genel bir coğrafi konumlandırma hizmetidir. |  
| **LiveIPMap** | Dünya genelinde gerçek zamanlı IP adresi ve trafik izleme sağlayan bir araçtır. |  
| **IpAddressMy** | IP adresinizi ve bağlantınızla ilgili temel bilgileri gösterir. |  
| **WhatsMyIp** | IP adresinizi, internet servis sağlayıcınızı ve diğer ağ bilgilerini görüntüler. |  
| **IpWhois** | Belirli bir IP adresinin kime ait olduğunu ve hangi ağda barındığını belirlemek için Whois sorgusu yapan bir araçtır. |  
| **IpLocation.io** | IP adreslerinden konum, ISP ve bağlantı detaylarını çıkarmaya yarayan bir analiz platformudur. |  

## Phishing Araçları

Phishing, kötü niyetli kişilerin sahte web siteleri ve e-postalarla kullanıcıları kandırarak kişisel bilgilerini çalmaya çalıştığı yaygın bir siber saldırı türüdür. Bu araçlar, phishing saldırılarını tespit etmek, analiz etmek ve önlemek için faydalıdır. Siber güvenlik uzmanları ve tehdit istihbaratı analistleri tarafından sıklıkla kullanılır.

### Kullanım Alanları:
- Phishing e-posta analizini yapmak
- Şüpheli URL'leri tespit etmek
- Gerçek zamanlı phishing tehditlerini izlemek
- Phishing saldırılarına karşı savunma geliştirmek

### Öne Çıkan Araçlar:

| Araç Adı       | Açıklama                                           |
|----------------|----------------------------------------------------|
| **StalkPish**  | Phishing e-posta analizi ve URL güvenliği aracı.   |
| **UrlDna**     | Phishing URL'lerini analiz etmek için kullanılan bir araç. |
| **openPhish**  | Gerçek zamanlı phishing tehditlerini izler ve raporlar. |
| **PhishingArmy**| Phishing saldırıları ve URL güvenliği veritabanı.  |
| **PhishCheckMe**| Phishing URL'lerini tespit etmek için bir doğrulama aracı. |
| **CloudFlare** | Web güvenliği ve DDoS koruması sağlayan servis.    |
| **IpQuality**  | IP tabanlı phishing ve dolandırıcılık veritabanı.  |


