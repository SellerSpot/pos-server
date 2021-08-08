import Joi from 'joi';
import { RegexUtil } from '@sellerspot/universal-functions';
import { IAddProductToInventoryRequest } from '@sellerspot/universal-types';

export default class InventorySchema {
    static addProductToInventory = Joi.object<IAddProductToInventoryRequest>({
        productId: Joi.string().regex(RegexUtil.OBJECT_ID).required(),
        tags: Joi.array().items(Joi.string()),
        configurations: Joi.array().items(
            Joi.object<IAddProductToInventoryRequest['configurations'][0]>({
                outletId: Joi.string().regex(RegexUtil.OBJECT_ID).required(),
                isTrack: Joi.boolean(),
                landingCost: Joi.number(),
                isActive: Joi.boolean(),
                markup: Joi.number(),
                sellingPrice: Joi.number(),
                stock: Joi.number(),
                mrp: Joi.number().required(),
                taxSettingId: Joi.string().regex(RegexUtil.OBJECT_ID).required(),
            }),
        ),
    });
}
