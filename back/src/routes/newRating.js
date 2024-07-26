const  Router  = require('express');
const controllers = require('../controllers');
const { authenticate , authorize} = require('../controllers/Users/authMiddleware')


const router = Router();



router.post('/newRating', authenticate, authorize(['User', 'Admin', 'SuperAdmin']), controllers.newRating);








module.exports = router;