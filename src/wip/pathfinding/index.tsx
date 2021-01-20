import * as React from "react";
import * as ReactDOM from "react-dom";
import { UndirectedWeightedGraph } from "./resources_temp/graph/graph";
import { IVertex, VertexWithWeightedEdges } from "./resources_temp/graph/vertex";
import { A_Star } from "./resources_temp/pathfinding/a_star";

type IVertexWithCoordinates = IVertex & {
    x: number,
    y: number
}

const size = 25;

export const heuristic = (x: any, y: any) => {
    const X = x as IVertexWithCoordinates;
    const Y = y as IVertexWithCoordinates;
    const deltaX = Y.x - X.x;
    const deltaY = Y.y - X.y;

    //Pythagoras as heuristic
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
};


interface ISquareProps {
    id: string;
    graph: UndirectedWeightedGraph;
    result: ReturnType<typeof A_Star> | undefined;
    drawing: boolean;
}

const Square: React.FunctionComponent<ISquareProps> = props => {
    const { id, children, graph, result, drawing } = props;
    const [needUpdate, update] = React.useState(true);

    const backgroundColor: string = graph.getVertex(id) ?
        result?.Path.includes(id) ?
            "#0f0"
            : "#fff"
        : "#000";

    return <div
        draggable={false}
        onMouseDown={() => false}
        onMouseMove={() => {
            if (drawing) {
                const v = graph.getVertex(id);
                if (v) {
                    graph.removeVertex(v)
                    update(!needUpdate);
                }
            }
        }}
        onClick={() => {
            const v = graph.getVertex(id);
            if (v) {
                graph.removeVertex(v)
                update(!needUpdate);
            }
        }}
        id={id}
        style={{
            width: size + "px",
            height: size + "px",
            borderRight: "1px solid #555",
            borderBottom: "1px solid #555",
            boxSizing: "border-box",
            backgroundColor
        }}>{children}</div>
}

const Container = () => {
    const [gridSize, setGridSize] = React.useState(0);
    const [width, setWidth] = React.useState(0);
    const [graph, setGraph] = React.useState(new UndirectedWeightedGraph());
    const [grid, setGrid] = React.useState<VertexWithWeightedEdges[][]>([]);

    const [isDrawing, setDrawing] = React.useState(false);

    const resize = React.useCallback(() => {
        const maxWidth = window.innerWidth - 600;
        const count = Math.round(maxWidth / size);
        if (count !== gridSize) {
            setWidth(count * 25);
            setGridSize(count);
        }
    }, []);

    React.useEffect(() => {
        const _graph = new UndirectedWeightedGraph();
        const _grid: VertexWithWeightedEdges[][] = [];

        for (let x = 0; x < gridSize; x++) {
            _grid[x] = [];
            for (let y = 0; y < gridSize; y++) {
                _grid[x][y] = new VertexWithWeightedEdges({
                    id: `${x}-${y}`,
                    x,
                    y
                });
                _graph.addVertex(_grid[x][y]);
                let prev;
                prev = _grid[x][y - 1];
                prev && _graph.addEdge(prev, _grid[x][y], 2);

                // prev = _grid[x - 1]?.[y - 1];
                // prev && _graph.addEdge(prev, _grid[x][y], 3);

                prev = _grid[x - 1]?.[y];
                prev && _graph.addEdge(prev, _grid[x][y], 2);

                // prev = _grid[x - 1]?.[y + 1];
                // prev && _graph.addEdge(prev, _grid[x][y], 3);
            }
        }

        setGrid(_grid);
        setGraph(_graph);
    }, [gridSize]);

    React.useEffect(() => {
        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    const [result, setResult] = React.useState<ReturnType<typeof A_Star>>();

    return <>
        <button onClick={() => {
            setResult(A_Star(graph, grid[0][0], grid[gridSize - 1][gridSize - 1], heuristic));
        }}>Find path</button>
        <div
            onMouseDown={() => setDrawing(true)}
            onMouseLeave={() => setDrawing(false)}
            onMouseUp={() => setDrawing(false)}
            onDragStart={() => false}
            draggable={false}
            style={{
                display: "flex",
                flexWrap: "wrap",
                margin: "auto",
                width,
                borderLeft: "1px solid #555",
                borderTop: "1px solid #555"
            }}>
            {grid.map((row, x) => row.map((col, y) => {
                return <Square
                    id={col.id}
                    result={result}
                    graph={graph}
                    drawing={isDrawing}
                />
            }))}
        </div>
    </>
};

ReactDOM.render(<Container />, document.body);