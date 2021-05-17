//document.ready and Ajax request made
//$(()=>{
  //  $.ajax({   // we use jquery to make Ajax calls
   //     url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen',
   //     success:(data)=>{
    //        console.log(data) // to display the actors information
    //    },
    //   error:()=>{
     //      console.log("404 error")
     //      //alert("wrong API key")
     //  }
        
   // })
//})
// promise

//$(()=>{
    //const promise = $.ajax({
      //  url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
   // })
    // .then method takes 2 arguments
    // first argument is for success
    // second argument is for failed promise
    //promise.then(
        // call back for success
     //   (data)=>{
       //     console.log(data)
       //  },
         // callback for unsuccesful promise
      //   ()=>{
       //      console.log("there was an error")
       //  }

   // )
//})
// datarendering to DOM throug ajax
//$(()=>{
  //  const promise = $.ajax({
   //  url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
  //  })
   // promise.then(
        // call back for success
       // (data)=>{
           
        //    $('#title').html(data.Title);
         //   $('#year').html(data.Year);
        //    $('#rating').html(data.Rated);
         //       console.log(data);
      //   },
         // callback for unsuccesful promise
    //    ()=>{
    //      console.log("there was an error")
     //    }

 //   )
//})

//$(()=>{
    // keeps page from going back to default when we click submit
  //  $('form').on('submit',()=>{
     //   event.preventDefault()
    //})

// variable to represent the users input
//let userInput = document.getElementById("movieName").value;
//console.log(userInput);
// keeps page from going back to default when we click submit
//$("form").on("submit", (event) => {
 // event.preventDefault();
 // userInput = document.getElementById("movieName").value;
 // getData();
//});
//var getData = () => {
 // const promise = $.ajax({
  //  url: "http://www.omdbapi.com/?apikey=53aa2cd6&t=" + userInput + "&",
  //});
  //    .then method takes two arguments
  // first argument is for success
  // second argument is for failed promise
  //promise.then(
    //    callback for success
  //  (data) => {
  //    console.log(data);
   //   $("#title").html(data.Title);
   //   $("#year").html(data.Year);
   //   $("#rating").html(data.Rated);
  //  },
  //).catch(()=>{
  //    console.log("error")
  //})
  //;
//};

// Asynchronous function

async function getMovies(){
  // create a variable to hold what we fetch aka the response
  const response = await fetch("http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen")
  //turn our response data into json data that can be read and manipulated
  const data = await response.json()
  console.log(response)
  console.log(data)
}
getMovies()