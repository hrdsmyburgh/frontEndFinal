(function ($) {
    "use strict"

    /* 1. Proloder */
    $(window).on('load', function () {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(450).css({
            'overflow': 'visible'
        });
    });

    /* 2. slick Nav */
    var menu = $('ul#navigation');
    if (menu.length) {
        menu.slicknav({
            prependTo: ".mobile_menu",
            closedSymbol: '+',
            openedSymbol: '-'
        });
    };

    /* 3. MainSlider-1 */
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="ti-shift-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="ti-shift-right"></i></button>',
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

    /* 4. Testimonial Active*/
    var testimonial = $('.h1-testimonial-active');
    if (testimonial.length) {
        testimonial.slick({
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        arrow: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        });
    }

    /* 5. Gallery Active */
    var client_list = $('.completed-active');
    if (client_list.length) {
        client_list.owlCarousel({
            slidesToShow: 2,
            slidesToScroll: 1,
            loop: true,
            autoplay: true,
            speed: 3000,
            smartSpeed: 2000,
            nav: false,
            dots: false,
            margin: 15,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    }

    /* 6. Nice Select */
    var nice_Select = $('select');
    if (nice_Select.length) {
        nice_Select.niceSelect();
    }

    /* 7.  Custom Sticky Menu  */
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-sticky").removeClass("sticky-bar");
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky-bar");
            $(".header-sticky").addClass("sticky");
        }
    });

    /* 8. scrollUp */
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300',
        topSpeed: 300,
        animation: 'fade',
        animationInSpeed: 200,
        animationOutSpeed: 200,
        scrollText: '<i class="ti-arrow-up"></i>',
        activeOverlay: false,
    });

    /* 9. data-background */
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    /* 10. WOW active */
    new WOW().init();

    /* 11. Mailchimp */
    function mailChimp() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();

    /* 12. Pop Up Img */
    var popUp = $('.single_gallery_part, .img-pop-up');
    if (popUp.length) {
        popUp.magnificPopup({
            type: 'image',
            gallery: { enabled: true }
        });
    }

})(jQuery);

