import KTable from "../../../components/web-npm-vue-komponents/src/components/k-table.vue";
import KLink from "../../../components/web-npm-vue-komponents/src/components/k-link.vue";
import KTooltip from "../../../components/web-npm-vue-komponents/src/components/k-tooltip.vue";

//Icons
import iconTriangleUp from "../../icons/triangle-up.svg"
import iconTriangleDown from "../../icons/triangle-down.svg"

import {formatThousands} from "../../../components/web-npm-vue-komponents/src/components/composables/useFormatNumber";

import {getCurrentInstance, onMounted, ref, computed} from "vue";

export default {
    name: 'TableIndexExample',
    components: {
        "k-table": KTable,
        "k-link": KLink,
        "k-tooltip": KTooltip,
    },
    setup(){
        const { proxy } = getCurrentInstance();

        let contentTableDemoTrue = computed(()=>{
            return contentTableDemo.value.map(function(x){
                return (
                    {
                        id: x.id,
                        name: x.name,
                        position: x.position,
                        office: x.office,
                        age: x.age,
                        star_date: x.star_date,
                        salary: '$'+formatThousands(x.salary),
                        actived: x.actived
                    });
            });
        });

        onMounted(() =>{
            loadData();
        });

        let filter = ref(
            {
                search: null,
                count_by_page: 15,
                direction : null,
                orderBy : null,
                totalPages : null,
                currentPage : 1,
                salary: [null],
            }
        )

        let headersTableDemo = ref([
            {
                database: 'id',
                label: 'ID'
            },
            {
                database: 'name',
                label: 'Nombre'
            },
            {
                database: 'position',
                label: 'Posición'
            },
            {
                database: 'office',
                label: 'Oficina'
            },
            {
                database: 'age',
                label: 'Edad'
            },
            {
                database: 'star_date',
                label: 'Día de comienzo'
            },
            {
                database: 'salary',
                label: 'Salario'
            },
            {
                database: 'actived',
                label: 'Activo'
            },
        ]);

        let contentTableDemo = ref(null);

        function loadData(){

            proxy.$axios.post('/api/getWorkers?filter=', JSON.stringify(filter.value))
                .then((response) => {

                    if (response.status = 200) {

                        contentTableDemo.value = response.data.data
                        filter.value.totalPages = response.data.last_page
                        filter.value.currentPage = response.data.current_page

                    }

                })
                .catch((error) => {
                    console.log(error);
                });
        }

        function handlesortByColumn(pOptions){
            filter.value.orderBy = pOptions.orderBy;
            filter.value.direction = pOptions.direction;
            loadData();
        }

        function switchElementKtable({id, value}){

            proxy.$axios.post('/api/switchTableElement', {pId: id, pValue: value})
                .then((response) => {

                    if (response.status = 200) {
                        console.log("Element edit success");
                    }

                })
                .catch((error) => {
                    console.log(error);
                });
        }

        function EditItem(pId){
            console.log("Element to edit "+pId);
        }

        function DeleteItem(pId){
            console.log("Element to delete "+pId);
        }

        return {
            headersTableDemo,
            contentTableDemo,
            handlesortByColumn,
            contentTableDemoTrue,
            iconTriangleUp,
            iconTriangleDown,
            switchElementKtable,
            filter,
            loadData,
            EditItem,
            DeleteItem
        }

    }
}