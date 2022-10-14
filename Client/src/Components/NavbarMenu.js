import React from 'react';
import Navbutton from './Navbutton';
import {appRef} from './../index';
import {navRef} from './../App';

export default class NavbarMenu extends React.Component {
    render() {
        return (
            <React.StrictMode>
                {this.props.open === true && (
                    <div className="sm:block md:hidden py-4 px-3 mt-4 mr-3 mx-auto bg-neutral-800 border-red-800 border-2 rounded-lg z-50 relative">
                        <div className='m-auto space-y-4 flex flex-col z-50'>
                            <Navbutton text='Forums' onClick={() => {window.open('https://forums.horizonnetwork.io', '_blank').focus()}} />
                            <Navbutton text='Store' onClick={() => {window.open('https://store.horizonnetwork.io', '_blank').focus()}} />
                            <Navbutton text='Economy' onClick={() => {appRef.current.setPageToEconomy(); navRef.current.toggleNavbar();}} />
                            <Navbutton text='Discord' onClick={() => {window.open('https://discord.horizonnetwork.io', '_blank').focus()}} />
                            <Navbutton text='Steam Group' onClick={() => {window.open('https://steam.horizonnetwork.io', '_blank').focus()}} />
                        </div> 
                    </div>
                )}
            </React.StrictMode>
        );
    }
}