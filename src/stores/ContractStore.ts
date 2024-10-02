import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import contractBD from '../../back/contracts.json'

export const useContractStore = defineStore('contractStore', () => {
    const contracts = ref <object>(contractBD)
})