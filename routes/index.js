const router = require('express').Router();
const apiRoutes = require('./api/api')
const viewRoutes = require('./views/view')

router.use('/api', apiRoutes)
router.use('/', viewRoutes)

module.exports = router