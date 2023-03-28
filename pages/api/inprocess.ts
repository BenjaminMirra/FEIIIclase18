import {students} from "./db";
import type {NextApiRequest, NextApiResponse} from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(students.filter((student)=>
        parseInt(student.calificaciones.PrimerCuatr) < 6 || parseInt(student.calificaciones.SegundoCuatr) < 6
    ))
}

