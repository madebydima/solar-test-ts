<template>
    <div class="home">
        <div class="home__block" v-if="true">
            <div class="home__block-row" v-for="(block, idx) in exampleObject" :key="idx">
                <h2>
                    <span>type:</span>
                    {{ block.element }}
                </h2>
                <p class="home__output-text">{{ getExampleText(block.element) }}</p>
                <pre v-html="formatJSON(block)" class="home__output-preview"></pre>
            </div>
        </div>
        <div class="home__block">
            <h2>Полный пример</h2>
            <pre v-html="formatJSON(example)" class="home__output-preview"></pre>
        </div>
    </div>
</template>

<script>
import example from "@/assets/example";
import codeFormatter from "@/services/codeFormatter";

export default {
    name: "Home",
    data: () => ({
        exampleObject: null,
        example
    }),
    methods: {
        formatJSON(json) {
            return codeFormatter(json);
        },
        getExampleObject() {
            if (!this.example || !this.example.length) {
                return;
            }
            this.exampleObject = {};
            this.example.forEach(block => {
                this.exampleObject[block.element] = block;
            });
        },
        getExampleText(key) {
            if (!key || !key.length) {
                return;
            }
            let output = "";
            switch (key) {
                case "button":
                    output = "Параметры для вывода элемента BUTTON";
                    break;
                case "textarea":
                    output = "Параметры для вывода элемента TEXTAREA";
                    break;
                case "select":
                    output = "Параметры для вывода элемента SELECT";
                    break;
                case "input":
                    output = "Параметры для вывода элемента INPUT";
                    break;
                case "radio":
                    output = "Параметры для вывода элемента RADIO";
                    break;
                case "checkbox":
                    output = "Параметры для вывода элемента CHECKBOX";
                    break;
                default:
                    output = "Параметры для вывода элемента";
                    break;
            }
            return output;
        }
    },
    mounted() {
        this.getExampleObject();
    }
};
</script>

<style lang="scss">
.home {
    text-align: left;
    display: flex;
    margin: 0 -16px;
    &__block {
        max-width: calc(50% - 24px);
        min-width: calc(50% - 24px);
        padding: 16px;
        text-align: left;
        &-row {
            & + .home__block-row {
                margin-top: 36px;
            }
        }
    }
    h2 {
        border-bottom: 1px solid #f0f0f0;
        padding: 0 0 16px;
        font-weight: 700;
        span {
            font-weight: 300;
            color: #aaa;
        }
    }
}
.home__output {
    &-text {
        font-style: italic;
    }
    &-preview {
        .string {
            color: #885800;
        }
        .number {
            color: blue;
        }
        .boolean {
            color: magenta;
        }
        .null {
            color: red;
        }
        .key {
            color: green;
        }
    }
}
</style>
