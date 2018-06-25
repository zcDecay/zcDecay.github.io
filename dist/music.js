const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "love yourself",
        artist: 'justin bieber',
        url: 'http://www.ytmp3.cn/?down/33084.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/28.jpg',
      },
      {
        name: '9420',
        artist: '麦小兜',
        url: 'http://up.mcyt.net/?down/45967.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      }
    ]
});