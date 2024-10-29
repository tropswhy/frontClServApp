<template>
	<div><AppBar /></div>
	<v-container>
		
	</v-container>
</template>

<script setup lang="ts">
	import ButtonMenu from '../ui/ButtonMenu.vue'
	import AppBar from '../ui/AppBar.vue'
	import { ref } from 'vue'
	import { useContractorStore } from '../../stores/ContractorStore.ts'
	const itemsPerPage = ref<number>(5)
	const contractorFromStore = useContractorStore().contractors

</script>
