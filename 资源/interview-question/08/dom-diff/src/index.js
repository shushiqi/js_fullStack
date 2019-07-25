import { createElement, render, renderDOM } from './element';



let viretualDOM = createElement('ul',
  {
    class: 'list'
  },
  [
    createElement('li', { class: 'item' }, ['Jay']),
    createElement('li', { class: 'item' }, ['Wang']),
    createElement('li', { class: 'item' }, ['Hashimoto'])
  ]
)

console.log(viretualDOM);
let el = render(viretualDOM)
console.log(el)
renderDOM(el, document.getElementById('root'));
