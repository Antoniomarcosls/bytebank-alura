import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Antonio", 10000, 11122233398);
diretor.cadastrarSenha("12345");
const gerente = new Gerente("Roberto", 5000, 22233344499);

const estaLogado = SistemaAutenticacao.login(diretor, "12345");

console.log(estaLogado);