<template>
  <div class="container">
    <div class="card author">
      <header class="avatar-container">
        <img class="avatar" src="http://www.acatiimi.fi/2_2007/kuvat/2Juho_Lindman.jpg">
      </header>
      <div class="content">
        <div class="authorName"><p>{{ authorName }}</p></div>
        <div class="authorContact"><p>{{ authorContact }}</p></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        authorName: 'Juho Lindman',
        authorContact: 'juho.lindman@lindman.juho',
      }
    }
  }
</script>
