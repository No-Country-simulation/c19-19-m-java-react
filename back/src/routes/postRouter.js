const  Router  = require('express');
const controllers = require('../controllers');
const { authenticate , authorize} = require('../controllers/Users/authMiddleware')


const router = Router();

router.get('/', controllers.getAllPost);
 
router.get('/:id', controllers.getPostId);

router.post('/createPlace', authenticate, authorize(['Admin', 'SuperAdmin']), controllers.createPlace);

router.delete('/deletePost/:id', controllers.deletePost);

router.put('/updatePost/:id', controllers.putPost);






module.exports = router;

