import { tenantDbServices } from '@sellerspot/database-models';
import {
    IAddProductToInventoryRequest,
    IEditProductInInventoryRequest,
    IInventoryData,
    ISearchInventoryProductsResponse,
    ISearchInventoryQueryParam,
} from '@sellerspot/universal-types';

export class InventoryService {
    static getProductInventoryProducts = async (productId: string): Promise<IInventoryData> => {
        const { InventoryService: InventoryDbService } = tenantDbServices.pos;
        const products = await InventoryDbService.getAllInventoryProducts({ productId });
        return products[0];
    };

    static getOutletInventoryProducts = async (outletId: string): Promise<IInventoryData[]> => {
        const { InventoryService: InventoryDbService } = tenantDbServices.pos;
        const products = await InventoryDbService.getAllInventoryProducts({ outletId });
        return products;
    };

    static getAllInventoryProducts = async (): Promise<IInventoryData[]> => {
        const { InventoryService: InventoryDbService } = tenantDbServices.pos;
        const products = await InventoryDbService.getAllInventoryProducts({});
        return products;
    };

    static addProductToInventory = async (
        newProduct: IAddProductToInventoryRequest,
    ): Promise<IInventoryData[]> => {
        const { InventoryService: InventoryDbService } = tenantDbServices.pos;
        const createdProduct = await InventoryDbService.addProductToInventory(newProduct);
        return createdProduct;
    };

    static editProductInInventory = async (
        productToUpdate: IEditProductInInventoryRequest,
    ): Promise<IInventoryData> => {
        const { InventoryService: InventoryDbService } = tenantDbServices.pos;
        const updatedProduct = await InventoryDbService.editProductInInventory(productToUpdate);
        return updatedProduct;
    };

    static async searchInventoryProducts(
        query: string,
        outletId: string,
        lookup: ISearchInventoryQueryParam['lookup'] = 'all',
    ): Promise<ISearchInventoryProductsResponse['data']> {
        const { InventoryService: InventoryDbService } = tenantDbServices.pos;
        const searchResult = await InventoryDbService.searchInventoryProducts(
            query,
            outletId,
            lookup,
        );
        return searchResult;
    }

    static async deleteInventoryProduct(productId: string, outletId: string): Promise<void> {
        const { InventoryService: InventoryDbService } = tenantDbServices.pos;
        await InventoryDbService.deleteProductFromInventory(productId, outletId);
    }
}
