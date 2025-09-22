import { useLoaderData } from 'react-router-dom'
import Header from '../components/Header'
import UserTable from '../components/UserTable'
import { useState } from 'react';

const Users = () => {
    const loadUsers = useLoaderData();
    const [users, setUsers] = useState(loadUsers)
    console.log(users)
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <section>
            <UserTable users={users} setUsers = {setUsers}></UserTable>
        </section>
      </main>
    </div>
  )
}

export default Users
