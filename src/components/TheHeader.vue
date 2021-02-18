<template>
  <div>
    <b-navbar toggleable class="navbarColor">
      <b-navbar-brand href="/">Ma Pharmacie</b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-down"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/product">Ajouter un produit</b-nav-item>
          <b-nav-item href="/secours">1er Secours</b-nav-item>
          <b-nav-item href="/stock">Inventaire</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style scoped>
.navbarColor {
  background-color: #374873;
}
.navbar-light .navbar-brand {
  color: #feefec;
}
.navbar-light .navbar-brand:hover {
  color: #feefec;
}
.navbar-light .navbar-toggler {
  color: #feefec;
}
.navbar-light .navbar-nav .nav-link {
  color: #feefec;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: #feefec;
}
</style>
