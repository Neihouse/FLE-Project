import { FacebookAdsApi, AdAccount, Lead } from 'facebook-nodejs-business-sdk';

const accessToken = process.env.FACEBOOK_ACCESS_TOKEN; // The access token for the Facebook API
const adAccountId = process.env.FACEBOOK_AD_ACCOUNT_ID; // The Ad Account ID

// Initialize the Facebook Ads API with the access token
FacebookAdsApi.init(accessToken);

class FacebookService {
  adAccount: AdAccount;

  constructor(adAccountId: string) {
    this.adAccount = new AdAccount(adAccountId);
  }

  // Method to fetch leads from a Facebook form
  async getLeads(formId: string): Promise<Lead[]> {
    try {
      const leads = await this.adAccount.getLeads({
        fields: ['id', 'created_time', 'field_data'],
        params: { form_id: formId },
      });
      return leads;
    } catch (error) {
      console.error('Error fetching leads from Facebook:', error);
      throw error;
    }
  }
}

// Export an instance of the FacebookService
const facebookService = new FacebookService(adAccountId);
export default facebookService;
