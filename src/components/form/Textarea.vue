<template>
    <div class="form__output">
        <textarea
            class="form__input-textarea"
            :name="inputData.name"
            :value="inputData.value"
            :readonly="inputData.readonly"
            :disabled="inputData.disabled"
            :required="inputData.required"
            :rows="inputData.rows"
            :placeholder="inputData.placeholder"
            :id="inputData.id"
        ></textarea>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Textarea } from "../../types";

@Component
export default class FormTextarea extends Vue {
    @Prop() private inputData!: Textarea;
}
</script>

<style lang="scss" scoped>
.form {
    &__input-textarea {
        display: block;
        width: calc(100% - 34px);
        padding: 8px 16px;
        font-size: 15px;
        font-weight: 400;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #aaa;
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
