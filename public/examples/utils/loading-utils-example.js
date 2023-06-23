import KLoading from "../../../components/web-npm-vue-komponents/src/components/k-loading.vue";

import {ref} from "vue";

export default {
    name: 'UtilsLoadingExample',

    components: {
        "k-loading": KLoading,
    },

    setup(){

        let loading = ref(false);

        function showLoading(){
            loading.value = true;

            setTimeout(function(){
                loading.value = false;
            }, 3000);
        }

        return {
            loading,
            showLoading,
        }
    }
}