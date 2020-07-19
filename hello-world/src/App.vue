<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <my></my>
		<p class="text" v-cssstyle:color="'red'">Текст директивы</p>
		<p class="text" v-cssstyle:background="'red'">Текст директивы 2</p>
		<p class="text" v-cssstyle:border="'1px solid #ff0000'">Текст директивы 3</p>
		<items></items>
		<hr>
		<!-- <itemsm></itemsm> -->
		<div>
			<router-link :to="'/'" active-class="active" exact>Главная</router-link>
			<router-link :to="'/pizza'" active-class="active">Пицца</router-link>
		</div>
		<router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import my from './components/my.vue'
import items from './components/items.vue'
// Подключение mixin
// import itemsm from './mixin/items.vue'
export default {
  name: 'app',
  components: {
		// HelloWorld,
		my,
		items
	},
	// mixins: [itemsm]
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active {
	color:coral;
}

</style>
