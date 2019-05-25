<template>
  <div class="articlee">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif">
    </div>
    <div v-else>
      <div class="topic_header">
        <div class="topic_title">{{post.title}}</div>
        <ul>
          <li>·发布于{{post.create_at | formatDate}}</li>
          <li>·作者 {{post.author.loginname}}</li>
          <li>·{{post.visit_count }} 次浏览</li>
          <!-- <li>·来自{{post |tabFormatter}}</li> -->
        </ul>
        <div v-html="post.content" class="topic_content"></div>
      </div>
      <div>
        <div class="topbar">{{post.reply_count}}回复</div>
        <div v-for="(reply,index) in post.replies" class="replySec" id="reply">
          <div class="replyUp" >
            <router-link :to="{
              name:'userInfo',
              params:{
                name:reply.author.loginname
              }
            }">
            <img :src="reply.author.avatar_url" alt="">
            </router-link>
            <span>{{reply.author.loginname}}</span>
            <span># {{index+1}}楼</span>
            <span v-if="reply.ups.lengnt>0">{{reply.ups.lengnt}}</span>
            <span v-else></span>
          </div>
          <p v-html="reply.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "articlee",
  data() {
    return {
      isLoading: false,
      post: {}
    };
  },
  methods: {
    getData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(res => {
          if (res.data.success == true) {
            this.post = res.data.data;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.isLoading = false;
    this.getData();
  },
  watch:{
    '$route'(to,from){
      this.getData()
    }
  }
};
</script>

<style>
@import url("../assets/markdown-github.css");
.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
}
.articlee {
  padding-left: 70px;
}
.articlee:not(:first-child) {
  margin-right: 340px;
  margin-top: 15px;
}

#reply,
.topic_header {
  background-color: #fff;
}

#reply {
  margin-top: 0px;
}

#reply img {
  width: 30px;
  height: 30px;
  position: relative;
  bottom: -9px;
  margin-bottom: 10px;
}

#reply a,
#reply span {
  font-size: 13px;
  color: #666;
  text-decoration: none;
  margin-bottom: 30px
}
.replySec {
  border-bottom: 1px solid #e5e5e5;
  padding: 0 10px;
}

.loading {
  text-align: center;
  padding-top: 300px;
}

.replyUp a:nth-of-type(2) {
  margin-left: 0px;
  display: inline-block;
}

.topic_header {
  padding: 10px;
}

.topic_title {
  font-size: 20px;
  font-weight: bold;
  padding-top: 8px;
}

.topic_header ul {
  list-style: none;
  padding: 0px 0px;
  margin: 6px 0px;
}

.topic_header li {
  display: inline-block;
  font-size: 12px;
  color: #838383;
}

.topic_content {
  border-top: 1px solid #e5e5e5;
  padding: 0 10px;
}

.markdown-text img {
  width: 92% !important;
}
</style>