// =======================================================
// DOMContentLoaded wrapper for API & Dashboard logic
// =======================================================
document.addEventListener('DOMContentLoaded', (event) => {

    // ---------- FILE UPLOAD ----------
    const realFileBtn = document.getElementById("real-file");
    const customBtn = document.getElementById("custom-button");
    const customTxt = document.getElementById("custom-text");
    if (customBtn) customBtn.addEventListener("click", () => { if(realFileBtn) realFileBtn.click(); });
    if (realFileBtn) realFileBtn.addEventListener("change", () => {
        if(customTxt) customTxt.innerHTML = realFileBtn.value ? realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1] : "No file chosen, yet.";
    });

    // ---------- PASSWORD TOGGLE ----------
    function togglePassword() {
        const passwordInput = document.getElementById("password");
        const eyeIcon = document.querySelector(".eye-icon");
        if(passwordInput && eyeIcon){
            if(passwordInput.type === "password") {
                passwordInput.type = "text";
                eyeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off-icon lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>`;
            } else {
                passwordInput.type = "password";
                eyeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>`;
            }
        }
    }

    // ---------- SIDEBAR MENU ACTIVE LINKS ----------
    const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
    allSideMenu.forEach(item => {
        const li = item.parentElement;
        item.addEventListener('click', () => {
            allSideMenu.forEach(i => i.parentElement.classList.remove('active'));
            li.classList.add('active');
        });
    });

    // ---------- TOGGLE SIDEBAR ----------
    const menuBar = document.querySelector('#content nav .bx.bx-menu');
    const sidebar = document.getElementById('sidebar');
    if(menuBar) menuBar.addEventListener('click', () => { if(sidebar) sidebar.classList.toggle('hide'); });

    // ---------- SEARCH FORM TOGGLE ----------
    const searchButton = document.querySelector('#content nav form .form-input button');
    const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
    const searchForm = document.querySelector('#content nav form');
    if(searchButton) searchButton.addEventListener('click', (e) => {
        if(window.innerWidth < 576) {
            e.preventDefault();
            searchForm.classList.toggle('show');
            if(searchForm.classList.contains('show')) searchButtonIcon.classList.replace('bx-search','bx-x');
            else searchButtonIcon.classList.replace('bx-x','bx-search');
        }
    });

    // ---------- WINDOW RESIZE ----------
    if(sidebar){
        if(window.innerWidth<768) sidebar.classList.add('hide');
        else if(window.innerWidth>576){
            if(searchButtonIcon) searchButtonIcon.classList.replace('bx-x','bx-search');
            if(searchForm) searchForm.classList.remove('show');
        }
    }
    window.addEventListener('resize', function(){
        if(this.innerWidth>576){
            if(searchButtonIcon) searchButtonIcon.classList.replace('bx-x','bx-search');
            if(searchForm) searchForm.classList.remove('show');
        }
    });

    // ---------- DARK MODE ----------
    const switchMode = document.getElementById('switch-mode');
    if(switchMode) switchMode.addEventListener('change', function(){
        if(this.checked) document.body.classList.add('dark');
        else document.body.classList.remove('dark');
    });

    // ---------- SHOW/HIDE PASSWORD ----------
    document.getElementById("showPassword")?.addEventListener("change", function(){
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirm_password");
        if(this.checked){
            if(password) password.type="text";
            if(confirmPassword) confirmPassword.type="text";
        } else {
            if(password) password.type="password";
            if(confirmPassword) confirmPassword.type="password";
        }
    });

    // ---------- CHECK PASSWORD MATCH ----------
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm_password");
    const message = document.getElementById("message");
    function checkPasswords(){
        if(!password||!confirmPassword||!message) return;
        if(confirmPassword.value==="") { message.textContent=""; return; }
        if(password.value===confirmPassword.value){ message.style.color="green"; message.textContent="Passwords match"; }
        else { message.style.color="red"; message.textContent="Passwords do not match"; }
    }
    if(password) password.addEventListener("keyup", checkPasswords);
    if(confirmPassword) confirmPassword.addEventListener("keyup", checkPasswords);

    // ---------- SELECT ALL APPLICANTS ----------
    document.getElementById('selectAll')?.addEventListener('change', function(){
        const checkboxes=document.querySelectorAll('.applicant-checkbox');
        checkboxes.forEach(cb=>cb.checked=this.checked);
    });

    // ---------- APPLY ACTION BUTTON ----------
    document.querySelector('.apply-action-btn')?.addEventListener('click', function(){
        const selectedAction=document.getElementById('actionDropdown').value;
        const selectedApplicants=Array.from(document.querySelectorAll('.applicant-checkbox:checked'));
        if(!selectedAction){ alert('Please select an action.'); return; }
        if(selectedApplicants.length===0){ alert('Please select at least one applicant.'); return; }
        alert(`${selectedAction} action applied to ${selectedApplicants.length} applicants.`);
    });

    // ---------- DASHBOARD FILTER ----------
    document.getElementById('filterIcon')?.addEventListener('click', ()=>{
        const filterForm=document.getElementById('filterForm');
        if(filterForm) filterForm.style.display=filterForm.style.display==='none'?'flex':'none';
    });

    document.getElementById('applyDashboardFilterBtn')?.addEventListener('click', ()=>{
        const filterStatus=document.getElementById('filterStatus')?.value.toLowerCase();
        const filterJob=document.getElementById('filterJob')?.value.toLowerCase();
        const rows=document.querySelectorAll('table tbody tr');
        rows.forEach(row=>{
            const status=row.querySelector('td:nth-child(4) .status')?.textContent.toLowerCase()||'';
            const job=row.querySelector('td:nth-child(3)')?.textContent.toLowerCase()||'';
            if((filterStatus&&!status.includes(filterStatus))||(filterJob&&!job.includes(filterJob))) row.style.display='none';
            else row.style.display='';
        });
    });

    // ---------- JOB LISTING FILTER ----------
    const jobFilterButton = document.getElementById('applyJobFilterBtn');
    if(jobFilterButton){
        jobFilterButton.addEventListener('click', ()=>{
            const minSalary=parseInt(document.querySelector('.js-input-from')?.value);
            const maxSalary=parseInt(document.querySelector('.js-input-to')?.value);
            const jobTypes=[];
            document.querySelectorAll('.select-Categories input[type="checkbox"]:checked').forEach(cb=>{
                jobTypes.push(cb.parentNode.textContent.trim().split('\n')[0]);
            });
            const activeTypeFilters=jobTypes.length>0;
            document.querySelectorAll('.single-job-items').forEach(card=>{
                const cardSalary=parseInt(card.getAttribute('data-salary'))||0;
                const cardType=card.getAttribute('data-job-type')||'';
                const isSalaryMatch=cardSalary>=minSalary && cardSalary<=maxSalary;
                const isTypeMatch=!activeTypeFilters||jobTypes.includes(cardType);
                card.style.display=(isSalaryMatch && isTypeMatch)?'':'none';
            });
            jobFilterButton.classList.remove('disabled');
        });
    }

    // ---------- FRONTEND API CALLS ----------
    async function loginUser(email,password){
        const res=await fetch('/api/users/login/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,password})
        });
        return res.json();
    }

    async function registerUser(username,email,password,role){
        const res=await fetch('/api/users/register/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({username,email,password,role})
        });
        return res.json();
    }

    async function getProfile(){
        const token=localStorage.getItem('token');
        const res=await fetch('/api/users/profile/',{
            method:'GET',
            headers:{'Authorization':`Bearer ${token}`}
        });
        return res.json();
    }

    async function updateProfile(data){
        const token=localStorage.getItem('token');
        const res=await fetch('/api/users/profile/',{
            method:'PUT',
            headers:{'Content-Type':'application/json','Authorization':`Bearer ${token}`},
            body:JSON.stringify(data)
        });
        return res.json();
    }
});