<template>
    <div class="form-check form-switch">

        <label :for="id" :class="[{
            'is-invalid': !!errorMessage,
            'is-valid': meta.valid && !!rules,
        }, 'form-check-label']">{{ label }}</label>

        <input :id="id" ref="input" :name="name" type="checkbox" :class="[{
            'is-invalid': !!errorMessage,
            'is-valid': meta.valid && !!rules,
        }, 'form-check-input']" :disabled="disabled" @load="handleChange(value)" @change="handleChange(value)">

    </div>
</template>

<script>
import {
    ref,
    toRefs,
    watch,
    onMounted
} from 'vue'

import {
    useField
} from 'vee-validate'

export default {

    name: 'KSwitch',

    props: {

        id: {
            type: String,
            required: true,
        },

        name: {
            type: String,
            required: true
        },

        value: {
            default: true
        },

        rules: {
            type: String,
            default: ''
        },

        modelValue: {
            value: null,
        },

        label: {
            type: String,
            value: null
        },

        disabled: {
            type: Boolean,
            default: false
        },

        labelFirst: {
            type: Boolean,
            default: false
        },

        launchClickEvent: {
            type: Boolean,
            default: false
        },

        idElementValue: {
            type: Number,
            default: null
        },

        responseFormat: {
            type: String,
            default: "Boolean"
        }

    },

    emits: ["switch-component", "update:modelValue"],

    setup(props) {

        const {
            name,
            rules
        } = toRefs(props)

        const {
            checked,
            meta,
            errorMessage,
            handleChange
        } = useField(
            name,
            rules,
            {
                type: 'checkbox',
                valueProp: props.value,
                checkedValue: props.responseFormat == "Boolean" ? true : 1,
                uncheckedValue: props.responseFormat == "Boolean" ? false : 0,
                syncVModel: true,
            }
        )

        let input = ref(null);

        const getValue = function () {
            return this.modelValue
        }

        watch(() => props.modelValue, () => {
            if (props.modelValue === true || props.modelValue === 1 || (Array.isArray(props.modelValue) && props.modelValue.includes(props.value))) {
                input.value.checked = true;
            } else {
                input.value.checked = false;
            }
        });

        onMounted(() => {

            if (props.modelValue === true || props.modelValue === 1 || (Array.isArray(props.modelValue) && props.modelValue.includes(props.value))) {
                input.value.checked = true;
            }

        })

        return {
            input,
            getValue,
            checked,
            meta,
            errorMessage,
            handleChange
        }

    }
}
</script>
