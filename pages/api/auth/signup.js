import { connectDB } from "@/util/database";
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let hash = await bcrypt.hash(req.body.password, 10);
        req.body.password = hash;        
        let db = (await connectDB).db('forum');

        // 이메일 중복체크
        let user = await db.collection('user_cred').findOne({email : req.body.email})
        if (user) {
            res.status(400).json({ message: 'email already exists' });
            return;
        }

        await db.collection('user_cred').insertOne(req.body);
        res.status(200).json({ message: 'success' });
    }
}
