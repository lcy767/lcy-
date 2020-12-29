<template>
    <div class="service">
        <div class="container">
            <ul>
                <li><a href="#">预约维修服务</a></li>
                <li><a href="#">7天无理由退货</a></li>
                <li><a href="#">15天免费退换货</a></li>
                <li><a href="#">满150元包邮</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'service-bar'
}
</script>
<style lang="scss" >
    .service{
        padding: 33px 0;
        color: #666666;
        font-size: 16px;
        width: 1200px;
        margin: auto;
        li{
            display: inline-block;
            width: 24%;
            text-align: center;
            border-right: 1px solid #e5e5e5;
        }
        a{
            color: #666666;
        }
    }
</style>