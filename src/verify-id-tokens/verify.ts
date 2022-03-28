import { Request, Response } from "express"
import { getAuth } from "firebase-admin/auth"

export const verifyIdTokenRoute = async (req: Request, res: Response) => {
  try {
    const result = await getAuth().verifyIdToken(req.body.token as any)
    res.send(result)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}