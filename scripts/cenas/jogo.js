class Jogo {
    constructor (){
        this.indice = 0;
        this.mapa = fita.mapa;
    }

    setup(){
        cenario = new Cenario(imagemCenario, 6);
        pontuacao = new Pontuacao();
        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

        personagem = new Personagem(matrizPeronagem, imagemPersonagem, 50, 30, 220, 270, 220, 270);
        
        const inimigo = new Inimigo (matrizInimigo, imagemInimigo, width - 52, 30, 82, 82, 104, 104, 10);
        const inimigoGrande = new Inimigo (matrizInimigoGrande, imagemInimigoGrande, width - 52, 0, 300, 300, 400, 400, 20);
        const inimigoVoador = new Inimigo (matrizInimigoVoador, imagemInimigoVoador, width - 52, 530, 102, 102, 200, 150, 10);

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
        
        vida.draw();
        pontuacao.exibe();
        pontuacao.adicionarPonto();
        
        personagem.exibe();
        personagem.aplicaGravidade();
        
        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;

        inimigo.velocidade = linhaAtual.velocidade;
        
        inimigo.exibe();
        inimigo.move();
        
        if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece();
            if (this.indice > this.mapa.length - 1) {
            this.indice = 0;
            }
        }
        
        if (personagem.estaColidindo(inimigo)) {
            console.log("colidiu");
            vida.perdeVida();
            personagem.tornarInvencivel();

            if(vida.vidas === 0){
                image(imagemGameOver, width /2 - 200, height /3);
                noLoop();
            }    
        }
    }
}