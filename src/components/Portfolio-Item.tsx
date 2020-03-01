import React from 'react';

class PortfolioItem extends React.Component<any, any> {

    render() {
        const {match: {params: {portfolioId}}} = this.props;

        switch (portfolioId) {
            case 'sdu':
                return (
                    <main role="main" className="home">
                        <section className="container">
                            <div id="sdu" className="row py-5">
                                <div
                                    className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start wow fadeInUp animated"
                                    data-wow-duration="1s" data-wow-delay="0s">
                                    <div>
                                        <img className="img-fluid" src="/images/sdu.png"
                                             alt="Süleyman Demirel Üniversitesi"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-8 wow fadeInUp animated" data-wow-duration="1s"
                                     data-wow-delay="0.3s">
                                    <p>Süleyman Demirel Üniversitesi ‘nde Bilgisayar Mühendisliği bölümünü bitirdim.
                                        Aldığım dersler
                                        ve ders
                                        içeriklerini incelemek için aşağıdaki bağlantıya tıklayabilirsiniz.</p>
                                </div>
                            </div>
                        </section>
                        <section className="container py-5">
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <h3 className="home__title wow fadeInUp animated" data-wow-duration="1s"
                                        data-wow-delay="0s">Eğitim / Konferans</h3>
                                </div>
                                <div className="col-12 col-md-8 wow fadeInUp animated" data-wow-duration="1s"
                                     data-wow-delay="0.3s">
                                    <h4>Bilişim Mucitleri</h4>
                                    <p>Üniversitedeyken 28 Kasım 2016 – 3 Aralık 2016 tarihleri arasında Bilişim
                                        Mucitleri Eğitimi‘ne
                                        katıldım.
                                        Bilişim Mucitleri, Habitat Derneği ve Samsung 'un ülkemizdeki mobil yazılımcı
                                        sayısını
                                        arttırmak ve mobil
                                        yazılım alanında girişimciliği desteklemek için bir araya gelerek oluşturdukları
                                        bir projedir.
                                        Bu proje ile beş günün sonunda temel düzeyde Android programlama anlatabilir bir
                                        düzeye
                                        geldim. Sonrasında
                                        üniversiteye döndükten sonra verdiğim eğitimlerle katılımcılara temel düzeyde
                                        Android
                                        programlama
                                        öğrettim.</p>
                                    <br/>
                                    <h4>AB2017 / Aksaray - Modern Web ve PHP</h4>
                                    <p>Üniversitelerde bilgi teknolojileri konusunda ilgili grupları bir araya
                                        getirerek, bilgi
                                        teknolojilerinde ulusal altyapı, araştırma ve geliştirme, üretim, eğitim ve
                                        kullanım
                                        alanlarını tüm boyutlarıyla tanıtmak, tartışmak, birikimleri paylaşmak ve ortak
                                        politikalar oluşturmak amaçlarıyla her sene Akademik Bilişim Kurs ve
                                        Konferansları
                                        düzenleniyor.
                                        Bende Akademik Bilişim 2017 'de Modern Web ve PHP kursuna katıldım. 4 günlük bir
                                        eğitim
                                        gördüm.
                                        Ömer Çıtak ve Eray Aydın 'dan çok keyifli bir kurs aldık. Bir sunucuya attığımız
                                        istekten
                                        tutun MVC yapısına, Laravel’den PHP açıklarına birçok şey öğrendik. </p>
                                    <br/>
                                    <p>Bunlar dışında ayrıntısına girmek istemediğim BİLMÖK 2018, İzmir Bilişim Zirvesi
                                        gibi
                                        konferanslara da katıldım.</p>
                                </div>
                            </div>
                        </section>
                    </main>
                );
            case 'teknovol':
                return (
                    <main role="main" className="home">
                        <section className="container">
                            <div id="teknovol" className="row py-5">
                                <div
                                    className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start wow fadeInUp animated"
                                    data-wow-duration="1s" data-wow-delay="0s">
                                    <div>
                                        <img className="img-fluid" src="/images/teknovol.png" alt="Teknovol"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-8 wow fadeInUp animated" data-wow-duration="1s"
                                     data-wow-delay="0.3s">
                                    <p><a href="https://teknovol.com.tr" target="_blank"
                                          rel="noopener noreferrer">Teknovol</a>,
                                        web tasarım, SEM (Arama Motoru Reklamları), SEO (Arama Motoru Optimizasyonu),
                                        sosyal medya
                                        yönetimi,
                                        sosyal medya reklamları, içerik stratejisi oluşturma ve bu oluşturulan
                                        stratejiler pazarlama
                                        bütçeleri
                                        yönetimi gibi birçok alanda çalışmaktadır.</p>

                                    <p>Teknovol 'de öğrencilik sürecimde part-time Web Developer olarak birçok müşteri
                                        için responsive
                                        web tasarım, SEO çalışması ve sosyal medya
                                        yönetimi yaptım.</p>

                                    <p>Teknovol 'ün projesi olan Webmaster.Kitchen 'in geliştirilmesi konusunda detek
                                        oldum. Ayrıca
                                        yeni teknolojiler araştırmak ve
                                        öğrenmek için front-end, web development alanlarında birçok makale yazdım.</p>

                                    <p>Webmaster.Kitchen ekibiyle beraber Webmaster Meetup organizasyonu yaptık.
                                        Webmaster Meetup her
                                        ay web dünyasına, web teknolojilerine ilgi duyan profesyonellerin bir araya
                                        geldiği aylık
                                        buluşmalar serisidir.
                                        Her buluşma özel bir konu ve gündeme sahiptir. Konunun uzmanları tarafından
                                        anlatımlar
                                        yapılarak etkileşimli bir sohbet ortamında anlatımlar gerçekleştirilir.</p>
                                </div>
                            </div>
                        </section>
                    </main>
                );
            case 'testinium':
                return (
                    <main role="main" className="home">
                        <section className="container">
                            <div id="testinium" className="row py-5">
                                <div
                                    className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start wow fadeInUp animated"
                                    data-wow-duration="1s" data-wow-delay="0s">
                                    <div>
                                        <img className="img-fluid" src="/images/testinium.png" alt="Testinium"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-8 wow fadeInUp animated" data-wow-duration="1s"
                                     data-wow-delay="0.3s">
                                    <p><a href="https://testinium.com" target="_blank"
                                          rel="noopener noreferrer"><b>Testinium</b></a>,
                                        test otomasyonu konusunda planlama, raporlama ve yönetim arayüzü sunan bir ürün.
                                    </p>

                                    <p>Bu projenin otomasyon tarafında (testinium.io) Angular, TypeScript, CSS, HTML,
                                        jQuery,
                                        JavaScript, Bootstrap ve Git gibi teknolojileri/kütüphaneleri kullanarak
                                        projenin geliştirilmesi ve hatalarının çözülmesinde katkıda bulundum. </p>

                                    <p>Bu projenin web sitesini (testinium.com) Webpack, SCSS, ES6, EJS gibi
                                        teknolojiler kullanarak
                                        statik bir
                                        yapı geliştirilmesinde katkıda bulundum.</p>
                                </div>
                            </div>
                            <div id="loadium" className="row py-5">
                                <div
                                    className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start wow fadeInUp animated"
                                    data-wow-duration="1s" data-wow-delay="0s">
                                    <div>
                                        <img className="img-fluid" src="/images/loadium.png" alt="Loadium"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-8 wow fadeInUp animated" data-wow-duration="1s"
                                     data-wow-delay="0.3s">
                                    <p><a href="https://loadium.com" target="_blank"
                                          rel="noopener noreferrer"><b>Loadium</b></a>,
                                        yük testi yapmanızı ve yaptığınız testlerin raporlanması/yönetimini sağlayan bir
                                        ürün.</p>

                                    <p>Bu projenin otomasyon tarafında (loadium.io) Angular, TypeScript, CSS, HTML,
                                        jQuery,
                                        JavaScript, Bootstrap ve Git gibi teknolojileri/kütüphaneleri kullanarak
                                        projenin geliştirilmesi ve hatalarının çözülmesinde katkıda bulundum. </p>

                                    <p>Bu projenin web sitesini (loadium.com) WordPress kullanarak tasarladım.</p>
                                </div>
                            </div>
                            <div id="dashboard" className="row py-5">
                                <div
                                    className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start wow fadeInUp animated"
                                    data-wow-duration="1s" data-wow-delay="0s">
                                    <div>
                                        <img className="img-fluid" src="/images/dashboard.png" alt="QA Dashboard"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-8 wow fadeInUp animated" data-wow-duration="1s"
                                     data-wow-delay="0.3s">
                                    <p><b>QA Dashboard</b>, bir yazılım projesinin kalitesinin herkes tarafından
                                        okunabilir ve
                                        anlaşılabilir hale
                                        getirmek için farklı ortamlardan ve araçlardan kaliteyle ilgili ölçümleri
                                        toplayıp
                                        grafiklerle
                                        ve metrikleri gösteren bir ürün.</p>

                                    <p>Bu projede Angular, TypeScript, SCSS, HTML, JavaScript, NG Zorro, Echarts ve Git
                                        gibi
                                        teknolojileri/kütüphaneleri kullanarak
                                        projenin geliştirilmesinde etkin rol oynadım. </p>
                                </div>
                            </div>
                        </section>
                    </main>
                );
            default:
                return (
                    <div></div>
                );
        }
    }
}

export default PortfolioItem;
