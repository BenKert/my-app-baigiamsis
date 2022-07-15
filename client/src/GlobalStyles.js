import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Raleway:wght@400;500;700&family=Roboto:wght@400;700&display=swap');
body {
  background: #2C3531;
  color: #D1E8E2;
  font-family: Roboto, sans-serif;
}
b,strong {
  font-weight: 700;
}
a {
  color: #fff;
}
p {
  margin-bottom: 10px;
  line-height: 1.4rem;
}
blockquote {
  background-color: rgba(0,0,0,.1);
  padding: 15px;
  border-radius: 4px;
}
h1,h2 {
  margin-top: 15px;
  margin-bottom: 10px;
}
h1{
  font-size: 1.8rem;
}
h2{
  font-size: 1.6rem;
}

// tags
.react-tags{
  margin-bottom: 20px;
}

.react-tags__selected{
  display: inline-block;
  margin-bottom: 20px;
}

.react-tags__selected-tag{

  border: 0; 
  display: inline-block;
  margin-right: 3px;
  background-color: #d9b08c;
  padding: 3px;
  border-radius: 5px;
  font-size: 0.9rem;
  color: #d1e8e2;

}

.react-tags__search{
  display: inline-block;
}

input.react-tags__search-input{
  background: none;
  border: 1px solid #777;
  border-radius: 3px;
  display: inline-block;
  width: 100%;
  min-width: 200px;
  box-sizing: border-box;
  padding: 8px;
  color: #fff;
}
`;

export default GlobalStyles;
