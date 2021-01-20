"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UndirectedWeightedGraph = exports.DirectedWeightedGraph = exports.UndirectedGraph = exports.DirectedGraph = void 0;
var vertex_1 = require("./vertex");
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
