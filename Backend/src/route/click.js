import { Router } from "express";
import Click from "../model/click";

const router = new Router();

router.get('/', (req, res) => {
    res.json( 'Recieved a GET method' )
})

export default router;