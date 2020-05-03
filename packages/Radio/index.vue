<template>
  <label
    class="dong-radio"
    :class="{ 'is-checked': label === (isGroup ? radioGroup.value : value) }"
  >
    <span class="dong-radio__input">
      <span class="dong-radio__inner"></span>
      <input
        type="radio"
        class="dong-radio__original"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="dong-radio__label">
      <slot>冬哥单选框制作</slot>
    </span>
  </label>
</template>

<script>
export default {
  inject: {
    radioGroup: {
      default: 0
    }
  },
  name: 'DongRadio',
  props: {
    value: null,
    label: {
      type: [String, Number, Boolean],
      default: 0
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.radioGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.radioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.radioGroup
    }
  },
  created () {

  },
  methods: {},
  watch: {},
  mounted () {},
  components: {}
}
</script>

<style scoped lang="scss">
.dong-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  .dong-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .dong-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }
    .dong-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .dong-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.dong-radio.is-checked {
  .dong-radio__input {
    .dong-radio__inner {
      border-color: #409eff;
      background-color: #409eff;
      &::after {
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #ffffff;
        position: absolute;
        left: 37%;
        top: 34%;
      }
    }
  }
  .dong-radio__label {
    color: #409eff;
  }
}
</style>
