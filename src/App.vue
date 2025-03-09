<template>
  <div class="min-h-screen bg-base-200 flex justify-center">
    <div class="container max-w-4xl mx-auto px-6">
      <!-- Navbar -->
      <nav class="navbar bg-base-100 shadow-lg">
        <div class="container mx-auto">
          <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
              <li><router-link to="/" class="btn btn-ghost">Home</router-link></li>
              <li><router-link to="/prompts" class="btn btn-ghost">Prompts</router-link></li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="container mx-auto flex-1">
        <router-view></router-view>
      </main>

      <!-- Footer (Optional) -->
      <footer class="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>© 2025 Large English. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
