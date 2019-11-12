<template>
  <nav id="Nav-Bar">
    <div class="nav-wrapper">
    
      <a href="#" class="brand-logo" id="Header-Logo">Dashloha</a>
      <ul class="right hide-on-med-down">
        <template v-for="items in links">
          <li :key="items.text">
            <a :href="items.link">{{items.text}}</a>
          </li>
        </template>
      </ul>
    
    </div>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {text:'Sign Up', link:'#'},
        {text:'About Us',link:'#'},
        {text:'Terms & Conditions',link:'#'}
      ]
    }
  }
}
</script>

<style scoped>
  #Header-Logo {
    margin-left: 1rem;
  }

  nav {
    background-color: rgba(0,0,0,0);
    box-shadow: none;
    position: fixed;
  }
</style>