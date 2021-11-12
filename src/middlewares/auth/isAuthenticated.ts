import { NextFunction, Request, Response } from 'express';
import { verify, Secret } from 'jsonwebtoken';
import AppError from '../errors/AppError'

interface ITokenPayload {
    iat: number
    exp: number
    id: string
    name: string
    email: string
}

export default function isAuthenticated( request: Request, response: Response, next: NextFunction): void {

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('JWT Token is missing!');
    }

    const [, token] = authHeader.split(' ');

    try {
        const decodedToken: any = verify(token, 'teste_de_secret' as Secret);

        const expiredToken = new Date(decodedToken.exp * 1000)
        const now = new Date()

        if (now > expiredToken) {
            throw new AppError('Invalid JWT Token!');
        }

        const { id, name, email } = decodedToken as ITokenPayload;

        request.user = {
            id,
            name,
            email
        };

        return next();
    } catch {
        throw new AppError('Invalid JWT Token!');
    }
}
