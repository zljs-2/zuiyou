// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceArtList = function() {
    let articles = [];
    for (let i = 0; i < 10; i++) {
        let newArticleObject = {
            artTitle: Random.csentence(5, 30), //  Random.csentence( min, max )
            uPhoto: Random.dataImage('100x100', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            artImg: [], // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            uName: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
            artPat: Random.cword(2,8),
            artComment:{
                Comment: Random.csentence(2,40),
                CommentImg: [],
                CommentPraiseNum: Random.natural( 1, 30000 )
            },
            artBar: {
                shareNum: Random.natural( 1, 1000 ),
                artCommentNum: Random.natural( 1, 20000 ),
                artPraiseNum: Random.natural( 1, 30000 )
            }
        }
        let  imgNum= Random.natural( 1, 9 );
        for(let i = 1; i <= imgNum; i++){
            let artImg = Random.dataImage();
            newArticleObject.artImg.push(artImg);
        }
        let  CommentImgNum= Random.natural( 1, 9 );
        for(let i = 1; i <= CommentImgNum; i++){
            let artCommentImg = Random.dataImage();
            newArticleObject.artComment.CommentImg.push(artCommentImg);
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}
 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/home/artList', 'post', produceArtList);