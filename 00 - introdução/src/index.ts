import { Cliente  } from "./Cliente"
import { Endereco } from "./Endereco"
import { Produto } from "./Produto"
import { Telefone } from "./Telefone";
import { Venda } from "./Venda";

let enderecoCliente1 = new Endereco("Avenida Dos Barões", 444, "Guarapuava", "Paraná");
let telefoneCliente1 = new Telefone(42, 998290016, "Celular");
let cliente1 = new Cliente("Pedro Henrique", 9112524956 , 25012003, "Masculino", enderecoCliente1, [telefoneCliente1]);
let produto1 = new Produto(1, "Refrigerante", 12.00);
let produto2 = new Produto(2, "Salgadinho", 14.00);
let produto3 = new Produto(3, "Arroz", 20.00);
let venda1 = new Venda(71, 13062023, cliente1, [produto1, produto2, produto3]);

console.log(venda1.calcularTotal());
