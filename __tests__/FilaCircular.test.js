import FilaCircular from "../src/FilaCircular";


test("Instanciacao", () => {
	expect(0).toBe(0);
});


let f;

beforeEach(() => {
	f = new FilaCircular(5);
});

test("Instanciacao", () => {
	expect(f.length()).toBe(0);
});

test("Adicionar um elemento", () => {
	f.enqueue(5);
	expect(f.length()).toBe(1);
	expect(f.front()).toBe(5);
});

test("Teste de overflow", () => {
	f.enqueue(5);
	f.enqueue(5);
	f.enqueue(5);
	f.enqueue(5);
	f.enqueue(5);
	expect(() => {
		f.enqueue(5);
	}).toThrowError("Overflow");
});

test("Teste de underflow", () => {
	expect(() => {
		f.dequeue();
	}).toThrowError("Underflow")
})

test("Teste de comportamento", () => {
	f.enqueue(1);
	f.enqueue(2);
	f.enqueue(3);
	f.enqueue(4);
	f.enqueue(5);
	expect(f.dequeue()).toBe(1);
});

test("Teste de clear", () => {
	f.enqueue(1);
	f.enqueue(2);
	f.enqueue(3);
	f.enqueue(4);
	f.enqueue(5);
	f.clear();
	expect(() => {
		f.dequeue();
	}).toThrowError("Underflow")
});

test("Teste de length após o clear", () => {
	f.enqueue(1);
	f.enqueue(2);
	f.enqueue(3);
	f.enqueue(4);
	f.enqueue(5);
	f.clear();
	expect(f.length()).toBe(0);
});

test("Fila circular", () => {
	f.enqueue("A");
	f.enqueue("B");
	f.enqueue("C");
	f.enqueue("D");
	f.enqueue("E");
	expect(() => {
		f.enqueue("F");
	}).toThrowError("Overflow");
	expect(f.length()).toBe(5);
	expect(f.dequeue()).toBe("A");
	expect(f.dequeue()).toBe("B");
	expect(f.length()).toBe(3);
	f.enqueue("F");
	expect(f.length()).toBe(4);
	f.enqueue("G");
	expect(f.length()).toBe(5);
	expect(() => {
		f.enqueue("H");
	}).toThrowError("Overflow");
	expect(f.dequeue()).toBe("C");
});
