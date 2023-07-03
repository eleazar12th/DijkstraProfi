import React from "react";
import Graph from "react-graph-vis";

export default function GraphVisualisation(props) {
    const nodesNumber = props.graphState.currDist.length - 1;
    let nodes = [];
    for (let i = 1; i <= nodesNumber; ++i) {
        let nodeDist = props.graphState.currDist[i];
        if (nodeDist > 1000) {
            nodeDist = "inf";
        }
        nodes.push(
            { id: i, label: i + ": " + nodeDist, title: "node " + i }
        );
    }

    const edgesNumber = props.graphState.edgeColors.length;
    let edges = [];
    for (let i = 1; i <= nodesNumber; ++i) {
        for (let edge of props.edges) {
            edges.push(
                { from: i, to: edge.to, label: edge.length, color: props.graphState.edgeColors[edge.id] }
            );
        }
    }

    const graph = {
        nodes: [
            { id: 1, label: "1: 0", title: "node 1" },
            { id: 2, label: "2: inf", title: "node 2" },
            { id: 3, label: "3: inf", title: "node 3" },
            { id: 4, label: "4: inf", title: "node 4" },
            { id: 5, label: "5: inf", title: "node 5" },
            { id: 6, label: "6: inf", title: "node 6" }
        ],
        edges: [
            { from: 1, to: 2, label: "7", color: "red", width: 2, length: 150 },
            { from: 1, to: 3, label: "9" },
            { from: 1, to: 6, label: "14" },
            { from: 2, to: 3, label: "10" },
            { from: 2, to: 4, label: "15" },
            { from: 3, to: 4, label: "11" },
            { from: 3, to: 6, label: "2" },
            { from: 4, to: 5, label: "6" },
            { from: 5, to: 6, label: "9" }
        ]
    };

    const options = {
        layout: {
            hierarchical: false
        },
        nodes: {
            color: props.nodesColor
        },
        edges: {
            color: "#000000"
        },
        height: "450px",
        interaction: {
            dragNodes: false,
            dragView: false,
            selectable: true,
            selectConnectedEdges: true,
            hover: true,
            hoverConnectedEdges: true,
            zoomView: false,
        },
        physics: true
    };

    return (<div>
        <Graph graph={graph} options={options} />
    </div>);
}