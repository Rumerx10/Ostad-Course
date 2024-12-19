import express from 'express';
import * as FeaturesController from '../app/controllers/FeatureController.js';


import * as TaskControllers from '../app/controllers/TaskControllers.js';
const router = express.Router();

router.get('/feature1/TokenEncode', FeaturesController.TokenEncode);
router.get('/feature2/TokenDecode', FeaturesController.TokenDecode);












router.post('/createTask', TaskControllers.createTask)
router.get('/readTask', TaskControllers.readTask)
router.put('/updateTask', TaskControllers.updateTask)
router.delete('/deleteTask', TaskControllers.deleteTask)





export default router;