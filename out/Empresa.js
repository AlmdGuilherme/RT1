"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa = /** @class */ (function () {
    function Empresa() {
    }
    Empresa.prototype.descreverEmpresa = function () {
        var funcionariosTxt = '';
        this.funcionarios.forEach(function (func) {
            funcionariosTxt += "Nome: ".concat(func.nome, " \n") + "Matr\u00EDcula: ".concat(func.matricula, "\n") + "CPF: ".concat(func.cpf, "\n") +
                "Rua: ".concat(func.endereco.rua, " Bairro: ").concat(func.endereco.bairro, " Cidade: ").concat(func.endereco.cidade, " N\u00FAmero: ").concat(func.endereco.numero);
        });
        return ("Raz\u00E3o Social: ".concat(this.razaoSocial, "\n") +
            "Nome Fantasia: ".concat(this.nomeFantasia, "\n") +
            "CNPJ: ".concat(this.cnpj, "\n") +
            "Endere\u00E7o:\n" +
            "Rua: ".concat(this.endereco.rua, " \n") +
            "Bairro: ".concat(this.endereco.bairro, "\n") +
            "Cidade: ".concat(this.endereco.cidade, "\n") +
            "N\u00FAmero: ".concat(this.endereco.numero, " \n\n") +
            "Funcion\u00E1rios:\n" +
            "".concat(funcionariosTxt));
    };
    return Empresa;
}());
exports.default = Empresa;
