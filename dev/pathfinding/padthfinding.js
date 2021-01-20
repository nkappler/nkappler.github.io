/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/wip/pathfinding/index.tsx":
/*!***************************************!*
  !*** ./src/wip/pathfinding/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.heuristic = void 0;
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var graph_1 = __webpack_require__(/*! ./resources_temp/graph/graph */ "./src/wip/pathfinding/resources_temp/graph/graph.js");
var vertex_1 = __webpack_require__(/*! ./resources_temp/graph/vertex */ "./src/wip/pathfinding/resources_temp/graph/vertex.js");
var a_star_1 = __webpack_require__(/*! ./resources_temp/pathfinding/a_star */ "./src/wip/pathfinding/resources_temp/pathfinding/a_star.js");
var size = 25;
var heuristic = function (x, y) {
    var X = x;
    var Y = y;
    var deltaX = Y.x - X.x;
    var deltaY = Y.y - X.y;
    //Pythagoras as heuristic
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
};
exports.heuristic = heuristic;
var Square = function (props) {
    var id = props.id, children = props.children, graph = props.graph, result = props.result, drawing = props.drawing;
    var _a = React.useState(true), needUpdate = _a[0], update = _a[1];
    var backgroundColor = graph.getVertex(id) ?
        (result === null || result === void 0 ? void 0 : result.Path.includes(id)) ?
            "#0f0"
            : "#fff"
        : "#000";
    return React.createElement("div", { draggable: false, onMouseDown: function () { return false; }, onMouseMove: function () {
            if (drawing) {
                var v = graph.getVertex(id);
                if (v) {
                    graph.removeVertex(v);
                    update(!needUpdate);
                }
            }
        }, onClick: function () {
            var v = graph.getVertex(id);
            if (v) {
                graph.removeVertex(v);
                update(!needUpdate);
            }
        }, id: id, style: {
            width: size + "px",
            height: size + "px",
            borderRight: "1px solid #555",
            borderBottom: "1px solid #555",
            boxSizing: "border-box",
            backgroundColor: backgroundColor
        } }, children);
};
var Container = function () {
    var _a = React.useState(0), gridSize = _a[0], setGridSize = _a[1];
    var _b = React.useState(0), width = _b[0], setWidth = _b[1];
    var _c = React.useState(new graph_1.UndirectedWeightedGraph()), graph = _c[0], setGraph = _c[1];
    var _d = React.useState([]), grid = _d[0], setGrid = _d[1];
    var _e = React.useState(false), isDrawing = _e[0], setDrawing = _e[1];
    var resize = React.useCallback(function () {
        var maxWidth = window.innerWidth - 600;
        var count = Math.round(maxWidth / size);
        if (count !== gridSize) {
            setWidth(count * 25);
            setGridSize(count);
        }
    }, []);
    React.useEffect(function () {
        var _a;
        var _graph = new graph_1.UndirectedWeightedGraph();
        var _grid = [];
        for (var x = 0; x < gridSize; x++) {
            _grid[x] = [];
            for (var y = 0; y < gridSize; y++) {
                _grid[x][y] = new vertex_1.VertexWithWeightedEdges({
                    id: x + "-" + y,
                    x: x,
                    y: y
                });
                _graph.addVertex(_grid[x][y]);
                var prev = void 0;
                prev = _grid[x][y - 1];
                prev && _graph.addEdge(prev, _grid[x][y], 2);
                // prev = _grid[x - 1]?.[y - 1];
                // prev && _graph.addEdge(prev, _grid[x][y], 3);
                prev = (_a = _grid[x - 1]) === null || _a === void 0 ? void 0 : _a[y];
                prev && _graph.addEdge(prev, _grid[x][y], 2);
                // prev = _grid[x - 1]?.[y + 1];
                // prev && _graph.addEdge(prev, _grid[x][y], 3);
            }
        }
        setGrid(_grid);
        setGraph(_graph);
    }, [gridSize]);
    React.useEffect(function () {
        resize();
        window.addEventListener("resize", resize);
        return function () { return window.removeEventListener("resize", resize); };
    }, []);
    var _f = React.useState(), result = _f[0], setResult = _f[1];
    return React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: function () {
                setResult(a_star_1.A_Star(graph, grid[0][0], grid[gridSize - 1][gridSize - 1], exports.heuristic));
            } }, "Find path"),
        React.createElement("div", { onMouseDown: function () { return setDrawing(true); }, onMouseLeave: function () { return setDrawing(false); }, onMouseUp: function () { return setDrawing(false); }, onDragStart: function () { return false; }, draggable: false, style: {
                display: "flex",
                flexWrap: "wrap",
                margin: "auto",
                width: width,
                borderLeft: "1px solid #555",
                borderTop: "1px solid #555"
            } }, grid.map(function (row, x) { return row.map(function (col, y) {
            return React.createElement(Square, { id: col.id, result: result, graph: graph, drawing: isDrawing });
        }); })));
};
ReactDOM.render(React.createElement(Container, null), document.body);


