
new Vue({
  el: '#app',
  data: {
    Advice: "http://www.baidu.com",
    Content: "",
  },
  methods: {
    OpenChat() {
      var chat = document.getElementById("chat");

      chat.style.display = "block";


      setTimeout(function () {

        chat.style.opacity = "1";
      }, 1)


    },
    OverChat() {
      var chat = document.getElementById("chat");


      chat.style.opacity = "0";
      setTimeout(function () {
        chat.style.display = "none";
      }, 500)
    },
    SwitchNva() {
      var ChooseNva = document.getElementsByClassName("ChooseNva")[0];


      if (ChooseNva.offsetHeight == 37) {
        // ChooseNva.style.height = " 37px ";
        ChooseNva.style.maxHeight = " 1000px ";
      } else {
        // ChooseNva.style.height = "37px";
        ChooseNva.style.maxHeight = " 37px ";
      }
    },
    getGo() {

      var neirong = foom.action
      var get = neirong + searchX.value

      foom.action = get

    },
    Enter() {
      var foo = document.getElementById("foom");

      var get = foo.action + searchX.value
      window.open(get)
      // console.log(get);
    }
  }
})

var ChooseNva = document.getElementsByClassName("ChooseNva")[0];

ChooseNva.style.maxHeight = " 1000px ";


var baidu = document.getElementById("baidu");
var huaban = document.getElementById("huaban");
var foom = document.getElementById("foom");
var searchX = document.getElementById("searchX");  //输入框
var searchY = document.getElementById("searchY");  //搜索
var chooseBtn = document.getElementsByClassName("chooseBtn");
chooseBtn[0].classList.add("chooseBtnOne")

baidu.onclick = function () {
  foom.action = "https://www.baidu.com/s?wd=";
  searchX.placeholder = "百度搜索"
  for (var i = 0; i < chooseBtn.length; i++) {
    chooseBtn[i].classList.remove("chooseBtnOne");
  }

  this.classList.add("chooseBtnOne")
}
huaban.onclick = function () {
  foom.action = "https://huaban.com/search?q=";
  searchX.placeholder = "花瓣搜索"
  for (var i = 0; i < chooseBtn.length; i++) {
    chooseBtn[i].classList.remove("chooseBtnOne");
  }
  this.classList.add("chooseBtnOne")
}
biying.onclick = function () {
  foom.action = "https://cn.bing.com/search?q=";
  searchX.placeholder = "必应搜索"
  for (var i = 0; i < chooseBtn.length; i++) {
    chooseBtn[i].classList.remove("chooseBtnOne");
  }
  this.classList.add("chooseBtnOne")
}
zhanku.onclick = function () {
  foom.action = "https://www.zcool.com.cn/search/content?word=";
  searchX.placeholder = "站酷搜索"
  for (var i = 0; i < chooseBtn.length; i++) {
    chooseBtn[i].classList.remove("chooseBtnOne");
  }
  this.classList.add("chooseBtnOne")
}

iconfont.onclick = function () {
  foom.action = "https://www.iconfont.cn/search/index?searchType=icon&q=";
  searchX.placeholder = "图标搜索"
  for (var i = 0; i < chooseBtn.length; i++) {
    chooseBtn[i].classList.remove("chooseBtnOne");
  }
  this.classList.add("chooseBtnOne")
}

shijuezhongguo.onclick = function () {
  foom.action = "https://www.vcg.com/creative-image/";
  searchX.placeholder = "视觉中国搜索"
  for (var i = 0; i < chooseBtn.length; i++) {
    chooseBtn[i].classList.remove("chooseBtnOne");
  }
  this.classList.add("chooseBtnOne")
}






function submit_from() {
  return false;
}

function con() {
  console.log("输出1")
}

searchY.onclick = function () {

  var get = foom.action + searchX.value

  window.open(get)
  // window.location.href = foom.action + searchX.value
  // console.log(foom.style.action.value);
}

var targ = document.getElementById("targ");
console.log(targ);



var elAside = document.getElementsByClassName("el-aside")[0]
var pdf = document.getElementsByClassName("pdf")[0]

let targI = 0;
targ.onclick = function () {
  if(targI/2 == 0){
    targ.style.transform = "rotate(180deg)"
    targI++

    elAside.style.left = "-200px"
    pdf.style.left = "-100px"
  }else{
    targ.style.transform = "rotate(90deg)"
    targI--

    elAside.style.left = "0px"
    pdf.style.left = "0px"
  }
  
}