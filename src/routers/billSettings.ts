import { Router } from 'express';
import { ROUTES } from '@sellerspot/universal-types';
import { middlewares } from '@sellerspot/universal-functions';
import { BillSettingsController } from 'controllers/controllers';
import { BillSettingsSchema } from 'schemas/schemas';

const router = Router();

router.get(ROUTES.POS.BILL_SETTINGS.GET, middlewares.auth, BillSettingsController.getBillSettings);

router.put(
    ROUTES.POS.BILL_SETTINGS.UPDATE,
    middlewares.auth,
    middlewares.validateSchema({ bodySchema: BillSettingsSchema.updateBillSettingsSchema }),
    BillSettingsController.updateBillSettings,
);

export default router;
