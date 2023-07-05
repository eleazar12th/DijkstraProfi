import React, { useEffect, useState } from "react";
import Graph from "react-graph-vis";

export default function GraphVisualisation(props) {
    const [graph, setGraph] = useState({});

    function createGraphNodesEdges(graphState, edgesMap) {
        const nodesNumber = graphState.currDist.length - 1;
        let nodes = [];
        for (let v = 1; v <= nodesNumber; ++v) {
            let nodeDist = graphState.currDist[v];
            if (nodeDist > 1000) {
                nodeDist = "inf";
            }
            let newNode = { id: v, label: v + ": " + nodeDist, title: "node " + v, color: graphState.nodeColors[v] };
            nodes.push(newNode);
        }

        let edges = [];
        for (let v = 1; v <= nodesNumber; ++v) {
            for (let edge of edgesMap[v]) {
                let newEdge = { from: v, to: edge.to, label: edge.length, color: graphState.edgeColors[edge.id] };
                edges.push(newEdge);
            }
        }

        return {
            nodes: nodes,
            edges: edges
        };
    }

    console.log(graph);

    useEffect(() => {
        console.log(props.graphState.edgeColors);
        const newGraph = createGraphNodesEdges(props.graphState, props.edgesMap);
        setGraph(newGraph);
    }, [props.graphState, props.edgesMap]);

    const options = {
        layout: {
            hierarchical: false
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

    /*return (<div>
        <Graph graph={graph} options={options} />
    </div>);*/
    return (<div></div>);
}