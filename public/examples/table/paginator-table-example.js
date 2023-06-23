import KTablePaginator from "../../../components/web-npm-vue-komponents/src/components/k-table-paginator.vue";
import {ref} from "vue";

export default {
    name: 'TablePaginatorExample',
    components: {
        "k-table-paginator": KTablePaginator,
    },
    setup() {
        const paginatorData = ref({
            totalPages: 10,
            currentPage: 1,
            eventLaunch: "Empty"
        })

        function handleToPage(pPage) {
            paginatorData.value.currentPage = pPage;
            paginatorData.value.eventLaunch = 'click-to-page';
        }

        function handleNextPage() {

            paginatorData.value.eventLaunch = 'click-next-page';

            if (paginatorData.value.currentPage < paginatorData.value.totalPages) {
                paginatorData.value.currentPage = paginatorData.value.currentPage + 1;
            } else {
                return
            }
        }

        function handlePrevPage() {

            paginatorData.value.eventLaunch = 'click-prev-page';

            if (paginatorData.value.currentPage != 1) {
                paginatorData.value.currentPage = paginatorData.value.currentPage - 1;
            } else {
                return
            }
        }

        return {
            paginatorData,
            handleToPage,
            handleNextPage,
            handlePrevPage
        }

    }
}