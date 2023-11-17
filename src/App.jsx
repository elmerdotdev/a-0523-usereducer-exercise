import { useState } from "react"
import './App.css'

import Welcome from "./components/Welcome"
import Form from "./components/Form"
import Buttons from "./components/Buttons"

const App = () => {
  const [fullname, setFullname] = useState({ firstname: '', lastname: '' })
  const [color, setColor] = useState(false)
  const [fontSize, setFontSize] = useState(36)

  return (
    <div>
      <Welcome fullname={fullname} color={color} fontSize={fontSize} />
      <Form fullname={fullname} setFullname={setFullname} />
      <Buttons color={color} setColor={setColor} setFontSize={setFontSize} />
    </div>
  )
}

export default App