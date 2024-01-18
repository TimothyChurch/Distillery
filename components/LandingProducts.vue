<script setup>
const products = [
  {
    id: 1,
    name: 'Vodka No. 1',
    price: '$20',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    id: 2,
    name: 'Rum No. 1',
    price: '$25',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    id: 3,
    name: 'Triple Sec',
    price: '$22',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    id: 4,
    name: 'Gin No. 1',
    price: '$25',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    id: 4,
    name: 'Gin No. 2',
    price: '$25',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    id: 4,
    name: 'Gin No. 3',
    price: '$25',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    id: 4,
    name: 'Absinthe No. 1',
    price: '$35',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
]
</script>

<template>
    <div class="bg-white">
    <div class="py-4 sm:py-8 lg:mx-auto lg:max-w-7xl lg:px-8">
      <div class="flex items-center justify-between px-4 sm:px-6 lg:px-0">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Trending products</h2>
        <a href="#" class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
          See everything
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div class="relative mt-8">
        <div class="relative -mb-6 w-full overflow-x-auto pb-6">
          <ul role="list" class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0">
            <li v-for="product in products" :key="product.id" class="inline-flex w-64 flex-col text-center lg:w-auto">
              <div class="group relative">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                  <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <div class="mt-6">
                  <h3 class="mt-1 font-semibold text-gray-900">
                    <a :href="product.href">
                      <span class="absolute inset-0" />
                      {{ product.name }}
                    </a>
                  </h3>
                  <p class="mt-1 text-gray-900">{{ product.price }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex px-4 sm:hidden">
        <a href="#" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
          See everything
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  </div>
</template>