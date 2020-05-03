<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DongRadioGroup',
  provide () {
    return {
      radioGroup: this
    }
  },
  props: {
    value: null
  },
  data () {
    return {

    }
  },
  computed: {

  },
  created () {

  },
  methods: {

  },
  watch: {

  },
  mounted () {

  },
  components: {

  }
}
</script>

<style scoped lang="scss">

.container {}
</style>
