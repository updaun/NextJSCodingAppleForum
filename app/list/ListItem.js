'use client'
import Link from "next/link"

export default function ListItem({result}) {
  return (
    <div>
      { result.map((a,i)=>
          <div className="list-item" key={i}>
            <Link href={'/detail/' + result[i]._id}>{result[i].title}</Link>
            <Link href={'/edit/' + result[i]._id} className="list-btn">✏️</Link>
            <span onClick={() => {
              fetch('/api/post/delete', {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({_id: result[i]._id}),
              })
              .then((r) => {
                return r.json()
              })
              .then((result) => {
                console.log(result)
              })
            }}>🗑</span>
            <p>1월 1일</p>
          </div>
       ) }
    </div>
  )
}