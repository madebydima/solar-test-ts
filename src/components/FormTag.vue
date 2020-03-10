<template>
    <form-tag :is="formTag" :input-data="tagData" v-if="formTag" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Tag extends Vue {
    formTag: object;

    @Prop() private tagData: any;

    mounted() {
        this.loader()
            .then(() => {
                this.formTag = () => this.loader();
            })
            .catch(() => {
                this.formTag = () => import("./form/Textarea.vue");
            });
    }

    get loader() {
        if (!this.tagData.element) {
            return null;
        }
        const name =
            this.tagData.element[0].toUpperCase() +
            this.tagData.element.slice(1);
        return () => import(`./form/${name}.vue`);
    }
}
</script>
