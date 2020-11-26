import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Blog from './Blog';
import Portfolio from './Portfolio';
import BlogDetail from './Blog-Detail';
import PortfolioItem from '../components/Portfolio-Item';
import Footer from '../components/Footer';
import SvgHome from "../components/icons/Home";
import SvgSuitcase from "../components/icons/Suitcase";
import SvgWriting from "../components/icons/Writing";
import SvgContact from "../components/icons/Contact";
import SvgCv from "../components/icons/Cv";
import SvgHomeFilled from "../components/icons/HomeFilled";
import SvgSuitcaseFilled from "../components/icons/SuitcaseFilled";
import SvgWritingFilled from "../components/icons/WritingFilled";
import SvgCvFilled from "../components/icons/CvFilled";
import SvgContactFilled from "../components/icons/ContactFilled";

class App extends React.Component<any, any> {

    render() {
        return (
            <div className="App">
                <Router>
                    <div id="header" className="header">
                        <div className="header__menu">
                            <Link id="home" className="header__menu-item" to="/">
                                <SvgHomeFilled/>
                                <span>Anasayfa</span>
                            </Link>
                            <Link id="portfolio" className="header__menu-item" to="/portfolyo">
                                <SvgSuitcaseFilled/>
                                <span>Portfolyo</span>
                            </Link>
                            <Link className="header__menu-item" to="/blog">
                                <SvgWritingFilled/>
                                <span>Blog</span>
                            </Link>
                            <Link className="header__menu-item" target="_blank" to="/files/bilal-ucar-cv.pdf">
                                <SvgCvFilled/>
                                <span>CV</span>
                            </Link>
                            <a className="header__menu-item" href="/#contact">
                                <SvgContactFilled/>
                                <span>İletişim</span>
                            </a>
                        </div>
                    </div>

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/portfolyo" component={Portfolio}/>
                        <Route exact path="/blog" component={Blog}/>
                        <Route exact path="/blog/:postId" component={BlogDetail}/>
                        <Route exact path="/portfolyo/:portfolioId" component={PortfolioItem}/>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default App;
