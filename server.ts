import express, { Request, Response }  from "express"

//Create an app
const app = express();
app.get('/', (req: Request, res: Response) => {
    res.send('Hello world\n');
});

//Listen port
const PORT = 8080;
app.listen(PORT);
console.log(`Running on port ${PORT}`);
