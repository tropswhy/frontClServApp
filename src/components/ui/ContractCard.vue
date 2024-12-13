<template>
	<v-card
		title="Редактирование договора"
		class="center"
	>
		<!-- <v-container> -->
		<v-card-text>
			<v-row dense>
				<v-col
					cols="12"
					md="6"
					sm="6"
				>
					<v-text-field
						v-model="contract.name"
						label="Договор"
					/>
				</v-col>
				<v-col
					cols="12"
					md="6"
					sm="6"
				>
					<v-text-field
						v-model="contract.type"
						label="Тип договора"
					/>
				</v-col>
				<v-col
					cols="12"
					md="6"
					sm="6"
				>
					<v-text-field
						v-model="contract.platStartDate"
						label="Плановые сроки начала"
						hint="Дата в формате гггг-мм-дд"
						persistent-hint
					/>
				</v-col>
				<v-col
					cols="12"
					md="6"
					sm="6"
				>
					<v-text-field
						v-model="contract.planEndDate"
						label="Плановые сроки окончания"
						hint="Дата в формате гггг-мм-дд"
						persistent-hint
					/>
				</v-col>
				<v-col
					cols="12"
					md="6"
					sm="6"
				>
					<v-text-field
						v-model="contract.actualStarDate"
						label="Фактические сроки начала"
						hint="Дата в формате гггг-мм-дд"
						persistent-hint
					/>
				</v-col>
				<v-col
					cols="12"
					md="6"
					sm="6"
				>
					<v-text-field
						v-model="contract.actualEndDate"
						label="Фактические сроки конца"
						hint="Дата в формате гггг-мм-дд"
						persistent-hint
					/>
				</v-col>
				<v-col cols="12">
					<v-text-field
						v-model="contract.monetaryValue"
						label="Сумма договора"
					/>
				</v-col>
				<v-col
					cols="12"
					md="6"
					sm="6"
				>
					<v-btn
						variant="text"
						@click="
							$router.push({
								name: 'stage',
								params: {
									contractId: contract.id,
								},
							})
						"
					>
						Отркыть таблицу этапов
					</v-btn>
				</v-col>
				<!-- <v-col
					cols="1"
					md="1"
					sm="1"
				>
					<v-btn
						variant="text"
						icon="mdi-text-box-edit-outline"
					/>
				</v-col> -->
				<v-col
					cols="12"
					md="6"
					sm="6"
				>
					<v-btn
						variant="text"
						@click="
							$router.push({
								name: 'subContracts',
								params: {
									contractId: contract.id,
								},
							})
						"
					>
						Отркыть таблицу субконтрактов
					</v-btn>
					<!-- <v-select
						label="Выберите договор с контрагентом для редактирования"
						v-model="contract.subContracts[0]"
						:items="contract.subContracts"
						item-title="name"
					>
					</v-select> -->
				</v-col>
				<!-- <v-col
					cols="1"
					md="1"
					sm="1"
				>
					<v-btn
						variant="text"
						icon="mdi-text-box-edit-outline"
					/>
				</v-col> -->
				<!-- <v-col>
					<v-btn
						variant="text"
						icon="mdi-text-box-edit-outline"
					/>
				</v-col> -->
			</v-row>
		</v-card-text>
		<v-divider />
		<v-card-actions>
			<v-spacer />
			<slot></slot>
		</v-card-actions>
	</v-card>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue'

	const emit = defineEmits(['updateContract'])
	const contract = defineProps([ 
		'id',
		'name',
		'type',
		'platStartDate',
		'planEndDate',
		'actualStarDate',
		'actualEndDate',
		'monetaryValue',
		'stages',
		'subContracts',
	])

</script>
