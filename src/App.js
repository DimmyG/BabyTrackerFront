import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
//import About from "./pages/About";
//import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import { Navbar, Sidebar, Footer } from './components'
import { GlobalsProvider } from './context/globals_context';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        // this.state = { babies: [], loading: true };
    }

    componentDidMount() {
        // this.populateBabiesData();
    }


    render() {
        return (
            <GlobalsProvider>
                <Router>
                    <Navbar />
                    <Sidebar />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        {/* <Route path="/feedings">
                            <About />
                        </Route> */}
                        <Route path="*">
                            <Error />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </GlobalsProvider>
        );
    }

    // async populateBabiesData() {
    //     const response = await fetch('babies');
    //     const data = await response.json();
    //     console.log(data);
    //     this.setState({ babies: data, loading: false });
    // }
}
