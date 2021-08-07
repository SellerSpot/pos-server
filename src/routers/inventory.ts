import { middlewares } from '@sellerspot/universal-functions';
import { ROUTES } from '@sellerspot/universal-types';
import { Router } from 'express';
import { InventoryController } from '../controllers/InventoryController';
import InventorySchema from '../schemas/InventorySchema';

const router = Router();

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
