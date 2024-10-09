<template>
	<div><AppBar /></div>
	<v-container>
		<v-data-table-server
			v-model:items-per-page="itemsPerPage"
			:headers="HEADERS"
			:items="contractors"
		/>
	</v-container>
</template>

<script setup lang="ts">
	import ButtonMenu from '../ui/ButtonMenu.vue'
	import AppBar from '../ui/AppBar.vue'
	import { ref } from 'vue'
	import { useContractorStore } from '../../stores/ContractorStore.ts'
	const itemsPerPage = ref<number>(5)
	const contractorFromStore = useContractorStore().contractors
	const HEADERS = [
		{
			align: 'start',
			sortable: false,
			key: 'name',
		},
		{ title: 'Название', key: 'contractorName', align: 'end' },
		{ title: 'Адрес', key: 'contractorAddress', align: 'end' },
		{ title: 'ИНН', key: 'contractorINN', align: 'end' },
	]
	const contractors = [
		{
			contractorName: contractorFromStore.name,
			contractorAddress: contractorFromStore.address,
			contractorINN: contractorFromStore.inn.inn,
		},
	]
</script>
{
    "name": "Contractor",
    "address": "Novokuznetsk",
    "inn": {
        "inn": "123123123"
    }
}