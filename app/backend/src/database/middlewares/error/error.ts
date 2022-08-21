import { ErrorRequestHandler } from "express";

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'UnauthorizedUserError':
      res.status(401).json({ message })
      break;
    default:
      res.status(500).json({ message })
      break;
  }
}

export default errorMiddleware;
