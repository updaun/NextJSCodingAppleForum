import { connectDB } from "@/util/database"
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        const db = (await connectDB).db('forum')
        let result = await db.collection('post').deleteOne(
            { _id: new ObjectId(req.body._id) },
        )
        res.status(200).json("delete")
    }
    res.status(405).end()
}