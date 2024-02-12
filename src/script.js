// NavbarScroll
window.onscroll = function(){
  const header= document.querySelector('header')
  const scroll= header.offsetTop

  if(window.pageYOffset > scroll){
    header.classList.add('navbar-scroll')
  }else{
    header.classList.remove('navbar-scroll')
  }
}

// Hamburger 

const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector("#nav-menu")

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active')
  navMenu.classList.toggle('hidden')
})


// darkmode
const darkToggle = document.querySelector('#dark-toogle')
const html = document.querySelector('html')

darkToggle.addEventListener('click', function(){
  if(darkToggle.checked){
    html.classList.add('dark')
  }else{
    html.classList.remove('dark') 
  }
})