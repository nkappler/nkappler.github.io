"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
