// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// type
type Data = {
    id: boolean | string | string[];
    name: string;
};


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { slug } = req.query;

    res.status(200).json({
        id: slug && slug.length > 0 && slug[0],
        name: 'John Doe'
    });
};