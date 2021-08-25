import React from "react";
import logo from './logo.svg';

function Footer() {
  return (
    <footer className="App-footer">
         <img src={logo} className="App-logo" alt="logo" />
         <i class="fab fa-github"></i>
         <a href="mailto:brandon.cowley@gmail.com" target="_blank" rel="noreferrer"><i class="bi bi-envelope-open mx-3"></i></a>
         <a href="tel:9786027848" target="_blank" rel="noreferrer"><i class="bi bi-telephone mx-3"></i></a>
         <a href="https://github.com/Brandoncowley" target="_blank" rel="noreferrer"><i class="bi bi-github mx-3"></i></a>
         <a href="https://www.linkedin.com/in/brandon-cowley-078aa7b3/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin mx-3"></i></a>
    </footer>
  );
}

export default Footer;