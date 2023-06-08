const app = require('./app');
const supertest = require('supertest');
const request = supertest(app);

describe('/test endpoint', () => {
  it('should return a response', async () => {
    const response = await request.get('/test');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello world');
  });
});

describe('/test/second', () => {
    it('should return a response',async()=>{
        const response = await request.get('/test/second');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Welcome to the second Page');
    })
});

describe('/test/third', () => {
    it('should return a response',async()=>{
        const response = await request.get('/test/third');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Welcome to the third Page');
    })
});


describe('/test/fourth', () => {
    it('should return a response',async()=>{
        const response = await request.get('/test/fourth');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Welcome to the fourth Page');
    })
});
