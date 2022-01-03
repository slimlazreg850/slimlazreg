let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

if ($('body.index-body').length > 0) {

    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.add('active');
                }, (idx + 1) * 400)
            });

            setTimeout(() => {
                logoSpan.forEach((span, idx) => {
                    setTimeout(() => {
                        span.classList.remove('active');
                        span.classList.add('fade');
                    }, (idx + 1) * 400);
                })
            }, 2000);

            setTimeout(() => {
                intro.style.top = '-100vh';
            }, 2300);
        })
    })
}

if ($('body.other-body').length > 0) {

    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.add('active');
                }, (idx + 1) * 100)
            });

            setTimeout(() => {
                logoSpan.forEach((span, idx) => {
                    setTimeout(() => {
                        span.classList.remove('active');
                        span.classList.add('fade');
                    }, (idx + 1) * 100);
                })
            }, 850);

            setTimeout(() => {
                intro.style.transform = ("translate(100%, 0)");
                $('body.other-body').removeClass('stop-scrolling');
            }, 850);
        })
    })
}