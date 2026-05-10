import React from 'react';
import logo from '../assets/logo.png';

const NavBar = () => {
    const menuItems = [
        { label: 'Home', href: '#', hideAt: 'md' },           
        { label: 'About', href: '#', hideAt: 'lg' },         
        { label: 'Services', href: '#', hideAt: 'xl' },    
        { label: 'Portfolio', href: '#', hideAt: 'xl' },      
        { label: 'Contact', href: '#', hideAt: '2xl' },     
    ];

    const getHideClass = (hideAt) => {
        const classMap = {
            'md': 'hidden md:flex',
            'lg': 'hidden lg:flex',
            'xl': 'hidden xl:flex',
            '2xl': 'hidden 2xl:flex',
        };
        return classMap[hideAt] || 'hidden md:flex';
    };

    const getMoreItemClass = (hideAt) => {
        const classMap = {
            'md': 'md:hidden',
            'lg': 'lg:hidden',
            'xl': 'xl:hidden',
            '2xl': '2xl:hidden',
        };
        return classMap[hideAt] || 'md:hidden';
    };

    return (
        <div className="navbar flex justify-between bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="flex">
                <img src={logo} alt="Logo" className="h-10 w-10" />
                <a className="btn btn-ghost text-xl">Md.Ashraful Alam Rayhan</a>
            </div>

            <div className="flex-none md:hidden">
                <div className="dropdown dropdown-end">
                    <button tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems.map((item, idx) => (
                            <li key={idx}><a href={item.href}>{item.label}</a></li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex-none hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems.map((item, idx) => (
                        <li key={idx} className={getHideClass(item.hideAt)}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}

                    <li className="dropdown dropdown-end">
                        <details>
                            <summary>More</summary>
                            <ul className="bg-base-100 rounded-t-none p-2 min-w-48">
                                {menuItems.map((item, idx) => (
                                    <li key={idx} className={getMoreItemClass(item.hideAt)}>
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;