import { createGlobalStyle } from "styled-components";


const GlopalStyle = createGlobalStyle`
 :root{
    --primary-color:#002087;
    --primary-color-obacity: #416EFF;
    --background-dark-color:  #002087;
    --font: #303030;
    --orange-color: #FF6947;
} 
*{
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
   
}
html {
  scroll-behavior: smooth;
}
@keyframes MoveUpDown {
    0%, 100% {
    left: 0;
    }
    50% {
    left: 15px;
    }
  }
  @keyframes  MoveUpDownLeft {
    0%, 100% {
    right: 4rem;
    }
    50% {
    right: 5rem;
    }
  }
  @keyframes Rotate {
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
  }
body{
    font-family: 'Cairo', sans-serif;
     background-color: var(--background-dark-color);
     height: 3000px;
     width: 100%;
    ;
}


`

export default GlopalStyle