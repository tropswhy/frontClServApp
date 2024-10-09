import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import contractorsBD from '../../back/contractors.json'

export const useContractorStore = defineStore('contractorStore', () => {
    const contractors = ref(contractorsBD)
    return { contractors }
})