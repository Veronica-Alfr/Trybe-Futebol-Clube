import jwt = require('jsonwebtoken');

export class JwtService {
  static sign(payload: { id: number, email: string }): string {
    return jwt.sign(payload, 'SUPER SENHA');
  }
}
