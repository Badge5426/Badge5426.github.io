var posts=["posts/bf2b.html","posts/c7b8.html","posts/529b.html","posts/d1a3.html","posts/4c4f.html","posts/3566.html","posts/3a37.html","posts/84b1.html","posts/28d2.html","posts/2c10.html","posts/3eeb.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"铭心石刻","link":"https://blog.kouseki.cn/","avatar":"https://imgbed.814925.xyz/file/1729154278403_fee184301512b1906a1cdbd250dce66b_avatar.webp","descr":"愿岁并谢，与友长兮","siteshot":"https://imgbed.814925.xyz/file/1729154281582_siteshot.webp","tag":"技术大佬"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"一粒微尘","link":"https://blog.667408.xyz","avatar":"https://imgbed.814925.xyz/file/1729155455712_527215b59a987937c29ca360f1a13e51_460793.webp","descr":"撷光以望，纳星于瞳","recommend":true},{"name":"XingJiのBlog","link":"https://love.xingji.fun/","avatar":"https://imgbed.814925.xyz/file/1729154095096_f305bb2624c553c5af6a117187033e95_20240920-66ed7b168c38c.jpg","descr":"迄今所有人生都大写着失败，但不妨碍我继续向前✨","recommend":true},{"name":"梦爱吃鱼","link":"https://blog.bsgun.cn/","avatar":"https://imgbed.814925.xyz/file/1729153187960_31fe961d5d467836f72452a2920d6e4f_avatar.256.png","descr":"但愿日子清静抬头遇见的满是柔情","recommend":true},{"name":"晓寒的互联网自留之地","link":"https://xiaohan-kaka.me/","avatar":"https://imgbed.814925.xyz/file/1729153585093_cd6ad80e35c571f8a23d2e2d0491c70e_120887894_p1.jpg","descr":"醉后不知天在水，满船清梦压星河"},{"name":"龙窝","link":"https://blog.qiyao.us.kg/","avatar":"https://imgbed.814925.xyz/file/1729153562599_5c327cb3689de186226623d3f528be82_atiq.png","descr":"随便发点啥啦ouo"},{"name":"野猪佩奇弟弟","link":"https://blog.814925.xyz/","avatar":"https://imgbed.814925.xyz/file/1727838791930_touxianglogo.png","descr":"菜就要多练","recommend":true},{"name":"Ray","link":"http://114.55.128.137:8090/","avatar":"https://xiafei-picgo.oss-cn-hangzhou.aliyuncs.com/img/Ray%20Cheung.png","descr":"什么时候开始都不算晚，只是别忘了开始","recommend":true},{"name":"Levi","link":"leifee.cn","avatar":"https://img1.leifee.cn/file/1731038061232_touxiang.png","descr":"实践出真理","recommend":true},{"name":"山山而川","link":"https://blog.immm.cn/","avatar":"https://blog.immm.cn/favicon.ico","descr":"人生海海 山山而川 不过尔尔","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };