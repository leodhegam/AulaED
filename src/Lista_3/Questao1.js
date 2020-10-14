import Lista from "../Lista";

class Pilha {
	constructor() {
		this.dados = new Lista();
	}
	push(newdata) {
		this.dados.append(newdata);
	}
	pop() {
		return this.dados.removeEnd();
	}
	top() {
		return this.dados.last();
	}
	clear() {
		this.dados.clear();
	}
	isEmpty() {
		return this.dados.isEmpty();
	}
	toString() {
		return this.dados.toString();
	}
	size() {
		return this.dados.size();
	}
}

export default Pilha;