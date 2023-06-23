import KNav from "../../../components/web-npm-vue-komponents/src/components/k-nav.vue";
import { ref } from "vue";

export default {
    name: 'UtilsNavExample',
    components: {
        "k-nav": KNav
    },

    setup() { 

        let isCollapsedExample = ref(false)

        let menuLinks = ref([
            {
                id: 'home',
                name: 'Home',
                url: '/',
                icon: 'bi-house',

            },
            {
                id: 'fomularios',
                name: 'Fomularios',
                url: '/',
                icon: 'bi-ui-checks',

                submenu: [
                    {
                        id: 'Inicio',
                        name: 'Inicio',
                        url: '/',
                    },
                    {
                        id: 'input',
                        name: 'Input',
                        url: '/',
                    },
                ]

            },
            {
                name: 'Útiles',
                url: '/utils',
                icon: 'bi-tools',
                id: 'utiles',
                submenu: [
                    {
                        id: 'nav',
                        name: 'Nav',
                        url: '/',
                    },
                    {
                        id: 'modal',
                        name: 'Modal',
                        url: '/',
                    },
                    {
                        id: 'list',
                        name: 'List',
                        url: '/',
                    },
                    {
                        id: 'user_tiny_info',
                        name: 'User Tiny Info',
                        url: '/',
                    },
                    {
                        id: 'custom_select',
                        name: 'CustomSelect',
                        url: '/',
                    },
                ]
            },
            {
                id: 'tablas',
                name: 'Tablas',
                icon: 'bi-table',
                url: '/table',
                submenu: [
                    {
                        id: 'inicio',
                        name: 'Inicio',
                        url: '/',
                    },
                    {
                        id: 'paginator',
                        name: 'Paginador',
                        url: '/',
                    },
                    {
                        id: 'number-items',
                        name: 'Número de Elementos',
                        url: '/',
                    },
                    {
                        id: 'search',
                        name: 'Buscador',
                        url: '/',
                    },
                    {
                        id: 'table-static-data',
                        name: 'Datos Estáticos',
                        url: '/',
                    },

                ],
            },
        ],
        )

        return {
            menuLinks,
            isCollapsedExample
        }
    }
}