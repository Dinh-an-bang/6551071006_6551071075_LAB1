document.addEventListener('DOMContentLoaded', () => {

    // Hàm mở/đóng menu (Gán vào nút có onclick="toggleMenu()")
    window.toggleMenu = function () {
        const userDropdown = document.getElementById('userDropdown');
        if (userDropdown) {
            userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
        }
    };

    // Đóng menu khi click ra ngoài
    document.addEventListener('click', function (event) {
        const container = document.querySelector('.dropdown-container');
        const dropdown = document.getElementById('userDropdown');
        const toggleButton = document.querySelector('.menu-toggle-button');

        // Chỉ đóng nếu click bên ngoài container và menu đang hiển thị
        if (dropdown && toggleButton && dropdown.style.display === 'block' && !container.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });

    // Hàm chuyên biệt để dịch các mục trong User Dropdown
    const changeUserMenuLanguage = (lang) => {
        const texts = userMenuLangs[lang];
        if (!texts) return;

        // NHẮM MỤC TIÊU TẤT CẢ CÁC PHẦN TỬ CÓ data-key TRONG MENU CÁ NHÂN
        // (Bao gồm các mục dạng 'menu-item' trong desktop và mục dạng 'btn' trong mobile)
        const profileItems = document.querySelectorAll('#userDropdown [data-key="profile"], .d-lg-none [data-key="profile"]');
        const partsItems = document.querySelectorAll('#userDropdown [data-key="parts"], .d-lg-none [data-key="parts"]');
        const settingsItems = document.querySelectorAll('#userDropdown [data-key="settings"], .d-lg-none [data-key="settings"]');
        const logoutItems = document.querySelectorAll('#userDropdown [data-key="logout"], .d-lg-none [data-key="logout"]');

        if (profileItems) {
            profileItems.forEach(item => item.textContent = texts.profile);
        }
        if (partsItems) {
            partsItems.forEach(item => item.textContent = texts.parts);
        }
        if (settingsItems) {
            settingsItems.forEach(item => item.textContent = texts.settings);
        }
        if (logoutItems) {
            logoutItems.forEach(item => item.textContent = texts.logout);
        }
    };

    // --- LOGIC THEME SWITCHER & LANGUAGE (Đã thay đổi 2 chỗ) ---
    const themeSwitcherBtns = document.querySelectorAll('#theme-switcher-btn, #theme-switcher-btn-mobile');
    const themeIcons = document.querySelectorAll('#theme-icon, #theme-icon-mobile');
    const htmlElement = document.documentElement;

    // Cập nhật hàm updateThemeIcons để xử lý theme cho User Dropdown
    const updateThemeIcons = (theme) => {
        const newIconClass = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        themeIcons.forEach(icon => icon.className = newIconClass);

        // Thêm/Xóa class cho User Dropdown để áp dụng CSS Dark Mode
        const userDropdown = document.getElementById('userDropdown');
        if (userDropdown) {
            if (theme === 'dark') {
                userDropdown.classList.add('dark-mode-menu');
            } else {
                userDropdown.classList.remove('dark-mode-menu');
            }
        }

    };

    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-bs-theme', savedTheme);
    updateThemeIcons(savedTheme);
    themeSwitcherBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            htmlElement.setAttribute('data-bs-theme', newTheme);
            updateThemeIcons(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    });

    // --- LOGIC CAROUSEL SÁCH ---
window.addEventListener('load', () => {
    const carouselWrapper = document.querySelector('.part-carousel-wrapper');
    const carousel = document.getElementById('part-carousel');

    if (carouselWrapper && carousel) {
        // Bảo đảm layout đúng
        carousel.style.display = 'inline-flex';
        carousel.style.flexWrap = 'nowrap';
        carousel.style.transition = 'none';
        carousel.style.willChange = 'transform';

        // Nhân đôi nội dung để tạo hiệu ứng vô hạn
        const original = carousel.innerHTML;
        carousel.innerHTML += original;

        const scrollSpeed = 0.5; // tốc độ trượt
        let position = 0;
        let isPaused = false;
        let isDown = false;
        let startX;

        // --- Auto scroll vô hạn ---
        function autoScroll() {
            if (!isPaused && !isDown) {
                position -= scrollSpeed;
                const totalWidth = carousel.scrollWidth / 2;
                if (Math.abs(position) >= totalWidth) {
                    position = 0; // reset mượt
                }
                carousel.style.transform = `translateX(${position}px)`;
            }
            requestAnimationFrame(autoScroll);
        }

        // --- Tạm dừng khi rê ---
        carouselWrapper.addEventListener('mouseenter', () => isPaused = true);
        carouselWrapper.addEventListener('mouseleave', () => isPaused = false);

        // --- Kéo bằng chuột ---
        carouselWrapper.addEventListener('mousedown', e => {
            isDown = true;
            isPaused = true;
            startX = e.pageX;
            carouselWrapper.classList.add('active');
        });

        window.addEventListener('mousemove', e => {
            if (!isDown) return;
            const walk = e.pageX - startX;
            position += walk;
            carousel.style.transform = `translateX(${position}px)`;
            startX = e.pageX;
        });

        window.addEventListener('mouseup', () => {
            if (!isDown) return;
            isDown = false;
            isPaused = false;
            carouselWrapper.classList.remove('active');
        });

        // --- Luôn hiện phần "Khám phá thêm" ---
        const exploreSection = document.getElementById('explore-section');
        if (exploreSection) exploreSection.classList.add('visible');

        requestAnimationFrame(autoScroll);
    }
});
});