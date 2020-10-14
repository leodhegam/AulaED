import Fila from "../Fila";

export default function intercalaFilas(f1, f2) {

	let aux = new Fila(f1.length() + f2.length())

	while (!f1.isEmpty() || !f2.isEmpty()) {

		if (!f1.isEmpty()) aux.enqueue(f1.dequeue());
		if (!f2.isEmpty()) aux.enqueue(f2.dequeue());
	}

	return aux;
}