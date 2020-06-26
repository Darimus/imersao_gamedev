class Jogo {
    constructor (){
        this.inimigoAtual = 0;
    }

    setup(){
        cenario = new Cenario(imagemCenario, 3);
        pontuacao = new Pontuacao();

        personagem = new Personagem(matrizPeronagem, imagemPersonagem, 50, 30, 220, 270, 220, 270);
        
        const inimigo = new Inimigo (matrizInimigo, imagemInimigo, width - 52, 30, 82, 82, 104, 104, 10, 100);
        const inimigoGrande = new Inimigo (matrizInimigoGrande, imagemInimigoGrande, width - 52, 0, 300, 300, 400, 400, 20, 100);
        const inimigoVoador = new Inimigo (matrizInimigoVoador, imagemInimigoVoador, width - 52, 530, 102, 102, 200, 150, 10, 100);

        inimigos.push (inimigo);
        inimigos.push (inimigoVoador);
        inimigos.push (inimigoGrande);
    }

    keyPressed(key){ 
        if (key === "ArrowUp") {
        personagem.pula();
        somDoPulo.play();
      }
    }
    draw(){
        cenario.exibe();
        cenario.move();
        
        pontuacao.exibe();
        pontuacao.adicionarPonto();
        
        personagem.exibe();
        personagem.aplicaGravidade();
        
        const inimigo = inimigos[this.inimigoAtual];
        const inimigoVisivel = inimigo.x < -inimigo.largura;
        
        inimigo.exibe();
        inimigo.move();
        
        if (inimigoVisivel) {
            this.inimigoAtual++;
        
            if (this.inimigoAtual > 2) {
            this.inimigoAtual = 0;
            }
            inimigo.velocidade = parseInt (random(10,20));
        }
        
        if (personagem.estaColidindo(inimigo)) {
            console.log("colidiu");
            image(imagemGameOver, width /2 - 200, height /3);
            noLoop();
        }
    }
}