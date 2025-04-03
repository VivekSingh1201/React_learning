// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Chai from './chai.jsx'

// function MyApp(){
//   return (
//     <div>
//       <h1>React App</h1>
//     </div>
//   )
// }

const reactElement = React.createElement(
  'a',
  {href: 'https://reactjs.org', target: '_blank'},
  'Learn React'
)

createRoot(document.getElementById('root')).render(
  
  reactElement
  
)