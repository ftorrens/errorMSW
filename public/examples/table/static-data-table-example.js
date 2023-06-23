import {ref, computed} from "vue";
import KTableStaticData from "../../../components/web-npm-vue-komponents/src/components/k-table-static-data.vue";
import KLink from "../../../components/web-npm-vue-komponents/src/components/k-link.vue";
import KTooltip from "../../../components/web-npm-vue-komponents/src/components/k-tooltip.vue";

import iconTriangleUp from "../../icons/triangle-up.svg"
import iconTriangleDown from "../../icons/triangle-down.svg"

import workersJson from '../../../mocks/workers.json'
import {formatThousands} from "../../../components/web-npm-vue-komponents/src/components/composables/useFormatNumber";

export default {
    name: "TableStaticDataExample",
    components: {
        "k-table-static-data": KTableStaticData,
        "k-link": KLink,
        "k-tooltip": KTooltip,
    },
    setup() {
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
                        salary_original: x.salary,
                        actived: x.actived
                    });
            });
        });

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

        contentTableDemo.value = workersJson;

        return {
            headersTableDemo,
            contentTableDemoTrue,
            iconTriangleUp,
            iconTriangleDown,
        }

    }
}