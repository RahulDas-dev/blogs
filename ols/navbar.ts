"use strict";

export let nav_button = document.getElementById('nav-btn')
export let nav_menu = document.getElementById('nav-menu')
 

if (nav_button) { 
    nav_button.addEventListener('click',()=>{
      console.log('Nav Button is Vissible')
      let nav_icon_menu = document.getElementById('nav-btn-menu-icon')
      let nav_icon_cross = document.getElementById('nav-btn-cross-icon')
      if (nav_menu){
         nav_menu.classList.toggle('hide-menu')
      }
      nav_icon_menu!.classList.toggle('hidden')
      nav_icon_cross!.classList.toggle('hidden')
    })
}