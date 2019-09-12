export class InputOptions {

    constructor(
        public label = "",
        public minlength = 0,
        public maxlength = 300,
        public required = false,
        public mensagemDeSucesso = "Ok",
        public mensagemDeErro = "Inválido",

    ) {

    }
    
}