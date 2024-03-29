document.getElementById('btnMostrarDados').addEventListener('click', function() {
    let nome = document.getElementById('inputNome').value;
    let idade = document.getElementById('inputIdade').value;
    let curso = document.getElementById('inputCurso').value;
    let ano = document.getElementById('inputAno').value;

    // Verifica se todos os campos foram preenchidos
    if (nome.trim() === "" || idade.trim() === "" || curso.trim() === "" || ano.trim() === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    let dadosUsuario = "Nome: " + nome + "\n" +
                       "Idade: " + idade + " anos\n" +
                       "Curso: " + curso + "\n" +
                       "Ano: " + ano;

    alert("Dados inseridos:\n\n" + dadosUsuario);

    document.getElementById('nome').innerText = "Nome: " + nome;
    document.getElementById('idade').innerText = "Idade: " + idade + " anos";
    document.getElementById('curso').innerText = "Curso: " + curso;
    document.getElementById('ano').innerText = "Ano: " + ano;
});
