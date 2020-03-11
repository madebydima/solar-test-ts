<template>
    <div class="form__output">
        <button
            class="form__input-button"
            @click.prevent="onButtonClick"
            :readonly="inputData.readonly"
            :disabled="inputData.disabled"
            :style="computedStyle"
        >{{ inputData.value }}</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Button } from "../../types";

@Component
export default class FormButton extends Vue {
    @Prop() private inputData!: Button;

    get computedStyle() {
        const backgroundColor = this.inputData.backgroundColor || null;
        const borderColor = this.inputData.borderColor || null;
        const color = this.inputData.color || null;
        return {
            backgroundColor,
            borderColor,
            color
        };
    }

    onButtonClick() {
        console.log("Button has clicked!");
    }
}
</script>

<style lang="scss" scoped>
.form {
    &__input-button {
        padding: 8px 16px;
        font-size: 15px;
        font-weight: 400;
        line-height: 1;
        color: #333;
        background-color: #dadada;
        border: 1px solid #dadada;
        border-radius: 4px;
        outline: none;
        box-shadow: 0 0 0;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

        &:disabled {
            border-color: #eee;
            color: #777;
            cursor: not-allowed;
            &:hover {
                border-color: #eee;
            }
        }

        &:focus {
            outline: none;
        }

        &:hover {
            border-color: #333;
        }
    }
}
</style>
