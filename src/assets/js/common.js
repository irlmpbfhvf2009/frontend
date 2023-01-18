import router from '../../router/index.js'
export default {
    changeView(url,queryParams){
        router.push({
            path:url,
            query:queryParams,
        })
    }
}