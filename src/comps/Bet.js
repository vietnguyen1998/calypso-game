import * as React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import coin_image from './../images/coin.png'
import { Divider } from '@mui/material';

export default function Bet() {
    return (
        <React.Fragment>
            <div className="">
                <div className=" w-full px-6 py-4" id="rightBackground" >
                    <img src={coin_image} alt="coin" className="mt-2 mb-4" />
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
                        <Button variant="text" style={{ background: "#090B3D" }}>Clear</Button>
                        <Button variant="text" style={{ background: "#090B3D", margin: "0px 12px" }}>+10</Button>
                        <Button variant="text" style={{ background: "#090B3D" }} className="my-2">+100</Button>
                        <Button variant="text" style={{ background: "#090B3D", margin: "0px 12px" }}> +1k</Button>
                    </div>
                    <p className="text-white mb-2">Auto cashout (min 1.1)</p>
                    <TextField
                        required
                        id="outlined-required"
                        className="w-full"
                        defaultValue="1.1"
                    />
                    <Button
                        className="w-full rounded mt-8 button-background"
                        size="large"
                        style={{ borderRadius: 50, marginTop: 20, fontWeight: "bold", height: 48 }}
                        variant="contained">Play</Button>
                </div>
            </div>
        </React.Fragment >
    )
}
