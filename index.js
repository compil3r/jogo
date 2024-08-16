const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let usuario = [];

let usuario1 = {
    nome: "Guilherme lindo",
    phone: "99999999",
    email: "guilhermmene@",
    cpf: "0009993939"
}
let usuario2 = {
    nome: "André",
    phone: "99999999",
    email: "guilhermmene@",
    cpf: "000923939"
}
let usuario3 = {
    nome: "Lucas",
    phone: "99999999",
    email: "guilhermmene@",
    cpf: "000992223939"
}

usuario.push(usuario1, usuario2, usuario3)

app.get('/usuarios/listar' , (request,response) => {
    response.send(usuario)
})

app.get('/', (request, response) => {
    response.send('Funcionou')
})

app.post('/usuarios/criar', (request, response) => {
    //const usuario4 = request.body;

    const usuario4 = {
        nome: request.body.nome,
        email: request.body.email,
        cpf: request.body.cpf,
        phone: request.body.phone
    }

    usuario.push(usuario4);
    response.send("Sucesso")
})

app.get("/usuarios/detalhes/:cpf", (request, response) => {
    const cpf = request.params.cpf;

    const usuarioFiltrado = usuario.filter(function(user) {
        return user.cpf == cpf
    })

    response.send(usuarioFiltrado)
})



app.listen(port, ()=> console.log(`rodando na porta ${port}`));