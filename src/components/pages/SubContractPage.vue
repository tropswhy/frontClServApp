<template>
	<v-app>
		<AppBar />
		<v-container
			class="text-center"
			v-if="subContracts.length > 0"
		>
			<v-table>
				<thead>
					<th class="ml-5"></th>
					<th class="text-center">Договоры</th>
					<th class="text-center">Тип договора</th>
					<th class="text-center">Плановые сроки</th>
					<th class="text-center">Фактические сроки</th>
					<th class="text-center">Сумма договора</th>
					<!-- <th class="text-center">Контрагенты</th> -->
				</thead>
				<tbody>
					<tr
						v-for="item in subContracts"
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
							</template>
							<template v-slot:default="{ isActive }">
								<!-- <ContractCard
								:name="item.name"
								:type="item.type"
								:platStartDate="item.planStartDate"
								:planEndDate="item.planEndDate"
								:actualStarDate="item.actualStartDate"
								:actualEndDate="item.actualEndDate"
								:monetaryValue="item.monetaryValue"
								:stages="item.stages"
								:subContracts="item.subContracts"
							> -->
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
								<!-- </ContractCard> -->
							</template>
						</v-dialog>
					</tr>
				</tbody>
			</v-table>
		</v-container>
		<v-container v-else>
			<v-alert
				class="mx-auto mb-20"
				position="relative"
				rounded
				tonal
				max-width="450"
				min-width="250"
				title="У этого договора нет субконтрактов"
				text="Хотите добавить?"
			/>
		</v-container>
	</v-app>
</template>

<script setup lang="ts">
	import AppBar from '../ui/AppBar.vue'
	import { useContractStore } from '../../stores/ContractStore.ts'
	import { computed, ref, } from 'vue'
	import { useRoute } from 'vue-router'
	const contractStore = useContractStore()
	interface SubContract {
		readonly id: number
		name: string
		type: string
		monetaryValue?: null | number
		planStartDate: string
		planEndDate: string
		actualStartDate: string
		actualEndDate: string
		contractor?: null
		contractId: number
	}
	const contractId = computed<number>(
		() => Number(useRoute().params.contractId)
	)
	const subContracts = computed<SubContract[]>(() => {
		const result = useContractStore().getSubContractsByContractId(
			contractId.value
		)
		if (result === undefined || result.length === 0) {
			return []
		} else {
			return result
		}
	})

	const itemsPerPage = ref<number>(5)

	
	//const subContracts: SubContract[] = [...subContractFromStore.value]
</script>
