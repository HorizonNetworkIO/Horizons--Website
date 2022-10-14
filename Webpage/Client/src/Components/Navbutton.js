import React from 'react';

export default class Navbutton extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <button onClick={this.props.onClick} className="m-auto h-16 dark:text-neutral-100 z-50 text-md font-medium hover:dark:text-neutral-400 transition duration-300 ease-in-out"><p className='m-auto'>{this.props.text}</p></button>
            </React.StrictMode>
        );
    }
}