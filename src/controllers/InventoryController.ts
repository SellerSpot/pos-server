import { RequestHandler } from 'express';
import {
    IAddProductToInventoryRequest,
    IInventoryData,
    IGetAllInventoryProductResponse,
    IAddProductToInventoryResponse,
    STATUS_CODE,
    ISearchResourceQueryParam,
    ISearchInventoryProductsResponse,
} from '@sellerspot/universal-types';
import { InventoryService } from '../services/InventoryService';

export class InventoryController {
    static getAllInventoryProducts: RequestHandler = async (_, res) => {
        const response: IGetAllInventoryProductResponse = {
            status: true,
            data: await InventoryService.getAllInventoryProducts(),
        };
        res.status(STATUS_CODE.OK).send(response);
    };

    static searchInventoryProducts: RequestHandler = async (req, res) => {
        const params = req.query as unknown as ISearchResourceQueryParam;
        const matchedBrands: IInventoryData[] = await InventoryService.searchInventoryProducts(
            params.query,
        );
        res.status(STATUS_CODE.OK).send(<ISearchInventoryProductsResponse>{
            status: true,
            data: matchedBrands,
        });
    };

    static addProductToInventory: RequestHandler = async (req, res) => {
        const response: IInventoryData[] = await InventoryService.addProductToInventory(
            <IAddProductToInventoryRequest>req.body,
        );
        res.status(STATUS_CODE.CREATED).send(<IAddProductToInventoryResponse>{
            status: true,
            data: response,
        });
    };
}
