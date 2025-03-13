import DescritorEmpresa from "./DescritorEmpresa";
import Empresa from "./Empresa";
import Endereco from "./Endereco";
import Funcionario from "./Funcionario";
import Telefone from "./Telefone";

let funcionario1 = new Funcionario('Tony Stark', '123456789', '999-999-999.99',
  new Endereco(123, 'Av. Paulista', 'Jardim Paulistano', 'São Paulo'), new Telefone('12', '999999999'))
let funcionario2 = new Funcionario('Steve Rogers', '123456789', '999-999-999.99',
  new Endereco(123, 'Av. Paulista', 'Jardim Paulistano', 'São Paulo'), new Telefone('12', '999999999'))


let empresa = new Empresa('ABC LTDA', 'Mercado Online', '999-999-999-999-99', 
  new Endereco(123, 'Av. Paulista', 'Jardim Paulistano', 'São Paulo'), [funcionario1, funcionario2])


let descritor = new DescritorEmpresa
console.log(descritor.descrever(empresa));
