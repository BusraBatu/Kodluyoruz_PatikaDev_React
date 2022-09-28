import React, { useState, useEffect } from 'react'

const Form = ({todos, setTodos}) => {//this come from the parent is Todo/index.js
    const [form, setForm]= useState("");//this is the form state declaration
  
    const onSubmit=(e)=>{
        e.preventDefault();//used because button submit
        if(form===""){//if input is empty, it shouldnt add the list
            return false;
        }
        setTodos([...todos, {
            id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,//it has to be unique 
            todo: form,//it came from value
            checked: false,
        }]);

    }
    useEffect(()=>{// state changed and dom rendered and effect is showing this
        setForm("");//input part is empty now
    },[todos]);//like a chasing system
  return (
    <header className="header">
    <h1>todos</h1>
    <form onSubmit={onSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={form} 
        onChange={(e) => setForm(e.target.value)} 
      />
    </form>
  </header>
  )
}

export default Form