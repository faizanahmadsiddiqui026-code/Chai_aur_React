import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <MyApp />
//   </StrictMode>,
// )

// createRoot(document.getElementById('root')).render(
//   MyApp() 
// )



// const reactElement ={
//     type:'a',
//     props:{
//         href: "https://google.com",
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }



// const anotherElement = (
//   <a href='https://google.com' target='_blank'>Visit Google</a>
// )

// createRoot(document.getElementById('root')).render(
//   anotherElement
// )



// const reactElement = React.createElement(
//   'a',
//   {href:'https://google.com' ,target: '_blank'},
//   'Click me to visit google'
// )

// createRoot(document.getElementById('root')).render(
//   reactElement
// )




const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com' ,target: '_blank'},
  'Click me to visit google',
  anotherUser 
)


createRoot(document.getElementById('root')).render(
  reactElement
)



// type,
// key,
// ref,
// props