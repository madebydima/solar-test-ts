<template>
    <div class="form__output">
        <input
            class="form__input-text"
            :name="inputData.name"
            :autocomplete="inputData.type === 'password' ? 'new-password' : 'off'"
            :type="inputType"
            :value="inputData.value"
            :placeholder="inputData.placeholder"
            :required="inputData.required"
            :readonly="inputData.readonly"
            :disabled="inputData.disabled"
            :maxlength="inputData.maxlength"
            :id="inputData.id"
        />
        <div
            :class="{ 'form__input-toggle': true, 'form__input-toggle--show': isShowPassword }"
            v-if="inputData.type === 'password'"
            @click="toggleInputType"
        >
            <div class="form__input-toggle-icon"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IInput } from "../../types";

@Component
export default class Input extends Vue {
    parsedInput: string | null;
    isShowPassword: boolean;

    constructor() {
        super();
        this.parsedInput = "";
        this.isShowPassword = false;
    }

    @Prop() private inputData!: IInput;

    get inputType() {
        if (this.inputData.type === "password" && !this.isShowPassword) {
            return "password";
        } else if (this.inputData.type === "password" && this.isShowPassword) {
            return "text";
        }
        return this.inputData.type;
    }

    public toggleInputType(): void {
        this.isShowPassword = !this.isShowPassword;
    }
}
</script>

<style lang="scss" scoped>
.form {
    &__input {
        &-text {
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
            transition: border-color 0.15s ease-in-out,
                box-shadow 0.15s ease-in-out;

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
        &-toggle {
            position: absolute;
            top: 12px;
            right: 12px;
            height: 20px;
            width: 22px;
            cursor: pointer;
            &::after {
                content: "";
                height: 3px;
                width: 27px;
                background: #999;
                position: absolute;
                top: 6px;
                right: 1px;
                transform: rotate(-45deg);
                box-shadow: 0 2px 1px #fff;
                display: block;
            }
            &-icon {
                position: relative;
                display: inline-block;
                width: 17px;
                height: 17px;
                background: #999;
                border-radius: 70% 0 / 70%;
                transform: rotate(45deg);

                &::before,
                &::after {
                    content: "";
                    position: absolute;
                    top: 25%;
                    left: 25%;
                    width: 50%;
                    height: 50%;
                    background: #fff;
                    border-radius: 100%;
                }
                &::after {
                    width: 30%;
                    height: 30%;
                    top: 35%;
                    left: 35%;
                    background: inherit;
                }
            }
            &--show {
                &::after {
                    display: none;
                }
            }
        }
    }
}
</style>
