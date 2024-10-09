<template>
	<div><AppBar /></div>
	<v-container>
		<v-data-table-server
			v-model:items-per-page="itemsPerPage"
			:headers="HEADERS"
			:items="contracts"
		/>
	</v-container>
</template>

<script setup lang="ts">
	import ButtonMenu from '../ui/ButtonMenu.vue'
	import AppBar from '../ui/AppBar.vue'
	import { ref } from 'vue'
	import { useContractStore } from '../../stores/ContractStore.ts'; 
	const contractStore = useContractStore()
	const contractFromStore = contractStore.contracts;
	//console.log(contractStore.contracts)
	const itemsPerPage = ref<number>(5)
	const HEADERS = [
		{
			/* title: 'Договоры', */
			align: 'start',
			sortable: false,
			key: 'name',
		},
		{ title: 'Договоры', key: 'contractName', align: 'end' },
		{ title: 'Тип договора', key: 'contractType', align: 'end' },
		{ title: 'Плановые сроки', key: 'plannedDate', align: 'end' },
		{ title: 'Фактически сроки', key: 'factedDate', align: 'end' },
		{ title: 'Сумма договора', key: 'contractSum', align: 'end' },
		{ title: 'Этапы', key: 'contractStage', align: 'end' },
		{ title: 'Контрагенты', key: 'contractors', align: 'end' },
	]
	const contracts = [
		{
			contractName: contractFromStore.name,
			contractType: contractFromStore.type,
			plannedDate: (contractFromStore.planStartDate + ' — ' + contractFromStore.planEndDate),
			factedDate: (contractFromStore.actualStartDate + ' — ' + contractFromStore.actualEndDate),
			contractSum: contractFromStore.monetaryValue,
		},
	]
</script>
{
    "name": "Third Contract",
    "type": "purchase",
    "planStartDate": "2002-07-10",
    "planEndDate": "2020-08-11",
    "actualStartDate": "2002-07-10",
    "actualEndDate": "2020-08-11",
    "monetaryValue": 2000
}