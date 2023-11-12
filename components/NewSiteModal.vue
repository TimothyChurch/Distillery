<script setup>
    const isOpen = ref(false)
    onMounted(() => {isOpen.value = true})
</script>

<template>
    <div>
    <UModal v-model="isOpen">
        <UCard>
            <template #header class="text-center">
                <h1>
                Thank you for visiting!!
            </h1>
            </template>
            <p>Please excuse the current state of the site. The website is currently being build but will be continually improving!</p>
            <template #footer>
                <div class="flex flex-col items-center">
                <UButton @click="isOpen = false" class="px-auto">Close</UButton>
            </div>
            </template>
        </UCard>
    </UModal>
</div>
</template>