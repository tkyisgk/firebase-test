<template lang="pug">

  .section
    .container
      .title 詳細

      table.table.is-bordered
        thead
          tr
            th Name
            th Age
        tbody
          tr
            td {{ name }}
            td {{ age }}

      button.button.is-link(
        type="submit"
        @click="handleBack"
      ) Back

</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  components: { },
  data () {
    return {
      name: null,
      age: null
    }
  },
  mounted () {
    setTimeout(() => {
      if (this.$store.state.user.user === null) this.$router.push('/')

      this.getData()
    })
  },
  methods: {
    getData () {
      const db = firebase.firestore()
      const docRef = db.collection('results').doc(this.$store.state.user.user.email)

      docRef.get().then((doc) => {
        if (doc.exists) {
          this.name = doc.data().name
          this.age = doc.data().age
        }
      })
    },
    handleBack () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus">

</style>
