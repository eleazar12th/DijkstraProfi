import React, { useEffect, useState } from "react";
import "Math";
import GraphVisualisation from "./components/GraphVisualisation";
import { Edge, Dijkstra } from "./vanilla-js/dijkstra";

const edges = {
    1: [
        new Edge(1, 2, 7),
        new Edge(2, 3, 9),
        new Edge(3, 6, 14)
    ],
    2: [
        new Edge(4, 3, 10),
        new Edge(5, 4, 15)
    ],
    3: [
        new Edge(6, 4, 11),
        new Edge(7, 6, 2)
    ],
    4: [
        new Edge(8, 5, 6)
    ],
    5: [
        new Edge(9, 6, 9)
    ],
    6: []
}
const n = 6;
const start = 1;

export default function App(props) {
    const nodesColors = ["blue", "pink", "lightgreen"];
    const [Index, setIndex] = useState(0);
    const [graphStates, setGraphStates] = useState([]);

    useEffect(() => {
        setGraphStates(Dijkstra(n, edges, start));
        const interval = setInterval(() => {
            setIndex(Math.min(Index + 1, graphStates.length));
        }, props.time * 1000);
        return () => clearInterval(interval);
    }, [Index, graphStates, props.time]);

    return (<div>
        <GraphVisualisation edges={edges} graphState={graphStates[Index]} />
    </div>);
}