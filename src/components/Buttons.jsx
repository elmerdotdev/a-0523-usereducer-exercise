const Buttons = (props) => {
  return (
    <div className="buttons">
      <button onClick={() => props.setColor(!props.color)}>Toggle color</button>
      <button onClick={() => props.setFontSize(prevState => prevState + 2)}>Increase font size</button>
      <button onClick={() => props.setFontSize(prevState => prevState - 2)}>Decrease font size</button>
      <button onClick={() => props.filterNumbers()}>Filter numbers</button>
    </div>
  )
}

export default Buttons