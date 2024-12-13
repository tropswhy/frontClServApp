<template>
	<div><AppBar /></div>
	<v-container class="text-center">
		<v-table>
			<thead>
				<th class="ml-5"></th>
				<th class="text-center">Организации контрагентов</th>
				<th class="text-center">Адрес</th>
				<th class="text-center">ИНН</th>
			</thead>
			<tbody>
				<tr
					v-for="item in contractors"
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
							<td>{{ item.address }}</td>
							<td>{{ item.inn }}</td>
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
</template>

<script setup lang="ts">
	import ButtonMenu from '../ui/ButtonMenu.vue'
	import AppBar from '../ui/AppBar.vue'
	import { ref } from 'vue'
	import { useContractorStore } from '../../stores/ContractorStore.ts'
	const itemsPerPage = ref<number>(5)
	const contractorFromStore = useContractorStore().contractors

	interface Contractor {
  id: number;
  name: string;
  address: string;
  inn: string;
  contractWithContractorId?: null;
}

const contractors: Contractor[] = [...contractorFromStore]
</script>
