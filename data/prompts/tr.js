export default {
  "dev": [
    {
      "cat": "Hata Ayıklama",
      "prompts": [
        {
          "title": "Hatayı bul",
          "text": "İşte kodum, beklediğim gibi çalışmıyor.\n\n[kodu buraya yapıştırın]\n\nHata veya sorun: [açıklayın]\n\nHatayı bulun, neden kaynaklandığını açıklayın ve çözümünü gösterin."
        },
        {
          "title": "Bu hatayı açıkla",
          "text": "Şu hatayı alıyorum:\n\n[hata mesajını yapıştırın]\n\nİlgili kod burada:\n\n[kodu buraya yapıştırın]\n\nBu hataya neyin sebep olduğunu ve nasıl düzeltileceğini açıklayın."
        },
        {
          "title": "Performans sorununu gider",
          "text": "Bu kod beklenenden daha yavaş çalışıyor:\n\n[kodu buraya yapıştırın]\n\nMantığı profille analiz edin, darboğazları tespit edin ve öncesi/sonrası örnekleriyle somut optimizasyon önerileri sunun."
        },
        {
          "title": "Başarısız testi düzelt",
          "text": "Bu test başarısız oluyor:\n\n[test kodunu yapıştırın]\n\nHata çıktısı:\n\n[hatayı yapıştırın]\n\nTest ettiği uygulama kodu burada:\n\n[kodu yapıştırın]\n\nTestin neden başarısız olduğunu ve nasıl düzeltileceğini açıklayın."
        }
      ]
    },
    {
      "cat": "Kod İnceleme",
      "prompts": [
        {
          "title": "Hatalar ve kalite için incele",
          "text": "Bu kodu hatalar, uç durumlar (edge cases) ve kod kalitesi sorunları açısından inceleyin. Neyin yanlış olduğunu somut olarak belirtin ve çözüm önerileri sunun:\n\n[kodu buraya yapıştırın]"
        },
        {
          "title": "Güvenlik incelemesi",
          "text": "Bu kodu güvenlik açıkları açısından (enjeksiyon, kimlik doğrulama sorunları, veri sızıntısı, OWASP ilk 10) inceleyin. Önem derecesini puanlayın ve düzeltme önerileri getirin:\n\n[kodu buraya yapıştırın]"
        },
        {
          "title": "PR farkını (diff) incele",
          "text": "İşte bir PR diff'i. Doğruluk, kod stili, performans ve olası sorunlar açısından inceleyin. Kısa, net ve uygulanabilir geri bildirimler verin:\n\n[diff'i buraya yapıştırın]"
        },
        {
          "title": "İyileştirme önerileri sun",
          "text": "Bu kodu inceleyin; okunabilirlik, sürdürülebilirlik ve dille uyumlu (idiomatic) yapı açısından iyileştirmeler önerin. Mevcut işlevselliği koruyun:\n\n[kodu buraya yapıştırın]"
        }
      ]
    },
    {
      "cat": "Refactoring",
      "prompts": [
        {
          "title": "Okunabilirlik için refactor et",
          "text": "Bu kodu daha okunabilir ve sürdürülebilir olacak şekilde yeniden düzenleyin (refactor). Mevcut davranışı koruyun. Yaptığınız her değişikliği açıklayın:\n\n[kodu buraya yapıştırın]"
        },
        {
          "title": "Yeniden kullanılabilir mantığı ayrıştır",
          "text": "Bu kodda tekrarlanan veya birbirine sıkı sıkıya bağlı (tightly-coupled) mantık var. Davranışı değiştirmeden yeniden kullanılabilir fonksiyonlar/modüller çıkarın:\n\n[kodu buraya yapıştırın]"
        },
        {
          "title": "Async/await yapısına dönüştür",
          "text": "Bu geri çağırma (callback) tabanlı veya promise zinciri kodunu async/await kullanacak şekilde dönüştürün. Hataları düzgün bir şekilde ele alın:\n\n[kodu buraya yapıştırın]"
        },
        {
          "title": "Karmaşık fonksiyonu sadeleştir",
          "text": "Bu fonksiyon çok karmaşık. Daha küçük, iyi isimlendirilmiş fonksiyonlara bölün. Aynı girdi ve çıktıları koruyun:\n\n[kodu buraya yapıştırın]"
        }
      ]
    },
    {
      "cat": "Test",
      "prompts": [
        {
          "title": "Birim testleri yaz",
          "text": "Bu fonksiyon için kapsamlı birim testleri (unit tests) yazın. Normal akışları (happy path), uç durumları (edge cases) ve hata senaryolarını kapsayın. [test kütüphanesi/çatısı] kullanın:\n\n[kodu buraya yapıştırın]"
        },
        {
          "title": "Entegrasyon testi yaz",
          "text": "Bu özellik için bir entegrasyon testi yazın. [başlangıç] noktasından [bitiş] noktasına kadar tüm akışı test etmelidir:\n\n[kod/API bilgisini buraya yapıştırın]\n\n[test kütüphanesi/çatısı] kullanın."
        },
        {
          "title": "Test senaryoları üret",
          "text": "Bu fonksiyon için yazmam gereken tüm test senaryolarını listeleyin. Bunları şu şekilde gruplandırın: normal akış (happy path), uç durumlar (edge cases), hata yönetimi ve sınır koşulları:\n\n[kodu buraya yapıştırın]"
        },
        {
          "title": "Test kapsamı ekle",
          "text": "Bu kodun hiç testi yok. Kodu analiz edin, en kritik yolları belirleyin ve öncelik sırasına göre testler yazın. [test kütüphanesi/çatısı] kullanın:\n\n[kodu buraya yapıştırın]"
        }
      ]
    },
    {
      "cat": "Mimari",
      "prompts": [
        {
          "title": "Veritabanı şeması tasarla",
          "text": "[Uygulamanızı/özelliğinizi açıklayın] için bir veritabanı şeması tasarlayın. Tabloları, sütunları, veri tiplerini, ilişkileri ve indeksleri dahil edin. Tasarım kararlarınızı gerekçeleriyle açıklayın."
        },
        {
          "title": "API tasarla",
          "text": "[Özellik/kaynak] için bir REST API tasarlayın. Uç noktaları (endpoints), HTTP metotlarını, istek/yanıt şemalarını, durum kodlarını ve kimlik doğrulamayı dahil edin. En iyi uygulamaları (best practices) takip edin."
        },
        {
          "title": "Yaklaşımları karşılaştır",
          "text": "[Sorun] için şu yaklaşımlar arasında bir karar vermem gerekiyor:\n\nSeçenek A: [açıklayın]\nSeçenek B: [açıklayın]\n\nBunları performans, sürdürülebilirlik, karmaşıklık ve ölçeklenebilirlik kriterlerine göre karşılaştırın. Gerekçeleriyle birlikte birini önerin."
        },
        {
          "title": "Sistem tasarımı",
          "text": "[Kullanım senaryosunu açıklayın] için bir sistem tasarlayın. Üst düzey mimari, veri akışı, depolama, önbelleğe alma (caching) stratejisi ve sistemin nasıl ölçekleneceğini kapsayın. Olası darboğazları belirleyin."
        }
      ]
    },
    {
      "cat": "DevOps",
      "prompts": [
        {
          "title": "Dockerfile yaz",
          "text": "Bu proje için canlı kullanıma (production-ready) uygun bir Dockerfile yazın:\n\nDil/çatı: [örn. Node.js, Python Flask]\nİhtiyaçlar: [örn. multi-stage build, non-root kullanıcı]\n\nGüvenlik ve imaj boyutu açısından en iyi uygulamaları dahil edin."
        },
        {
          "title": "CI/CD işlem hattı oluştur",
          "text": "Şunları gerçekleştiren bir GitHub Actions iş akışı (workflow) yazın:\n\n1. [adımları listeleyin, örn. lint, test, build, deploy]\n\nDil/çatı: [belirtin]\nDağıtım hedefi: [örn. AWS, Vercel, Docker Hub]\n\nÖnbelleğe alma (caching) ve mantıklı tetikleyiciler ekleyin."
        },
        {
          "title": "CI hatasını gider",
          "text": "CI işlem hattım (pipeline) hata veriyor. İşte log çıktısı:\n\n[CI logunu yapıştırın]\n\nİşlem hattı yapılandırması:\n\n[yapılandırmayı yapıştırın]\n\nSorunu tespit edin ve çözüm önerin."
        },
        {
          "title": "Kod olarak altyapı (IaC) hazırla",
          "text": "Şunun için [Terraform/CloudFormation/Pulumi] yapılandırması yazın:\n\n[altyapıyı açıklayın, örn. CloudFront ile bir S3 bucket, subnet'leri olan bir VPC]\n\nGüvenlik açısından en iyi uygulamaları izleyin ve her kaynağı açıklayan yorum satırları ekleyin."
        }
      ]
    },
    {
      "cat": "Git ve Dokümantasyon",
      "prompts": [
        {
          "title": "Commit mesajı yaz",
          "text": "Bu diff için açık ve anlaşılır, conventional commit standartlarına uygun bir commit mesajı yazın. 'type(scope): description' formatını kullanın. Kısa ama açıklayıcı olsun:\n\n[diff'i buraya yapıştırın]"
        },
        {
          "title": "README hazırla",
          "text": "Bu proje için bir README.md oluşturun. Şunları içersin: ne işe yaradığı, nasıl kurulacağı, nasıl kullanılacağı, yapılandırma seçenekleri ve nasıl katkıda bulunulacağı:\n\n[proje yapısını veya ana dosyayı buraya yapıştırın]"
        },
        {
          "title": "Bu kodu belgelendir",
          "text": "Bu koda açık ve öz bir dokümantasyon ekleyin. Fonksiyon/metot docstring'lerini, parametre açıklamalarını, dönüş değerlerini ve kullanım örneklerini dahil edin:\n\n[kodu buraya yapıştırın]"
        },
        {
          "title": "Değişiklik günlüğü (changelog) yaz",
          "text": "Bu değişiklikler için bir changelog maddesi yazın. Şunlara göre gruplandırın: Eklendi (Added), Değiştirildi (Changed), Düzeltildi (Fixed), Kaldırıldı (Removed). Açık ve kullanıcı odaklı bir dil kullanın:\n\n[diff'i veya değişiklik listesini yapıştırın]"
        }
      ]
    }
  ],
  "writing": [
    {
      "cat": "Blog ve Makale",
      "prompts": [
        {
          "title": "Blog yazısı taslağı oluştur",
          "text": "[Konu] hakkında detaylı bir blog yazısı taslağı oluşturun.\n\nHedef kitle: [hedef kitleyi tanımlayın]\nTon: [örn. bilgilendirici, samimi, otoriter]\nHedef kelime sayısı: [örn. 1500 kelime]\n\nŞunları içersin: dikkat çekici bir başlık, giriş kancası (hook), alt başlıklarıyla birlikte 4–6 ana bölüm ve net bir eylem çağrısı (call to action) içeren bir sonuç."
        },
        {
          "title": "Makale girişini güçlendir",
          "text": "Bu makalenin giriş bölümünü, okuyucuyu anında yakalayacak şekilde yeniden yazın. Mevcut giriş:\n\n[girişi buraya yapıştırın]\n\nMakalenin konusu: [konu]\nHedef okuyucu: [hedef kitleyi tanımlayın]\n\nYeni girişin ilgi çekici, somut ve 100 kelimenin altında olmasını sağlayın. 3 farklı varyasyon sunun."
        },
        {
          "title": "Blog yazısı fikirleri üret",
          "text": "[Hedef kitleyi] hedefleyen bir [blog/marka tanımlayın] için 10 blog yazısı fikri üretin.\n\nOdak alanı: [örn. üretkenlik, SaaS pazarlaması, kişisel finans]\n\nHer fikir için şunları ekleyin: çalışma başlığı, ana kanca veya açı ve en çok kimin işine yarayacağı. Somut, uygulanabilir ve arama motorlarında iyi sıralama potansiyeli olan konulara öncelik verin."
        },
        {
          "title": "Güçlü bir sonuç yaz",
          "text": "Bu blog yazısı için bir sonuç bölümü yazın:\n\nKonu: [konu]\nDeğinilen ana noktalar: [ana noktaları özetleyin]\nOkuduktan sonra istenen eylem: [örn. abone olmak, paylaşmak, ürünü denemek]\n\nSonuç bölümü ana mesajı toparlamalı, tamamlanmışlık hissi vermeli ve net, doğal bir eylem çağrısıyla (CTA) bitmelidir."
        }
      ]
    },
    {
      "cat": "Sosyal Medya",
      "prompts": [
        {
          "title": "Tweet dizisi (flood) yaz",
          "text": "[Konu] hakkında bir Twitter/X dizisi (thread) yazın.\n\nHedef kitle: [tanımlayın]\nAmaç: [örn. eğitmek, trafik çekmek, otorite oluşturmak]\nTweet sayısı: [örn. 8–10]\n\nDikkat çekici güçlü bir giriş tweet'iyle başlayın, konuyu sindirilebilir maddelere bölün ve net bir eylem çağrısıyla (CTA) bitirin. Her tweet 280 karakterin altında olsun. Okunabilirlik için satır boşlukları kullanın."
        },
        {
          "title": "LinkedIn gönderisi yaz",
          "text": "[Konu veya deneyim] hakkında bir LinkedIn gönderisi yazın.\n\nTon: [örn. düşündürücü, doğrudan, hikaye odaklı]\nAmaç: [örn. bir ders paylaşmak, yorum aldırmak, güvenilirlik kazanmak]\n\nKaydırmayı durduran tek satırlık bir kanca ile başlayın. Kısa paragraflar kullanın. Kişisel bir bakış açısı veya içgörü ekleyin. Yorumları teşvik etmek için bir soruyla bitirin. 150–250 kelime aralığını hedefleyin."
        },
        {
          "title": "Instagram açıklaması yaz",
          "text": "[Görseli/konuyu açıklayın] konulu bir gönderi için Instagram açıklaması yazın.\n\nMarka dili: [örn. eğlenceli, ilham verici, yalın]\nAmaç: [örn. kaydetmeleri artırmak, profil ziyaretleri sağlamak, ürün satmak]\n\nŞunları içersin: etkileyici bir açılış cümlesi, 2–3 cümlelik destekleyici metin, bir eylem çağrısı ve 5–10 ilgili hashtag."
        },
        {
          "title": "Sosyal medya içerik takvimi oluştur",
          "text": "[Platformlarda, örn. LinkedIn + Instagram] paylaşım yapan [marka/içerik üreticisi] için 2 haftalık bir sosyal medya içerik takvimi oluşturun.\n\nNiş/Alan: [konu alanı]\nAmaç: [örn. takipçi artırmak, trafik çekmek, ürün lansmanı yapmak]\nPaylaşım sıklığı: [örn. platform başına haftada 3 kez]\n\nHer gönderi için şunları ekleyin: tarih, platform, içerik türü (örn. ipucu, hikaye, tanıtım) ve gönderi fikrini anlatan tek satırlık bir açıklama."
        }
      ]
    },
    {
      "cat": "E-posta",
      "prompts": [
        {
          "title": "Soğuk e-posta (cold outreach) yaz",
          "text": "Aşağıdaki durum için bir soğuk erişim (cold email) yazın:\n\nGönderen: [adınız/unvanınız/şirketiniz]\nAlıcı: [unvan veya kişi profili]\nAmaç: [örn. görüşme ayarlamak, referans almak, iş ortaklığı teklif etmek]\nBağlam: [neden iletişime geçtiğinize dair ilgili detaylar]\n\n150 kelimenin altında tutun. Kendinizi anlatmak yerine değer veya alaka düzeyi sunarak başlayın. Uygulaması kolay, düşük sürtünmeli bir eylem çağrısı (CTA) ekleyin."
        },
        {
          "title": "Bülten girişi yaz",
          "text": "Bu haftaki e-posta bülteni için bir giriş yazın.\n\nBülten adı / konusu: [açıklayın]\nBu sayının konusu: [ana konu veya tema]\nHedef kitle: [aboneleri tanımlayın]\nTon: [örn. samimi, esprili, öz]\n\nGiriş samimi hissettirmeli, içerideki içeriğe dair merak uyandırmalı ve okuyucuyu devam etmeye teşvik etmelidir. 80 kelimenin altında tutun."
        },
        {
          "title": "Takip (follow-up) e-postası yaz",
          "text": "Bu durum için bir takip (follow-up) e-postası yazın:\n\nİlk bağlam: [ilk etkileşimi açıklayın — örn. satış görüşmesi, iş mülakatı, gönderilen teklif]\nSon iletişimden bu yana geçen süre: [örn. 5 gün]\nTakibin amacı: [örn. karar almak, yeniden iletişime geçmek, sonraki adımları netleştirmek]\n\nSamimi ama net olun. Önceki konuşmaya kısaca değinin. Yanıt vermeyi kolaylaştırın. 100 kelimenin altında tutun."
        },
        {
          "title": "Zor durum e-postası yaz",
          "text": "Hassas bir durum için profesyonel bir e-posta yazmama yardımcı olun:\n\nDurum: [açıklayın — örn. teslim tarihini kaçırdığınız için özür dilemek, bir talebi reddetmek, kötü bir haber iletmek]\nAlıcı: [ilişkiyi tanımlayın — örn. müşteri, yönetici, iş arkadaşı]\nİstenen sonuç: [okuduktan sonra ne olmasını istiyorsunuz]\n\nDürüst olun, uygun yerlerde sorumluluk alın ve yapıcı bir ton takının. Savunmacı veya aşırı özür dileyen bir dilden kaçının."
        }
      ]
    },
    {
      "cat": "Metin Yazarlığı (Copywriting)",
      "prompts": [
        {
          "title": "Ürün açıklaması yaz",
          "text": "Şunun için etkileyici bir ürün açıklaması yazın:\n\nÜrün adı: [ad]\nNe işe yarar: [açıklayın]\nÖne çıkan özellikler: [3–5 özellik listeleyin]\nHedef müşteri: [tanımlayın]\nTon: [örn. seçkin, eğlenceli, teknik]\n\nÖzelliklerden ziyade faydalara odaklanın. En büyük değerle başlayın. 120 kelimenin altında tutun ve satın almaya yönelik doğal bir yönlendirmeyle bitirin."
        },
        {
          "title": "Açılış sayfası başlığı ve alt başlığı",
          "text": "Bir açılış sayfası (landing page) için 5 başlık ve alt başlık kombinasyonu yazın.\n\nÜrün/hizmet: [açıklayın]\nHedef kitle: [tanımlayın]\nTemel değer önerisi: [hangi sorunu çözüyor veya nasıl bir sonuç sağlıyor]\nTon: [örn. iddialı, güven verici, esprili]\n\nHer başlık net, somut ve fayda odaklı olmalıdır. Alt başlık ana başlığı detaylandırmalı, olası bir itirazı gidermeli veya güvenilirlik katmalıdır."
        },
        {
          "title": "Eylem çağrısı (CTA) varyasyonları yaz",
          "text": "Şunun için 10 eylem çağrısı (CTA) buton metni varyasyonu yazın:\n\nÜrün/hizmet: [açıklayın]\nCTA'nın amacı: [örn. ücretsiz deneme başlatmak, demo talep etmek, rehber indirmek]\nTon: [örn. eylem odaklı, baskısız, merak uyandırıcı]\n\nFarklı açılar deneyin: aciliyet, önce fayda, merak ve sosyal kanıt yaklaşımlarını kullanın. Mümkün olan yerlerde her seçeneği 6 kelimenin altında tutun."
        },
        {
          "title": "Marka diline göre yeniden yaz",
          "text": "Aşağıdaki metni marka ses tonumuza uyacak şekilde yeniden yazın.\n\nOrijinal metin:\n[metni buraya yapıştırın]\n\nMarka ses tonumuz: [tanımlayın — örn. kendinden emin ama cana yakın, uzman ama asla ağdalı/jargon dolu olmayan, samimi ve esprili]\nHedef kitle: [tanımlayın]\n\nAna mesajı aynen koruyun ancak ses tonunu, kelime seçimlerini ve cümle yapısını bu kimliğe uyarlayın. Öncesi ve sonrası şeklinde gösterin."
        }
      ]
    },
    {
      "cat": "Düzenleme ve Düzeltme",
      "prompts": [
        {
          "title": "Karmaşık metni sadeleştir",
          "text": "Aşağıdaki metni, konu hakkında hiçbir ön bilgisi olmayan genel bir okuyucunun kolayca anlayabileceği şekilde sadeleştirin.\n\n[metni buraya yapıştırın]\n\nJargondan kaçının. Kısa cümleler kurun. Teknik terimleri yalın bir dille değiştirin. Orijinal anlamı ve tüm kilit bilgileri koruyun. Ortalama bir okuyucunun rahatça kavrayabileceği bir seviyeyi hedefleyin."
        },
        {
          "title": "Ton ve üslubu düzelt",
          "text": "Aşağıdaki metni üslup ve tonunu geliştirmek için düzenleyin.\n\nMevcut metin:\n[metni buraya yapıştırın]\n\nOlması gereken ton: [örn. daha kendinden emin, daha az resmi, daha samimi, daha öz]\nAnlamı ve gerçekleri olduğu gibi koruyun. Düzenlenmiş versiyonu sunun ve yaptığınız temel değişiklikleri kısaca açıklayın."
        },
        {
          "title": "Hedef kelime sayısına göre kısalt",
          "text": "Aşağıdaki metni, ana mesajı kaybetmeden veya anlamı değiştirmeden yaklaşık [hedef kelime sayısı] kelimeye kısaltın.\n\n[metni buraya yapıştırın]\n\nÖncelikle şunları budamaya odaklanın: dolgu ifadeler, gereksiz tekrarlar ve aşırı açıklamalar. En önemli noktaları, en net örnekleri ve en güçlü ifadeleri koruyun."
        },
        {
          "title": "Yazım denetimi yap ve iyileştir",
          "text": "Aşağıdaki metinde redaksiyon ve yazım denetimi yapıp iyileştirme önerilerinde bulunun.\n\n[metni buraya yapıştırın]\n\nŞunları kontrol edin: yazım ve dilbilgisi hataları, anlatım bozuklukları, belirsiz cümleler ve tutarsız ton. Düzeltilmiş metni ve ardından yapılan değişikliklerin kısa bir listesiyle nedenlerini sunun."
        }
      ]
    },
    {
      "cat": "Yaratıcı Yazarlık",
      "prompts": [
        {
          "title": "Kısa hikaye başlangıcı yaz",
          "text": "Aşağıdaki detaylara uygun bir kısa hikayenin ilk 3 paragrafını yazın:\n\nTür: [örn. edebi kurgu, bilim kurgu, gerilim]\nMekan ve zaman: [zamanı ve mekanı tanımlayın]\nAna karakter: [kısa açıklama]\nAçılış durumu veya çatışma: [tanımlayın]\nRuh hali/ton: [örn. gergin, melankolik, umutlu]\n\nOlayın tam ortasından veya çarpıcı bir andan başlayın. Okuyucuyu anında içine çekin. Uzun uzadıya giriş yapmaktan kaçının."
        },
        {
          "title": "Karakter diyaloğu oluştur",
          "text": "İki karakter arasında geçen bir diyalog sahnesi yazın:\n\nKarakter A: [ad, kısa açıklama, bu sahnedeki amacı]\nKarakter B: [ad, kısa açıklama, bu sahnedeki amacı]\nDurum: [ne olduğunu ve nerede geçtiğini açıklayın]\nAltta yatan gerilim: [gerçekte tehlikede olan veya söylenmeyen şey ne]\n\nDiyaloğun doğal ve karakteri açığa çıkaran bir yapıda olmasını sağlayın. Her karakterin kendine has bir üslubu olsun. Alt metni (söyledikleri ile kastettikleri arasındaki farkı) hissettirin."
        },
        {
          "title": "Metafor ve analojiler üret",
          "text": "Aşağıdaki kavramı açıklamak için 8 özgün metafor veya analoji üretin:\n\nKavram: [fikri, süreci veya nesneyi açıklayın]\nHedef kitle: [bunu kimin anlaması gerekiyor]\nBağlam: [nerede kullanılacak — örn. blog yazısı, konuşma, ürün tanıtımı]\n\nFarklı tarzların bir karışımını hedefleyin: bazıları görsel, bazıları duygusal, bazıları esprili olsun. Klişelerden kaçının. Her biri için en iyi ne zaman işe yarayacağına dair tek cümlelik bir not ekleyin."
        },
        {
          "title": "Farklı bir üslupla yeniden yaz",
          "text": "Aşağıdaki metni [yazar adı veya üslup tanımı, örn. Ernest Hemingway, Viktorya dönemi romancısı, Z kuşağı sosyal medya paylaşımı] tarzında yeniden yazın.\n\nOrijinal metin:\n[metni buraya yapıştırın]\n\nBu üslubun sesini, cümle ritmini, kelime dağarcığını ve yapısal kalıplarını yakalayın. Ana içeriği ve anlamı koruyun. Yalnızca yeniden yazılan versiyonu gösterin."
        }
      ]
    }
  ],
  "marketing": [
    {
      "cat": "Kampanya Planlama",
      "prompts": [
        {
          "title": "Pazarlama kampanyası planla",
          "text": "[Ürün/hizmet] için bir pazarlama kampanyası planlamama yardımcı olun.\n\nHedef kitle: [tanımlayın]\nAmaç: [örn. potansiyel müşteriler (lead), kayıtlar, marka bilinirliği]\nBütçe aralığı: [tutar]\nZaman çizelgesi: [süre]\n\nKampanya stratejisini, temel mesajları, kanalları, kilometre taşlarını ve başarı metriklerini ana hatlarıyla belirtin."
        },
        {
          "title": "İçerik takvimi oluştur",
          "text": "[Marka/ürün] için [30/60/90] günlük bir içerik takvimi oluşturun.\n\nHedef kitle: [tanımlayın]\nKanallar: [örn. LinkedIn, e-posta, blog, Instagram]\nİçerik temaları: [varsa listeleyin]\nPaylaşım sıklığı hedefi: [örn. haftada 3 kez]\n\nİçerik türlerini, konuları ve önerilen paylaşım takvimini dahil edin."
        },
        {
          "title": "Hedef kitle personası tanımla",
          "text": "[Ürün/hizmet] için detaylı bir pazarlama personası oluşturun.\n\nŞu ana kadar bildiklerimiz: [mevcut müşterinizi veya varsayımınızı tanımlayın]\n\nŞunları içersin: demografik bilgiler, unvan, hedefler, zorluklar/sıkıntılar (pain points), itirazlar, tercih edilen kanallar ve satın alma kararlarını nasıl verdikleri."
        },
        {
          "title": "Kampanya değerlendirme (post-mortem) analizi",
          "text": "Bir pazarlama kampanyası için değerlendirme (post-mortem) raporu yazmama yardımcı olun.\n\nKampanya hedefi: [örn. 500 potansiyel müşteri edinmek]\nGerçekleşen sonuç: [ne oldu]\nKullanılan kanallar: [listeleyin]\nTemel metrikler: [CTR, dönüşüm oranı, CAC vb.]\n\nNeyin işe yaradığını, neyin yaramadığını, kök nedenleri ve bir sonraki kampanya için somut önerileri analiz edin."
        }
      ]
    },
    {
      "cat": "SEO",
      "prompts": [
        {
          "title": "Anahtar kelime araştırma özeti",
          "text": "[Konu/ürün] için bir anahtar kelime araştırma özeti oluşturun.\n\nWeb sitesi: [URL veya açıklama]\nHedef kitle: [tanımlayın]\nRakipler: [biliniyorsa listeleyin]\n\nBirincil anahtar kelimeleri, uzun kuyruklu (long-tail) varyasyonları, arama amacı kategorilerini (bilgilendirici, ticari, işlemsel) ve her küme için içerik fırsatlarını önerin."
        },
        {
          "title": "SEO meta etiketleri yaz",
          "text": "Aşağıdaki sayfa için SEO uyumlu başlık (title) ve açıklama (meta description) etiketleri yazın.\n\nSayfa konusu: [tanımlayın]\nHedef anahtar kelime: [anahtar kelime]\nURL: [sayfa URL'si]\nSayfanın kelime sayısı: [yaklaşık]\n\n3 başlık etiketi seçeneği (her biri en fazla 60 karakter) ve 3 meta açıklama seçeneği (her biri en fazla 155 karakter) sunun. Her birinde hedef anahtar kelimenin nereye yerleştiğini belirtin."
        },
        {
          "title": "İçerik açığı (content gap) analizi",
          "text": "[Sektör] alanındaki [web sitesi/marka] için içerik açığı analizi yapın.\n\nMevcut içerik konularımız: [listeleyin veya açıklayın]\nAna rakipler: [listeleyin]\nHedef kitle: [tanımlayın]\n\nRakiplerimizin sıralama aldığı ancak bizim kaçırdığımız konuları ve anahtar kelimeleri belirleyin; bunları trafik potansiyeli ve işle alaka düzeyine göre önceliklendirin."
        },
        {
          "title": "Site içi linkleme stratejisi",
          "text": "[Konu] hakkındaki bir [blog/web sitesi] için site içi bağlantı (internal linking) stratejisi oluşturun.\n\nMevcut kilit sayfalar: [temel içerik sütunu (pillar) sayfalarınızı veya önemli URL'leri listeleyin]\nAmaç: [örn. X konusundaki sıralamayı iyileştirmek, hemen çıkma oranını azaltmak, link değerini dağıtmak]\n\nBağlantı metinleri (anchor text), hangi sayfaların birbiriyle bağlantılanması gerektiği ve konusal otoriteyi (topical authority) destekleyecek bir bağlantı yapısı önerin."
        }
      ]
    },
    {
      "cat": "Reklamlar",
      "prompts": [
        {
          "title": "Google Ads reklam metni yaz",
          "text": "[Ürün/hizmet] için Google Ads metni yazın.\n\nHedef anahtar kelime: [anahtar kelime]\nAçılış sayfası URL'si: [URL]\nTemel fayda: [ana değer önerisi]\nHedef kitle: [bu reklamı kimlerin göreceğini tanımlayın]\n\nResponsive arama reklamı için 3 başlık (her biri en fazla 30 karakter) ve 2 açıklama (her biri en fazla 90 karakter) oluşturun. Faydaları öne çıkarın, bir eylem çağrısı (CTA) ekleyin ve anahtar kelime arama amacıyla uyumlu hale getirin."
        },
        {
          "title": "Facebook reklam varyasyonları",
          "text": "[Ürün/hizmet] için 3 Facebook reklam varyasyonu yazın.\n\nHedef kitle: [demografi ve ilgi alanlarını tanımlayın]\nHedef: [örn. tıklamalar, dönüşümler, bilinirlik]\nAna teklif veya kanca: [açıklayın]\n\nHer varyasyon için şunları yazın: bir ana metin (2-3 cümle), başlık (40 karakter altı) ve açıklama (25 karakter altı). Her biri için farklı bir açı kullanın — örn. acı noktası odaklı, sosyal kanıt odaklı ve teklif odaklı."
        },
        {
          "title": "Açılış sayfası için A/B test fikirleri",
          "text": "[Ürün/hizmet] açılış sayfası (landing page) için A/B test fikirleri üretin.\n\nMevcut dönüşüm oranı: [biliniyorsa]\nBirincil eylem çağrısı (CTA): [örn. Ücretsiz kaydolun]\nAna trafik kaynağı: [örn. Google Ads, Facebook]\nSayfa hedefi: [tanımlayın]\n\nBaşlık, CTA metni, sosyal kanıt, sayfa düzeni ve teklif kurgusu alanlarında 8-10 somut ve yüksek etkili test fikri listeleyin. Beklenen etki ve uygulama kolaylığına göre önceliklendirin."
        },
        {
          "title": "Reklam hedef kitle stratejisi",
          "text": "[Ürün/hizmet] tanıtan ücretli reklamlar için bir kitle hedefleme stratejisi oluşturmama yardımcı olun.\n\nPlatform: [örn. Meta, Google, LinkedIn]\nBütçe: [aylık]\nAmaç: [örn. potansiyel müşteriler, satın almalar, kayıtlar]\nİdeal müşteri: [tanımlayın]\n\nŞunları önerin: soğuk kitle hedefleme seçenekleri, yeniden hedefleme (retargeting) segmentleri, benzer kitle (lookalike) stratejisi ve hariç tutmalar. Her birinin arkasındaki gerekçeyi açıklayın."
        }
      ]
    },
    {
      "cat": "Analitik",
      "prompts": [
        {
          "title": "Trafik düşüşünü yorumla",
          "text": "[Web sitesi/sayfa] üzerindeki bir trafik düşüşünü analiz etmeme yardımcı olun.\n\nDüşüş detayları: [örn. organik trafik son 2 haftada %30 düştü]\nDüşüş tarihi: [tarih]\nEtkilenen sayfalar: [belirli sayfalar mı yoksa site geneli mi]\nSon değişiklikler: [site değişiklikleri, algoritma güncellemeleri, yönlendirmeler vb.]\n\nEn olası nedenleri olasılık sırasına göre listeleyin ve her biri için somut inceleme adımları ve çözüm önerileri sunun."
        },
        {
          "title": "Dönüşüm hunisi (funnel) analizi",
          "text": "Bu pazarlama hunisini analiz edin ve kullanıcıları nerede kaybettiğimizi belirleyin.\n\nHuni adımları ve dönüşüm oranları:\n[örn. Ziyaretçi > Açılış sayfası: %100]\n[Açılış sayfası > Kayıt: %12]\n[Kayıt > Aktivasyon: %40]\n[Aktivasyon > Satın alma: %18]\n\nBu oranları genel sektör standartlarıyla kıyaslayın, en büyük düşüş noktalarını vurgulayın ve her aşama için somut iyileştirme önerilerinde bulunun."
        },
        {
          "title": "Aylık rapor özeti",
          "text": "[Ay] ayı için kısa ve öz bir aylık pazarlama raporu özeti yazın.\n\nTemel metrikler:\n- Trafik: [sayı, geçen aya kıyasla]\n- Potansiyel müşteriler (Leads): [sayı, geçen aya kıyasla]\n- CAC: [tutar]\n- Dönüşüm oranı: [%]\n- En iyi kanal: [kanal]\n- Önemli başarılar: [listeleyin]\n- Karşılaşılan zorluklar: [listeleyin]\n\nBir yönetici özeti (3-4 cümle), öne çıkanlar bölümü, zorluklar bölümü ve gelecek ay için 3 net eylem maddesi yazın."
        },
        {
          "title": "İlişkilendirme modelleri karşılaştırması",
          "text": "[Ürün/hizmet] satan bir [B2B/B2C] işletmesi için ilişkilendirme (attribution) modellerini karşılaştırın.\n\nAna pazarlama kanallarımız: [örn. ücretli arama, organik, e-posta, sosyal]\nOrtalama satış döngüsü: [örn. 2 hafta / 3 ay]\nMevcut ilişkilendirme modeli: [örn. son tıklama (last-click)]\n\nİlk etkileşim (first-touch), son etkileşim (last-touch), doğrusal (linear), zamanla azalan (time-decay) ve veri odaklı (data-driven) modellerin hunimizi nasıl farklı yorumlayacağını açıklayın ve gerekçesiyle en uygun modeli önerin."
        }
      ]
    },
    {
      "cat": "Marka",
      "prompts": [
        {
          "title": "Marka konumlandırma bildirisi yaz",
          "text": "[Şirket/ürün] için bir marka konumlandırma bildirisi yazın.\n\nNe yapıyoruz: [açıklayın]\nHedef kitle: [tanımlayın]\nTemel fayda: [sağladığımız birincil değer]\nFark yaratan unsur: [bizi alternatiflerden ayıran özellik]\nRakipler: [başlıcaları listeleyin]\n\nŞu formatı kullanın: [İhtiyaç] duyan [hedef kitle] için [marka], [fayda sağlayan] bir [kategori]dir; çünkü [inanma gerekçesi/kanıt]. Ardından farklı vurgulara sahip 2 alternatif versiyon sunun."
        },
        {
          "title": "Rekabetçi farklılaşma",
          "text": "[Ürün/şirket] ürünümüzün rakiplerden nasıl ayrıştığını netleştirmeme yardımcı olun.\n\nÜrünümüz: [açıklayın]\nAna rakipler: [her birinin kısa açıklamasıyla birlikte listeleyin]\nTemel güçlü yönlerimiz: [listeleyin]\nMüşteri geri bildirim temaları: [müşterilerin en çok neyi sevdiklerini belirttikleri]\n\nEn güçlü farklılaştırıcılarımızı, hangilerinin savunulmasının daha kolay olduğunu ve bunları pazarlama metinlerinde nasıl açıkça ifade edeceğimizi belirleyin. Sıradan ve jenerik kalan, keskinleştirilmesi gereken iddiaları işaretleyin."
        },
        {
          "title": "Marka sesi rehberi",
          "text": "[Şirket/ürün] için marka sesi kılavuzu oluşturun.\n\nNe yapıyoruz: [açıklayın]\nHedef kitle: [tanımlayın]\nYansıtmak istediğimiz kişilik: [örn. uzman ama samimi, cesur, içten]\nKaçınmak istediğimiz kişilik: [örn. kurumsal/soğuk, jargon dolu]\nBeğendiğimiz metin örnekleri: [varsa yapıştırın]\n\n4-5 ses niteliği tanımlayın; her birini bir açıklama, 'yapın/yapmayın' örnekleri ve öncesi/sonrası yeniden yazım örneği ile açıklayın."
        },
        {
          "title": "Slogan beyin fırtınası",
          "text": "[Şirket/ürün] için slogan (tagline) beyin fırtınası yapın.\n\nNe yapıyoruz: [tek cümleyle açıklayın]\nHedef kitle: [tanımlayın]\nTemel fayda: [ana değer önerisi]\nTon: [örn. vurucu, düşündürücü, kendinden emin, eğlenceli]\nBeğenmediğimiz mevcut sloganlar ve nedenleri: [isteğe bağlı]\n\n15 slogan seçeneği üretin. Bunları yaklaşımlarına göre gruplandırın: fayda odaklı, duygu odaklı ve meydan okuyan. En iyi 3 seçiminizi kısa gerekçeleriyle işaretleyin."
        }
      ]
    },
    {
      "cat": "Büyüme (Growth)",
      "prompts": [
        {
          "title": "Tavsiye programı (referral) fikirleri",
          "text": "[Ürün/hizmet] için bir tavsiye/yönlendirme (referral) programı tasarlayın.\n\nİş modeli: [örn. SaaS aboneliği, e-ticaret]\nMevcut kullanıcı tabanı: [yaklaşık büyüklük]\nOrtalama müşteri yaşam boyu değeri (LTV): [tutar]\nMüşteri edinme maliyeti hedefi: [hedef CAC]\n\nFarklı teşvik mekanizmalarına sahip (örn. çift taraflı ödül, krediler, nakit) 3 tavsiye programı yapısı önerin. Her biri için mekanizmayı, yönlendirme akışını, ödül yapısını ve viral katsayı üzerindeki beklenen etkiyi açıklayın."
        },
        {
          "title": "Kullanıcı tutma (retention) e-posta serisi",
          "text": "[Ürün] için kayıt olmuş ancak [X gündür] aktif olmayan kullanıcılara yönelik bir elde tutma (retention) e-posta serisi yazın.\n\nÜrün: [ne yaptığını açıklayın]\nBırakma/kopma için yaygın neden: [biliniyorsa]\nTon: [örn. samimi, doğrudan]\nE-posta sayısı: [örn. 3 e-postalardan oluşan seri]\n\nHer e-posta için şunları sağlayın: konu satırı, önizleme metni, gövde metni ve eylem çağrısı (CTA). Aralarına [X] gün koyun. Sadece indirimlere değil, değer sunarak yeniden bağ kurmaya odaklanın."
        },
        {
          "title": "Kullanıcı alıştırma (onboarding) akışı optimizasyonu",
          "text": "[Ürün] için kullanıcı alıştırma (onboarding) akışını optimize etmeme yardımcı olun.\n\nMevcut onboarding adımları: [listeleyin]\nKullanıcıların ayrıldığı nokta: [nerede bırakıyorlar]\nDeğere ulaşma süresi hedefi: [örn. kullanıcının 5 dakika içinde değer görmesi]\nKilit aktivasyon olayı: [örn. ilk projesini oluşturdu, bir ekip arkadaşını davet etti]\n\nMevcut akıştaki sürtünme noktalarını tespit edin, her adım için somut iyileştirmeler önerin ve kullanıcıları kilit aktivasyon olayına en hızlı ulaştıran asgari uygulanabilir onboarding (MVO) yapısını tavsiye edin."
        },
        {
          "title": "Viral döngü stratejisi",
          "text": "[Ürün/hizmet] için bir viral döngü (viral loop) stratejisi tasarlayın.\n\nÜrün türü: [örn. iş birliği aracı, pazar yeri, sosyal uygulama]\nMevcut büyüme mekanizması: [kullanıcıların sizi bugün nasıl bulduğunu açıklayın]\nDoğal paylaşım anları: [kullanıcılar ne zaman doğal olarak paylaşmak ister?]\nHedef viral katsayı: [örn. K > 1]\n\n2-3 viral döngü kurgusu önerin. Her biri için tetikleyiciyi, paylaşım mekanizmasını, teşviki ve yönlendirilen kullanıcılar için dönüşüm akışını açıklayın. Her biri için gerçekçi viral katsayı tahmininde bulunun."
        }
      ]
    }
  ],
  "job": [
    {
      "cat": "Özgeçmiş (CV)",
      "prompts": [
        {
          "title": "Özgeçmiş maddelerini yeniden yaz",
          "text": "Bu özgeçmiş maddelerini daha güçlü, etkileyici ve sonuç odaklı olacak şekilde yeniden yazın. Etken fiiller kullanın ve mümkün olan yerlerde sonuçları sayısallaştırın:\n\n[maddelerinizi buraya yapıştırın]\n\nBaşvurduğum pozisyon: [iş unvanı]\nSektör: [sektör]"
        },
        {
          "title": "Özgeçmişi iş ilanına uyarla",
          "text": "İşte mevcut özgeçmişim ve başvurmak istediğim bir iş ilanı. Boşlukları/eksikleri tespit edin, hangi beceri ve anahtar kelimeleri eklemem veya vurgulamam gerektiğini belirtin ve en alakalı bölümleri bu pozisyona uyacak şekilde yeniden yazın.\n\nÖzgeçmişim:\n[özgeçmişi buraya yapıştırın]\n\nİş ilanı:\n[iş ilanını buraya yapıştırın]"
        },
        {
          "title": "Özgeçmiş özeti yaz",
          "text": "Özgeçmişim için etkileyici bir profesyonel özet yazın. 3-4 cümle olmalı, temel güçlü yönlerimi ve deneyimimi vurgulamalı ve hedeflediğim pozisyona özel olarak uyarlanmalıdır.\n\nGeçmişim: [deneyim yılı, temel beceriler, öne çıkan başarılar]\nHedeflediğim pozisyon: [iş unvanı ve sektör]"
        },
        {
          "title": "Başarıları sayısallaştır",
          "text": "Bu özgeçmiş başarılarını sayısallaştırmama ve güçlendirmeme yardımcı olun. Sayı belirtmediysem, her maddeyi daha etkili kılmak için hangi metrikleri araştırabileceğimi veya tahmin edebileceğimi önerin:\n\n[başarıları buraya yapıştırın]\n\nPozisyonum: [iş unvanı]\nŞirket büyüklüğü / sektör: [detaylar]"
        }
      ]
    },
    {
      "cat": "Ön Yazı (Cover Letter)",
      "prompts": [
        {
          "title": "Ön yazı yaz",
          "text": "Bu iş başvurusu için etkileyici bir ön yazı (cover letter) yazın. 3 paragrafta tutun: şirket için neden heyecan duyduğum, pozisyona neler katabileceğim ve net bir eylem çağrısı.\n\nGeçmişim: [kısa özet]\nİş unvanı: [unvan]\nŞirket: [şirket adı]\nTemel iş gereksinimleri: [ilandaki 3-5 gereksinimi yapıştırın]\nBu şirketi özellikle istememin nedeni: [gerekçeniz]"
        },
        {
          "title": "Kariyer değişikliği ön yazısı",
          "text": "Kariyer değişikliği başvurusu için bir ön yazı yazın. Sektör/alan değişimini kabul edin, aktarılabilir becerilerimi yeni pozisyonla ilişkilendirin ve bu değişim için samimi motivasyonumu gösterin.\n\nMevcut geçmişim: [mevcut alan ve deneyim]\nGeçiş yapmak istediğim pozisyon: [yeni iş unvanı ve alan]\nSahip olduğum aktarılabilir beceriler: [listeleyin]\nBu değişikliği neden yapıyorum: [gerekçeniz]"
        },
        {
          "title": "Şirket içi transfer talep mektubu",
          "text": "Şirketim bünyesinde farklı bir ekibe veya pozisyona geçiş talep eden bir mektup yazın. Kurumsal bilgime, bugüne kadarki katkılarıma ve bu geçişin hem bana hem de şirkete nasıl fayda sağlayacağına vurgu yapın.\n\nMevcut pozisyonum: [unvan ve ekip]\nGeçmek istediğim pozisyon: [unvan ve ekip]\nŞirketteki çalışma sürem: [süre]\nBugüne kadarki önemli katkılarım: [2-3 tane listeleyin]\nTransfer nedeni: [gerekçeniz]"
        },
        {
          "title": "Başvuru sonrası takip e-postası",
          "text": "Bir iş başvurusu yaptıktan sonra göndermek üzere kısa ve profesyonel bir takip e-postası yazın. Süregelen ilgiyi ifade etmeli, nazik ve öz olmalı, ısrarcı/baskıcı görünmemelidir.\n\nİş unvanı: [unvan]\nŞirket: [şirket adı]\nBaşvuru tarihi: [tarih]\nİşe alım yöneticisinin adı (biliniyorsa): [isim veya 'İşe Alım Yöneticisi']"
        }
      ]
    },
    {
      "cat": "Mülakat Hazırlığı",
      "prompts": [
        {
          "title": "Davranışsal mülakat sorularına hazırlan (STAR)",
          "text": "Bu pozisyon için davranışsal mülakat sorularına STAR formatında yanıtlar hazırlamama yardımcı olun. Her soru için bana şu yapıyı hatırlatın: Durum (Situation), Görev (Task), Eylem (Action), Sonuç (Result).\n\nMülakatına gireceğim pozisyon: [iş unvanı]\nSektör: [sektör]\nGeçmişim: [kısa özet]\n\nŞu yaygın sorularla başlayın:\n1. İş yerinde bir çatışmayı/anlaşmazlığı çözdüğünüz bir anı anlatın.\n2. Baştan sona yönettiğiniz bir projeyi açıklayın.\n3. Başarısız olduğunuz bir durumu ve bundan ne öğrendiğinizi anlatın."
        },
        {
          "title": "Teknik mülakat hazırlığı",
          "text": "Bu pozisyon için bir teknik mülakatım var. Odaklanmış bir çalışma planı oluşturun ve hazırlanmam gereken en olası konuları ve soru tiplerini listeleyin. Örnek sorular ekleyin ve güçlü yanıtların nasıl olması gerektiğini açıklayın.\n\nPozisyon: [iş unvanı]\nŞirket türü: [startup / kurumsal / FAANG tarzı]\nİş ilanında listelenen temel beceriler: [yapıştırın]\nMevcut beceri seviyem: [başlangıç / orta / ileri]\nMülakata kalan süre: [gün/hafta]"
        },
        {
          "title": "Mülakatçıya sorulacak sorular",
          "text": "Mülakatımın sonunda sorabileceğim düşündürücü ve stratejik soruların bir listesini oluşturun. Pozisyon, ekip kültürü, gelişim fırsatları ve başarı metrikleri hakkında sorular ekleyin. Klişe ve sıradan sorulardan kaçının.\n\nPozisyon: [iş unvanı]\nŞirket: [şirket adı]\nMülakat aşaması: [ilk aşama / son aşama / yönetici mülakatı / panel]\nŞirket hakkında zaten bildiklerim: [kısa notlar]"
        },
        {
          "title": "Maaş pazarlığı konuşma metni",
          "text": "Bir iş teklifi aldıktan sonra kullanabileceğim bir maaş pazarlığı konuşma metni yazın. Kendinden emin ama iş birliğine açık olmalı, talebimi piyasa verileri ve deneyimimle gerekçelendirmeli ve konuşmayı olumlu tutmalıdır.\n\nAlınan teklif: [maaş tutarı]\nHedeflediğim maaş: [hedef tutar]\nDeneyimim: [yıl ve temel nitelikler]\nPozisyon: [iş unvanı]\nKonum / uzaktan çalışma: [konum]"
        }
      ]
    },
    {
      "cat": "LinkedIn",
      "prompts": [
        {
          "title": "LinkedIn profil başlığını optimize et",
          "text": "Profilim için 5 farklı LinkedIn başlığı varyasyonu yazın. Her biri işe alım uzmanlarının aramaları için anahtar kelime açısından zengin olmalı, değer önerimi açıkça iletmeli ve 220 karakterin altında olmalıdır.\n\nMevcut pozisyonum: [unvan]\nSektör: [sektör]\nTemel beceriler: [3-5 tane listeleyin]\nNeyle tanınmak istiyorum: [kısa açıklama]\nYeni fırsatlara açık mıyım: [evet / hayır]"
        },
        {
          "title": "LinkedIn 'Hakkında' yazısı hazırla",
          "text": "Profilim için bir LinkedIn Hakkında (About) bölümü yazın. Birinci tekil şahıs dili kullanın, güçlü bir kanca ile başlayın, deneyimimi ve temel becerilerimi vurgulayın ve ne aradığım veya insanların benimle nasıl iletişime geçebileceği ile bitirin. 250-350 kelime aralığını hedefleyin.\n\nGeçmişim: [deneyim özeti]\nTemel beceriler ve uzmanlık alanları: [listeleyin]\nÖne çıkan başarılar: [1-3 önemli nokta]\nNe arıyorum: [pozisyonlar, fırsatlar veya iş birlikleri]"
        },
        {
          "title": "Bağlantı isteği mesajı",
          "text": "LinkedIn için kısa ve kişiselleştirilmiş bir bağlantı isteği mesajı yazın (300 karakterin altında). Samimi olmalı, neden iletişime geçtiğimi somut olarak belirtmeli ve hemen bir talepte bulunmamalıdır.\n\nİletişime geçtiğim kişi: [adı ve unvanı]\nNeden bağlantı kurmak istiyorum: [ortak ilgi alanı, ortak tanıdık, çalışmalarına hayranlık vb.]\nGeçmişim: [kim olduğumu anlatan tek satırlık açıklama]"
        },
        {
          "title": "Kariyer içgörüsü hakkında LinkedIn gönderisi",
          "text": "Öğrendiğim bir kariyer içgörüsünü veya dersini paylaşan bir LinkedIn gönderisi yazın. Kaydırmayı durdurmak için güçlü bir ilk satır kullanın, kısa bir hikaye veya gözlem anlatın ve etkileşimi artırmak için bir soruyla bitirin. Ağdalı kurumsal laflardan kaçının ve samimi tutun.\n\nKonu veya çıkarılan ders: [paylaşmak istediğim şey]\nArkasındaki bağlam veya hikaye: [kısa detaylar]\nHedef kitle: [kimin için yazıyorum]\nTon: [düşündürücü / motive edici / pratik]"
        }
      ]
    },
    {
      "cat": "Ağ Kurma (Networking)",
      "prompts": [
        {
          "title": "Bilgi edinme mülakatı (informational interview) talep et",
          "text": "İlgilendiğim bir pozisyonda veya şirkette çalışan biriyle 20 dakikalık bir bilgi edinme görüşmesi (informational interview) talep eden bir e-posta yazın. Kısa tutun, deneyimlerine samimi bir ilgi gösterin ve 'evet' demelerini kolaylaştırın.\n\nKişinin adı: [isim]\nPozisyonu ve şirketi: [detaylar]\nOnları nasıl buldum: [LinkedIn, ortak tanıdık, makale vb.]\nNeler öğrenmek istiyorum: [somut konular veya sorular]\nGeçmişim: [kim olduğuma dair tek bir cümle]"
        },
        {
          "title": "Görüşme sonrası teşekkür e-postası",
          "text": "Bir bilgi edinme görüşmesi veya networking buluşmasından sonra 24 saat içinde gönderilecek bir teşekkür takip e-postası yazın. Konuşmamızdaki somut bir noktaya değinin, içten bir teşekkür iletin ve doğal bir sonraki adım önerin.\n\nKişinin adı: [isim]\nGörüşme tarihi: [tarih]\nKonuştuğumuz somut bir detay: [konu veya içgörü]\nÖnermek istediğim sonraki adım: [örn. iletişimde kalmak, bir kaynak paylaşmak, 3 ay sonra tekrar görüşmek]"
        },
        {
          "title": "Asansör konuşması (Elevator pitch)",
          "text": "Networking etkinliklerinde veya biri 'ne iş yapıyorsun?' diye sorduğunda kullanabileceğim 30 saniyelik bir asansör konuşması (elevator pitch) yazın. Net, akılda kalıcı olmalı ve doğal olarak sohbete zemin hazırlamalıdır. 3 versiyon yazın: resmi, samimi ve kariyer değiştiren.\n\nGeçmişim: [mevcut veya son pozisyonum ve sektör]\nTemel beceriler veya uzmanlıklar: [listeleyin]\nNe üzerinde çalışıyorum / hedefim: [hedefler veya aradığım fırsat türü]"
        },
        {
          "title": "Konferans sonrası takip e-postası",
          "text": "Bir konferansta veya sektör etkinliğinde kısaca tanıştığım birine gönderilmek üzere takip e-postası yazın. Nasıl tanıştığımıza atıfta bulunun, sohbeti kısaca özetleyin ve bağlantıda kalmak veya konuşmayı sürdürmek için bir yol önerin.\n\nKişinin adı: [isim]\nEtkinlik adı: [konferans veya etkinlik]\nNasıl tanıştık / ne konuştuk: [kısa detaylar]\nÖnermek istediğim sonraki adım: [görüşme, kahve sohbeti, bir kaynak paylaşımı vb.]"
        }
      ]
    },
    {
      "cat": "Kariyer Gelişimi",
      "prompts": [
        {
          "title": "Kariyer gelişim planı oluştur",
          "text": "12 aylık bir kariyer gelişim planı oluşturmama yardımcı olun. Somut hedefleri, geliştirilecek becerileri, ulaşılacak kilometre taşlarını ve her çeyrekte atılacak adımları dahil edin. Gerçekçi ve hedeflediğim pozisyonla doğrudan bağlantılı olmasını sağlayın.\n\nMevcut pozisyonum: [unvan ve seviye]\n12 ay sonraki hedef pozisyon: [unvan ve seviye]\nKapatılması gereken temel açıklar: [eksik olan beceriler, deneyimler veya yetkinlik belgeleri]\nKullanabileceğim kaynaklar: [kurslar, mentorlar, bütçe vb.]"
        },
        {
          "title": "Terfi talep et",
          "text": "Yöneticimden terfi istemek için bir konuşma metni hazırlayın. Konuşma açılışı, katkılarımın ve etkimin bir özeti, net bir talep ve ilerleme yolunu tartışmaya yönelik bir davet şeklinde yapılandırın. Kendinden emin ve iş birliğine açık bir dil kullanın.\n\nMevcut unvanım: [unvan]\nİstediğim unvan: [hedef unvan]\nMevcut pozisyondaki süre: [süre]\nÖnemli başarılar: [etkileriyle birlikte 3-5 tane listeleyin]\nNeden şimdi: [zamanlama veya tetikleyici etken]"
        },
        {
          "title": "Öz değerlendirme (self-review) yaz",
          "text": "Yıllık performans değerlendirmem için güçlü bir öz değerlendirme yazmama yardımcı olun. Her alan için ölçülebilir etkiye sahip somut başarıları vurgulayın, gelişim alanlarını dürüstçe kabul edin ve çalışmalarımı ekip ve şirket hedefleriyle ilişkilendirin.\n\nPozisyonum: [unvan]\nBu dönemdeki temel projeler veya sorumluluklar: [listeleyin]\nÖnemli başarılar: [mümkünse metriklerle]\nGelişmek istediğim alanlar: [somut belirtin]\nGelecek dönem hedefleri: [2-3 tane listeleyin]"
        },
        {
          "title": "Beceri açığı analizi",
          "text": "Mevcut becerilerim ile hedeflediğim pozisyonun gereksinimleri arasındaki farkı analiz edin. Boşlukları önem sırasına göre önceliklendirin, her birini kapatmak için somut yollar önerin ve gerçekçi bir zaman çizelgesi çıkarın.\n\nMevcut becerilerim: [teknik ve sosyal becerileri listeleyin]\nHedef pozisyon: [iş unvanı]\nİş tanımı veya gereksinimleri: [temel gereksinimleri yapıştırın veya açıklayın]\nÇalışabileceğim zaman dilimi: [ay veya yıl]"
        }
      ]
    }
  ],
  "startup": [
    {
      "cat": "Fikir Geliştirme",
      "prompts": [
        {
          "title": "İş fikrini doğrula",
          "text": "Bir iş fikrim var: [fikrinizi 2-3 cümleyle açıklayın].\n\nŞu konuları ele alarak fikrimi doğrulamama (validate etmeme) yardımcı olun:\n1. Problem netliği — burada çözülmeye değer, gerçek ve can yakıcı bir sorun var mı?\n2. Hedef müşteri — bunun için kim ödeme yapar?\n3. Pazar büyüklüğü — kaba bir TAM/SAM/SOM tahmini\n4. Test etmem gereken temel riskler ve varsayımlar\n5. Herhangi bir şey inşa etmeden önce doğrulamak için 3 hızlı ve düşük maliyetli yöntem."
        },
        {
          "title": "Hedef pazarı belirle",
          "text": "Ürünüm: [ürün veya hizmetinizi açıklayın].\n\nHedef pazarımı belirlememe ve önceliklendirmeme yardımcı olun:\n1. Buna ihtiyaç duyabilecek 5 potansiyel müşteri segmenti listeleyin\n2. Her segment için acı seviyesini (pain level), ödeme istekliliğini ve ulaşım kolaylığını açıklayın\n3. İlk olarak hangi segmenti hedeflemem gerektiğini gerekçesiyle önerin\n4. Bu segment için ideal müşteri profilini (ICP) ayrıntılı olarak tanımlayın."
        },
        {
          "title": "Rekabet ortamı analizi",
          "text": "[Sektör/alan] alanında [ürününüzü/hizmetinizi açıklayın] geliştiriyorum.\n\nRekabet ortamını analiz edin:\n1. Başlıca doğrudan ve dolaylı rakipler kimler?\n2. Güçlü ve zayıf yönleri nelerdir?\n3. Pazarda hangi boşluklar veya yeterince karşılanmayan ihtiyaçlar var?\n4. Yeni bir girişim gerçekçi olarak nerede farklılaşabilir?\n5. Müşterilerin mevcut çözümlerden vazgeçip bize geçmesini ne sağlar?"
        },
        {
          "title": "MVP özellik önceliklendirmesi",
          "text": "[Ürünü açıklayın] için bir MVP (Minimum Uygulanabilir Ürün) geliştiriyorum. Hedef kullanıcım [kullanıcıyı tanımlayın] ve çözdüğüm temel sorun [sorunu açıklayın].\n\nÖzellikleri önceliklendirmeme yardımcı olun:\n1. Çalışan bir MVP için mutlaka olması gereken (must-have) özellikleri listeleyin\n2. Lansmanda olsa iyi olur ama zorunlu olmayan özellikleri listeleyin\n3. Sonraki sürümlere ertelenecek özellikleri listeleyin\n4. Gerçek kullanıcı geri bildirimi almak için [zaman dilimi] içinde yayına alabileceğim mümkün olan en yalın sürümü önerin.\n\nUygun yerlerde MoSCoW yöntemini kullanın."
        }
      ]
    },
    {
      "cat": "Sunum ve Yatırım",
      "prompts": [
        {
          "title": "Asansör sunumu (Elevator pitch) yaz",
          "text": "Girişimim için 30 saniyelik vurucu bir asansör konuşması (elevator pitch) yazmama yardımcı olun.\n\nDetaylar:\n- Ne yapıyoruz: [ürün/hizmeti açıklayın]\n- Çözdüğümüz sorun: [sorunu açıklayın]\n- Hedef müşteri: [kimin için]\n- Nasıl para kazanıyoruz: [iş modeli]\n- Bugüne kadarki çekim gücü (traction): [metrikler, kullanıcılar, gelir]\n\n3 versiyon yazın: biri yatırımcı için, biri potansiyel müşteri için, biri de genel bir networking etkinliği için. Her birini 60 kelimenin altında tutun."
        },
        {
          "title": "Yatırımcı sunumu (Pitch deck) hikayesi",
          "text": "Yatırımcı sunumum (pitch deck) için anlatı kurgusunu oluşturmama yardımcı olun.\n\nGirişim detayları:\n- Şirket adı: [ad]\n- Ne yapıyoruz: [açıklama]\n- Sorun: [sorun]\n- Çözüm: [çözüm]\n- Pazar: [pazar büyüklüğü]\n- İş modeli: [nasıl para kazanıyoruz]\n- Çekim gücü (traction): [metrikler]\n- Ekip: [kilit ekip üyeleri]\n- Yatırım talebi: [ne kadar, ne için]\n\nHer slayt (Sorun, Çözüm, Pazar, Ürün, Çekim Gücü, Ekip, Talep) için ana mesajı ve 3 destekleyici maddeyi yazın. Yatırımcı odaklı ve hikaye anlatımı güçlü olsun."
        },
        {
          "title": "Yatırımcı tanışma e-postası",
          "text": "Girişimimi bir girişim sermayesi (VC) yatırımcısına tanıtmak için soğuk bir e-posta (cold email) yazın.\n\nBağlam:\n- Yatırımcının odağı: [örn. B2B SaaS, erken aşama, fintech]\n- Girişimim: [adı ve tek cümlelik açıklaması]\n- Özellikle bu yatırımcı: [nedeni]\n- Çekim gücü / kanıtlar: [temel metrikler veya kilometre taşları]\n- Talep: [örn. 20 dakikalık tanışma görüşmesi]\n\n150 kelimenin altında bir konu satırı ve e-posta yazın. Doğrudan, somut ve ikna edici olsun. Jenerik ifadelerden ve klişe kavramlardan kaçının."
        },
        {
          "title": "Finansal projeksiyon varsayımları",
          "text": "3 yıllık finansal projeksiyonlarımın arkasındaki temel varsayımları oluşturmama yardımcı olun.\n\nİş modeli: [nasıl ücretlendirdiğinizi açıklayın, örn. SaaS aboneliği, pazar yeri, tek seferlik satış]\nHedef müşteri: [müşteri segmentini tanımlayın]\nMevcut durum: [gelir, kullanıcı sayısı veya gelir öncesi]\n\nHer yıl için (1. Yıl, 2. Yıl, 3. Yıl) şunlar için gerçekçi varsayımlar belirlememe yardımcı olun:\n1. Müşteri edinimi (kanallar, CAC, büyüme oranı)\n2. Müşteri başına gelir (ACV veya ARPU, kayıp/churn oranı)\n3. Çalışan sayısı ve kilit işe alımlar\n4. Temel maliyet unsurları\n5. Başa baş (breakeven) noktasına giden yol\n\nYatırımcılar tarafından en çok sorgulanması muhtemel varsayımları işaretleyin."
        }
      ]
    },
    {
      "cat": "Ürün Yönetimi",
      "prompts": [
        {
          "title": "Ürün gereksinim belgesi (PRD) yaz",
          "text": "Aşağıdaki özellik için bir ürün gereksinim dokümanı (PRD) yazın.\n\nÖzellik adı: [özellik adı]\nÜrün: [ürün açıklaması]\nKullanıcı sorunu: [bu neyi, kimin için çözüyor]\nİş hedefi: [bunu neden yapıyoruz]\n\nPRD şunları içermelidir:\n1. Genel bakış ve hedefler\n2. Kullanıcı hikayeleri ([kullanıcı] olarak [sonuç] elde etmek için [eylem] yapmak istiyorum)\n3. Fonksiyonel gereksinimler\n4. Kapsam dışı olanlar (out of scope)\n5. Başarı metrikleri\n6. Açıkta kalan sorular\n\nMühendislik ekibi için kısa, net ve uygulanabilir tutun."
        },
        {
          "title": "Kullanıcı hikayesi haritalama",
          "text": "[Ürün veya özellik] için bir kullanıcı hikayesi haritası (user story map) oluşturmama yardımcı olun.\n\nHedef kullanıcı: [kullanıcıyı tanımlayın]\nTemel kullanıcı yolculuğu: [baştan sona ana akışı açıklayın]\n\n1. Yolculuğu 5-7 üst düzey aktiviteye bölün (hikaye haritasının en üst satırı)\n2. Her aktivitenin altında, onu tamamlamak için gereken kullanıcı görevlerini (hikayelerini) listeleyin\n3. Hangi hikayelerin MVP sürümünde, hangilerinin sonraki sürümlerde yer alacağını belirleyin\n4. Hikayeler arasındaki bağımlılıkları işaretleyin\n\nAktivitelere göre gruplandırılmış yapılandırılmış bir liste formatında sunun."
        },
        {
          "title": "Fiyatlandırma stratejisi analizi",
          "text": "Ürünüm için doğru fiyatlandırma stratejisini belirlememe yardımcı olun.\n\nÜrün: [ne yaptığını açıklayın]\nHedef müşteri: [kim satın alıyor, şirket büyüklüğü, sektör]\nSağlanan değer: [müşteri için hangi sonucu üretiyor]\nRakip fiyatları: [alternatifler ne kadar ücret alıyor]\nMevcut düşüncelerim: [varsa aklımdaki fiyat fikirleri]\n\nŞunları analiz edin:\n1. En iyi fiyatlandırma modeli (abonelik, kullanıma dayalı, tek seferlik, freemium vb.) ve avantaj/dezavantajları\n2. Önerilen fiyat noktası ve gerekçesi\n3. Varsa paketleme kademeleri (tiers)\n4. Nihai karar vermeden önce fiyatlandırmayı test etme ve doğrulama yolları\n5. Bu pazarda kaçınılması gereken yaygın fiyatlandırma hataları."
        },
        {
          "title": "Özellik önceliklendirme çerçevesi",
          "text": "Özellik taleplerinden oluşan bir iş listem (backlog) var ve bunları önceliklendirmem gerekiyor. Yapılandırılmış bir önceliklendirme çerçevesi uygulamama yardımcı olun.\n\nÜrün: [ürünü açıklayın]\nMevcut aşama: [örn. lansman öncesi, erken çekim gücü, ölçeklenme]\nŞu anki en önemli iş hedefi: [örn. kullanıcıları tutmak, ilk 100 müşteriyi edinmek, churn'ü azaltmak]\n\nÖzellik listesi:\n[özelliklerinizi buraya listeleyin]\n\nHer özelliği şu kriterlere göre puanlayın:\n1. En önemli iş hedefine etkisi (1-5)\n2. Geliştirme eforu (1-5, 5 = çok yüksek efor)\n3. Kullanıcı talep sinyali (kaç kullanıcı talep etti)\n4. Stratejik uyum\n\nBunları sıralayın; hangisinin ilk sırada, hangisinin ikinci sırada geliştirilmesi gerektiğini ve hangilerinin beklemeye alınacağını önerin."
        }
      ]
    },
    {
      "cat": "Büyüme (Growth)",
      "prompts": [
        {
          "title": "Pazara giriş (GTM) stratejisi",
          "text": "Girişimim için pazara giriş (GTM) stratejisi oluşturmama yardımcı olun.\n\nÜrün: [ürünü açıklayın]\nHedef müşteri: [ideal müşteri profili (ICP) — sektör, şirket büyüklüğü, unvan, sorun noktası]\nBenzersiz değer önerisi: [sizi farklı kılan ne]\nFiyat noktası: [fiyatlandırma]\nLansman takvimi: [ne zaman lansman yapmayı planlıyorsunuz]\n\nŞunları kapsayın:\n1. GTM modeli (ürün odaklı / product-led, satış odaklı / sales-led veya pazarlama odaklı / marketing-led) ve nedeni\n2. Odaklanılacak ilk 3 müşteri edinme kanalı ve gerekçesi\n3. Temel kilometre taşlarıyla ilk 90 günlük lansman planı\n4. Temel riskler ve bunları azaltma yolları\n5. Lansmandan 30, 60 ve 90 gün sonra başarının neye benzeyeceği."
        },
        {
          "title": "Müşteri edinme kanalları",
          "text": "Girişimim için en iyi müşteri edinme kanallarını belirlemem gerekiyor.\n\nÜrün: [ürünü açıklayın]\nHedef müşteri: [kim oldukları, çevrimiçi ve çevrimdışı nerede vakit geçirdikleri]\nMüşteri edinme bütçesi: [aylık bütçe aralığı]\nEkip büyüklüğü: [büyüme için ayrılabilecek kişi sayısı]\nMevcut çekim gücü: [mevcut müşteri sayısı veya sıfır]\n\nÖnerilen her kanal için:\n1. Neden müşterime ve ürünüme uygun olduğu\n2. Tahmini CAC (müşteri edinme maliyeti) aralığı\n3. 2 hafta içinde düşük maliyetle nasıl test edileceği\n4. Ölçeklenmiş halinin nasıl görüneceği\n\nKanalları bulunduğum aşama için en yüksek ROI (yatırım getirisi) potansiyeline göre sıralayın."
        },
        {
          "title": "Kullanıcı tutma (Retention) stratejisi",
          "text": "Ürünüm için bir kullanıcı tutma (retention) stratejisi tasarlamama yardımcı olun.\n\nÜrün: [ürünü açıklayın]\nKullanıcı türü: [B2B veya B2C, kullanıcıyı tanımlayın]\nMevcut elde tutma oranı: [örn. 30 günlük retention oranı veya biliniyorsa churn oranı]\nTemel kullanım alışkanlığı: [kullanıcılar ideal olarak ürünü ne sıklıkla kullanmalı]\nKullanıcıların bırakmasının başlıca nedenleri (biliniyorsa): [listeleyin]\n\nŞunları sağlayın:\n1. İlk olarak odaklanılması gereken en önemli retention kaldıracı ve nedeni\n2. Kullanıcıları 'aha anına' daha hızlı ulaştıran bir onboarding akışı\n3. Retention'ı artıracak 3 yaşam döngüsü (lifecycle) e-posta/bildirim kampanyası\n4. Churn'ü azaltan ürün içi özellikler veya değişiklikler\n5. Risk altındaki kullanıcıları ayrılmadan önce nasıl tespit edileceği."
        },
        {
          "title": "Metrik kontrol paneli (Dashboard) tasarımı",
          "text": "Girişimim için temel metrikler panosunu (dashboard) tasarlamama yardımcı olun.\n\nİş modeli türü: [örn. B2B SaaS, pazar yeri, tüketici uygulaması, e-ticaret]\nAşama: [gelir öncesi / erken çekim gücü / ölçeklenme]\nŞu anki en önemli hedef: [örn. MRR artırma, retention iyileştirme, aktivasyonu artırma]\n\nŞunları tanımlayın:\n1. Uğruna optimize etmem gereken tek ve en önemli metrik (Kutup Yıldızı metriği / North Star Metric)\n2. Kutup yıldızını besleyen 5-7 temel girdi metriği\n3. Sorunları erkenden yakalamak için izlenecek sağlık metrikleri\n4. Mevcut aşamamda görmezden gelmem gereken metrikler\n5. Bu metrikler etrafında basit bir haftalık değerlendirme rutininin nasıl kurulacağı."
        }
      ]
    },
    {
      "cat": "Operasyon",
      "prompts": [
        {
          "title": "İşe alım planı",
          "text": "Girişimim için bir işe alım planı oluşturmama yardımcı olun.\n\nMevcut ekip: [mevcut unvanları/çalışan sayısını listeleyin]\nFinansman durumu: [öz sermaye (bootstrapped) / pre-seed / seed / Seri A]\nPist (Runway): [kalan ay süresi]\nGelecek 12 ayın en önemli öncelikleri: [2-3 temel hedefi listeleyin]\n\nŞunları sağlayın:\n1. Yapmam gereken ilk 3 işe alım ve nedenleri (öncelik sırasına göre)\n2. Her pozisyon için: unvan, temel sorumluluklar, olmazsa olmaz beceriler ve tam zamanlı, yarı zamanlı veya sözleşmeli mi olması gerektiği\n3. Büyük bir işe alım bütçesi olmadan en iyi yetenekleri nasıl çekebilirim\n4. Erken aşamada işe alım yaparken dikkat edilmesi gereken tehlike sinyalleri (red flags)\n5. Kaliteden ödün vermeden hızlı ilerleyen basit bir işe alım süreci."
        },
        {
          "title": "Şirket kültürü dokümanı",
          "text": "Girişimim için kurumsal bir şirket kültürü dokümanı yazmama yardımcı olun.\n\nŞirket: [adınız ve ne yaptığınız]\nAşama: [ekip büyüklüğü, aşama]\nKurucu değerleri: [sizin için kişisel olarak önemli olan 3-5 değeri listeleyin]\nÇalışma biçimi: [uzaktan / ofisten / hibrit]\nKurmak istediğiniz ekip türü: [tek bir cümleyle açıklayın]\n\nŞunları yazın:\n1. Kısa bir kültür beyanı (2-3 cümle)\n2. Her birinin pratikte ne anlama geldiğini sade bir dille açıklayan 4-6 temel değer\n3. Bu değerlerin günlük kararlarda nasıl göründüğüne dair 3 örnek\n4. Hangi davranışların KABUL EDİLEMEZ olduğu (karşıt değerler / anti-values)\n5. Ekip büyüdükçe kültürün nasıl güçlü tutulacağı."
        },
        {
          "title": "OKR belirleme",
          "text": "Girişimim için OKR'ları (Hedefler ve Temel Sonuçlar) belirlememe yardımcı olun.\n\nŞirket aşaması: [örn. seed, Seri A]\nZaman dilimi: [2026 1. Çeyrek veya yıllık]\nŞirketin en önemli öncelikleri: [2-3 stratejik önceliği listeleyin]\nMevcut metrik tabanı: [varsa mevcut sayılar]\n\nHer öncelik için şunları yazın:\n- 1 Hedef / Objective (ilham verici, niteliksel, yön gösterici)\n- 3 Temel Sonuç / Key Result (ölçülebilir, somut, zamana bağlı)\n\nAyrıca şunları sağlayın:\n1. OKR'ların ekip seviyesine nasıl kademelendirileceği (cascade edileceği)\n2. OKR'ları kontrol etme ve puanlama rutini\n3. Erken aşamadaki bir girişimde kaçınılması gereken yaygın OKR hataları."
        },
        {
          "title": "Tedarikçi/araç değerlendirmesi",
          "text": "[Spesifik ihtiyaç, örn. CRM, veri ambarı, müşteri destek platformu] için araçlar veya tedarikçiler arasında değerlendirme ve seçim yapmama yardımcı olun.\n\nKullanım senaryosu: [tam olarak ne yapmasını istediğimi açıklayın]\nEkip büyüklüğü: [kaç kişi kullanacak]\nBütçe: [aylık bütçe aralığı]\nOlmazsa olmaz gereksinimler: [vazgeçilmezleri listeleyin]\nOlsa iyi olur gereksinimler: [ikincil ihtiyaçları listeleyin]\n\nDeğerlendirdiğim seçenekler:\n1. [Seçenek A]\n2. [Seçenek B]\n3. [Seçenek C]\n\nBunları özellikler, fiyatlandırma, kurulum kolaylığı, ölçeklenebilirlik, entegrasyonlar ve destek açısından karşılaştırın. Net bir gerekçeyle birini önerin ve gizli maliyetleri veya sağlayıcıya bağımlılık (vendor lock-in) risklerini belirtin."
        }
      ]
    },
    {
      "cat": "Hukuk ve Finans",
      "prompts": [
        {
          "title": "Kullanım şartları taslağı",
          "text": "Ürünümün Kullanım Şartları (Terms of Service) için bir taslak oluşturmama yardımcı olun.\n\nÜrün türü: [örn. SaaS uygulaması, pazar yeri, tüketici uygulaması]\nKullanıcılar: [B2B müşterileri / tüketiciler / her ikisi]\nTemel özellikler: [kullanıcıların platformda neler yapabileceğini açıklayın]\nÖzel endişeler: [örn. kullanıcı tarafından oluşturulan içerik, ödemeler, veri işleme]\n\nŞunları sağlayın:\n1. Bir Kullanım Şartları metninin içermesi gereken tüm kilit bölümleri kapsayan önerilen yapı\n2. Her bölümün neyi kapsadığını ve neden önemli olduğunu sade bir dille özetleyen açıklama\n3. Ürün tipim için özellikle kritik olan maddeler\n4. Kurucuların erken aşamada Kullanım Şartları konusunda yaptığı yaygın hatalar\n\nNot: Bu yalnızca planlama amaçlıdır — nihai belgeyi bir avukata inceleteceğim."
        },
        {
          "title": "Gizlilik politikası hususları",
          "text": "Gizlilik politikamın neleri kapsaması gerektiğini anlamama yardımcı olun.\n\nÜrün: [ürünü açıklayın]\nToplanan veriler: [topladığınız veri türlerini listeleyin, örn. e-posta, ödeme bilgileri, kullanım verileri]\nKullanıcıların bulunduğu yer: [örn. ABD, AB, küresel]\nKullanılan üçüncü taraf araçlar: [örn. Stripe, Google Analytics, Intercom]\n\nŞunları kapsayın:\n1. Her gizlilik politikasında mutlaka yer alması gereken temel bölümler\n2. Kullanıcılarımın coğrafi konumuna bağlı özel gereksinimler (KVKK, GDPR, CCPA vb.)\n3. Açık rıza gerektirebilecek topladığım veriler\n4. Yapmam gereken üçüncü taraf veri paylaşımı bildirimleri\n5. Ürün geliştikçe politikanın nasıl güncel tutulacağı\n\nNot: Bu yalnızca planlama amaçlıdır — nihai belgeyi bir avukata inceleteceğim."
        },
        {
          "title": "Ortaklık yapısı (Cap table) senaryosu",
          "text": "Girişimim için bir ortaklık yapısı (cap table) senaryosu modellememe yardımcı olun.\n\nMevcut ortaklık yapısı:\n- Kurucu 1: [isim, % ortaklık payı]\n- Kurucu 2: [isim, % ortaklık payı]\n- Çalışan hisse opsiyon havuzu (ESOP): [%]\n- Diğer: [melek yatırımcılar, SAFE'ler vb.]\n\nÖnerilen yatırım turu:\n- Tur türü: [örn. Seed, Seri A]\n- Toplanan tutar: [$X]\n- Yatırım öncesi değerleme (pre-money): [$Y] (veya 'bu konuda düşünmeme yardımcı ol')\n- Yeni yatırımcı(lar): [isim veya 'Belirlenecek']\n\nŞunları gösterin:\n1. Tüm taraflar için yatırım sonrası (post-money) ortaklık oranları\n2. Varsa opsiyon havuzu tamamlama (top-up) işleminin kurucuların hisse sulanmasına (dilution) etkisi\n3. Bu turun ardından cap table tablosunun nasıl görüneceği\n4. Değerlemenin ötesinde müzakere edilmesi gereken temel şartlar (pro-rata, yönetim kurulu koltukları vb.)"
        },
        {
          "title": "Birim ekonomi (Unit economics) analizi",
          "text": "İşimin birim ekonomisini (unit economics) analiz etmeme yardımcı olun.\n\nİş modeli: [nasıl para kazandığınızı açıklayın]\nFiyatlandırma: [müşterilerin ne kadar ve ne sıklıkla ödediği]\nMüşteri edinmenin temel maliyetleri: [başlıca CAC bileşenlerini listeleyin]\nMüşteriye hizmet vermenin temel maliyetleri: [müşteri başına temel COGS/hizmet maliyetlerini listeleyin]\nKayıp (churn) oranı (biliniyorsa): [aylık veya yıllık]\n\nŞunları hesaplayın ve açıklayın:\n1. Müşteri Edinme Maliyeti (CAC)\n2. Kullanıcı Başına Ortalama Gelir (ARPU) veya Yıllık Sözleşme Değeri (ACV)\n3. Müşteri başına brüt kar marjı\n4. Müşteri Yaşam Boyu Değeri (LTV)\n5. LTV:CAC oranı ve bunun iş sağlığı açısından ne anlama geldiği\n6. Geri ödeme süresi (Payback period)\n7. Sağlıklı bir birim ekonomiye ulaşmak için neleri iyileştirmem gerektiği."
        }
      ]
    }
  ],
  "data": [
    {
      "cat": "SQL",
      "prompts": [
        {
          "title": "SQL sorgusu yaz",
          "text": "Aşağıdaki görev için bir SQL sorgusu yazın:\n\nGörev: [neye ihtiyacınız olduğunu açıklayın, örn. son 30 günde kaydolmuş ve en az bir alışveriş yapmış tüm kullanıcıları bul]\n\nİlgili tablolar ve sütunlar:\n\n[şemanızı açıklayın veya CREATE TABLE ifadelerini yapıştırın]\n\nVeritabanı: [örn. PostgreSQL, MySQL, BigQuery]\n\nHer kilit adımı açıklayan yorum satırlarıyla birlikte sorguyu döndürün."
        },
        {
          "title": "Yavaş çalışan sorguyu optimize et",
          "text": "Bu SQL sorgusu yavaş çalışıyor. Optimize etmeme yardımcı olun.\n\nSorgu:\n\n[sorguyu buraya yapıştırın]\n\nVeritabanı: [örn. PostgreSQL, MySQL]\nTablo boyutları: [örn. siparişler tablosunda 50 milyon satır, kullanıcılar tablosunda 2 milyon satır var]\nMevcut indeksler: [bunları listeleyin veya EXPLAIN çıktısını yapıştırın]\n\nDarboğazları tespit edin, indeks değişiklikleri önerin ve gerekiyorsa sorguyu yeniden yazın. Her optimizasyonu açıklayın."
        },
        {
          "title": "Karmaşık sorguyu açıkla",
          "text": "Bu SQL sorgusunu sade bir dille açıklayın. Adım adım üzerinden geçin — her cümlenin (clause) ne yaptığını, hangi veriyi ürettiğini ve nihai sonucun neyi temsil ettiğini anlatın:\n\n[sorguyu buraya yapıştırın]"
        },
        {
          "title": "Veritabanı şeması tasarla",
          "text": "Aşağıdaki kullanım senaryosu için bir veritabanı şeması tasarlayın:\n\nKullanım senaryosu: [uygulamanızı veya özelliğinizi açıklayın, örn. projeleri, görevleri ve kullanıcı rolleri olan çok kiracılı (multi-tenant) bir SaaS]\n\nVeritabanı: [örn. PostgreSQL]\n\nŞunları dahil edin: tablo isimleri, tipleri ve kısıtlamalarıyla sütunlar, birincil/yabancı anahtarlar (primary/foreign keys), indeksler; tasarım kararlarınızın ve varsa ödünleşimlerin (trade-offs) açıklaması."
        }
      ]
    },
    {
      "cat": "Veri Analizi",
      "prompts": [
        {
          "title": "Keşifçi veri analizi (EDA) planı",
          "text": "Elimde bir veri kümesi var ve keşifçi veri analizi (EDA) yapmak istiyorum. Adım adım bir EDA planı oluşturun.\n\nVeri kümesi açıklaması: [sütunları, veri tiplerini, yaklaşık boyutu ve etki alanını tanımlayın, örn. müşteri kimliği, ürün, fiyat, tarih içeren e-ticaret siparişleri]\n\nCevaplamaya çalıştığım iş sorusu: [açıklayın]\n\nŞunları dahil edin: veri kalitesi kontrolleri, tek değişkenli (univariate) analiz, incelenecek ilişkiler, oluşturulacak görselleştirmeler ve dikkat edilmesi gereken olası tehlike sinyalleri."
        },
        {
          "title": "İstatistiksel anlamlılık testi",
          "text": "Analizim için doğru istatistiksel testi seçmeme ve yorumlamama yardımcı olun.\n\nKarşılaştırdığım şey: [örn. iki kullanıcı grubu arasındaki dönüşüm oranları]\nVeri tipi: [örn. ikili (binary) sonuçlar, sürekli ölçümler]\nÖrneklem büyüklükleri: [örn. Grup A: 1.200, Grup B: 1.400]\nMevcut sonuçlar: [örn. Grup A: %4,2, Grup B: %5,1]\n\nUygun testi önerin, varsayımları belirtin, hesaplamayı veya kodu gösterin; p-değerini ve güven aralığını sade bir dille nasıl yorumlayacağımı açıklayın."
        },
        {
          "title": "Kohort analizi",
          "text": "Bir kohort analizi tasarlamama ve yorumlamama yardımcı olun.\n\nAmaç: [örn. kayıt ayına göre 30/60/90 günlük kullanıcı tutma (retention) oranını ölçmek]\nMevcut veri: [tabloları ve sütunları tanımlayın, örn. signup_date içeren kullanıcılar tablosu, user_id ve event_date içeren etkinlikler tablosu]\nVeritabanı / araç: [örn. BigQuery, pandas]\n\nKohort tablosunu oluşturacak sorguyu veya kodu yazın, çıktının nasıl okunacağını açıklayın ve olası yorumlama hatalarını belirtin."
        },
        {
          "title": "Trend yorumlama",
          "text": "Verilerimde bir eğilim (trend) görüyorum ve bunu yorumlamak için yardıma ihtiyacım var.\n\nMetrik: [örn. haftalık aktif kullanıcı sayısı]\nGözlemlediğim şey: [örn. düzenli bir büyümenin ardından son 6 haftada %15 düşüş]\nBağlam: [bilinen olaylar, ürün değişiklikleri, mevsimsellik veya dış faktörler]\n\nŞunlarda bana yardımcı olun: olası nedenleri belirlemek, veri anomalilerini/yanılsamalarını elemek, kök nedeni doğrulamak için ek analizler önermek ve sonraki adımları tavsiye etmek."
        }
      ]
    },
    {
      "cat": "Görselleştirme",
      "prompts": [
        {
          "title": "Grafik türü önerisi",
          "text": "Kullanım senaryom için en iyi grafik türünü önerin ve nedenini açıklayın.\n\nGöstermek istediğim şey: [örn. gelirin ürün kategorilerine göre nasıl dağıldığı ve aydan aya nasıl değiştiği]\nHedef kitle: [örn. üç aylık iş değerlendirmesindeki (QBR) üst yönetim ekibi]\nVeri yapısı: [örn. 12 ay x 6 kategori, değerler 10 bin $ ile 2 milyon $ arasında]\nAraç: [örn. Tableau, matplotlib, Looker Studio]\n\n2-3 seçenek önerin, bunları sıralayın ve avantaj/dezavantajlarını açıklayın."
        },
        {
          "title": "Dashboard yerleşim tasarımı",
          "text": "Etkili bir kontrol paneli (dashboard) yerleşimi tasarlamama yardımcı olun.\n\nAmaç: [örn. destek ekibi için günlük operasyon takibi]\nGösterilecek temel metrikler: [listeleyin, örn. açık talepler, çözüm süresi, CSAT puanı, kanala göre talep hacmi]\nHedef kitle ve nasıl kullandıkları: [örn. vardiya başında takım liderleri kontrol eder]\nAraç: [örn. Metabase, Tableau, Grafana]\n\nBölümler, her metrik için grafik türleri ve ilk bakışta okunabilirlik sağlayan UX en iyi uygulamalarını içeren bir yerleşim önerin."
        },
        {
          "title": "Veri hikayeleştirme anlatısı",
          "text": "Bu verileri bir sunum için net bir anlatıya dönüştürmeme yardımcı olun.\n\nTemel bulgular: [analizinizden çıkan 3-5 ana içgörüyü listeleyin]\nHedef kitle: [örn. teknik olmayan paydaşlar, üst düzey yöneticiler (C-suite)]\nSunumun amacı: [örn. kullanıcı tutma iyileştirmelerine yatırım yapmak için onay almak]\n\nEn önemli içgörüyle başlayan, bunu veri noktalarıyla destekleyen ve net bir öneriyle biten bir hikaye kurgusu yazın. Kısa, öz ve jargondan uzak tutun."
        },
        {
          "title": "Grafiğe açıklama notları (Annotation) ekle",
          "text": "Bu grafiğin kendi kendini açıklayabilmesi için üzerine eklenecek açıklama notlarını (annotations) yazmama yardımcı olun.\n\nGrafik türü: [örn. çizgi grafik]\nNeyi gösteriyor: [örn. son 2 yılın aylık geliri]\nVurgulanacak kilit anlar: [örn. Mart ayındaki ürün lansmanı, Ağustos'taki fiyat değişikliği, Aralık'taki düşüş]\nHedef kitle: [örn. yatırımcı sunumundaki yatırımcılar]\n\n3-5 kısa, vurucu açıklama etiketi ile tek cümlelik bir grafik başlığı ve alt başlığı yazın."
        }
      ]
    },
    {
      "cat": "Veri Temizleme",
      "prompts": [
        {
          "title": "Veri temizleme kontrol listesi",
          "text": "Veri kümem için kapsamlı bir veri temizleme kontrol listesi oluşturun.\n\nVeri kümesi açıklaması: [sütunları, veri tiplerini, kaynağı ve etki alanını tanımlayın]\nBilinen sorunlar: [zaten gördüğünüz sorunları listeleyin, örn. yinelenen satırlar, tutarsız tarih biçimleri, kilit sütunlardaki eksik değerler]\nSonraki kullanım amacı: [örn. bir makine öğrenimi modelini beslemek, bir dashboard oluşturmak]\n\nKontrol listesini öncelik sırasına göre düzenleyin; çalıştırılacak spesifik kontrolleri ve her bir sorunun nasıl çözüleceğini dahil edin."
        },
        {
          "title": "Eksik veri işleme stratejisi",
          "text": "Veri kümemdeki eksik değerleri nasıl ele alacağıma karar vermeme yardımcı olun.\n\nEksik değer içeren sütun: [sütun adı ve neyi temsil ettiği]\nEksiklik yüzdesi: [örn. %18]\nVeri tipi: [örn. sayısal, kategorik, tarih/saat]\nSütunun sonraki aşamada nasıl kullanılacağı: [örn. bir regresyon modelinde girdi özelliği]\n\nSeçenekleri karşılaştırın (satırları silme, ortalama/medyan/mod ile doldurma, model tabanlı doldurma, ayrı bir kategori olarak etiketleme) ve gerekçesiyle en iyi yaklaşımı önerin."
        },
        {
          "title": "Aykırı değerleri tespit et",
          "text": "Veri kümemdeki aykırı değerleri (outliers) tespit etmeme ve yönetmeme yardımcı olun.\n\nSütun: [sütun adı ve neyi temsil ettiği]\nVeri tipi: [sayısal / tarih-saat]\nÖrneklem istatistikleri: [örn. min: 0, maks: 99.000, ortalama: 450, medyan: 380, standart sapma: 1.200]\nBağlam: [örn. bu sipariş tutarı (USD); çok yüksek değerler meşru toplu siparişler veya veri hatası olabilir]\n\nUygun tespit yöntemleri (IQR, z-skoru, isolation forest vb.) önerin, [Python/SQL] dilinde kod sağlayın ve doğrulanan aykırı değerlere nasıl müdahale edileceği konusunda tavsiyede bulunun."
        },
        {
          "title": "Düzensiz veriyi standartlaştır",
          "text": "Bu sütundaki tutarsız değerleri standartlaştırmama yardımcı olun.\n\nSütun adı: [örn. ülke]\nTutarsız değer örnekleri: [örn. 'USA', 'United States', 'US', 'u.s.a', 'America']\nİstenen çıktı formatı: [örn. ISO 3166-1 alpha-2 ülke kodları]\nAraç: [örn. Python pandas, SQL, dbt]\n\nBu değerleri eşleyecek ve standartlaştıracak, uç durumları yönetecek ve otomatik olarak eşlenemeyen değerleri işaretleyecek kodu yazın."
        }
      ]
    },
    {
      "cat": "Python ve R",
      "prompts": [
        {
          "title": "Pandas veri işlem hattı (Pipeline) yaz",
          "text": "Aşağıdaki görev için bir pandas veri işlem hattı (pipeline) yazın.\n\nGirdi: [veri kaynağını tanımlayın, örn. user_id, event_type, timestamp, revenue sütunlarına sahip bir CSV dosyası]\nGereken dönüşümler:\n1. [örn. yalnızca satın alma etkinliklerini filtrele]\n2. [örn. kullanıcı başına aylık geliri topla]\n3. [örn. aydan aya büyüme oranını hesapla]\nÇıktı: [istenen sonucu tanımlayın, örn. kullanıcı başına ay bazında bir satır içeren DataFrame]\n\nYorum satırlarıyla temiz, okunabilir bir kod yazın. Netliği artırdığı yerlerde metot zincirleme (method chaining) kullanın."
        },
        {
          "title": "Matplotlib/seaborn görselleştirmesi oluştur",
          "text": "Aşağıdaki görselleştirmeyi oluşturmak için Python kodu yazın.\n\nGrafik türü: [örn. ısı haritası (heatmap), gruplandırılmış çubuk grafik, güven aralıklı zaman serisi]\nVeri: [DataFrame yapısını tanımlayın, örn. df şu sütunlara sahip: month, category, value]\nStil gereksinimleri: [örn. koyu arka plan, renk körü dostu palet, grafik kenarlıksız]\nÇıktı: [örn. 300 DPI'da PNG olarak kaydet]\n\nmatplotlib ve/veya seaborn kullanın. Uygun başlık, eksen etiketleri ve gösterge (legend) ekleyin. Yayına hazır kalitede olsun."
        },
        {
          "title": "Özellik mühendisliği (Feature engineering) fikirleri",
          "text": "Makine öğrenimi veri kümem için özellik mühendisliği (feature engineering) fikirleri önerin.\n\nTahmin hedefi: [örn. bir kullanıcının önümüzdeki 30 gün içinde churn edip etmeyeceği]\nMevcut ham özellikler: [tipleriyle birlikte listeleyin, örn. signup_date (tarih), last_login (tarih), num_sessions (tamsayı), plan_type (kategorik)]\nVeri tanecik boyutu (granularity): [örn. kullanıcı başına bir satır]\n\n10-15 türetilmiş özellik önerin, her birinin arkasındaki sezgiyi açıklayın ve bunları oluşturmak için pandas kodu sağlayın."
        },
        {
          "title": "Veri doğrulama betiği yaz",
          "text": "Veri kümem için bir Python veri doğrulama betiği yazın.\n\nVeri kümesi: [sütunları, tipleri ve kaynağı tanımlayın]\nUygulanacak doğrulama kuralları:\n1. [örn. user_id null olamaz ve benzersiz olmalıdır]\n2. [örn. event_date, 2020-01-01 ile bugün arasında olmalıdır]\n3. [örn. revenue >= 0 olmalıdır]\n4. [örn. status şunlardan biri olmalıdır: active, inactive, pending]\n\nBetik sadece ilk hatada durup çökmemeli, tüm ihlallerin bir özetini yazdırmalıdır. pandas veya Great Expectations kullanın."
        }
      ]
    },
    {
      "cat": "Raporlama",
      "prompts": [
        {
          "title": "Veriden yönetici özeti çıkar",
          "text": "Aşağıdaki veri bulgularına dayanarak bir yönetici özeti yazın.\n\nBağlam: [örn. bir SaaS ürünü için 2026 1. Çeyrek performans değerlendirmesi]\nTemel metrikler:\n- [metrik 1]: [değer ve önceki döneme göre değişim]\n- [metrik 2]: [değer ve değişim]\n- [metrik 3]: [değer ve değişim]\nÖnemli olaylar: [örn. Şubat ayında X özelliği yayınlandı, Mart ayında büyük bir müşteri kaybedildi]\n\n150-200 kelimelik bir yönetici özeti yazın. En önemli içgörüyle başlayın, sorunlar konusunda doğrudan ve net olun, gelecek çeyrek için en önemli 2-3 öncelikle bitirin."
        },
        {
          "title": "Haftalık metrik raporu",
          "text": "Aşağıdaki sayılar için kısa ve öz bir haftalık metrik raporu yazın.\n\nEkip / ürün: [örn. Büyüme ekibi, mobil uygulama]\nHafta: [örn. 17 Mart 2026 haftası]\nBu haftanın metrikleri:\n- [metrik]: [değer] - [geçen haftaki değer] ile karşılaştırmalı\n- [metrik]: [değer] - [geçen haftaki değer] ile karşılaştırmalı\nÖne çıkanlar: [kazanımlar veya önemli gelişmeler]\nEndişe verici noktalar: [düşüşler veya sorunlar]\n\nKısa bir Slack veya e-posta güncellemesi formatında hazırlayın: 3-5 madde, sade bir dil, jargonsuz. Dikkat gerektiren maddeleri işaretleyin."
        },
        {
          "title": "A/B test sonuçları raporu",
          "text": "Teknik olmayan bir kitle için A/B testi sonuçlarımın net bir özetini yazın.\n\nTest adı: [örn. Yeni ödeme akışı]\nHipotez: [örn. Ödeme adımlarını 2'ye indirmek dönüşümü artıracaktır]\nKontrol vs varyant: [yapılan değişikliği açıklayın]\nSonuçlar:\n- Birincil metrik: [örn. dönüşüm oranı] — Kontrol: [%X], Varyant: [%Y], göreceli artış: [%Z]\n- İstatistiksel anlamlılık: [örn. p=0,03, %95 GA: +%1,2 ile +%4,8]\n- İkincil metrikler: [koruyucu/güvenlik metrikleri ve sonuçları]\nTest süresi: [örn. 14 gün, grup başına 25.000 kullanıcı]\n\nSonuçların ne anlama geldiğini, değişikliğin yayına alınıp alınmaması gerektiğini ve varsa dikkat edilmesi gereken çekinceleri açıklayın."
        },
        {
          "title": "Veri sözlüğü dokümantasyonu",
          "text": "Aşağıdaki tablo veya veri kümesi için bir veri sözlüğü (data dictionary) yazın.\n\nTablo adı: [örn. orders]\nSütunlar:\n- [sütun_adı]: [veri tipi, örn. INT] — [ne içerdiğine dair kısa açıklama]\n- [sütun_adı]: [veri tipi] — [açıklama]\n- [gerektiği kadar ekleyin]\nHedef kitle: [örn. ekibe yeni katılan veri analistleri]\n\nHer sütun için şunları ekleyin: ad, veri tipi, açıklama, örnek değerler, null olup olamayacağı ve bilinen istisnalar veya dikkat edilecek noktalar. Temiz bir markdown tablosu olarak biçimlendirin."
        }
      ]
    }
  ],
  "design": [
    {
      "cat": "Arayüz (UI) İnceleme",
      "prompts": [
        {
          "title": "Bu arayüz (UI) tasarımını eleştir",
          "text": "Kıdemli bir ürün tasarımcısı gibi davranın. Bu arayüz (UI) tasarımını eleştirin:\n\n[ekranı açıklayın veya bir açıklama/ekran görüntüsü yapıştırın]\n\nDeğerlendirme kriterleri: görsel hiyerarşi, boşluklandırma (spacing), tipografi, renk kullanımı ve tutarlılık. Nelerin iyileştirilmesi gerektiğini ve nedenini somut olarak belirtin."
        },
        {
          "title": "Erişilebilirlik denetim kontrol listesi",
          "text": "Bu arayüzü WCAG 2.1 AA standartlarına göre erişilebilirlik sorunları açısından denetleyin:\n\n[arayüzü açıklayın veya bileşenlerini listeleyin]\n\nŞunları kontrol edin: renk kontrastı, klavye navigasyonu, odak durumları (focus states), ekran okuyucu uyumluluğu, dokunma hedefi (touch target) boyutları ve ARIA kullanımı. Sorunları önem derecesine göre listeleyin."
        },
        {
          "title": "Mobil uyumluluk incelemesi",
          "text": "Bu arayüz tasarımını mobil uyumluluk (responsiveness) açısından inceleyin:\n\n[yerleşimi açıklayın veya bileşenleri listeleyin]\n\nTespit edin: iyi ölçeklenmeyecek öğeler, çok küçük dokunma hedefleri, taşma yapacak içerikler ve küçük ekranlardaki boşluklandırma sorunları. Somut düzeltme önerileri sunun."
        },
        {
          "title": "Görsel hiyerarşi analizi",
          "text": "Bu arayüzün görsel hiyerarşisini analiz edin:\n\n[ekran yerleşimini ve öğelerini açıklayın]\n\nTespit edin: kullanıcının gözünün ilk nereye odaklanacağı, hiyerarşinin hedeflenen kullanıcı amacıyla örtüşüp örtüşmediği ve taramayı/kavramayı kolaylaştırmak için hangi değişikliklerin yapılabileceği."
        }
      ]
    },
    {
      "cat": "Kullanıcı Deneyimi (UX) Araştırması",
      "prompts": [
        {
          "title": "Kullanıcı mülakatı soruları yaz",
          "text": "[Konuyu veya özelliği, örn. 'insanların kişisel finanslarını nasıl yönettikleri'] araştırmak için bir kullanıcı mülakat rehberi hazırlayın.\n\nŞunları dahil edin: 3 ısınma sorusu, 8–10 temel soru ve 2 kapanış sorusu. Açık uçlu ifadeler kullanın. Katılımcıyı yönlendirmekten (leading questions) kaçının."
        },
        {
          "title": "Kullanıcı personası oluştur",
          "text": "[Ürün veya özellik] için gerçekçi bir kullanıcı personası oluşturun.\n\nHedef kullanıcı: [genel olarak tanımlayın, örn. 'serbest çalışan grafik tasarımcılar, 28–40 yaş']\n\nŞunları ekleyin: isim, yaş, meslek, hedefler, hayal kırıklıkları/zorluklar, temel davranışlar ve kısa bir alıntı. Gerçekçi ve aksiyon alınabilir olsun."
        },
        {
          "title": "Kullanılabilirlik testi senaryosu",
          "text": "[Özellik veya akış, örn. 'ödeme akışı'] için bir kullanılabilirlik testi senaryosu yazın.\n\nŞunları dahil edin: kolaylaştırıcı (moderator) girişi, onay/izin hatırlatması, gerçekçi bağlama sahip 4–6 görev senaryosu ve her görevden sonra sorulacak derinlemesine takip soruları. Doğru yolu doğrudan belli etmekten kaçının."
        },
        {
          "title": "Özellik geri bildirimi anketi tasarımı",
          "text": "[Özellik, örn. 'yeni kullanıcı karşılama (onboarding) akışımız'] hakkında geri bildirim toplamak için bir kullanıcı anketi tasarlayın.\n\nŞunları ekleyin: 1 NPS veya CSAT sorusu, 4–6 puanlama veya çoktan seçmeli soru ve 2 açık uçlu soru. Doldurma süresini 3 dakikanın altında tutun. En mantıklı soru sıralamasını önerin."
        }
      ]
    },
    {
      "cat": "Tasarım Sistemleri",
      "prompts": [
        {
          "title": "Bileşen isimlendirme standardı",
          "text": "Tasarım sistemimizdeki arayüz bileşenleri için bir isimlendirme kuralı (naming convention) önerin.\n\nBağlam: [örn. 'React ve Figma kullanıyoruz; atomik ve birleşik bileşenlerin bir karışımına sahibiz']\n\nŞunları kapsayın: bileşen adları, varyant isimlendirmeleri, prop adlandırmaları ve Figma'daki dosya/katman isimlendirmeleri. Button, Modal ve Form Field bileşenleri için örnekler verin."
        },
        {
          "title": "Bileşen dokümantasyonu yaz",
          "text": "Bu arayüz bileşeni için açık ve anlaşılır bir dokümantasyon yazın:\n\nBileşen: [bileşen adı, örn. 'Toast bildirimi']\nProps/varyantlar: [bunları listeleyin]\nKullanım bağlamı: [nerede kullanıldığı]\n\nŞunları ekleyin: açıklama, ne zaman kullanılmalı / kullanılmamalı, prop tablosu, erişilebilirlik notları ve bir kullanım örneği."
        },
        {
          "title": "Design token yapısı",
          "text": "[Ürün veya tasarım sistemi adı] için bir design token yapısı önerin.\n\nMarka renkleri: [temel renkleri listeleyin]\nTipografi: [yazı tiplerini veya ölçeği listeleyin]\nBağlam: [örn. web uygulaması, mobil uygulama veya her ikisi]\n\nToken'ları şu şekilde düzenleyin: renk, tipografi, boşluk (spacing), kenar yuvarlama (border radius), gölge ve hareket (motion). Hem ilkel (primitive) hem de anlamsal (semantic) token örnekleri gösterin."
        },
        {
          "title": "Model kütüphanesi (Pattern library) denetimi",
          "text": "Bileşen ve model kütüphanemizdeki tutarsızlıkları denetlememe yardımcı olun.\n\nİşte mevcut bileşenlerimizin ve varyantlarımızın listesi:\n\n[bileşen listesini yapıştırın]\n\nŞunları tespit edin: aynı amaca hizmet eden mükerrer modeller, isimlendirme tutarsızlıkları, yeniden kullanılabilir bir bileşenin eksik olduğu boşluklar ve yeniden kullanılabilir olamayacak kadar spesifik kalmış bileşenler."
        }
      ]
    },
    {
      "cat": "Tel Çerçeve ve Akış (Wireframing)",
      "prompts": [
        {
          "title": "Özellik için kullanıcı akışı",
          "text": "[Özellik, örn. 'şifre sıfırlama'] için kullanıcı akışını (user flow) haritalandırın.\n\nKullanıcı hedefi: [kullanıcının neyi başarmak istediğini açıklayın]\nGiriş noktası: [kullanıcının başladığı yer]\n\nKullanıcının attığı her adımı, karşılaştığı kararları ve olası hata veya uç durum yollarını listeleyin. Gerektiğinde dallanmalar içeren numaralandırılmış bir akış olarak biçimlendirin."
        },
        {
          "title": "Uygulama bölümü bilgi mimarisi",
          "text": "[Uygulama bölümü, örn. 'bir SaaS panelinin ayarlar alanı'] için bilgi mimarisini (IA) önerin.\n\nKullanıcı türleri: [birden fazlaysa listeleyin]\nKullanıcıların gerçekleştirdiği temel görevler: [4–6 görevi listeleyin]\n\nÜst düzey bölümler, alt bölümler ve her birinin içindeki içerik veya eylemlerle birlikte bir gezinme (navigation) yapısı önerin. Gruplandırmalarınızın gerekçelerini açıklayın."
        },
        {
          "title": "Gezinme (Navigasyon) yapısı önerisi",
          "text": "[Ürün, örn. 'bir B2B proje yönetim aracı'] için bir gezinme (navigasyon) yapısı önerin.\n\nTemel özellikler: [ana özellikleri listeleyin]\nKullanıcı rolleri: [varsa rolleri listeleyin]\n\nŞunları önerin: birincil gezinme öğeleri, ikincil gezinme ve role dayalı erişimin nasıl yönetileceği. Hem masaüstü yan menü (sidebar) hem de mobil alt menü (bottom nav) modellerini göz önünde bulundurun."
        },
        {
          "title": "Kullanıcı alıştırma (Onboarding) akışı tasarımı",
          "text": "[Ürün, örn. 'alışkanlık takip eden bir mobil uygulama'] için bir onboarding (kullanıcı karşılama) akışı tasarlayın.\n\nYeni kullanıcının hedefi: [değer elde etmek için neyi başarmaları gerektiği]\nGerekli temel kurulum adımları: [zorunlu adımları listeleyin, örn. 'ilk alışkanlığı oluştur']\n\nŞunları önerin: ekran sırası, neyin hemen sorulacağı vs. neyin erteleneceği, ilerleme göstergesi ve atlama/daha sonra yap seçeneklerinin nasıl yönetileceği. Değere ulaşma süresini (time-to-value) mümkün olduğunca kısa tutun."
        }
      ]
    },
    {
      "cat": "Mikro Metinler (Microcopy)",
      "prompts": [
        {
          "title": "Hata mesajları yazımı",
          "text": "Bu senaryolar için net ve kullanıcı dostu hata mesajları yazın:\n\n[hata senaryolarını listeleyin, örn. 'geçersiz e-posta biçimi', 'dosya çok büyük', 'oturum süresi doldu']\n\nHer biri için şunları yazın: hata başlığı, neyin yanlış gittiğine dair sade dille bir açıklama ve kullanıcının atması gereken adım. Ton: [örn. samimi, profesyonel, yalın]."
        },
        {
          "title": "Boş durum (Empty state) metinleri",
          "text": "Bu arayüz durumları için boş durum (empty state) metinleri yazın:\n\n[durumları listeleyin, örn. 'arama sonucu yok', 'henüz bildirim yok', 'yüklenmiş dosya yok']\n\nHer biri için: bir başlık, 1–2 cümlelik açıklama ve uygunsa bir eylem çağrısı (CTA) yazın. Ton: [örn. teşvik edici, nötr, eğlenceli]. 'Burada görülecek bir şey yok' gibi klişe dolgu ifadelerden kaçının."
        },
        {
          "title": "Buton ve CTA metin varyasyonları",
          "text": "[Eylem veya özellik, örn. 'ücretsiz deneme başlatma'] için buton ve CTA metni varyasyonları yazın.\n\nBağlam: [butonun nerede göründüğü, örn. 'fiyatlandırma sayfası', 'boş durum ekranı', 'modal başlığı']\nTon: [örn. doğrudan, fayda odaklı, düşük sürtünmeli]\n\nEn iddialı olandan en az iddialı olana doğru sıralanmış 6–8 etiket seçeneği sunun. Avantaj ve dezavantajlarını açıklayın."
        },
        {
          "title": "İpucu (Tooltip) ve yardımcı metinler",
          "text": "Bu arayüz öğeleri için ipucu (tooltip) ve yardımcı metinler yazın:\n\n[öğeleri listeleyin, örn. 'API anahtarı alanı', 'fatura dönemi anahtarı', 'bildirim sıklığı ayarı']\n\nHer biri için: kısa bir ipucu (15 kelimenin altında) ve satır içi kullanım için isteğe bağlı daha uzun bir yardımcı metin yazın. Zekice görünmekten ziyade netliğe öncelik verin."
        }
      ]
    },
    {
      "cat": "Sunum ve Paydaş İletişimi",
      "prompts": [
        {
          "title": "Tasarım kararı gerekçelendirmesi",
          "text": "Bu tasarım kararı için net bir gerekçe yazmama yardımcı olun:\n\nKarar: [neye karar verildiğini açıklayın, örn. 'Sekmeli yerleşimden tek bir kaydırılabilir sayfaya geçtik']\nBağlam: [hangi sorunu çözdüğü veya bunu hangi veri/içgörünün tetiklediği]\nDeğerlendirilen alternatifler: [1–2 tane listeleyin]\n\nPaydaşlarla paylaşabileceğim; sorunu, kararı, neden doğru tercih olduğunu ve varsa ödünleşimleri (trade-offs) kapsayan öz bir açıklama yazın."
        },
        {
          "title": "Tasarım inceleme sunumu taslağı",
          "text": "[Özellik veya proje adı] için bir tasarım inceleme sunumu taslağı oluşturun.\n\nHedef kitle: [örn. 'ürün ekibi + mühendislik liderleri']\nİncelemenin amacı: [örn. 'teslim öncesi onay almak' veya 'tasarım yönü hakkında geri bildirim toplamak']\nAşama: [örn. 'erken konsept', 'olgunlaştırılmış taslaklar', 'nihai tasarımlar']\n\nŞunları ekleyin: önerilen bölümler, her birinde nelerin gösterileceği, süre dağılımı ve geri bildirim talebinin nasıl çerçeveleneceği."
        },
        {
          "title": "Öncesi/sonrası karşılaştırma anlatısı",
          "text": "Bu tasarım iyileştirmesi için bir öncesi/sonrası anlatısı yazın:\n\nÖncesi: [eski tasarımı ve sorunlarını açıklayın]\nSonrası: [yeni tasarımı ve nelerin değiştiğini açıklayın]\nMetrikler veya kullanıcı geri bildirimi (varsa): [varsa yapıştırın]\n\nBir vaka analizinde (case study) veya paydaş güncellemesinde kullanabileceğim; sorunu, içgörüyü ve değişikliğin etkisini açıklayan kısa bir hikaye yazın."
        },
        {
          "title": "Paydaş geri bildirim özeti",
          "text": "Tasarım incelemesinden çıkan paydaş geri bildirimlerini özetlememe ve sentezlememe yardımcı olun:\n\n[ham notları veya geri bildirimleri yapıştırın]\n\nŞunlara göre düzenleyin: ana temalar, somut uygulanabilir talepler, netleştirilmesi gereken sorular ve birbiriyle çelişen geri bildirimler. Kullanıcı araştırması veya tasarım ilkeleriyle çelişen maddeleri işaretleyin."
        }
      ]
    }
  ],
  "student": [
    {
      "cat": "Ders Çalışma",
      "prompts": [
        {
          "title": "Konu için çalışma rehberi oluştur",
          "text": "[Konu] için kapsamlı bir çalışma rehberi oluşturun.\n\nŞunları dahil edin:\n- Temel kavramlar ve tanımlar\n- Ezberlenmesi gereken önemli tarihler, formüller veya isimler\n- Dikkat edilmesi gereken yaygın kavram yanılgıları\n- Sınavdan hemen önce gözden geçirebileceğim hızlı bir özet\n\nSeviye: [başlangıç / orta / ileri]"
        },
        {
          "title": "Kavramı analojilerle açıkla",
          "text": "[Kavramı] bana net ve günlük hayattan analojiler kullanarak açıklayın.\n\n[Bölüm/konu] çalışan bir [sınıf/seviye] öğrencisiyim. [İlgili kavramı] anlıyorum ama bu kavramda zorlanıyorum.\n\nEn az iki farklı analoji kullanın ve sonunda kısa bir soruyla anlayıp anlamadığımı kontrol edin."
        },
        {
          "title": "Bilgi kartı (Flashcard) soru-cevapları üret",
          "text": "Aşağıdaki konu için 10 adet bilgi kartı (flashcard) soru-cevap çifti üretin:\n\n[konu veya ders notlarınızı buraya yapıştırın]\n\nHer kartı şu şekilde biçimlendirin:\nS: [soru]\nC: [kısa ve net cevap]\n\nOlgusal hatırlama, kavramsal anlama ve uygulama sorularını harmanlayın."
        },
        {
          "title": "Ders kitabı bölümünü özetle",
          "text": "Aşağıdaki ders kitabı bölümünü açık ve öz notlar halinde özetleyin.\n\n[bölüm metnini buraya yapıştırın]\n\nÖzeti şu şekilde yapılandırın:\n- Ana fikir (1–2 cümle)\n- Temel noktalar (madde imli liste)\n- Bilinmesi gereken terimler (tanımlarıyla birlikte)\n- Sınavda çıkması muhtemel noktalar"
        }
      ]
    },
    {
      "cat": "Makale ve Kompozisyon Yazımı",
      "prompts": [
        {
          "title": "Makale taslağı oluşturucu",
          "text": "Aşağıdaki makale konusu için ayrıntılı bir makale taslağı oluşturun:\n\n[makale konusu/yönergesi]\n\nDers: [ders adı]\nHedef kelime sayısı: [örn. 1500 kelime]\nArgüman tarzı: [ikna edici / analitik / karşılaştırmalı / açıklayıcı]\n\nBir tez cümlesi (thesis statement), her gelişme paragrafı için konu cümleleri ve destekleyici noktaları dahil edin."
        },
        {
          "title": "Tez cümlesi (Thesis statement) atölyesi",
          "text": "Makalem için güçlü bir tez cümlesi (thesis statement) oluşturmama yardımcı olun.\n\nKonu: [konu]\nİlk fikrim veya argümanım: [kabataslak fikrinizi açıklayın]\nÖdev türü: [tartışmacı / analitik / araştırma]\n\nGarantili olandan cesur ve iddialı olana doğru sıralanan, her birinin güçlü yönüne dair kısa bir not içeren üç farklı tez cümlesi seçeneği sunun."
        },
        {
          "title": "Argümanımı güçlendir",
          "text": "Makalemden alınan bu paragrafı inceleyin ve argümanı güçlendirmeme yardımcı olun.\n\n[paragrafı buraya yapıştırın]\n\nÖzellikle:\n1. İddia açık ve savunulabilir mi?\n2. Kanıtlar iyi entegre edilmiş mi?\n3. Yapılan analiz 'bunun önemi ne?' sorusuna cevap veriyor mu?\n\nParagrafı yaptığınız iyileştirmelerle yeniden yazın ve her değişikliği açıklayın."
        },
        {
          "title": "Giriş paragrafı yaz",
          "text": "Makalem için etkileyici bir giriş paragrafı yazın.\n\nKonu: [konu]\nTez cümlesi: [tez cümleniz]\nHedef okuyucu: [örn. profesör, genel okuyucu]\nTon: [akademik / yarı resmi]\n\nİlgi çekici bir kanca (hook) ile başlayın, kısa bir bağlam sunun ve tez cümlesiyle bitirin. Ardından bana alternatif bir açılış kancası verin."
        }
      ]
    },
    {
      "cat": "Akademik Araştırma",
      "prompts": [
        {
          "title": "Araştırma sorusunu netleştir",
          "text": "Araştırma sorumu netleştirmeme ve geliştirmeme yardımcı olun.\n\nMevcut soru: [taslak sorunuz]\nAlan: [çalışma alanı]\nKapsam: [örn. lisans tezi, 3000 kelime, bir dönem]\n\nÇok mu geniş, çok mu dar, yoksa kapsamı uygun mu? Üç geliştirilmiş versiyon önerin ve her birinin neden daha güçlü olduğunu açıklayın."
        },
        {
          "title": "Literatür taraması özeti",
          "text": "[Konu] hakkındaki literatürde yer alan temel temaları ve tartışmaları özetleyin.\n\nBağlam: [ders/seviye] için bir [ödev/makale türü] yazıyorum.\n\nŞunları kapsayın:\n- Başlıca düşünce ekolleri veya teorik çerçeveler\n- Alandaki temel uzlaşılar ve görüş ayrılıkları\n- Mevcut araştırmalardaki boşluklar\n- Daha fazla kaynak bulmak için önerilen arama terimleri"
        },
        {
          "title": "Araştırmadaki boşlukları bul",
          "text": "[Konuyu] araştırıyorum. Aşağıdaki kaynaklara ve notlara dayanarak, makalemin ele alabileceği mevcut araştırmalardaki boşlukları tespit etmeme yardımcı olun:\n\n[notları veya kaynak özetlerini buraya yapıştırın]\n\nHangi açılar yeterince incelenmemiş? Hangi sorular cevapsız kalmış? Nasıl özgün bir katkı sağlanabilir?"
        },
        {
          "title": "Açıklamalı kaynakça (Annotated bibliography) maddesi",
          "text": "Aşağıdaki kaynak için açıklamalı kaynakça (annotated bibliography) maddesi yazın.\n\nKaynak bilgisi: [tam kaynakça/atıf]\nKaynak özeti: [özeti veya temel noktaları yapıştırın]\nAtıf stili: [APA / MLA / Chicago]\n\nAçıklama şunları içermelidir: kısa bir özet (2–3 cümle), güvenilirlik ve alaka düzeyinin değerlendirilmesi ve bu kaynağı makalemde nasıl kullanabileceğim."
        }
      ]
    },
    {
      "cat": "Matematik ve Fen Bilimleri",
      "prompts": [
        {
          "title": "Matematik kavramını adım adım açıkla",
          "text": "[Matematik kavramını] daha önce hiç görmemişim gibi adım adım açıklayın.\n\nMevcut seviyem: [örn. lise cebiri, üniversite 1. sınıf kalkülüs]\nTakıldığım yer: [takıldığınız noktayı açıklayın]\n\nKavramı çözümlü bir örnek üzerinden anlatın, ardından kendim denemem için biraz daha zor bir örnek verin. Sonrasında çözümü gösterin."
        },
        {
          "title": "Alıştırma soruları üret",
          "text": "[Konu/kavram] için 5 alıştırma sorusu üretin.\n\nZorluk derecesi: [kolay / orta / zor]\nSeviyem: [örn. lise ileri kimya, üniversite fiziği]\n\nSoruları önce çözümleri olmadan sunun. Ardından bir ayırıcı çizginin sonrasında her biri için adım adım tam çözümleri verin."
        },
        {
          "title": "Laboratuvar raporu yapısı",
          "text": "Aşağıdaki deney için bir laboratuvar raporu yapılandırmama yardımcı olun.\n\nDeney: [ne yaptığınızı açıklayın]\nDers: [örn. Biyoloji, Kimya, Fizik]\nKurum seviyesi: [lise / lisans]\n\nStandart bölümleri (Başlık, Özet, Giriş, Yöntem, Bulgular, Tartışma, Sonuç) her birine nelerin dahil edileceğini gösteren maddelerle ve kaçınılması gereken yaygın hatalarla birlikte sunun."
        },
        {
          "title": "Bilimsel yöntem adımları rehberi",
          "text": "Bilimsel yöntemi aşağıdaki soruya uygulama konusunda bana rehberlik edin:\n\nAraştırma sorusu: [sorunuz]\nAlan: [biyoloji / kimya / fizik / diğer]\n\nHer adım için — gözlem, hipotez, deney tasarımı, veri toplama, analiz ve sonuç — ne yapmam gerektiğini ve nedenini açıklayın. Varsa etik hususları belirtin."
        }
      ]
    },
    {
      "cat": "Dil Öğrenimi",
      "prompts": [
        {
          "title": "Örneklerle dilbilgisi açıklaması",
          "text": "[Dil] dilindeki şu dilbilgisi kuralını açık ve öz bir şekilde açıklayın.\n\nDilbilgisi konusu: [örn. dilek kipi, edilgen çatı, edat kullanımı]\nSeviyem: [A1 / A2 / B1 / B2 / C1]\n\nŞunları sağlayın:\n- Kuralın sade bir dille açıklaması\n- Çevirileriyle birlikte 5 örnek cümle\n- Öğrenenlerin en sık yaptığı hatalar\n- Kısa bir pratik alıştırması"
        },
        {
          "title": "Bağlam içinde kelime öğrenimi",
          "text": "Şu [dil] kelimelerini bağlam içinde öğrenmeme yardımcı olun.\n\nKelimeler: [kelimeleri buraya listeleyin]\n\nHer kelime için şunları sağlayın:\n- Türkçe tanımı\n- Çevirisiyle birlikte [dil] dilinde örnek cümle\n- Dil düzeyine ilişkin bir not (resmi / günlük / argo)\n- Birlikte sık kullanıldığı bir kalıp (kolokasyon) veya ifade\n\nArdından tüm kelimeleri doğal bir şekilde kullanan kısa bir paragraf oluşturun."
        },
        {
          "title": "Nüans notlarıyla çeviri",
          "text": "Aşağıdaki metni [kaynak dil] dilinden [hedef dil] diline çevirin.\n\n[metni buraya yapıştırın]\n\nÇevirinin ardından şu nüans notlarını ekleyin:\n- Birebir çevrilemeyen kelime veya ifadeler\n- Bağlam gerektirebilecek kültürel referanslar\n- Anlamın yoruma açık olduğu yerlerde alternatif çeviriler\n- Orijinal metin ile çeviri arasındaki üslup veya ton farkları"
        },
        {
          "title": "Konuşma pratiği diyaloğu",
          "text": "Aşağıdaki senaryo için [dil] dilinde gerçekçi bir pratik diyaloğu yazın:\n\nSenaryo: [örn. restoranda yemek siparişi verme, yol sorma, iş mülakatı]\nSeviyem: [A1 / A2 / B1 / B2 / C1]\n\nŞunları dahil edin:\n- İki konuşmacı arasındaki tam diyalog\n- Her satırın altında Türkçe çevirisi\n- Kilit kelimeler ve ifadeler için kelime notları\n- Konuşmayı devam ettirmek için kullanabileceğim iki takip sorusu"
        }
      ]
    },
    {
      "cat": "Sınav Hazırlığı",
      "prompts": [
        {
          "title": "Deneme sınavı soruları",
          "text": "[Ders/konu] için 10 deneme sınavı sorusu oluşturun.\n\nSınav formatı: [çoktan seçmeli / kısa cevaplı / klasik (makale) / karışık]\nSeviye: [örn. LGS, YKS, üniversite 1. sınıf]\nOdaklanılacak konular: [temel konuları listeleyin]\n\nSoruların ardından her doğru cevap için kısa açıklamalar içeren bir cevap anahtarı sunun."
        },
        {
          "title": "Yanlış cevabı açıkla",
          "text": "Bu sınav sorusunu yanlış yaptım. Nedenini anlamama yardımcı olun.\n\nSoru: [soruyu yapıştırın]\nBenim cevabım: [yazdığınız veya seçtiğiniz cevap]\nDoğru cevap: [doğru olan cevap]\n\nŞunları açıklayın:\n1. Benim cevabım neden yanlış\n2. Doğru cevap neden doğru\n3. Anlamam gereken temel kavram\n4. Anlayıp anlamadığımı test etmek için benzer bir alıştırma sorusu"
        },
        {
          "title": "Konu için hafıza teknikleri",
          "text": "[Konuyu/bilgiyi] hatırlamam için etkili hafıza teknikleri önerin.\n\nEzberlenecek içerik: [içeriği, listeyi veya kavramı yapıştırın]\nSınav tarihi: [ne kadar zaman var]\nÖğrenme stili tercihi: [görsel / sözel / örüntü odaklı / fark etmez]\n\nBu içeriğe uyarlanmış somut örneklerle en az üç farklı teknik (örn. akrostiş/kısaltmalar, hafıza sarayı / loci yöntemi, gruplama / chunking) sunun."
        },
        {
          "title": "Son dakika tekrar kontrol listesi",
          "text": "Yaklaşan sınavım için son dakika tekrar kontrol listesi oluşturun.\n\nDers: [ders]\nSınava kalan süre: [örn. 24 saat, 3 gün]\nKapsanan konular: [ana konuları listeleyin]\nFormat: [çoktan seçmeli / klasik / problem çözme]\n\nİlk olarak neyin tekrar edileceğini önceliklendirin, en çok soru getirebilecek kilit kavramları işaretleyin ve sınava girmeden önce kaçınılması gereken yaygın hataların kısa bir listesini ekleyin."
        }
      ]
    }
  ],
  "productivity": [
    {
      "cat": "Planlama",
      "prompts": [
        {
          "title": "Haftalık planlama oturumu",
          "text": "Haftamı planlamama yardımcı olun. İşte görevlerim, teslim tarihlerim ve taahhütlerim:\n\n[üzerinizdeki tüm işleri listeleyin]\n\nBunları gün gün bir programa dönüştürün, çakışmaları işaretleyin ve nelerin ertelenebileceğini önerin. Etki düzeyine göre önceliklendirin."
        },
        {
          "title": "Büyük bir projeyi parçalara ayır",
          "text": "Yönetilebilir parçalara bölmem gereken büyük bir projem var:\n\nProje: [projeyi ve hedefini açıklayın]\nTeslim tarihi: [tarih]\nEkip büyüklüğü: [kişi sayısı veya tek başıma]\n\nKilometre taşları, bağımlılıklar ve görev başına tahmini sürelerle aşamalı bir iş kırılımı oluşturun."
        },
        {
          "title": "Öncelik matrisi (Acil/Önemli)",
          "text": "Mevcut iş yüküm için bir öncelik matrisi (Eisenhower matrisi) oluşturmama yardımcı olun. Her maddeyi şu kategorilere ayırın: Hemen Yap, Planla, Delege Et veya Bırak/Ele.\n\nGörevlerim:\n[görevlerinizi buraya listeleyin]\n\nHer biri için kategorilendirme gerekçesini kısaca açıklayın."
        },
        {
          "title": "Üç aylık (çeyreklik) hedef belirleme",
          "text": "Önümüzdeki çeyrek için hedefler belirlememe yardımcı olun. Görevim/pozisyonum [iş unvanı/fonksiyon] ve temel amacım [neyi başarmaya çalıştığınızı açıklayın].\n\nBaşarı metrikleri, hedef başına kilit eylemler ve ilerlemeyi haftalık olarak takip etmenin basit bir yoluyla birlikte 3-5 adet SMART hedef taslağı hazırlayın."
        }
      ]
    },
    {
      "cat": "Toplantılar",
      "prompts": [
        {
          "title": "Toplantı gündemi şablonu",
          "text": "Bu toplantı için yapılandırılmış bir gündem (agenda) oluşturun:\n\nToplantı türü: [örn. haftalık senkronizasyon, proje başlangıcı/kickoff, retrospektif]\nSüre: [süre]\nKatılımcılar: [roller veya isimler]\nHedef: [neye karar verilmeli veya ne başarılmalı]\n\nHer bölüm için zaman sınırları (timebox) ve net bir istenen sonuç belirleyin."
        },
        {
          "title": "Toplantı notlarını özetle",
          "text": "Bu toplantı notlarını üç bölümden oluşan, temiz ve kolay taranabilir bir formata özetleyin: Alınan Temel Kararlar, Aksiyon Maddeleri (sorumluları ve teslim tarihleriyle) ve Açıkta Kalan Sorular.\n\nHam notlar:\n[notlarınızı buraya yapıştırın]"
        },
        {
          "title": "Notlardan aksiyon maddeleri çıkar",
          "text": "Bu toplantı notlarından tüm aksiyon maddelerini çıkarın. Her biri için şunları belirleyin: görev, sorumlusu (belirtilmişse) ve teslim tarihi (belirtilmişse). Numaralandırılmış bir liste olarak biçimlendirin.\n\nToplantı notları:\n[notları buraya yapıştırın]"
        },
        {
          "title": "Toplantı sonrası takip e-postası",
          "text": "Yeni biten bir toplantı için kısa ve öz bir takip e-postası yazın.\n\nToplantı konusu: [konu]\nKatılımcılar: [isimler veya roller]\nAlınan temel kararlar: [listeleyin]\nAksiyon maddeleri: [sorumlularıyla listeleyin]\nBir sonraki toplantı: [tarih veya henüz belirlenmedi]\n\nKısa ve profesyonel tutun."
        }
      ]
    },
    {
      "cat": "E-posta",
      "prompts": [
        {
          "title": "Profesyonel e-posta taslağı hazırla",
          "text": "Aşağıdaki detaylara uygun profesyonel bir e-posta yazın:\n\nAlıcı: [alıcı ve unvanı]\nBağlam: [durum hakkında arka plan]\nTemel talep veya mesaj: [iletmeniz gereken konu]\nTon: [örn. resmi, samimi, doğrudan]\n\nÖz tutun ve net bir sonraki adımla bitirin."
        },
        {
          "title": "Zor bir e-postaya yanıt ver",
          "text": "Bu e-postaya profesyonel ve ölçülü bir şekilde yanıt vermeme yardımcı olun.\n\nBana gelen e-posta:\n[e-postayı buraya yapıştırın]\n\nDurumum: [ilgili bağlamı ekleyin]\nİstenen sonuç: [yanıtımı gönderdikten sonra ne olmasını istiyorum]\n\nKararlı ama yapıcı bir yanıt taslağı hazırlayın."
        },
        {
          "title": "Toplu e-posta şablonları",
          "text": "[Kullanım senaryosu, örn. müşteri kontrolleri, proje durum güncellemeleri, yeni kişilerle tanışma] için [sayı] adet yeniden kullanılabilir e-posta şablonu oluşturun.\n\nHer şablonun bir konu satırı, kişiselleştirme için [yer tutucuları] olan bir gövde metni ve bir eylem çağrısı olmalıdır. Her birini 150 kelimenin altında tutun."
        },
        {
          "title": "Talebi nazikçe reddet",
          "text": "Bu talebi nazik ama net bir şekilde reddeden bir e-posta yazmama yardımcı olun:\n\nTalep: [ne istendiğini açıklayın]\nReddetme nedenim: [kısa ve dürüst gerekçe]\nGönderenle ilişkim: [iş arkadaşı, müşteri, yönetici vb.]\n\nUygun yerlerde bir alternatif önerin veya reddi yumuşatın. Kısa tutun."
        }
      ]
    },
    {
      "cat": "Karar Alma",
      "prompts": [
        {
          "title": "Seçim için karar çerçevesi",
          "text": "Şu seçenekler arasında bir karar vermem gerekiyor:\n\nSeçenek A: [açıklayın]\nSeçenek B: [açıklayın]\nSeçenek C: [açıklayın veya sadece iki seçenek varsa kaldırın]\n\nBağlam: [tehlikede olan ne, kısıtlamalar, zaman çizelgesi]\n\nHer seçeneği şu kriterlere göre değerlendirin: etki, efor, risk ve geri döndürülebilirlik. Gerekçeleriyle en iyi seçeneği önerin."
        },
        {
          "title": "Pre-mortem (Olası başarısızlık) analizi",
          "text": "Bu plan üzerinde bir pre-mortem (başarısızlık senaryosu analizi) yapın. Şu andan itibaren [6 ay / 1 yıl] sonrasında olduğumuzu ve planın tamamen başarısızlığa uğradığını varsayın.\n\nPlan: [planınızı veya girişiminizi açıklayın]\n\nBaşarısız olmasının en muhtemel nedenlerini, erken dönemde dikkat etmem gereken uyarı işaretlerini ve şu anda planda yapmam gereken değişiklikleri listeleyin."
        },
        {
          "title": "Ağırlıklı kriterlerle artı/eksi analizi",
          "text": "Ağırlıklı kriterler kullanarak bu kararı değerlendirmeme yardımcı olun.\n\nKarar: [neye karar veriyorum]\nSeçenekler: [seçenekleri listeleyin]\nBenim için önemli olan kriterler (önemi 1-5 arası puanlayın): [kriterleri listeleyin, örn. maliyet, hız, kalite, risk]\n\nAğırlıklı bir puanlama tablosu oluşturun, her seçeneği puanlayın ve kazananı önerin."
        },
        {
          "title": "Paydaş etki analizi",
          "text": "Bu kararın veya değişikliğin paydaşlar üzerindeki etkisini analiz edin:\n\nKarar: [açıklayın]\nİlgili paydaşlar: [grupları veya kişileri listeleyin]\n\nHer paydaş için şunları belirleyin: nasıl etkilendikleri (olumlu veya olumsuz), olası tepkileri ve tepkilerini yönetmek için ne iletmem veya ne yapmam gerektiği."
        }
      ]
    },
    {
      "cat": "İletişim",
      "prompts": [
        {
          "title": "Proje durum güncellemesi yaz",
          "text": "[Hedef kitle, örn. yönetim, ekip, müşteri] için bir proje durum güncellemesi yazın.\n\nProje: [ad ve tek cümlelik açıklama]\nDurum: [yolunda / risk altında / gecikmeli]\nBu dönemde tamamlananlar: [listeleyin]\nGelecek dönemde planlananlar: [listeleyin]\nEngeller veya riskler: [listeleyin veya yok]\n\nTek sayfada tutun. Riskler konusunda doğrudan ve şeffaf olun."
        },
        {
          "title": "Teknik kavramı teknik olmayan kitleye açıkla",
          "text": "[Teknik kavramı veya terimi] teknik geçmişi olmayan birine açıklayın. Basit bir analoji kullanın, jargondan kaçının ve 150 kelimenin altında tutun. Hedef kitle: [tanımlayın, örn. üst düzey yöneticiler, müşteriler, İK ekibi]."
        },
        {
          "title": "Ekip üyesi için geri bildirim",
          "text": "Bir ekip üyesi için açık, net ve yapıcı bir geri bildirim yazmama yardımcı olun.\n\nDurum: [ne oldu ve ne zaman]\nEtki: [ekibi, projeyi veya sonucu nasıl etkiledi]\nEle alınacak davranış: [kişisel değil, somut ve davranış odaklı olun]\nİstenen değişiklik: [farklı olarak ne yapmalarını istiyorsunuz]\n\nSBI modelini (Durum, Davranış, Etki / Situation, Behavior, Impact) kullanarak çerçeveleyin ve destekleyici bir ton takının."
        },
        {
          "title": "Eskalasyon (Üst kademeye iletme) e-postası",
          "text": "Tıkanmış veya risk altındaki bir durum için eskalasyon e-postası yazın.\n\nSorun: [sorunu net bir şekilde açıklayın]\nÇözülmezse etkisi: [zaman çizelgesi, iş riski veya maliyet]\nŞimdiye kadar denenenler: [şu ana kadar atılan adımlar]\nNeye ihtiyacım var: [karar, kaynak veya engeli kaldıran bir eylem]\nAlıcı: [unvanı ve konuyla ilişkisi]\n\nSuçlayıcı değil, doğrudan ve çözüm odaklı olun."
        }
      ]
    },
    {
      "cat": "Kişisel Gelişim ve Yaşam",
      "prompts": [
        {
          "title": "Sabah rutini optimizasyonu",
          "text": "Etkili bir sabah rutini tasarlamama yardımcı olun. İşte mevcut durumum:\n\nUyanma saati: [saat]\nİşe başlamadan önceki boş zaman: [süre]\nMevcut rutin: [açıklayın veya rutin yok deyin]\nDesteklemek istediğim hedefler: [örn. odaklanma, zindelik, dinginlik, öğrenme]\nKısıtlamalar: [örn. çocuklar, yol/trafik, sınırlı alan]\n\nZaman bloklarıyla gerçekçi bir rutin tasarlayın ve her unsurun amacını açıklayın."
        },
        {
          "title": "Alışkanlık takip çizelgesi tasarımı",
          "text": "Kazanmak istediğim şu alışkanlıklar için bir alışkanlık takip çizelgesi tasarlamama yardımcı olun:\n\nAlışkanlıklar: [bunları listeleyin]\nTakip sıklığı: [günlük / haftalık]\nTercih edilen format: [basit kontrol listesi, e-tablo sütunları, günlük yazma yönergesi vb.]\n\nHer alışkanlık için bir tetikleyici (trigger), kötü günler için asgari uygulanabilir bir versiyon ve ilerlemeyi ölçecek bir metrik önerin."
        },
        {
          "title": "Haftalık değerlendirme şablonu",
          "text": "Her [haftanın günü] günü düşünüp planlama yapmak için kullanabileceğim bir haftalık değerlendirme şablonu oluşturun.\n\nAna odak alanlarım: [örn. iş projeleri, sağlık, ilişkiler, öğrenme]\nDeğerlendirme için ayırabileceğim süre: [süre]\n\nÖz değerlendirme soruları, kazanımları ve dersleri kaydedecek bir bölüm ve önümüzdeki hafta için bir planlama bölümü ekleyin. Pratik ve hızlı tamamlanabilir olsun."
        },
        {
          "title": "Yeni beceri için öğrenme planı",
          "text": "[Öğrenmek istediğim beceri] için yapılandırılmış bir öğrenme planı oluşturun.\n\nMevcut seviyem: [tamamen yeni başlayan / biraz bilgisi olan / orta düzey]\nAyırabileceğim zaman: [haftada kaç saat]\nBitiş tarihi veya hedef tarih: [tarih veya esnek]\nTercih edilen öğrenme biçimi: [videolar, okuma, uygulamalı projeler, kurslar vb.]\n\nPlanı somut kaynaklar, kilometre taşları ve her aşamada ilerlememi test edecek bir yöntemle aşamalara bölün."
        }
      ]
    }
  ],
  "legal": [
    {
      "cat": "Sözleşmeler",
      "prompts": [
        {
          "title": "Sözleşmeyi riskler (red flags) için incele",
          "text": "Bu sözleşmeyi inceleyin; tehlike sinyallerini (red flags), alışılmadık maddeleri veya aşırı tek taraflı şartları belirleyin. Önemli bir risk veya sorumluluk (liability) yaratabilecek her şeyi işaretleyin:\n\n[sözleşme metnini buraya yapıştırın]\n\nBulunan her sorun için riski açıklayın ve nasıl iyileştirilebileceğini önerin."
        },
        {
          "title": "Sözleşmenin temel şartlarını özetle",
          "text": "Bu sözleşmenin temel şartlarını sade bir dille özetleyin. Şunları kapsayın: taraflar, süre, ödeme şartları, her bir tarafın yükümlülükleri, fesih koşulları ve dikkat çeken kısıtlamalar:\n\n[sözleşme metnini buraya yapıştırın]"
        },
        {
          "title": "Gizlilik sözleşmesi (NDA) taslağı oluştur",
          "text": "Aşağıdaki taraflar arasında bir gizlilik sözleşmesi (NDA) taslağı hazırlayın:\n\nBilgiyi açıklayan taraf: [ad/tür, örn. bir SaaS girişimi]\nBilgiyi alan taraf: [ad/tür, örn. potansiyel bir kurumsal müşteri]\nAmaç: [örn. yazılım entegrasyonunu değerlendirmek]\nSüre: [örn. 2 yıl]\n\nStandart NDA bölümlerini dahil edin: gizli bilginin tanımı, yükümlülükler, istisnalar, süre ve hukuki yollar/tazminat."
        },
        {
          "title": "İki sözleşme versiyonunu karşılaştır",
          "text": "Bir sözleşmenin bu iki versiyonunu karşılaştırın ve temel farkları özetleyin. Hakları, yükümlülükleri, sorumlulukları veya ödemeleri anlamlı şekilde etkileyen tüm değişiklikleri vurgulayın:\n\nVersiyon 1:\n[buraya yapıştırın]\n\nVersiyon 2:\n[buraya yapıştırın]"
        }
      ]
    },
    {
      "cat": "Uyum (Compliance)",
      "prompts": [
        {
          "title": "GDPR / KVKK uyum kontrol listesi",
          "text": "AB'deki kullanıcılardan [veri türlerini, örn. e-posta adresleri ve kullanım analizleri] toplayan bir [kuruluş türü, örn. B2B SaaS şirketi] için GDPR uyum kontrol listesi oluşturun.\n\nŞunları kapsayın: işlemenin hukuki dayanağı, açık rıza, ilgili kişi (veri sahibi) hakları, veri saklama süresi, veri ihlali bildirimi ve veri işleme sözleşmesi (DPA) gereksinimleri."
        },
        {
          "title": "Veri işleme değerlendirmesi",
          "text": "Aşağıdaki faaliyet için bir veri işleme değerlendirmesi yapmama yardımcı olun:\n\nFaaliyet: [açıklayın, örn. AB'de ikamet edenlere pazarlama e-postaları göndermek]\nToplanan veriler: [türleri listeleyin]\nSürece dahil olan üçüncü taraf veri işleyenler: [listeleyin, örn. Mailchimp, Stripe]\n\nUyum yükümlülüklerini, riskleri ve önerilen güvenlik önlemlerini belirleyin."
        },
        {
          "title": "Mevzuat değişikliği etki analizi",
          "text": "Bu mevzuat/yönetmelik değişikliğinin kuruluşumuz üzerindeki etkisini analiz edin:\n\nMevzuat: [adı ve yetki alanı, örn. AB Yapay Zeka Yasası, Kaliforniya SB 1047]\nİşimiz: [kısa açıklama]\nMevcut uygulamalarımız: [ilgili mevcut uygulamaları açıklayın]\n\nNeleri değiştirmemiz gerekiyor? Aciliyet sırasına göre önceliklendirin."
        },
        {
          "title": "Denetim hazırlık rehberi",
          "text": "Yaklaşan bir [denetim türü, örn. SOC 2 Type II, ISO 27001, GDPR denetimi] denetimine hazırlanmamıza yardımcı olun.\n\nKuruluşumuz: [kısa açıklama]\nDenetim kapsamı: [açıklayın]\nZaman çizelgesi: [örn. denetim 3 ay sonra]\n\nNelerin hazırlanacağına dair önceliklendirilmiş bir kontrol listesi, proaktif olarak çözülmesi gereken yaygın bulguları ve hazır bulundurmamız gereken dokümanları sunun."
        }
      ]
    },
    {
      "cat": "Politikalar",
      "prompts": [
        {
          "title": "Gizlilik politikası taslağı oluştur",
          "text": "Şunun için bir gizlilik politikası taslağı hazırlayın:\n\nÜrün/hizmet: [açıklayın]\nToplanan veriler: [türleri listeleyin, örn. isim, e-posta, ödeme bilgileri, kullanım verileri]\nKullanılan üçüncü taraf hizmetler: [örn. Stripe, Google Analytics, AWS]\nKullanıcı konumları: [örn. ABD ve AB]\n\nGDPR ve CCPA tarafından zorunlu kılınan tüm bölümleri dahil edin. Sade ve kullanıcı dostu bir dille yazın."
        },
        {
          "title": "Kabul edilebilir kullanım politikası yaz",
          "text": "[Ürünü açıklayın, örn. işletmeler için bulut tabanlı bir iş birliği aracı] olan [ürün/platform adı] için bir kabul edilebilir kullanım politikası (AUP) yazın.\n\nŞunları dahil edin: izin verilen kullanımlar, yasaklanan faaliyetler, yaptırımlar ve sonuçları, ihlallerin nasıl bildirileceği.\n\nTon aşırı ağdalı hukuki bir dilde değil, net ve profesyonel olmalıdır."
        },
        {
          "title": "Çalışan el kitabı bölümü hazırla",
          "text": "Çalışan el kitabımız için [konu, örn. uzaktan çalışma politikası / veri güvenliği / sosyal medya kullanımı] konulu bir bölüm yazın.\n\nŞirket türü: [açıklayın]\nKapsanacak temel kurallar: [listeleyin]\nTon: [örn. samimi ama net]\n\nAnlaşılması kolay olsun; nelerin beklendiğini, nelere izin verilmediğini ve uyumsuzluğun sonuçlarını içersin."
        },
        {
          "title": "Davranış kuralları (Code of conduct) taslağı",
          "text": "[Kuruluş türü, örn. bir açık kaynak projesi / bir teknoloji girişimi] için bir davranış kuralları (code of conduct) taslağı hazırlayın.\n\nYansıtılacak temel değerler: [listeleyin, örn. kapsayıcılık, saygı, şeffaflık]\nKapsam: [örn. katkıda bulunanlar, çalışanlar, etkinlikler için geçerlidir]\n\nŞunları dahil edin: beklenen davranışlar, kabul edilemez davranışlar, bildirim süreci ve uygulama/yaptırımlar."
        }
      ]
    },
    {
      "cat": "Fikri Mülkiyet (IP)",
      "prompts": [
        {
          "title": "Marka tescil araştırması hazırlığı",
          "text": "Aşağıdaki marka için bir marka ön araştırmasına hazırlanmama yardımcı olun:\n\nÖnerilen marka adı: [isim veya ifade]\nMallar/hizmetler: [ne sattığınızı veya ne yaptığınızı açıklayın]\nYargı alanları: [örn. Türkiye, ABD, AB]\n\nBir araştırmada nelere dikkat edilmesi gerektiğini, bir markayı tescil edilebilir kılan unsurları ve dikkat edilmesi gereken olası çakışmaları açıklayın."
        },
        {
          "title": "Patent tekniğin bilinen durumu (Prior art) özeti",
          "text": "Bir patent başvurusu için bu buluş fikriyle ilgili önceki teknik düzeyini (prior art) özetlememe yardımcı olun:\n\nBuluş açıklaması: [sade bir dille açıklayın]\nTeknoloji alanı: [örn. makine öğrenimi, biyoteknoloji, yazılım]\n\nÖnceki tekniğin ne anlama geldiğini, hangi kategorilerde arama yapılması gerektiğini açıklayın ve bu buluşun neyinin yeni (özgün) olabileceğini netleştirmeme yardımcı olun."
        },
        {
          "title": "Açık kaynak lisansları karşılaştırması",
          "text": "Kullanım senaryomuz için bu açık kaynak lisanslarını karşılaştırın:\n\nKarşılaştırılacak lisanslar: [örn. MIT, Apache 2.0, GPL v3, AGPL]\nKullanım senaryomuz: [örn. açık kaynak kütüphaneleri içeren ticari bir SaaS ürünü geliştiriyoruz]\n\nHer lisans için şunları açıklayın: ne yapabiliriz, ne yapmak zorundayız ve ne yapamayız. Projemiz için en uygun lisansı önerin."
        },
        {
          "title": "Fikri mülkiyet devir kontrol listesi",
          "text": "[İşi açıklayın, örn. yazılım özellikleri geliştirmek] üzere [serbest çalışanlar / çalışanlar / sözleşmeli geliştiriciler] istihdam ettiğimizde kullanılacak bir fikri mülkiyet (IP) devir kontrol listesi oluşturun.\n\nSözleşmede hangi maddeler yer almalı? Neleri doğrulamalıyız? Fikri mülkiyet sahipliğinin şirketimize düzgün bir şekilde devredilmesini sağlamak için hangi yaygın hatalardan kaçınmalıyız?"
        }
      ]
    },
    {
      "cat": "Ticaret ve İş Hukuku",
      "prompts": [
        {
          "title": "Kullanım şartları taslağı oluştur",
          "text": "Şunun için bir kullanım şartları taslağı hazırlayın:\n\nÜrün: [açıklayın]\nİş modeli: [örn. abonelikli SaaS, pazar yeri, e-ticaret]\nKullanıcı tabanı: [örn. tüketiciler, işletmeler]\n\nŞunları dahil edin: hesap şartları, ödeme ve iadeler, yasaklanan kullanımlar, sorumluluk sınırlaması, uyuşmazlık çözümü ve uygulanacak hukuk. Bir avukatın incelemesini gerektiren bölümleri işaretleyin."
        },
        {
          "title": "Hukuki sorumluluk (Liability) risk değerlendirmesi",
          "text": "Bu ticari faaliyet için hukuki sorumluluk risklerini değerlendirmeme yardımcı olun:\n\nFaaliyet: [açıklayın, örn. bireysel yatırımcılara yapay zeka tarafından oluşturulan finansal özetler sunmak]\nİşletme türü: [açıklayın]\nYargı alanları: [faaliyet gösterdiğiniz yerler]\n\nTemel sorumluluk riski kategorilerini, bunların gerçekleşme olasılığını ve olası etkilerini belirleyin; risk azaltma stratejileri önerin."
        },
        {
          "title": "Ortaklık sözleşmesi temel şartları",
          "text": "Aşağıdaki taraflar arasındaki bir ortaklık sözleşmesinde yer alması gereken temel şartları ana hatlarıyla belirtin:\n\nTaraf A: [açıklayın]\nTaraf B: [açıklayın]\nOrtaklığın niteliği: [örn. birlikte geliştirilen bir üründen gelir paylaşımı]\n\nŞunları kapsayın: roller ve sorumluluklar, gelir/kar paylaşımı, fikri mülkiyet sahipliği, karar alma süreçleri, ortaklıktan ayrılma hükümleri ve uyuşmazlık çözümü."
        },
        {
          "title": "Tedarikçi sözleşmesi inceleme kontrol listesi",
          "text": "Tedarikçi sözleşmelerini imzalamadan önce incelemek için bir kontrol listesi oluşturun. Şirketimiz bir [tanımlayın, örn. fintech alanında Seri A aşamasında bir girişim].\n\nÖzellikle önem verdiğimiz konular: [endişelerinizi listeleyin, örn. veri işleme, SLA'ler, sorumluluk sınırları, fesih hakları]\n\nHer zaman neleri kontrol etmeliyiz, tedarikçilerin sözleşmeye koyduğu yaygın aleyhte şartlar nelerdir ve hangi konularda geri adım atmamalıyız?"
        }
      ]
    },
    {
      "cat": "Yalın Hukuk Dili",
      "prompts": [
        {
          "title": "Hukuki dili sadeleştir",
          "text": "Bu hukuki metni, hukukçu olmayan birinin rahatlıkla anlayabileceği sade ve açık bir dille yeniden yazın. Anlamı olduğu gibi koruyun ancak jargonu, edilgen yapıları ve gereksiz karmaşıklığı kaldırın:\n\n[hukuki metni buraya yapıştırın]\n\nHedef kitle: [örn. genel tüketiciler / küçük işletme sahipleri]"
        },
        {
          "title": "Kullanıcıya yönelik yasal bildirim yaz",
          "text": "Aşağıdaki yasal gereksinim için kullanıcı odaklı bir bilgilendirme metni yazın:\n\nGereksinim: [örn. pazarlama e-postaları için GDPR/KVKK onayı / çerez bildirimi / veri saklama politikası güncellemesi]\nBağlam: [bu bildirimin nerede görüneceği, örn. kayıt formunda / uygulama içi banner'da]\nTon: [örn. samimi, öz, güven verici]\n\nTemel noktaları kapsarken mümkün olduğunca açık, dürüst ve kısa tutun."
        },
        {
          "title": "Hukuki belgeden SSS oluştur",
          "text": "Bu hukuki belgeyi, kullanıcıların gerçekten okuyup anlayabileceği sade dille yazılmış bir SSS'ye (Sıkça Sorulan Sorular) dönüştürün. En önemli noktaları ve kullanıcıların sorması en muhtemel soruları çıkarın:\n\n[belgeyi buraya yapıştırın]\n\nSoru-Cevap formatında hazırlayın. 8-12 soru hedefleyin. Her cevabı 2-3 cümleyle sınırlı tutun."
        },
        {
          "title": "Politikayı çalışan rehberine dönüştür",
          "text": "Bu resmi şirket politikasını alın ve çalışanlar için samimi, pratik bir rehber olarak yeniden yazın. Amaç, personelin bunu sadece onaylayıp geçmesi değil, gerçekten anlayıp uygulamasıdır.\n\nPolitika:\n[buraya yapıştırın]\n\nŞunları dahil edin: bunun günlük hayatta ne anlama geldiği, somut 'yapılması ve yapılmaması gerekenler' örnekleri ve emin olunamadığında ne yapılacağı."
        }
      ]
    }
  ],
  "sales": [
    {
      "cat": "Müşteri Adayı Bulma (Prospecting)",
      "prompts": [
        {
          "title": "Soğuk satış e-postası (Cold outreach) yaz",
          "text": "Potansiyel bir müşteriye soğuk erişim (cold outreach) e-postası yazın.\n\nŞirket adı: [müşteri adayının şirketi]\nAdayın pozisyonu: [örn. Satıştan Sorumlu Başkan Yardımcısı, Operasyon Direktörü]\nÜrünümüz/hizmetimiz: [kısa açıklama]\nTemel değer önerisi: [hangi sorunu çözüyoruz]\nİstenen sonuç: [örn. 20 dakikalık bir görüşme ayarlamak]\n\n150 kelimenin altında tutun. Ürünümüzle değil, onların yaşadığı sorunla başlayın. Tek ve düşük sürtünmeli bir eylem çağrısıyla (CTA) bitirin."
        },
        {
          "title": "LinkedIn bağlantı ve mesaj serisi",
          "text": "Soğuk bir müşteri adayı için 3 adımlı bir LinkedIn erişim serisi yazın.\n\nMüşteri adayı profili: [unvan, şirket, sektör]\nTeklifimiz: [ürün/hizmet ve temel fayda]\n\n1. Adım: Bağlantı isteği notu (300 karakterin altında)\n2. Adım: Bağlantı kurulduktan sonraki ilk mesaj (değer odaklı, doğrudan satış yapmayan, 100 kelimenin altında)\n3. Adım: 5 gün sonra yanıt gelmezse takip mesajı (nazik bir hatırlatma, 80 kelimenin altında)\n\nTon: profesyonel ama insani. 'Profilinize denk geldim' gibi basmakalıp açılışlardan kaçının."
        },
        {
          "title": "Görüşme öncesi müşteri adayı araştırması",
          "text": "Bir satış görüşmesi öncesinde bu müşteri adayını araştırmama yardımcı olun.\n\nMüşteri adayının adı: [isim]\nPozisyonu: [unvan]\nŞirket: [şirket adı]\nSektör: [sektör]\nGörüşmenin amacı: [örn. keşif görüşmesi, demo, satış kapama]\n\nŞunları sağlayın:\n1. Olası önceliklerine dayanarak sorulacak 5 akıllı soru\n2. Kendi pozisyonundaki biri için 3 olası sıkıntı/acı noktası\n3. Güvenilirlik sergilemek için atıfta bulunabileceğim 2 güncel sektör trendi\n4. Pozisyonuna veya şirketine dayalı bir sohbet başlatıcı (icebreaker)"
        },
        {
          "title": "İdeal müşteri profili (ICP) tanımlama",
          "text": "Ürünümüz için bir İdeal Müşteri Profili (ICP) tanımlamama yardımcı olun.\n\nÜrün/hizmet: [ne sattığınızı açıklayın]\nMevcut en iyi müşterilerimiz: [varsa 2-3 örnek açıklayın]\nÇözdüğümüz sorun: [temel acı noktasını açıklayın]\nFiyat noktamız: [yaklaşık tutar]\n\nÇıktı:\n1. Kurumsal profil / firmographics (şirket büyüklüğü, sektör, coğrafya, gelir)\n2. Teknografik sinyaller (muhtemelen kullandıkları araçlar/teknolojiler)\n3. Davranışsal tetikleyiciler (onları satın almaya sevk eden durumlar)\n4. Anti-ICP: kimleri HEDEFLEMEMELİYİZ ve neden"
        }
      ]
    },
    {
      "cat": "Keşif Görüşmesi (Discovery)",
      "prompts": [
        {
          "title": "Keşif görüşmesi soru çerçevesi",
          "text": "Bir satış görüşmesi için keşif (discovery) sorusu çerçevesi oluşturun.\n\nÜrün/hizmet: [ne sattığımız]\nHedef persona: [unvan ve sektör]\nGörüşme süresi: [örn. 30 dakika]\n\nSoruları şu sırayla yapılandırın:\n1. Durum (mevcut durumlarını anlamak için 2-3 soru)\n2. Sorun (sıkıntıları/acı noktalarını ortaya çıkarmak için 2-3 soru)\n3. Etki / İma (sorunun maliyetini ve sonuçlarını derinleştirmek için 2 soru)\n4. İhtiyaç Karşılama / Çözüm Değeri (çözümün değerini kendi ağızlarından duymak için 2 soru)\n\nSonraki adımların nabzını yoklamak için bir açık uçlu kapanış sorusu ekleyin."
        },
        {
          "title": "Acı noktalarını tespit etme",
          "text": "Aşağıdaki keşif görüşmesi notlarına dayanarak müşteri adayının temel acı noktalarını belirleyin ve bunları aciliyetine göre sıralayın.\n\nGörüşme notları:\n[görüşme notlarınızı buraya yapıştırın]\n\nHer acı noktası için:\n1. Net bir şekilde adlandırın ve açıklayın\n2. Adayın söylediği ifadeyi alıntılayın veya özetleyin\n3. Aciliyetini derecelendirin: Yüksek / Orta / Düşük\n4. Hangi ürün özelliğinin veya sonucunun bununla eşleştiğini belirtin\n\nAyrıca söylediklerinin ima ettiği ancak açıkça dile getirilmeyen acı noktalarını işaretleyin."
        },
        {
          "title": "İhtiyaç analizi şablonu",
          "text": "Bu müşteri adayı görüşmesine dayanarak bir ihtiyaç analizini tamamlamama yardımcı olun.\n\nMüşteri adayı: [isim, unvan, şirket]\nHedeflerinin ne olduğunu söylediler: [alıntılayın veya özetleyin]\nMevcut süreç/araç: [bugün ne kullanıyorlar]\nBelirtilen hayal kırıklıkları/zorluklar: [listeleyin]\nBelirttikleri zaman takvimi: [varsa]\nBütçe sinyalleri: [varsa]\n\nŞunları içeren yapılandırılmış bir ihtiyaç analizi çıktısı verin:\n- Birincil ihtiyaç\n- İkincil ihtiyaçlar\n- Başarı kriterleri (onlara göre 'çözülmüş' hali nasıl görünür?)\n- Satış sürecinde önerilen sonraki adım"
        },
        {
          "title": "Satış uygunluk kontrolü (BANT/MEDDIC)",
          "text": "Bu müşteri adayını bir satış uygunluk (qualification) çerçevesine göre değerlendirin.\n\nMüşteri adayı: [isim, unvan, şirket]\nKeşif notları: [notları yapıştırın]\n\nHer iki çerçeveye göre de puanlayın:\n\nBANT:\n- Bütçe (Budget): [biliniyor / bilinmiyor / onaylandı]\n- Yetki (Authority): [karar verici / etkileyici / bilinmiyor]\n- İhtiyaç (Need): [güçlü / orta / zayıf / belirsiz]\n- Zamanlama (Timeline): [acil / 6 ay içinde / takvim yok]\n\nMEDDIC:\n- Metrikler (Metrics): [sayısallaştırılmış etki belirlendi mi?]\n- Ekonomik Alıcı (Economic Buyer): [tespit edildi mi?]\n- Karar Kriterleri (Decision Criteria): [biliniyor mu?]\n- Karar Süreci (Decision Process): [haritalandı mı?]\n- Acı Noktası (Identify Pain): [doğrulandı mı?]\n- Şampiyon (Champion): [içeride destekçimiz var mı?]\n\nGerekçeleriyle önerin: Uygun (Qualify) / Geliştir/Besle (Nurture) / Ele (Disqualify)."
        }
      ]
    },
    {
      "cat": "Sunum ve Demo",
      "prompts": [
        {
          "title": "Sunumu personaya göre uyarla",
          "text": "Satış sunumumuzu belirli bir personaya göre özelleştirin.\n\nÜrünümüz/hizmetimiz: [açıklayın]\nTemel değer önerisi: [1-2 cümle]\nMüşteri adayı personası: [unvan, şirket türü, sektör]\nMuhtemel temel öncelikleri: [örn. maliyet azaltma, ekip verimliliği, mevzuata uyum]\nKeşifte ortaya çıkan acı noktaları: [keşiften]\n\nSunumu şu şekilde yeniden yazın:\n1. Bu persona için en önemli olan konuyla başlasın\n2. Onların kullanacağı bir dil kullansın (iç jargonumuzdan arınmış olsun)\n3. Özelliklerimizi doğrudan onların belirttikleri acı noktalarıyla bağlasın\n4. Hemen harekete geçmek için ikna edici bir gerekçeyle bitsin"
        },
        {
          "title": "Ürün demo metni taslağı",
          "text": "Bir ürün demo görüşmesi için demo akış taslağı hazırlayın.\n\nÜrün: [ad ve kısa açıklama]\nMüşteri adayı: [unvan, şirket, sektör]\nKeşifte doğrulanan acı noktaları: [listeleyin]\nDemo süresi: [örn. 30 dakika]\nÖne çıkarılacak kilit özellikler: [3-4 özellik listeleyin]\n\nYapı:\n1. Açılış (gündemi ve hedefleri yeniden teyit etme, 2 dk)\n2. Bağlam oluşturma (demoyu onların sorununa bağlama, 3 dk)\n3. Temel demo akışı (her birinde 'bu sizin için ne anlama geliyor' vurgusuyla özellik özellikleri gösterme, 18 dk)\n4. İtiraz kontrol noktası (sorular için duraklama, 4 dk)\n5. Kapanış (sonraki adımlar ve eylem çağrısı, 3 dk)\n\nHer bölüm arasına bir geçiş cümlesi ekleyin."
        },
        {
          "title": "Yatırım getirisi (ROI) hesaplama anlatısı",
          "text": "Bir müşteri adayına sunmak üzere bir yatırım getirisi (ROI) anlatısı oluşturmama yardımcı olun.\n\nÜrünümüz/hizmetimiz: [açıklama]\nMüşteri adayı şirket büyüklüğü: [çalışan sayısı / biliniyorsa ciro]\nYaşadıkları sorun: [açıklayın]\nÇözümümüzün sağladığı sonuç: [neyi iyileştiriyoruz]\n\nŞunları içeren bir anlatı oluşturun:\n1. Sorunun mevcut maliyeti (zaman, para veya risk)\n2. Çözümümüzle sağlanacak iyileşmenin muhafazakar tahmini\n3. Açık varsayımlarla yıllık ROI hesaplaması\n4. Yatırımın geri dönüş süresi (Payback period)\n5. Bir üst düzey yöneticiye sunulabilecek tek cümlelik bir özet\n\nYuvarlak sayılar kullanın ve adayın ayarlayabilmesi için varsayımları net bir şekilde belirtin."
        },
        {
          "title": "Aday için vaka analizi özeti",
          "text": "Bir müşteri adayıyla paylaşmak üzere bir müşteri başarı hikayesini (case study) özetleyin.\n\nMüşteri: [şirket adı veya 'bir [sektör] şirketi']\nBizden önceki sorunları: [açıklayın]\nÜrünümüzü nasıl kullandılar: [açıklayın]\nElde edilen sonuçlar: [varsa metrikler]\nZaman dilimi: [sonuçları görmek ne kadar sürdü]\n\nŞu formatta 150 kelimelik bir özet yazın:\n- Durum\n- Zorluk\n- Çözüm\n- Sonuçlar\n\nArdından bir e-postaya ekleyebileceğim 1 cümlelik bir versiyon yazın.\nSon olarak bu hikayeyi onların durumuyla ilişkilendirmek için adaya sorabileceğim 2 takip sorusu ekleyin."
        }
      ]
    },
    {
      "cat": "İtiraz Karşılama",
      "prompts": [
        {
          "title": "Fiyat itirazına yanıt ver",
          "text": "Bir fiyat itirazına yanıt vermeme yardımcı olun.\n\nAdayın söylediği: \"[birebir alıntı veya özet]\"\nFiyatımız: [yaklaşık tutar]\nSağladığımız değer: [temel sonuçlar]\nKarşılaştırıyor olabilecekleri rakip veya alternatif: [biliniyorsa]\n\nŞu özellikleri taşıyan bir yanıt yazın:\n1. Savunmaya geçmeden endişeyi kabul etsin\n2. Fiyatı ROI diliyle bir 'yatırım' olarak yeniden çerçevelesin\n3. Yardımcı olacaksa maliyeti birim başına veya gün başına tutara bölsün\n4. İlerlemek için indirim yerine bir sonraki adım teklif etsin\n\nAyrıca yanıt vermeden önce, bunun gerçek bir bütçe sorunu mu yoksa bir değer algısı sorunu mu olduğunu anlamak için sorulacak netleştirici bir soru önerin."
        },
        {
          "title": "Rakip karşılaştırması itirazını ele al",
          "text": "Bir rakip karşılaştırması itirazını yönetmeme yardımcı olun.\n\nAdayın söylediği: \"[alıntı veya özet]\"\nBahsedilen rakip: [rakip adı]\nRakipte muhtemelen neye değer veriyorlar: [fiyat / özellikler / marka / mevcut ilişki]\nBizim temel farklılaştırıcılarımız: [2-3 tane listeleyin]\n\nŞu özellikleri taşıyan bir yanıt yazın:\n1. İnceleme ve araştırma yapmalarını takdirle karşılasın\n2. Rakibi adil bir şekilde kabul etsin (kötülemeden)\n3. Adayın yaşadığı sorunla doğrudan ilgili benzersiz güçlü yönlerimize yönelsin\n4. Kullanmaları gereken yan yana bir değerlendirme kriteri önersin\n\nSohbeti ileriye taşıyan bir soruyla bitirin."
        },
        {
          "title": "\"Doğru zaman değil\" itirazını yönet",
          "text": "Bir zamanlama itirazına yanıt vermeme yardımcı olun.\n\nAdayın söylediği: \"[alıntı veya özet, örn. 'Şu an çok yoğunuz' veya '3. Çeyrekte tekrar konuşalım']\"\nDurumları hakkında bildiklerim: [keşiften gelen herhangi bir bağlam]\nTipik kurulum/uygulama süremiz: [örn. 2 hafta, 1 gün]\n\nŞu özellikleri taşıyan bir yanıt yazın:\n1. İş yüklerini anlayışla karşılayıp empati kursun\n2. Beklemenin sorunu daha iyiye mi yoksa daha kötüye mi götürdüğünü nazikçe sorgulasın\n3. Düşük taahhütlü bir sonraki adım önersin (hemen tam satış değil)\n4. Neden şimdinin sonradan daha iyi olduğuna dair somut bir gerekçe sunsun\n\n120 kelimenin altında tutun. Baskıcı taktiklerden kaçının."
        },
        {
          "title": "\"Düşünmem lazım\" itirazını aş",
          "text": "\"Bunu biraz düşünmem lazım\" veya \"size geri döneceğim\" itirazına yanıt vermeme yardımcı olun.\n\nBağlam: [anlaşmanın hangi aşamasındayız — demo yapıldı, teklif gönderildi vb.]\nAdayın söylediği: \"[birebir alıntı]\"\nGerçek tereddüdün ne olduğunu düşünüyorum: [fiyat / şirket içi onay / risk / değerden emin olamama]\n\nŞu özellikleri taşıyan bir yanıt yazın:\n1. Anlaşmanın soğumasına izin vermeden onların karar sürecine saygı göstersin\n2. Doğrudan ama baskıcı olmayan bir soruyla arkasındaki gerçek itirazı yüzeye çıkarsın\n3. Duraklamaya neden olan her neyse (örn. şirket içi iş gerekçesi hazırlamak) yardımcı olmayı teklif etsin\n4. Görüşmeyi sonlandırmadan önce somut bir takip zamanı belirlesin"
        }
      ]
    },
    {
      "cat": "Takip (Follow-up)",
      "prompts": [
        {
          "title": "Demo sonrası takip e-postası",
          "text": "Bir ürün demosundan sonra 24 saat içinde gönderilecek bir takip e-postası yazın.\n\nMüşteri adayının adı: [isim]\nŞirket: [şirket]\nDemo tarihi: [tarih]\nKonuşulan temel acı noktaları: [1-3 tane listeleyin]\nEn çok ilgi gösterdikleri özellikler: [listeleyin]\nKararlaştırılan sonraki adım: [örn. teklif göndermek, ekipleriyle tanışma görüşmesi, deneme sürümü]\nVarsa açıkta kalan soruları: [varsa listeleyin]\n\nE-posta şunları yapmalıdır:\n1. Teşekkür etmeli ve görüşmeden somut bir detaya atıfta bulunmalı\n2. Sorunlarıyla ilgili 2-3 temel değer noktasını özetlemeli\n3. Varsa açıkta kalan soruları yanıtlamalı\n4. Net bir aksiyon maddesiyle kararlaştırılan sonraki adımı teyit etmeli\n\nTon: samimi ve profesyonel. 200 kelimenin altında."
        },
        {
          "title": "Soğuyan müşteri adayını yeniden canlandır",
          "text": "İletişimi kesen (soğuyan) bir müşteri adayını yeniden kazanmak için bir e-posta yazın.\n\nMüşteri adayının adı: [isim]\nŞirket: [şirket]\nSon etkileşim: [tarih ve ne olduğu — örn. demo yapıldı, teklif gönderildi]\nSon iletişimden bu yana geçen süre: [örn. 6 hafta]\nSessiz kalmalarının olası nedeni: [biliniyorsa]\nAtıfta bulunulacak yeni açı veya tetikleyici: [örn. şirketleriyle ilgili bir haber, yeni çıkan bir özelliğimiz, sektördeki bir değişim]\n\nŞu özelliklere sahip bir e-posta yazın:\n1. Suçluluk hissettirmeyen veya aşırı özür dilemeyen\n2. Yeni veya alakalı bir konuyla başlayan ('sadece kontrol etmek istedim' gibi basmakalıp olmayan)\n3. Değeri tek bir cümlede yeniden vurgulayan\n4. Harekete geçmesi kolay tek bir eylem çağrısı (CTA) içeren\n\n100 kelimenin altında."
        },
        {
          "title": "Teklif özeti e-postası",
          "text": "Müşteri adayına gönderilen bir teklife eşlik edecek bir e-posta yazın.\n\nMüşteri adayının adı: [isim]\nŞirket: [şirket]\nTeklif özeti: [nelerin dahil olduğuna dair kısa genel bakış]\nToplam değer/yatırım: [fiyat veya aralık]\nElde edecekleri temel sonuçlar: [2-3 madde]\nGeçerlilik süresi veya karar tarihi: [varsa]\nSonraki adım: [örn. değerlendirme görüşmesi planlandı, imza bekleniyor]\n\nE-posta şunları yapmalıdır:\n1. Teklifi adayın somut acı noktalarına bir çözüm olarak çerçevelemeli (keşif görüşmesine atıfta bulunarak)\n2. En önemli 2-3 sonucu vurgulamalı\n3. Teklifin kilit bölümlerinin bulunmasını kolaylaştırmalı\n4. Sonraki adımı net bir şekilde belirtmeli\n\nTon: kendinden emin ve yardımsever. 180 kelimenin altında."
        },
        {
          "title": "Tıkanan satış için sonraki adım e-postası",
          "text": "Tıkanmış veya duraklamış bir satışı harekete geçirmek için bir e-posta yazın.\n\nMüşteri adayının adı: [isim]\nŞirket: [şirket]\nSatış aşaması: [örn. teklif gönderildi, sözlü onay alındı ama imza yok, hukuk departmanında bekliyor]\nNe kadar süredir durakladığı: [zaman dilimi]\nSon iletişim: [kısa özet]\nEngelleyicinin ne olduğunu düşünüyorum: [en iyi tahmininiz]\n\nŞu özelliklere sahip bir e-posta yazın:\n1. Baskı veya dırdır hissi vermeyen\n2. Gerçekten faydalı bir şey sunan (örn. bir şablon, veri veya engelleri çözmek için kısa bir görüşme)\n3. Yapay görünmeyen hafif bir aciliyet yaratan\n4. Tarih içeren somut bir sonraki adım öneren\n\nAyrıca e-postaya yanıt gelmezse kullanılabilecek alternatif bir yaklaşım önerin."
        }
      ]
    },
    {
      "cat": "Satış Raporlama",
      "prompts": [
        {
          "title": "Haftalık satış hattı (Pipeline) özeti",
          "text": "Satış yöneticim veya ekibim için haftalık bir satış hattı (pipeline) özeti yazın.\n\nBu haftanın aktiviteleri:\n- Açılan yeni fırsatlar: [sayı ve kısa açıklama]\n- Tamamlanan demolar veya görüşmeler: [sayı]\n- Gönderilen teklifler: [sayı]\n- Kapanan (kazanılan) anlaşmalar: [sayı ve tutar]\n- Kapanan (kaybedilen) anlaşmalar: [sayı ve biliniyorsa neden]\n\nSatış hattı anlık görüntüsü:\n- Toplam açık satış hattı: [tutar]\n- Her aşamadaki anlaşmalar: [listeleyin]\n- Risk altındaki anlaşmalar: [duraklayan veya riskli olanlar]\n\nGelecek haftanın öncelikleri: [3-4 eylemi listeleyin]\n\nNet ve kolay göz gezdirilebilir bir özet formatında hazırlayın. Jargondan uzak, sade bir dil kullanın."
        },
        {
          "title": "Kaybedilen satış analizi",
          "text": "Kaybedilen bir satış anlaşmasının analizini (lost deal analysis) yazmama yardımcı olun.\n\nAnlaşma detayları:\n- Müşteri adayı: [şirket adı]\n- Anlaşma büyüklüğü: [tutar]\n- Satış döngüsü süresi: [süre]\n- Kaybedildiği aşama: [örn. demo sonrası, teklif sonrası]\n- Belirtilen kaybetme nedeni: [bize söyledikleri]\n- Gerçek neden (sizin yorumunuz): [dürüst değerlendirmeniz]\n- Tercih edilen rakip (biliniyorsa): [isim]\n\nŞunları analiz edin:\n1. Hangi sinyalleri kaçırdık veya görmezden geldik?\n2. Satış süreci nerede tıkandı/bozuldu?\n3. Bu kazanılabilir bir anlaşma mıydı? Neden ya da neden değildi?\n4. Neyi farklı yapardık?\n5. Gelecekte yeniden iletişime geçmek için bir yol var mı?\n\nSavunmacı değil, dürüst ve aksiyon alınabilir olun."
        },
        {
          "title": "Kazanma/kaybetme örüntüleri analizi",
          "text": "Örüntüleri tespit etmek için bu kazanma/kaybetme sonuçlarını analiz edin.\n\nSon kazanılanlar:\n[kazanılan anlaşmaları listeleyin — büyüklük, sektör, persona, anlaşma süresi, temel kazanma nedeni]\n\nSon kaybedilenler:\n[kaybedilen anlaşmaları listeleyin — büyüklük, sektör, persona, anlaşma süresi, temel kaybetme nedeni]\n\nŞunları belirleyin:\n1. Kazandığımız anlaşmaların ortak özellikleri (ICP uyumu, kullanım senaryosu, persona, anlaşma büyüklüğü)\n2. Kaybettiğimiz anlaşmaların ortak özellikleri\n3. Neden kazandığımıza dair örüntüler (fiyat, ilişkiler, özellikler, hız)\n4. Neden kaybettiğimize dair örüntüler (aynı şekilde)\n5. Öneriler: nereye odaklanılmalı, süreçte ne düzeltilmeli ve hangi segmente ağırlık verilmeli"
        },
        {
          "title": "Yönetim için satış tahmini anlatısı",
          "text": "Üst yönetim veya yönetim kurulu güncellemesi için bir satış tahmini (forecast) anlatısı yazın.\n\nTahmin dönemi: [örn. 2026 2. Çeyrek]\nSatış kotası/hedefi: [toplam hedef]\nMevcut satış hattı: [toplam değer]\nTaahhüt edilen tahmin (Commit): [kapanacağından emin olduğum tutar]\nEn iyi senaryo (Best case): [her şey yolunda giderse]\nOlası riskler: [kayabilecek anlaşmalar]\n\nÖne çıkarılacak kilit anlaşmalar:\n[isim/yer tutucu, aşama, değer, beklenen kapanış tarihi ile 3-5 tanesini listeleyin]\n\nŞunları içeren 200 kelimelik bir anlatı yazın:\n1. Manşet sayıyı net bir şekilde belirtsin\n2. Güvenin arkasındaki itici güçleri açıklasın\n3. Temel riskleri ve bunları azaltmak için neler yapıldığını belirtsin\n4. Varsa yönetimden beklenen tek bir net talep veya eylemle bitsin\n\nTon: savunmacı değil, kendinden emin ve verilere dayalı."
        }
      ]
    }
  ]
};
