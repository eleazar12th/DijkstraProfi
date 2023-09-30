import { useEffect, useState, useMemo } from "react";
import GraphConstructor from "./components/GraphConstructor";
import Dijkstra from "./dijkstra";
import * as defaultVal from "./values/default-values";

export default function App(props) {
    const start = 1;

    const graphStates = useMemo(
        () => Dijkstra(defaultVal.N, defaultVal.EDGES, start),
        [start]
    );

    return (<div>
        <h1>Dijkstra visualisation</h1>
        <GraphConstructor edgesMap={defaultVal.EDGES} graphState={graphStates[2]}/>
    </div>);
}