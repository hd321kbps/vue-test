<template>
  <div class="hello">
    <slots>{{ msg }}</slots>
    <p>Счетчик: {{ counter }}</p>
		<button @click="add">+1</button>
  </div>
</template>

<script>
import slots from './slot.vue'
export default {
	name: 'my',
	// Передача данных в другие компоненты
  props: {
		// Валидация
    msg: String
	},
	data () {
		return {
			counter: 0,
			case: false
		}
	},
	methods: {
		add: function () {
			this.counter++
		}
	},
	components:{
		slots
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
