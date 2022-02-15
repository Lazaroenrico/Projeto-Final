console.clear();
const prompt = require("prompt-sync")();
console.log();

//variveis e arrays
let school;
var finish;
let relogio;
let attk;
let placar = 0;
let placar2 = 0;
let defesa;
let rod;
let clear;
let rodar;
let testesaque;

//objeto e alguns com metodos

let pontuacao = {
  timInimigo: 0,
  seuTime: 0,
  turn: 0,
  metodo: function () {
    this.turn++;
  },
  mudancaSet: function () {
    if (placar > placar2 ) {
      this.seuTime++;
      console.log(`Seu time ganhou ${this.seuTime} set(s).`);
      console.log()
    }
    if (placar2 > placar ) {
      this.timeInimigo++;
      console.log(`Seu time ganhou ${this.timInimigo} set(s).`);
      console.log()
    }
  },
};

relogio = {
  Hora: 0,
  Minuto: 0,
  tempo: function (numero) {
    this.Minuto += numero;
    if (this.Minuto > 60) {
      let taime = this.Minuto - 60;
      this.Minuto = 0;
      this.Minuto += taime;
      this.Hora++;
    }
    return this.Hora, this.Dia;
  },
  mostrar: function () {
    console.log(`------------------------`);
    console.log(`Se passaram ${this.Hora}hr(s) de jogo`);
    console.log(`Se passsaram ${this.Minuto} minutos de jogo`);
    console.log(`------------------------`);
  },
};

let desafio = [
  "Entrosamento com o time: terá que comer os restos dos jogadores.",
  "Desafio da corrida: terá que correr 10km sem parar.",
  "Desafio do saque: Terá que acerta 200 saques.",
  "Desafio da recepção: Terá que receber 200 cortes.",
  "Humilhação: terá que ficar semi nú no telho da escola durante o hino.",
];

let t = [
  {
    nome: "Takemichi",
    posicao: "oposto",
  },
  { nome: "Kageyama", posicao: "levantador" },
  { nome: "Draken", posicao: "central" },
  { nome: "Myke", posicao: "ponta 1" },
  { nome: "Kisake", posicao: "ponta 2" },
  { nome: "Mitsuia", posicao: "libero" },
];
let a = [
  { nome: "Zoro", posicao: "oposto" },
  { nome: "Sanji", posicao: "levantador" },
  { nome: "Luffy", posicao: "central" },
  { nome: "Shanks", posicao: "ponta 1" },
  { nome: "Halkes", posicao: "ponta 2" },
  { nome: "kise", posicao: "libero" },
];
let o = [
  {
    nome: "Daiki",
    posicao: "oposto",
  },
  { nome: "Toru", posicao: "levantador" },
  { nome: "Izuki", posicao: "central" },
  { nome: "Himuro", posicao: "ponta 1" },
  { nome: "Mitobe", posicao: "ponta 2" },
  { nome: "Shintaro", posicao: "libero" },
];

//Colocar dentro de rodizio
function c(parametro) {
  if (parametro == " Torishima") {
    return (t = [
      {
        nome: "Takemichi",
        posicao: "oposto",
      },
      { nome: "Kageyama", posicao: "levantador" },
      { nome: "Draken", posicao: "central" },
      { nome: "Myke", posicao: "ponta 1" },
      { nome: "Kisake", posicao: "ponta 2" },

      { nome: "Mitsuia", posicao: "libero" },
    ]);
  } else if (parametro == "Aomine") {
    return (a = [
      { nome: "Zoro", posicao: "oposto" },
      { nome: "Sanji", posicao: "levantador" },
      { nome: "Luffy", posicao: "central" },
      { nome: "Shanks", posicao: "ponta 1" },
      { nome: "Halkes", posicao: "ponta 2" },

      { nome: "kise", posicao: "libero" },
    ]);
  } else if (parametro == "Oikawa") {
    return (o = [
      {
        nome: "Daiki",
        posicao: "oposto",
      },
      { nome: "Toru", posicao: "levantador" },
      { nome: "Izuki", posicao: "central" },
      { nome: "Himuro", posicao: "ponta 1" },
      { nome: "Mitobe", posicao: "ponta 2" },

      { nome: "Shintaro", posicao: "libero" },
    ]);
  } else {
    return (o = [
      {
        nome: "Daiki",
        posicao: "oposto",
      },
      { nome: "Toru", posicao: "levantador" },
      { nome: "Izuki", posicao: "central" },
      { nome: "Himuro", posicao: "ponta 1" },
      { nome: "Mitobe", posicao: "ponta 2" },

      { nome: "Shintaro", posicao: "libero" },
    ]);
  }
}

