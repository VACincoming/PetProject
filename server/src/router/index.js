const Router = require('express');
const { body } = require('express-validator');
const router = new Router();
const authMiddleware = require('../middlewares/AuthMiddleware');
const postController = require('../controllers/PostController.js');
const userController = require('../controllers/UserController.js');

router.post('/posts', postController.create);
router.get('/posts',postController.getAll);
router.get('/posts/:id', postController.getOne);
router.put('/posts', postController.update);
router.delete('/posts/:id', postController.delete);

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32}),
  userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);


module.exports = router;