import NotificationService from '../services/notificationService';

jest.mock('../services/notificationService');

describe('Notification Service', () => {
  const notificationService = new NotificationService();

  it('should send a notification', async () => {
    const sendSpy = jest.spyOn(notificationService, 'send').mockResolvedValue(true);
    const result = await notificationService.send('Test message', 'user@example.com');

    expect(sendSpy).toBeCalledWith('Test message', 'user@example.com');
    expect(result).toBeTruthy();
  });

  it('should handle notification errors', async () => {
    const sendSpy = jest.spyOn(notificationService, 'send').mockRejectedValue(new Error('Notification failed'));
    await expect(notificationService.send('Test message', 'user@example.com')).rejects.toThrow('Notification failed');
    expect(sendSpy).toBeCalledWith('Test message', 'user@example.com');
  });
});
