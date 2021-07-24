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
