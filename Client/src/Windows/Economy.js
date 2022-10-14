import React from 'react';
import gun from './../Img/gun-solid.svg';

export default class Economy extends React.Component {
    constructor() {
        super();
        this.state = {
            info: {},
            single_weapon: "Fetching...",
            shipment_weapon: "Fetching...",
        }

        this.fetchServerInfo = this.fetchServerInfo.bind(this);
    }

    fetchServerInfo() {
        fetch('https://api.horizonnetwork.io/prices')
            .then(res => res.json())
            .then(data => {
                this.setState({ info: data, shipment_weapon: (data.shipment_multiple * 100) + "%", single_weapon: (data.shipment_single * 100) + "%", loaded: true });
            });
    }

    componentDidMount() {
        this.fetchServerInfo();
    }

    render() {
        return (
            <div className="m-auto w-5/6 h-5/6 flex flex-col items-center z-40">
                <div className='m-auto w-full h-20 flex text-s3lg font-bold mt-5 flex-col'>
                    <p className='text-bold text-white mx-auto text-s3lg'>DarkRP Economy</p>
                </div>
                <div className='h-full p-0 m-0 mt-10'>
                    <div className='mt-0 h-fit flex'>
                        <img src={gun} alt="gun" className='mx-auto h-10 my-auto invert' />
                    </div>
                    <div className='m-auto flex flex-col font-medium px-5 py-5 mt-10 rounded-lg border-2 border-red-900 space-y-5'>
                        <div className='w-full h-16 m-auto flex'>
                            <p className='bg-red-600 h-full w-full text-white text-s2lg m-auto pt-3 px-4 shadow-lg'>Singles %</p>
                            <p className='bg-red-800 h-full text-neutral-200 font-bold text-slg my-auto pt-4 px-4 shadow-lg'>{this.state.single_weapon}</p>
                        </div>

                        <div className='w-full h-16 m-auto flex'>
                            <p className='bg-red-600 h-full w-full text-white text-s2lg m-auto pt-3 px-4 shadow-lg'>Shipments %</p>
                            <p className='bg-red-800 h-full text-neutral-200 font-bold text-slg my-auto pt-4 px-4 shadow-lg'>{this.state.shipment_weapon}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}