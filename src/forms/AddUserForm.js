import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const AddUserForm = props => {

  const initialFormState = { id: null, name: '', username: '' }


  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (


    <form onSubmit={event => {
      event.preventDefault()
      if (!user.name || !user.username) return

      props.addUser(user)
      setUser(initialFormState)
    }}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" name="name" value={user.name} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label>User Name</label>
        <input type="text" className="form-control" name="username" value={user.username} onChange={handleInputChange} /><br />
      </div>
      <Button variant="primary" type="submit">Add New User</Button>
      
    </form>
  )
}

export default AddUserForm