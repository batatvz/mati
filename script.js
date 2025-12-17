document.addEventListener('DOMContentLoaded', function () {

    /* --- 1. Countdown Timer --- */
    const targetDate = new Date("January 10, 2026 11:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.querySelector('.countdown-box').innerHTML = "¡HOY ES EL DÍA!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    /* --- 2. Carousel Logic --- */
    const track = document.querySelector('.carousel-track');
    const images = [
        "Fotos/IMG-20220115-WA0002.jpg",
        "Fotos/IMG-20220224-WA0006.jpg",
        "Fotos/IMG-20220417-WA0005.jpg",
        "Fotos/IMG-20220425-WA0017.jpg",
        "Fotos/IMG-20220605-WA0002.jpg",
        "Fotos/IMG-20231022-WA0002.jpg",
        "Fotos/IMG-20231116-WA0022.jpg",
        "Fotos/IMG-20231117-WA0042.jpg",
        "Fotos/IMG-20240806-WA0020.jpg",
        "Fotos/IMG_20220605_175647118.jpg",
        "Fotos/IMG_20220817_161125011.jpg",
        "Fotos/IMG_20220827_212634115.jpg",
        "Fotos/IMG_20221221_195136945_BURST000_COVER_TOP.jpg",
        "Fotos/IMG_20240617_172915085.jpg",
        "Fotos/IMG_20240617_175241689.jpg",
        "Fotos/IMG_20240921_191510548.jpg",
        "Fotos/IMG_20240921_210749812.jpg",
        "Fotos/Imagen de WhatsApp 2024-11-16 a las 20.59.57_17fddce5.jpg",
        "Fotos/Imagen de WhatsApp 2025-11-24 a las 15.00.02_b8df1804.jpg",
        "Fotos/Imagen de WhatsApp 2025-11-24 a las 15.00.02_c8ad3d73.jpg",
        "Fotos/Imagen de WhatsApp 2025-11-24 a las 15.00.02_f36bc5f2.jpg",
        "Fotos/Imagen de WhatsApp 2025-11-24 a las 15.00.03_29062a1b.jpg",
        "Fotos/Imagen de WhatsApp 2025-11-24 a las 15.00.03_71f0c3bf.jpg",
        "Fotos/Imagen de WhatsApp 2025-11-24 a las 15.00.03_84cf9689.jpg",
        "Fotos/Imagen de WhatsApp 2025-11-24 a las 15.00.04_ade77a7c.jpg",
        "Fotos/Imagen de WhatsApp 2025-11-24 a las 15.00.04_d5123f05.jpg",
        "Fotos/Imagen de WhatsApp 2025-12-08 a las 14.37.26_f19584c2.jpg",
        "Fotos/Imagen de WhatsApp 2025-12-08 a las 14.38.10_627db0fd.jpg",
        "Fotos/Imagen de WhatsApp 2025-12-08 a las 14.38.44_86385a50.jpg",
        "Fotos/Imagen de WhatsApp 2025-12-08 a las 14.39.05_74754d2e.jpg",
        "Fotos/Imagen de WhatsApp 2025-12-08 a las 14.42.05_b0aae8ce.jpg",
        "Fotos/Imagen de WhatsApp 2025-12-08 a las 14.42.35_18d1e31c.jpg",
        "Fotos/Imagen de WhatsApp 2025-12-08 a las 14.50.16_9fb46ce2.jpg",
        "Fotos/Imagen de WhatsApp 2025-12-08 a las 14.52.35_a43630b7.jpg",
        "Fotos/Imagen de WhatsApp 2025-12-08 a las 15.28.08_d2fda31f.jpg",
        "Fotos/Imagen de WhatsApp 2025-12-08 a las 15.28.09_48e07ede.jpg",
        "Fotos/Layer 1.jpg"
    ];

    // Populate Carousel (Double/Triple for marquee smooth loop)
    // We duplicate the array to ensure enough content for the scroll
    const marqueeImages = [...images, ...images];

    marqueeImages.forEach(src => {
        const li = document.createElement('li');
        li.className = 'carousel-slide';
        const img = document.createElement('img');
        img.src = src;
        img.onclick = () => window.openLightbox(src); // Trigger Lightbox
        img.style.cursor = "zoom-in"; // Hint
        li.appendChild(img);
        track.appendChild(li);
    });

    // Removed JS Navigation/Autoplay logic as we moved to CSS Marquee


    /* --- 3. Modal & Actions Logic --- */
    // Generic Modal Handler
    const closeModalBtns = document.querySelectorAll(".close");
    const modals = document.querySelectorAll(".modal");
    const openModalBtns = document.querySelectorAll("[data-modal]");
    const modalImg = document.getElementById("modal-img"); // For the image modal

    openModalBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const modalId = btn.dataset.modal;
            const targetModal = document.getElementById(modalId);

            if (targetModal) {
                targetModal.style.display = "flex";
                // If it's the image modal, set content
                if (modalId === 'infoModal' && btn.dataset.img) {
                    modalImg.src = btn.dataset.img;
                }
            }
        });
    });

    closeModalBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Close all modals (parent closest logic)
            btn.closest('.modal').style.display = "none";
        });
    });

    // Close on click outside
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = "none";
        }
    });

    /* Function placeholders moved to global scope below */

    /* --- 4. MAP ZOOM LOGIC (Click to Toggle) replaced by global function below --- */
});
/* End of DOMContentLoaded */