//OBSERVAÇÃO
function obs() {
  console.log("----------------------------------------------");
  console.log("OBS: ");
  console.log();
  console.log("As partidas de vôlei, terão uma duração menor do que");
  console.log("o convencional, para que o jogador não sature");
  console.log("de sua jogabilidade !"); 
  console.log();
  console.log("----------------------------------------------");
}

//Função para mostra das posições
function posicao() {
  console.log(`As posições existentes e o número de jogadores no vôlei são:

  Possui 6 jogadores em campo, mas são 5 POSIÇÕES e elas são:

  [1] Levantador
  Sua função é distribuir a bola para que seus companheiros possam atacar.
  
  [2] Líbero
  Principal jogador de defesa e passa do time e não pode fazer
  parte do ataque.  
  
  [3] Pontas( 'Ponta' 1 fica na esquerda e 'Ponta' 2 fica na direita da quadra)
  Ficam nas laterais da quadra e a sua função é de defender os ataques do time
  adversário e realizar o ataque na entrada da rede.
  
  [4] Central
  São os mais altos, realizam bloqueios e são muito ágeis, podendo
  defender as bolas rápidas lançadas do levantador para o oposto.
  
  [5] Oposto
  Ocupa a posição oposta a do levantador, sendo focado no ataque
  e deve sempre estar posicionado de forma a receber o passe do levantador.`);
}

//função para escolher um valor aleatório dentro de um array
function RandArray(array) {
  let rand = (Math.random() * array.length) | 0; // | significa diferente
  let result = array[rand];
  return result;
}

//Função de rolar
const rolai = () => Math.floor(Math.random() * 3 + 1);
rod = rolai();

//rodizio de saque
function rodizio(argumento) {
  let aa = [];
  let saqueA;
  for (let i of argumento) {
    aa.push(i.nome);
  }

  for (pontuacao.turn; pontuacao.turn < 5; ) {
    console.log();
    console.log(`O jogador que irá sacar será ${aa[pontuacao.turn]}`);
    do {
      rodar = rolai();
      if (rodar == 1 || rodar == 3) {
        console.log();
        console.log(`Muito bom saque !`);
        saqueA = 1;
        pontuacao.metodo();
        return saqueA;

        //pontuação
      } else if (rodar == 2) {
        console.log();
        placar++;
        console.log("QUE SAQUEEEE, FOI UM BELO ACE !!");
        //pontuação
      }
    } while (rodar == 2);

    break;
  }
  return rodar;
}

//função para não precisar repetir isso nas 3 escolas
function random1() {
  console.log(`Como você é o novato do time, terá que cumprir com
    um desfio proposto pelo capitão, infelismente terá que cumpri-lo,
    querendo ou não, fazer oque né novato, e o desafio é :\n
    ${RandArray(desafio)} 
    
     `);
}

