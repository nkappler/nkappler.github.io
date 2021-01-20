import { UndirectedWeightedGraph as Graph } from "../graph/graph";
import { VertexWithWeightedEdges as Vertex } from "../graph/vertex";
export declare function A_Star(graph: Graph, start: Vertex, goal: Vertex, h: (start: Vertex, goal: Vertex) => number): {
    Distance: number;
    Path: string[];
};
