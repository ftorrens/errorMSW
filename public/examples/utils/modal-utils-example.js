import kModal from "../../../components/web-npm-vue-komponents/src/components/k-modal.vue";
import kLink from "../../../components/web-npm-vue-komponents/src/components/k-link.vue";
import {ref} from "vue";

export default {
    name: 'UtilsModalExample',
    components: {
        "k-modal": kModal,
        "k-link": kLink,
    },
    setup() {
        let controlModalNotification = ref(false);

        return {
            controlModalNotification
        }
    }
}