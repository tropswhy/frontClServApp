<template>
	<div><AppBar /></div>
	<v-container>
		<v-data-table-server
			v-model:items-per-page="itemsPerPage"
			:headers="HEADERS"
		/>
	</v-container>
</template>

<script setup lang="ts">
	import ButtonMenu from '../ui/ButtonMenu.vue'
	import AppBar from '../ui/AppBar.vue'
	import { ref } from 'vue'

	const itemsPerPage = ref<number>(5)
	const HEADERS = [
		{
			title: 'Договоры',
			align: 'start',
			sortable: false,
			key: 'name',
		},
		{ title: 'Название', key: 'contractName', align: 'end' },
		{ title: 'Тип договора', key: 'contractType', align: 'end' },
		{ title: 'Плановые сроки', key: 'plannedDate', align: 'end' },
		{ title: 'Фактически сроки', key: 'factedDate', align: 'end' },
		{ title: 'Сумма договора', key: 'contractSum', align: 'end' },
		{ title: 'Этапы', key: 'contractSteage', align: 'end' },
		{ title: 'Контрагенты', key: 'contractors', align: 'end' },
	]
</script>
