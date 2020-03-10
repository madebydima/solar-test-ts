<template>
    <div class="form__output">
        <div class="form__input-radio-row" v-for="(radio, idx) in inputData.items" :key="idx">
            <input
                class="form__input-radio"
                type="radio"
                :value="radio.value"
                :name="inputData.name"
                :required="radio.required"
                :readonly="radio.readonly"
                :disabled="radio.disabled"
                :id="radio.id"
            />
            <label :for="radio.id" class="form__input-radio-label">{{ radio.label }}</label>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IRadio } from "../../types";

@Component
export default class Radio extends Vue {
    @Prop() private inputData!: IRadio;
}
</script>

<style lang="scss" scoped>
.form {
    &__input-radio {
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
                border-radius: 50%;
            }
            &::after {
                content: "";
                position: absolute;
                top: 5px;
                left: 4px;
                height: 9px;
                width: 9px;
                background: #000;
                border-radius: 50%;
                display: none;
            }
        }
        &:checked + .form__input-radio-label {
            &::before {
                border-color: #000;
            }
            &::after {
                display: block;
            }
        }
        &:disabled + .form__input-radio-label {
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
