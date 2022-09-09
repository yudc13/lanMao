export default defineAppConfig({
  pages: [
    'pages/course/index',
    'pages/user/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#80D1C8',
    list: [
      {
        pagePath: 'pages/course/index',
        text: '课程',
        iconPath: 'static/tabBar/course.png',
        selectedIconPath: 'static/tabBar/course-active.png',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        iconPath: 'static/tabBar/user.png',
        selectedIconPath: 'static/tabBar/user-active.png',
      }
    ]
  }
})
