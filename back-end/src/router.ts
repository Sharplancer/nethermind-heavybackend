import { Router } from 'express'
import { calculation } from './controller'

const router = Router()

router.get("/api", calculation);

export default router
