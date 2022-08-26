import Head from 'next/head';
import Styles from '../../styles/Users.module.css';

const UserList = ({ users }) => {
  return (
    <div>
      <Head>
        <title>Users</title>
      </Head>
      <div className={Styles.cardContainer}>
      <h1>All Users</h1>
        {users.map((user) => (
          <div key={user.id} className={Styles.card}>
            <p className={Styles.username}>{user.username}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return{
    props: {
      users
    }
  }
}
 
export default UserList;