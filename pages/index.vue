<template lang="pug">

  .section
    .container
      .title ログイン

      .field
        label.label Email
        .control.has-icons-left.has-icons-right
          input.input(
            type="email"
            placeholder="Email"
            v-model="formData.email"
            :class="{ 'is-danger': formInvalid.email }"
          )
          span.icon.is-small.is-left
            font-awesome-icon(:icon="['fas', 'envelope']")
          span.icon.is-small.is-right
            font-awesome-icon(:icon="['fas', 'exclamation-triangle']")
        p.help.is-danger(v-if="formInvalid.email") This email is invalid

      .field
        label.label Password
        .control.has-icons-left.has-icons-right
          input.input(
            type="password"
            placeholder="Password"
            v-model="formData.password"
            :class="{ 'is-danger': formInvalid.password }"
          )
          span.icon.is-small.is-left
            font-awesome-icon(:icon="['fas', 'key']")
          span.icon.is-small.is-right
            font-awesome-icon(:icon="['fas', 'exclamation-triangle']")
        p.help.is-danger(v-if="formInvalid.password") This email is invalid

      .field.is-grouped
        .control
          button.button.is-link(
            type="submit"
            @click="handleSubmit"
          ) Submit

</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  components: { },
  data () {
    return {
      formData: {
        email: null,
        password: null
      },
      formInvalid: {
        email: false,
        password: false
      }
    }
  },
  mouted () {
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.formData.email, this.formData.password).then((user) => {
        this.$store.commit('SET_USER', user)
        this.$router.push('detail')
      }).catch((error) => {
        if (error) alert('ログイン失敗')
      })
    },
    handleSubmit () {
      this.login()
    }
  }
}
</script>

<style lang="stylus">

</style>
