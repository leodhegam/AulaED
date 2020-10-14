// Seja uma pilha implementada como uma lista 
// simplesmente encadeada circular, de forma que somente um
//  ponteiro fim, que aponta para o último nó da pilha, 
// seja suficiente para indicar o topo da pilha. Implemente:
class Pilha {

	constructor(size = 10) {
		this.maxSize = size;
		this.dados = [];
		this.topo = -1;
	}

	push(newData) {
		if (this.isFull()) {
			throw new Error("Stack overflow")
		} else {
			this.dados[++this.topo] = newData;
		}
	}


	pop() {
		if (this.isEmpty()) {
			throw new Error("Stack underflow");
		} else {
			return this.dados[this.topo--]
		}
	}

	top() {
		if (this.isEmpty()) {
			throw new Error("Pilha vazia");
		} else {
			return this.dados[this.topo];
		}
	}

	size() {
		return this.topo + 1;
	}

	clear() {
		this.topo = -1;
	}

	isFull() {
		return this.size() === this.maxSize;
	}

	isEmpty() {
		return this.size() === 0;
	}

	toString() {
		let result = "[";
		for (let i = 0; i <= this.topo; i++) {
			result += ` ${this.dados[i]} `;
		}
		result += "]";
		return result;
	}
}

export default Pilha;