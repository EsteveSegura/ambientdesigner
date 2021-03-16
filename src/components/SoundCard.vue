<template>
  <div class="card">
    <div class="card__name">
        <h1>{{name}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoundCard',
  props: {
    configuration:{
        type: Array,
        required: true,
    },
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true
    },
    path:{
        type: String,
        required: true
    }
  }
}
</script>

<style scoped>
.card{
    padding: 2rem;
    color: blue;
    border-radius: 25px;
    background-color: red;
    margin: 2rem
}
</style>
