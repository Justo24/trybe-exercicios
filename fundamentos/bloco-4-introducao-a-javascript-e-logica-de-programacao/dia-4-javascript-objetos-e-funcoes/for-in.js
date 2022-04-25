let info = {
    personagem: 'Margarida e Tio Patinhas',
    origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
    recorrente: 'Ambos recorrentes',
  };

console.log("Bem vinda,", info.personagem)

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos:
    [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

console.log("O livro favorito de", leitor.nome, leitor.sobrenome, "se chama", leitor.livrosFavoritos[0].titulo);
