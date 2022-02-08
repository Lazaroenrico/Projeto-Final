console.clear();
const prompt = require("prompt-sync")();
console.log();

console.log("                                                VÔLEI   ");

//variveis e arrays
let challenge;
let school;
let turn = 0;
var finish;
let character2;

//objeto e alguns com método
let tempo = { minuto: 0 };
let status = {
  stamina: 100,
  fperna: 100,
  dstamina: function (sdiminuir) {
    this.stamina -= sdiminuir;
    return sdiminuir;
  },
  asatamina: function (saumentar) {
    this.stamina += saumentar;
    return saumentar;
  },
  dfperna: function (pdiminuir) {
    this.fperna += pdiminuir;
    return pdiminuir;
  },
  afperna: function (paumentar) {
    thisfperna += paumentar;
    return paumentar;
  },
};
let t1 = [
  "Takemichi",
  "Kagyeiama",
  "Draken",
  "Myke",
  "Kisake",
  "Mitsuia",
  "Kazutora",
  "Kenshi",
];

let desafio = [
  "Entrosamento com o time: terá que comer os restos dos jogadores.",
  "Desafio da corrida: terá que correr 10km sem parar.",
  "Desafio do saque: Terá que acerta 200 saques.",
  "Desafio da recepção: Terá que receber 200 cortes.",
  "Humilhação: terá que ficar semi nú no telho da escola durante o hino.",
];

let school1 = ["Torishima", "Aomine", "Oikawa"];

let t = [
  {
    nome: "Takemichi",
    posicao: "oposto",
  },
  { nome: "Kagyeiama", posicao: "levantador" },
  { nome: "Draken", posicao: "central" },
  { nome: "Myke", posicao: "ponta 1" },
  { nome: "Kisake", posicao: "ponta 2" },
  { nome: "Kazutora", posicao: "reserva 1" },
  { nome: "Kenshi", posicao: "reserva 2" },
  { nome: "Mitsuia", posicao: "libero" },
];
let a = [
  {
    nome: "Zoro",
    posicao: "oposto",
  },
  { nome: "Sanji", posicao: "levantador" },
  { nome: "Luffy", posicao: "central" },
  { nome: "Shanks", posicao: "ponta 1" },
  { nome: "Halkes", posicao: "ponta 2" },
  { nome: "Midorima", posicao: "reserva 1" },
  { nome: "Chihiro", posicao: "reserva 2" },
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
  { nome: "Otsubo", posicao: "reserva 1" },
  { nome: "Baji", posicao: "reserva 2" },
  { nome: "Shintaro", posicao: "libero" },
];
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

//Function de treino
function treino(esolca) {
  let escola = RandArray(school1);
  while (school == escola) {
    RandArray(school1);
     escola = RandArray(school1);
  }
  return escola;
}

//função para escolher um valor aleatório dentro de um array
function RandArray(array) {
  let rand = (Math.random() * array.length) | 0;
  let result = array[rand];
  return result;
}

//função para não precisar repetir isso nas 3 escolas
function random1() {
  console.log(`Como você é o novato do time, terá que cumprir com
    um desfio proposto pelo capitão, infelismente terá que cumpri-lo,
    querendo ou não, fazer oque né novato, e o desafio é :\n
    ${RandArray(desafio)} 
    
     (Você perdeu ${status.dstamina(10)} de stamina)`);
}

//Função de sorteio da Liga ( ver se precisa ou nao)
function random2() {
  console.log(`A liga ja vai começar, o sorteio do time que irá se 
    enfrentar ja saiu e será:

    ${RandArray(school1)} x ${RandArray(school1 - 1)}.
    
   E o time não sorteado enfrentará o vencedor em uma final, pois
   houve um incidente com a ultima escola e ela não poderá estar
   presente na Liga Rj desse ano.
    O time não sorteado será o sortudo do ano.
    `);
}

//rodizio de saque
function rodizio(argumento) {
  let aa = [];
  let rod = math.floor(math.random() * 100);
  for (let i of argumento) {
    aa.push(i.nome);
  }
  for (turn; turn < 7; ) {
    console.log(`O jogador que irá sacar será ${aa[turn]}`);

    if (rod > 50 && rod < 90) {
      console.log(`Muito bom saque, continue assim ${aa[turn]}`);
    } else if (rod < 50) {
      console.log(`Errar faz parte ${aa[turn]}, vamos continuar !`);
    } else if (rod > 90) {
      console.log("QUE SAQUEEEE, FOI UM BELO ACE !!");
    }
    break;
  }
  turn++;
}

