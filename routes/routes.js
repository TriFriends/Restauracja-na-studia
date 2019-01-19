const express = require('express');
const pageController = require('../controllers/page');
const authController = require('../controllers/auth');
const menuController = require('../controllers/menu');


const router = express.Router();


router.get('/', pageController.getStartPage);
router.get('/login', pageController.getLoginPage);
router.get('/menu', pageController.getMenuPage);
router.get('/registration', pageController.getRegistrationPage);
router.get('/reset-password', pageController.getResetPasswordPage);

router.post('/login/login-user', authController.loginUser);
router.post('/registration/register-user', authController.registerUser);


router.post('/menu/delete-dish', menuController.deleteDish);
module.exports = router;

