import Mock from 'mockjs'

Mock.mock('/api/banners', 'get', () => {
  return {
    code: 0,
    msg: '',
    data: [
      {
        id: 1,
        midImg: 'https://pic1.imgdb.cn/item/6801259088c538a9b5d81cab.png',
        bigImg: 'https://wangruichuan-1321190606.cos.ap-beijing.myqcloud.com/blog%2F3.jpg',
        title: '第一次去卢浮宫时',
        description: '并没有什么特别的感觉',
      },
      {
        id: 2,
        midImg: 'https://pic1.imgdb.cn/item/6801259188c538a9b5d81caf.png',
        bigImg: 'https://wangruichuan-1321190606.cos.ap-beijing.myqcloud.com/blog%2F2.jpg',
        title: '因为独属于我的蒙娜丽莎',
        description: '我早已遇见',
      },
      // {
      //   id: 3,
      //   midImg: 'https://pic1.imgdb.cn/item/6801259088c538a9b5d81cac.png',
      //   bigImg: 'https://wangruichuan-1321190606.cos.ap-beijing.myqcloud.com/blog%2F1.jpg',
      //   title: '初次遇见你的那天',
      //   description: '齿轮开始转动',
      // },
      // {
      //   id: 4,
      //   midImg: 'https://pic1.imgdb.cn/item/680125ee88c538a9b5d81e6f.png',
      //   bigImg: 'https://wangruichuan-1321190606.cos.ap-beijing.myqcloud.com/blog%2F4.jpg',
      //   title: '虽说已经有很多次了',
      //   description: '让我们再来一个吻吧',
      // },
    ],
  }
})
