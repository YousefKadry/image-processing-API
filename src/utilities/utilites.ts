import sharp from 'sharp';

const resize = async (
    imgPath: string,
    width: number,
    hight: number,
    topath: string
): Promise<void> => {
    await sharp(imgPath).resize(width, hight).toFile(topath);
};

export default resize;
