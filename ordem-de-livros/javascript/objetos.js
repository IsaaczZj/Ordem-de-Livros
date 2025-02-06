const autores = [
    {
        id: 1,
        nome: 'J.K Rowling',
        idade: 65
    },
    {
        id: 2,
        nome: 'Tolkien',
        idade: 89
    },
    {
        id: 3,
        nome: 'George Martin',
        idade: 50
    }
]
console.log(autores[0].nome);
console.log(autores[1].nome);
console.log(autores[2].nome);
console.log(autores[3]?.nome); //Gera um resultado undefined caso nao exista

const series = [
    {
        titulo: 'Harry potter',
        descricao: 'Harry Potter é uma série de fantasia criada por J.K. Rowling que acompanha o jovem bruxo Harry e seus amigos enquanto enfrentam desafios mágicos em Hogwarts, uma escola de bruxaria.',
        livros: [
            {
                id: 'Pedra',
                titulo: 'Pedra Filosofal',
                ano: 1997
            },
            {
                id: 'Fenix',
                titulo: 'Ordem da Fenix',
                ano: 1998
            },
            {
                id: "Camara",
                titulo: "Camara Secreta",
                ano: 1999
            }
        ]
    }
]
console.log(`${series[0].titulo} - ${series[0].livros[1].titulo}`);
