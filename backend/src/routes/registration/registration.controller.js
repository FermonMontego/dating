import express from 'express';

const router = express.Router();

router.post('/', function (req, res) {
    return res.json(req.body);
})

export default router;