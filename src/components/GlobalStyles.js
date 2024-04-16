import styled, { createGlobalStyle } from 'styled-components';

const ResetCss = createGlobalStyle`
 /* Normaliza box-sizing */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Redefine margens, paddings e fontes em elementos específicos */
html,
body,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
fieldset,
input,
textarea,
button,
legend,
form,
figure,
iframe {
  margin: 0;
  padding: 0;
}

/* Remove marcadores de lista */
ul,
ol {
  list-style: none;
}

/* Define estilos de fonte padrão */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 16px; /* Ajuste conforme necessário */
}

/* Remove sublinhados de links */
a {
  text-decoration: none;
  color: inherit; /* Herda a cor do texto do elemento pai */
}

/* Redefine botões */
button {
  cursor: pointer;
  background: none;
  border: none;
}

/* Adicione estilos adicionais conforme necessário */
font-family: "Inknut Antiqua", serif;

`;


export default ResetCss;
