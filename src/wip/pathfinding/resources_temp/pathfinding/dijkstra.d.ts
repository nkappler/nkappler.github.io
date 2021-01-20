import { DirectedWeightedGraph as Graph } from "../graph/graph";
import { VertexWithWeightedEdges as Vertex } from "../graph/vertex";
import { Dictionary } from "../util/types.d";
export declare function Dijkstra(G: Graph, Start: Vertex, Target?: Vertex): {
    Distances: Dictionary<number>;
    Previous: Dictionary<string | null>;
};
export declare function shortestPath(G: Graph, Start: Vertex, Target: Vertex): {
    Distance: number;
    Path: string[];
};
