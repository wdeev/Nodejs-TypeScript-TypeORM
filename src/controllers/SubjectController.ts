import { Request, response, Response } from "express";
import { subjectRepository } from "../repositories/SubjectRepository";

export class SubjectController {

    async create(req: Request, res: Response) {

        const { name } = req.body

        if(!name) {
            return res.status(400).json({ messsage: 'O nome e obrigatório!' })
        }

        try {
            
            const newSubject = subjectRepository.create({
                name
            })

            await subjectRepository.save(newSubject)

            console.log(newSubject)

            res.status(201).json(newSubject)

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error' })
        }

        return res.json('test')
    }
}