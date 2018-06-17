import React from "react"
import Header from "./Header"

const App = ({ children }) => (
  <main>
    <Header pathname='dddd' />
    <div className="content">
      {children}
    </div>
    <style jsx global>{`

      @import url('https://fonts.googleapis.com/css?family=Exo+2');

      * {
        font-family: 'Exo 2', sans-serif;
        padding: 0;
        margin: 0;
      }

      a {
        
      }

      html, body {
        height: 100%;
        width: 100%;
      }
    
      main {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .content {
        flex: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
      }

      #__next {
        height: 100%;
      }
    
    `}</style>
  </main>
)

export default App
