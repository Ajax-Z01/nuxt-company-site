<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#0f172a] text-white py-16">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Main grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <a href="/" class="flex items-center gap-3 mb-4">
            <img src="/svg/logo.svg" alt="Axial Construct" class="h-10 w-auto" />
            <span class="text-2xl font-extrabold tracking-wide select-none">
              PT <span class="text-emerald-400">Ajaxtreon</span>
            </span>
          </a>
          <p class="text-gray-400 leading-relaxed max-w-sm">
            Libero volutpat sed cras ornare arcu dui vivamus. Ac tortor dignissim convallis aenean et tortor at risus viverra.
          </p>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-xl font-semibold mb-6">Contacts</h4>
          <div class="flex items-start gap-3 mb-4">
            <i class="icon-call text-emerald-400 text-xl mt-1"></i>
            <div class="flex flex-col space-y-1 text-gray-400">
              <a href="tel:+13136453395" class="hover:text-emerald-400 transition">1 - 313 - 645 - 3395</a>
              <a href="tel:+14699702609" class="hover:text-emerald-400 transition">1 - 469 - 970 - 2609</a>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <i class="icon-location text-emerald-400 text-xl mt-1"></i>
            <div class="flex flex-col text-gray-400">
              <span>2047 Cyrus Viaduct</span>
              <span>East Jadynchester</span>
            </div>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-xl font-semibold mb-6">Company</h4>
          <ul class="space-y-3">
            <li>
              <a href="/about" class="flex items-center gap-2 hover:text-emerald-400 transition">
                <i class="icon-chevron_right"></i> About
              </a>
            </li>
            <li>
              <a href="/services" class="flex items-center gap-2 hover:text-emerald-400 transition">
                <i class="icon-chevron_right"></i> Services
              </a>
            </li>
            <li>
              <a href="/projects" class="flex items-center gap-2 hover:text-emerald-400 transition">
                <i class="icon-chevron_right"></i> Projects
              </a>
            </li>
            <li>
              <a href="/blog" class="flex items-center gap-2 hover:text-emerald-400 transition">
                <i class="icon-chevron_right"></i> Blog
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-xl font-semibold mb-4">Subscribe to Our News</h4>
          <p class="text-gray-400 mb-6 max-w-xs">
            Find out about the last days and the latest promotions of our Corporation.
          </p>
          <form class="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Email"
              required
              class="flex-grow rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              class="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-md px-6 py-2 flex items-center justify-center gap-2 transition"
            >
              <span>Subscribe</span>
              <i class="icon-paperplane"></i>
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom -->
      <div class="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 text-sm text-gray-400 space-y-4 md:space-y-0">
        <p>
          Merkulove © Axial Construct Template — All rights reserved &copy; {{ currentYear }}
        </p>
        <ul class="flex gap-6">
          <li><a href="#" aria-label="Facebook" class="hover:text-emerald-400 transition"><i class="icon-facebook text-xl"></i></a></li>
          <li><a href="#" aria-label="Instagram" class="hover:text-emerald-400 transition"><i class="icon-instagram text-xl"></i></a></li>
          <li><a href="#" aria-label="Twitter" class="hover:text-emerald-400 transition"><i class="icon-twitter text-xl"></i></a></li>
          <li><a href="#" aria-label="WhatsApp" class="hover:text-emerald-400 transition"><i class="icon-whatsapp text-xl"></i></a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.icon-call::before { content: '📞'; }
.icon-location::before { content: '📍'; }
.icon-chevron_right::before { content: '›'; }
.icon-paperplane::before { content: '✈️'; }
.icon-facebook::before { content: '📘'; }
.icon-instagram::before { content: '📸'; }
.icon-twitter::before { content: '🐦'; }
.icon-whatsapp::before { content: '💬'; }
</style>
