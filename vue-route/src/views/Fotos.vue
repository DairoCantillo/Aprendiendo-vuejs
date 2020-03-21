<template>
  <div>
    <h1>Galeria</h1>


    <router-link :to="{name: 'fotos',params: {id:item} }" v-for="(item, index) in listaDeFotos" :key="index">
      <button>foto {{item}} </button>
    </router-link>
    <Foto/>
    <button @click="home">Home</button>
    <button @click="anterior">Atras</button>
    <button @click="siguiente">Adelante</button>
  </div>
</template>

<script>
import Foto from '@/components/Foto.vue'

export default {
  name: 'Fotos',
  components: {
    Foto
  },
  data(){
    return{
      listaDeFotos:[1,2,3,4,5,6,7,8,9]
    }
  },
  methods: {
    home(){
      return this.$router.push('/')
    },
    anterior(){
      return this.$router.go(-1)
    },
    siguiente(){
      return this.$router.go(1)
    },
  },
};
</script>