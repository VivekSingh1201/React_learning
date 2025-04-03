import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Chai from './chai.jsx'

/*
function MyApp(){
  return (
    <div>
      <h1>React App</h1>
    </div>
  )
}
  */

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to go to Google'
)

createRoot(document.getElementById('root')).render(
  
  reactElement
  
)