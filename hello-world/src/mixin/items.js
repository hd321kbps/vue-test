export default {
	data () {
		return {
			search:'',
			names: ['Igor', 'Tixon', 'Maks', 'Denis', 'Zeka']
		}
	},
	computed: {
		filterNames() {
			return this.names.filter(name => {
				return name.toLowerCase().indexOf(this.search) !== -1
			})
		}
	}
}