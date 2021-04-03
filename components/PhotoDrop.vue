<template>
    <div
        class="photo-drop"
        :class="{ highlight }"
        @drop="processPhoto"
        @dragenter.prevent="highlight = true"
        @dragleave.prevent="highlight = false"
        @dragover.prevent
    >
        Drop Photos to Display
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, namespace } from 'nuxt-property-decorator'

const Photos = namespace('photos')

@Component
export default class extends Vue {
    @Photos.Mutation addPhoto!: (photo: File) => void
    highlight = false

    processPhoto(e: DragEvent) {
        console.log({ e })

        this.highlight = false
        e.preventDefault()
        if (e.dataTransfer && e.dataTransfer.items) {
            if (e.dataTransfer.items.length === 1) {
                const file = e.dataTransfer.items[0].getAsFile()
                if (file) {
                    this.addPhoto(file)
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.photo-drop {
    border: 2px dashed var(--border);
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    background: var(--background);

    display: grid;
    place-items: center;
    font-family: Dosis;
    font-size: 2rem;
    transition: border 0.2s, background 0.07s, color 0.15s;
    transition-timing-function: ease;

    &.highlight {
        color: var(--gray-7);
        border-color: var(--border-focus);
        background: var(--background-focus);
    }
}
</style>
