import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res){
    if (req.method === "GET"){
        try {
            const db = (await connectDB).db('forum')
            let result = await db.collection('comment').find({parent: new ObjectId(req.query._id)}).toArray()
            res.status(200).json(result)
        } catch (e) {
            console.log("🚀 ~ handler ~ e:", e)
            res.status(500).json({message: "서버 에러"})
        }
        return
    }
    res.status(405).end()
}