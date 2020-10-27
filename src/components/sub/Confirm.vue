<template>
    <div class="Confirm-app">
        {{msg}}
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
</style>
