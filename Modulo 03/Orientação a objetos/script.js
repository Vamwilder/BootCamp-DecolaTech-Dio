class contaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor;
    }
    sacar(valor) {
        if(valor > this._saldo){
            return "Operação negada";
            
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = "corrente";
        this.cartaoCredito = cartaoCredito;
    }
    get cartaoCredito() {
        return this.cartaoCredito;
    }
    set cartaoCredito(resposta) {
        this.cartaoCredito = resposta;
    }
}

class ContaPoupanca extends contaBancaria {
    constructor(agencia, numero, tipo){
        super(agencia,numero,tipo);
        this.tipo = "Poupança";
    }
}

class ContaUniversitaria extends contaBancaria {
    constructor(agencia, numero, tipo){
        super(agencia,numero,tipo);
        this.tipo = "Universitária";
    }
    sacar(valor) {
        if (valor < 500) {
            this._saldo = this._saldo - valor;
        } else {
            return "Operação negada!";
        }
    }
}