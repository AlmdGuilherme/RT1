import Endereco from "./Endereco"
import Funcionario from "./Funcionario"

export default class Empresa {
  public razaoSocial: string;
  public nomeFantasia: string;
  public cnpj: string;
  public endereco: Endereco;
  public funcionarios: Funcionario[];

  constructor(razaoSocial:string, nomeFantasia:string, cnpj:string, endereco: Endereco, funcionarios: Funcionario[]){
    this.razaoSocial = razaoSocial
    this.nomeFantasia = nomeFantasia
    this.cnpj = cnpj
    this.endereco = endereco
    this.funcionarios = funcionarios
  }
}