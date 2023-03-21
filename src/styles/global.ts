import {createGlobalStyle} from 'styled-components'

interface propsThemeTeste{
   theme: {
    colors: {
        primary: '#0070f3',
        secondary: '#fd5f00',
        background: '#f6f8fa',
        text: '#333'
      },
   }
}
  
export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }   
    ul{
        list-style: none;
    }
    body{
        background: ${(props: propsThemeTeste) => props.theme.colors.primary};
        color: ${(props: propsThemeTeste) => props.theme.colors.secondary};
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    @media (max-width: 768px) {
        html{
            font-size: 87.5%;
        }
    }
`;