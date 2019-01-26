const express = require('express');
const pageController = require('../controllers/page');
const authController = require('../controllers/auth');
const menuController = require('../controllers/menu');
const tablesController = require('../controllers/tables');

const MW = require('../controllers/middleware')

const router = express.Router();

router.get('/', pageController.getStartPage);
router.post('/', pageController.getStartPage);
router.get('/login', pageController.getLoginPage);
router.get('/menu', pageController.getMenuPage);
router.get('/registration', pageController.getRegistrationPage);
router.get('/reset-password', pageController.getResetPasswordPage);
router.get('/contact', pageController.getContactPage)
router.post('/login/login-user', authController.loginUser);
router.post('/registration/register-user', authController.registerUser);
router.get('/logout', authController.logout)

router.post('/menu/delete-dish', MW.ensureIsAdmin, menuController.deleteDish);
router.post('/menu/add-dish', MW.ensureIsAdmin, menuController.addDish);
router.post('/menu/edit-dish', MW.ensureIsAdmin, menuController.editDish);

router.post('/select-table', pageController.getStartPage);
router.post('/add-table', MW.ensureIsAdmin, tablesController.addTable)
router.post('/edit-table', MW.ensureIsAdmin, tablesController.editTable)
router.post('/delete-table', MW.ensureIsAdmin, tablesController.deleteTable)
module.exports = router;

