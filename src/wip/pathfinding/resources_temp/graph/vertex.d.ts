import { Dictionary } from "../util/types.d";
export declare type IVertex = {
    id: string;
    [key: string]: any;
} | string;
export declare class Vertex {
    readonly id: string;
    edges: Dictionary<Edge>;
    incomingEdges: Dictionary<Edge>;
    constructor(vertexinfo: IVertex);
}
export declare class VertexWithWeightedEdges extends Vertex {
    readonly edges: {
        [key: string]: WeightedEdge;
    };
    constructor(vertexInfo: IVertex);
}
export declare class Edge {
    readonly target: Vertex;
    constructor(target: Vertex);
    toString(): string;
}
export declare class WeightedEdge extends Edge {
    readonly target: VertexWithWeightedEdges;
    weight: number;
    constructor(target: VertexWithWeightedEdges, weight: number);
    toString(): string;
}
