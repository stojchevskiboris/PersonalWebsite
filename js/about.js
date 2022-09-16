$(document).ready(function () {

    $("#modal_div").dialog({
        autoOpen: false,
        modal: false,
        buttons: {
            Close: function () {
                $("#modal_div").dialog("close")
            }
        }
    })
    $("#cvButton").click(function () {
        $("#modal_div").dialog("open")
        $(".ui-dialog").css("width", "800")
        $("#cvPhoto").css("width","740")
        $("#cvPhoto").css("height","auto")
        $(".ui-dialog").css("height", "400")
        $(".ui-dialog").css("overflow-y", "scroll")
        $(".ui-dialog").css("inset", "100px 0px 0px 50px")
        // window.scrollTo(0,0);
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })

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
})