/* --- GLOBAL FUNCTIONS (Called by HTML onclick) --- */

/* LIGHTBOX LOGIC */
window.openLightbox = function (imgSrc) {
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightbox-img');
    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = imgSrc;
    }
}

window.closeLightbox = function (e) {
    // Check if clicked the background or the close button (bubbling logic in HTML onclick="closeLightbox")
    // If called from span, e might be needed, but HTML has onclick="closeLightbox(event)"
    const modal = document.getElementById('lightboxModal');
    if (e.target === modal || e.target.classList.contains('close')) {
        modal.style.display = "none";
    }
}

/* GALLERY FAST FORWARD (Smooth Speed Change) */
window.toggleFastForward = function (btn) {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

    // Use Web Animations API to change speed without jumping
    const anims = track.getAnimations();
    if (anims.length > 0) {
        const anim = anims[0]; // The marquee animation

        // Check current speed (roughly)
        if (anim.playbackRate > 1) {
            // GO NORMAL (1x)
            anim.updatePlaybackRate(1);
            btn.innerHTML = "Adelantar &raquo;";
            btn.classList.replace('btn-dark', 'btn-orange');
        } else {
            // GO FAST (10x)
            anim.updatePlaybackRate(15);
            btn.innerHTML = "Normal &laquo;";
            btn.classList.replace('btn-orange', 'btn-dark');
        }
    }
}

/* --- 4. MAP ZOOM LOGIC (Manual Drag & Zoom) --- */
/* Enhanced: Zoom enabled only on desktop, disabled on mobile */

const zoomMapImg = document.getElementById('zoom-map');
const downloadBtn = document.getElementById('download-map-btn');

// Detect if device is mobile
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           (window.innerWidth <= 768 && 'ontouchstart' in window);
}

