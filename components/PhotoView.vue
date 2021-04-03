<template>
    <div class="photo-view">
        <div class="photo-background">
            <img
                ref="img"
                class="photo"
                :src="getUrl"
                @click="$emit('delete')"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
    @Prop({ required: true }) photo!: File
    url: string | undefined = undefined

    get getUrl() {
        if (this.url !== undefined) {
            URL.revokeObjectURL(this.url)
        }

        const url = URL.createObjectURL(this.photo)
        this.url = url
        return url
    }
}
</script>

<style lang="scss">
.photo-view {
    display: grid;
    place-items: center;

    .photo-background {
        background: var(--gray-5);
        border-radius: 5px;
    }

    &:hover {
        .photo {
            transform: translateY(-20px) scale(1.03) rotateX(20deg)
                rotateY(-11deg);
            border-color: var(--border-focus);
            box-shadow: 0 3px 6px var(--border-focus);
            opacity: 0.7;
            cursor: pointer;
        }
    }

    .photo {
        max-width: 100%;
        max-height: 300px;
        border: 2px solid #fff;
        box-shadow: 0 3px 6px var(--shadow);
        border-radius: 5px;

        transition: border-color, box-shadow, opacity, transform;
        transition-duration: 0.3s;
        transition-timing-function: ease;
    }
}
</style>
