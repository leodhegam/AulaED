import Pilhas from "../../src/Lista_1/Questao3"

let p;

beforeEach(() => {
	p = new Pilhas(10);
});

test("Teste de pilhas", () => {
	expect(p.isAEmpty()).toBe(true);
	expect(p.isBEmpty()).toBe(true);
	p.pushA("A");
	expect(p.isAEmpty()).toBe(false);
	expect(p.isBEmpty()).toBe(true);
	p.popA();
	p.pushB("1");
	expect(p.isAEmpty()).toBe(true);
	expect(p.isBEmpty()).toBe(false);
});
