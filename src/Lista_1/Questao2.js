import Pilha from "../Pilha";

function invertePalavra(palavra) {
	const p = new Pilha(palavra.length);
	let result = "";

	for (let c of palavra) {
		p.push(c);
	}
	while (!p.isEmpty()) {
		result += p.pop();
	}

	return result;
}

export default invertePalavra;