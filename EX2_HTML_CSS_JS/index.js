let numberInput = document.getElementById('number_input');
let runButton = document.getElementById('run_button');
let output = document.getElementById('output');

function printMultiply() {
  let number = Number(numberInput.value);
  let outputHtml = '';
  if (number === 0) {
    output.innerHTML = 'เท่ากับ 0';
    return;
  }
  for (let i = 1; i <= 12; i++) {
    outputHtml += '<p>';
    outputHtml += number + ' x ' + i + ' = ' + (number*i);
    outputHtml += '</p>';
  }
  output.innerHTML = outputHtml;
}

runButton.addEventListener('click', printMultiply);
console.log('ค่า')