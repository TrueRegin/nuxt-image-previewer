<template>
    <div>
        <photo-drop />
        <div class="photo-gallery">
            <photo-view
                v-for="(photo, key) in getPhotos"
                :key="photo.name"
                :photo="photo"
                @delete="removePhoto(key)"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, namespace } from 'nuxt-property-decorator'
import PhotoView from '../components/PhotoView.vue'
import PhotoDrop from '~/components/PhotoDrop.vue'

const Photos = namespace('photos')

@Component({
    components: { PhotoView, PhotoDrop },
})
export default class extends Vue {
    @Photos.Getter getPhotos!: { [key: string]: File }
    @Photos.Mutation removePhoto!: (key: string) => void
}
</script>

<style lang="scss">
.photo-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    background: #fff;
    margin: 20px 0;
    border-radius: 5px;
    box-shadow: 0 5px 10px var(--shadow);
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    gap: 20px;
}
</style>
