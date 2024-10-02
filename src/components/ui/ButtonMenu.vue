<template>
	<v-col cols="12">
		<v-btn
			size="x-large"
			color="secondary"
		>
			<slot />
		</v-btn>
	</v-col>
</template>

<style scoped>
	.v-col {
		justify-content: center;
	}
	.v-btn {
		width: 350px;
	}
</style>
