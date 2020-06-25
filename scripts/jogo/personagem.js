class Personagem extends Animacao{
    constructor(matriz, imagem, x, variacaoY,largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY,largura, altura, larguraSprite, alturaSprite) 
        
        this.yInicial = height - this.altura - 30;
        this.y = this.yInicial;
        this.velocidadeDoPulo = 0;
        this.gravidade = 3;
    }
    pula(){
        this.velocidadeDoPulo = -35;
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

        if(this.y > this.yInicial){
            this.y = this.yInicial;
        }
    }
    estaColidindo(inimigo) {
        const precisao = .7;
        const colisao = collideRectRect(this.x, this.y, this.largura * .7, this.altura * .7, inimigo.x, inimigo.y, inimigo.largura * .7, inimigo.altura * .7);
        return colisao;
    }
}