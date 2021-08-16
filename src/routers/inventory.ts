import { middlewares } from '@sellerspot/universal-functions';
import { ROUTES } from '@sellerspot/universal-types';
import { Router } from 'express';
import { InventoryController } from '../controllers/InventoryController';
import { CommonSchema, InventorySchema } from '../schemas/schemas';

const router = Router();

router.get(
    ROUTES.POS.INVENTORY.SEARCH,
    middlewares.validateSchema({
        pathParamSchema: InventorySchema.inventoryResourcePathParam,
        queryParamSchema: InventorySchema.inventoryResourceQueryParam,
    }),
    middlewares.auth,
    InventoryController.searchInventoryProducts,
);

router.get(
    ROUTES.POS.INVENTORY.GET_OUTLET,
    middlewares.validateSchema({
        pathParamSchema: InventorySchema.inventoryOutletResourcePathParam,
    }),
    middlewares.auth,
    InventoryController.getOutletInventoryProducts,
);

router.get(
    ROUTES.POS.INVENTORY.GET_PRODUCT,
    middlewares.validateSchema({
        pathParamSchema: InventorySchema.inventoryProductResourcePathParam,
    }),
    middlewares.auth,
    InventoryController.getProductInventoryProducts,
);

router.get(
    ROUTES.POS.INVENTORY.GET_ALL,
    middlewares.validateSchema({
        pathParamSchema: InventorySchema.inventoryResourcePathParam,
    }),
    middlewares.auth,
    InventoryController.getAllInventoryProducts,
);

router.post(
    ROUTES.POS.INVENTORY.CREATE,
    middlewares.validateSchema({ bodySchema: InventorySchema.addProductToInventory }),
    middlewares.auth,
    InventoryController.addProductToInventory,
);

router.put(
    ROUTES.POS.INVENTORY.EDIT,
    middlewares.validateSchema({ bodySchema: InventorySchema.editProductInInventory }),
    middlewares.auth,
    InventoryController.editProductInInventory,
);

router.delete(
    ROUTES.POS.INVENTORY.DELETE,
    middlewares.validateSchema({
        pathParamSchema: InventorySchema.deleteInventoryResourcePathParam,
    }),
    middlewares.auth,
    InventoryController.deleteInventoryProduct,
);

export default router;
