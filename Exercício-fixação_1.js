class Character {
    constructor(nome, codinome, armaPrincipal, armaSecundaria, velocidade, forca, resistencia) {
      this.nome = nome;
      this.codinome = codinome;
      this.armaPrincipal = armaPrincipal;
      this.armaSecundaria = armaSecundaria;
      this.velocidade = velocidade;
      this.forca = forca;
      this.resistencia = resistencia;
    }
  
    descricao() {
      return `Nome do personagem| ${this.nome} \n` +
      `Codinome do personagem| ${this.codinome} \n` +
      `Arma principal| ${this.armaPrincipal} \n` +
      `Arma secundária| ${this.armaSecundaria} \n` +
      `Nível de força| ${this.forca} \n` +
      `Nível de velocidade| ${this.velocidade} \n` +
      `Nível de resistência| ${this.resistencia}`
    }
  }
  
  const CapAmerica = new Character("Steve Rogers", "Capitão América", "Escudo americano", "", 85, 75, 80);
  const HomemAranha = new Character("Peter Parker", "Homem-Aranha", "Teia", "", 70, 80, 75);
  const SenhorEstrelas = new Character("Peter Quill", "Senhor das Estrelas", "Arma", "", 60, 65, 75);
  const Hulk = new Character("Bruce Banner", "Hulk", "Socos(Mão)", "", 90, 100, 90);
  const Thanos = new Character("Thanos", "Thanos", "Manopla do Infinito", "", 70, 100, 95);
  
  const personagens = [CapAmerica, HomemAranha, SenhorEstrelas, Hulk, Thanos];
  
  function compararPersonagens(personagens) {
    for (let p1 = 0; p1 < personagens.length; p1++) {
      for (let p2 = p1 + 1; p2 < personagens.length; p2++) {
        const character1 = personagens[p1];
        const character2 = personagens[p2];
  
        console.log(`Comparando ${character1.nome} com ${character2.nome}:`);
  
        if (character1.forca > character2.forca) {
          console.log(`${character1.nome} vence em força.`);
        } else if (character1.forca < character2.forca) {
          console.log(`${character2.nome} vence em força.`);
        } else {
          console.log(`Empate em força.`);
        }
  
        if (character1.velocidade > character2.velocidade) {
          console.log(`${character1.nome} vence em velocidade.`);
        } else if (character1.velocidade < character2.velocidade) {
          console.log(`${character2.nome} vence em velocidade.`);
        } else {
          console.log(`Empate em velocidade.`);
        }
  
        if (character1.resistencia > character2.resistencia) {
          console.log(`${character1.nome} vence em resistência.\n`);
        } else if (character1.resistencia < character2.resistencia) {
          console.log(`${character2.nome} vence em resistência. \n`);
        } else {
          console.log(`Empate em resistência. \n`);
        }
  
        console.log(`Descrição de ${character1.nome}:\n${character1.descricao()} \n`);
        console.log(`Descrição de ${character2.nome}:\n${character2.descricao()} \n`);
        console.log('-------------------------------------------------------------');
      }
    }
  }
  
  compararPersonagens(personagens);