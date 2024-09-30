import { Router } from 'express'

const router = Router()

router.route('/').post(function (req, res) {
    res.json(req.body);
})

router.route('/').get(function (req, res) {
    res.json({ message: 'Auth route get' });
})

export default router;