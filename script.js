//your JS code here. If required.

let inputValue = 0;
let input = document.querySelector("#ip");
let outputDiv = document.querySelector("#output");

document.querySelector("#btn").addEventListener("click", (e)=>{
	inputValue = input.value;
	
	promise1().then(()=>{
		outputDiv.textContent = `Result: ${inputValue}`;
		return promise2();
	}).then(()=>{
		inputValue *= 2;
		outputDiv.textContent = `Result: ${inputValue}`;
		return promise3();
	}).then(()=>{
		inputValue -= 3;
		outputDiv.textContent = `Result: ${inputValue}`;
		return promise4();
	}).then(()=>{
		inputValue /= 2;
		outputDiv.textContent = `Result: ${inputValue}`;
		return promise5();
	}).then(()=>{
		inputValue += 10;
		outputDiv.textContent = `Result: ${inputValue}`;
	});
})

function promise1() {
	return new Promise((res, rej) => {
		setTimeout(()=>{
			res(inputValue);
		},2000);		
	});
};

function promise2() {
	return new Promise((res, rej) => {
		setTimeout(()=>{
			res(inputValue);
		},2000);		
	});
};

function promise3() {
	return new Promise((res, rej) => {
		setTimeout(()=>{
			res(inputValue);
		},1000);		
	});
};

function promise4() {
	return new Promise((res, rej) => {
		setTimeout(()=>{
			outputDiv.textContent = `Result: ${inputValue / 2}`;
			res(inputValue);
		},1000);		
	});
};

function promise5() {
	return new Promise((res, rej) => {
		setTimeout(()=>{
			outputDiv.textContent = `Final Result: ${inputValue + 10}`;
			res(inputValue);
		},1000);		
	});
};

