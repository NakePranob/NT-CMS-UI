<template>
    <div class="w-full">
        <form action="">
            <div class="flex items-center justify-between mb-8">
                <h1 class="text-3xl font-semibold">General Setting</h1>
                <UButton :ui="{ rounded: 'rounded' }" leading-icon="i-heroicons-clipboard-document-check"
                    class="text-black border-[3px] border-primary-app-100 dark:border-primary-app-800">
                    Save Setting
                </UButton>
            </div>
            <div class="flex flex-col gap-y-8">
                <div class="flex md:items-center flex-col md:flex-row">
                    <p class="w-44 lg:w-80">Site Title</p>
                    <UInput placeholder="Dev Forword Co,. Ltd" class="w-full md:w-96" />
                </div>
                <div class="flex md:items-center flex-col md:flex-row">
                    <p class="w-44 lg:w-80">Tagline</p>
                    <UInput class="w-full md:w-96" />
                </div>
                <div class="flex md:items-center flex-col md:flex-row">
                    <p class="w-44 lg:w-80">Tagline</p>
                    <div class="flex items-center justify-center md:w-[30rem]">
                        <label for="dropzone-file"
                            class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <UIcon name="i-heroicons-cloud-arrow-up" class="w-8 h-8 mb-3"/>
                                <p class="mb-2 text-sm text-primary-app">
                                    <span class="text-black dark:text-white">Drag your file(s) or</span> 
                                    browse
                                </p>
                                <p class="text-gray-500">
                                    It should be square and at least 512x512 px
                                </p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div>

                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
const fileInput = ref(null);

const handleFileUpload = (event) => {
    // ทำการอัปโหลดไฟล์ที่นี่
    const file = event.target.files[0];
    // ...
};
</script>