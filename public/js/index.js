document.addEventListener('DOMContentLoaded', function() {

    var em1 = "wong.forrest"
    var em2 = "@"
    var em3 = "gmail.com"

    var recipientEmail = em1 + em2 + em3;
    function openEmailClient() {
        var mailtoUrl = 'mailto:' + recipientEmail;
        window.location.href = mailtoUrl;
        console.log("Email button clicked.")
    }
    document.getElementById('emailButton').addEventListener('click', openEmailClient);

});