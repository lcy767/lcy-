<template>
	<div id="header">
		<div class="nav-global">
			<div class="container">
				<div class="top-menu">
                   <a href="javascript:;">四月的商城</a>
                   <a href="javascript:;">LCY</a>
				</div>
                <div class=""><router-link to="/login" exact>登录</router-link></div>
				<div class="nav-aside">
					<li class="nav-user">
					  <router-link to="/account">个人中心</router-link>
                      <div class="nav-user-wrapper">
							<div class="nav-user-list">
								<dl class="nav-user-avatar">
									<dd><span class="ng-scope"></span></dd>
									<dt class="ng-binding">admin</dt>
								</dl>
								<ul>
									<li class="order"><router-link to="/account" exact>我的订单</router-link></li>
									<li class="address"><router-link to="/address">收货地址</router-link></li>
									<li class="logout"><a href="javascript:;">退出</a></li>
								</ul>
							</div>
						</div>
						<div class="nav-user-wrapper">
							<div class="nav-user-list">
							</div>
						</div>
					</li>
					<car-panel class="nav-cart"></car-panel>
				</div>
			</div>
		</div> 
		<div class="nav-sub">
			<div class="nav-sub-wrapper">
				<div class="container">
				<div class="header-logo">
					<ul class="nav-list">		
						<router-link to="/" exact tag="li" activeClass="active">
						    <a href=""><img src="../assets/img/pig.jpg"></a>
						</router-link>
					</ul>
				</div>
           <div class="header-search">
            <div class="wrapper">
                <input type="text" name="keyword">
                <a href="javascript:;"></a>
            </div>
           </div>
        </div>
				</div>
			</div>
		</div>
</template>
<script>
import CarPanel from '@/components/car-panel'
export default {
  components: {
    CarPanel
  }
}
</script>
<style lang="scss">
             .header-logo{
                display: inline-block;
                width: 55px;
                height: 55px;
                margin-left: 200px;
                img{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-size: 55px;
                }
            }
            .header-search{
                width:600px;
                float: right;
                padding-right: 300px;
                .wrapper{
                    height: 50px;
                    border: 1px solid #e0e0e0;
                    display: flex;
                    align-items: center;
                    input{
                        border: none;
                        border-right: 1px solid #e0e0e0;
                        width: 550px;
                        height: 50px;
                        padding-left: 14px;
                    }
                    a{
                        display: inline-block;
                        width: 18px;
                        height: 18px;
                        background:url('../assets/img/icon-search.png');
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                    }
                }
            }     
</style>