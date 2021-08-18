import { RequestHandler } from 'express';
import {
    IAddProductToInventoryRequest,
    IInventoryData,
    IGetAllInventoryProductResponse,
    IAddProductToInventoryResponse,
    STATUS_CODE,
    ISearchResourceQueryParam,
    ISearchInventoryProductsResponse,
    IEditProductInInventoryRequest,
    IEditInventoryProductResponse,
    IGetInventoryByOutletIdResponse,
    IGetInventoryByProductIdResponse,
} from '@sellerspot/universal-types';
import { InventoryService } from '../services/InventoryService';

export class InventoryController {
    static getInventoryByOutletId: RequestHandler = async (req, res) => {
        const response: IGetInventoryByOutletIdResponse = {
            status: true,
            data: await InventoryService.getOutletInventoryProducts(req.params.outletid),
        };
        res.status(STATUS_CODE.OK).send(response);
    };

    static getGetInventoryByProductId: RequestHandler = async (req, res) => {
        const response: IGetInventoryByProductIdResponse = {
            status: true,
            data: await InventoryService.getProductInventoryProducts(req.params.productid),
        };
        res.status(STATUS_CODE.OK).send(response);
    };

    static getAllInventoryProducts: RequestHandler = async (req, res) => {
        const response: IGetAllInventoryProductResponse = {
            status: true,
            data: await InventoryService.getAllInventoryProducts(),
        };
        res.status(STATUS_CODE.OK).send(response);
    };

    static searchInventoryProducts: RequestHandler = async (req, res) => {
        const params = req.query as unknown as ISearchResourceQueryParam;
        const searchResults = await InventoryService.searchInventoryProducts(
            params.query,
            req.params.outletid,
        );
        res.status(STATUS_CODE.OK).send(<ISearchInventoryProductsResponse>{
            status: true,
            data: searchResults,
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

    static editProductInInventory: RequestHandler = async (req, res) => {
        const response: IInventoryData = await InventoryService.editProductInInventory(
            <IEditProductInInventoryRequest>req.body,
        );
        res.status(STATUS_CODE.CREATED).send(<IEditInventoryProductResponse>{
            status: true,
            data: response,
        });
    };

    static deleteInventoryProduct: RequestHandler = async (req, res) => {
        await InventoryService.deleteInventoryProduct(req.params.productid, req.params.outletid);
        res.status(STATUS_CODE.NO_CONTENT).send();
    };
}
