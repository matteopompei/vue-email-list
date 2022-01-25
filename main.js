let app = new Vue({
  el: "#app",
  data: {
    emailArr: [],
  },
  methods: {
    request: function () {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          console.log(response.data.response);
          this.emailArr.push(response.data.response)
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted: function() {
    for (let i=0; i < 10; i++) {
      this.request()
    }
  }
});
