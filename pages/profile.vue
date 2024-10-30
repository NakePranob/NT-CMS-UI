<template>
    <div class="w-full pb-16">
        <div class="flex  gap-4 -mt-[1px] justify-end">
            <ScreenOptions/>
            <MenuHelp/>
        </div>
        <div class="mb-8">
            <h1 class="text-3xl font-semibold">Profile</h1>
        </div>
        <form action="">
            <div class="flex flex-col gap-y-8">
                <h4 class="font-semibold text-lg">Personal Option</h4>
                <div class="flex md:items-center flex-col md:flex-row">
                    <p class="w-44 lg:w-80">Visual Editor</p>
                    <UCheckbox label="Disable the visual editor when writing" class="w-full md:w-96" />
                </div>
                <div class="flex md:items-center flex-col md:flex-row">
                    <p class="w-44 lg:w-80">Syntax Highlighting</p>
                    <UCheckbox label="Disable syntax highlighting when edit code" class="w-full md:w-96" />
                </div>
                <div class="flex md:items-center flex-col md:flex-row">
                    <p class="w-44 lg:w-80">Keyboard Shortcuts</p>
                    <UCheckbox label="Enable keyboard shortcuts for comment moderation." class="w-full md:w-96" />
                </div>
                <div class="flex md:items-center flex-col md:flex-row">
                    <p class="w-44 lg:w-80">Language</p>
                    <USelect v-model="languageSelected" :options="language" class="w-full md:w-96" />
                </div>
                <h4 class="font-semibold text-lg">Name</h4>
                <div class="flex md:items-center flex-col md:flex-row">
                    <p class="w-44 lg:w-80">Username</p>
                    <UInput placeholder="Dev Forword Co,. Ltd" class="w-full md:w-96 me-2" />
                    <p>Username cannot be Changed.</p>
                </div>
                <div class="flex md:items-center flex-col md:flex-row">
                    <p class="w-44 lg:w-80">First Name</p>
                    <UInput placeholder="Dev" class="w-full md:w-96" />
                </div>
                <div class="flex md:items-center flex-col md:flex-row">
                    <p class="w-44 lg:w-80">Last Name</p>
                    <UInput placeholder="Forword" class="w-full md:w-96" />
                </div>
                <h4 class="font-semibold text-lg">Contract Info</h4>
                <div class="flex md:items-center flex-col md:flex-row">
                    <p class="w-44 lg:w-80">Email</p>
                    <div>
                        <UInput class="w-full md:w-96" />
                        <span>If you change this, an email will be sent at your new address to confirm it. The new
                            address will not become active until confirmed </span>
                    </div>
                </div>
                <div class="flex md:items-center flex-col md:flex-row">
                    <p class="w-44 lg:w-80">Website</p>
                    <UInput class="w-full md:w-96" />
                </div>
                <h4 class="font-semibold text-lg">About Yourself</h4>
                <div class="flex flex-col md:flex-row">
                    <p class="w-44 lg:w-80">Biographical Info</p>
                    <div>
                        <UTextarea class="w-full md:w-96" />
                        <span>Share a little biographical to fill out your profile. This May Show publicly</span>
                    </div>
                </div>
                <div class="flex md:items-center flex-col md:flex-row">
                    <p class="w-44 lg:w-80">Profile Picture</p>
                    <label for="dropzone-file" class="flex justify-center items-center w-20 h-20 
                bg-slate-100 dark:bg-gray-800 rounded">
                        <UIcon name="i-heroicons-photo" class="w-8 h-8 opacity-50" />
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div>
                <div class="flex md:items-center flex-col md:flex-row">
                    <p class="w-44 lg:w-80">New Password</p>
                    <span class="py-1 px-3 bg-primary-app rounded">
                        Set New Password
                    </span>
                </div>
                <div class="flex md:items-center flex-col md:flex-row">
                    <p class="w-44 lg:w-80">Session</p>
                    <UInput placeholder="DEV" class="w-full md:w-96" />
                </div>
                <div>
                    <UButton type="submit" :ui="{ rounded: 'rounded' }" leading-icon="i-heroicons-clipboard-document-check"
                        class="text-black border-[3px] border-primary-app-100 dark:border-primary-app-800">
                        Save Setting
                    </UButton>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
    const language = ['Site Default', 'English', 'Thailand']
    const languageSelected = ref(language[0])
</script>