import axios from 'axios'

export async function searchsug(keyword) {
    let res = await axios.get(`/api/search/sug?keyword=${keyword}`)
    return await res.data
}

export async function search(keyword, offset) {
    let res = await axios.get(`/api/search?keyword=${keyword}&offset=${offset}`)
    return await res.data.data
}