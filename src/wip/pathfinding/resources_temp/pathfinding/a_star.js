"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_Star = void 0;
var heap_1 = require("../list/heap");
function reconstructPath(cameFrom, current) {
    var currentId = current.id;
    var path = [current.id];
    while (cameFrom.hasOwnProperty(currentId)) {
        currentId = cameFrom[currentId].id;
        path.unshift(currentId);
    }
    return path;
}
// A* finds a path from start to goal.
// h is the heuristic function. h(n, goal) estimates the cost to reach goal from node n.
function A_Star(graph, start, goal, h) {
    // The set of discovered nodes that may need to be (re-)expanded.
    // Initially, only the start node is known.
    // This is usually implemented as a min-heap or priority queue rather than a hash-set.
    var openSet = new heap_1.Heap();
    // For node n, cameFrom[n] is the node immediately preceding it on the cheapest path from start
    // to n currently known.
    var previous = {};
    // For node n, distances[n] is the cost of the cheapest path from start to n currently known.
    var distances = {};
    // For node n, estimate[n] := distances[n] + h(n). estimate[n] represents our current best guess as to
    // how short a path from start to finish can be if it goes through n.
    var estimate = {};
    distances[start.id] = 0;
    estimate[start.id] = h(start, goal);
    openSet.add(start, estimate[start.id]);
    while (openSet.size() > 0) {
        var current = openSet.removeFirst();
        if (current === goal) {
            return { Distance: distances[current.id], Path: reconstructPath(previous, current) };
        }
        if (!current) {
            throw new Error("could not find closest vertex");
        }
        for (var _i = 0, _a = graph.getNeighbors(current); _i < _a.length; _i++) {
            var neighbor = _a[_i];
            var tentativeDistance = distances[current.id] + graph.getEdgeWeight(current, neighbor);
            if (!distances.hasOwnProperty(neighbor.id) || tentativeDistance < distances[neighbor.id]) {
                // Neighbor was not yet discovered or path to neighbor is better than any previous one. Record it!
                previous[neighbor.id] = current;
                distances[neighbor.id] = tentativeDistance;
                estimate[neighbor.id] = distances[neighbor.id] + h(neighbor, goal);
                openSet.update(neighbor, estimate[neighbor.id], true);
            }
        }
    }
    // Open set is empty but goal was never reached
    throw new Error("No path found");
}
exports.A_Star = A_Star;
