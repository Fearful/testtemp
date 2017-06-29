<template>
  <v-menu :left="menuLeft" :bottom="menuBottom" offset-y :origin="menuOrigin" transition="v-slide-y-transition" class="navItemMenu">
    <v-btn outline light slot="activator">
      {{ action }} <v-icon light>arrow_drop_down</v-icon>
    </v-btn>
    <v-list>
      <v-list-item style="display:flex" class="left-border-children">
        <div style="flex:1" v-for="item in itemArray" :key="item.id">
          <v-list-tile v-for="subitem in item" :key="subitem.action">
            <v-list-tile-title>{{ subitem.action }}</v-list-tile-title>
          </v-list-tile>
        </div>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'NavItemMenu',
  props: ['menuOrigin', 'menuBottom', 'menuLeft', 'action', 'contents', 'rows', 'pra'],
  data () {
    return {
      itemArray: []
    }
  },
  created () {
    var tempArray = this.contents
    for (var i = 0; i < this.rows; i++) {
      if (this.pra === 0 || typeof this.pra === 'string') this.pra = [1]
      if (this.pra.length === 1 && this.rows > this.pra.length) {
        for (var y = this.rows; y >= 0; y--) {
          this.pra.push([this.pra[0]])
        }
      }
      var newColumn = []
      for (var e = this.pra[i] - 1; e >= 0; e--) {
        newColumn.push(tempArray[0])
        tempArray.splice(0, 1)
      }
      this.itemArray.push(newColumn)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.left-border-children
 div:not(:first-child)
  border-left 1px solid #b2b2b2
</style>
