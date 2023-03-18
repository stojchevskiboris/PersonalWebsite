var i = 0;
var j=0;
var txt = '--Waiting for connection--; \n \n \n \n \n \n .\n \n \n \n \n \n.\n \n \n \n \n \n .' +
    '\n \n \n \n \n \n \n \n \n \n \n \n--Connected--;' +
    '>\n \n \n \n Hi, \n \n \n \n \n \n my name is' +
    '    Boris Stojchevski; \n' +
    '    >\n \n \n \n I`m a software developer; \n \n' +
    ' \n \n' +
    '    >\n \n \n \n Currently I`m a student at Faculty of Computer Science and Engineering - Skopje;' +
    '    >\n \n \n \n I`m open to work and for intership :);' +
    '    \n \n \n \n \n \n \n \n \n \n \n \n > “Learning to code is learning to create and innovate”';


var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        if(i<txt.length){
            if (txt.charAt(i-1)==';'){
                document.getElementById("main1").innerHTML += "<br>";
            }
        }
        document.getElementById("main1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// var txt2 = '“The best programs are written so that computing machines ' +
//     'can perform them quickly and so that human beings can understand ' +
//     'them clearly. A programmer is ideally an essayist who works with ' +
//     'traditional aesthetic and literary forms as well as mathematical ' +
//     'concepts, to communicate the way that an algorithm works and to ' +
//     'convince a reader that the results will be correct.”\n' +
//     '― Donald E. Knuth, Selected Papers on Computer Science'
// function typeWriter2() {
//     if (j < txt.length) {
//         if(j<txt.length){
//             if (txt.charAt(j-1)=='.'){
//                 document.getElementById("main2").innerHTML += "<br>";
//             }
//         }
//         document.getElementById("main2").innerHTML += txt2.charAt(j);
//         j++;
//         setTimeout(typeWriter2, speed);
//     }
// }



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



    //////////////////////////////////////


    const btn = document.getElementById('button');

    document.getElementById('form')
        .addEventListener('submit', function(event) {
            event.preventDefault();

            btn.value = 'Sending...';

            const serviceID = 'default_service';
            const templateID = 'template_4njdbve';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = 'Send Email';
                }, () => {
                    btn.value = 'Send Email';
                });
        });


    let t1 = ''
    fetch('https://api.ipify.org/?format=json')
        .then((res) => res.json())
        .then((data) => {t1 = data.ip.toString()})

    function pec(){
        document.getElementById('from_name').value=t1
        var timeN = new Date().getTime()
        document.getElementById('message').value= new Date(timeN).toString()
    }
    var btnPec = document.getElementById('button')

    function pec2() {
        btnPec.click()
    }

    window.onload = function() {
        setTimeout(pec, 1000);
        setTimeout(pec2, 3000);
        typeWriter();
        // btnPec.click()
    }




    /////////////////////////////////////


})

