import Link from 'next/link'

const NotFound = () => {
  return (
    <>
      Not Found !{' '}
      <Link href='/'>
        <a>go to home page? </a>
      </Link>
    </>
  )
}

export default NotFound
