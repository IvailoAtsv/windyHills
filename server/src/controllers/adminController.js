const router = require('express').Router()
const adminManager = require('../managers/adminManager')


router.post('/register', async (req, res) => {
    const { admin, password, repeatPassword } = req.body

    await adminManager.register({ admin, password, repeatPassword })
    res.end()
})

router.post('/login', async (req, res) => {
    const { admin, password } = req.body
    try{
         token = await adminManager.login(admin, password)
    }catch(err){
        res.end(err);
    }
    res.cookie('auth', token, { httpOnly: false })
    res.end()
})

module.exports = router