
// QUESTÃO 1: (ENADE 2014, Adaptada) Uma estrutura de dados do tipo pilha pode ser usada em um algoritmo que permite imprimir uma palavra de forma invertida. Por exemplo, ABACAXI deve ser impresso IXACABA.
// Utilizando as variáveis declaradas abaixo como variáveis globais,
// #DEFINE TAM 10
// char pilha[TAM];
// int topo;
// char palavra[TAM];
// Faça o que se pede:
// i) Desenvolva a função push que inclui um elemento na pilha. (valor 0,75)
// ii) Desenvolva a função pop que retira um elemento da pilha. (valor 0,75)
// iii) Desenvolva a função inverte que leia a palavra da entrada padrão (scanf) e, utilizando as funções push e pop da pilha, imprima a palavra de forma invertida (valor 1,0)
// Dica: utilize as seguintes assinaturas de funções:
// void push(char dado);
// char pop ();
// void inverte ();
class Pilha {

	/**
	 * Construtor padrão da classe Pilha.
	 * @param {number} [size = 10] - Tamanho da Pilha. Caso não informado a Pilha terá tamanho 10.
	 */
	constructor(size = 10) {
		this.maxSize = size;
		this.dados = [];
		this.topo = -1;
	}

	/**
	 * Adicionar um elemento na pilha.
	 * Todo elemento deverá ser adicionado no topo da pilha.
	 * Para evitar problemas é realizado um teste para verificar se a pilha está cheia (stack overflow).
	 * @param {any} newData - Elemento a ser adicionado à Pilha.
	 * @throws {Error} - Lança um erro de Overflow caso a pilha esteja cheia.
	 */
	push(newData) {
		if (this.isFull()) {
			throw new Error("Stack overflow")
		} else {
			this.dados[++this.topo] = newData;
		}
	}

	/**
	 * Remover um elemento da pilha.
	 * Todo elemento deverá ser removido do topo da pilha
	 * Para evitar problemas é realizado um teste para verificar se a pilha está vazia (stack underlow).
	 * @returns {any} - Retorna o elemento removido da Pilha.
	 * @throws {Error} - Lança um erro de Underflow caso a pilha esteja vazia.
	 */
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
function inverter(pilha) {

    const Ordempilhainvertida = new Pilha(pilha.maxSize);
    while (!pilha.isEmpty()) {
      Ordempilhainvertida.push(pilha.pop());
    }
    return OrdemInvertida;
  }
  
  export { Stack, inverter };

export default Pilha;