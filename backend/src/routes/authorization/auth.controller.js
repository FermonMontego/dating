import { Router } from 'express'

const router = Router()

export default router.post('/', function (req, res) {
    return res.json(req.body);
})