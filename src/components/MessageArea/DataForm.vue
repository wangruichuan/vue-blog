<template>
  <form
    id="data-form-container"
    ref="form"
    @submit.prevent="handleSubmit"
    class="data-form-container"
  >
    <div class="form-item">
      <div class="input-area">
        <input
          type="text"
          maxlength="10"
          v-model="formData.nickname"
          placeholder="用户昵称"
        />
        <span class="tip">{{ formData.nickname.length }}/10</span>
      </div>
      <div class="error">{{ error.nickname }}</div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <textarea
          maxlength="300"
          placeholder="输入内容"
          v-model="formData.content"
        ></textarea>
        <span class="tip">{{ formData.content.length }}/300</span>
      </div>
      <div class="error">{{ error.content }}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <button :disabled="isSubmiting">
          {{ isSubmiting ? '提交中...' : '提交' }}
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import showMessage from '@/utils/showMessage'

const form = ref<HTMLFormElement | null>(null)
const formData = reactive({
  nickname: '',
  content: '',
})
const error = reactive({
  nickname: '',
  content: '',
})
const isSubmiting = ref(false)

const emit = defineEmits<{
  submit: [
    comment: {
      nickname: string
      content: string
    },
    callback: () => void,
  ]
}>()

// 提交表单
function handleSubmit() {
  error.nickname = formData.nickname ? '' : '请填写昵称'
  error.content = formData.content ? '' : '请填写内容'
  if (error.nickname || error.content) {
    // 有错误
    return
  }
  isSubmiting.value = true // 正在提交，防止重复点击
  emit('submit', formData, () => {
    showMessage(
      {
        content: '评论成功',
        type: 'success',
        container: form.value!,
      },
      () => {
        isSubmiting.value = false // 提交完成，恢复按钮状态
        formData.nickname = '' // 清空表单
        formData.content = ''
      },
    )
  })
}
</script>

<style scoped>
.data-form-container {
  margin-bottom: 20px;
  overflow: hidden;
}

.form-item {
  margin-bottom: 8px;
}

.input-area {
  width: 50%;
  position: relative;
}

.text-area {
  position: relative;
}

.tip {
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: #b4b8bc;
  font-size: 12px;
}

input,
textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px dashed var(--neutral-color); /* 假设变量用 CSS 自定义属性表示 */
  outline: none;
  color: var(--words);
  font-size: 14px;
  border-radius: 4px;
}

input:focus,
textarea:focus {
  border-color: var(--primary-color);
}

input {
  padding: 0 15px;
  height: 40px;
}

textarea {
  resize: none;
  padding: 8px 15px;
  height: 120px;
}

.error {
  margin-top: 6px;
  color: var(--error-color);
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}

button {
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100px;
  height: 34px;
  color: #fff;
  border-radius: 4px;
  background: var(--primary-color-dark);
}

button:hover {
  background: var(
    --primary-color-light
  ); /* 这里只是简单示意，实际需替换成合适的值 */
}

button:disabled {
  background: var(
    --neutral-color-dark
  ); /* 这里只是简单示意，实际需替换成合适的值 */
  cursor: not-allowed;
}
</style>
