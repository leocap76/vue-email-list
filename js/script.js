// Esercizio: Generare 10 email
 // e stamparle a schermo,
//  utilizzando Vue

var app = new Vue({

   el:"#root",

   data: {
      emailList: [],
      Emails: 10,
   },

   mounted: function() {
     for(i=0; i<10; i++) {
         axios
           .get('https://flynn.boolean.careers/exercises/api/random/mail')
           .then((response) => {
             const result = response.data;
               console.log(response.data);
               // document.write(result);
               this.emailList.push(result);
           }
         )
       }
    }
});



      // VUE_____________________
      // axios
      // .get('https://flynn.boolean.careers/exercises/api/random/mail')
      // .then(function (response) {
      // const result = response.data;



     // jQUERY___________________
// $.ajax(
//     {
//     url: "https://flynn.boolean.careers/exercises/api/random/mail",
//     method: "GET",
//     success: function (data, stato) {
//     $("#risultati").html(data);
//     },
//     error: function (richiesta, stato, errori) {
//     alert("E' avvenuto un errore. " + errore);
//     }
// });
