import React from "react";

export default function Form({values, update, submit}) {

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
<div onSubmit={onSubmit}>
    <form>
          <input
            type='text'
            name='name'
            onChange = {onChange}
            value = {values.name}
            placeholder='Name'
            maxLength = "30"
          />
          <input
            type='email'
            name='email'
            onChange={onChange}
            value={values.email}
            placeholder='type an email'
          />
          <select name="role" value={values.role} onChange={onChange}>
            <option value="">------select role------</option>
            <option value="backend">Backend</option>
            <option value="engineer">Engineer</option>
            <option value="frontend">Frontend</option>
            <option value="designer">Designer</option>
          </select>
        <div>
          <button>Submit</button>
        </div>
    </form>
    </div>
  );
}
