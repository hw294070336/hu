
$(function () {
    // let userName = document.getElementById("userName");
    // let passWord = document.getElementById("passWord");
    // let login = document.getElementById("login");

//     login.onclick = function(){
//         let val = userName.value;
//         let reg = /^[1][35789]\d{9}$/g;
//         let a = reg.test(val);
//         // alert(666)
//         if(a === false){
//             // console.log(a)
//             // $(userName).css({"color":"red"});
//             // $(val).css({"color":"red"});
//             // return false;
//             alert("手机格式错误")
//         }else {
//            alert("登录成功")
//         }
//     }
//     //让登陆的账号密码保存到浏览器
//     $("#login").on("click",function () {
//         let account = userName.value;
//         let mima = passWord.value;
//         let denglu = {
//             "userName":account,
//             "password":mima
//         }
//         localStorage.setItem("s",JSON.stringify(denglu))
//     })

    let userName = $("#userName");
    let passWord = $("#passWord");
    //吧字符串转换为json对象
    let json = JSON.parse(localStorage.getItem("s"));
    //取出里面的账号
    let name = json.userName;
    //取出里面的密码
    let pwd = json.passWord;
    $("#login").click(function () {
        //判断账号或者不为空的情况下
        if(userName.val() && passWord.val()){
            //账号和密码都正确的时候
            if(userName.val() == name && passWord.val() == pwd){
                alert("登陆成功")
            }else {
                //账号或者密码有一个错误的时候
                alert("账号或密码错误")
            }
        //    账号或者密码有为空的情况下
        }else {
            alert("请输入账号或密码")
        }
    })


})
