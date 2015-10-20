$(document).ready(function() { 
    var previousNumber;
    var quoteArray = [
      "\"Imagination is more important than knowledge\" - Albert Einstein",
      
      "\"Video games are bad for you? That's what they said about rock-n-roll.\" - Shigeru Miyamoto",
      
      "\"Video games are meant to be just one thing. Fun. Fun for everyone.\" - Satoru Iwata",
      
      "\"We shall go on to the end. We shall fight in France, we shall fight on the seas and oceans, we shall fight with growing confidence and growing strength in the air, we shall defend our island, whatever the cost may be. We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender\" - Winston Churchill",
      
      "\"Time passes, people move. Like a river’s flow, it never ends. A childish mind will turn to noble ambition. Young love will become deep affection. The clear water’s surface reflects growth.\"- Sheik, Ocarina of Time.",
      
      "\"Think left and think right and think low and think high. Oh, the thinks you can think up if only you try!\" - Dr. Suess",
      
      "\"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.\" - Bil Keane",
      
      "\"Those who do not remember the past are condemned to repeat it.\" - George Santayana",
      
      "\"They died hard, those savage men - like wounded wolves at bay. They were filthy, and they were lousy, and they stunk. And I loved them.\" - Douglas MacArthur",
      
      "\"The Internet is the most important single development in the history of human communication since the invention of call waiting.\" - Dave Barry"
    ];
        
    var getRandomNumber = function(){
        var min = 0;
        var max = 9;
        return Math.floor(Math.random() * (max - min)) + min; 
    }
    $("#ButtonGenerate").click(function(){
        var randomIndex = getRandomNumber();
        while(previousNumber === randomIndex){
          randomIndex = getRandomNumber();
        }
        previousNumber = randomIndex;
        var quoteText = quoteArray[randomIndex];
        $("#randomquotetextbox").text(quoteText);
    }); 
});