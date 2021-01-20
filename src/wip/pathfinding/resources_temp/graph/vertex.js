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
