const list = [
    {
        "name": "剑心",
        "src": "http://123.206.55.50/ftp/music/剑心-张杰.m4a"
    },
    {
        "name": "洋葱",
        "src": "http://123.206.55.50/ftp/music/杨宗纬 - 洋葱.mp3"
    },
    {
        "name": "像我这样的人",
        "src": "http://123.206.55.50/ftp/music/毛不易 - 像我这样的人 (Live).mp3"
    },
    {
        "name": "消愁",
        "src": "http://123.206.55.50/ftp/music/毛不易 - 消愁 (Live).mp3"
    },
    {
        "name": "盛夏光年",
        "src": "http://123.206.55.50/ftp/music/盛夏光年-阿信.m4a"
    },
    {
        "name": "红颜",
        "src": "http://123.206.55.50/ftp/music/红颜.m4a"
    },
    {
        "name": "演员",
        "src": "http://123.206.55.50/ftp/music/薛之谦 - 演员.mp3"
    },
    {
        "name": "绅士",
        "src": "http://123.206.55.50/ftp/music/薛之谦 - 绅士.mp3"
    },
    {
        "name": "见字如面",
        "src": "http://123.206.55.50/ftp/music/见字如面.m4a"
    },
    {
        "name": "诗酒长安",
        "src": "http://123.206.55.50/ftp/music/词酒长安.m4a"
    }
]

// 获取歌曲列表
export let getMusicList = ()=>{
    return new Promise((resolve, reject)=>{
        // wx.request({
        //     // url: 'https://mock.jasonandjay.com/mock/5b5fa6de5561566d446a3802/music',
        //     url: './music.json',
        //     success: (res)=>{
        //         resolve(res.data);
        //     },
        //     fail: (error)=>{
        //         reject(error);
        //     }
        // })
        resolve({songs:list});
    })
}