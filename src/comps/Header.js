import * as React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Header() {
    // nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 " style={{ background: "#0D0D3F" }}>
    // <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
    return (
        <React.Fragment>
            <div style={{ background: "#0D0D3F" }}>
                <div class="px-4 flex flex-wrap justify-between items-center m-auto max-w-screen-2xl" style={{height: 70}}>
                    <a href="https://flowbite.com" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    </a>
                    {/* <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <Link to="/" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                        </li>
                    </ul> */}
                    <div className='flex'>
                        <p className='px-4 rounded flex items-center' style={{ backgroundColor: "#20225B", height: 34 }}>0.000001 USDT</p>
                        <p className='px-4 rounded flex items-center mx-4' style={{ backgroundColor: "#20225B", height: 34 }}>100 USDC</p>
                        <p className='px-4 rounded flex items-center mr-4' style={{ backgroundColor: "#20225B", height: 34 }}>1000000 SHIBS</p>
                        <Button className='' variant="contained" href="#contained-buttons" color="info" style={{ borderRadius: 50 }}>Buy Shibs
                        </Button>
                    </div>
                    <div class="flex items-center lg:order-2">
                        <Button variant="contained" href="#contained-buttons" color="warning" style={{ borderRadius: 50 }}>Login With Metamask
                        </Button>
                        <a href="#" class="lg:hidden text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a>
                        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}