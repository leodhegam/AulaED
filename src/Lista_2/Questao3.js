import Fila from "../Fila";


class Transportadora {
	constructor() {
		this.fila = new Fila(10);
	}

	limiteCarregamentos() {
		return this.fila.isFull();
	}

	existeAguardo() {
		return !(this.fila.isEmpty());
	}

	chegada(caminhao) {
		this.fila.enqueue(caminhao);
	}

	saida() {
		return this.fila.dequeue();
	}

	listar() {
		this.fila.toString();
	}
}

export default Transportadora;