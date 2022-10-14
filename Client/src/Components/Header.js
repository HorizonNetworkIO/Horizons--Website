import React from 'react';
import ServerCard from './ServerCard';
import logo from './../Img/logo.png';

export default class Header extends React.Component {
    render() {
        return (
            <div className='flex flex-col justify-between h-full overflow-hidden'>
                <div className='text-center m-auto h-1/2 mt-auto'>
                    <img src={logo} alt="logo" className='m-auto h-48 md:mt-3' />
                    <h1 className="md:text-s3lg dark:text-neutral-200 font-bold text-slg">Welcome to <span className='text-red-700'>Horizon Network</span>,</h1>
                    <h2 className='md:text-s2lg dark:text-neutral-300 mt-3 font-medium text-ssm'>The only DarkRP server you'll ever want to play!</h2>
                </div>

                <ServerCard />
            </div>
        );
    }
}