<template>
    <div class="form__output">
        <loading v-if="isLoading" />
        <div
            class="form__output-display form__output-display--empty"
            v-if="!rawInput && !rawInput.length"
        >Пока пусто</div>

        <div
            class="form__output-display form__output-display--empty"
            v-if="rawInput && !parsedInput"
        >
            <p>
                Ошибка JSON. Попробуйте изменить код. Пример кода можно найти на
                <router-link :to="{ name: 'Home' }">главной странице</router-link>
            </p>
        </div>

        <div class="form__output-display" v-if="parsedInput && parsedInput.length">
            <form>
                <div class="form__input-wrapper" v-for="(item, idx) in parsedInput" :key="idx">
                    <form-row :form-data="item" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import FormRow from "@/components/FormRow";
import Loading from "@/components/lib/Loading";

export default {
    name: "Form",
    components: {
        FormRow,
        Loading
    },
    data: () => ({
        isLoading: false,
        isToggleOutput: false,
        parsedInput: null,
        parseError: null
    }),
    watch: {
        rawInput(val) {
            this.getJsonFromRawInput(val);
        }
    },
    props: {
        rawInput: {
            type: String,
            default: ""
        }
    },
    methods: {
        getJsonFromRawInput(str) {
            if (!str || !str.length) {
                return;
            }
            this.isLoading = true;
            try {
                this.parsedInput = JSON.parse(str);
            } catch (e) {
                this.parsedInput = null;
            } finally {
                this.isLoading = false;
            }
        }
    }
};
</script>