console.log();
console.log();

const character = prompt("Digite um nome para seu personagem: ");

console.log();
do {
  school = prompt(`Escolha uma dessas escolas para ${character} frequentar
\n Torishima
 Aomine
 Oikawa
\n Digite aqui o nome da escola: `);
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
pelo mesmo time que está atualmente.\n
A Jornada deste jogo deciderá se ${character} irá ter sucesso em
seu sonho de ganhar sua primeira partida na Liga RJ.`
    );
    console.log();
    console.log("----------------------------------------------");
    posicao();
    console.log();
    console.log("----------------------------------------------");
    console.log();
    random1();
    console.log("----------------------------------------------");
    console.log();
    console.log(`Novato ${character}, iremos agora apresentar  o nosso time:`);
    for (let i of t) {
      console.log(`O ${i.nome} joga na posição ${i.posicao}`);
      console.log();
    }
    console.log(`\n Comigo de capitão(${t.central}), eu tenho a confiança e vejo a possibilidade
    de ganahrmos a Liga RJ esse ano !
     Novato, você era conhecido pelos seus passes 'perfeitos' e sua combinação de 
     jogadas com seus antigos membros, depois iremos ver realmente se suas 
     habilidades são tudo isso, no treino depois da aula.`);
    console.log();
    console.log();
    treino(school)
  }
  if (school == "Aomine") {
    console.clear();
    console.log(
      `${character} acaba de completar o Ensino Fundamental e irá para
o E.M., e deseja continuar jogando seu esporte preferido,
que é o vôlei e irá jogar pelo colégio Aomine,
que possui o ex-tecnico da seleção brasileira Jelleal, 
que é rigoroso em seus treinos.\n
A Jornada deste jogo deciderá se ${character} irá ter sucesso em
seu sonho de ganhar sua primeira partida na Liga RJ.`
    );
    console.log();
    console.log("----------------------------------------------");
    posicao();
    console.log();
    console.log("----------------------------------------------");
    console.log();
    random1();
    console.log("----------------------------------------------");
    console.log();
    console.log(`Novato ${character}, iremos agora apresentar  o nosso time:`);
    for (let i of a) {
      console.log(`O ${i.nome} joga na posição ${i.posicao}`);
      console.log();
    }
    `\n Comigo de capitão(${a.levantador}) e com Jelleal de tecnico,
    ganharemos essa Liga Rj este ano !
    Novato, você era conhecido pelos seus ataques e pela sua velocidade 
    dentro de campo permitindo passar pelo bloqueio, depois iremos
    ver realmente se suas habilidades são tudo isso,
    no treino depois da aula.`;
  }

  if (school == "Oikawa") {
    console.clear();
    console.log(
      `${character} acaba de completar o Ensino Fundamental e irá para
o E.M., e deseja continuar jogando seu esporte preferido,
que é o vôlei e irá jogar pelo colégio Oikawa,
que é o atual campeão da Liga RJ juntamente com o técnico Roberto.\n
A Jornada deste jogo deciderá se ${character} irá ter sucesso em
seu sonho de ganhar sua primeira partida na Liga RJ.`
    );
    console.log();
    console.log("----------------------------------------------");
    posicao();
    console.log();
    console.log("----------------------------------------------");
    console.log();
    random1();
    console.log("----------------------------------------------");
    console.log();
    console.log(`Novato ${character}, iremos agora apresentar  o nosso time:`);
    for (let i of o) {
      console.log(`O ${i.nome} joga na posição ${i.posicao}`);
      console.log();
    }
    console.log(`
    \n Comigo de capitão(${o.libero}), ganharemos novamente a Liga RJ e nos
    tornaremos os maiores ganhadores da liga. !
    Novato, você era conhecido pelos seus passes e pela sua recepção que
    era de se assustar, depois iremos ver realmente se suas 
    habilidades são tudo isso, no treino depois da aula.`);
  }
} while (finish == "s");
