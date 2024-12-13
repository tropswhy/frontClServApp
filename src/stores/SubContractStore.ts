import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import subContractBD from '../../back/getAllSubContractsByContractId.json'

export const useSubContractStore = defineStore('subContractStore', () => {
	const subContracts = ref(subContractBD.data)
	/* const subContracts = ref(
		subContractBD.data.filter((subContract) => {
			/* if (contract === undefined) {  // сделать проверку на существование объекта
				console.log(contract)
				return false
			} 
			for (let key in subContract) {
				if (
					key !== 'stages' &&
					key !== 'subContracts' &&
					subContract[key] === null
				) {
					//console.log(contract)
					return false
				}
			}
			return true
		})
	) */
	//console.log(contracts.value[0])
	/* console.log(contracts.value.filter((contract) => contract.subContracts.length)) */
	return { subContracts }
})
