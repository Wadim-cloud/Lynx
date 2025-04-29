import { useRouter } from 'next/router'

export default function Drawing() {
  const router = useRouter()
  const { id } = router.query

  return <div>Drawing {id}</div>
}
