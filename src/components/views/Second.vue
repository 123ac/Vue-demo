<template>
    <div>Welcome to SecondApp
        <br />
        <p><router-link to="/first">去第一个页面</router-link></p>
        <br />
        <!-- 数组列表渲染 获取数组索引和数组元素-->
        <p>这里是数组列表渲染数据</p>
        <ul>
        	<li v-for="item,index in items">  
        		{{index}}---{{ item.message }}
        	</li>
        </ul>
    </div>
</template>

<script>
    export default {
       data () {
           // 返回数据组
           return {
               items : [
               	{ message: 'Foo' },
               	{ message: 'Bar' }
               ]
           }
       }
    }
</script>

<style>
    ul li {
        list-style: none;
    }
</style>
