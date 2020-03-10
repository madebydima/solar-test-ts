<template>
    <div class="form__row-container">
        <div class="form__row-message">{{ tagsData.message }}</div>
        <form-button :input-data="tagsData" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import FormButton from "./form/Button.vue";

@Component({
    components: FormButton
})
export default class ContainerButtons extends Vue {
    @Prop() private tagsData: object;
}
</script>

<style scoped lang="scss">
.form {
    &__row {
        &-message {
            color: #666;
            font-size: 15px;
            padding: 8px 0;
        }
    }
}
</style>
