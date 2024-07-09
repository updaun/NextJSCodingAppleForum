import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
import { ObjectId } from "mongodb"

export default async function handler(req, res){
    let session = await getServerSession(req, res, authOptions)
    req.body = JSON.parse(req.body)
    if (req.method === "POST"){
        let payload = {
            content: req.body.content,
            parent: new ObjectId(req.body._id),
            author: session.user.email
        }
        if (req.body.content === "") {
            res.status(400).json({message: "내용을 입력해주세요."})
            return
        }
        try {
            const db = (await connectDB).db('forum')
            let result = await db.collection('comment').insertOne(payload)
            res.status(200).json({message: "댓글이 등록되었습니다."})
        } catch (e) {
            res.status(500).json({message: "서버 에러"})
        }
        return
    }
    res.status(405).end()
}