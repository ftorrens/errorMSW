import KTableSearch from "../../../components/web-npm-vue-komponents/src/components/k-table-search.vue";
import {ref} from "vue";

export default {
    name: 'TableSearchExample',
    components: {
        "k-table-search": KTableSearch
    },
    setup(){
        let search = ref();
        let eventLaunch = ref();

        function handleClearSearchData(){
            search.value = "";
            eventLaunch.value = "clear-search-data";
        }

        function handleSearchData(){
            eventLaunch.value = "search-launch";
        }

        return {
            search,
            eventLaunch,
            handleClearSearchData,
            handleSearchData,
        }
    }
}