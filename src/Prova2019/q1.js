export default class Fracao {
    constructor(numerador, denominador) {
      this.numerador = numerador;
      this.denominador = denominador;
    }
    multiplicacao({ numerador, denominador }) {
      let f = new Fracao(numerador, denominador);
      f.numerador = f.numerador * this.numerador;
      f.denominador = f.numerador * this.denominador;
      return f;
    }
    divisao({ numerador, denominador }) {
      return this.multiplicacao({
        numerador: denominador,
        denominador: numerador
      });
    }
    resultado() {
        return this.numerador/this.denominador;
    }
  }