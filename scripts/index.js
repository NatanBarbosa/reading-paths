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
        descricao.innerText = 'A proposta de um livro jogo é contar uma história, assim como um livro convencional, porém de forma mais dinâmica. O leitor pode escolher as ações que o personagem irá fazer e escolhas que terá que tomar em sua jornada. Isso desencadeia ramificações na história, o que acaba deixando-a com finais diferentes. Mergulhe nesse aventura e descubra todos os finais!';
        document.getElementById('descricao-imagem').src = "imagens/o-que-e-livro-jogo.png";
    } else if(info_tipo === 'proposta'){
        descricao.innerText = 'Em um livro jogo tradicional, o leitor pula algumas páginas dependendo de sua escolha. A fim de promover a imersão na história e a praticidade do autor, nós desenvolvemos o livro jogo virtual. As escolhas das ações podem ser rapidamente selecionadas e o programa já libera os proximos capítulos do livro com base nessa escolha.';
        document.getElementById('descricao-imagem').src = "imagens/proposta-do-site.png";
    } else if(info_tipo === 'como_funciona'){
        descricao.innerText = 'O site facilita o leitor a percorrer por todos os caminhos possíveis da história. No meio da própria história, o usuário vai se deparar com botões clicáveis, que vão definir o rumo da história de acordo com a ação do personagem. Ao lado do livro em questão, há um menu de status mostrando as escolhas já selecionadas, o progresso de leitura, entre outras informações.';
        document.getElementById('descricao-imagem').src = "imagens/como-funciona.png";
    }
}