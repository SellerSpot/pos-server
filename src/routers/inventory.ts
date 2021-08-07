import { middlewares } from '@sellerspot/universal-functions';
import { ROUTES } from '@sellerspot/universal-types';
import { Router } from 'express';
import { InventoryController } from '../controllers/InventoryController';
import { InventorySchema, CommonSchema } from '../schemas/schemas';

const router = Router();

router.get(
    ROUTES.POS.INVENTORY.SEARCH,
    middlewares.validateSchema({ queryParamSchema: CommonSchema.resourceQueryParam }),
    middlewares.auth,
    InventoryController.searchInventoryProducts,
);

router.get(
    ROUTES.POS.INVENTORY.GET_ALL,
    middlewares.auth,
    InventoryController.getAllInventoryProducts,
);

router.post(
    ROUTES.POS.INVENTORY.CREATE,
    middlewares.validateSchema({ bodySchema: InventorySchema.addProductToInventory }),
    middlewares.auth,
    InventoryController.addProductToInventory,
);

export default router;
