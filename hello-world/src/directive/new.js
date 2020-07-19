export default {
	bind(el, bindings) {
		// Директива без атрибутов
		// el.style.color = bindings.value

		// Директива с атрибутами
		let args = bindings.arg
		el.style[args] = bindings.value
	}
}