import verificaExpressao from "../../src/Lista_1/Questao6";


test("Instanciacao", () => {
	expect(0).toBe(0);
});


test("Teste de expressao", () => {
	expect(verificaExpressao("[ ( ) [ ( ) ] ] ( )")).toBe(true);
	expect(verificaExpressao("( ( ) ]")).toBe(false);
});