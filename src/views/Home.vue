<<<<<<< HEAD
<template>

</template>

=======
<template>

</template>


<script>


export default {
  components: {
   
  },
  data: function () {
      return {}
  },
  computed: {
  
  },
  created () {
    this.$store.dispatch('properties/getImmeubles')
    this.$store.dispatch('properties/getTypedependances')
  },
  mounted () {

  },

  methods: {
  }
}
</script>
>>>>>>> ea0f95438d39187276bb192d231601cf6c2332d8
