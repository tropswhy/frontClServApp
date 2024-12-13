import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import contractBD from '../../back/getContracts.json'

export const useContractStore = defineStore('contractStore', () => {
	/* 	const contracts = ref(
		contractBD.filter((contract) => {
			for (let key in contract) {
				if (
					key !== 'stages' &&
					key !== 'subContracts' &&
					contract[key] === null
				) {
					console.log(contract)
					return false
				}
			}
			return true
		})
	) */

	const getAllContracts = computed(() => {
		try {
			return contractBD
		} catch (error) {
			console.error('Ошибка при получении данных:', error)
			return []
		}
	})
	function getContractById(contractId: number) {
		return getAllContracts.value.find((contract) => contract.id === contractId)
	}

	const contracts = ref(getAllContracts.value)
	const getSubContractsByContractId = computed(
		() => (contractId: number) => {
			try {
				return getContractById(contractId)?.subContracts
			} catch (error) {
				console.error('Ошибка при получении данных:', error)
				return []
			}
		}
	)

	const getStagesByContractId = computed(
		() => (contractId: number) => {
			try {
				return getContractById(contractId)?.stages
			} catch (error) {
				console.error('Ошибка при получении данных:', error)
				return []
			}
		}
	)

	return { contracts, getAllContracts, getSubContractsByContractId, getStagesByContractId }
})