//Jogabilidade com set
function Game() {
  placar = 0;
  placar2 = 0;

  Game: for (let i = 0; i < 3; i++) {
    console.log('for interno', i)
    testesaque = rodizio(teste);

    Teste: while (testesaque == 1) {
      console.log();
      console.log("O libero inimigo recebeu.");
      console.log();
      clear = prompt("Enter...");
      console.clear;
      console.log("----------------------------------------------");
      console.log();
      console.log(`Eles mandarm uma forte, escolha como você 
  irá bloquear:

[1] Bloqueio Soft 
Bloqueio para aliviar a recepção

[2] Bloqueio Ghost 
Bloqueio para marca, mas a chance de 
dar certo é menor `);
      console.log();
      defesa = +prompt("Digite o número: ");
      console.log();
      while (defesa != 1 && defesa != 2) {
        defesa = +prompt("Invalido, digite novamente: ");
        console.log()
      }
      if (defesa == 1) {
        rod = rolai();

        if (rod == 3) {
          console.log("Que pena, você foi muito lento !");
          console.log();
          relogio.tempo(1);
          relogio.mostrar();
          clear = prompt("Enter...");
          console.clear();

          placar2++;
        } else if (rod == 2) {
          console.log()
          console.log("Boa você conseguiu receber bem !");
          rod = rolai();

          if (rod == 1 || rod == 2) {
            console.log();
            attk = prompt("Você irá passar para o levantador ? ");
            console.log();

            while (
              attk.toLowerCase() != "sim" &&
              attk.toUpperCase() != "sim" &&
              attk.toLowerCase() != "nao" &&
              attk.toUpperCase() != "nao"
            ) {
              attk = prompt('Digite "sim" ou "nao": ');
              console.log();
            }

            if (attk == "sim") {
              console.log("| Você passou para o levantador |");
              console.log();
              console.log("O LEVANTADOR: ");
              console.log();
              console.log("Oposto essa é sua !!");
              console.log();
              console.log("| PONTO |");
              console.log();
              console.log("Viu como que se joga novato !");
              relogio.tempo(4);
              relogio.mostrar();
              clear = prompt("Enter...");
              console.clear();
              placar++;
            } else if (attk == "nao") {
              console.log("| Você passou para o ponta 1 |");
              console.log();
              console.log("PONTA 1:");
              console.log();
              console.log("Porra novato, não consegui chegar a tempo");
              console.log("essa era do levantador !!");
              console.log();
              relogio.tempo(4);
             relogio.mostrar();
             console.log()
              clear = prompt("Enter...");
              console.clear();
              placar2++;
            }
          }
        } else if (rod == 1) {
          console.log("Você recebeu tão bem, que executou um:");
          console.log();
          console.log("| ATAQUE RÁPIDO |");
          console.log();
          relogio.tempo(3);
          relogio.mostrar();
          clear = prompt("Enter...");
          console.clear();
          placar++;
          break Teste;
        }
      } else if ((defesa = 2)) {
        rod = rolai();

        if (rod == 1) {
          console.log();
          console.log("Boa leitura novato");
          console.log();
          relogio.tempo(1);
          relogio.mostrar();
          clear = prompt("Enter...");
          console.clear();
          placar++;
          break Teste;
        } else if (rod == 2 || rod == 3) {
          console.log();
          console.log("Era só receber soft novato, que");
          console.log("você ia pegar !");
          console.log();
          relogio.tempo(1);
          relogio.mostrar();
          clear = prompt("Enter...");
          console.clear();
          placar2++;
        }
      }
      clear = prompt("Enter...");
      console.clear();
      clear = prompt("O time inimigo saca...");
      rod = rolai();
      if (rod == 1) {
        console.log("O time inimigo erra o saque e fazemos um ponto");
        relogio.tempo(3);
        relogio.mostrar();
        placar++;
        testesaque = 2;
      }
      if (rod == 2 || rod == 3) {
        console.log();
        console.log("Vocês conseguem receber o saque do time inimigo");
        console.log("e loga em seguida passa para o levanatdor");
        console.log();
        console.log("Você quer realizar um corte ? ");
        console.log()
        let corte = prompt("Resposta: ");

        while (
          corte.toLowerCase() != "sim" &&
          corte != "s" &&
          corte.toLowerCase() != "nao" &&
          corte.toLowerCase() != "n"
        ) {
          console.log();
          corte = prompt('Digite "sim" ou "nao": ');
        }

        if (corte.toLowerCase() == "sim" || corte.toLowerCase() == "s") {
          console.log()
          console.log("Você realiza o corte e faz o ponto");
          console.log()
          relogio.tempo(3);
          relogio.mostrar();

          ++placar;
          testesaque = 2;
        }
        if (corte.toLowerCase() == "nao" || corte.toLowerCase() == "n") {
          console.log()
          console.log("Você joga com segurança a bola para o outro lado !");
          console.log()
          relogio.tempo(1);
          relogio.mostrar();
          continue Teste;
        }
      }
    }
  }
  pontuacao.mudancaSet();

}

// INICIO DO JOGO
console.log();
console.log();

console.log(" The Volei: ");
console.log();
console.log();

const character = prompt("Digite um nome para seu personagem: ");

