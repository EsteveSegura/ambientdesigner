<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SoundCard 
      v-for="sound in allSounds"
      :key="sound._id"
      :name="sound._name"
      :configuration="sound._configuration"
      :path="sound._path"
    />
    <h1>AllSounds</h1>
    {{ allSounds }}
    <h1>allCollections</h1>
    {{ allCollections }}
  </div>
</template>

<script>
import SoundCard from '@/components/SoundCard.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {
    SoundCard
  },
  computed:{
    ...mapGetters(["allSounds","allCollections"])
  },
  methods: {
    ...mapActions(["getSounds","getCollections"])
  },
  created(){
    this.getSounds()
    this.getCollections()
  }
}
</script>
