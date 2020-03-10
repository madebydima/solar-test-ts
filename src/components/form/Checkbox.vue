<template>
    <div class="form__output">
        <input
            class="form__input-checkbox"
            type="checkbox"
            :value="inputData.value"
            :placeholder="inputData.message"
            :required="inputData.required"
            :readonly="inputData.readonly"
            :disabled="inputData.disabled"
            :maxlength="inputData.maxlength"
            :id="inputData.id"
        />
        <label :for="inputData.id" class="form__input-checkbox-label">{{ inputData.label }}</label>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ICheckbox } from "../../types";

@Component
export default class Checkbox extends Vue {
    @Prop() private inputData!: ICheckbox;
}
</script>

<style lang="scss" scoped>
.form {
    &__input-checkbox {
        display: none;
        &-row {
            padding: 4px 0;
        }
        &-label {
            position: relative;
            &::before {
                content: "";
                display: inline-block;
                vertical-align: top;
                position: relative;
                top: 1px;
                height: 13px;
                width: 13px;
                margin: 0 8px 0 0;
                border: 2px solid #666;
            }
            &::after {
                content: "";
                position: absolute;
                top: 5px;
                left: 3px;
                height: 4px;
                width: 10px;
                border: 2px solid #000;
                border-width: 0 0 2px 2px;
                transform: rotate(-45deg);
                display: none;
            }
        }
        &:checked + .form__input-checkbox-label {
            &::before {
                border-color: #000;
            }
            &::after {
                display: block;
            }
        }
        &:disabled + .form__input-checkbox-label {
            color: #aaa;
            cursor: not-allowed;
            &::before {
                border-color: #ccc;
            }
            &:hover {
                border-color: #eee;
            }
        }
    }
}
</style>
