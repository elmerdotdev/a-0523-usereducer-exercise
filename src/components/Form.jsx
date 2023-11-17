const Form = (props) => {
  return (
    <div className="form">
      <label htmlFor="firstname">
        First name:
        <input
          type="text"
          id="firstname"
          value={props.fullname.firstname}
          onChange={(e) =>
            props.setFullname({ ...props.fullname, firstname: e.target.value })
          }
        />
      </label>
      <label htmlFor="lastname">
        Last name:
        <input
          type="text"
          id="lastname"
          value={props.fullname.lastname}
          onChange={(e) =>
            props.setFullname({ ...props.fullname, lastname: e.target.value })
          }
        />
      </label>
    </div>
  );
};

export default Form;
