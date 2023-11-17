const Welcome = (props) => {
  return (
    <h1 style={{ color: props.color ? 'yellow' : 'white', fontSize: props.fontSize }}>
      <span>Welcome {props.fullname.firstname} {props.fullname.lastname}!</span>
    </h1>
  )
}

export default Welcome