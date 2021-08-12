import Joi from 'joi';
import { RegexUtil } from '@sellerspot/universal-functions';
import {
    IAddProductToInventoryRequest,
    IDeleteInventoryResourcePathParam,
    IEditProductInInventoryRequest,
    IGetOutletInventoryResourcePathParam,
    IGetProductInventoryResourcePathParam,
    IInventoryResourcePathParam,
} from '@sellerspot/universal-types';

export default class InventorySchema {
    static addProductToInventory = Joi.object<IAddProductToInventoryRequest>({
        productId: Joi.string().regex(RegexUtil.OBJECT_ID).required(),
        tags: Joi.array().items(Joi.string()),
        configurations: Joi.array().items(
            Joi.object<IAddProductToInventoryRequest['configurations'][0]>({
                outlet: Joi.string().regex(RegexUtil.OBJECT_ID).required(),
                isTrack: Joi.boolean(),
                landingCost: Joi.number(),
                isActive: Joi.boolean(),
                markup: Joi.number(),
                sellingPrice: Joi.number(),
                stock: Joi.number(),
                mrp: Joi.number().required(),
                taxSetting: Joi.string().regex(RegexUtil.OBJECT_ID).required(),
            }),
        ),
    });

    static editProductInInventory = Joi.object<IEditProductInInventoryRequest>({
        productId: Joi.string().regex(RegexUtil.OBJECT_ID).required(),
        configurations: Joi.array().items(
            Joi.object<IAddProductToInventoryRequest['configurations'][0]>({
                outlet: Joi.string().regex(RegexUtil.OBJECT_ID).required(),
                isTrack: Joi.boolean(),
                landingCost: Joi.number(),
                isActive: Joi.boolean(),
                markup: Joi.number(),
                sellingPrice: Joi.number(),
                stock: Joi.number(),
                mrp: Joi.number().required(),
                taxSetting: Joi.string().regex(RegexUtil.OBJECT_ID).required(),
            }),
        ),
    });

    static deleteInventoryResourcePathParam = Joi.object<IDeleteInventoryResourcePathParam>({
        productid: Joi.string().regex(RegexUtil.OBJECT_ID).required(),
        outletid: Joi.string().regex(RegexUtil.OBJECT_ID),
    });

    static inventoryResourcePathParam = Joi.object<IInventoryResourcePathParam>({
        outletid: Joi.string().regex(RegexUtil.OBJECT_ID),
    });

    static inventoryProductResourcePathParam = Joi.object<IGetProductInventoryResourcePathParam>({
        productid: Joi.string().regex(RegexUtil.OBJECT_ID).required(),
    });

    static inventoryOutletResourcePathParam = Joi.object<IGetOutletInventoryResourcePathParam>({
        outletid: Joi.string().regex(RegexUtil.OBJECT_ID).required(),
    });
}
