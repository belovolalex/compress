export const showErrorNotifications = {
  methods: {
    showErrorNotifications(errors) {
      errors.forEach(error => {
        this.$notify({
          type: 'error',
          group: 'errors',
          text: error
        })
      })
    }
  }
}