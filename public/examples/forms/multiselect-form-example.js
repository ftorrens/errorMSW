import KMultiSelect from "@/components/web-npm-vue-komponents/src/components/form/k-multiselect.vue";
import KForm from "@/components/web-npm-vue-komponents/src/components/form/k-form.vue";
import KFormButton from '../../../components/web-npm-vue-komponents/src/components/form/k-form-button.vue'
import {ref} from "vue";

export default {

    name : "MultiSelect",

    components: {
        "k-multiselect" : KMultiSelect,
        "k-form" : KForm,
        "k-form-button": KFormButton
    },
    setup(){

        let valuesSelected = ref([]);

        let optionsChecks = ref([
            {
                label: "900 256 458 >> 915 268 598",
                value: "1"
            },
            {
                label: "900 256 459 >> 915 268 699",
                value: "2"
            },
            {
                label: "900 256 460 >> 915 268 798",
                value: "3"
            }
        ]);

        const kFormComponent = ref(null);

        async function sendForm(){

            await kFormComponent.value.validateForm();

            if (Object.entries(kFormComponent.value.errors).length === 0) {
                // Validación sin errores
            }
        }

        return{
            optionsChecks,
            valuesSelected,
            kFormComponent,
            sendForm
        }

    }
}