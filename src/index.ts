import Empresa from "./Empresa";
import Endereco from "./Endereco";
import Funcionario from "./Funcionario";
import Telefone from "./Telefone";


let enderecoEmpresa = new Endereco()
enderecoEmpresa.numero = 123
enderecoEmpresa.rua = 'Av. Paulista'
enderecoEmpresa.bairro = 'Jardim Paulista'
enderecoEmpresa.cidade = 'São Paulo'


let empresa = new Empresa()
empresa.razaoSocial = 'ABC LTDA'
empresa.nomeFantasia = 'Mercado Online'
empresa.cnpj = '999-999-999-999-99'
empresa.endereco = enderecoEmpresa
empresa.funcionarios = []

let enderecoFuncionario1 = new Endereco()
enderecoFuncionario1.numero = 123
enderecoFuncionario1.rua = 'Av. Paulista'
enderecoFuncionario1.bairro = 'Jardim Paulista'
enderecoFuncionario1.cidade = 'São Paulo'

let telefoneFuncionario1 = new Telefone()
telefoneFuncionario1.ddd = '12'
telefoneFuncionario1.numero = '999999999'

let funcionario1 = new Funcionario()
funcionario1.nome = 'Tony Stark'
funcionario1.matricula = '123456789'
funcionario1.cpf = '999.999.999-99'
funcionario1.endereco = enderecoFuncionario1
funcionario1.telefone = telefoneFuncionario1


empresa.funcionarios.push(funcionario1)

console.log(empresa.descreverEmpresa())