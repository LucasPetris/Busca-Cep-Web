//* Criação das variaveis de busca *//
let cep = document.querySelector('#cep');
let cidade = document.querySelector('#cidade');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');

cep.value = ' ';

//* Buscando a variavel CEP quando clicar no local Cep através do endereço *//
cep.addEventListener('blur', function(e) {
	let cep = e.target.value;
	let script = document.createElement('script');
	script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm';
	document.body.appendChild(script);
});

//* Atribuindo as variaveis ao retorno da função popularizando os locais de preenchimento de pesquisa *//
function popularForm(resposta) {

	if('erro' in resposta ) {
		alert("CEP incorreto!!!");
		return;
	}

	rua.value = resposta.logradouro;
	cidade.value = resposta.localidade;
	bairro.value = resposta.bairro;
}