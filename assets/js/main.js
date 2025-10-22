<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
// JQuery/Theme Initialization Logic (Keeping existing functionality)
(function ($) {
    "use strict"

    $(window).on('load', function () {
        // 1. Preloader fade out
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(450).css({ 'overflow': 'visible' });
    });

    // 2. Mobile Menu (Slicknav)
<<<<<<< HEAD
=======
=======
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
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
    var menu = $('ul#navigation');
    if (menu.length) {
        menu.slicknav({
            prependTo: ".mobile_menu",
            closedSymbol: '+',
            openedSymbol: '-'
        });
    };

<<<<<<< HEAD
    // 3. Main Slider (Slick)
=======
<<<<<<< HEAD
    // 3. Main Slider (Slick)
=======
    /* 3. MainSlider-1 */
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
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

<<<<<<< HEAD
    // 4. Testimonial Slider (Slick)
=======
<<<<<<< HEAD
    // 4. Testimonial Slider (Slick)
=======
    /* 4. Testimonial Active*/
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
    // 5. Completed Jobs Carousel (Owl Carousel)
    var client_list = $('.completed-active');
    if (client_list.length) {
        client_list.owlCarousel({
            // Note: Assuming correct Owl Carousel config for items/slides
            items: 2,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
<<<<<<< HEAD
=======
=======
    /* 5. Gallery Active */
    var client_list = $('.completed-active');
    if (client_list.length) {
        client_list.owlCarousel({
            slidesToShow: 2,
            slidesToScroll: 1,
            loop: true,
            autoplay: true,
            speed: 3000,
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
            smartSpeed: 2000,
            nav: false,
            dots: false,
            margin: 15,
            autoplayHoverPause: true,
            responsive: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 2 },
                1200: { items: 3 }
<<<<<<< HEAD
=======
=======
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
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
            }
        });
    }

<<<<<<< HEAD
    // 6. Nice Select Dropdowns
=======
<<<<<<< HEAD
    // 6. Nice Select Dropdowns
=======
    /* 6. Nice Select */
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
    var nice_Select = $('select');
    if (nice_Select.length) {
        nice_Select.niceSelect();
    }

<<<<<<< HEAD
    // 7. Sticky Header
=======
<<<<<<< HEAD
    // 7. Sticky Header
=======
    /* 7.  Custom Sticky Menu  */
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
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

<<<<<<< HEAD
    // 8. Scroll Up
=======
<<<<<<< HEAD
    // 8. Scroll Up
=======
    /* 8. scrollUp */
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
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

<<<<<<< HEAD
    // 9. Data Background Handling
=======
<<<<<<< HEAD
    // 9. Data Background Handling
=======
    /* 9. data-background */
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
    // 10. WOW.js for animations
    new WOW().init();

    // 11. MailChimp Integration (AjaxChimp)
<<<<<<< HEAD
=======
=======
    /* 10. WOW active */
    new WOW().init();

    /* 11. Mailchimp */
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
    function mailChimp() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();

<<<<<<< HEAD
    // 12. Magnific Popup (Image Gallery)
=======
<<<<<<< HEAD
    // 12. Magnific Popup (Image Gallery)
=======
    /* 12. Pop Up Img */
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
    var popUp = $('.single_gallery_part, .img-pop-up');
    if (popUp.length) {
        popUp.magnificPopup({
            type: 'image',
            gallery: { enabled: true }
        });
    }

})(jQuery);

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6

// =======================================================================
// VANILLA JAVASCRIPT & FIREBASE AUTH INTEGRATION (REPLACING MOCK AUTH)
// NOTE: Assumes Firebase module imports are present in the host HTML file.
// =======================================================================

let db;
let auth;
let isAuthReady = false; // Flag to ensure onAuthStateChanged completes

document.addEventListener('DOMContentLoaded', (event) => {

    // --- FIREBASE INITIALIZATION & AUTH ---
    if (typeof initializeApp !== 'undefined' && typeof getAuth !== 'undefined' && typeof getFirestore !== 'undefined' && typeof onAuthStateChanged !== 'undefined') {
        try {
            const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
            const app = initializeApp(firebaseConfig);
            db = getFirestore(app);
            auth = getAuth(app);
            setLogLevel('Debug'); // Enable debug logging for Firestore

            // Set up Auth State Listener
            onAuthStateChanged(auth, async (user) => {
                isAuthReady = true;

                if (!user) {
                    try {
                        // Sign in if no user (either with custom token or anonymously)
                        if (typeof __initial_auth_token !== 'undefined') {
                            await signInWithCustomToken(auth, __initial_auth_token);
                        } else {
                            await signInAnonymously(auth);
                        }
                    } catch (error) {
                        console.error("Firebase Auth Sign-in Error:", error);
                    }
                }
                // Check protected content after auth state is finalized
                checkAuthAndLoadContent('protected-content');
            });

        } catch (e) {
            console.error("Failed to initialize Firebase:", e);
        }
    }


    /**
     * Checks Firebase authentication status to show or hide protected content.
     * Replaces the old localStorage token check.
     * @param {string} protectedContentId - The ID of the container element to protect (e.g., applicationForm).
     * @param {string} [loginUrl='/login.html'] - URL for the login page.
     * @param {string} [registerUrl='/register.html'] - URL for the register page.
     */
    function checkAuthAndLoadContent(protectedContentId, loginUrl = '/login.html', registerUrl = '/register.html') {
        if (!isAuthReady) {
            // Wait for auth to be ready
            setTimeout(() => checkAuthAndLoadContent(protectedContentId, loginUrl, registerUrl), 100);
            return;
        }

        // An authenticated user is a user who is not signed in anonymously.
        const authenticated = auth.currentUser && !auth.currentUser.isAnonymous;
        const protectedElement = document.getElementById(protectedContentId);
        if (!protectedElement) { return; }

        let messageDiv = document.getElementById('auth-required-message');

        if (!authenticated) {
            protectedElement.style.display = 'none';

            if (!messageDiv) {
                messageDiv = document.createElement('div');
                messageDiv.id = 'auth-required-message';
                // Using inline styles for quick display purposes
                messageDiv.style.cssText = 'padding: 40px; text-align: center; min-height: 300px; display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: #f7f7f7; border-radius: 8px; margin: 20px;';
                messageDiv.innerHTML = `
                    <h2 style="color: #dc3545; font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">Access Denied 🔒</h2>
                    <p style="margin-top: 0.5rem;">You must be logged in to view this page or submit an application.</p>
                    <p>Please <a href="${loginUrl}" style="color: #007bff; text-decoration: underline; font-weight: 600;">login</a> or <a href="${registerUrl}" style="color: #007bff; text-decoration: underline; font-weight: 600;">register</a>.</p>
                `;
                protectedElement.parentNode.insertBefore(messageDiv, protectedElement);
            }
        } else {
            // User is authenticated
            protectedElement.style.display = '';

            if (messageDiv) {
                messageDiv.remove();
            }
        }
    }

    // --- UI/FORM LOGIC ---

    // File Input Custom Buttons (Resume & Cover Letter)
<<<<<<< HEAD
=======
=======
// =======================================================
// DOMContentLoaded wrapper for API & Dashboard logic
// =======================================================
document.addEventListener('DOMContentLoaded', (event) => {

    // ---------- FILE UPLOAD ----------
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
    const realFileBtn = document.getElementById("real-file");
    const customBtn = document.getElementById("custom-button");
    const customTxt = document.getElementById("custom-text");
    if (customBtn) customBtn.addEventListener("click", () => { if(realFileBtn) realFileBtn.click(); });
    if (realFileBtn) realFileBtn.addEventListener("change", () => {
        if(customTxt) customTxt.innerHTML = realFileBtn.value ? realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1] : "No file chosen, yet.";
    });

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
    const coverLetterFileBtn = document.getElementById("cover-letter-file");
    const coverLetterBtn = document.getElementById("cover-letter-button");
    const coverLetterTxt = document.getElementById("cover-letter-text");

    if (coverLetterBtn) coverLetterBtn.addEventListener("click", () => {
        if(coverLetterFileBtn) coverLetterFileBtn.click();
    });

    if (coverLetterFileBtn) coverLetterFileBtn.addEventListener("change", () => {
        if(coverLetterTxt) coverLetterTxt.innerHTML = coverLetterFileBtn.value ? coverLetterFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1] : "No file chosen, yet.";
    });

    // Sidebar/Dashboard UI Logic (Truncated for brevity, functions remain same as original)
<<<<<<< HEAD
=======
=======
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
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
    const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
    allSideMenu.forEach(item => {
        const li = item.parentElement;
        item.addEventListener('click', () => {
            allSideMenu.forEach(i => i.parentElement.classList.remove('active'));
            li.classList.add('active');
        });
    });

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    // ---------- TOGGLE SIDEBAR ----------
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
    const menuBar = document.querySelector('#content nav .bx.bx-menu');
    const sidebar = document.getElementById('sidebar');
    if(menuBar) menuBar.addEventListener('click', () => { if(sidebar) sidebar.classList.toggle('hide'); });

<<<<<<< HEAD
    // ... (omitting remaining original UI/Dashboard logic for brevity, assuming it works)

    // Password Match Check
=======
<<<<<<< HEAD
    // ... (omitting remaining original UI/Dashboard logic for brevity, assuming it works)

    // Password Match Check
=======
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
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
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
<<<<<<< HEAD
    
    // Dashboard Select All Checkbox
=======
<<<<<<< HEAD
    
    // Dashboard Select All Checkbox
=======

    // ---------- SELECT ALL APPLICANTS ----------
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
    document.getElementById('selectAll')?.addEventListener('change', function(){
        const checkboxes=document.querySelectorAll('.applicant-checkbox');
        checkboxes.forEach(cb=>cb.checked=this.checked);
    });

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
    // Dashboard Apply Action Button (using console.log instead of alert)
    document.querySelector('.apply-action-btn')?.addEventListener('click', function(){
        const selectedAction=document.getElementById('actionDropdown').value;
        const selectedApplicants=Array.from(document.querySelectorAll('.applicant-checkbox:checked'));
        if(!selectedAction){ console.error('Please select an action.'); return; }
        if(selectedApplicants.length===0){ console.error('Please select at least one applicant.'); return; }
        console.log(`${selectedAction} action applied to ${selectedApplicants.length} applicants.`);
    });
    
    // Dashboard Filter Icon Toggle
<<<<<<< HEAD
=======
=======
    // ---------- APPLY ACTION BUTTON ----------
    document.querySelector('.apply-action-btn')?.addEventListener('click', function(){
        const selectedAction=document.getElementById('actionDropdown').value;
        const selectedApplicants=Array.from(document.querySelectorAll('.applicant-checkbox:checked'));
        if(!selectedAction){ alert('Please select an action.'); return; }
        if(selectedApplicants.length===0){ alert('Please select at least one applicant.'); return; }
        alert(`${selectedAction} action applied to ${selectedApplicants.length} applicants.`);
    });

    // ---------- DASHBOARD FILTER ----------
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
    document.getElementById('filterIcon')?.addEventListener('click', ()=>{
        const filterForm=document.getElementById('filterForm');
        if(filterForm) filterForm.style.display=filterForm.style.display==='none'?'flex':'none';
    });

<<<<<<< HEAD
    // Dashboard Apply Filter Button
=======
<<<<<<< HEAD
    // Dashboard Apply Filter Button
=======
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
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

<<<<<<< HEAD
    // Job Search Page Filter Logic (Salary Range & Job Type)
=======
<<<<<<< HEAD
    // Job Search Page Filter Logic (Salary Range & Job Type)
=======
    // ---------- JOB LISTING FILTER ----------
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
    // --- FIRESTORE APPLICATION SUBMISSION ---
    const applicationForm = document.getElementById('applicationForm');
    if (applicationForm) {
        applicationForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            if (!auth || !auth.currentUser || auth.currentUser.isAnonymous) {
                console.error('User must be logged in (non-anonymous) to submit application.');
                alert('You must be logged in to submit an application.'); // Using alert as a quick placeholder for custom message
                return;
            }
            
            // Check for Firestore readiness
            if (typeof addDoc === 'undefined' || typeof collection === 'undefined') {
                 console.error("Firestore functions (addDoc, collection) are not available.");
                 alert("Database error: Missing required libraries.");
                 return;
            }

            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => { data[key] = value; });

            // Ensure job ID is present
            const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
            if (!data.job) {
                const jobId = localStorage.getItem('selectedJobId');
                if (jobId) {
                    data.job = jobId;
                } else {
                    console.error("No job ID found for application.");
                    alert("No job ID found — please open the job details page again and retry.");
                    return;
                }
            }

            // Add metadata
            data.applicantId = auth.currentUser.uid;
            data.appliedAt = new Date().toISOString();
            data.status = 'Pending';
            
            // NOTE: File uploads require Firebase Storage which is not implemented here. 
            // Only application metadata is saved.

            try {
                // Save application data to Firestore: /artifacts/{appId}/users/{userId}/applications
                const applicationsCollectionRef = collection(db, `artifacts/${appId}/users/${auth.currentUser.uid}/applications`);
                await addDoc(applicationsCollectionRef, data);

                alert('Application submitted successfully!'); // Using alert as a quick placeholder for custom message
                applicationForm.reset();

                // Clear file input labels
                const customTxt = document.getElementById("custom-text");
                const coverLetterTxt = document.getElementById("cover-letter-text");
                if(customTxt) customTxt.innerHTML = "No file chosen, yet.";
                if(coverLetterTxt) coverLetterTxt.innerHTML = "No file chosen, yet.";

            } catch (error) {
                console.error('Firestore Submission Error:', error);
                alert(`An error occurred during submission. Check console for details.`);
            }
        });
    }
<<<<<<< HEAD
    const loginForm = document.getElementById('studentLoginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail')?.value;
        const password = document.getElementById('loginPassword')?.value;

        if (!email || !password) {
            alert('Please enter email and password.');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/users/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                const errData = await response.json();
                alert('Login failed: ' + (errData.detail || JSON.stringify(errData)));
                return;
            }

            const data = await response.json();

            localStorage.setItem('authToken', data.token);
            localStorage.setItem('userType', 'student');
            localStorage.setItem('username', data.username || data.first_name || email);

            window.location.replace('studentprofile.html');

        } catch (err) {
            console.error(err);
            alert('Error connecting to server.');
        }
    });
}
});
=======
});
=======
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
>>>>>>> d24f53188c3f36ad974eb7899e1f091d247532bd
>>>>>>> 22663f0f8964d43e9189150f7af167c09adfe7f6
