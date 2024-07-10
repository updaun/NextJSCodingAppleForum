'use client';
import {useEffect, useState} from 'react';

export default function Comment(props) {
    let [comment, setComment] = useState('')
    let [commentList, setCommentList] = useState([])
    

    useEffect(() => {
        fetch(`/api/comment/list?_id=${props._id}`, {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setCommentList(data);
        })
    }, []);

    return (
        <div>
          <hr></hr>
            { commentList.length > 0 ?
              commentList.map((v, i) => {
                return <p key={i}>{v.content}</p>
            })
            : '댓글이 없습니다.'}
          <input onChange={(e)=>{setComment(e.target.value)}}/>
          <button onClick={() => {
            fetch('/api/comment/new', {
              method: 'POST',
              body: JSON.stringify({content: comment, _id: props._id}
            )})            
            }   
          }>댓글전송</button>
        </div>
    )
}