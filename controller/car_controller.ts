import { Request, Response } from "express";

import * as UF from "../utils/read_file";

function getCars(req: Request, res: Response) {

    let data = UF.readFiles();

    res.send(data);

}

function insertCars(req: Request, res: Response) {

    UF.insertData(req.body);

    res.send({ "message": "DATA SET SUCCESSFULY", "data": req.body });

}

export { getCars, insertCars }