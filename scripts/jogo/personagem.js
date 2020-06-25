class Personagem extends Animacao{
    constructor(matriz, imagem, x, variacaoY,largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY,largura, altura, larguraSprite, alturaSprite) 
        
        this.yInicial = height - this.altura - 30;
        this.y = this.yInicial;

        this.velocidadeDoPulo = 0;
        this.gravidade = 5;
        this.alturaDoPulo = -50;
        this.pulos = 0;
    }
    pula(){
        if(this.pulos < 2){
            this.velocidadeDoPulo = this.alturaDoPulo;
            this.pulos++;
        }
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

        if(this.y > this.yInicial){
            this.y = this.yInicial;
            this.pulos = 0;
        }
    }
    estaColidindo(inimigo) {
        const precisao = .7;
        const colisao = collideRectRect(this.x, this.y, this.largura * .7, this.altura * .7, inimigo.x, inimigo.y, inimigo.largura * .7, inimigo.altura * .7);
        return colisao;
    }
}