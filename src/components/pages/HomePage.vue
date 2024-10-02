<template>
	<v-app>
		<AppBar />
		<v-container class="text-center my-15">
			<v-responsive class="mx-auto">
				<v-row
					align="center"
					justify="center"
				>
					<ButtonMenu @click="$router.push('/contracts')">
						Договоры
					</ButtonMenu>
					<ButtonMenu @click="$router.push('/contractors')">
						Организации-контрагенты
					</ButtonMenu>
					<ButtonMenu @click="$router.push('/reports')"> 
						Отчёты
					</ButtonMenu>
					<ButtonMenu @click="$router.push('/admin')">
						Администрирование
					</ButtonMenu>
				</v-row>
			</v-responsive>
		</v-container>
	</v-app>
</template>

<script setup lang="ts">
	import ButtonMenu from '../ui/ButtonMenu.vue'
	import AppBar from '../ui/AppBar.vue'
</script>

<style scoped></style>
