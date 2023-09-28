import { Heap } from "heap-js";

const INF = 1000000;

/*export class Edge {
    constructor(id, to, length) {
        this.id = id;
        this.to = to;
        this.length = length;
    }
}

const defaultEdges = {
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

const defaultN = 6;
const defaultStart = 1;

const WHITE = "lightblue";
const BLACK = "black";
const GREEN = "lightgreen";
const RED = "red";
const VIOLET = "blue";

export class State {
    constructor(currDist, nodeColors, edgeColors) {
        this.currDist = currDist;
        this.nodeColors = nodeColors;
        this.edgeColors = edgeColors;
    }
}

function findEdgesAmount(n, edges) {
    let edgesCount = 0;
    for (let v = 1; v <= n; ++v) {
        edgesCount += edges[v].length;
    }
    return edgesCount;
}

export function Dijkstra(n=defaultN, edges=defaultEdges, start=defaultStart) {
    let states = [];
    let dist = Array(n + 1).fill(INF);
    let nodeColors = Array(n + 1).fill(WHITE);
    const edgesAmount = findEdgesAmount(n, edges);
    let edgeColors = Array(edgesAmount).fill(BLACK);

    function pushState() {
        let newState = new State([...dist], [...nodeColors], [...edgeColors]);
        states.push(newState);
    }

    const customComparator = (el1, el2) => el1[0] - el2[0];
    let heap = new Heap(customComparator);

    dist[start] = 0;
    heap.push([dist[start], start]);
    nodeColors[start] = VIOLET;

    pushState();

    while (!heap.isEmpty()) {
        let v = heap.pop()[1];
        if (nodeColors[v] === GREEN) {
            continue;
        }

        nodeColors[v] = GREEN;
        pushState();

        for (let e of edges[v]) {
            if (nodeColors[e.to] !== GREEN) {
                edgeColors[e.id] = RED;
                nodeColors[e.to] = VIOLET;

                if (dist[v] + e.length < dist[e.to]) {
                    dist[e.to] = dist[v] + e.length;
                    heap.push([dist[e.to], e.to]);
                }
            }
        }
        pushState();
    }

    return states;
}*/