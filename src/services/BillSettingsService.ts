import { tenantDbServices } from '@sellerspot/database-models';
import { IBillSettings } from '@sellerspot/universal-types';

export default class BillSettingsService {
    static getBillSettings = async (): Promise<IBillSettings> => {
        const billSettings = await tenantDbServices.pos.Info.getBillSettings();
        return billSettings;
    };

    static updateBillSettings = async (billSettings: IBillSettings): Promise<IBillSettings> => {
        const updatedBillSettings = await tenantDbServices.pos.Info.updateBillSettings(
            billSettings,
        );
        return updatedBillSettings;
    };
}
