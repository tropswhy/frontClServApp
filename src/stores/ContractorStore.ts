import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import contractorBD from '../../back/getAllContractors.json'

export const useContractorStore = defineStore('contractorStore', () => {
	const contractors = ref(contractorBD.data.filter((contractor) => {
		for (let key in contractor) {
			if ((key !== "contractWithContractorId") && (contractor[key] === null)) {
				console.log(contractor)
				return false
			}
		}
		return true
	}))

	/* contractors.value.forEach((contractor) => {
		for (let key in contractor) {
			console.log(key + ' ' + contractor[key])
		}
	}) */
	/* console.log(
		contractors.value.filter((contractor) => {
			for (let key in contractor){
				if (key !== "contractWithContractorId" && contractor[key] === null) {
					return false
				}
			}
		})
	) */
	return { contractors }
})
