import React, { useEffect, useState } from "react";
import GraphVisualisation from "./components/GraphVisualisation";
import Dijkstra from "./vanilla/dijkstra";
import Test from "./vanilla/test";

export default function App(props) {
    const nodesColors = ["blue", "pink", "lightgreen"];
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        Dijkstra();
        /*const interval = setInterval(() => {
            setColorIndex((colorIndex + 1) % 3)
        }, props.time * 1000);
        return () => clearInterval(interval);*/
    }, [colorIndex, props.time]);

    return (<div>
        <GraphVisualisation nodesColor={nodesColors[colorIndex]} />
    </div>);
}