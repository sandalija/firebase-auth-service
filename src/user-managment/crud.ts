import { Request, Response } from "express"
import { getAuth } from "firebase-admin/auth"

export const createUserRoute = async (req: Request, res: Response) => {
  try {
    const result = await getAuth().createUser(req.body as any)
    res.send(result)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

export const updateUserRoute = async (req: Request, res: Response) => {
  try {
    const uid : string = req.params.uid.toString();
    const result = await getAuth().updateUser(uid, req.body as any)
    res.send(result)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

