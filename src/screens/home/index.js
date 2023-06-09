import React from "react";
import './index.css';
// import './js/main.js';
import img_player from '../../images/player.png'
import img_layer1 from '../../images/layer-1.png'
import img_layer2 from '../../images/layer-2.png'
import img_layer3 from '../../images/layer-3.png'
import img_layer4 from '../../images/choochoo05.jpg'
import img_layer5 from '../../images/track4.png'
import { eventCanvas } from "./js/main";
function App() {
    const canvasRef = React.useRef(null);

    React.useEffect(()=>{
        const canvas = canvasRef.current;
        eventCanvas(canvas)
    },[])
    return (
        <div>
            <canvas ref={canvasRef} id="canvas1"></canvas>
            <img id="player" alt="player" src={img_player}></img>
            {/* <img id="layer1" alt="layer1" src={img_layer1}></img>
            <img id="layer2" alt="layer2" src={img_layer2}></img>
            <img id="layer3" alt="layer3" src={img_layer3}></img> */}
            <img id="layer4" alt="layer4" src={img_layer4}></img>
            <img id="layer5" alt="layer5" src={img_layer5}></img>
        </div>
    );
}

export default App;
