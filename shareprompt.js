(function ($) {
  // DOC READY
  $(function () {

    var tsval;
    var fbval;
    var os;
    var cs;

    // when a first level button (share on twitter/share on facebook) is clicked, call generate_form1()
    $('.generate-form1').on('click',function(e){
      e.preventDefault();
      generate_form1(this);
    });

    function generate_form1(btn) {
      if (btn.id == "Twitter") {
        $('p.socialmediaselect').hide();
        $('p.hidden1').show();
      } else if (btn.id == "Facebook") {
        $('p.socialmediaselect').hide();
        $('p.hidden2').show();
      }
    }



    // when a second level twitter button is clicked, call show_twitter_prompt()
    $('.show-twitter-prompt').on('click',function(e){
      e.preventDefault();
      show_twitter_prompt(this);
    });

    function show_twitter_prompt(btn) {
      $("p.hidden1").hide();
      $("p.hidden3").show();
      tsval = btn.name;
      $('.business-type').text(tsval);
      main_text_change(tsval);
    }




    // when a second level facebook button is clicked, call show_facebook_prompt
    $('.show-facebook-prompt').on('click',function(e){
      e.preventDefault();
      show_facebook_prompt(this);
    });

    function show_facebook_prompt(btn) {
      $("p.hidden2").hide();
      $("p.hidden4").show();
      fbval = btn.name;
      $('.business-type').text(fbval);
      main_text_change2(fbval);
    }





    function main_text_change(tsval) {
      if (tsval == "Startup") {
        os = 'Shout out to';
        cs = 'for helping our startup thrive';
      }
      else if (tsval == "Small Business") {
        os = 'Thanks to';
        cs = 'for helping our small business succeed';
      }
      else if (tsval == "Mid-Sized Business") {
        os = 'We love working with our friends at';
        cs = '';
      }
      else if (tsval == "Large Company") {
        os = 'We couldn’t do what we do w/out #smallbiz partners like';
        cs = '';
      }

      // set the variables to the text
      $('.osval').text(os);
      $('.csval').text(cs);
    }

    function main_text_change2(fbval) {
      if (fbval == "Startup") {
        os = 'Thanks to';
        cs = 'for helping our team do what we do best every ';
      }
      else if (fbval == "Small Business") {
        os = 'Our #smallbiz counts on #bigbiz partners like';
        cs = 'to succeed.';
      }
      else if (fbval == "Mid-Sized Business") {
        os = 'Shout out to our friends at';
        cs = 'Thanks for supporting our company!';
      }
      else if (fbval == "Large Company") {
        os = 'A big thank you to all our small business partners, including';
        cs = '';
      }

      $('.osval').text(os);
      $('.csval').text(cs);
    }


    // when the .fill-twitter-prompt button is clicked, call fill_twitter_prompt()
    $('.fill-twitter-prompt').on('click',function(e){
      e.preventDefault();
      fill_twitter_prompt();
    });

    //Generate the Twitter Pop Up
    function fill_twitter_prompt() {
      $("p.hidden3").hide();
      $("p.hidden6").show();
      var prompt_para = document.getElementById ('tprompt');
      var name1 = $('#name1').val();
      var name2 = $('#name2').val();
      if (name2 != '') {
        name2 = ' and @' + name2;
      }
      var textvalue = os.replace(/#/g, '%23') + ' @' + name1 + name2 + ' ' + cs.replace(/#/g, '%23') + ' %23BizUnited ' + ' %23PassItOn ' + 'www.uschamber.com/bizunited';
      prompt_para.innerHTML = textvalue;
      window.open('https://twitter.com/intent/tweet?text=' + textvalue + '&source=clicktotweet&related=clicktotweet', '', 'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no,width=700,height=300');
      return false;
    }


    // when the .fill-facebook-prompt button is clicked, call fill_facebook_prompt()
    $('.fill-facebook-prompt').on('click',function(e){
      e.preventDefault();
      fill_facebook_prompt();
      console.log('fb fired 1');
    });

    //Generate the Facebook pop uo
    function fill_facebook_prompt() {
      $("p.hidden4").hide();
      $("p.hidden6").show();
      var fprompt_para = document.getElementById ('fprompt');
      var fname1 = $('#facename1').val();
      var fname2 = $('#facename2').val();
      if (fname2 != '') {
        fname2 = ' and @' + fname2;
      }
      var textvalue2 = os.replace(/#/g, '%23') + ' @' + fname1 + fname2 + ' ' + cs.replace(/#/g, '%23');
      window.open('https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&hashtag=%23BizUnited&href=https%3A%2F%2Fuschamber.com%2Fbizunited&quote= ' + textvalue2, '', 'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no,width=700,height=300');
      return false;
    }

    $('.add-name2').click(function () {
      $('.name2').show();
      $('.add-name2').hide();
    });

  });
})
(jQuery);

    
	
