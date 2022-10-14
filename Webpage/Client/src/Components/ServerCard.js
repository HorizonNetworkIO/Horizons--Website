import React from 'react';
import userSolid from './../Img/users-solid.svg';

export default class ServerCard extends React.Component {
    constructor()
    {
        super();
        this.state = {
            info: {},
            players: "Fetching server..."
        }

        this.fetchServerInfo = this.fetchServerInfo.bind(this);
    }

    componentDidMount()
    {
        this.fetchServerInfo();

        clearInterval(this.interval ? this.interval : null);

        this.interval = setInterval(() => {
            this.fetchServerInfo();
        }, 5000);
    }

    fetchServerInfo()
    {
        fetch('SERVER_BACKEND_URL_INSERT_HERE')
            .then(res => res.json())
            .then(data => {
                this.setState({ info: data, players: data.players + "/" + data.maxplayers });
            });
    }

    render() {
        return (
            <div className='flex flex-col w-fit px-20 md:h-1/3 m-auto mb-auto md:mt-auto mt-0 h-1/6 lg:mt-12'>
                <div className='text-center bg-neutral-800 md:rounded-br-none md:rounded-bl-none rounded-md py-3 px-10 shadow-2xl'>
                    <h1 className="text-neutral-200 text-lg font-bold">DarkRP</h1>
                    <h2 className='text-base text-neutral-300 mt-3 font-medium mb-0 w-full'>darkrp.horizonnetwork.io:27015</h2>
                    <span className='text-sm text-red-700 mt-3 font-semibold flex flex-row justify-center w-fit mx-auto space-x-5'><img className='w-5 h-5 p-0 m-auto invert' src={userSolid} alt="" /> <p className='m-auto font-bold'>{this.state.players}</p></span>
                </div>
                <div className='w-full h-12 mt-0 mb-auto rounded-tl-none rounded-tr-none rounded-md bg-red-800 shadow-2xl hover:bg-red-900 transition-all duration-200 hidden md:block'> 
                    <button className='w-full h-full' onClick={() => {window.open('steam://connect/darkrp.horizonnetwork.io:27015', '_blank').focus()}}>
                        <h1 className='font-semibold text-slg dark:text-neutral-200'>Click to Join server!</h1>
                    </button>
                </div>
            </div>
        );
    }
}