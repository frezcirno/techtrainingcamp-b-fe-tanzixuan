import axios from 'axios'

export async function searchsug(keyword) {
    let res = await axios.get(`https://i.snssdk.com/search/api/sug/?keyword=${keyword}`)
    return await res.data 
}

export async function search(keyword, offset) {
    let res = await axios.get(`https://i.snssdk.com/search/api/study?keyword=${keyword}&offset=${offset}`)
    return await res.data 
}