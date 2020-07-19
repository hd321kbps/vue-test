// Подключаем роутер
import VueRouter from 'vue-router'
// Импортируем компоненты
import Index from './pages/Home.vue'
import Pizza from './pages/Pizza.vue'

export default new VueRouter({
	routes: [
		{
			path: '',
			component: Index
		},
		{
			path: '/pizza',
			component: Pizza
		}
	],
	mode: 'history'
})