let cadastrado = "admin";

let senha = "1234";

let usuarioDigitado = "admin";

let senhaDigitada = "9999";

if (cadastrado ==  usuarioDigitado && !senha ){
    console.log("deu ruim")
}


let cadastrado = "admin";
let senha = "1234";

let usuarioDigitado = "admin";
let senhaDigitada = "9999";

// Se o usuário digitado for igual ao cadastrado E a senha digitada for igual à senha cadastrada
if (cadastrado === usuarioDigitado && senha === senhaDigitada) {
    console.log("Login realizado com sucesso!");
} else {
    // Se algo estiver errado (como é o caso atual, já que a senha digitada é 9999), cai aqui
    console.log("Usuário ou senha incorretos. Deu ruim!");
}
