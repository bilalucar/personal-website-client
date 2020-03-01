import React from 'react';

function Home() {
    return (
        <main role="main" className="home">
            <section className="container py-5">
                <div className="row">
                    <div
                        className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start wow fadeInUp animated"
                        data-wow-duration="1s" data-wow-delay="0s">
                        <h1 className="home__logo">Front End, JavaScript Developer - Bilal Uçar</h1>
                    </div>
                    <div className="col-12 col-md-8 wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.3s">
                        <p>Merhaba,</p>

                        <p>Ben Bilal Uçar. Testinium 'da Front End Developer olarak çalışıyorum. Yaptığım projenin
                            insanlar
                            tarafından sevilip kullanıldığını görmek, "Abi adamlar yapmış!" gibi cümleler duymak en
                            büyük
                            motivasyon kaynağım.</p>

                        <p>Çalıştığım bazı firma ve projeler:</p>
                    </div>
                </div>
            </section>
            <section className="container-fluid wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.3s">
                <div className="row home__work py-5">
                    <div className="col-6 col-md-3 p-0">
                        <a href="/portfolyo/testinium#testinium" className="home__work__item">
                            <img className="img-fluid" src="/images/testinium.png" alt="Testinium"/>
                            <span>Detaylar</span>
                        </a>
                    </div>
                    <div className="col-6 col-md-3 p-0">
                        <a href="/portfolyo/testinium#dashboard" className="home__work__item">
                            <img className="img-fluid" src="/images/dashboard.png" alt="Qa-Dashboard"/>
                            <span>Detaylar</span>
                        </a>
                    </div>
                    <div className="col-6 col-md-3 p-0">
                        <a href="/portfolyo/testinium#loadium" className="home__work__item">
                            <img className="img-fluid" src="/images/loadium.png" alt="Loadium"/>
                            <span>Detaylar</span>
                        </a>
                    </div>
                    <div className="col-6 col-md-3 p-0">
                        <a href="/portfolyo/teknovol" className="home__work__item">
                            <img className="img-fluid" src="/images/teknovol.png" alt="Teknovol"/>
                            <span>Detaylar</span>
                        </a>
                    </div>
                </div>
            </section>
            <section className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h3 className="home__title wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0s">
                            Yeteneklerim</h3>
                    </div>
                    <div className="col-12 col-md-8 wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.3s">
                        <h4>Front End Development</h4>
                        <p>Güncel teknolojileri kullanarak geliştirme yapıyorum ve en basit yöntemle karmaşık
                            problemleri çözmeye
                            çalışıyorum. Güncel teknolojileri deniyorum ve diğer teknolojilerle arasındaki performans
                            ve kullanım farklarıyla ilgileniyorum. Temiz kod yazmayı seviyorum. Bir projenin düzenli
                            yürümesi için Agile
                            yaklaşımlarının uygulanması taraftarıyım.</p>
                        <div className="row -small">
                            <div className="col-12 col-sm-6">
                                <p className="home__list-title bold">Yeteneklerim</p>
                                <ul>
                                    <li><p>HTML5, CSS, Bootstrap</p></li>
                                    <li><p>JavaScript, jQuery</p></li>
                                    <li><p>Angular 2+, React, Ionic</p></li>
                                    <li><p>SCSS, LESS</p></li>
                                    <li><p>Webpack</p></li>
                                    <li><p>WordPress</p></li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-6">
                                <p className="home__list-title bold">&nbsp;</p>
                                <ul>
                                    <li><p>TypeScript</p></li>
                                    <li><p>ES6</p></li>
                                    <li><p>Git (GitHub, GitLab)</p></li>
                                    <li><p>WebStorm</p></li>
                                    <li><p>JIRA</p></li>
                                    <li><p>Agile & Scrum</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h3 className="home__title wow fadeInUp animated" data-wow-duration="1s"
                            data-wow-delay="0s">Hakkımda</h3>
                    </div>
                    <div className="col-12 col-md-8 wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.3s">
                        <p>İlkokul 'da babamın eve bilgisayar almasıyla birlikte büyüklerin her bayram sorduğu o
                            standart soru olan
                            "Büyüyünce ne olmak istiyorsun?" sorusuna yanıt bulmuştum. Bilgisayar başında saatlerce
                            vakit geçirip sıkılmadan
                            ücretsiz web siteleri açıp hazır HTML kodlarını yapıştırarak kendimce web sitesi
                            tasarlıyordum.</p>

                        <p>Lisede biraz daha ilerletip WordPress, Blogger gibi platformlarla çalıştım. HTML, CSS
                            JavaScript gibi
                            teknolojileri hazır tasarımlar üzerinde değişiklik yaparak devam ettim.</p>

                        <p>Üniversiteyi Süleyman Demirel Üniversitesi, Bilgisayar Mühendisliği bölümünde okudum. Burada
                            farklı programlama
                            dilleri ve teknolojilerle uğraştım. Üniversite okurken sektörle alakalı farklı eğitimlere ve
                            etkinliklere katılmaya çalıştım. </p>

                        <p>Üniversiteye devam ederken Isparta 'da TEKNOVOL adında bir dijital ajansta
                            part-time olarak çalıştım. TEKNOVOL 'de WordPress başta olmak üzere HTML, CSS, JS, SEO
                            alanlarında çalıştım.
                            Çalışmalarımdan öğrendiklerimi bu ajansın bir projesi olan&nbsp;<a
                                href="https://webmaster.kitchen/author/bilal">webmaster.kitchen</a>&nbsp;
                            'de makale olarak yazdım. Web ile ilgili konularda aylık toplantıların yapıldığı, yeni
                            teknolojilerin konuşulduğu
                            Webmaster Meetup 'lar düzenledik. Aktif olarak organizatör görevi üstlendim.</p>

                        <p>Üniversite bittikten sonra staj yaptığım yer olan, eski adıyla Saha Bilgi Teknolojileri 'nde
                            çalışmaya başladım ve hala çalışmaktayım. Angular, React, Webpack, SCSS, ES6 gibi
                            teknolojilerle çalışıyorum.</p>
                    </div>
                </div>
            </section>
            <section className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h3 className="home__title wow fadeInUp animated" data-wow-duration="1s"
                            data-wow-delay="0s">İletişim</h3>
                    </div>
                    <div className="col-12 col-md-8 wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.3s">
                        <p>Benimle iletişime geçmek istiyorsanız, aşağıdaki iletişim seçeneklerinden birini
                            kullanabilirsiniz.
                            Size en kısa zamanda yanıt vermeye çalışacağım.</p>
                        <p><a href="mailto:mail@bilalucar.com">mail@bilalucar.com</a></p>
                        <p><a href="tel:+905398651530" className="bold">+90 539 865 1530</a></p>
                        <p>Ataşehir/İstanbul</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