/***/ }),

/***/ "./src/wip/pathfinding/resources_temp/graph/graph.js":
/*!***********************************************************!*
  !*** ./src/wip/pathfinding/resources_temp/graph/graph.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UndirectedWeightedGraph = exports.DirectedWeightedGraph = exports.UndirectedGraph = exports.DirectedGraph = void 0;
var vertex_1 = __webpack_require__(/*! ./vertex */ "./src/wip/pathfinding/resources_temp/graph/vertex.js");
var BasicGraph = /** @class */ (function () {
    function BasicGraph(vertices) {
        if (vertices === void 0) { vertices = {}; }
        this.vertices = vertices;
    }
    BasicGraph.prototype.adjacent = function (x, y) {
        if (!this.vertices.hasOwnProperty(x.id) || !this.vertices.hasOwnProperty(y.id)) {
            console.warn("(Some) Vertices are not part of this graph!");
            return undefined;
        }
        return x.edges.hasOwnProperty(y.id);
    };
    BasicGraph.prototype.getNeighbors = function (x) {
        if (!this.vertices.hasOwnProperty(x.id)) {
            console.warn("Vertex is not part of this graph!");
            return [];
        }
        return Object.values(x.edges).map(function (e) { return e.target; });
    };
    BasicGraph.prototype.addVertex = function (x) {
        if (this.vertices.hasOwnProperty(x.id)) {
            console.warn("Vertex is already part of this graph!");
            return false;
        }
        this.vertices[x.id] = (x);
        return true;
    };
    BasicGraph.prototype.removeVertex = function (x) {
        if (!this.vertices.hasOwnProperty(x.id)) {
            console.warn("Vertex is not part of this graph!");
            return false;
        }
        //remove all edges to this vertex
        Object.values(x.incomingEdges).forEach(function (edge) {
            delete edge.target.edges[x.id];
        });
        //remove vertex from graph
        delete this.vertices[x.id];
        // Object.values(this.vertices).forEach(v => delete v.edges[x.id]);
        return true;
    };
    BasicGraph.prototype.addEdge = function (x, y, _weight) {
        var adj = this.adjacent(x, y);
        if (adj === undefined) {
            return false;
        }
        else if (adj) {
            console.warn("This Edge already exists");
            return false;
        }
        x.edges[y.id] = new vertex_1.Edge(y);
        y.incomingEdges[x.id] = new vertex_1.Edge(x);
        return true;
    };
    BasicGraph.prototype.removeEdge = function (x, y) {
        var adj = this.adjacent(x, y);
        if (adj === undefined) {
            return false;
        }
        else if (!adj) {
            console.warn("This edge doesn't exist!");
            return false;
        }
        delete x.edges[y.id];
        delete y.incomingEdges[x.id];
        return true;
    };
    BasicGraph.prototype.getAllVertices = function () {
        return Object.values(this.vertices);
    };
    BasicGraph.prototype.getVertex = function (id) {
        return this.vertices[id]; //.find(v => v.id === id);
    };
    return BasicGraph;
}());
var DirectedGraph = /** @class */ (function (_super) {
    __extends(DirectedGraph, _super);
    function DirectedGraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DirectedGraph.prototype.addEdge = function (x, y) {
        return _super.prototype.addEdge.call(this, x, y);
    };
    return DirectedGraph;
}(BasicGraph));
exports.DirectedGraph = DirectedGraph;
var UndirectedGraph = /** @class */ (function (_super) {
    __extends(UndirectedGraph, _super);
    function UndirectedGraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UndirectedGraph.prototype.addEdge = function (x, y) {
        //use deMorgan to call addEdge only once if x or y are not part of graph
        return !(!_super.prototype.addEdge.call(this, x, y) || !_super.prototype.addEdge.call(this, y, x));
    };
    UndirectedGraph.prototype.removeEdge = function (x, y) {
        //use deMorgan to call removeEdge only once if x or y are not part of graph
        return !(!_super.prototype.removeEdge.call(this, x, y) || !_super.prototype.removeEdge.call(this, y, x));
    };
    return UndirectedGraph;
}(DirectedGraph));
exports.UndirectedGraph = UndirectedGraph;
var DirectedWeightedGraph = /** @class */ (function (_super) {
    __extends(DirectedWeightedGraph, _super);
    function DirectedWeightedGraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DirectedWeightedGraph.prototype.getNeighbors = function (x) {
        return _super.prototype.getNeighbors.call(this, x);
    };
    DirectedWeightedGraph.prototype.getAllVertices = function () {
        return _super.prototype.getAllVertices.call(this);
    };
    DirectedWeightedGraph.prototype.getEdgeWeight = function (x, y) {
        if (!this.adjacent(x, y)) {
            console.warn("This edge doesn't exist");
            return undefined;
        }
        return x.edges[y.id].weight;
    };
    DirectedWeightedGraph.prototype.setEdgeWeight = function (x, y, weight) {
        if (!this.adjacent(x, y)) {
            console.warn("This edge doesn't exists");
            return false;
        }
        x.edges[y.id].weight = weight;
        return true;
    };
    DirectedWeightedGraph.prototype.addEdge = function (x, y, weight) {
        var adj = this.adjacent(x, y);
        if (adj === undefined) {
            return false;
        }
        else if (adj) {
            console.warn("This Edge already exists");
            return false;
        }
        x.edges[y.id] = new vertex_1.WeightedEdge(y, weight);
        y.incomingEdges[x.id] = new vertex_1.WeightedEdge(x, weight);
        return true;
    };
    return DirectedWeightedGraph;
}(BasicGraph));
exports.DirectedWeightedGraph = DirectedWeightedGraph;
var UndirectedWeightedGraph = /** @class */ (function (_super) {
    __extends(UndirectedWeightedGraph, _super);
    function UndirectedWeightedGraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UndirectedWeightedGraph.prototype.addEdge = function (x, y, weight) {
        //use deMorgan to call addEdge only once if x or y are not part of graph
        return !(!_super.prototype.addEdge.call(this, x, y, weight) || !_super.prototype.addEdge.call(this, y, x, weight));
    };
    UndirectedWeightedGraph.prototype.removeEdge = function (x, y) {
        //use deMorgan to call removeEdge only once if x or y are not part of graph
        return !(!_super.prototype.removeEdge.call(this, x, y) || !_super.prototype.removeEdge.call(this, y, x));
    };
    return UndirectedWeightedGraph;
}(DirectedWeightedGraph));
exports.UndirectedWeightedGraph = UndirectedWeightedGraph;


