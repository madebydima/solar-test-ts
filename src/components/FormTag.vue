<template>
    <form-tag :is="formTag" :input-data="tagData" v-if="formTag" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { CommonSchema } from "../types";

@Component
export default class Tag extends Vue {
    formTag: object | null;

    constructor() {
        super();
        this.formTag = null;
    }

    @Prop() private tagData!: CommonSchema;

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
        const name =
            this.tagData.element[0].toUpperCase() +
            this.tagData.element.slice(1);
        return () => import(`./form/${name}`);
    }
}
</script>
