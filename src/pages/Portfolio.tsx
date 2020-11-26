import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <main role="main" className="portfolyo">
            <section className="container">
                <div className="row pt-5">
                    <div className="col-12">
                        <h3 className="home__title wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0s">
                            Deneyim</h3>
                    </div>
                </div>
                <div className="row py-4">
                    <div
                        className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start wow fadeInUp animated"
                        data-wow-duration="1s" data-wow-delay="0s">
                        <div>
                            <img className="img-fluid" src="/images/gittigidiyor.png" alt="Testinium"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.3s">
                        <div className="portfolyo__item-content">
                            <p><b>Front-end Engineer, Full Tıme</b></p>
                            <p>GittiGidiyor.com, eBay ailesinin bir üyesi olup,
                                alıcılarla satıcıları buluşturan bir e-ticaret sitesidır.</p>
                            <p>11/2020 – Devam Ediyor</p>
                        </div>
                    </div>
                </div>
                <div className="row py-4">
                    <div
                        className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start wow fadeInUp animated"
                        data-wow-duration="1s" data-wow-delay="0s">
                        <div>
                            <img className="img-fluid" src="/images/testinium.png" alt="Testinium"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.3s">
                        <div className="portfolyo__item-content">
                            <p><b>Front-end Developer, Full Tıme</b></p>
                            <p>Testinium, Loadium, QA Dashboard gibi ürünleri geliştiren aynı zamanda danışmanlık
                                ve eğitim gibi hizmetleri de veren Saha Bilgi Teknolojileri 'nde Front-end Developer
                                olarak çalıştım.</p>
                            <p>07/2018 – 11/2020</p>
                            <div className="portfolyo__read-more">
                                <Link to="/portfolyo/testinium">Detaylar >></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-4">
                    <div
                        className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start wow fadeInUp animated"
                        data-wow-duration="1s" data-wow-delay="0s">
                        <div>
                            <img className="img-fluid" src="/images/teknovol.png" alt="Teknovol"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.3s">
                        <div className="portfolyo__item-content">
                            <p><b>Web Developer, Part Time</b></p>
                            <p><a href="https://teknovol.com.tr" target="_blank" rel="noopener noreferrer">Teknovol</a>,
                                bir Dijital İnteraktif Ajans ve Web Tasarım şirketidir. Üniversitedeyken part time
                                olarak
                                Teknovol 'de Web Developer pozisyonunda çalıştım.</p>
                            <p>10/2016–07/2018</p>
                            <div className="portfolyo__read-more">
                                <Link to="/portfolyo/teknovol">Detaylar >></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row pt-5">
                    <div className="col-12">
                        <h3 className="home__title wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0s">
                            Eğitim</h3>
                    </div>
                </div>
                <div className="row py-4">
                    <div
                        className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start wow fadeInUp animated"
                        data-wow-duration="1s" data-wow-delay="0s">
                        <div>
                            <img className="img-fluid" src="/images/sdu.png" alt="Testinium"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.3s">
                        <div className="portfolyo__item-content">
                            <p><b>Süleyman Demirel Üniversitesi, Bilgisayar Mühendisliği</b></p>
                            <p>2014 yılında Isparta Süleyman Demirel Üniversitesi, Bilgisayar Mühendisliği bölümünü
                                kazandım.
                                4 yıllık lisans eğitimimin ardından 2018 yılında mezun oldum.</p>
                            <p>09/2014 – 06/2018</p>
                            <div className="portfolyo__read-more">
                                <Link to="/portfolyo/sdu">Detaylar >></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Portfolio;
