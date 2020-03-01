import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Blog from './Blog';
import Portfolio from './Portfolio';
import BlogDetail from './Blog-Detail';
import PortfolioItem from '../components/Portfolio-Item';
import Footer from '../components/Footer';

class App extends React.Component<any, any> {

    render() {
        return (
            <div className="App">
                <Router>
                    <div id="header" className="header">
                        <div className="header__menu">
                            <Link id="home" className="header__menu-item" to="/">Anasayfa</Link>
                            <Link id="portfolio" className="header__menu-item" to="/portfolyo">Portfolyo</Link>
                            <Link className="header__menu-item" to="/blog">Blog</Link>
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
