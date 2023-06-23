import KTabs from "../../../components/web-npm-vue-komponents/src/components/k-tabs.vue";
import KTab from "../../../components/web-npm-vue-komponents/src/components/k-tab.vue";
import {ref} from "vue";

export default {
    name: 'UtilsTabsExample',

    components: {
        'k-tabs': KTabs,
        'k-tab': KTab,
    },

    setup(){
        let loading = ref(false)

        let KTabsRef = ref(null);

        return{
            loading,
        }
    }
}
