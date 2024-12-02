"use strict";

import "./styles.css";
import "katex/dist/katex.min.css";
import "katex"
import renderMathInElement from 'katex/contrib/auto-render';
import "./navbar.ts"
import "./manage_theme.ts"

const mathElements = document.getElementById('blog_contain');
if (mathElements){
  renderMathInElement(mathElements,{
    delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '$', right: '$', display: false},
      {left: '\\(', right: '\\)', display: false},
      {left: '\\[', right: '\\]', display: true}
  ],
  // • rendering keys, e.g.:
  throwOnError : false
  });
}
