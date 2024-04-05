// to top;
// requestAnimationFrame()的兼容处理，window.requestAnimationFrame是浏览器提供的js全局方法，针对动画效果
if(!window.requestAnimationFrame){
    requestAnimationFrame = function(fn){
        setTimeout(fn,17);
    }
}

//滚动到顶部 缓动实现
//rate 表示缓动
let backToTop = function (rate) {
  //获取当前页面滚动条纵坐标位置
  let doc = document.body.scrollTop ? document.body : document.documentElement; //判断 兼容处理
  let scrollTop = doc.scrollTop;

  let top = function () {
      scrollTop = scrollTop + (0-scrollTop) / (rate/2); //核心代码

      //临界判断，终止动画
      if(scrollTop<=1){
          doc.scrollTop = 0;
          return;
      }

      doc.scrollTop = scrollTop;

      //动画 gogogo
      requestAnimationFrame(top);
  };

  top();
};

let backtop = document.getElementById("back-to-top");
let clickable = true;
let checkscroll = function () {
  if (document.documentElement.scrollTop <= 150) {
    backtop.style.opacity = 0;
    clickable = false;
  } else {
    backtop.style.opacity = 1;
    clickable = true;
  }
}

backtop.onclick = function(){
  if (clickable) {
    backToTop(20);
  }
}
checkscroll()
window.addEventListener('scroll',checkscroll)

function openNav() {
  document.getElementById("toc").style.marginRight = "0";
  // document.getElementById("body").style.marginLeft = "230px";
}

function closeNav() {
  document.getElementById("toc").style.marginRight = "-245px";
  // document.getElementById("body").style.marginLeft= "0";
}
