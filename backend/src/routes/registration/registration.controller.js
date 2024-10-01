import express from 'express';

const router = express.Router();

router.post('/', function (req, res) {
    return res.json(req.body);
})

router.get('/', function (req, res) {
    res.json({ message: 'get запрос из registration' })
})

export default router;