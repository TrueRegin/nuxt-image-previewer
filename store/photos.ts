import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

@Module({ name: 'photos', namespaced: true, stateFactory: true })
export default class PhotosModule extends VuexModule {
    photos: { [key: string]: File } = {}

    @Mutation
    addPhoto(payload: File) {
        this.photos = { ...this.photos, [payload.name]: payload }
    }

    @Mutation
    removePhoto(key: string) {
        const deletedOnePhoto = { ...this.photos }
        delete deletedOnePhoto[key]
        this.photos = { ...deletedOnePhoto }
    }

    get getPhotos() {
        return { ...this.photos }
    }
}
