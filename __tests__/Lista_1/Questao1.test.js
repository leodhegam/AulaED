import Fracao from "../../src/Lista_1/Questao1"

let f1;
let f2;

beforeEach(() => {
	f1 = new Fracao(2, 5);
	f2 = new Fracao(1, 3);
});

test("Testes Frações", () => {
	expect(f1.multiplicar(f2)).toStrictEqual(new Fracao(2, 15));
	expect(f1.dividir(f2)).toStrictEqual(new Fracao(6, 5));
});
