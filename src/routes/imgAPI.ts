import { Router, Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';
import fs from 'fs';
import resize from '../utilities/utilites';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const name: string = req.query.name as string;
    const hight: number = parseInt(req.query.hight as string);
    const width: number = parseInt(req.query.width as string);
    const img_path: string = `${path.resolve(
        './'
    )}/assets/${name}.jpg` as unknown as string;
    const processed_path: string = `${path.resolve(
        './'
    )}/assets/thumbnail/${name}-${hight}-${width}.jpg` as unknown as string;

    if (
        name === undefined ||
        (req.query.hight as string) === undefined ||
        (req.query.width as string) === undefined
    ) {
        return res
            .status(400)
            .send(
                'Erorr: missing query parameters you must fill all of name, hight and width query parameters'
            );
    }

    if (!fs.existsSync(img_path)) {
        return res.status(404).send('Error: image name is not found');
    }

    if (isNaN(hight) || isNaN(width) || hight < 0 || width < 0) {
        return res
            .status(406)
            .send(
                'Error: invalid inputs, hight and width must be posative integers'
            );
    }

    res.sendFile(processed_path, (err) => {
        if (err) {
            resize(img_path, width, hight, processed_path).then(() => {
                res.sendFile(processed_path);
            });
        }
    });
});

export default router;
