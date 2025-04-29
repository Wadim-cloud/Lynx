import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function Gallery() {
  const [drawings, setDrawings] = useState([])

  useEffect(() => {
    async function fetchDrawings() {
      const { data, error } = await supabase
        .from('drawings')
        .select('*')

      if (error) console.error(error)
      else setDrawings(data)
    }

    fetchDrawings()
  }, [])

  return (
    <div>
      <h1>Gallery</h1>
      <ul>
        {drawings.map(drawing => (
          <li key={drawing.id}>
            <a href={`/drawing/${drawing.id}`}>{drawing.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Gallery() {
    return <div>Gallery Page</div>
  }
  