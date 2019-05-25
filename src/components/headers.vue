<template>
    <div id="headers">
        <img src="../assets/cnodejs_light.svg" alt="">
        <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">新手入门</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">注册</a></li>
            <li><a href="#">登录</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "headers"
};
</script>

<style scoped>
#headers{
    height: 50px;
    background-color: #444444;
    width: 100%;
    vertical-align: center;
}
img{
    max-width: 120px;
    margin-left: 80px;
    margin-top: 10px;
}
ul{
    float: right;
    margin-right: 30px;
    list-style: none;
}
li{
    display: inline-block;
    text-shadow: none;
    padding: 12px 14px;
}
a{
    text-decoration: none;
    color: #ccc;
    font-size: 14px;
}
a:hover{
    color: #fff;    
}
</style>
