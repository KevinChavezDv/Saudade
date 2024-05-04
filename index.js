
    function redirectPage() {
        window.location.href = '../html/catalogo.html';
    }

    setTimeout(function(){
        document.body.classList.add('fade-out');
        setTimeout(redirectPage, 1000);
    }, 3000);
