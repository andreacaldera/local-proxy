import { Request, Response } from 'express'

export const sampleHandler = (name: string, port: number) => (
  req: Request,
  res: Response,
) => {
  res.send(
    `Response from ${name}: port=${port}; url=${
      req.originalUrl
    }; body=${JSON.stringify(req.body)}`,
  )
}
