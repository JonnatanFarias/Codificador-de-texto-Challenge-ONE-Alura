/*VARIÁVEIS GLOBAIS */
var txt1 = document.getElementById('input-text')
var txt2 = document.getElementById('inputTextSaida')
var msg = document.getElementById('msg')
txt1.focus()

/*VARIAVEL BI DEV FOOTER*/
var devName = document.getElementById('DevName')
devName.onclick = devNameFunction

/*VARIAVEL BTN ENCRIPTAR */
var btnEncrypt = document.querySelector('#btnEncryptar')
btnEncrypt.onclick = encrypt

/*VARIAVEL BTN DECRIPTAR */
var btnDecrypt = document.querySelector('#btnDecryptar')
btnDecrypt.onclick = decrypt


/*FUNÇÃO PARA ENCRIPTAR */
function encrypt() {
    if (txt1.value.length == 0) {
        /*INSERI DENTRO DO HTML ELEMENTOS CONFORME BOTÃO CLICADO */
        let imgLupa = document.getElementById('lupa')
        imgLupa.setAttribute('src', './img/ComputerError.gif')
        msg.innerText = "Nenhuma mensagem encontrada"
    } else {
        /*INSERI DENTRO DO HTML ELEMENTOS CONFORME BOTÃO CLICADO */
        let imgLupa = document.getElementById('lupa')
        imgLupa.setAttribute('src', './img/Ok.gif')
        msg.innerText = "Copie o texto para área de transferencia."
        document.getElementById('copy').innerHTML = '<button id="btn-copiar" class="btn-copiar" onclick="copiar()">Copiar</button>'
         /* VARIAVEIS  DA CRIPTOGRAFIA */
         var text = txt1.value;
         var txt = text.replace(/e/igm, 'enter');
         var txt = txt.replace(/i/igm, 'imes');
         var txt = txt.replace(/a/igm, 'ai');
         var txt = txt.replace(/o/igm, 'ober');
         var txt = txt.replace(/u/igm, 'ufat');
         /*INSERI NA AREA DE TEXTO DE SAIDA */
         document.getElementById('inputTextSaida').innerHTML = `${txt}`;
         /*LIMPA ÁREA DE TEXTO DE ENTRADA */
         txt1.value=""
         txt1.focus()
    }
    
}
/*FUNÇÃO PARA DECRIPTAR*/
function decrypt() {
        /* VARIAVEIS REVERSAS DA CRIPTOGRAFIA */
        if(txt2.value.length==0){
            /*INSERI DENTRO DO HTML ELEMENTOS CONFORME BOTÃO CLICADO */
            let imgLupa = document.getElementById('lupa')
            imgLupa.setAttribute('src', './img/ComputerError.gif')
            msg.innerText = "Nenhuma mensagem encontrada" 
        }else{
            var text = txt2.value;
            var txt = text.replace(/enter/igm, 'e');
            txt = txt.replace(/imes/igm, 'i');
            txt = txt.replace(/ai/igm, 'a');
            txt = txt.replace(/ober/igm, 'o');
            txt = txt.replace(/ufat/igm, 'u');
            
            document.getElementById('inputTextSaida').innerHTML = `${txt}`;
            txt1.focus()
        }
        
}
/*FUNÇÃO PARA COPIAR TEXTO*/
function copiar() {
    if (txt2.value.length == 0) {
        msg.innerHTML = "Não é possível copiar, pois não há resultados!."
        let imgLupa = document.getElementById('lupa')
        imgLupa.setAttribute('src', './img/ComputerError.gif')
    } else {
        document.querySelector('#inputTextSaida').select()
        document.execCommand('copy')
        msg.innerHTML = "O texto copiado já está na área de transferência!"
    }

}

function devNameFunction() {
    txt1.value = "💻 Desenvolvido por : (Jonnatan Farias) O projeto faz parte da primeira fase da seleção ONE (Oracle Next Education) em parceria com a Alura e possui como objetivo a criptografia de textos. 😀"


}
/*DARK MODE */
function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var getClass = element.getAttribute("class")

    if (getClass == "dark-mode") {
        let iconSol = document.getElementById('iconDarkMode')
        iconSol.classList.remove('bi-moon')
        iconSol.classList.add('bi-brightness-high')
        let imgLupa = document.getElementById('logoAlura')
        imgLupa.setAttribute('src', './img/Vector123.svg')
    } else {
        let iconSol = document.getElementById('iconDarkMode')
        iconSol.classList.add('bi-moon')
        iconSol.classList.remove('bi-brightness-high')
        let imgLupa = document.getElementById('logoAlura')
        imgLupa.setAttribute('src', './img/Vector.svg')

    }
}

