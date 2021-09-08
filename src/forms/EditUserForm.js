import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
const EditUserForm = (props) => {

    const [user, setUser] = useState(props.currentUser)

    useEffect(
        () => {
            setUser(props.currentUser)
        },
        [props]
    )

    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()

                props.updateUser(user.id, user)
            }}
        >

            <div className="form-group">
                <label>Name</label>
                <input className="form-control"
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label>Username</label>
                <input className="form-control"
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleInputChange}
                />
            </div>
            
            <Button variant="primary" type="submit">Update User</Button>
     
      <Button  onClick={() => props.setEditing(false)} variant="primary" type="submit">Cancel</Button>
        </form>

    )
}

export default EditUserForm