'use client';

export default function Error({error, reset}) {
    return (
        <div>
        <h4>에러가 발생했습니다.</h4>
        <button onClick={() => reset()}>돌아가기</button>
        </div>
    )
}