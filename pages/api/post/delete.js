import { connectDB } from "@/util/database"
import { ObjectId } from 'mongodb'
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        let session = await getServerSession(req, res, authOptions)
        const db = (await connectDB).db('forum')
        let post = await db.collection('post').findOne(
            { _id: new ObjectId(req.body._id) }
        )
        if (post.author !== session.user.email) {
            res.status(403).json("Forbidden")
            return
        }
        let result = await db.collection('post').deleteOne(
            { _id: new ObjectId(req.body._id)},
        )
        res.status(200).json("delete")
    }
    res.status(405).end()
}