document.addEventListener('DOMContentLoaded', function() {

    var recipientEmail = 'wong.forrest@gmail.com';
    function openEmailClient() {
        var mailtoUrl = 'mailto:' + recipientEmail;
        window.location.href = mailtoUrl;
        console.log("Email button clicked.")
    }
    document.getElementById('emailButton').addEventListener('click', openEmailClient);

});