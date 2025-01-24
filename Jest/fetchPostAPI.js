const axios = require('axios');

async function fetchPostAPI(postId) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch post data");
    }
}

module.exports = fetchPostAPI;