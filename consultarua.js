//viacep.com.br/ws/RS/Porto Alegre/Domingos Jose/json/

let cidade = document.querySelector('#cidade');
let rua = document.querySelector('#rua')
let localidade= document.querySelector('#localidade');
let uf = document.querySelector('#uf');
let btncep = document.querySelector('#btnbuscarcep');
let listaCep = document.querySelector('#listacep');

rua.value = 'Domingos Jose';
localidade.value = 'Porto Alegre';
uf.value = 'RS';

btncep.addEventListener('click', function(e) {
	e.preventDefault();
	let url = 'https://viacep.com.br/ws/';
	let prmtr = uf.value + '/' + localidade.value + '/' + rua.value + '/json/';
	let callback = '?callback=popularEndereco';
	let script = document.createElement('script');
	script.src = url + prmtr + callback;
	document.body.appenChild(script);
});

function popularEndereco(resposta) {
	if(!Array.isArray(resposta)) {
		alert('O retorno está incorreta!!!');
		return;
	}
	
	let li = document.createElement('li');
	li.innerHTML = 'MMMMM';
	listaCep.appenChild(li);

}
