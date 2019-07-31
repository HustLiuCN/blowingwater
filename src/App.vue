<template>
	<div id="app">
		{{ slogan }}
	</div>
</template>
<script>
	import { mapState } from 'vuex'

	export default {
		computed: {
			...mapState([
				'slogan',
			]),
		},
	}
</script>
