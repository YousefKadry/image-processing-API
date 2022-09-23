import resize from '../utilities/utilites';
import path from 'path';

describe('testing image resizing', () => {
    it('passing invalid path will raise error', async () => {
        await expectAsync(
            resize(
                `${path.resolve()}/assets/cr7.jpg`,
                400,
                400,
                `${path.resolve()}/assets/thumbnail/cr7-400-400.jpg`
            )
        ).toBeRejectedWithError();
    });

    it('passing -ve width will raise error', async () => {
        await expectAsync(
            resize(
                `${path.resolve()}/assets/fjord.jpg`,
                -400,
                400,
                `${path.resolve()}/assets/thumbnail/fjord-400-400.jpg`
            )
        ).toBeRejectedWithError();
    });

    it('passing invalid hight will raise error', async () => {
        await expectAsync(
            resize(
                `${path.resolve()}/assets/fjord.jpg`,
                400,
                -400,
                `${path.resolve()}/assets/thumbnail/fjord-400-400.jpg`
            )
        ).toBeRejectedWithError();
    });

    it('passing valid parameters will be resolved', async () => {
        await expectAsync(
            resize(
                `${path.resolve()}/assets/fjord.jpg`,
                400,
                400,
                `${path.resolve()}/assets/thumbnail/fjord-400-400.jpg`
            )
        ).toBeResolved();
    });
});
