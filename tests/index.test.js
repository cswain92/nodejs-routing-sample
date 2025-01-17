const request = require('supertest');
const express = require('express');

const app = express();

// Mimic the routes
app.get('/', (req, res) => res.send('Welcome to the Home Page'));
app.get('/about', (req, res) => res.send('About Page'));

describe('Test Routes', () => {
    it('GET / should return Home Page', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Welcome to the Home Page');
    });

    it('GET /about should return About Page', async () => {
        const res = await request(app).get('/about');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('About Page');
    });
});
