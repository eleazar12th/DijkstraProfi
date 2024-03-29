import { Heap } from "heap-js";
import State from "./structures/state";
import * as cst from "./values/constants";

function findEdgesAmount(n, edges) {
    let edgesCount = 0;
    for (let v = 1; v <= n; ++v) {
        edgesCount += edges[v].length;
    }
    return edgesCount;
}

export default function Dijkstra(n, edges, start) {
    let states = [];
    let dist = Array(n + 1).fill(cst.INF);
    let nodeColors = Array(n + 1).fill(cst.WHITE);
    const edgesAmount = findEdgesAmount(n, edges);
    let edgeColors = Array(edgesAmount).fill(cst.BLACK);

    let redFlag = false;

    function pushState(description) {
        let newState = new State(
            [...dist], [...nodeColors], [...edgeColors], description
        );
        states.push(newState);
    }

    function turnEdgesRed(v) {
        for (let e of edges[v]) {
            if (nodeColors[e.to] !== cst.GREEN) {
                redFlag = true;
                edgeColors[e.id] = cst.RED;
            }
        }
    }

    function turnEdgesBlack(v) {
        redFlag = false;
        for (let e of edges[v]) {
            edgeColors[e.id] = cst.BLACK;
        }
    }

    const customComparator = (el1, el2) => el1[0] - el2[0];
    let heap = new Heap(customComparator);

    dist[start] = 0;
    heap.push([dist[start], start]);
    nodeColors[start] = cst.VIOLET;

    pushState();

    while (!heap.isEmpty()) {
        let v = heap.pop()[1];
        if (nodeColors[v] === cst.GREEN) {
            continue;
        }

        nodeColors[v] = cst.GREEN;
        pushState();

        turnEdgesRed(v);
        if (redFlag)
            pushState();

        for (let e of edges[v]) {
            if (nodeColors[e.to] !== cst.GREEN) {
                nodeColors[e.to] = cst.VIOLET;

                if (dist[v] + e.length < dist[e.to]) {
                    dist[e.to] = dist[v] + e.length;
                    heap.push([dist[e.to], e.to]);
                }
            }
        }

        if (redFlag) {
            pushState();
            turnEdgesBlack(v);
            pushState();
        }
    }

    pushState();
    return states;
}