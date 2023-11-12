<script setup>
const links = [{
  label: 'Home',
  icon: 'i-heroicons-book-open',
  to: '/'
}, {
  label: 'Test',
  icon: 'i-simple-icons-stackblitz',
  to: '/test'
}, {
  label: 'Roadmap',
  icon: 'i-heroicons-academic-cap',
  to: '/roadmap'
}, {
  label: 'Pro',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/pro',
  children: [{
    label: 'Features',
    to: '/pro#features',
    exactHash: true,
    icon: 'i-heroicons-beaker',
    description: 'Discover all the features of Nuxt UI Pro.'
  }, {
    label: 'Pricing',
    to: '/pro#pricing',
    exactHash: true,
    icon: 'i-heroicons-credit-card',
    description: 'A simple pricing, for solo developers or teams.'
  }, {
    label: 'Guide',
    to: '/pro/guide',
    icon: 'i-heroicons-book-open',
    description: 'Learn how to use Nuxt UI Pro in your app.'
  }, {
    label: 'Components',
    to: '/pro/components',
    icon: 'i-heroicons-cube-transparent',
    description: 'Discover all the components available in Nuxt UI Pro.'
  }]
}, {
  label: 'Releases',
  icon: 'i-heroicons-rocket-launch',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]
</script>

<template>
    <div  class="max-w-screen">
            <img src="/images/logo.png" alt="Galveston Distilling Company" class="h-16" />
      </div>
</template>
