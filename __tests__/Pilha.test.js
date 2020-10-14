import Pilha from "../src/Pilha";

let p;

beforeEach(() => {
	p = new Pilha();
});

test("Instanciacao", () => {
	expect(p.size()).toBe(0);
});


test("Teste de Top", () => {
	p.push(1);
	p.push(2);
	p.push(3);
	expect(p.top()).toBe(3);
});

test("Teste de Top 2", () => {
	p.push("A");
	p.push("B");
	p.push("C");
	p.pop();
	expect(p.size()).toBe(2);
	expect(p.top()).toBe("B");
	p.pop();
	expect(p.top()).toBe("A");
	expect(p.size()).toBe(1);
	p.pop();
	expect(p.isEmpty()).toBe(true);
});

test("Instanciacao 2", () => {
	expect(p.isEmpty()).toBe(true);
});

test("Teste de underflow", () => {
	expect(p.isEmpty()).toBe(true);
	expect(() => {
		p.pop();
	}).toThrowError("Stack underflow");
});


test("Teste de overflow", () => {
	expect(p.isEmpty()).toBe(true);
	p.push("A");
	p.push("B");
	p.push("C");
	p.push("A");
	p.push("B");
	p.push("C");
	p.push("A");
	p.push("B");
	p.push("C");
	p.push("A");
	expect(() => {
		p.push("F");
	}).toThrowError("Stack overflow");
});




















/*
beforeEach(() => {
	p = new Pilha(5);
});
*/
/*
test("Instanciacao", () => {
	expect(p.size()).toBe(0);
});

test("Adicionar um elemento", () => {
	p.push(5);
	expect(p.size()).toBe(1);
});

test("Teste de overflow", () => {
	p.push(5);
	p.push(5);
	p.push(5);
	p.push(5);
	p.push(5);
	expect(() => {
		p.push(5);
	}).toThrowError("Overflow");
});
*/