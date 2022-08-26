import Head from 'next/head'
import Link from 'next/link'
import Styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1 className={Styles.title}>Homepage</h1>
      <p className={Styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <p className={Styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <Link href="/users/users">
        <a className={Styles.btn}>See User Listing</a>
      </Link>
    </div>
  )
}
