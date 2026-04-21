<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useReCaptcha } from 'vue-recaptcha-v3';

const { t } = useI18n();

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

type Status = 'send' | 'loading' | 'error' | 'sent';
const formStatus = ref<Status>('send');
let statusTimer: ReturnType<typeof setTimeout> | null = null;

const setTemporaryStatus = (status: Status, duration: number) => {
  formStatus.value = status;

  if (statusTimer) {
    clearTimeout(statusTimer);
  }

  statusTimer = setTimeout(() => {
    formStatus.value = 'send';
    statusTimer = null;
  }, duration);
};

type ReCaptchaInstance = ReturnType<typeof useReCaptcha>;
let recaptchaInstance: ReCaptchaInstance = undefined;

onMounted(() => {
  recaptchaInstance = useReCaptcha();
});

const handleSubmit = async () => {
  formStatus.value = 'loading';

  try {
    if (!recaptchaInstance) {
      setTemporaryStatus('error', 10000);
      return;
    }
    const { executeRecaptcha, recaptchaLoaded } = recaptchaInstance;

    await recaptchaLoaded();

    const token = await executeRecaptcha('contact');
    if (!token) {
      setTemporaryStatus('error', 10000);
      return;
    }

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbxbVL_nZdabv74ng3qNbmKXan2VZab5iXi8AcN9gXayvEuIY7Jnof5xdYWTjVIaxFrksw/exec',
      {
        redirect: 'follow',
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token
        })
      }
    );

    const result = await response.json();
    if (!result.success) {
      throw new Error(result.error || 'Unknown error');
    }

    setTemporaryStatus('sent', 5000);

    formData.name = '';
    formData.email = '';
    formData.subject = '';
    formData.message = '';
  } catch (error: any) {
    setTemporaryStatus('error', 10000);
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="mx-auto max-w-2xl rounded-lg px-4 py-6 shadow shadow-gray-700">
    <div class="flex flex-col gap-8 font-mono text-sm">
      <div class="flex w-full flex-col gap-8 md:flex-row">
        <div class="relative w-full">
          <input v-model="formData.name" id="name" type="text" placeholder="name" class="peer input-text" required />
          <label for="name" class="label-box">
            {{ t('contact.form.name') }}
          </label>
        </div>

        <div class="relative w-full">
          <input v-model="formData.email" id="email" type="email" placeholder="email" class="peer input-text" required />
          <label for="email" class="label-box">
            {{ t('contact.form.email') }}
          </label>
        </div>
      </div>

      <div class="relative w-full">
        <input v-model="formData.subject" id="subject" type="text" placeholder="subject" class="peer input-text" />
        <label for="subject" class="label-box">
          {{ t('contact.form.subject') }}
        </label>
      </div>

      <div class="relative w-full">
        <textarea v-model="formData.message" id="message" placeholder="message" class="peer input-textarea" required></textarea>
        <label for="message" class="label-box">
          {{ t('contact.form.message') }}
        </label>
      </div>

      <button
        type="submit"
        :disabled="formStatus === 'loading'"
        class="group flex w-full items-center justify-center gap-2 bg-neutral-200 px-1 py-2 transition-colors duration-300 hover:bg-gray-700 hover:text-neutral-100 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-neutral-100 dark:bg-neutral-800"
      >
        {{ formStatus === 'loading' ? t('contact.form.loading') : t('contact.form.send') }}
        <span
          v-if="formStatus === 'loading'"
          class="inline-block h-3 w-3 animate-spin rounded-full border-2 border-neutral-100 border-t-transparent"
        ></span>
      </button>

      <span v-if="formStatus === 'error'" class="font-sans text-xs font-bold text-red-800">
        *{{ t('contact.form.error') }}*
      </span>
      <span v-if="formStatus === 'sent'" class="font-sans text-xs font-bold text-green-800">
        *{{ t('contact.form.sent') }}*
      </span>
    </div>
  </form>
</template>

<style scoped>
@reference '@/assets/css/main.css';

.input-text {
  @apply h-8 w-full border-b border-gray-700 bg-transparent placeholder-transparent focus:outline-none;
}

.input-textarea {
  @apply h-28 w-full border-b border-gray-700 bg-transparent placeholder-transparent focus:outline-none;
}

.label-box {
  @apply absolute -top-4 left-0 text-xs text-neutral-400 transition-all duration-300 peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-neutral-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-neutral-900 dark:text-neutral-600 dark:peer-placeholder-shown:text-neutral-600 dark:peer-focus:text-neutral-100;
}
</style>
