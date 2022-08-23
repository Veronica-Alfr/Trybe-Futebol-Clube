import jwt = require('jsonwebtoken');
import 'dotenv/config';

const secret = process.env.JWT_SECRET || ""

export class JwtService {
  static sign(payload: { id: number, email: string }): string {
    return jwt.sign(payload, secret);
  }
}
