<template>
  <div
    class="dong-switch"
    :class="[{ 'is-checked':value }]"
    @click="switchClick(true)"
  >
    <input
      type="checkbox"
      class="dong-switch__input"
      :name="name"
      ref="check"
    />
    <span class="dong-switch_core" ref="core">
      <span class="dong-switch_button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'DongSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
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
    switchClick (status) {
      if (status) {
        this.$emit('input', !this.value)
      }
      this.$nextTick(() => {
        this.$refs.check.checked = this.value
        if (this.activeColor || this.inactiveColor) {
          const color = this.value ? this.activeColor : this.inactiveColor
          this.$refs.core.style.backgroundColor = color
          this.$refs.core.style.borderColor = color
        }
      })
    }
  },
  watch: {

  },
  mounted () {
    this.switchClick()
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.dong-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .dong-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 50px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .dong-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  .dong-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
}
.dong-switch.is-checked {
  .dong-switch_core {
    background-color: #7bd7f2;
    border-color: #7bd7f2;
    .dong-switch_button {
      transform: translateX(30px);
    }
  }
}
</style>
