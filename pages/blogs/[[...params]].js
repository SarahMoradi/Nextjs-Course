import { useRouter } from 'next/router'

const Params = () => {
  const router = useRouter()
  const { params } = router.query
  console.log(params)
  return <>This is params : {JSON.stringify(params)} </>
}

export default Params
