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
									@click="$router.push({
										name: 'stage',
										params: {
											contractId: item.id,
										}
									})"
								>
									Отркыть таблицу этапов
								</v-btn>
							</td>
							<td>
								<v-btn
									variant="text"
									size="x-small"
									@click="$router.push({
										name: 'subContracts',
										params: {
											contractId: item.id,
										}
									})"
								>
									Отркыть таблицу субконтрактов
								</v-btn>
							</td>
						</template>
						<template v-slot:default="{ isActive }">
							<ContractCard
								:id="item.id"
								:name="item.name"
								:type="item.type"
								:platStartDate="item.planStartDate"
								:planEndDate="item.planEndDate"
								:actualStarDate="item.actualStartDate"
								:actualEndDate="item.actualEndDate"
								:monetaryValue="item.monetaryValue"
								:stages="item.stages"
								:subContracts="item.subContracts"
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
	import { ref, computed } from 'vue'
	import { useContractStore } from '../../stores/ContractStore.ts'
	interface Stage {
		readonly id: number
		name: string
		planStartDate: string
		planEndDate: string
		actualStartDate: string
		actualEndDate: string
		monetaryValue: number
		contractId: number
		spendingMaterials?: [] | null
		spendingSalaries?: [] | null
	}

	interface SubContract {
		readonly id: number
		name: string
		type: string
		monetaryValue?: number | null
		planStartDate: string
		planEndDate: string
		actualStartDate: string
		actualEndDate: string
		contractor?: null
		contractId: number
	}

	interface Contract {
		readonly id: number
		name: string
		type: string
		planStartDate: string
		planEndDate: string
		actualStartDate: string
		actualEndDate: string
		monetaryValue: number
		stages?: Stage[] | null
		subContracts?: SubContract[] | null
	}
	const contractStore = useContractStore()
	const contracts = computed<Contract[]> (() => {
		const result = contractStore.contracts
		if (result === undefined || result.length === 0) {
			return []
		} else {
			return result
		}
	}) 
	const itemsPerPage = ref<number>(5)


	
	//const contracts: Contract[] = [...contractFromStore.value]

	contracts.value.forEach((contract) => {
		console.log(contractStore.getStagesByContractId(contract.id))
		console.log(contractStore.getSubContractsByContractId(contract.id))
	})
</script>
