function calcularIdade() {
    const dia = Number(document.getElementById("dia").value);
    const mes = Number(document.getElementById("mes").value);
    const ano = Number(document.getElementById("ano").value);
    const elementoResultado = document.getElementById("resultado");

    elementoResultado.classList.remove("erro");

    if (!dia || !mes || !ano) {
        document.body.classList.remove("tema-verde");
        elementoResultado.textContent = "Por favor, preencha todos os campos.";
        elementoResultado.classList.add("erro");
        return;
    }

    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const mesAtual = hoje.getMonth() + 1;
    const anoAtual = hoje.getFullYear();

    const dataNascimento = new Date(ano, mes - 1, dia);
    if (
        dataNascimento > hoje ||
        dataNascimento.getFullYear() !== ano ||
        dataNascimento.getMonth() + 1 !== mes ||
        dataNascimento.getDate() !== dia
    ) {
        document.body.classList.remove("tema-verde");
        elementoResultado.textContent = "Por favor, insira uma data válida.";
        elementoResultado.classList.add("erro");
        return;
    }

    let idade = anoAtual - ano;

    if (mesAtual < mes || (mesAtual === mes && diaAtual < dia)) {
        idade--;
    }

    let mensagemStatus = "";
    
    if (idade >= 18) {
        mensagemStatus = "Você é de maior, já pode criar sua carteirinha de palmeirense fanático!";
        document.body.classList.add("tema-verde");
    } else {
        mensagemStatus = "Você é de menor, ainda não pode criar sua carteirinha de palmeirense fanático!";
        document.body.classList.remove("tema-verde");
    }

    elementoResultado.textContent = `Sua idade é ${idade} ${idade === 1 ? 'ano' : 'anos'}. ${mensagemStatus}`;
}