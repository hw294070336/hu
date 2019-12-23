$(function () {
    let userName = document.getElementById("userName");
    let passWord = document.getElementById("passWord");
    let registered = document.getElementById("registered");
    registered.onclick = function () {
        let user = userName.value;
        //正则表达式。用来限制手机号的
        let zhengze = /^1[35789]\d{9}$/g;
        //当手机号码不匹配的时候
        if(zhengze.test(user) === false){
            alert("手机格式错误")
        }else {
            //匹配的时候
            alert("注册成功")
                let account = userName.value;
                let mima = passWord.value;
                let zhuce = {
                    //获取到username里面的值
                    "userName":account,
                    //获取到password里面的值
                    "passWord":mima
                }
                //将zhuce里面的账号和密码保存到值为s的里面去
                localStorage.setItem("s",JSON.stringify(zhuce))
        }
    }
})