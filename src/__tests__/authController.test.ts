
import request from 'supertest';
import app from '../../app'; // Assuming the Express app is exported from this file
import User from '../../models/dbSchemas';

describe('Authentication Controller', () => {
    describe('POST /register', () => {
        it('should register a new user', async () => {
            const userData = {
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123'
            };

            const response = await request(app).post('/api/register').send(userData);
            expect(response.statusCode).toBe(201);
            expect(response.body.message).toBe('User registered successfully');

            // Clean up test user from database
            await User.deleteOne({ username: userData.username });
        });
    });

    describe('POST /login', () => {
        it('should login the user and return a token', async () => {
            const userData = {
                username: 'testuser',
                password: 'password123'
            };

            const response = await request(app).post('/api/login').send(userData);
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('token');
        });
    });
});
