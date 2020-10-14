import Deque from "../../src/Lista_2/Questao5";


let f1;

beforeEach(() => {
	f1 = new Deque(5);
});


//"D C B A E"

test("Teste bobo", () => {
	expect(f1.isEmpty()).toBe(true);
	f1.insereInicio("A");
	f1.insereInicio("B");
	f1.insereInicio("C");
	f1.insereInicio("D");
	f1.insereFim("E");
});