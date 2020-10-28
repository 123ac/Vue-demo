<template>
    <div class="Confirm-app">
        {{msg}}
        <br />
        <button @click="getButtonClick">{{text}}</button>
    </div>
</template>

<script>
    export default {
        name: 'Confirm-app',
        // props 父组件传递给子组件的值
        props:['text'],
        data () { 
            return{  
                msg: "Welcome to ConfirmApp"
            }
        },
        methods: {
            getButtonClick() {
                // 触发当前实例上的事件。附加参数都会传给监听器回调。 
                // 向父组件传递对象msg的值
                this.$emit('message',this.msg);
            }
        }
    }
</script>

<style>
.Confirm-app {
    color: #42B983;
}
button {
    width: 100px;
    height: 45px;
    background: #4e6ef2;
    color: #ffffff;
    font-size: 16px;
    border-radius: 10px 10px 10px 10px;
}
</style>
