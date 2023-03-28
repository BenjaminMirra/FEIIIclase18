import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    const requestMethod = req.method;
    
    switch (requestMethod) {
        case 'POST':
            res.status(200).json({ message: `You submitted the following data: ${req.body}` })
        // handle other HTTP methods
        default:
            res.status(200).json({ message: 'Error on Submit' })
    }
}