import Vue from 'vue'
import App from './App.vue'
// Подключаем роутер
import VueRouter from 'vue-router'
// Подключение директивы
import newdir from './directive/new'
// Подключаем роутер
import router from './routes'
// Поключаем хранилище
import store from './store'

// Инициализация роутера
Vue.use(VueRouter)

Vue.config.productionTip = false

// Инициализация директивы
Vue.directive('cssstyle', newdir)

// Создание глобального фильтра
Vue.filter('lover', (value) => {
		return value.toLowerCase()
})

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')
