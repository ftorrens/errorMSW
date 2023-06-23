import KTableNumberItems from "../../../components/web-npm-vue-komponents/src/components/k-table-number-items.vue";
import {ref} from "vue";

export default {
    name: 'TableNumberItemsExample',
    components: {
        "k-table-number-items": KTableNumberItems,
    },
    setup(){
        const numberData = ref(null);

        function handleSelectCount(pCount){
            numberData.value = pCount;
        }

        return {
            numberData,
            handleSelectCount
        }
    }
}