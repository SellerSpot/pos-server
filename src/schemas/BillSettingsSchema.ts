import joi from 'joi';
import { IUpdateBillSettingsRequest } from '@sellerspot/universal-types';

export default class BillSettingsSchema {
    static updateBillSettingsSchema = joi.object<IUpdateBillSettingsRequest>({
        billSettings: joi.object().required(), // if needed extra security describe entire billSettings object
    });
}
