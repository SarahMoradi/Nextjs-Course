import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter()
  const { commentId } = router.query
  return <>This is {commentId} comment page for each one!</>
}

export default Comment
