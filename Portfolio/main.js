const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//skills
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')
function toggleSkills(){
    let itemClass = this.parentNode.className
    for(i=0; i< skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})


const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current=>{
        const sectionHeight= current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')}
            else{
                document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.remove('active-link')
            }
        
    })
}
window.addEventListener('scroll', scrollActive)

function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80)nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')

}
window.addEventListener('scroll',scrollHeader)

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >=560)scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* modo oscuro */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Obtener el tema e ícono seleccionado del almacenamiento local
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Función para obtener el tema actual
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

// Función para obtener el ícono actual
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-sun' : 'uil-moon'

// Aplicar el tema almacenado localmente al cargar la página
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Evento de clic para cambiar entre temas claro y oscuro
themeButton.addEventListener('click', () => {
    // Alternar clases para cambiar el tema y el ícono
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // Almacenar el tema e ícono seleccionados localmente
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
