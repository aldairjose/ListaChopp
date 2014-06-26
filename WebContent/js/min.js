/**
 * 
 */

document.write('<h1>lista chopp</h1>');


formulario = document.createElement('form');

nome = document.createElement('input');
nome.setAttribute('placeholder' , 'Digite o nome');

function adicionar (evento){
	evento.preventDefault();
	console.log(nome.value);
	
	
}
botaoSalvar = document.createElement('button');
botaoSalvar.innertext = 'Adicionar';
botaoSalvar.addEventListener('click',adicionar);

formulario.appendChild(nome);
formulario.appendChild(botaoSalvar);
document.body.appendChild(formulario);


