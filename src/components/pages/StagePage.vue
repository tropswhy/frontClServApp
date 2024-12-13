<template>
	<v-app>
		<AppBar />
		<v-container
			class="text-center"
			v-if="stages.length > 0"
		>
			<v-table>
				<thead>
					<th class="ml-5"></th>
					<th class="text-center">Этапы</th>
					<th class="text-center">Плановые сроки</th>
					<th class="text-center">Фактические сроки</th>
					<th class="text-center">Сумма этапа</th>
					<th class="text-center">Расходы на материалы</th>
					<th class="text-center">Расходы на зарплату</th>
					<!-- <th class="text-center">Контрагенты</th> -->
				</thead>
				<tbody>
					<tr
						v-for="stage in stages"
						:key="stage.id"
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
								<td>{{ stage.name }}</td>
								<td>{{ stage.planStartDate + ' — ' + stage.planEndDate }}</td>
								<td>
									{{ stage.actualStartDate + ' — ' + stage.actualEndDate }}
								</td>
								<td>{{ stage.monetaryValue }}</td>
								<td>
									<v-table>
										<thead>
											<th class="text-center">Материалы</th>
											<th class="text-center">Расходы</th>
										</thead>
										<tbody>
											<tr v-for="spendingMaterial in stage.spendingMaterials">
												<td>{{ spendingMaterial.name }}</td>
												<td>{{ spendingMaterial.monetaryValue }}</td>
											</tr>
										</tbody>
									</v-table>
								</td>
								<td>
									<v-table>
										<thead>
											<th class="text-center">Сотрудник</th>
											<th class="text-center">Расходы</th>
										</thead>
										<tbody>
											<tr v-for="spendingSalary in stage.spendingSalaries">
												<td>
													{{
														spendingSalary.name + ' ' + spendingSalary.surname
													}}
												</td>
												<td>{{ spendingSalary.monetaryValue }}</td>
											</tr>
										</tbody>
									</v-table>
								</td>
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
				title="У этого договора нет этапов"
				text="Хотите добавить?"
			/>
		</v-container>
	</v-app>
</template>

<script setup lang="ts">
	import AppBar from '../ui/AppBar.vue'
	import { ref, computed } from 'vue'
	import { useRoute } from 'vue-router'
	import { useContractStore } from '../../stores/ContractStore.ts'

	const contractStore = useContractStore()
	const contractId = computed<number>(() =>
		Number(useRoute().params.contractId)
	)

	interface SpendingMaterial {
		name: string
		monetaryValue: number
	}

	interface SpendingSalary {
		name: string
		surname: string
		monetaryValue: number
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
		spendingMaterials?: SpendingMaterial[] | null
		spendingSalaries?: SpendingSalary[] | null
	}
	const stages = computed<Stage[]>(() => {
		const result = useContractStore().getStagesByContractId(contractId.value)
		if (result === undefined || result.length === 0) {
			return []
		} else {
			return result
		}
	})

	console.log(stages.value)
</script>
