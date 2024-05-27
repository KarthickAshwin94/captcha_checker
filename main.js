      // Now we can generate a random number and we can display that random number and when the user enteres the random number displayed properly we can verify and give alert accordingly.

      var text_one=document.getElementById("number");
      var input1=document.getElementById("input1");
      var submit1=document.getElementById("submit1");
      
      // now generate the random number and display it 
      var str1="";
      var characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      // now we have generated a single digit. generate 6 digits and concatenate it to a string
      for(var i=0;i<6;i++)
      {
          var rand=Math.floor(Math.random()*characters.length);
          str1+=characters.charAt(rand);
      }
      function generate()
      {
          str1="";
      // now we have generated a single digit. generate 6 digits and concatenate it to a string
      for(var i=0;i<6;i++)
      {
          var rand=Math.floor(Math.random()*characters.length);
          str1+=characters.charAt(rand);
      }
      }
      text_one.innerHTML=`<h1>The Random number is ${str1}</h1>`
      // now get the value of input field
      submit1.addEventListener("click",function(){
          console.log("Entered here!");
          var val1=input1.value;
          if(val1==str1)
          {
              alert("Captcha Verification Successful");
              generate();
              text_one.innerHTML=`<h1>The Random number is ${str1}</h1>`
              input1.value="";
      
          }
          else{
              alert("Captcha Verification failed! Please try again later");
              generate();
              text_one.innerHTML=`<h1>The Random number is ${str1}</h1>`
          }
      
      })
      
      