/***/ }),

/***/ "./src/wip/pathfinding/resources_temp/graph/vertex.js":
/*!************************************************************!*
  !*** ./src/wip/pathfinding/resources_temp/graph/vertex.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WeightedEdge = exports.Edge = exports.VertexWithWeightedEdges = exports.Vertex = void 0;
var Vertex = /** @class */ (function () {
    function Vertex(vertexinfo) {
        var _this = this;
        this.edges = {};
        this.incomingEdges = {};
        Object.entries(vertexinfo).forEach(function (entry) {
            var _a;
            Object.assign(_this, (_a = {}, _a[entry[0]] = entry[1], _a));
        });
        this.id = typeof vertexinfo === "string" ? vertexinfo : vertexinfo.id;
    }
    return Vertex;
}());
exports.Vertex = Vertex;
var VertexWithWeightedEdges = /** @class */ (function (_super) {
    __extends(VertexWithWeightedEdges, _super);
    function VertexWithWeightedEdges(vertexInfo) {
        var _this = _super.call(this, vertexInfo) || this;
        _this.edges = {};
        return _this;
    }
    return VertexWithWeightedEdges;
}(Vertex));
exports.VertexWithWeightedEdges = VertexWithWeightedEdges;
var Edge = /** @class */ (function () {
    function Edge(target) {
        this.target = target;
    }
    Edge.prototype.toString = function () {
        return JSON.stringify({ target: this.target.id });
    };
    return Edge;
}());
exports.Edge = Edge;
var WeightedEdge = /** @class */ (function (_super) {
    __extends(WeightedEdge, _super);
    function WeightedEdge(target, weight) {
        var _this = _super.call(this, target) || this;
        _this.target = target;
        _this.weight = weight;
        return _this;
    }
    WeightedEdge.prototype.toString = function () {
        return JSON.stringify({ target: this.target.id, weight: this.weight });
    };
    return WeightedEdge;
}(Edge));
exports.WeightedEdge = WeightedEdge;


