import { RequestHandler } from 'express';

//
export const homeController: RequestHandler = (_, res) => {
    res.send({
        status: true,
        message: 'SellerSpot pos Server API service',
    });
};
