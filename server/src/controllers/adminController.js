const router = require('express').Router()
const adminManager = require('../managers/adminManager')


router.post('/register', async (req, res) => {
    const { admin, password, repeatPassword } = req.body

    await adminManager.register({ admin, password, repeatPassword })
    res.end()
})

router.post('/login', async (req, res) => {
    const { admin, password } = req.body

    const token = await adminManager.login(admin, password)

    res.cookie('auth', token, { httpOnly: true })
    res.end('logged in')
})
router.get('/logout', (req, res) => {
res.clearCookie('auth')
res.redirect('/')
})

module.exports = router