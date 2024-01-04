import FacebookService from '../services/facebookService';

jest.mock('../services/facebookService');

describe('Facebook Service', () => {
  it('should retrieve lead data from Facebook', async () => {
    const fbService = new FacebookService();
    const leadData = await fbService.getLeadData('validLeadId');

    expect(leadData).toEqual(expect.objectContaining({
      id: 'validLeadId',
      name: expect.any(String),
      email: expect.any(String),
    }));
  });

  it('should handle Facebook API errors', async () => {
    const fbService = new FacebookService();
    fbService.getLeadData = jest.fn().mockRejectedValue(new Error('Facebook API Error'));

    await expect(fbService.getLeadData('invalidLeadId')).rejects.toThrow('Facebook API Error');
  });
});
