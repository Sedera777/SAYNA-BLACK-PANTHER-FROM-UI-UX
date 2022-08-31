'use strict'
const ellipsis = document.getElementsByClassName('fa-ellipsis')[0]
const ul = document.querySelector('header nav ul')
ellipsis.addEventListener('click', () => {
    ul.classList.toggle('visible')
})