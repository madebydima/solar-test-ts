<template>
    <div class="form__row">
        <container-buttons :tags-data="formData" v-if="formData.type === 'button'" />
        <container-tags :tags-data="formData" v-else />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ContainerTags from "./ContainerTags.vue";
import ContainerButtons from "./ContainerButtons.vue";

@Component({
    components: {
        ContainerTags,
        ContainerButtons
    }
})
export default class FormRow extends Vue {
    @Prop() private formData!: object;
}
</script>

<style scoped lang="scss">
.form {
    &__row {
        margin-bottom: 16px;
    }
}
</style>
