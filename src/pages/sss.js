import { Content } from "@/components/Content";
import PageHead from "@/layout/head/Head";
import { Collapse } from "antd";

export default function SSS() {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const items = [
    {
      key: "1",
      label: "Yazılım Geliştirme",
      children: (
        <div className="card-body ">
          <dl>
            <dt>- Hangi teknolojileri kullanıyorsunuz?</dt>
            <dd>
              Projelerin ve sizin ihtiyaçlarınızı belirliyoruz. Uygulamalarımız
              tamamen size özel yazıldığı için bu konuda tamamen ihtiyaçlar
              doğrultusunda güncel ve stabil teknolojileri kullanmaya özen
              gösteriyoruz.
            </dd>
          </dl>
          <dl>
            <dt>- Projenin kaynak kodlarını veriyor musunuz?</dt>
            <dd>
              Evet, projenizin yazılım geliştirme süreci boyunca yazılan tüm
              kodlara erişim hakkı veriyoruz. Proje tamamlandıktan sonra bütün
              kodları size teslim ediyoruz.
            </dd>
          </dl>
          <dl>
            <dt>- Proje tesliminden sonra yazılım desteği alabilecek miyim?</dt>
            <dd>
              Proje kapsamında üretilen ve geliştirilen her türlü iş, yayına
              alındığı süreçten itibaren MegaCode garantisi altındadır. Ancak bu
              garantiye herhangi tasarımsal veya yapısal bir değişiklik dahil
              değildir. Projeniz tamamlandıktan sonra ihtiyacınıza göre bakım ve
              destek hizmeti talep edebilirsiniz.
            </dd>
          </dl>
          <dl>
            <dt>
              - Proje uygulama sürecinde hangi aşamada olunduğundan bilgi
              alabiliyor muyum?
            </dt>
            <dd>
              Tabi ki. Proje yöneticisi tarafından belirli periyotlarla
              gerçekleştirilen toplantılarda, projenin yazılım ve tasarım
              süreçleri ile ilgili bilgi alabiliyorsunuz.{" "}
            </dd>
          </dl>
          <dl>
            <dt>- UI/UX tasarım hizmeti sunuyor musunuz?</dt>
            <dd>
              Evet. Kullanıcı deneyimi ve arayüz tasarımı süreçlerine her zaman
              değer vermekteyiz. İsteğiniz dahilinde projenize özel olarak
              kullanıcı deneyimi ve arayüz tasarımlarınızı oluşturuyoruz.
            </dd>
          </dl>
        </div>
      ),
    },
    {
      key: "2",
      label: "Web Sitesi Tasarımı",
      children: (
        <div className="card-body text-justify">
          <dl>
            <dt>- Web sitem responsive olacak mı?</dt>
            <dd>
              Evet. Web sitenizin masaüstü, akıllı telefon ve tabletlere uyumlu
              olarak görüntülenmesini sağlıyoruz.
            </dd>
          </dl>
          <dl>
            <dt>- Web sitesi için SEO/SEM hizmeti veriyor musunuz?</dt>
            <dd>
              Evet. Web tasarım projelerinizi Google, Bing, Yandex, gibi
              tarayıcılarda üst sıralara taşıyabilecek özel kodlamalarla %100
              SEO altyapısına uygun şekilde geliştiriyoruz.
            </dd>
          </dl>
          <dl>
            <dt>- Web sitesi ücreti bir defaya mahsus bir ücret midir?</dt>
            <dd>
              Evet, web sitesi ücreti bir defaya mahsus bir ücrettir.
              Tekrarlanmaz. Web sitenizin sahibi siz olursunuz.
            </dd>
          </dl>
          <dl>
            <dt>- Yönetim panelim olacak mı?</dt>
            <dd>
              Evet, web sitenizin tüm süreçlerini yöneten kişi siz olacaksınız.
              Saniyeler içerisinde istediğiniz değişikliği yapabileceksiniz.
            </dd>
          </dl>
        </div>
      ),
    },
    {
      key: "3",
      label: "Mobil Uygulama Geliştirme",
      children: (
        <div className="card-body text-justify">
          <dl>
            <dt>- Mobil uygulamam tüm platformlarda çalışır mı?</dt>
            <dd>
              Evet, size özel geliştirdiğimiz mobil uygulamamız IOS ve Android
              platformlarında çalışacak şekilde teslim edilmektedir.
            </dd>
          </dl>
          <dl>
            <dt>- Hangi teknolojileri kullanıyorsunuz?</dt>
            <dd>iOS =&gt; Swift, RxSwift, RxFlow, MVVM</dd>
            <dd>
              Android =&gt; Kotlin, RxKotlin, Navigation Component, Hilt, MVVM
            </dd>
            <dd>Flutter =&gt; Bloc Pattern</dd>
          </dl>
          <dl>
            <dt>- Sonradan yazılım desteği alabilecek miyim?</dt>
            <dd>
              Proje kapsamında üretilen ve geliştirilen her türlü iş, yayına
              alındığı süreçten itibaren MegaCode garantisi altındadır. Ancak bu
              garantiye herhangi tasarımsal veya yapısal bir değişiklik dahil
              değildir. Projeniz tamamlandıktan sonra ihtiyacınıza göre bakım ve
              destek hizmeti talep edebilirsiniz.
            </dd>
          </dl>
          <dl>
            <dt>- Projenin kaynak kodlarını veriyor musunuz?</dt>
            <dd>
              Evet. Projenizin yazılım geliştirme süreci boyunca yazılan tüm
              kodlara erişim hakkı veriyoruz. Proje sonunda bütün kodları size
              teslim ediyoruz.
            </dd>
          </dl>
        </div>
      ),
    },
    {
      key: "4",
      label: "Kurumsal Kimlik Hizmetleri",
      children: (
        <div className="card-body text-justify">
          <dl>
            <dt>- Kurumsal kimlik çalışması neden önemlidir?</dt>
            <dd>
              Kurumsal kimlik, şirketinizin görünen yüzünü temsil etmektedir.
              Şirket imajını, dış çevreye doğru ve etkili bir şekilde yansıtmak
              gerekir. Bu yönüyle şirketinizin reklamını başarılı bir şekilde
              yapabilmeniz için gereklidir.{" "}
            </dd>
          </dl>
          <dl>
            <dt>- Kurumsal kimlik çalışması içeriğinde neler bulunmaktadır?</dt>
            <dd>
              Kurumsal kimlik çalışması içerisinde logo, kartvizit çalışmaları,
              zarf, kupa, kalem, antetli kağıt, ajanda, takvim vs. çalışmaları
              bulunmaktadır. Çalışma içeriği istek ve ihtiyaçlarınıza göre
              genişletilebilir.
            </dd>
          </dl>
          <dl>
            <dt>
              - Yapacağınız kurumsal kimlik çalışmasını beğenmezsem ne olur?
            </dt>
            <dd>
              İstekleriniz dikkate alınarak hazırlanan çalışmalar birçok seçenek
              şeklinde sunulmaktadır. Size en uygun, en beğendiğiniz çalışmayı
              bulana kadar seçenekler sunmaya devam edeceğiz.{" "}
            </dd>
          </dl>
          <dl>
            <dt>- Sadece logo çalışması alabilir miyim?</dt>
            <dd>
              Tabii ki. İstek ve ihtiyaçlarınıza göre çalışmalar satın
              alabilirsiniz.
            </dd>
          </dl>
        </div>
      ),
    },
    {
      key: "5",
      label: "Sosyal Medya Yönetimi",
      children: (
        <div className="card-body text-justify">
          <dl>
            <dt>- Hangi sosyal medya hesaplarını yönetiyorsunuz?</dt>
            <dd>
              İnstagram, Facebook ve Twitter hesaplarınızın hepsini veya
              istediğiniz hesapları yönetebiliriz.
            </dd>
          </dl>
          <dl>
            <dt>- Sosyal medya hesaplarımı neden başkası yönetsin?</dt>
            <dd>
              Sosyal medya hesaplarınızın uzman ve işinde ehli kişiler
              tarafından yönetilmesi firmanızın veya markanızın itibarını ve
              güvenirliğini olumlu yönde etkileyecektir. Marka bilinirliğini
              arttıracak, satışlarınızda artış sağlayacağınız bir platform
              haline getirecektir.
            </dd>
            <dd>
              Aynı disiplinle, trend ve günceli takip eden uzmanlarımız sizin
              yerinize sosyal medya hesaplarınızı yönetmekten memnuniyet
              duyacaktır.
            </dd>
          </dl>
          <dl>
            <dt>
              - Sosyal medya hesaplarının analizlerini nasıl yapıyorsunuz?
              Avantajları neler olacak?
            </dt>
            <dd>
              Her ay düzenli olarak sosyal medyadaki gelişiminizi takip
              edebileceğiniz raporlar sunarak, içerik, takipçi, etkileşim, geri
              dönüş ve reklam analizleriyle rakiplerinizden farkınızı sunacağız.
              Detaylı raporlarımızda aradığınız soruların cevaplarını
              bulabileceksiniz.
            </dd>
          </dl>
          <dl>
            <dt>- Sosyal medya hesaplarını nasıl yönetiyorsunuz?</dt>
            <dd>
              Öncelikle sosyal medyanızın hedef kitlesini ve dilini belirleyerek
              kimliğinizi yansıtan özgün içerik paylaşımları ile hesaplarınızı
              programlı bir şekilde yöneteceğiz.
            </dd>
          </dl>
        </div>
      ),
    },
  ];
  return (
    <>
      <Content
        title={"Sıkça Sorulan"}
        title_2={"Sorular"}
        desc={
          "Genel konular ve merak edilenler üzerine sorulan soruları aşağıdan okuyabilirsiniz."
        }
      >
        <Collapse accordion items={items} />
      </Content>
    </>
  );
}
