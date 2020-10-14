
class FilaCircular {

	constructor(t = 10) {
		this.capacidade = t;
		this.dados = [];
		this.inicio = 1;
		this.fim = 1;
	}

	enqueue(newData) {
		if (this.isFull()) {
			throw new Error("Overflow")
		} else {
			this.dados[this.fim] = newData;
			if (this.fim === this.capacidade) {
				this.fim = 0;
			} else {
				this.fim = this.fim + 1;
			}
		}
	}

	dequeue() {
		if (this.isEmpty()) {
			throw new Error("Underflow")
		} else {
			let result = this.dados[this.inicio];
			if (this.inicio === this.capacidade) {
				this.inicio = 0;
			} else {
				this.inicio = this.inicio + 1;
			}
			return result;
		}
	}

	front() {
		if (!this.isEmpty()) {
			return this.dados[this.inicio];
		}
	}

	clear() {
		this.inicio = 1;
		this.fim = 1;
	}

	toString() {
		let result = "[";
		if (this.inicio <= this.fim) {
			for (let i = this.inicio; i <= this.fim; i++) {
				result += ` ${this.dados[i]} `;
			}
		} else {
			for (let i = this.inicio; i < this.tamanho; i++) {
				result += ` ${this.dados[i]} `;
			}
			for (let i = 0; i <= this.fim; i++) {
				result += ` ${this.dados[i]} `;
			}
		}
		result += "]";
		return result;
	}

	length() {
		if (this.isEmpty()) {
			return 0;
		} else if (this.inicio < this.fim) {
			return this.fim - this.inicio;
		} else {
			return this.capacidade - this.inicio + this.fim + 1;
		}
	}

	isEmpty() {
		return this.inicio === this.fim;
	}

	isFull() {
		return this.inicio === this.fim + 1;
	}
}

export default FilaCircular;
