import React, { useEffect, useState } from 'react'

const UserManager = () => {
    
    const [userList, setUserList] = useState([]);
    const getUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getall');
        console.log(res.status);
        const data = await res.json();
        console.table(data);
        setUserList(data);
    }
        useEffect(() => {
          
            //when component opens
            getUserData();
         
        }, [])
        
  return (
    <div className='='vh-100 bg-body-secondary>
    <div className="conatiner py-4">
        <h1 className='text-center'>User Manager</h1>

        <table>
            <thead></thead>
            <tbody></tbody>
        </table>
    </div>
    </div>
  )
}

//hook lifecycle ke lie
//useeffect autosave ke lie 

export default UserManager;