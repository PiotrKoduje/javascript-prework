const printMessage = (msg) => {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = () => {
	document.getElementById('messages').innerHTML = '';
}