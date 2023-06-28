$(document).ready(function () {
    var time = new Date().getTime();
    var date = new Date(time);
    $("#timeNow").html(date.getFullYear());

    $("#hoverlinkedin").on('mouseover', function() {
        $("#hoverlinkedin").attr('src','../content/linkedin_hover.png')
    });
    $("#hoverlinkedin").on('mouseout', function() {
        $("#hoverlinkedin").attr('src','../content/linkedin.png')
    });

    $("#hovergithub").on('mouseover', function() {
        $("#hovergithub").attr('src','../content/github_hover.png')
    });
    $("#hovergithub").on('mouseout', function() {
        $("#hovergithub").attr('src','../content/github.png')
    });

    $("#hoverfacebook").on('mouseover', function() {
        $("#hoverfacebook").attr('src','../content/facebook_hover.png')
    });
    $("#hoverfacebook").on('mouseout', function() {
        $("#hoverfacebook").attr('src','../content/facebook.png')
    });

    $("#hoverinstagram").on('mouseover', function() {
        $("#hoverinstagram").attr('src','../content/instagram_hover.png')
    });
    $("#hoverinstagram").on('mouseout', function() {
        $("#hoverinstagram").attr('src','../content/instagram.png')
    });

    $("#hoverhome").on('mouseover', function() {
        $("#hoverhome").attr('src','../content/b_white.png')
    });
    $("#hoverhome").on('mouseout', function() {
        $("#hoverhome").attr('src','../content/b.png')
    });
    var pNum = 1;
    $(".top").click(function (){
        $(this).parent('div').fadeOut();
        $("#projectLogoDesigns").fadeOut();
        $("#projectPortWeb").fadeOut();
        $("#projectAvtokamp").fadeOut();
        setTimeout(function(){
            $("#allCards").fadeIn();
        }, 390);

    })
    $("#avtokamp").click(function (){
        $("#allCards").fadeOut();
        setTimeout(function(){
            $("#projectAvtokamp").fadeIn();
            }, 390);
        pNum = 1;
    })
    $("#weather").click(function (){
        $("#allCards").fadeOut();
        setTimeout(function(){
            $("#projectWeather").fadeIn();
        }, 390);
        pNum = 2;
    })
    $("#music").click(function (){
        $("#allCards").fadeOut();
        setTimeout(function(){
            $("#projectMusic").fadeIn();
        }, 390);
        pNum = 3;
    })
    $("#logos").click(function (){
        $("#allCards").fadeOut();
        setTimeout(function(){
            $("#projectLogoDesigns").fadeIn();
        }, 390);
        pNum = 4;
    })
    $("#tictac").click(function (){
        $("#allCards").fadeOut();
        setTimeout(function(){
            $("#tictactoe").fadeIn();
        }, 390);
        pNum = 5;
    })
    $("#portweb").click(function (){
        $("#allCards").fadeOut();
        setTimeout(function(){
            $("#projectPortWeb").fadeIn();
        }, 390);
        pNum = 6;
    })


    $(".prev").click(function (){
        if (pNum==1)
            pNum=6;
        else {
            pNum--;
        }
        checkpNum();
    })
    $(".next").click(function (){
        if (pNum==6)
            pNum=1;
        else {
            pNum++;
        }
        checkpNum();
    })


    function checkpNum(){
        console.log("Slide number:"+pNum)
        if (pNum==1){
            //close remaining views
            $("#projectLogoDesigns").fadeOut();
            $("#projectPortWeb").fadeOut();
            $("#tictactoe").fadeOut();
            $("#projectWeather").fadeOut();
            $("#projectMusic").fadeOut();
            //open actual view
            setTimeout(function(){
                $("#projectAvtokamp").fadeIn();
            }, 390);
        }

        if (pNum==2){
            //close remaining views
            $("#projectLogoDesigns").fadeOut();
            $("#projectAvtokamp").fadeOut();
            $("#projectPortWeb").fadeOut();
            $("#tictactoe").fadeOut();
            $("#projectMusic").fadeOut();
            //open actual view
            setTimeout(function(){
                $("#projectWeather").fadeIn();
            }, 390);
        }

        if (pNum==3){
            //close remaining views
            $("#projectLogoDesigns").fadeOut();
            $("#projectAvtokamp").fadeOut();
            $("#projectPortWeb").fadeOut();
            $("#tictactoe").fadeOut();
            $("#projectWeather").fadeOut();
            //open actual view
            setTimeout(function(){
                $("#projectMusic").fadeIn();
            }, 390);
        }

        if (pNum==4){
            //close remaining views
            $("#projectAvtokamp").fadeOut();
            $("#projectPortWeb").fadeOut();
            $("#tictactoe").fadeOut();
            $("#projectWeather").fadeOut();
            $("#projectMusic").fadeOut();
            //open actual view
            setTimeout(function(){
                $("#projectLogoDesigns").fadeIn();
            }, 390);
        }

        if (pNum==5){
            //close remaining views
            $("#projectAvtokamp").fadeOut();
            $("#projectLogoDesigns").fadeOut();
            $("#projectPortWeb").fadeOut();
            $("#projectWeather").fadeOut();
            $("#projectMusic").fadeOut();
            //open actual view
            setTimeout(function(){
                $("#tictactoe").fadeIn();
            }, 390);
        }

        if (pNum==6){
            //close remaining views
            $("#projectAvtokamp").fadeOut();
            $("#projectLogoDesigns").fadeOut();
            $("#tictactoe").fadeOut();
            $("#projectWeather").fadeOut();
            $("#projectMusic").fadeOut();
            //open actual view
            setTimeout(function(){
                $("#projectPortWeb").fadeIn();
            }, 390);
        }
    }

})