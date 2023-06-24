import axios from 'axios'

const searchImages = async (term, pages) => {
    console.log(term, pages)
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID rjEN6OuwU081NsMvEl1yp3I0PQZNl0RxEllxR0B7YBM'
        },
        params: {
            query: term,
            per_page: 20,
            page: pages,
        }
    })
    console.log(response.data)
    return response.data;
}
export default searchImages;


