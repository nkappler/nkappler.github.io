import { Dictionary } from "../util/types.d";
import { Vertex, VertexWithWeightedEdges } from "./vertex";
declare class BasicGraph {
    protected vertices: Dictionary<Vertex>;
    constructor(vertices?: Dictionary<Vertex>);
    adjacent(x: Vertex, y: Vertex): boolean | undefined;
    getNeighbors(x: Vertex): Vertex[];
    addVertex(x: Vertex): boolean;
    removeVertex(x: Vertex): boolean;
    addEdge(x: Vertex, y: Vertex, _weight?: number): boolean;
    removeEdge(x: Vertex, y: Vertex): boolean;
    getAllVertices(): Vertex[];
    getVertex(id: string): Vertex;
}
export declare class DirectedGraph extends BasicGraph {
    addEdge(x: Vertex, y: Vertex): boolean;
}
export declare class UndirectedGraph extends DirectedGraph {
    addEdge(x: Vertex, y: Vertex): boolean;
    removeEdge(x: Vertex, y: Vertex): boolean;
}
export declare class DirectedWeightedGraph extends BasicGraph {
    getNeighbors(x: VertexWithWeightedEdges): VertexWithWeightedEdges[];
    getAllVertices(): VertexWithWeightedEdges[];
    getEdgeWeight(x: VertexWithWeightedEdges, y: VertexWithWeightedEdges): number | undefined;
    setEdgeWeight(x: VertexWithWeightedEdges, y: VertexWithWeightedEdges, weight: number): boolean;
    addEdge(x: VertexWithWeightedEdges, y: VertexWithWeightedEdges, weight: number): boolean;
}
export declare class UndirectedWeightedGraph extends DirectedWeightedGraph {
    addEdge(x: VertexWithWeightedEdges, y: VertexWithWeightedEdges, weight: number): boolean;
    removeEdge(x: VertexWithWeightedEdges, y: VertexWithWeightedEdges): boolean;
}
export { };
