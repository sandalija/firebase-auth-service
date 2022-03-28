import express, { Request, Response }  from "express"
import { createUserRoute, deleteUserRoute, readUserRoute, updateUserRoute } from "./src/user-managment/crud";
import * as firebase from 'firebase-admin';
import serviceAccount from "./service-account";
import * as sa from "./firebase-adminsdk.json"
import { verify } from "crypto";
import { verifyIdTokenRoute } from "./src/verify-id-tokens/verify";


firebase.initializeApp({credential: firebase.credential.cert({...sa } as any),})
//Create an app

try {
    const app = express();
    app.use(express.json());
    app.use((err: unknown, req: Request, res: Response, next: Function) => {
        console.error(err)
        next()
    })
    app.post('/user', (req, res) => createUserRoute(req, res));
    app.get('/user/:uid', (req, res) => readUserRoute(req, res));
    app.patch('/user/:uid', (req, res) => updateUserRoute(req, res));
    app.delete('/user/:uid', (req, res) => deleteUserRoute(req, res));

    app.post('/verify-token', (req, res) => verifyIdTokenRoute(req, res));



    app.get('/', (req: Request, res: Response) => {
        res.send('Hello world\n');
    });

    //Listen port
    const PORT = 8080;
    app.listen(PORT);
    console.log(`Running on port ${PORT}`);
} catch(e) {
    console.error(e)
}



