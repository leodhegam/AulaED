import invertePalavra from "../../src/Lista_1/Questao2"


test("Palavras invertidas", () => {
	expect(invertePalavra("Taniro")).toBe("orinaT");
	expect(invertePalavra("ABACAXI")).toBe("IXACABA");
});
