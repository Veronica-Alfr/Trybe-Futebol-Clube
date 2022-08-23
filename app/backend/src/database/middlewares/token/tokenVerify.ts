import { Request, Response, NextFunction } from 'express';
import jwt = require('jsonwebtoken');
import 'dotenv/config';

export default class Jwt {
    
    static verifyToken  = (req: Request, _res: Response, next: NextFunction) => {
        const token = req.headers.authorization as string;
        const secret = process.env.JWT_SECRET || "";

        try {
            const data = jwt.verify(token, secret);
            req.body.user = data;
            next();
        } catch(error) {
            const e = new Error('Token must be a valid token');
            e.name = 'Unauthorized';
            throw e;
        }
    }
}
