<template>
    <div class="form__output">
        <select
            :class="{ 'form__input-select': true, 'form__input-select--expandable': inputData.maxItems <= 1 }"
            :name="inputData.name"
            :placeholder="inputData.placeholder"
            :required="inputData.required"
            :readonly="inputData.readonly"
            :disabled="inputData.disabled"
            :multiple="inputData.multiple"
            :size="inputData.maxItems"
            :id="inputData.id"
        >
            <option
                v-for="(item, idx) in inputData.items"
                :key="idx"
                :value="item.value"
                :selected="item.selected"
                :disabled="item.disabled"
            >{{ item.label }}</option>
        </select>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ISelect } from "../../types";

@Component
export default class Select extends Vue {
    @Prop() private inputData!: ISelect;
}
</script>

<style lang="scss" scoped>
.form {
    &__input-select {
        display: block;
        padding: 0 16px;
        width: 100%;
        height: auto;
        font-size: 15px;
        font-weight: 400;
        line-height: 1.5;
        color: #333;
        border: 1px solid #aaa;
        border-radius: 4px;
        outline: none;
        box-shadow: 0 0 0;
        transition: border-color 0.15s ease-in-out;

        &--expandable {
            height: 40px;
            -moz-appearance: none;
            -webkit-appearance: none;
            appearance: none;
            background-color: #fff;
            background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2342b983%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"); // 42b983
            background-repeat: no-repeat, repeat;
            background-position: right 0.7em top 50%, 0 0;
            background-size: 0.65em auto, 100%;
        }

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
            border-color: #aaa;
            color: #222;
        }

        &:hover {
            border-color: #333;
        }
        &::-ms-expand {
            display: none;
        }
    }
}
</style>
