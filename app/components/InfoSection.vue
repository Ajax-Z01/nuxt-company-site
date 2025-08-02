<script setup lang="ts">
// statis, no logic
</script>

<template>
  <section class="info section-nopb py-16 bg-white">
    <div class="container max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="mb-8 max-w-3xl" data-aos="fade-right">
        <p
          class="text-sm font-semibold uppercase tracking-wider text-sky-500 flex items-center gap-2"
        >
          <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
            Information
        </p>
        <h2
          class="mt-2 text-4xl font-extrabold text-gray-900 leading-tight"
        >
          <span class="text-emerald-500">Contacts</span> information
        </h2>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-left">
        <div
          class="info_data-card bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-start gap-4 hover:shadow-lg transition-shadow"
        >
          <div class="wrapper flex items-center gap-4">
            <i class="icon-location text-emerald-500 text-3xl"></i>
            <h4 class="title text-xl font-semibold text-gray-900">Address</h4>
          </div>
          <span class="content text-gray-700 leading-relaxed">
            2047 Cyrus Viaduct East Jadynchester
          </span>
        </div>

        <div
          class="info_data-card bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-start gap-4 hover:shadow-lg transition-shadow"
          data-aos-delay="20"
        >
          <div class="wrapper flex items-center gap-4">
            <i class="icon-inbox text-emerald-500 text-3xl"></i>
            <h4 class="title text-xl font-semibold text-gray-900">Email</h4>
          </div>
          <span
            class="content flex flex-col space-y-1 text-emerald-600 text-base font-semibold"
          >
            <a href="mailto:info@construct.com" class="link hover:underline">
              info@construct.com
            </a>
            <a href="mailto:support@construct.com" class="link hover:underline">
              support@construct.com
            </a>
          </span>
        </div>

        <div
          class="info_data-card bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-start gap-4 hover:shadow-lg transition-shadow"
          data-aos-delay="40"
        >
          <div class="wrapper flex items-center gap-4">
            <i class="icon-call text-emerald-500 text-3xl"></i>
            <h4 class="title text-xl font-semibold text-gray-900">Phone</h4>
          </div>
          <span
            class="content flex flex-col space-y-1 text-emerald-600 text-base font-semibold"
          >
            <a href="tel:+13136453395" class="link hover:underline">
              1 - 313 - 645 - 3395
            </a>
            <a href="tel:+14699702609" class="link hover:underline">
              1 - 469 - 970 - 2609
            </a>
          </span>
        </div>
      </div>

      <!-- Map -->
      <div
        class="contacts_map h-96 rounded-lg overflow-hidden shadow-lg mt-16"
        data-aos="fade-up"
      >
        <iframe
          id="map"
          src="https://maps.google.com/maps?q=2047%20Cyrus%20Viaduct%20East%20Jadynchester&t=&z=13&ie=UTF8&iwloc=&output=embed"
          class="w-full h-full border-0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.link {
  text-decoration: none;
  transition: color 0.2s ease;
}
.link:hover {
  text-decoration: underline;
  color: #059669; /* emerald-500 */
}
.info_data-card:hover {
  /* subtle lift on hover */
  transform: translateY(-4px);
  transition: transform 0.3s ease;
}
</style>
