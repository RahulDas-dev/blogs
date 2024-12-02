"use strict";

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

export let theme_button = document.getElementById('theme_btn')
export let theme_icon = document.getElementById('theme_icon')

if (theme_button) { 
    theme_button.addEventListener('click', ()=>{
      let page_level_theme = document.documentElement.classList.contains('dark')
      if (page_level_theme){
          document.documentElement.classList.remove('dark')
          theme_icon!.classList.toggle('icon-sun')
          theme_icon!.classList.toggle('icon-moon')
      } else{
          document.documentElement.classList.add('dark')
          theme_icon!.classList.toggle('icon-sun')
          theme_icon!.classList.toggle('icon-moon')
      }

    })
}
