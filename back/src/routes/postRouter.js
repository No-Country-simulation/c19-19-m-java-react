const  Router  = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', controllers.getAllPost);
 
router.get('/:id', controllers.getPostId);

router.post('/createPlace', controllers.createPlace);

router.delete('/deletePost/:id', controllers.deletePost);

router.put('/updatePost/:id', controllers.putPost);






module.exports = router;

