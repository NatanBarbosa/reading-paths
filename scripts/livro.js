const secao_leitura_livro = document.getElementsByClassName('secao-leitura-livro')[0];
const btn_voltar = document.getElementById('btn-voltar');
const btn_avancar = document.getElementById('btn-avancar');
const livro = document.getElementById('livro');

const pag1 = document.getElementById('p1');
const pag2 = document.getElementById('p2');
const pag3 = document.getElementById('p3');

const marca_pag_1 = document.getElementById('marca-pag-1');
const marca_pag_2 = document.getElementById('marca-pag-2');
const marca_pag_3 = document.getElementById('marca-pag-3');
const marca_pag_4 = document.getElementById('marca-pag-4');

//eventListner dos botçoes
btn_voltar.addEventListener('click', irPaginaAnterior);
btn_avancar.addEventListener('click', irProximaPagina);

//configurações
let pagAtual = 1;
let numDePags = 3;
let maxDePags = numDePags + 1;

function abrirLivro(){
    livro.style.transform = "translateX(50%)";
    btn_voltar.style.transform = "translateX(-180px)";
    btn_avancar.style.transform = "translateX(180px)";

    secao_leitura_livro.style.alignSelf = 'flex-start';
    secao_leitura_livro.style.width = '870px';
}

function fecharLivro(estaNoComeco) {
    if(estaNoComeco){
        livro.style.transform = "translateX(0%)";
    } else{
        livro.style.transform = "translateX(100%)";
    }

    btn_voltar.style.transform = "translateX(0px)";
    btn_avancar.style.transform = "translateX(0px)";

    secao_leitura_livro.style.alignSelf = 'center';
    secao_leitura_livro.style.width = 'auto';
}

function irProximaPagina(){
    if (pagAtual < maxDePags){
        switch (pagAtual){
            case 1:
                abrirLivro();
                pag1.classList.add('virada');
                pag1.style.zIndex = 1;

                marca_pag_1.classList.remove('atual');
                marca_pag_2.classList.add('atual');
                break;
            case 2:
                pag2.classList.add('virada');
                pag2.style.zIndex = 1;

                marca_pag_2.classList.remove('atual');
                marca_pag_3.classList.add('atual');
                break;
            case 3:
                pag3.classList.add('virada');
                pag3.style.zIndex = 1;
                fecharLivro();

                marca_pag_3.classList.remove('atual');
                marca_pag_4.classList.add('atual');
                break;
            default:
                throw new Error('Estado Desconhecido');
        }
        pagAtual++;

        btn_voltar.scrollIntoView()
    }
}

function irPaginaAnterior(){
    if (pagAtual > 1){
        switch (pagAtual){
            case 2:
                fecharLivro(true);
                pag1.classList.remove('virada');
                pag1.style.zIndex = 3;

                marca_pag_2.classList.remove('atual');
                marca_pag_1.classList.add('atual');
                break;
            case 3:
                pag2.classList.remove('virada');
                pag2.style.zIndex = 2;

                marca_pag_3.classList.remove('atual');
                marca_pag_2.classList.add('atual');
                break;
            case 4:
                abrirLivro();
                pag3.classList.remove('virada');
                pag3.style.zIndex = 1;

                marca_pag_4.classList.remove('atual');
                marca_pag_3.classList.add('atual');
                break;
            default:
                throw new Error('Estado Desconhecido');
        }
        pagAtual--;

        btn_avancar.scrollIntoView()
    }
}