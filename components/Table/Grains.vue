<script setup>
  const grains=ref('')
  grains.value = await useFetch('/api/grain')
  
  const columns = [{
  key: 'name',
  label: 'Name'
},
{
    key: 'vendor',
    label: 'Vendor'
},
{
    key: 'price',
    label: 'Purchase Price'
},
{
    key: 'purchase_unit',
    label: 'Purchase Unit'
},
{
    key: 'price_per_lb',
    label: 'Price per lb'
},
{
  key: 'actions'
}]
  const items = (row) => [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => console.log('Edit', row._id)
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid'
  }]
]
</script>

<template>
  <div class="flex flex-col">
    <UTable
      :loading="grains.pending"
      :rows="grains.data" 
      :columns="columns"
      :sort="{ column: 'name'}"
    >
    <template #actions-data="{row}">
      <UDropdown :items="items(row)">
        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
      </UDropdown>
    </template>
    </UTable>
  </div>
</template>