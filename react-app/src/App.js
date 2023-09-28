import React, { useEffect, useState } from "react";
import GraphVisualisation from "./components/GraphVisualisation";
// import { Edge, State, Dijkstra } from "./vanilla-js/dijkstra";

/*const edges = {
    1: [
        new Edge(0, 2, 7),
        new Edge(1, 3, 9),
        new Edge(2, 6, 14)
    ],
    2: [
        new Edge(3, 3, 10),
        new Edge(4, 4, 15)
    ],
    3: [
        new Edge(5, 4, 11),
        new Edge(6, 6, 2)
    ],
    4: [
        new Edge(7, 5, 6)
    ],
    5: [
        new Edge(8, 6, 9)
    ],
    6: []
}
const n = 6;
const start = 1;*/

export default function App() {
    /*const nodesColors = ["blue", "pink", "lightgreen"];
    const [Index, setIndex] = useState(0);
    const [graphStates, setGraphStates] = useState([]);

    useEffect(() => {
        setGraphStates(Dijkstra(n, edges, start));
    }, []);

    function buttonOnClick() {
        const interval = setInterval(() => {
            setIndex(Math.min(Index + 1, graphStates.length));
        }, props.time * 1000);
        return () => clearInterval(interval);
    }*/

    return (<div>
        <GraphVisualisation />
    </div>);
}