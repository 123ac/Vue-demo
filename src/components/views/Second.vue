<template>
    <div>Welcome to SecondApp
        <br />
        <p><router-link to="/first">去第一个页面</router-link></p>
        <br />
        <!-- 数组列表渲染 获取数组索引和数组元素-->
        <p>这里是数组列表渲染数据</p>
        <ul>
        	<li v-for="items,index in items">  
        		{{index}}---{{ items.name }}
        	</li>
        </ul>
    </div>
</template>

<script>
    import {findUserList} from '../../api/users.js'
    import axios from 'axios';
    export default {
       data () {
           // 返回数据组
           return {
               items : [
               	{ name: '张三' },
               	{ name: '李四' }
               ]
           }
       },
         //创建组件时调用方法
           created(){
             // this.convert();
             this.getUserList();
           },
           methods: {
              // 1.第一种方式
             // convert: function () {
             //  // http://localhost:8090/test
             //   axios
             //        .get("http://localhost:8090/test")
             //        .then(res => {
             //     this.items = res.data.items;
             //     console.log(res.data)
             //   })
             // },
             
             //2.第二种方式
             // convert() {
             //     //http://localhost:8090/test
             //     axios({
             //        url: 'http://localhost:8090/test',
             //        method:'post' ,
             //        params:{
             //           name:'cc' 
             //        }
             //     }).then(res=>{
             //         this.items = res.data.items;
             //        console.log(res.data)
             //     })
             //   },
             // 异步
             async  getUserList(){ 
                   const {data} = await findUserList("战三");
                   this.items = data.items;
                   console.log(data)
               }
               
           }
    }
</script>

<style>
    ul li {
        list-style: none;
    }
</style>
