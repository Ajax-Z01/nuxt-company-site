<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-blue-600 text-white shadow p-4">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">PT Awesome Company</h1>
        <ul class="flex gap-4 text-gray-700">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/services">Services</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main class="flex-1 container mx-auto p-6">
      <slot />
    </main>

    <footer class="bg-gray-100 p-4 text-center text-sm text-gray-500">
      &copy; 2025 PT Awesome Company. All rights reserved.
    </footer>
  </div>
</template>
