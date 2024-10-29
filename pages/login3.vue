<script setup lang="ts">
    definePageMeta({
        layout: 'none'
    })
    const page = ref('signin');
    const hiddenPassword = ref(true);
    const password = ref('');

    function togglePasswordVisibility() {
        hiddenPassword.value = !hiddenPassword.value;
    }

    function togglePage(value:string) {
        console.log(value);
        page.value = value;
    }
</script>

<template>
    <div class="w-screen h-screen custom-background">
        <img src="/img/8df1f30a4eb8c31ca0c8d32e6bef95cb.jpg" alt="background" class="h-screen object-cover">
        <div class="bg-white dark:bg-gray-800 w-screen sm:w-[34rem] border-l dark:border-gray-700  fixed right-0 top-0 h-screen px-10 py-20">
            <img src="/img/logoText.png" alt="logotext" class="h-10 fixed right-10 top-6">
            <div class="w-full h-full flex flex-col pt-16">
                <p class="text-center">Welcome to National Telecom</p>
                <div class="flex justify-center mt-10">
                    <div class="bg-slate-50 dark:bg-black rounded-full h-16 flex gap-4 p-3 w-11/12">
                        <button @click="togglePage('signin')" class="flex-1 h-full rounded-full" :class="{'bg-primary-app': page === 'signin'}">
                            Sign in
                        </button>
                        <button @click="togglePage('signup')" class="flex-1 h-full rounded-full" :class="{'bg-primary-app': page === 'signup'}">
                            Sign up
                        </button>
                    </div>
                </div>
                <form action="" class="mt-12">
                    <div class="flex flex-col gap-4">
                        <label for="username" class="text-sm">Username</label>
                        <UInput id="username" size="xl" placeholder="Enter your username" :ui="{ rounded: 'rounded-full' }"/>
                    </div>
                    <div class="mt-6 mb-4 flex flex-col gap-2">
                        <label for="password" class="text-sm">Password</label>
                        <div class="relative">
                            <UInput 
                                placeholder="Password" 
                                size="xl" 
                                :ui="{ rounded: 'rounded-full' }"
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
                    <div class="flex justify-center px-10 mt-12">
                        <UButton :ui="{ rounded: 'rounded-full' }" class="px-16 text-black border-[3px] border-primary-app-100 dark:border-primary-app-800" size="xl">
                            Sign in
                        </UButton>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>