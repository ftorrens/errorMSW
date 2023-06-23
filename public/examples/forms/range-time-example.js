import {ref} from "vue";
import KRangeTime from "../../../components/web-npm-vue-komponents/src/components/form/k-range-time.vue";
import KForm from "../../../components/web-npm-vue-komponents/src/components/form/k-form.vue";
import KModal from "../../../components/web-npm-vue-komponents/src/components/k-modal.vue";


export default {

    components: {
        "k-range-time": KRangeTime,
        "k-form": KForm,
        "k-modal": KModal,

    },

    setup() {
        const kFormComponent = ref(null);

        let rangeTime = ref(null);

        let isModalVisible = ref(false);

        async function sendForm() {

            await kFormComponent.value.validateForm();

            if (Object.entries(kFormComponent.value.errors).length === 0) {
                isModalVisible.value = true;
            }
        }

        function showHideModal() {
            if (isModalVisible.value) {
                isModalVisible.value = false;
            } else {
                isModalVisible.value = true;
            }
        }


        return {
            kFormComponent,
            rangeTime,
            sendForm,
            showHideModal,
            isModalVisible
        }
    }


}
