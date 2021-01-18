let btn = document.querySelector('.togle-btn')
let div = document.querySelector('.work__wrapper-2')

btn.addEventListener('click', () => {
  if(div.style.display === 'none'){
    div.style.display = 'flex'
  }else {
    div.style.display = 'none'
  }
})