/***/ }),

/***/ "./src/wip/pathfinding/resources_temp/list/heap.js":
/*!*********************************************************!*
  !*** ./src/wip/pathfinding/resources_temp/list/heap.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Heap = void 0;
var Heap = /** @class */ (function () {
    function Heap() {
        this.list = [];
    }
    Heap.prototype.getMinWeight = function () {
        return this.list[0].weight;
    };
    Heap.prototype.first = function () {
        return this.list[0].value;
    };
    Heap.prototype.removeFirst = function () {
        return this.list.splice(0, 1)[0].value;
    };
    Heap.prototype.getWeightFor = function (value) {
        var _a, _b;
        var index = this.indexOf(value);
        return (_b = (_a = this.list[index]) === null || _a === void 0 ? void 0 : _a.weight) !== null && _b !== void 0 ? _b : Infinity;
    };
    Heap.prototype.add = function (value, weight) {
        var index = this.list.findIndex(function (val) { return val.weight >= weight; });
        index >= 0 ?
            this.list.splice(index, 0, { value: value, weight: weight }) :
            this.list.push({ value: value, weight: weight });
    };
    Heap.prototype.remove = function (value) {
        var index = this.indexOf(value);
        if (index < 0) {
            return undefined;
        }
        return this.list.splice(index, 1)[0];
    };
    Heap.prototype.update = function (value, weight, insertIfNeeded) {
        if (insertIfNeeded === void 0) { insertIfNeeded = false; }
        if (this.remove(value) || insertIfNeeded) {
            this.add(value, weight);
        }
    };
    Heap.prototype.indexOf = function (value) {
        return this.list.findIndex(function (val) { return val.value === value; });
    };
    Heap.prototype.has = function (value) {
        return this.indexOf(value) > 0;
    };
    Heap.prototype.size = function () {
        return this.list.length;
    };
    return Heap;
}());
exports.Heap = Heap;


/***/ }),

/***/ "./src/wip/pathfinding/resources_temp/pathfinding/a_star.js":
/*!******************************************************************!*
  !*** ./src/wip/pathfinding/resources_temp/pathfinding/a_star.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.A_Star = void 0;
var heap_1 = __webpack_require__(/*! ../list/heap */ "./src/wip/pathfinding/resources_temp/list/heap.js");
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


/***/ }),

/***/ "react":
/*!************************!*
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/wip/pathfinding/index.tsx");
/******/ })()
;
//# sourceMappingURL=padthfinding.js.map