export declare class Heap<T> {
    private list;
    constructor();
    getMinWeight(): number;
    first(): T;
    removeFirst(): T;
    getWeightFor(value: T): number;
    add(value: T, weight: number): void;
    remove(value: T): {
        value: T;
        weight: number;
    } | undefined;
    update(value: T, weight: number, insertIfNeeded?: boolean): void;
    indexOf(value: T): number;
    has(value: T): boolean;
    size(): number;
}
