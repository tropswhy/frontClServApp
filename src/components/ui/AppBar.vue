<template>
	<div>
		<v-toolbar>
			<v-toolbar-title
				class="logo"
				@click="$router.push('/')"
			>
				Учётная система
			</v-toolbar-title>
		</v-toolbar>
	</div>
</template>

<style lang="scss" scoped>
.logo {
	cursor: pointer;
}
</style>