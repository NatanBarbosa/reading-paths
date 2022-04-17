//Trocar informações daa div de informações
function trocarInfo(info_tipo, tag_html){
    //remover o ativo atual
    let elems = document.getElementsByClassName('tag-sobre');
    let descricao = document.getElementById('descricao');

    Array.from(elems).forEach(tag => {
        tag.classList.remove('ativa');
    })

    //colocar o elemento clicado como ativo
    tag_html.classList.add('ativa');

    //Pegar qual dos 3 elementos foi clicado
    if(info_tipo === 'o_que_e'){
        descricao.innerText = 'Texto sobre o que é...';
        document.getElementById('descricao-imagem').src = "imagens/o-que-e-livro-jogo.png";
    } else if(info_tipo === 'proposta'){
        descricao.innerText = 'Texto sobre a proposta do site...';
        document.getElementById('descricao-imagem').src = "imagens/proposta-do-site.png";
    } else if(info_tipo === 'como_funciona'){
        descricao.innerText = 'Texto sobre como funciona a leitura de un livro jogo no nosso site fjasnjikfnbfjkasd nfjkfads fbnias fbihas bfhjasb fjhas bjhsa jhfs bhjfsa hjf vasjh fvasgjhf svashgvfghasvfhgasvfghasv fgyhas vfhgsa vhgsa vhgas vjhas fushbf uifb ubasfuhfbs ahjf bsahj fbasjh fbhajs fvuyawh v';
        document.getElementById('descricao-imagem').src = "imagens/como-funciona.png";
    }
}