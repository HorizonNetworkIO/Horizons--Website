import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Windows/Home';
import Economy from './Windows/Economy';

import MyParticles from './Components/MyParticles';

export var navRef = React.createRef();

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'home'
    }
  }

  componentDidMount() {
    if (localStorage.getItem("page") !== null) {
      this.setState({page: localStorage.getItem("page")});
      console.log("Page set to " + localStorage.getItem("page"));
    }

    document.title = 'HorizonNetwork.io';
    document.querySelector('meta[name="description"]').setAttribute("content", "HorizonNetwork.io Community Website");
  }

  setPageToHome() {
    this.setState({page: 'home'});
    localStorage.setItem("page", "home");
  }

  setPageToEconomy() {
    this.setState({page: 'economy'});
    localStorage.setItem("page", "economy");
  }

  render() {
    return (
      <div className='w-screen h-screen overflow-x-hidden'>
        <MyParticles />
        <div className="w-screen h-full mx-0 dark:bg-neutral-900 flex flex-col justify-between">
          <Navbar ref={navRef} />
          {this.state.page === 'home' ? <Home /> : <Economy />}
          <div className="mx-auto mt-auto mb-0 w-screen h-12 flex flex-col justify-center items-center z-50">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}