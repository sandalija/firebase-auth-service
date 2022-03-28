import axios, { AxiosError } from "axios";
import { Request, Response } from "express"
import firebaseClient from "../client/firebaseClient";


export const loginEmailPasswordRoute = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    console.log({email, password})
    const result = await firebaseClient.post("accounts:signInWithPassword",{
      email: email.toString(),
      password: password.toString(),
      returnSecureToken: req.body.returnSecureToken === undefined ? true : req.body.returnSecureToken
    })
    res.send(result.data)
  } catch (error: any) { // AxiosError instance
    console.error(error)
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        res.status(500).send(error.response.data)
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
        res.status(500).send(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
    res.status(500).send(error)
    }
  }
}