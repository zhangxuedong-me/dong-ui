<template>
  <div class="dong-input">
    <input
      class="dong-input__inner"
      :placeholder="placeholder"
      :type="isPasswordShow ? type : 'password'"
      :name="name"
      :disabled="disabled"
      :class="[{'is-disabled' : disabled}]"
      :value="value"
      @input="$emit('input', $event.target.value)"
      ref="input"
    >
    <span class="dong-input__suffix" v-if="showSuffix">
      <transition-group name="icon">
        <i :key="1" @click="$emit('input', '')" class="dong-icon-test8" v-if="clearable && value"></i>
      </transition-group>
       <transition-group name="icon">
        <i
          @click="isPasswordShow = !isPasswordShow"
          class="dong-icon-test"
          v-if="showPassword && value"
          :class="{ 'dong-isHighlight': isPasswordShow }"
          :key="2"
        >
        </i>
      </transition-group>
    </span>
  </div>
</template>

<script>
export default {
  name: 'DongInput',
  props: {
    placeholder: {
      type: String,
      default: '欢迎使用冬哥UI库'
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      required: true,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isPasswordShow: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
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
  .dong-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 300px;
    .dong-input__inner {
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;
      cursor: pointer;
      &:hover {
        border-color: #c4c2c2;
      }
      &:focus {
        outline: none;
        border-color: #409eff;
      }
      &.is-disabled {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        cursor: not-allowed;
      }
    }
    .dong-input__suffix {
      position: absolute;
      right: 10px;
      top: 30%;
      i {
        margin: 0px 4px;
        cursor: pointer;
        &:hover {
          color: #7bd7f2;
        }
      }
      .dong-isHighlight {
        color: #7bd7f2;
      }
    }
    @keyframes run {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1
      }
    }
    .icon-enter-active {
      animation: run .5s;
    }
    .icon-leave-active {
      animation: run .3s reverse;
    }
  }
</style>
