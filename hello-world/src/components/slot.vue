// Создаем slot
<template v-slot:slots>
	<!-- Передаем содержимое блока в атрибут msg -->
	<h1 v-if="true" msg>{{ title | upper}}</h1>
	<h1 v-else msg>{{ title | lover}}</h1>
</template>

<script>

export default {
	// Список параметров передаваемых в другие компоненты
	props: {
			msg: String
	},
	data () {
		return {
			title: 'Мой компонент',
		}
	},
	// Создание фильтра локально
	filters: {
		upper (value) {
			return value.toUpperCase()
		}
	}
}
</script>

// Scoped стили для только этого компонента
<style scoped>
	h1{
		color: #0000ff
	}
</style>