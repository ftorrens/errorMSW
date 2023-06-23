import KRange from "../../../components/web-npm-vue-komponents/src/components/k-range.vue";
import {ref} from "vue";

export default {
    name: 'UtilsRange',
    components: {
        "k-range": KRange,
    },
    setup(){
        let filter = ref(
            {
                years: [null],
            }
        )

        const programming_langs = [
            {"name" : "Fortran", "year" : 1957},
            {"name" : "Cobol", "year" : 1959},
            {"name" : "Basic", "year" : 1964},
            {"name" : "C", "year" : 1969},
            {"name" : "Pascal", "year" : 1970},
            {"name" : "C++", "year" : 1983},
            {"name" : "Perl", "year" : 1987},
            {"name" : "Python", "year" : 1991},
            {"name" : "Ruby", "year" : 1993},
            {"name" : "PHP", "year" : 1995},
            {"name" : "Java", "year" : 1995},
            {"name" : "Javascript", "year" : 1995},
            {"name" : "Ruby On Rails", "year" : 2005}
        ];

        let currentLanguages = ref(programming_langs);

        function filterYears(){

            currentLanguages.value = programming_langs.filter(
                (lang => (filter.value.years[0] <= lang.year && lang.year <= filter.value.years[1]))
            )

            setTimeout(function(){
            }, 100);
        }

        return {
            filter,
            currentLanguages,
            filterYears,
        }
    }
}