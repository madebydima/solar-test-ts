<template>
    <div class="form__output">
        <loading v-if="isLoading" />
        <transition-group name="slide-fade" mode="out-in">
            <div class="form__output-display" v-if="!rawInput && !rawInput.length" key="b0">
                <p class="form__output-error">Пока пусто</p>
            </div>

            <div class="form__output-display" v-if="rawInput && !parsedInput" key="b1">
                <p class="form__output-error">
                    <span class="form__output-error-icon"></span>
                    Ошибка JSON. Попробуйте изменить код. Пример кода можно найти на
                    <router-link :to="{ name: 'Home' }">главной странице</router-link>
                </p>
            </div>

            <div class="form__output-display" v-if="parsedInput && parsedInput.length" key="b2">
                <form>
                    <div class="form__input-wrapper" v-for="(item, idx) in parsedInput" :key="idx">
                        <form-row :form-data="item" />
                    </div>
                </form>
            </div>
        </transition-group>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import FormRow from "./FormRow.vue";
import Loading from "./lib/Loading.vue";

@Component({
    components: {
        FormRow,
        Loading
    }
})
export default class Form extends Vue {
    isLoading: boolean;
    isToggleOutput: boolean;
    parsedInput: string | null;
    parseError: string | null;

    constructor() {
        super();
        this.isLoading = false;
        this.isToggleOutput = false;
        this.parsedInput = null;
        this.parseError = null;
    }

    @Prop() private rawInput!: string;

    @Watch("rawInput")
    getJsonFromRawInput(str: string) {
        if (!str || !str.length) {
            this.parsedInput = null;
            return;
        }
        this.isLoading = true;
        this.parsedInput = null;
        try {
            this.parsedInput = JSON.parse(str);
        } catch (e) {
            this.parsedInput = null;
        } finally {
            this.isLoading = false;
        }
    }
}
</script>
