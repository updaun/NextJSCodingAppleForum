export default async function handler(req, res){
    if (req.method === "GET"){
        res.status(200).json({time: new Date().toISOString()})
        return
    }
    res.status(405).end()
}