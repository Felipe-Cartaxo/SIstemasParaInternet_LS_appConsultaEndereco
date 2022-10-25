function limpaCamposFormulario() {
    //Limpa valores do formulário de cep
    document.getElementById('rua').value=("")
    document.getElementById('bairro').value=("")
    document.getElementById('cidade').value=("")
    document.getElementById('uf').value=("")
}

function callback(conteudo) {
    if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores
    document.getElementById('rua').value=(conteudo.logradouro)
    document.getElementById('bairro').value=(conteudo.bairro)
    document.getElementById('cidade').value=(conteudo.localidade)
    document.getElementById('uf').value=(conteudo.uf)
    } //fim do if
    
    else {
        //CEP não Encontrado
        limpaCamposFormulario()
        alert("CEP não encontrado.")
    } //fim do else
} //fim da função

function pesquisacep(valor) {
    //Nova variável "cep" somente com dígitos
    var cep = valor.replace(/\D/g, '')
    //Verifica se campo cep possui valor informado
    if (cep != "") {
        //Expressão regular para validar o CEP
        var validacep = /^[0-9]{8}$/
        //Valida o formato do CEP
        if(validacep.test(cep)) {
            //Cria um elemento javascript
            var script = document.createElement('script')

            //Sincroniza com o callback
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=callback'

            //Insere script no documento e carrega o conteúdo
            document.body.appendChild(script)

        } //fim do if interno
        
        else {
            //cep é inválido
            limpaCamposFormulario()
            alert("Formato de CEP inválido.")
        } // fim do else interno
    } //fim if externo
    
    else {
        //cep sem valor, limpa formulário
        limpaCamposFormulario();
    } // fim do else externo
}