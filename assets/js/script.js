if (!(typeof Swiper === 'undefined')) {
    const swiper1 = new Swiper('.swiper-1', {
        slidesPerView: 1,
        speed: 400,
        spaceBetween: 18,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // when window width is <= 320px
            // 320: {
            //     slidesPerView: 1,
            //     spaceBetween: 10
            // },
            // when window width is <= 480px
            // 480: {
            //     slidesPerView: 1,
            //     spaceBetween: 20
            // },
            // when window width is <= 640px
            767: {
                slidesPerView: 2,
                // spaceBetween: 30
            }
        }
    });
    const swiper2 = new Swiper('.swiper-2', {
        slidesPerView: 1,
        speed: 400,
        spaceBetween: 18,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiper3 = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 8.5,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper4 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
        thumbs: {
            swiper: swiper3,
        },
    });

    // Accordion 
    var URL = './accordion.json';
    function customAccordion(accordion) {
        var titles = accordion.querySelectorAll('.accordion__title');
        var contents = accordion.querySelectorAll('.accordion__content');
        var state = {
            currentIndex: 0,
            data: []
        };
        var setState = function (newState) {
            Object.assign(state, newState);
        }
        var showHide = function () {
            var length = titles.length
            for (var i = 0; i < length; i++) {
                if (state.currentIndex === i) {
                    titles[i].parentElement.classList.toggle('active');
                    var height = contents[i].children[0].offsetHeight;
                    contents[i].style.height =
                        contents[i].offsetHeight > 0 ? 0 : height + 'px';
                } else {
                    titles[i].parentElement.classList.remove('active');
                    contents[i].style.height = 0;
                }



            }



        }
        var events = function () {
            var length = titles.length
            for (var i = 0; i < length; i++) {
                titles[i].addEventListener('click', function (i) {
                    setState({
                        currentIndex: i
                    });
                    showHide();
                }.bind(null, i));
            }
        }
        var init = function () {
            showHide()
            events();
        }
        init();
    }
    var container = document.querySelector('.custom-accordion');
    if (container) customAccordion(container);
}

(function ($) {
    $(document).ready(function () {
        /* ============================================== 
                        jQuery Nice Select
        ================================================= */

        if ($('select').length) {
            $('select').niceSelect();
        }


        /* ============================================== 
                        AOS JS 
        ================================================= */
        AOS.init({
            once: true,
        });

        /* ==============================================
                        Hamburger Button
        ================================================= */
        const menuBtn = $(".open-menu-btn");
        let menuOpen = false;
        menuBtn.on("click", function () {
            if (!menuOpen) {
                menuBtn.addClass("open");
                menuOpen = true;
                $("#menuTitle").text("Close");
            } else {
                menuBtn.removeClass("open");
                $("#menuTitle").text("Menu");
                menuOpen = false;
            }
        });

        /* ==============================================
                        Open Mobile Menu 
        ================================================= */
        const openMenu = $(".open-menu-btn");
        const mainMenu = $(".main-menu");
        openMenu.on("click", function () {
            mainMenu.toggleClass("open-main-menu");
        });
        openMenu.on("click", function () {
            openMenu.toggleClass("remove-rotate");
        });
        /* ==============================================
                    background image change
        ================================================= */
        $(".single-btn-groug").mouseover(function () {
            let dataPattern = $(this).data("bg-img");
            $(".btn-group-section").css(
                "background-image",
                "url(" + dataPattern + ");"
            );
        });

        /* ==============================================
                    background image change
        ================================================= */
        $(".carouselTicker").carouselTicker({
            speed: 0.5,
            delay: 30,
        });

        /* ==============================================
                Team member animations
        ================================================= */
        let membersData = [
            {
                "memberURL": "#",
                "memberPhoto": "https:\/\/axisdev1.wpengine.com\/wp-content\/themes\/axis\/assets\/images\/team\/team1.png"
            },
            {
                "memberURL": "#",
                "memberPhoto": "https:\/\/axisdev1.wpengine.com\/wp-content\/themes\/axis\/assets\/images\/team\/team2.png"
            },
            {
                "memberURL": "#",
                "memberPhoto": "https:\/\/axisdev1.wpengine.com\/wp-content\/themes\/axis\/assets\/images\/team\/team3.png"
            },
            {
                "memberURL": "#",
                "memberPhoto": "https:\/\/axisdev1.wpengine.com\/wp-content\/themes\/axis\/assets\/images\/team\/team4.png"
            },
            {
                "memberURL": "#",
                "memberPhoto": "https:\/\/axisdev1.wpengine.com\/wp-content\/themes\/axis\/assets\/images\/team\/team2.png"
            },
            {
                "memberURL": "#",
                "memberPhoto": "https:\/\/axisdev1.wpengine.com\/wp-content\/themes\/axis\/assets\/images\/team\/team1.png"
            },
            {
                "memberURL": "#",
                "memberPhoto": "https:\/\/axisdev1.wpengine.com\/wp-content\/themes\/axis\/assets\/images\/team\/team4.png"
            },
            {
                "memberURL": "#",
                "memberPhoto": "https:\/\/axisdev1.wpengine.com\/wp-content\/themes\/axis\/assets\/images\/team\/team3.png"
            }
        ];
        let initTeamMembers = $(".team-content");
        let initTeamMembersCount = initTeamMembers.length;
        setInterval(function () {
            $(".team-content").each(function (index, item) {
                if (initTeamMembersCount > (membersData.length - 1)) {
                    initTeamMembersCount = 0;
                }
                let element = membersData[initTeamMembersCount];
                $(this).attr('href', element.memberURL);
                $(this).find('.member-img').attr('src', element.memberPhoto);
                initTeamMembersCount++;
            });
        }, 5000);

        /* ==============================================
                        Slider Section Cursor
        ================================================= */
        $(".slider-section").changeCursor(
            "https://axisdev1.wpengine.com/wp-content/themes/axis/assets/images/slider-bg/cursor-bg.png",
            70,
            150,
            99999999,
            "slider-cursor"
        );
        $(".team-wrapper").changeCursor(
            "https://axisdev1.wpengine.com/wp-content/themes/axis/assets/images/team/hand-cursopr.png",
            75,
            100,
            99999999,
            "team-cursor"
        );
    });
    $(window).on("load", function () {
        /* ==================================================== 
                Preloader 
        ======================================================= */
        $(".section-loader").addClass("disppear");
    });
})(jQuery);
