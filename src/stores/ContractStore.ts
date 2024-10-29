import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import contractBD from '../../back/getContracts.json'

export const useContractStore = defineStore('contractStore', () => {
	const contracts = ref(contractBD)
	return { contracts }
})