if (zoomMapImg && !isMobileDevice()) {
    let isIdxDragging = false;
    let idxStartX, idxStartY, idxScrollLeft, idxScrollTop;
    const viewport = zoomMapImg.parentElement;

    // MOUSE DOWN: Start tracking
    zoomMapImg.addEventListener('mousedown', (e) => {
        isIdxDragging = false;
        // Capture initial scroll position
        idxScrollLeft = viewport.scrollLeft;
        idxScrollTop = viewport.scrollTop;
        // Capture initial mouse position
        idxStartX = e.clientX;
        idxStartY = e.clientY;

        zoomMapImg.style.cursor = 'grabbing';
        // Prevent default browser drag-image behavior to allow custom pan
        e.preventDefault();
    });

    // MOUSE MOVE: If moving while down, it's a drag
    zoomMapImg.addEventListener('mousemove', (e) => {
        // Check if button is held down (e.buttons === 1)
        if (e.buttons !== 1) return;

        const currentX = e.clientX;
        const currentY = e.clientY;

        const deltaX = currentX - idxStartX;
        const deltaY = currentY - idxStartY;

        // Threshold to consider it a drag
        if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
            isIdxDragging = true;
        }

        if (isIdxDragging && zoomMapImg.classList.contains('zoomed')) {
            // Move scroll opposite to mouse drag (Grabbing paper)
            viewport.scrollLeft = idxScrollLeft - deltaX;
            viewport.scrollTop = idxScrollTop - deltaY;
        }
    });

    // MOUSE UP: Decide action
    zoomMapImg.addEventListener('mouseup', (e) => {
        zoomMapImg.style.cursor = zoomMapImg.classList.contains('zoomed') ? 'grab' : 'zoom-in';

        if (!isIdxDragging) {
            // It was a pure click -> Toggle Zoom
            toggleZoom(e, zoomMapImg);
        }
        isIdxDragging = false;
    });

    // LEAVE: Reset
    zoomMapImg.addEventListener('mouseleave', () => {
        isIdxDragging = false;
        zoomMapImg.style.cursor = zoomMapImg.classList.contains('zoomed') ? 'grab' : 'zoom-in';
    });

    // Set initial cursor for desktop
    zoomMapImg.style.cursor = 'zoom-in';
} else if (zoomMapImg && isMobileDevice()) {
    // Disable zoom functionality on mobile
    zoomMapImg.style.cursor = 'default';
    zoomMapImg.style.pointerEvents = 'none';
    
    // Ensure download button is always visible on mobile
    if (downloadBtn) {
        downloadBtn.style.display = 'block';
    }
}

// Optimized Toggle Function
window.toggleZoom = function (e, img) {
    const viewport = img.parentElement;

    if (!img.classList.contains('zoomed')) {
        // --- ZOOM IN ---

        // Hide Download Button
        if (downloadBtn) downloadBtn.style.display = 'none';

        // 1. Capture Offset
        const clickX = e.offsetX;
        const clickY = e.offsetY;
        const w = img.offsetWidth;
        const h = img.offsetHeight;
        const ratioX = clickX / w;
        const ratioY = clickY / h;

        // 2. Apply Zoom (500%)
        img.style.cssText = "width: 500% !important; height: auto !important; max-width: none !important; max-height: none !important; cursor: grab;";
        img.classList.add('zoomed');

        // 3. Scroll to Center (Double RAF)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const newW = img.offsetWidth;
                const newH = img.offsetHeight;

                // Calculate point
                const pointNewX = newW * ratioX;
                const pointNewY = newH * ratioY;

                // Center logic
                const targetScrollLeft = pointNewX - (viewport.clientWidth / 2);
                const targetScrollTop = pointNewY - (viewport.clientHeight / 2);

                viewport.scrollTo({
                    left: targetScrollLeft,
                    top: targetScrollTop,
                    behavior: 'auto'
                });
            });
        });

    } else {
        // --- ZOOM OUT ---

        // Show Download Button
        if (downloadBtn) downloadBtn.style.display = 'block';

        img.style.cssText = "width: 100% !important; cursor: zoom-in; height: auto;";
        img.classList.remove('zoomed');
    }
}

/* Legacy Zoom Logic REMOVED */

/* Google Calendar Link */
window.addToCalendar = function () {
    const event = {
        text: "Cumpleaños de Matilda",
        dates: "20260110T110000/20260110T180000",
        details: "¡Festejamos mis 15! No faltes.",
        location: "Parque de la Costa",
        ctz: "America/Argentina/Buenos_Aires"
    };
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&dates=${event.dates}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}&ctz=${event.ctz}`;
    window.open(url, '_blank');
}

/* Whatsapp Link */
window.openWhatsapp = function () {
    window.open('https://wa.me/?text=Confirmo%20asistencia!', '_blank');
}

/* Placeholder Map Link (Old function kept just in case) */
window.openMap = function () {
    window.open('https://maps.google.com/?q=Salon+Fiestita', '_blank');
}
