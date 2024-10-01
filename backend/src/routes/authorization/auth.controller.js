import { Router } from 'express'

const router = Router()

router.post("/", function (req, res) {
    res.json(req.body);
})

router.get('/', function (req, res) {
    res.json({ message: 'get запрос из auth' })
})

export default router;