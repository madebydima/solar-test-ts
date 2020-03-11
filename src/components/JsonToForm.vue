<template>
    <div class="form__input">
        <textarea class="form__input-textarea" v-model="inputTextarea"></textarea>
        <div class="form__input-buttons">
            <button
                @click="getExample"
                class="form__input-button form__input-button--outlined"
            >Загрузить пример</button>
            <button
                @click="getFormFromCode"
                class="form__input-button"
                :disabled="inputTextarea.length < 20"
            >Сгенерировать форму ></button>
        </div>

        <div
            :class="{ 'form__output-formatted': true, 'form__output-formatted--opened': isToggleOutput }"
            v-if="inputTextarea && parsedInput"
        >
            <div class="form__output-formatted-header" @click="toggleOutput">Форматированный код</div>
            <div class="form__output-formatted-content">
                <pre v-html="formatJSON(parsedInput)" class="form__output-preview"></pre>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import codeFormatter from "../services/codeFormatter";
import example from "../assets/example";

@Component
export default class JsonToForm extends Vue {
    formInProgress: boolean;
    inputTextarea: string;
    parsedInput: string | null;
    isToggleOutput: boolean;
    isLoading: boolean;

    constructor() {
        super();
        this.formInProgress = false;
        this.inputTextarea = "";
        this.parsedInput = null;
        this.isToggleOutput = false;
        this.isLoading = false;
    }

    public getFormFromCode(): void {
        this.$emit("getFormFromCode", this.inputTextarea);
        this.getJsonFromRawInput(this.inputTextarea);
    }
    public toggleOutput() {
        this.isToggleOutput = !this.isToggleOutput;
    }
    public getJsonFromRawInput(str: string): void {
        if (!str || !str.length) {
            return;
        }
        try {
            this.parsedInput = JSON.parse(str);
        } catch (e) {
            this.parsedInput = null;
        } finally {
            this.isLoading = false;
        }
    }
    public formatJSON(json: string) {
        return codeFormatter(json);
    }

    public getExample() {
        this.$emit("getFormFromCode", "");
        this.inputTextarea = JSON.stringify(example);
    }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/_variables";

.form {
    &__input {
        &-textarea {
            display: block;
            width: calc(100% - 32px);
            min-height: 600px;
            padding: 8px 16px;
            font-size: 18px;
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
        &-buttons {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            padding: 24px 0;
        }
        &-button {
            outline: 0;
            border: 1px solid $primary;
            border-radius: 4px;
            padding: 8px 32px;
            margin: 8px 0;
            color: #fff;
            font-size: 16px;
            font-weight: 700;
            background-color: $primary;
            transition: background-color 0.4s ease, border-color 0.4s ease;
            &:hover {
                background-color: $secondary;
                // border-color: $secondary;
                color: $primary;
            }
            &:disabled {
                background-color: #ccc;
                border-color: #ccc;
                color: #999;
            }
            &--outlined {
                background: none;
                // border-color: transparent;
                color: $primary;
            }
        }
    }

    &__output {
        &-formatted {
            margin-bottom: 36px;
            &-header {
                position: relative;
                background: #f0f0f0;
                padding: 8px 16px;
                &::after {
                    content: "";
                    position: absolute;
                    top: 8px;
                    right: 16px;
                    height: 9px;
                    width: 9px;
                    border: 2px solid #aaa;
                    border-width: 0 2px 2px 0;
                    transform: rotate(45deg);
                    transition: transform 0.3s ease, top 0.3s ease;
                }
            }
            &-content {
                transition: all 0.3s ease;
                min-height: 0;
                max-height: 0;
                height: 0;
                overflow: hidden;
            }
            &--opened {
                .form__output-formatted-content {
                    max-height: 100%;
                    height: auto;
                }
                .form__output-formatted-header::after {
                    transform: rotate(-135deg);
                    top: 15px;
                }
            }
        }
    }
}
</style>
