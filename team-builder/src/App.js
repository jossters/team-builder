import React, {useState} from 'react';
import './App.css';
import Form from './components/Form' ;
import FormCard from './components/FormCard';


const initialFormValues = {
  name:"",
  email:"",
  role:"",
};

export default function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) =>{
    setFormValues({...formValues,[inputName]: inputValue,
  });
  };
  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!newMember.name || !newMember.email || !newMember.role) {return;}
     
    setMembers(members.concat(newMember));
    setFormValues(initialFormValues)
  };
  return (
    <div className="App">
      <p>Team Member Form</p>
      <Form
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
      {members.map((member,index) => {
        return (
        <FormCard key={index} member={member}/>
        );
      })} 
    </div>
  );
}

 
