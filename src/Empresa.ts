import Endereco from "./Endereco"
import Funcionario from "./Funcionario"

export default class Empresa {
  public razaoSocial: string;
  public nomeFantasia: string;
  public cnpj: string;
  public endereco: Endereco;
  public funcionarios: Funcionario[];

  public descreverEmpresa() {
    let funcionariosTxt = ''
    this.funcionarios.forEach(func => {
      funcionariosTxt += `Nome: ${func.nome} \n` + `Matrícula: ${func.matricula}\n` + `CPF: ${func.cpf}\n` + 
      `Rua: ${func.endereco.rua} Bairro: ${func.endereco.bairro} Cidade: ${func.endereco.cidade} Número: ${func.endereco.numero}`
    });
    return (
      `Razão Social: ${this.razaoSocial}\n` +
      `Nome Fantasia: ${this.nomeFantasia}\n` +
      `CNPJ: ${this.cnpj}\n` +
      `Endereço:\n` +
      `Rua: ${this.endereco.rua} \n` +
      `Bairro: ${this.endereco.bairro}\n` +
      `Cidade: ${this.endereco.cidade}\n` +
      `Número: ${this.endereco.numero} \n\n` +
      `Funcionários:\n` +
      `${funcionariosTxt}`
    );
  }
}