class Pontuacao {
    constructor(){
        this.pontos = 0;
    }

    exibe() {
        textSize(50);
        text(this.pontos, width - 30, 50)
    }
}