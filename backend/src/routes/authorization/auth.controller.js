import { Router } from 'express'

const router = Router()

export default router.get('/', function (req, res) {
    res.json({ message: "data auth" })
})