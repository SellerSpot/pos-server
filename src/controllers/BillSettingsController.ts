import { RequestHandler } from 'express';
import { BillSettingsService } from 'services/services';
import {
    IGetBillSettingsResponse,
    IUpdateBillSettingsRequest,
    IUpdateBillSettingsResponse,
} from '@sellerspot/universal-types';

export default class BillSettingsController {
    static getBillSettings: RequestHandler = async (_, res) => {
        const billSettings = await BillSettingsService.getBillSettings();
        const getBillSettingsResponse: IGetBillSettingsResponse = {
            status: true,
            data: billSettings,
        };
        res.status(200).json(getBillSettingsResponse);
    };

    static updateBillSettings: RequestHandler = async (req, res) => {
        const { billSettings }: IUpdateBillSettingsRequest = req.body;
        const updatedBillSettings = await BillSettingsService.updateBillSettings(billSettings);
        const billSettingsResponseBody: IUpdateBillSettingsResponse = {
            status: true,
            data: updatedBillSettings,
        };
        res.status(200).json(billSettingsResponseBody);
    };
}
