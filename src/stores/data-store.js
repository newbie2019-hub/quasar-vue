import { defineStore } from 'pinia';
import { api } from '../boot/axios'

export const useDataStore = defineStore('counter', {
  state: () => ({
    users: {},
    albums: {},
    photos: {},
    data: {}
  }),
  getters: {
    getUsers: (state) => {
      const albumWithPhoto = state.albums.map(album => ({
        ...album,
        photos: [...state.photos.filter(photo => photo.albumId === album.id)]
      }))

      return state.users.map(user => ({
        ...user,
        albums: [...albumWithPhoto.filter(album => album.userId === user.id)]
      }))
    },
    getData: (state) => {
      return state.albums.map(album => ({
        ...album,
        photos: [...state.photos.filter(photo => photo.albumId === album.id)],
        user: [...state.users.filter(user => user.id === album.userId)][0]
      }))
    }
  },
  actions: {
    async fetchUsers() {
      const { data } = await api.get('users')
      this.users = data
    },
    async fetchAlbums() {
      const { data } = await api.get('albums')
      this.albums = data
    },
    async fetchPhotos() {
      const { data } = await api.get('photos')
      this.photos = data
    },
  },
});
