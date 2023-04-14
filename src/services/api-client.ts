import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9e5f3070caa94f639df7d91ad91c7100',
    },
});
