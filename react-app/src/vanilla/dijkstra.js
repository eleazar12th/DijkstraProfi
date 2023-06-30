import { Heap } from "heap-js";

const INF = 1000;

const edges = [
    null,
    {2: 7, 3: 9, 6: 14},
    {3: 10, 4: 15},
    {4: 11, 6: 2},
    {5: 6},
    {6: 9},
    {}
];

const n = 6;
const start = 1;

export default function Dijkstra() {
    let dist = Array(n + 1).fill(INF);
    let processed = Array(n + 1).fill(false);

    const customPriorityComparator = (a, b) => a[0] - b[0];
    let heap = new Heap(customPriorityComparator);

    dist[start] = 0;
    heap.push([dist[start], start]);
    while (!heap.isEmpty()) {
        let [w, v] = heap.pop();
        if (processed[v]) {
            continue;
        }

        processed[v] = true;
        console.log(v);
        console.log(edges[v]);
        for (let [u, w] of edges[v]) {
            if (!processed[u] && dist[v] + w < dist[u]) {
                dist[u] = dist[v] + w;
                heap.push([dist[u], u]);
            }
        }
    }
}