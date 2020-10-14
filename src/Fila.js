class Fila {

	constructor(s = 10) {
		this.dados = []
		this.inicio = 0
		this.fim = 0
		this.comprimento = s
	}

	enqueue(newData) {
		if (this.isFull()) {
			throw new Error("Overflow");
		} else {
			this.dados[this.fim++] = newData;
		}
	}

	dequeue() {
		if (this.isEmpty()) {
			throw new Error("Underflow");
		} else {
			return this.dados[this.inicio++];
		}
	}

	front() {
		if (!this.isEmpty()) {
			return this.dados[this.inicio];
		} else {
			throw new Error("Underflow")
		}
	}

	isEmpty() {
		return this.length() === 0;
	}

	isFull() {
		return this.length() === this.comprimento;
	}

	length() {
		return this.fim - this.inicio;
	}

	clear() {
		this.inicio = 0;
		this.fim = 0;
	}

	toString() {
		let resultado = "["

		for (let i = this.inicio; i < this.fim; i++) {
			resultado += `${this.dados[i]}, `;
		}

		resultado += "]"

		return resultado;
	}

}

export default Fila;