import React from 'react';
import Header from './../Components/Header';

export default class Home extends React.Component {
    render() {
        return (
            <div className="m-auto w-5/6 h-5/6 flex flex-col items-center z-40 overflow-hidden">
                <Header />
            </div>
        )
    }
}