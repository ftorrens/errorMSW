import kList from "../../../components/web-npm-vue-komponents/src/components/k-list.vue";

export default {
    name: 'UtilsListExample',
    components: {
        "k-list": kList
    },
    setup(){

        const main_data = {
            listIndex: [
                "Valor1",
                "Valor2",
                "Valor3"
            ],
            listKeyValue: {
                "Llave1": "Valor1",
                "Llave2": "Valor2",
                "Llave3": "Valor3"
            },
        }

        return {
            main_data
        }
    }
}