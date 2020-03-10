<template>
    <div class="form">
        <div class="form__block">
            <json-to-form @getFormFromCode="getFormFromCode" />
        </div>
        <div class="form__block">
            <form-output :raw-input="formInput" />
        </div>
    </div>
</template>

<script>
import JsonToForm from "@/components/JsonToForm";
import FormOutput from "@/components/Form";

export default {
    name: "Form",
    data: () => ({
        formInput: ""
    }),
    components: {
        JsonToForm,
        FormOutput
    },
    methods: {
        getFormFromCode(val) {
            this.formInput = val;
        }
    }
};
</script>

<style lang="scss">
.form {
    display: flex;
    margin: 0 -16px;
    &__block {
        max-width: calc(50% - 24px);
        min-width: calc(50% - 24px);
        padding: 16px;
        text-align: left;
    }
}
</style>
