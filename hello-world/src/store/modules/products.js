export default {
	state: {
		products: [
			{
				id: 1,
				title: 'Asus'
			},
			{
				id: 2,
				title: 'Lenovo'
			},
			{
				id: 3,
				title: 'Dell'
			}
		]
	},
	mutations: {},
	actions: {},
	getters: {
		products: state => {
			return state.products
		}
	}
}