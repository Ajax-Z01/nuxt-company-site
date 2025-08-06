<template>
  <section class="py-20 bg-white dark:bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header (full width) -->
      <div class="mb-8 max-w-3xl">
        <p class="text-sm font-semibold uppercase tracking-wider text-sky-500 flex items-center gap-2">
          <span class="block w-6 h-0.5 bg-yellow-500"></span>
          Contact us
        </p>
        <h2 class="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
          <span class="text-emerald-500">Contacts</span> information
        </h2>
      </div>

      <!-- Two Columns -->
      <div class="flex flex-col md:flex-row gap-12 items-stretch">
        <!-- Left: Contact Info -->
        <div class="flex-1 max-w-3xl">
          <p class="mb-4 text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
            Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Eu volutpat odio facilisis
            mauris sit amet massa. Sit amet est placerat in egestas.
          </p>
          <ul class="space-y-8">
            <li>
              <p class="text-base font-semibold text-gray-900 dark:text-white">Address</p>
              <p class="text-gray-700 dark:text-gray-300">2047 Cyrus Viaduct East Jadynchester</p>
            </li>
            <li>
              <p class="text-base font-semibold text-gray-900 dark:text-white">Email</p>
              <div class="flex flex-col">
                <a href="mailto:info@construct.com" class="text-emerald-400 hover:underline">info@construct.com</a>
                <a href="mailto:support@construct.com" class="text-emerald-400 hover:underline">support@construct.com</a>
              </div>
            </li>
            <li>
              <p class="text-base font-semibold text-gray-900 dark:text-white">Phone</p>
              <div class="flex flex-col">
                <a href="tel:+13136453395" class="text-emerald-400 hover:underline">1 - 313 - 645 - 3395</a>
                <a href="tel:+14699702609" class="text-emerald-400 hover:underline">1 - 469 - 970 - 2609</a>
              </div>
            </li>
          </ul>

          <!-- Socials -->
          <ul class="flex gap-4 mt-10">
            <li>
              <a href="#" aria-label="Facebook" class="text-gray-500 dark:text-gray-400 hover:text-emerald-500 transition text-xl">
                <i class="icon-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram" class="text-gray-500 dark:text-gray-400 hover:text-emerald-500 transition text-xl">
                <i class="icon-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter" class="text-gray-500 dark:text-gray-400 hover:text-emerald-500 transition text-xl">
                <i class="icon-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" aria-label="WhatsApp" class="text-gray-500 dark:text-gray-400 hover:text-emerald-500 transition text-xl">
                <i class="icon-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>

        <!-- Right: Map -->
        <div class="flex-1 w-full h-96 md:h-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.115429386898!2d-122.41941528468195!3d37.77492977975921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5c9a5f41%3A0x40f914e88d5fd2a!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1712952028940!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style="border:0"
            :allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
