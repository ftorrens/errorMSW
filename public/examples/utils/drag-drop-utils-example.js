import { defineComponent, ref } from "vue";
import KDragDrop from "../../../components/web-npm-vue-komponents/src/components/k-drag-drop.vue";

const components = defineComponent({
    "k-drag-drop": KDragDrop,
})

let candies_selected_model = ref(null);

let list_candies = ref([
    { id: 1, title: "Caramelo 1" },
    { id: 2, title: "Caramelo 2" },
    { id: 3, title: "Caramelo 3" },
    { id: 4, title: "Caramelo 4" },
    { id: 5, title: "Caramelo 5" },
    { id: 6, title: "Caramelo 6" },
    { id: 7, title: "Caramelo 7" },
    { id: 8, title: "Caramelo 8" },
    { id: 9, title: "Caramelo 9" },
    { id: 10, title: "Caramelo 10" }
]);