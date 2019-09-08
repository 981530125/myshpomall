<template>
	<div id="app">
		<toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="toastText" :position="position"></toast>
		<group title="姓名">
			<x-input title="姓名" name="username" placeholder="请输入姓名" v-model="username" is-type="china-name"></x-input>
		</group>
		<group title="姓名">
			<x-input title="请输入6位数字" type="text" placeholder="" v-model="password" :min="6" :max="6"></x-input>
		</group>
		<div class="submit-btn">
			<x-button type="primary" action-type="button" @click.native="getlogin">submit</x-button>
		</div>
	</div>
</template>
<script>
	export default {
	name: 'Home',
	data() {
		return {
			password: '',
			username: '',
			showPositionValue: false, //是否显示提示
			toastText: 'hoasal',
			position: 'bottom'//提示信息的位置
		}
	},
	methods: {
		switchStatus: function(toasttext) {
			this.showPositionValue = true;
			this.toastText = toasttext;
		},
		getlogin() {
			var _this = this;
			_this.$axios.get('http://localhost:8080/static/login.json', {
				username: _this.username,
				password: _this.password
			}).then(res => {
				if(res.data.code == '1000') {
					//	      	成功
					this.switchStatus(res.data.message);
					this.$store.dispatch("userLogin",true);
					//vuex在用户刷新的时候userLogin会回到默认值false。所以我们需要用html5存储
					//哦们设置一个名为flag，值为islogin的字段，作用是如果flag有值且为islogin的时候，证明用户已经等了
					localStorage.setItem('Flag','isLogin');
					//登录成功后跳转指定页面
					this.$router.push("/Home");
					
				} else {
					//	      	失败
					this.switchStatus('登录失败');
				}
			})
		},
		increment(){
          this.$store.commit('increment')
        },
        decrement(){
          this.$store.commit('decrement')
        },
	},
	computed:{
        count(){
            return this.$store.state.count
        },
    }
}

</script>
<style scoped="scoped">
	.submit-btn {
	width: 90%;
	margin: 0 auto;
	margin-top: 2rem;
}

</style>