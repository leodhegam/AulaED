import Fila from "../../src/Fila";
import intercalaFilas from "../../src/Lista_2/Questao4";


let f1;
let f2;

beforeEach(() => {
	f1 = new Fila(5);
	f2 = new Fila(5);
	f1.enqueue("A");
	f1.enqueue("B");
	f1.enqueue("C");

	f2.enqueue(1);
	f2.enqueue(2);
	f2.enqueue(3);
	f2.enqueue(4);
	f2.enqueue(5);
});



test("Teste de expressao", () => {
	expect(intercalaFilas(f1, f2).length()).toBe(8);
});