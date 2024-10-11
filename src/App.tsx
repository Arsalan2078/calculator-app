import Nav from "./components/Nav"
import Screen from "./components/Screen"

function App () {
  return (
    <main className="calculator-app theme-1">
      <div className="wrapper">
        <Nav /> 
        <Screen />
      </div>
    </main>
  )
}

export default App