<template>
<transition name="dialog">
  <div @click.self="$emit('update:visable', false)" v-show="visable" class="dong-dialog__wrapper">
    <div
      class="dong-dialog"
      :style="{ width, top }"
    >
      <div class="dong-dialog__header">
        <slot name="title">
          <span class="dong-dialog__title">{{ title }}</span>
        </slot>
        <button class="dong-dialog__headerbtn">
          <i @click="$emit('close')" class="dong-icon-test8"></i>
        </button>
      </div>
      <div class="dong-dialog__body">
        <slot name="body">
          <span>这是一段信息</span>
        </slot>
      </div>
      <div class="dong-dialog__footer">
        <slot name="footer">
          <dong-button @click="$emit('define')" type="primary">
            确定
          </dong-button>
          <dong-button @click="$emit('cancel')" type="info">
            取消
          </dong-button>
        </slot>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'DongDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '30%'
    },
    visable: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.dong-dialog__wrapper {
    position: fixed;
    top: 0%;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2022;
    background: rgba(0,0,0,.5);
    .dong-dialog {
      position: relative;
      margin: 0 auto 50px;
      background: #fff;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,.3);
      box-sizing: border-box;
      width: 50%;
      .dong-dialog__header {
        padding: 20px 20px 10px;
        .el-dialog__title {
          line-height: 24px;
          font-size: 18px;
          color: #303133;
        }
        .dong-dialog__headerbtn {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 0;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 16px;
        }
      }
      .dong-dialog__body {
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
      }
      .dong-dialog__footer {
        padding: 10px 20px 20px;
        text-align: right;
        box-sizing: border-box;
      }
    }
}
@keyframes run {
  0% {
    opacity: 0;
    margin-top: -10%;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
}
.dialog-enter-active {
  animation: run .5s;
}
.dialog-leave-active {
  animation: run .3s reverse;
}
</style>
