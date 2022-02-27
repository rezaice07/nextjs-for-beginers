import Link from "next/link"

const Home = () => {
  return (
    <div >
      <h1>Home Page</h1>
      <br />
      <Link href='/category' passHref>Category</Link>
    </div>

  )
}

export default Home
