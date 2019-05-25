<template>
  <div class="postList">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif">
    </div>
    <div v-else>
      <ul>
        <li>
          <span>全部</span>
          <span>精华</span>
          <span>分享</span>
          <span>问答</span>
          <span>招聘</span>
          <span>客户端测试</span>
        </li>
        <li v-for="post in posts">
          <div class="span">
            <img :src="post.author.avatar_url" alt>
            <span>
              <div class="first">
                <span class="reply_count">{{post.reply_count}}</span>/
                <span class="visit_count">{{post.visit_count}}</span>
              </div>
              <span
                :class="[{good:(post.good == true) ,top:(post.top == true),tab:((post.good != true)&&(post.top != true)) }]"
              >
                <span class="post">{{post | tabFormate}}</span>
              </span>
            </span>
            <router-link :to="{
              name:'post_content',
              params:{
                id:post.id,
                name:post.author.loginname
              }
              }">
              <span class="span">{{post.title}}</span>
            </router-link>

          </div>
          <div class="time">{{post.last_reply_at | formatDate}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "postList",
  data() {
    return {
      isLoading: false,
      posts: []
    };
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          page: 1,
          limit: 30
        })
        .then(res => {
          this.posts = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.getData();
  }
};
</script>

<style scoped>
.postList {
  max-width: 1115px;
  margin: 10px 65px;
}
ul {
  list-style-type: none;
  padding: 10px;
}
li:nth-child(1) {
  display: flex;
  height: 1em;
  background-color: #f6f6f6;
  border-bottom: none;
}
li:nth-child(1) > span {
  display: inline-table;
  padding: 0px 12px;
  color: #80bd01;
  font-size: 14px;
}
li:nth-child(1) > span:hover {
  background-color: #80bd01;
  color: #fff;
  border-radius: 3px;
}
li {
  padding: 10px 0 10px 10px;
  border: 1px solid #e1e1e1;
  border-top: none;
  background-color: #fff;
  height: 2em;
}
li:hover {
  background-color: #f5f5f5;
}
a{ 
text-decoration:none; 
color:#333; 



}

a:visited{
    color: #888;
}
.span {
  display: flex;
  align-items: center;
    overflow: hidden;
      white-space: nowrap;
  text-overflow: ellipsis;
  
}
.first {
  width: 70px;
  display: inline-block;
  text-align: center;
  margin: auto 8px;
}
.good,
.top {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin-right: 10px;
}
.tab {
  background: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin-right: 10px;
}
.reply_count {
  color: #9e78c0;
  font-size: 14px;
}
.visit_count {
  font-size: 10px;
  color: #b4b4b4;
}
/* .span {

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
} */
.time {
  float: right;
  margin-top: 30px;
  margin-right: 10px;
  font-size: 11px;
}
img {
  width: 30px;
  height: 30px;
}
</style>