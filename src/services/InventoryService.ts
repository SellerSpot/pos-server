import { tenantDbServices } from '@sellerspot/database-models';
import { IAddProductToInventoryRequest, IInventoryData } from '@sellerspot/universal-types';

export class InventoryService {
    static getAllInventoryProducts = async (): Promise<IInventoryData[]> => {
        const { InventoryDbService } = tenantDbServices.pos;
        const products: IInventoryData[] =
            (await InventoryDbService.getAllInventoryProducts()) as IInventoryData[];
        return products;
    };

    static addProductToInventory = async (
        newProduct: IAddProductToInventoryRequest,
    ): Promise<IInventoryData[]> => {
        const { InventoryDbService } = tenantDbServices.pos;
        const createdProduct = await InventoryDbService.addProductToInventory(newProduct);
        return createdProduct;
    };

    static async searchInventoryProducts(query: string): Promise<IInventoryData[]> {
        const { InventoryDbService } = tenantDbServices.pos;
        const matchedBrands: IInventoryData[] = await InventoryDbService.searchInventoryProducts(
            query,
        );
        return matchedBrands;
    }
}
