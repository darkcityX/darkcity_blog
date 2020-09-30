let ipUrl = 'http://localhost:3300/web/'


let servicePath = {
    // 博主信息接口
    getBolgerInfo: ipUrl + 'bloger/queryInfo',
    
    // 文章列表接口
    getArticleList: ipUrl + 'article/queryList', 

    // 文章详情页内容接口 ,需要接收参数
    getArticleDetails: ipUrl + 'article/queryDetails?aid=', 

}
export default servicePath;