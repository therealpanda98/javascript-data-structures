import { MinHeap } from './MinHeap';

describe(MinHeap, () => {
  let heap: MinHeap;
  
  beforeEach(() => {
    heap = new MinHeap();
  });

	describe("#constructor", () => {
    it("should create an HashTable", () => {
      expect(heap.size).toBe(0);
    });
  });
});