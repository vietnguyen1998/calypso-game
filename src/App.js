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
import Header from "./comps/Header";
import logo from './logo.svg';
import Bet from "./comps/Bet";
import History from "./comps/History";
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes className="">
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

function Layout() {
  return (
    <div className="App bg-red-300">
      <div className="mygrid" style={{ background: "#0D0D3F" }}>
        <Header />
        <div className="downBackgound py-4">
          <div class="flex max-w-screen-2xl mx-auto rounded px-5 py-2.5 h-full" style={{ background: "#0D0D3F" }}>
            <div class="grid_body overflow-y-scroll">
              <div className="" style={{ marginRight: "12px" }}>
                <div className="" id="game_zone">
                  <Outlet />
                </div>
                <div className="mt-4">
                  <History />
                </div>
              </div>
              <div style={{ background: "#20225B" }}>
                <Bet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <React.Fragment>
    //   {/* An <Outlet> renders whatever child route is currently active,
    //       so you can think about this <Outlet> as a placeholder for
    //       the child routes we defined above. */}
    //     <div class="h-full border-gray-200 px-4 lg:px-6 py-2.5 ">
    //       <div class="flex max-w-screen-2xl mx-auto">
    //         <div id="" style={{ width: "100%" }}>
    //           <div className="">
    //             <div className="" id="game_zone">
    //               <Outlet />
    //             </div>
    //             <div className=" mt-4" >
    //             </div>
    //           </div>
    //         </div>
    //         <div className="ml-6 " style={{ width: 600 }}>
    //           <div className=" w-full px-6 py-4" id="rightBackground" >
    //             <img src={coin_image} alt="coin" className="mt-2 mb-4" />
    //             <Divider />
    //             <p className="text-white mb-2 mt-8">Bet amount (0.01-2,000)</p>
    //             <TextField
    //               required
    //               id="outlined-required"
    //               className="w-full"
    //               size="medium"
    //               defaultValue="0.01"
    //             />
    //             <div className="mt-2 flex items-center mb-6">
    //               <Button variant="text" style={{ background: "#090B3D" }}>Clear</Button>
    //               <Button variant="text" style={{ background: "#090B3D", margin: "0px 12px" }}>+10</Button>
    //               <Button variant="text" style={{ background: "#090B3D" }} className="my-2">+100</Button>
    //               <Button variant="text" style={{ background: "#090B3D", margin: "0px 12px" }}> +1k</Button>
    //               <Button variant="text" style={{ background: "#090B3D" }} className="my-2">x2</Button>
    //             </div>
    //             <p className="text-white mb-2">Auto cashout (min 1.1)</p>
    //             <TextField
    //               required
    //               id="outlined-required"
    //               className="w-full"
    //               defaultValue="1.1"
    //             />
    //             <Button
    //               className="w-full rounded mt-8"
    //               size="large"
    //               style={{ borderRadius: 50, marginTop: 20, fontWeight: "bold", height: 48 }}
    //               color="warning"
    //               variant="contained">Play</Button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    // </React.Fragment>
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