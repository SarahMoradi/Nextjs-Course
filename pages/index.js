import Link from 'next/link'
import { useRouter } from 'next/router'

const HomePage = () => {
  const router = useRouter()
  const clickHandler = () => {
    //with caching in the history for using back button
    router.push('/blogs')
    //without caching in the history for using back button
    router.replace('/blogs')
  }
  return (
    <>
      This is Home page <p>go to post page?</p>{' '}
      <div>
        <button onClick={clickHandler}>push to blogs</button>
      </div>
      <Link href='/posts/1'>
        <a>post page: post-1</a>
      </Link>
    </>
  )
}

export default HomePage
