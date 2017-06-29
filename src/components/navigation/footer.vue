<template>
  <v-footer class="navigationFooter">
	<div class="content-container">
		<v-spacer></v-spacer>
		<div>© {{ new Date().getFullYear() }} Cars.com All rights reserved.</div>
	</div>
  </v-footer>
</template>

<script>
export default {
  name: 'navigationFooter',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.navigationFooter
 height auto
ul li
 list-style none
</style>
