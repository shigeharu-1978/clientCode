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
      minlength: 7,
      maxlength: 9,
      digits: true
    }
  }
})
