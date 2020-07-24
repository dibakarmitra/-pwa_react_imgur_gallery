import axios from 'axios';  

const URL = 'https://api.imgur.com/3/gallery/search/{{sort}}/{{window}}/{{page}}?q_type=jpg&q_size_px=big&q=';
const CLIENT_ID = '044cbb8a5292c90';

export const fetchGallery = async (query) => {
    const {data} = await axios({
        'async': true,
        'crossDomain': true,
        'url': URL + query,
        'method': 'GET',
        'headers': {
            'authorization': 'Client-ID ' + CLIENT_ID
        },
    })
    return(data);
}