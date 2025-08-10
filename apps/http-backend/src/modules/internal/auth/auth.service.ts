import { HttpStatusCode, HttpStatusMsg } from "../../../constants/http-status.constant";
import { ApiError } from "../../../lib/utils/api-error.util";
import jwt from "jsonwebtoken";

class AuthService {
    async login() {
        try {
            const userId = 123;
            const accessToken = jwt.sign({
                userId
            }, 'jwt secret', {
                expiresIn: '1h'
            }, (err, token) => {
                if (err) {
                    throw new ApiError(HttpStatusCode.INTERNAL_SERVER_ERROR, HttpStatusMsg.INTERNAL_SERVER_ERROR, err);
                }
                return token;
            })

            const refreshToken = jwt.sign({
                userId
            }, 'jwt secret', {
                expiresIn: '7d'
            }, (err, token) => {
                if (err) {
                    throw new ApiError(HttpStatusCode.INTERNAL_SERVER_ERROR, HttpStatusMsg.INTERNAL_SERVER_ERROR, err);
                }
                return token;
            })

            return {
                accessToken,
                refreshToken,
            }

        } catch (error) {
            throw new ApiError(HttpStatusCode.INTERNAL_SERVER_ERROR, HttpStatusMsg.INTERNAL_SERVER_ERROR, error)
        }
    }
}

export const authService = new AuthService();