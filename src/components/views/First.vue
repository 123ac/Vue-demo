<!--template 写 html -->
<template>
    <div class="first-app">
        {{msg}}
        <Confirm text="注册" @message="getMessage"></Confirm>
        <br />
        <p><router-link to="/second">去第二个页面</router-link></p>
    </div>
</template> 

<!-- script写 js -->
<script>
    // 引入 Confirm组件
    import Confirm from '../sub/Confirm'
    
    export default {
        name: "First",
        data () {
            return {
                msg: "Welcome to FirstApp"
            }
        },
        // 注册Confirm
        components: {
            Confirm
        },
        methods: {
            // val由子组件传递给父组件的值
            getMessage(val){
                alert(val);
            } 
        } ,
        
    }
    
</script>

<!-- style写样式 -->
<style>
</style>