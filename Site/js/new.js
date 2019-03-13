$('form').validate({
  rules: {
    namae: {
      required: true
    },
    mail: {
      required: true,
      email: true
    },
    tel: {
      digits: true
    }
  }
})
