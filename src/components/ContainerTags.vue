<template>
    <div class="form__row-container">
        <label
            class="form__row-label"
            :for="tagsData.id"
            v-if="tagsData.element !== 'checkbox'"
        >{{ tagsData.label }}</label>
        <form-tag :tag-data="tagsData" />
        <div class="form__input-hint" v-if="tagsData.hint">{{ tagsData.hint }}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import FormTag from "./FormTag.vue";

@Component({
    components: {
        FormTag
    }
})
export default class ContainerTags extends Vue {
    @Prop() private tagsData!: object;
}
</script>

<style scoped lang="scss">
.form {
    &__row {
        &-label {
            display: block;
            text-transform: uppercase;
            color: #333;
            font-size: 12px;
            padding: 8px 0 4px;
        }
    }
}
</style>
