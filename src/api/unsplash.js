import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 
        'Client-ID jodVG0aZ8SwbDq-EZSHc78giNl7Z7uPX5MrWc0WS3p0'
    }
})