// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
// const produceArtList = function() {
    let produceArtList = {};
    let articles = [];
    for (let i = 1; i <= 10; i++) {
        let newArticleObject = {
            artIndex: i,
            artTitle: Random.csentence(5, 30), //  Random.csentence( min, max )
            uPhoto: Random.dataImage('100x100', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            artImg: [], 
            uName: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
            artPat: Random.cword(2,8),
            artComment:{
                artIndex: i,
                Comment: Random.csentence(2,40),
                CommentImg: [],
                CommentPraiseNum: Random.natural( 1, 30000 ),
                CommentPraiseUpIcon:'#icon-iconset0436',
                CommentPraiseDownIcon:'#icon-iconset0435'
            },
            artBar: {
                artIndex: i,
                shareNum: Random.natural( 1, 1000 ),
                shareIcon: '#icon-msnui-share',
                artCommentNum: Random.natural( 1, 20000 ),
                commentIcon: '#icon-xiaoxi2',
                artPraiseNum: Random.natural( 1, 30000 ),
                artPraiseUpIcon: '#icon-web-icon-1',
                artPraiseDownIcon: '#icon-web-icon-'
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
    produceArtList.articles = articles;
    // return {
    //     articles: articles
    // }
// }

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/home/artList', 'post', produceArtList);
Mock.mock('/art?id=', 'post', produceArtList);



// let newArticleObject = {
//     artIndex: 1,
//     artTitle: Random.csentence(5, 30), //  Random.csentence( min, max )
//     uPhoto: Random.dataImage('100x100', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
//     artImg: [], 
//     uName: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
//     date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
//     artPat: Random.cword(2,8),
//     artComment:{
//         artIndex: 1,
//         Comment: Random.csentence(2,40),
//         CommentImg: [],
//         CommentPraiseNum: Random.natural( 1, 30000 ),
//         CommentPraiseUpIcon:'#icon-iconset0436',
//         CommentPraiseDownIcon:'#icon-iconset0435'
//     },
//     artBar: {
//         artIndex: 1,
//         shareNum: Random.natural( 1, 1000 ),
//         shareIcon: '#icon-msnui-share',
//         artCommentNum: Random.natural( 1, 20000 ),
//         commentIcon: '#icon-xiaoxi2',
//         artPraiseNum: Random.natural( 1, 30000 ),
//         artPraiseUpIcon: '#icon-web-icon-1',
//         artPraiseDownIcon: '#icon-web-icon-'
//     }
// }
// let  imgNum= Random.natural( 1, 9 );
// for(let i = 1; i <= imgNum; i++){
//     let artImg = Random.dataImage();
//     newArticleObject.artImg.push(artImg);
// }
// let  CommentImgNum= Random.natural( 1, 9 );
// for(let i = 1; i <= CommentImgNum; i++){
//     let artCommentImg = Random.dataImage();
//     newArticleObject.artComment.CommentImg.push(artCommentImg);
// }
// Mock.mock('/art?id=1', 'post', newArticleObject);
