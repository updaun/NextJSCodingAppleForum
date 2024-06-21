import { connectDB } from "@/util/database"

export default async function handler(req, res){
    if (req.method === "POST"){
        console.log(req.body)
        if (req.body.title === "") {
            res.status(400).json({message: "제목을 입력해주세요."})
            return
        }
        if (req.body.content === "") {
            res.status(400).json({message: "내용을 입력해주세요."})
            return
        }
        try {
            const db = (await connectDB).db('forum')
            let result = await db.collection('post').insertOne(req.body)
            res.status(201).redirect('/list')
        } catch (e) {
            res.status(500).json({message: "서버 에러"})
        }
        return
    }
    res.status(405).end()
}