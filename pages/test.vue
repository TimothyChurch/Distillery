<script setup>
const grain = reactive({
    name: '',
    vendor: '',
    price: 0,
    purchase_unit: '',
    price_per_lb: 0
})
const save = async() => {
    console.log(grain)
    await useFetch('/api/grain/create', {
        method: 'POST',
        body: grain,
    })
}
</script>

<template>
    <div class="grid grid-cols-3 gap-3 w-1/2 m-auto">
        <UFormGroup label="Name">
            <UInput v-model="grain.name" />
        </UFormGroup>
        <UFormGroup label="Vendor">
            <UInput v-model="grain.vendor" />
        </UFormGroup>
        <UFormGroup label="Price">
            <UInput v-model="grain.price" />
        </UFormGroup>
        <UFormGroup label="Purchase Unit">
            <UInput v-model="grain.purchase_unit" />
        </UFormGroup>
        <UFormGroup label="Price / Lb">
            <UInput v-model="grain.price_per_lb" />
        </UFormGroup>
        <div class="col-span-3">
            <button @click="save">Click Here</button>
        </div>
    </div>
</template>