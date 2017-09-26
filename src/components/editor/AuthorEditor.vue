<template>
  <div class="card">
    <div class="avatar-container">
      <img class="avatar" src="http://www.acatiimi.fi/2_2007/kuvat/2Juho_Lindman.jpg">
    </div>
    <div class="content">
      <div class="authorName">{{ authorName }}</div>
      <div class="authorContact"> {{ authorContact }}</div>
      <div class="authorBlaha">{{ authorBlaha }}</div>
    </div>

  </div>

</template>

<script>
  export default{
    data () {
      return {
        authorName: 'Juho Lindman',
        authorContact: 'juho.lindman@lindman.juho',
        authorBlaha: 'Kitsch jean shorts health goth, austin la croix hoodie irony pabst VHS truffaut. Austin banjo cliche live-edge schlitz. Waistcoat copper mug meditation, vegan fam pop-up cray cred forage shabby chic selfies kale chips. Helvetica ugh williamsburg jean shorts post-ironic snackwave blue bottle.'
      }
    }
  }
</script>
