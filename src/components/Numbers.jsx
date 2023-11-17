const Numbers = ({ numbers }) => {
  return (
    <div className="numbers">
      {numbers.join(", ")}
    </div>
  )
}

export default Numbers