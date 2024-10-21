import mongoose from "mongoose";
import {autorSchema} from "./Autor.js";

//Schema é um objeto de configuração que define a estrutura e as propriedades de um documento
const livroSchema = new mongoose.Schema({
   id : { type: mongoose.Schema.Types.ObjectId },
   titulo : {type: String, required: true},
   editora: {type: String},
   preco: {type: Number},
   paginas: {type: Number},
   autor: autorSchema
}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;

//Modelo é um objeto que representa uma coleção e um banco de dados. É uma interface que permite à API interagir com os
//documentos de uma coleção. Portanto, é o modelo que fornece para a API todos os métodos de que nós conseguiremos
//executar com o CRUD