import { useState } from "react"
import './App.css'

import Welcome from "./components/Welcome"
import Form from "./components/Form"
import Numbers from "./components/Numbers"
import Buttons from "./components/Buttons"

const App = () => {
  const [fullname, setFullname] = useState({ firstname: '', lastname: '' })
  const [color, setColor] = useState(false)
  const [fontSize, setFontSize] = useState(36)
  const [numbers, setNumbers] = useState([5, 8, 10, 14, 17, 20, 45])

  const filterNumbers = () => {
    const filtered = numbers.filter(number => number % 5 === 0)
    setNumbers(filtered)
  }

  return (
    <div>
      <Welcome fullname={fullname} color={color} fontSize={fontSize} />
      <Form fullname={fullname} setFullname={setFullname} />
      <Numbers numbers={numbers} />
      <Buttons color={color} setColor={setColor} setFontSize={setFontSize} filterNumbers={filterNumbers} />
    </div>
  )
}

export default App