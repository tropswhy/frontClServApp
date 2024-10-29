import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import contractorBD from '../../back/getAllContractors.json'

export const useContractorStore = defineStore('contractorStore', () => {
	const contractors = ref(contractorsBD)
	return { contractors }
})
