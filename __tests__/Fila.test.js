import Fila from "../src/Fila";


let f;

beforeEach(() => {
	f = new Fila(5);
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
	}).toThrowError("Underflow");
	expect(f.length()).toBe(0);
});

test("fila aula", () => {
	expect(f.length()).toBe(0);
	f.enqueue("A");
	expect(f.length()).toBe(1);
	expect(f.front()).toBe("A");
	f.enqueue("B");
	expect(f.front()).toBe("A");
	expect(f.length()).toBe(2);
	f.enqueue("C");
	f.enqueue("D");
	f.enqueue("E");
	expect(() => {
		f.enqueue("F");
	}).toThrowError("Overflow");
	expect(f.dequeue()).toBe("A");
	expect(f.dequeue()).toBe("B");
	expect(f.dequeue()).toBe("C");
	expect(f.dequeue()).toBe("D");
	expect(f.dequeue()).toBe("E");
	expect(() => {
		f.dequeue();
	}).toThrowError("Underflow");
	expect(f.length()).toBe(0);
});