import Joi from 'joi';
import { RegexUtil } from '@sellerspot/universal-functions';
import { IAddProductToInventoryRequest } from '@sellerspot/universal-types';

export default class InventorySchema {
    static addProductToInventory = Joi.object<IAddProductToInventoryRequest>({
        productId: Joi.string().regex(RegexUtil.OBJECT_ID).required(),
        isTrack: Joi.boolean(),
        landingCost: Joi.number(),
        markup: Joi.number(),
        sellingPrice: Joi.number(),
        stock: Joi.number(),
        tags: Joi.array().items(Joi.string()),
        taxBracketId: Joi.string().regex(RegexUtil.OBJECT_ID).required(),
    });
}
