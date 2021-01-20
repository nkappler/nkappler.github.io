"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortestPath = exports.Dijkstra = void 0;
var heap_1 = require("../list/heap");
function Dijkstra(G, Start, Target) {
    // XXXXX Initialize XXXXX //
    var Distances = {};
    var Previous = {};
    var UnprocessedVertices = new heap_1.Heap(); // Performance could be further improved by using a tree-base heap
    G.getAllVertices().forEach(function (vertex) {
        UnprocessedVertices.add(vertex, Infinity);
        Previous[vertex.id] = null;
    });
    UnprocessedVertices.update(Start, 0);
    Distances[Start.id] = 0;
    var _loop_1 = function () {
        var closestVertex = UnprocessedVertices.removeFirst();
        if (closestVertex === Target || !closestVertex) {
            return "break";
        }
        G.getNeighbors(closestVertex).forEach(function (neighbor) {
            var _a;
            var newDistance = Distances[closestVertex.id] + G.getEdgeWeight(closestVertex, neighbor);
            var oldDistance = (_a = Distances[neighbor.id]) !== null && _a !== void 0 ? _a : Infinity;
            if (newDistance < oldDistance) {
                Distances[neighbor.id] = newDistance;
                Previous[neighbor.id] = closestVertex.id;
                /*  this line eats almost 80% of total processing time
                    could be improved by changing the min-heap to a tree structure
                */
                UnprocessedVertices.update(neighbor, newDistance);
            }
        });
    };
    // XXXXX Calculate Distances XXXXX //
    while (UnprocessedVertices.size() > 0) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
    return { Distances: Distances, Previous: Previous };
}
exports.Dijkstra = Dijkstra;
function shortestPath(G, Start, Target) {
    var _a = Dijkstra(G, Start, Target), Previous = _a.Previous, Distances = _a.Distances;
    var Path = [Target.id];
    var previous = Previous[Target.id];
    while (previous) {
        Path.unshift(previous);
        previous = Previous[previous];
    }
    return { Distance: Distances[Target.id], Path: Path };
}
exports.shortestPath = shortestPath;
