import { useRouter } from 'next/router'

const ReviewItem = () => {
  const router = useRouter()
  console.log(router.query)
  const { reviewId, commentId } = router.query
  return (
    <>
      This is {reviewId} review for {commentId} comment!
    </>
  )
}

export default ReviewItem
