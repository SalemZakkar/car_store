import express from 'express';

const router = express.Router();

import {insertCars , getCars} from "../controller/car_controller"

router.get('/' , getCars);

router.post('/' , insertCars);

export {router as carRouter};