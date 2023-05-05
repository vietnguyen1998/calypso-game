import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Home from './screens/home';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import coin_image from './images/coin.png'
import { Divider } from '@mui/material';
import StickyHeadTable from "./comps/Table";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="h-full">
        {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
        <Routes className="h-full">
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

function Layout() {
  return (
    <div class="h-full" style={{ background: "#0D0D3F" }}>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 " style={{ background: "#0D0D3F" }}>
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
            <a href="https://flowbite.com" class="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link to="/" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                </li>
                <li>
                  <Link to="/about" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                </li>
              </ul>
            </a>
            <div class="flex items-center lg:order-2">
              <Button variant="contained" href="#contained-buttons" color="warning" style={{ borderRadius: 50 }}>Log In
              </Button>
              <a href="#" class="lg:hidden text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a>
              <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav> */}

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <body class="">
        <nav class="h-full border-gray-200 px-4 lg:px-6 py-2.5 " style={{ background: "#0D0D3F"}}>
          <div class="flex h-full max-w-screen-2xl mx-auto">
            <div id="h-full  h-full" style={{ width: "100%" }}>
              <div className="h-full">
                <div className="" id="game_zone">
                  <Outlet />
                </div>
                <div className="h-full mt-4" >
                 <StickyHeadTable />
                </div>
              </div>
            </div>
            <div className="ml-6 h-full" style={{ width: 600 }}>
              <div className="h-full w-full px-6 py-4" id="rightBackground" >
                <img src={coin_image} alt="coin" className="mt-2 mb-4"/>
                <Divider />
                <p className="text-white mb-2 mt-8">Bet amount (0.01-2,000)</p>
                <TextField
                  required
                  id="outlined-required"
                  className="w-full"
                  size="medium"
                  defaultValue="0.01"
                />
                <div className="mt-2 flex items-center mb-6">
                  <Button variant="text" style={{background: "#090B3D"}}>Clear</Button>
                  <Button variant="text" style={{background: "#090B3D", margin: "0px 12px"}}>+10</Button>
                  <Button variant="text"  style={{background: "#090B3D"}} className="my-2">+100</Button>
                  <Button variant="text" style={{background: "#090B3D", margin: "0px 12px"}}> +1k</Button>
                  <Button variant="text"  style={{background: "#090B3D"}} className="my-2">x2</Button>
                </div>
                <p className="text-white mb-2">Auto cashout (min 1.1)</p>
                <TextField
                  required
                  id="outlined-required"
                  className="w-full"
                  defaultValue="1.1"
                />
                <Button
                  className="w-full rounded mt-8"
                  size="large"
                  style={{borderRadius: 50, marginTop: 20, fontWeight: "bold", height: 48}}
                  color="warning"
                  variant="contained">Play</Button>
              </div>
            </div>
          </div>
        </nav>
      </body>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}