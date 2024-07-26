const  Router  = require('express');
const controllers = require('../controllers');
const { authenticate , authorize} = require('../controllers/Users/authMiddleware')


const router = Router();



router.post('/createComment', authenticate, authorize(['User', 'Admin', 'SuperAdmin']), controllers.newComment);




module.exports = router;