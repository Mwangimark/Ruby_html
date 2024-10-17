const colorButton =  document.getElementById('colorButton');

colorButton.addEventListener('click',()=>{
    colorButton.style.backgroundColor = colorButton.style.backgroundColor === 'blue' ? '#251f1f' : 'blue';
})
