<script setup lang='ts'>
import { NButton, NModal } from 'naive-ui'

interface Props {
  visible: boolean
  close_tip_fun: () => void
}

defineProps<Props>()
</script>

<template>
  <NModal :show="visible" style="width: 90%; max-width: 640px">
    <div class="p-10 bg-white rounded dark:bg-slate-800">
      <div class="space-y-4">
        <header class="space-y-2">
          <h2 class="text-2xl font-bold text-center text-slate-800 dark:text-neutral-200">
            信息
          </h2>
          <p class="text-base text-center text-slate-500 dark:text-slate-500">
            <!--            {{ $t('common.newsMessage') }} -->
            本平台使用了最新的<strong>GPT-4</strong>模型API<br>
            对比之前的API速度上可能稍有下降,但是在准确度上有很大的提升<br>
            敬请体验！
          </p>
          <p class="text-base text-center text-slate-500 dark:text-slate-500">
            <!--            {{ $t('common.newsMessage') }} -->
            此外,原域名: <b>heroai.cloud</b> 已经迁移到 <b>heroai.online</b>
          </p>
        </header>
        <NButton
          block
          type="primary"
          @click="close_tip_fun"
        >
          确定
        </NButton>
      </div>
    </div>
  </NModal>
</template>
