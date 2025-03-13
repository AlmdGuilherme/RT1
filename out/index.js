"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DescritorEmpresa_1 = __importDefault(require("./DescritorEmpresa"));
var Empresa_1 = __importDefault(require("./Empresa"));
var Endereco_1 = __importDefault(require("./Endereco"));
var Funcionario_1 = __importDefault(require("./Funcionario"));
var Telefone_1 = __importDefault(require("./Telefone"));
var funcionario1 = new Funcionario_1.default('Tony Stark', '123456789', '999-999-999.99', new Endereco_1.default(123, 'Av. Paulista', 'Jardim Paulistano', 'São Paulo'), new Telefone_1.default('12', '999999999'));
var funcionario2 = new Funcionario_1.default('Steve Rogers', '123456789', '999-999-999.99', new Endereco_1.default(123, 'Av. Paulista', 'Jardim Paulistano', 'São Paulo'), new Telefone_1.default('12', '999999999'));
var empresa = new Empresa_1.default('ABC LTDA', 'Mercado Online', '999-999-999-999-99', new Endereco_1.default(123, 'Av. Paulista', 'Jardim Paulistano', 'São Paulo'), [funcionario1, funcionario2]);
var descritor = new DescritorEmpresa_1.default;
console.log(descritor.descrever(empresa));
