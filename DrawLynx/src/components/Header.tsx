import Link from 'next/link'

export default function Header() {
  return (
    <nav>
      <Link href="/gallery">Gallery</Link> | 
      <Link href="/create-drawing">Create Drawing</Link>
    </nav>
  )
}
