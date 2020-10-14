import Lista from "../src/Lista";



let l;

beforeEach(() => {
	l = new Lista();
});



test("Instanciacao", () => {
	expect(l.isEmpty()).toBe(true);
});

test("Adicionar em lugares variados", () => {
	l.add(1);
	l.add(2);
	l.append(3);
	l.append(4);
	expect(l.toString()).toBe("2->1->3->4");
});

test("Adicionar em lugares variados", () => {
	l.append(5);
	expect(l.toString()).toBe("5");
	l.add(3)
	expect(l.toString()).toBe("3->5");
	l.append(7)
	expect(l.toString()).toBe("3->5->7");
	l.add(2)
	expect(l.toString()).toBe("2->3->5->7");
});


/*
test("Adicionar em lugares variados", () => {
	l.add(1);
	l.add(2);
	l.add(3);
	l.add(4);
	expect(l.size()).toBe(4);
	expect(l.toString()).toBe("4->3->2->1");
	l.append(5);
	expect(l.toString()).toBe("4->3->2->1->5");
	l.removeBeginning();
	expect(l.toString()).toBe("3->2->1->5");
	l.removeEnd();
	expect(l.toString()).toBe("3->2->1");
	expect(l.size()).toBe(3);
	l.addAt(1, 6);
	expect(l.toString()).toBe("3->6->2->1");
	expect(l.search(5)).toBe(false);
	expect(l.search(6)).toBe(true);
});

test("Adicionar em ordem", () => {
	l.addInOrder(30);
	l.addInOrder(10);
	l.addInOrder(40);
	l.addInOrder(20);
	expect(l.toString()).toBe("10->20->30->40");

});
*/
