'use client';
import { useState } from 'react';

export default function Write() {
  let [src, setSrc] = useState('');

  const handleFileChange = async (e) => {
    let file = e.target.files[0];
    let filename = encodeURIComponent(file.name);
    let res = await fetch('/api/post/image?file=' + filename);
    res = await res.json();
    // S3 업로드
    const formData = new FormData();
    Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
      formData.append(key, value);
    });
    let uploadResult = await fetch(res.url, {
      method: 'POST',
      body: formData,
    });
    console.log(uploadResult);

    if (uploadResult.ok) {
      setSrc(res.url + '/' + filename);
    } else {
      console.log('실패');
    }
  };

  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글제목" />
        <input name="content" placeholder="글내용" />
        <button type="submit">버튼</button>
      </form>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      {src && <img src={src} alt="Uploaded" />}
    </div>
  );
}
