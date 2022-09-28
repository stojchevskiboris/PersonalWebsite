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
    $("#logos").click(function (){
        $("#allCards").fadeOut();
        setTimeout(function(){
            $("#projectLogoDesigns").fadeIn();
        }, 390);
        pNum = 2;
    })
    $("#portweb").click(function (){
        $("#allCards").fadeOut();
        setTimeout(function(){
            $("#projectPortWeb").fadeIn();
        }, 390);
        pNum = 3;
    })

    $(".prev").click(function (){
        if (pNum==1)
            pNum=3;
        else {
            pNum--;
        }
        checkpNum();
    })
    $(".next").click(function (){
        if (pNum==3)
            pNum=1;
        else {
            pNum++;
        }
        checkpNum();
    })


    function checkpNum(){
        console.log(pNum)
        if (pNum==1){
            //close remaining views
            $("#projectLogoDesigns").fadeOut();
            $("#projectPortWeb").fadeOut();
            //open actual view
            setTimeout(function(){
                $("#projectAvtokamp").fadeIn();
            }, 390);
        }

        if (pNum==2){
            //close remaining views
            $("#projectAvtokamp").fadeOut();
            $("#projectPortWeb").fadeOut();
            //open actual view
            setTimeout(function(){
                $("#projectLogoDesigns").fadeIn();
            }, 390);
        }

        if (pNum==3){
            //close remaining views
            $("#projectAvtokamp").fadeOut();
            $("#projectLogoDesigns").fadeOut();
            //open actual view
            setTimeout(function(){
                $("#projectPortWeb").fadeIn();
            }, 390);
        }
    }

})