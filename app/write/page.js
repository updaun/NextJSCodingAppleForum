import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Write(){
    let session = await getServerSession(authOptions)

    if (!session.user) {
        return <div>로그인이 필요합니다</div>
    }

    return (
      <div className="p-20">
        <h4>글작성</h4>
        <form action="/api/post/new" method="POST">
            <input name="title" placeholder="글제목"/>
            <input name="content" placeholder="글내용"/>
            <button type="submit">버튼</button>
        </form>
      </div>
    )
}