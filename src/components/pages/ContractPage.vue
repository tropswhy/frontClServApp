<template>
	<div><AppBar /></div>

	<v-container class="text-center">
		<v-table>
			<thead>
				<th class="ml-5"></th>
				<th class="text-center">Договоры</th>
				<th class="text-center">Тип договора</th>
				<th class="text-center">Плановые сроки</th>
				<th class="text-center">Фактические сроки</th>
				<th class="text-center">Сумма договора</th>
				<th class="text-center">Этапы</th>
				<th class="text-center">Контрагенты</th>
			</thead>
			<tbody>
				<tr
					v-for="item in contracts"
					:key="item.id"
				>
					<v-dialog
						max-width="600"
						width="auto"
					>
						<template v-slot:activator="{ props: activatorProps }">
							<td>
								<v-btn
									variant="text"
									v-bind="activatorProps"
									icon="mdi-text-box-edit-outline"
								/>
							</td>
							<td>{{ item.name }}</td>
							<td>{{ item.type }}</td>
							<td>{{ item.planStartDate + ' — ' + item.planEndDate }}</td>
							<td>{{ item.actualStartDate + ' — ' + item.actualEndDate }}</td>
							<td>{{ item.monetaryValue }}</td>
							<td>
								<v-btn
									variant="text"
									size="x-small"
									>Отркыть таблицу этапов</v-btn
								>
							</td>
							<td>
								<v-btn
									variant="text"
									size="x-small"
									>Отркыть таблицу контрагентов</v-btn
								>
							</td>
						</template>
						<template v-slot:default="{ isActive }">
							<ContractCard
								:name="item.name"
								:type="item.type"
								:platStartDate="item.planStartDate"
								:planEndDate="item.planEndDate"
								:actualStarDate="item.actualStartDate"
								:actualEndDate="item.actualEndDate"
								:monetaryValue="item.monetaryValue"
							>
								<v-btn
									variant="plain"
									text="Закрыть"
									@click="isActive.value = false"
								/>
								<v-btn
									color="secondary"
									variant="tonal"
									text="Сохранить"
									@click="isActive.value = false"
								/>
							</ContractCard>
						</template>
					</v-dialog>
				</tr>
			</tbody>
		</v-table>
	</v-container>
</template>

<script setup lang="ts">
	import ButtonMenu from '../ui/ButtonMenu.vue'
	import AppBar from '../ui/AppBar.vue'
	import ContractCard from '../ui/ContractCard.vue'
	import { ref } from 'vue'
	import { useContractStore } from '../../stores/ContractStore.ts'
	const contractStore = useContractStore()
	const contractFromStore = contractStore.contracts
	const itemsPerPage = ref<number>(5)
	interface Contract {
		readonly id: number
		name: string
		type: string
		planStartDate: string
		planEndDate: string
		actualStartDate: string
		actualEndDate: string
		monetaryValue: number
		stages?: Stage[]
		subContracts?: SubContract[]
	}

	interface Stage {
		readonly id: number
		name: string
		planStartDate: string
		planEndDate: string
		actualStartDate: string
		actualEndDate: string
		monetaryValue: number
		contractId: number
		spendingMaterials?: []
		spendingSalaries?: []
	}

	interface SubContract {
		readonly id: number
		name: string
		type: string
		monetaryValue?: number
		planStartDate: string
		planEndDate: string
		actualStartDate: string
		actualEndDate: string
		contractor?: null
		contractId: number
	}

	const contracts: Contract[] = [...contractFromStore]
</script>
