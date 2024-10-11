import Keypad from "./components/Keypad"
import Nav from "./components/Nav"
import Screen from "./components/Screen"

function App () {
  return (
    <main className="calculator-app theme-2">
      <div className="wrapper">
        <Nav /> 
        <Screen />

        <Keypad>
          <button 
            className="key-1">
            7
          </button>
          <button 
            className="key-1">
            8
          </button>
          <button 
            className="key-1">
            9
          </button>
          <button 
            className="key-2">
            DEL
          </button>

          <button 
            className="key-1">
            4
          </button>
          <button 
            className="key-1">
            5
          </button>
          <button 
            className="key-1">
            6
          </button>
          <button 
            className="key-1">
            +
          </button>

          <button 
            className="key-1">
            1
          </button>
          <button 
            className="key-1">
            2
          </button>
          <button 
            className="key-1">
            3
          </button>
          <button 
            className="key-1">
            -
          </button>

          <button 
            className="key-1">
            .
          </button>
          <button 
            className="key-1">
            0
          </button>
          <button 
            className="key-1">
            /
          </button>
          <button 
            className="key-1">
            x
          </button>

          <button 
            className="key-2 large-key">
            RESET
          </button>
          <button 
            className="key-3 large-key">
            =
          </button>
        </Keypad>
      </div>
    </main>
  )
}

export default App