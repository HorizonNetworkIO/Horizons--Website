import React from 'react';
import Navbutton from './Navbutton';
import NavbarMenu from './NavbarMenu';
import logo from './../Img/logo.png';
import {appRef} from './../index';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        }

        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        this.setState({
            toggled: !this.state.toggled
        });
    }

    render() {
        return (
            <nav className='m-3 rounded w-fill h-16 bg-neutral-800 flex flex-nowrap justify-between z-50'>
                <div className='mx-10 flex justify-between'>
                    <button onClick={() => {appRef.current.setPageToHome();}} className='text-neutral-100 flex my-auto space-x-3 cursor-pointer font-bold text-lg hover:text-neutral-400 transition-all duration-300'>
                        <img src={logo} alt='Horizon Network' className='w-16 h-16' />
                        <h1 className='m-auto hidden md:block'>Horizon Network</h1>
                    </button>
                </div>
                <div className='flex justify-between flex-col h-fit'>
                    <div className='hidden md:block m-auto space-x-8 mr-8'>
                        <Navbutton text='Forums' onClick={() => {window.open('https://forums.horizonnetwork.io', '_blank').focus()}} />
                        <Navbutton text='Store' onClick={() => {window.open('https://store.horizonnetwork.io', '_blank').focus()}} />
                        <Navbutton text='Economy' onClick={() => {appRef.current.setPageToEconomy();}} />
                        <Navbutton text='Discord' onClick={() => {window.open('https://discord.horizonnetwork.io', '_blank').focus()}} />
                        <Navbutton text='Steam Group' onClick={() => {window.open('https://steam.horizonnetwork.io', '_blank').focus()}} />
                    </div> 
                    <div className='md:hidden sm:block my-auto mx-auto mr-12'>
                        <button className='h-16 m-auto' onClick={this.toggleNavbar}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 dark:text-neutral-100 my-auto cursor-pointer hover:text-neutral-400 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <NavbarMenu open={this.state.toggled} />
                </div>
            </nav>
        );
    }
}