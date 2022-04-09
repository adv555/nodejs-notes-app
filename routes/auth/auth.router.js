const { Router } = require('express')
const tryCatchWrapper = require('../../helpers/try-catch-wrapper')
const { googleAuth, googleRedirect } = require('../../controllers/auth/auth.controller')

const router = Router()

router.get('/google', tryCatchWrapper(googleAuth))

router.get('/google-redirect', tryCatchWrapper(googleRedirect))

module.exports = router
