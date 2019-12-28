// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const head = document.querySelector('.header-container');
head.appendChild(Header());

function Header() {
    const bigHead = document.createElement('div');
    const date = document.createElement('span');
    const hOne = document.createElement('h1');
    const temp = document.createElement('span');
    bigHead.appendChild(date);
    bigHead.appendChild(hOne);
    bigHead.appendChild(temp);
    bigHead.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    date.textContent = 'MARCH 28, 2019';
    hOne.textContent = 'Lambda Times';
    temp.textContent = '98°';

    return bigHead;
}