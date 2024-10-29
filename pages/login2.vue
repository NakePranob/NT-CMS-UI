<script setup lang="ts">
    definePageMeta({
        layout: 'none'
    })

    const hiddenPassword = ref(true);
    const password = ref('');

    function togglePasswordVisibility() {
        hiddenPassword.value = !hiddenPassword.value;
    }
</script>

<template>
    <div class="w-screen h-screen custom-background py-20 px-20 flex justify-end">
        <img src="/img/logo.png" alt="logo" class="fixed top-10 left-10">
        <div class="h-full bg-white dark:bg-gray-800 w-96 h-11/12 rounded-xl flex flex-col p-6">
            <p>Welcome!</p>
            <h1 class="text-3xl font-medium mt-8 mb-4">
                Sign in to
            </h1>
            <p>Lorem, ipsum dolor sit</p>
            <form action="" class="mt-12">
                <div class="flex flex-col gap-2">
                    <label for="username">Username</label>
                    <UInput id="username" size="xl" placeholder="Enter your username"/>
                </div>
                <div class="mt-6 mb-4 flex flex-col gap-2">
                    <label for="password">Password</label>
                    <div class="relative">
                        <UInput 
                            placeholder="Password" 
                            size="xl" 
                            :type="hiddenPassword ? 'password' : 'text'" 
                            :value="password" 
                            @input="password = $event" 
                        />
                        <span @click="togglePasswordVisibility" class="cursor-pointer text-gray-500 absolute dark:text-gray-400 z-50 top-1/2 right-2 -translate-y-1/2 flex justify-center items-center">
                            <UIcon 
                                :name="hiddenPassword ? 'i-heroicons-eye-20-solid' : 'i-heroicons-eye-slash-20-solid'" 
                                class="w-5 h-5" 
                            />
                        </span>
                    </div>
                </div>
                <div class="flex justify-between opacity-70 mt-2 mb-6">
                    <UCheckbox label="Remember me" />
                    <a href="">forgot password?</a>
                </div>
                <UButton :ui="{ rounded: 'rounded' }" block size="xl" class="mt-10 border-[3px] border-primary-app-100">Sign in</UButton>
            </form>
            <div class="flex-1 flex items-center justify-center opacity-60">
                don'y have an Account ? <a href="" class="text-primary-app ms-2">Sign up</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .custom-background {
        @apply bg-[url('/img/35c2062142b1b36751af3a22c8db524b.png')];
    }
</style>