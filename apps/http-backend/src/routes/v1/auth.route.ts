import { Router } from "express";
import { handle404Error } from "../../middlewares/handle-404-error.middleware";
import { authController } from "../../modules/internal/auth/auth.controller";
import { ApiPath } from "../../constants/api-paths.constant";

const router = Router();

router.route(ApiPath.LOGIN).post(authController.login);
router.route(ApiPath.REGISTER_USER).post(authController.registerUser)

router.use(handle404Error)

export const authRoutes: Router = router;