console.log();
do {
  console.clear()

  console.log(`Escolha uma dessas escolas para ${character} frequentar`);
  console.log();
  console.log("-Torishima");
  console.log("-Aomine");
  console.log("-Oikawa");
  console.log();
  school = prompt(`Digite o nome da escola: `);

  var teste = c(school);
  console.log();

  //while de validação do nome da escola
  while (school != "Torishima" && school != "Aomine" && school != "Oikawa") {
    school = prompt("Digite um nome válido: ");
  }

  //inicio da história e suas escolas
  if (school == "Torishima") {
    console.clear();
    console.log(
      `${character} acaba de completar o Ensino Fundamental e irá para
o E.M., e deseja continuar jogando seu esporte preferido,
que é o vôlei e irá jogar pelo colégio Torishima, 
que possui como técnico Atsushi, que ganhou no passado jogando
pelo mesmo time que está atualmente.

A Jornada deste jogo deciderá se ${character} irá ter sucesso em
seu sonho de entrar para um time no colegial.

 E esse sonho só acontecerá se ele ganhar seu primeiro jogo treino.`
    );
    console.log();
    clear = prompt(`De enter para continuar...`);
    console.clear();
    console.log();
    obs();
    clear = prompt(`De enter para continuar...`);
    console.clear();
    console.log();
    console.log("----------------------------------------------");
    posicao();
    console.log("----------------------------------------------");
    clear = prompt(`De enter para continuar...`);
    console.clear();
    console.log();
    console.log("----------------------------------------------");
    console.log();
    random1();
    console.log("----------------------------------------------");
    console.log();
    clear = prompt(`De enter para continuar...`);
    console.clear();
    console.log("----------------------------------------------");
    console.log();
    console.log(`Novato ${character}, iremos agora apresentar  o nosso time:`);
    console.log();
    for (let i of t) {
      console.log(`O ${i.nome} joga na posição ${i.posicao}`);
      console.log();
    }
    console.log();
    console.log();
    console.log(` Comigo de capitão( Myke ), eu tenho a confiança e vejo a possibilidade
    de ganahrmos a Liga RJ esse ano !

     Novato, você era conhecido pelos seus passes 'perfeitos' e sua combinação de 
     jogadas com seus antigos membros, depois iremos ver realmente se suas 
     habilidades são tudo isso no treino depois da aula.`);
    console.log("----------------------------------------------");
    console.log();
    clear = prompt(`De enter para continuar...`);
    console.clear();
    console.log("----------------------------------------------");
    console.log();
    console.log(`'Depois da aula:'`);
    console.log();
    console.log(`Teremos um jogo treino contra o colegio Aomine, joguem com tudo
        para mostrar ao novato como é um jogo de verdade.`);
    console.log();
    console.log("----------------------------------------------");
    clear = prompt(`De enter para continuar...`);
    console.clear();
    console.log("----------------------------------------------");
    console.log();
    console.log("O colegio chegou e o jogo começou:");
    console.log();
   for(let i = 0; i < 3; i++){
    Game();
    }
    
  }
  if (school == "Aomine") {
    console.clear();
    console.log(
      `${character} acaba de completar o Ensino Fundamental e irá para
o E.M., e deseja continuar jogando seu esporte preferido,
que é o vôlei e irá jogar pelo colégio Aomine,
que possui o ex-tecnico da seleção brasileira Jelleal, 
que é rigoroso em seus treinos.

A Jornada deste jogo deciderá se ${character} irá ter sucesso em
seu sonho de entrar para um time no colegial.

 E esse sonho só acontecerá se ele ganhar seu primeiro jogo treino.`
    );
    console.log();
    clear = prompt(`De enter para continuar...`);
    console.clear();
    console.log();
    obs();
    clear = prompt(`De enter para continuar...`);
    console.clear();
    console.log("----------------------------------------------");
    console.log();
    posicao();
    console.log("----------------------------------------------");

    console.log();
    clear = prompt(`De enter para continuar...`);
    console.clear();
    console.log("----------------------------------------------");
    console.log();
    random1();
    console.log("----------------------------------------------");
    console.log();
    clear = prompt(`De enter para continuar...`);
    console.clear();
    console.log("----------------------------------------------");
    console.log();
    console.log(`Novato ${character}, iremos agora apresentar  o nosso time:`);
    console.log();
    for (let i of a) {
      console.log(`O ${i.nome} joga na posição ${i.posicao}`);
      console.log();
    }
    console.log(
      `Comigo de capitão( Sanji ) e com Jelleal de tecnico,
    ganharemos essa Liga Rj este ano !

    Novato, você era conhecido pelos seus passes 'perfeitos' e sua combinação de 
    jogadas com seus antigos membros, depois iremos
    ver realmente se suas habilidades são tudo isso
    no treino depois da aula.`
    );
    console.log("----------------------------------------------");
    clear = prompt(`De enter para continuar...`);
    console.clear();
    console.clear();
    console.log("----------------------------------------------");
    console.log();
    console.log(`'Depois da aula:'`);
    console.log();
    console.log(`Teremos um jogo treino contra o colegio Oikawa, joguem com tudo
        para mostrar ao novato como é um jogo de verdade.`);
    console.log();
    console.log("----------------------------------------------");
    clear = prompt(`De enter para continuar...`);
    console.clear();
    console.log("----------------------------------------------");
    console.log();
    console.log("O colegio chegou e o jogo começou:");
    console.log();

    for(let i = 0; i < 3; i++){
      console.log('for externo', i)
      Game();
      }
  }

  if (school == "Oikawa") {
    console.clear();
    console.log(
      `${character} acaba de completar o Ensino Fundamental e irá para
o E.M., e deseja continuar jogando seu esporte preferido,
que é o vôlei e irá jogar pelo colégio Oikawa,
que é o atual campeão da Liga RJ juntamente com o técnico Roberto.

A Jornada deste jogo deciderá se ${character} irá ter sucesso em
seu sonho de entrar para um time no colegial.

 E esse sonho só acontecerá se ele ganhar seu primeiro jogo treino.`
    );
    console.log();
    clear = prompt(`De enter para continuar...`);
    console.clear();
    console.log();
    obs();
    clear = prompt(`De enter para continuar...`);
    console.clear();
    console.log("----------------------------------------------");
    posicao();
    console.log("----------------------------------------------");
    console.log();
    clear = prompt(`De enter para continuar...`);
    console.clear();
    console.log();
    console.log("----------------------------------------------");
    console.log();
    random1();
    console.log("----------------------------------------------");
    console.log();
    clear = prompt(`De enter para continuar...`);

    console.clear();
    console.log("----------------------------------------------");
    console.log();
    console.log(`Novato ${character}, iremos agora apresentar  o nosso time:`);
    console.log();
    for (let i of o) {
      console.log(`O ${i.nome} joga na posição ${i.posicao}`);
      console.log();
    }
    console.log(`
     Comigo de capitão( Toru ), ganharemos novamente a Liga RJ e nos
    tornaremos os maiores ganhadores da liga. !

    Novato, você era conhecido pelos seus seus passes 'perfeitos' e sua combinação de 
    jogadas com seus antigos membros, depois iremos ver realmente se suas 
    habilidades são tudo isso no treino depois da aula.`);
    console.log("----------------------------------------------");
    clear = prompt(`De enter para continuar...`);
    console.clear();
    console.log("----------------------------------------------");
    console.log();
    console.log(`'Depois da aula:'`);
    console.log();
    console.log(`Teremos um jogo treino contra o colégio Torishima, joguem com tudo
        para mostrar ao novato como é um jogo de verdade.`);
    console.log();
    console.log("----------------------------------------------");
    clear = prompt(`De enter para continuar...`);
    console.clear();
    console.log("----------------------------------------------");
    console.log();
    console.log("O colegio chegou e o jogo começou:");
    console.log();
    for(let i = 0; i < 3; i++){
    Game();
    }
    
    
  }
  
  console.log('                 FIM DE SUA CAMINHA                  ')
  console.log()
  console.log('Espero que você tenha gostado dessa experiência ')
  console.log('e obrigado por ter jogado até aqui !')

console.log()
console.log()
console.log('Caso queira jogar novamente digite "SIM abaixo"')
console.log()
finish = prompt('Resposta: ')

while(finish.toLowerCase() != "sim" &&
finish != "s" &&
finish.toLowerCase() != "nao" &&
finish != "n" ){
  console.log()

  finish = prompt('Digite "sim" ou "nao" : ')


    
  }
} while (finish == "s" || finish.toLowerCase() == 'sim');
