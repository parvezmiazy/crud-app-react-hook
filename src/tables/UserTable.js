import React from 'react'
import Button from 'react-bootstrap/Button';
import 'font-awesome/css/font-awesome.min.css';


const UserTable = (props) => {

    return (
 
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>

            </thead>
            <tbody>
                {
                    props.users.length > 0 ? (
                        props.users.map((user) => (

                            <tr key={user.id}>

                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>

                                <Button   onClick={() => {
                                            props.editRow(user)
                                        }} variant="info" type="submit" size="sm" >Edit</Button>
                                  
                                        <Button  onClick={() => props.deleteUser(user.id)} variant="danger" type="submit" size="sm">Delete</Button>
                              
                                       
                                </td>
                            </tr>

                        )
                        )) : (
                        <tr>
                            <td colSpan={3}>No users</td>
                        </tr>
                    )
                }



            </tbody>
        </table>
    )
}

export default UserTable
