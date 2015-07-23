// Clicking menu buttons (support funtions: menuButtonClicked, discardPressedMenuButtons, homeView)
$(document).ready(function(){
  $("#flagScreen").click(function(){
    if(!homeView){
      menuButtonClicked(3);
    }
  });
  $("#aboutButton").click(function(){
    menuButtonClicked(0);
  });
  $("#storiesButton").click(function(){
    menuButtonClicked(1);
  });
  $("#contactButton").click(function(){
    menuButtonClicked(2);
  });
});

function menuButtonClicked(choice){
  switch(choice){
    case 0://about
      if (homeView){
        $("#dependentTextHeadline").html(headlineTextArray[0]);
        $("#dependentText").html(contentTextArray[0]);
        $("#dependentText").show();
        $("#menuPanel").fadeToggle();
        $("#textBlock").slideDown();
        $("#flagScreen").css("z-index", "150");
        homeView =false;
      }
      else{
        getHomeView();
      }
      break;
    case 1://stories
      if (homeView){
        $("#dependentTextHeadline").html(headlineTextArray[1]);
        $("#dependentText").html(contentTextArray[1]);
        $("#dependentText").show();
        $("#menuPanel").fadeToggle();
        $("#textBlock").slideDown();
        $("#flagScreen").css("z-index", "150");
        homeView =false;
      }
      else{
        getHomeView();
      }
      break;
    case 2://contact
      if (homeView){
        $("#dependentTextHeadline").html(headlineTextArray[2]);
        $("#dependentText").html(contentTextArray[2]);
        $("#dependentText").show();
        $("#menuPanel").fadeToggle();
        $("#textBlock").slideDown();
        $("#flagScreen").css("z-index", "150");
        homeView =false;
      }
      else{
        getHomeView();
      }
      break;
    case 3://flagScreen (aka 'back' button)
      if(!homeView){
        getHomeView();
      }
      break;
  }
  fixTextSizes();
}

function getHomeView(){
  if (!homeView) {
    $("#dependentText").hide();
    $("#textBlock").slideUp();
    $("#menuPanel").fadeToggle();
    $("#flagScreen").css("z-index", "-10");
    homeView = true;
  }
}



function init(){
  uploadContent();
  homeView = true;
  $("#textBlock").hide();
  $("#flagScreen").css("z-index", "-10");
  fixSizes();
}

$(window).resize(function() {
  fixSizes();
});

function fixSizes(){
  w = $(document).width();//update w
  h = $(document).height();
  fixTextSizes();
  fixMobileUI();
}

function fixTextSizes(){
  if (w<1000){
    $(".text").css("font-size", "12px");
    $(".refTitle").css("font-size", "8px");
    $("#storiesButton").css("font-size", "14px");
    $("#aboutButton").css("font-size", "20px");
  }
  else{
    $(".text").css("font-size", "16px");//look for class text in uploadTexts()
    $(".refTitle").css("font-size", "12px");
    $("#storiesButton").css("font-size", "20px");
    $("#aboutButton").css("font-size", "30px");
  }
}

function fixMobileUI(){
  if (w<h){
    $("#dependentBackground").html(backgroundImageArray[1]);
    $("#textBlock").css("left", "15%");
    $("#textBlock").css("width", "70%");
    $(".socmediaButton").css("margin", "10px");
  }
  else{
    $("#dependentBackground").html(backgroundImageArray[0]);
    $("#textBlock").css("left", "25%");
    $("#textBlock").css("width", "50%");
    $(".socmediaButton").css("margin", "20px");
  }
}




function uploadContent(){
  //content text
  var aboutText = "<p class='text'>I&rsquo;m a self-starter, who balances business savviness with strong  interpersonal skills and an outgoing personality.  Grounded in disciplined analytical work, I use this as a foundation to spot trends and to build appropriate business strategies.</p>";
  var storiesText = "<p class='text'>Paul Cantrell</p><p class='refTitle'>Software Design and Development instructor,<br>Macalester College</p><p class='text'><a href='https://www.googledrive.com/host/0B9fduuddsx74fk5feUp4QzdHdWgxVDhRZHNsdU8wS05scnpSNW1EUEVtcjRWLVdvbGUxQVU/pauls_feedback.html' target='_blank'>[CLASS FEEDBACK]</a><br>&quot;You were the motor that drove your team. You always showed great initiative, and produced lots of output &mdash; even when you were busy with your capstone. It&rsquo;s not just a matter of experience or Android expertise; it&rsquo;s a matter of enthusiasm for doing things. Your team would not have accomplished what they did without your energy, and your teammates all recognize this!&quot;</p><br><br><p class='text'>Mark Holte</p><p class='refTitle'>Studio Art Department technical supervisor,<br>Macalester College</p><p class='text'><a href='https://www.googledrive.com/host/0B9fduuddsx74fk5feUp4QzdHdWgxVDhRZHNsdU8wS05scnpSNW1EUEVtcjRWLVdvbGUxQVU/Reference_Benas_Klastaitis.pdf' target='_blank'>[REFERENCE]</a><br>&quot;Benas has a wide variety of solid technical skills. He also has a friendly, positive, and professional attitude, a rare combination, of benefit to any position requiring work with a team.&quot;</p><br><br><p class='text'>John Vidal</p><p class='refTitle'>Environment Editor,<br>The Guardian</p><p class='text'><a  href='http://www.theguardian.com/environment/2010/dec/03/cancun-climate-change-summit-zapatistas' target='_blank'>[ARTICLE]</a><br>&quot;One of the most impressive groups here is a bunch called <a href='http://unfairplay.info/' target='_blank'>UNfairplay</a> made up of seven British, Canadian, German, Lithuanian and other young people. They have correctly identified that many developing countries with small teams of delegates cannot go to, or monitor, the hundreds of meetings and decisions that affect them. They are now unofficial go-betweens for countries such as Kiribati , Ghana and Gambia, rushing between meetings and reporting back. On Wednesday one of their team, Lena Horlein, brought cheers from a plenary meeting full of UN-hardened diplomats and today the group launches a report on the gross inequalities in the UN climate system.&quot;</p>";
  var contactText = "<p class='text'>Interested in working together?<br><br>hellobenas@gmail.com</p>";
  //headline text
  var headlineAbout = "<h2>About</h2>";
  var headlineStories = "<h2>What others say..</h2>";
  var headlineContact = "<h2>Contact</h2>";
  //diff size background images for diff size displays
  var background_wide = "<img class='backgroundPic' src='https://www.googledrive.com/host/0B9fduuddsx74fk5feUp4QzdHdWgxVDhRZHNsdU8wS05scnpSNW1EUEVtcjRWLVdvbGUxQVU/new1.jpg'>";
  var background_narrow = "<img class='backgroundPic' src='https://www.googledrive.com/host/0B9fduuddsx74fk5feUp4QzdHdWgxVDhRZHNsdU8wS05scnpSNW1EUEVtcjRWLVdvbGUxQVU/new3.jpg'>";
  //automatically global variables (because 'var' is not declared)
  contentTextArray = [aboutText, storiesText, contactText]; 
  headlineTextArray = [headlineAbout, headlineStories, headlineContact];
  backgroundImageArray = [background_wide, background_narrow];
}

