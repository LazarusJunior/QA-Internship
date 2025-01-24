const fetchPostAPI = require('./fetchPostAPI');

describe('fetchPostAPI', () => {
    it('fetches post data correctly', async () => {
        const post = await fetchPostAPI(1);
        expect(post.id).toBe(1);
        expect(post.title).toBeDefined();
    });

    it('throws error for invalid post id', async () => {
        await expect(fetchPostAPI(9999)).rejects.toThrow("Failed to fetch post data");
    });
});