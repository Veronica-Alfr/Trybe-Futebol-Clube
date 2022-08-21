const authService = require('../services/authService');
import { Request, Response } from 'express';

export const loginUser = async (req: Request, res: Response) => {
        const { email, password } = authService.validateBody(req.body);

        const token = await authService.login(email, password);

        res.status(200).json({ token });
};
