import { processText } from './lib';

const sourceText = document.querySelector('#sourceText');
const targetText = document.querySelector('#targetText');
const reverse = document.querySelector('#reverse');
const uppercase = document.querySelector('#uppercase');
const lineCount = document.querySelector('#lineCount');

loadClickButtons();

function loadClickButtons(){
  reverse.addEventListener("click", () => clickProcessText("reverse"), false)
  uppercase.addEventListener("click", () => clickProcessText("uppercase"), false)
  lineCount.addEventListener("click", () => clickProcessText("lineCount"), false)
}

function clickProcessText(action){
  targetText.value = processText(sourceText.value, action);
}
