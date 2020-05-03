<template>
  <button class="dong-button" :class="[`dong-button--${type}`, {
    'is-plain' : plain,
    'is-round': round,
    'is-circle' : circle,
    'is-disabled': disabled
    }]"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'DongButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.dong-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  margin-left: 30px;
  transition: 0.1s;
  font-weight: 500;
  // 禁止文章元素被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 10px 16px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.dong-button--primary {
  color: #ffffff;
  background-color: #5dc0f8;
  border-color: #5dc0f8;
  &:hover,
  &:focus {
    background-color: #0a8ad3;
    border-color: #0a8ad3;
    color: #ffffff
  }
}
.dong-button--success {
  color: #ffffff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    border-color: #a1f458;
    background-color: #a1f458;
    color: #ffffff
  }
}
.dong-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background-color: #9f9f9e;
    border-color: #9f9f9e;
    color: #ffffff
  }
}
.dong-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background-color: #f6c566;
    border-color: #f6c566;
    color: #ffffff
  }
}
.dong-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background-color: #f73760;
    border-color: #f73760;
    color: #ffffff
  }
}
.dong-button--default.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.dong-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #5dc0f8;
    border-color: #5dc0f8;
  }
}
.dong-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.dong-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.dong-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.dong-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
.dong-button.is-round {
  border-radius: 20px;
  padding: 12px, 20px;
}
.dong-button.is-circle {
  padding: 12px;
  border-radius: 50%;
}
.dong-button.is-disabled {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
  cursor: not-allowed;
}
.dong-button [class*=dong-icon-]+span {
  margin: 0px 6px;
}
</style>
