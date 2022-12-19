const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();
        var emailfield = document.getElementById("from_name");
        if(emailfield.value==""){
            emailfield.setAttribute('class','warning');
            document.getElementById("warn").style.display = "inline-block"
            return;
        }

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_jerv0j5';


        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Email sent!');
                document.getElementById("from_name").value="";
                document.getElementById("reply_to").value="";
                document.getElementById("message").value="";
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
        emailfield.removeAttribute("class");
    });

function removeAttr(){
    var field = document.getElementById("from_name");
    field.removeAttribute("class");
}


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