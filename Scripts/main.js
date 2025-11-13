// Scripts/main.js (ĐÃ CẬP NHẬT HOÀN CHỈNH)

document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIC DỊCH NGÔN NGỮ BẮT ĐẦU ---

    // 1. Dữ liệu dịch (Translations Object)
    const translations = {
        // Navigation (Chung)
        'nav_parts': { 'vi': 'Trang chủ', 'en': 'Home' },
        'nav_collections': { 'vi': 'Sản Phẩm', 'en': 'Products' },
        'nav_news': { 'vi': 'Tin tức & Sự kiện', 'en': 'News & Events' },
        'nav_about': { 'vi': 'Liên Lạc', 'en': 'Contact' },
        'user_menu_title': { 'vi': 'Người dùng', 'en': 'User' },

        // Index.html
        'home_title': { 'vi': 'Trang Chủ | Shop linh kiện điện tử Thiện Dương', 'en': 'Home | Thien Duong Electronics Components Shop' },
        'hero_title_mobile': { 'vi': 'Chào mừng', 'en': 'Welcome' },
        'hero_title_desktop': { 'vi': 'Chào mừng đến với Thiện Dương Gear Shop linh kiện điện tử ', 'en': 'Welcome to Thien Duong Gear Electronics Components Shop' },
        'hero_description': { 'vi': 'Khám phá vô vàn các linh kiện và thiết bị xịn xò', 'en': 'Discover a wide variety of cool components and devices' },
        'all_parts_btn': { 'vi': 'Xem Tất Cả Linh Kiện', 'en': 'View All Components' },
        'search_placeholder': { 'vi': 'Nhập tên linh kiện, thiết bị...', 'en': 'Enter component name, device...' },
        'search_btn': { 'vi': 'Tìm Kiếm', 'en': 'Search' },
        'explore_btn': { 'vi': 'Khám phá thêm các linh kiện/thiết bị', 'en': 'Explore more components/devices' },

        // Collection.html
        'collection_page_title': { 'vi': 'Bộ Sưu Tập Sản Phẩm | Thiện Dương Gear', 'en': 'Product Collection | Thien Duong Gear' },
        'collection_hero_title': { 'vi': 'Khám phá Bộ Sưu Tập Công Nghệ Mới Nhất', 'en': 'Discover the Latest Technology Collection' },
        'collection_hero_subtitle': { 'vi': 'Giảm giá lên đến 30% cho các dòng sản phẩm cao cấp!', 'en': 'Discounts up to 30% on premium products!' },
        'collection_buy_now': { 'vi': 'Mua Ngay', 'en': 'Shop Now' },
        'search_product_placeholder': { 'vi': '🔍 Tìm kiếm sản phẩm...', 'en': '🔍 Search products...' },
        'filter_category_all': { 'vi': 'Danh mục: Tất cả', 'en': 'Category: All' },
        'filter_brand_all': { 'vi': 'Hãng: Tất cả', 'en': 'Brand: All' },
        'filter_price_all': { 'vi': 'Giá: Tất cả', 'en': 'Price: All' },
        'add_to_cart_btn': { 'vi': '🛒 Thêm vào giỏ', 'en': '🛒 Add to Cart' },

        // Contact.html
        'contact_page_title': { 'vi': 'Liên hệ với chúng tôi | Thiện Dương Gear', 'en': 'Contact Us | Thien Duong Gear' },
        'contact_title': { 'vi': 'Chúng tôi luôn sẵn sàng hỗ trợ bạn', 'en': 'We Are Always Ready to Assist You' },
        'contact_subtitle': { 'vi': 'Hãy chọn kênh liên hệ phù hợp hoặc điền vào mẫu bên dưới để được phản hồi nhanh nhất.', 'en': 'Choose the appropriate contact channel or fill out the form below for the fastest response.' },
        'contact_details_heading': { 'vi': 'Thông tin liên hệ', 'en': 'Contact Information' },
        'contact_address_title': { 'vi': 'Địa chỉ Văn phòng chính', 'en': 'Main Office Address' },
        'contact_phone_email_title': { 'vi': 'Điện thoại & Email', 'en': 'Phone & Email' },
        'contact_hours_title': { 'vi': 'Giờ làm việc', 'en': 'Working Hours' },
        'contact_social_title': { 'vi': 'Theo dõi chúng tôi', 'en': 'Follow Us' },
        'contact_form_heading': { 'vi': 'Gửi tin nhắn cho chúng tôi', 'en': 'Send Us a Message' },
        'form_name_label': { 'vi': 'Họ và tên', 'en': 'Full Name' },
        'form_name_placeholder': { 'vi': 'Nhập họ tên của bạn', 'en': 'Enter your full name' },
        'form_subject_label': { 'vi': 'Chủ đề (Tùy chọn)', 'en': 'Subject (Optional)' },
        'form_subject_default': { 'vi': '-- Chọn chủ đề --', 'en': '-- Select subject --' },
        'form_subject_support': { 'vi': 'Hỗ trợ kỹ thuật / Bảo hành', 'en': 'Technical Support / Warranty' },
        'form_subject_sales': { 'vi': 'Tư vấn mua hàng / Đặt hàng', 'en': 'Sales Consultation / Ordering' },
        'form_subject_partnership': { 'vi': 'Hợp tác / Đối tác', 'en': 'Partnership / Collaboration' },
        'form_subject_other': { 'vi': 'Khác', 'en': 'Other' },
        'form_message_label': { 'vi': 'Tin nhắn', 'en': 'Message' },
        'form_message_placeholder': { 'vi': 'Nhập nội dung bạn muốn gửi...', 'en': 'Enter the content you want to send...' },
        'form_newsletter_label': { 'vi': 'Đăng ký nhận bản tin công nghệ mới nhất.', 'en': 'Subscribe to the latest technology newsletter.' },
        'form_submit_btn': { 'vi': 'Gửi tin nhắn', 'en': 'Send Message' },
        
        // Events.html
        'events_page_title': { 'vi': 'Sự Kiện Công Nghệ | Thiện Dương Gear', 'en': 'Technology Events | Thien Duong Gear' },
        'events_header_title': { 'vi': 'Tin Tức & Sự Kiện Công Nghệ', 'en': 'Technology News & Events' },
        'events_search_placeholder': { 'vi': '🔍 Tìm kiếm bài viết...', 'en': '🔍 Search articles...' },
        'filter_event_category_all': { 'vi': 'Thể loại: Tất cả', 'en': 'Category: All' },
        'filter_event_category_news': { 'vi': 'Tin tức (Mới)', 'en': 'News (New)' },
        'filter_event_category_hardware': { 'vi': 'Sự kiện Phần cứng', 'en': 'Hardware Events' },
        'filter_event_category_software': { 'vi': 'Sự kiện Phần mềm/AI', 'en': 'Software/AI Events' },
        'filter_event_category_esports': { 'vi': 'E-Sports', 'en': 'E-Sports' },
        'filter_event_sort_newest': { 'vi': 'Sắp xếp: Mới nhất', 'en': 'Sort: Newest' },
        'filter_event_sort_oldest': { 'vi': 'Sắp xếp: Cũ nhất', 'en': 'Sort: Oldest' },
        'post_macbook_title': { 'vi': 'Sự kiện Apple ra mắt dòng MacBook Pro M4', 'en': 'Apple Event Unveils MacBook Pro M4 Series' },
        'post_macbook_desc': { 'vi': 'Apple công bố dòng MacBook Pro mới sử dụng chip M4 với hiệu năng xử lý AI vượt trội.', 'en': 'Apple announces the new MacBook Pro line using the M4 chip with superior AI processing performance.' },
        'post_copilot_title': { 'vi': 'Microsoft Build 2025: Thêm Copilot AI vào mọi ứng dụng', 'en': 'Microsoft Build 2025: Integrating Copilot AI into Every App' },
        'post_copilot_desc': { 'vi': 'Microsoft tập trung vào việc tích hợp sâu công nghệ trí tuệ nhân tạo vào hệ sinh thái Windows và Office.', 'en': 'Microsoft focuses on deeply integrating artificial intelligence technology into the Windows and Office ecosystem.' },
        'post_charge_title': { 'vi': 'Tin tức: Công nghệ sạc không dây 300W phá vỡ kỷ lục', 'en': 'News: 300W Wireless Charging Technology Breaks Record' },
        'post_charge_desc': { 'vi': 'Hãng Xiaomi công bố công nghệ sạc không dây siêu nhanh, nạp đầy pin trong 5 phút, hứa hẹn tương lai mới cho di động.', 'en': 'Xiaomi unveils ultra-fast wireless charging technology, fully charging a battery in 5 minutes, promising a new future for mobile devices.' },
        'post_lol_title': { 'vi': 'Giải đấu Vòng Chung Kết Vô địch Liên Minh Huyền Thoại', 'en': 'League of Legends World Championship Finals Tournament' },
        'post_lol_desc': { 'vi': 'Các đội tuyển Việt Nam tranh tài để giành suất tham dự giải quốc tế tại Hàn Quốc, với giải thưởng cực lớn.', 'en': 'Vietnamese teams compete for a spot at the international tournament in Korea, with huge prizes.' },
        'post_rtx_title': { 'vi': 'Nvidia trình làng RTX 5000: Hiệu suất ray-tracing tăng gấp đôi', 'en': 'Nvidia unveils RTX 5000: Double ray-tracing performance' },
        'post_rtx_desc': { 'vi': 'Dòng card đồ họa GeForce RTX 5000 series được giới thiệu, tập trung vào khả năng xử lý đồ họa phức tạp cho game thủ.', 'en': 'The GeForce RTX 5000 series is introduced, focusing on complex graphics processing for gamers.' },
        'post_robot_title': { 'vi': 'Tin tức: Robot công nghiệp tăng trưởng mạnh mẽ tại Việt Nam', 'en': 'News: Industrial robots grow strongly in Vietnam' },
        'post_robot_desc': { 'vi': 'Tự động hóa nhà máy đang là xu hướng chính, kéo theo sự bùng nổ của ngành robot công nghiệp trong nước.', 'en': 'Factory automation is the main trend, leading to a boom in the domestic industrial robot industry.' },
        'read_more_btn': { 'vi': 'Đọc thêm', 'en': 'Read more' }, 

        // Cart.html (MỚI)
        'cart_page_title': { 'vi': 'Giỏ hàng của bạn | Thiện Dương Gear', 'en': 'Your Shopping Cart | Thien Duong Gear' },
        'cart_main_title': { 'vi': '🛒 Giỏ hàng của bạn', 'en': '🛒 Your Shopping Cart' },
        'cart_empty_message': { 'vi': 'Giỏ hàng của bạn đang trống. Hãy thêm sản phẩm nhé!', 'en': 'Your cart is empty. Please add some products!' },
        'cart_summary_title': { 'vi': 'Tóm tắt đơn hàng', 'en': 'Order Summary' },
        'cart_subtotal': { 'vi': 'Tổng phụ:', 'en': 'Subtotal:' },
        'cart_shipping': { 'vi': 'Phí vận chuyển:', 'en': 'Shipping:' },
        'cart_total': { 'vi': 'Tổng cộng:', 'en': 'Total:' },
        'cart_checkout_btn': { 'vi': 'Tiến hành thanh toán', 'en': 'Proceed to Checkout' },
        'cart_continue_shopping': { 'vi': 'Tiếp tục mua hàng', 'en': 'Continue Shopping' },
    };

    // Dữ liệu dịch riêng cho User Menu
    const userMenuLangs = {
        'vi': {
            'profile': 'Hồ sơ của tôi',
            'parts': 'Giỏ hàng',
            'settings': 'Cài đặt',
            'logout': 'Đăng xuất'
        },
        'en': {
            'profile': 'My Profile',
            'parts': 'Cart',
            'settings': 'Settings',
            'logout': 'Log out'
        }
    };

    // Hàm chuyên biệt để dịch các mục trong User Dropdown
    const changeUserMenuLanguage = (lang) => {
        const texts = userMenuLangs[lang];
        if (!texts) return;

        // NHẮM MỤC TIÊU TẤT CẢ CÁC PHẦN TỬ CÓ data-key TRONG MENU CÁ NHÂN
        const profileItems = document.querySelectorAll('[data-key="profile"]');
        const partsItems = document.querySelectorAll('[data-key="parts"]');
        const settingsItems = document.querySelectorAll('[data-key="settings"]');
        const logoutItems = document.querySelectorAll('[data-key="logout"]');

        profileItems.forEach(item => item.textContent = texts.profile);
        partsItems.forEach(item => item.textContent = texts.parts);
        settingsItems.forEach(item => item.textContent = texts.settings);
        logoutItems.forEach(item => item.textContent = texts.logout);
    };


    // Hàm chính để dịch toàn bộ trang
    const translatePage = (lang) => {
        // 1. Dịch các phần tử dùng textContent (hầu hết các thẻ)
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[key] && translations[key][lang]) {
                element.textContent = translations[key][lang];
            }
        });

        // 2. Dịch các phần tử dùng placeholder (như ô tìm kiếm, ô nhập liệu)
        document.querySelectorAll('[data-key-placeholder]').forEach(element => {
            const key = element.getAttribute('data-key-placeholder');
            if (translations[key] && translations[key][lang]) {
                element.placeholder = translations[key][lang];
            }
        });
        
        // 3. Dịch các phần tử OPTION trong SELECT
        document.querySelectorAll('[data-key-option]').forEach(option => {
             const key = option.getAttribute('data-key-option');
             if (translations[key] && translations[key][lang]) {
                 option.textContent = translations[key][lang];
             }
         });


        // 4. Dịch User Dropdown (dùng hàm riêng)
        changeUserMenuLanguage(lang);

        // 5. Cập nhật thuộc tính lang của HTML
        document.documentElement.lang = lang;

        // 6. Cập nhật trạng thái active của nút ngôn ngữ
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active', 'btn-primary', 'btn-outline-secondary');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active', 'btn-primary');
            } else {
                btn.classList.add('btn-outline-secondary');
            }
        });

        // 7. Lưu ngôn ngữ hiện tại
        localStorage.setItem('lang', lang);
    };

    // 8. Logic gắn sự kiện và Khởi tạo ngôn ngữ
    const langBtns = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('lang') || 'vi'; // Mặc định là tiếng Việt

    // Áp dụng ngôn ngữ đã lưu khi tải trang
    translatePage(savedLang);

    // Gắn sự kiện click cho các nút ngôn ngữ
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            translatePage(lang);
        });
    });

    // --- LOGIC DỊCH NGÔN NGỮ KẾT THÚC ---


    // Hàm mở/đóng menu (Gán vào nút có onclick="toggleMenu()") - Dùng style.display như code gốc của bạn
    window.toggleMenu = function () {
        const userDropdown = document.getElementById('userDropdown');
        if (userDropdown) {
            userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
        }
    };
    
    // Hàm đăng xuất (để tránh lỗi)
    window.logout = function () {
        alert("Đăng xuất thành công!");
    };


    // Đóng menu khi click ra ngoài - Dùng style.display như code gốc của bạn
    document.addEventListener('click', function (event) {
        const container = document.querySelector('.dropdown-container');
        const dropdown = document.getElementById('userDropdown');
        const toggleButton = document.querySelector('.menu-toggle-button');

        // Chỉ đóng nếu click bên ngoài container và menu đang hiển thị
        if (dropdown && toggleButton && dropdown.style.display === 'block' && !container.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });


    // --- LOGIC THEME SWITCHER ---
    const themeSwitcherBtns = document.querySelectorAll('#theme-switcher-btn, #theme-switcher-btn-mobile');
    const themeIcons = document.querySelectorAll('#theme-icon, #theme-icon-mobile');
    const htmlElement = document.documentElement;

    const updateThemeIcons = (theme) => {
        const newIconClass = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        themeIcons.forEach(icon => icon.className = newIconClass);

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


    // --- LOGIC LỌC VÀ TÌM KIẾM SẢN PHẨM (collection.html) ---
    // Chỉ chạy nếu có các phần tử lọc trên trang
    const categoryFilter = document.getElementById('categoryFilter');

    if (categoryFilter) {
        const brandFilter = document.getElementById('brandFilter');
        const priceFilter = document.getElementById('priceFilter');
        const searchInput = document.getElementById('searchInput');
        const products = document.querySelectorAll('.product-card');

        // Hàm chính để lọc sản phẩm
        function filterProducts() {
            const category = categoryFilter.value;
            const brand = brandFilter.value;
            const price = priceFilter.value;
            const search = searchInput.value.toLowerCase();

            products.forEach(item => {
                const matchCategory = category === 'all' || item.dataset.category === category;
                const matchBrand = brand === 'all' || item.dataset.brand === brand;
                const matchPrice = price === 'all' || item.dataset.price === price;
                
                // Kiểm tra cả tên sản phẩm (h3) và mô tả (p)
                const productName = item.querySelector('h3').innerText.toLowerCase();
                const productDesc = item.querySelector('p').innerText.toLowerCase();
                const matchSearch = productName.includes(search) || productDesc.includes(search);

                item.style.display = (matchCategory && matchBrand && matchPrice && matchSearch) ? "block" : "none";
            });
        }

        // Gắn sự kiện 'input' (cho ô tìm kiếm) và 'change' (cho các dropdown)
        [categoryFilter, brandFilter, priceFilter].forEach(el => el.addEventListener('change', filterProducts));
        searchInput.addEventListener('input', filterProducts);
    }


    // --- LOGIC GIỎ HÀNG BẮT ĐẦU ---

    // Lấy giỏ hàng từ Local Storage
    function getCart() {
        const cartString = localStorage.getItem('shoppingCart');
        return cartString ? JSON.parse(cartString) : [];
    }

    // Lưu giỏ hàng vào Local Storage
    function saveCart(cart) {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        updateCartCount(); // Cập nhật số lượng mỗi khi thay đổi
    }

    // Hàm thêm sản phẩm vào giỏ
    function addToCart(product) {
        let cart = getCart();
        // Cần chuyển ID về string để so sánh nhất quán vì data-id luôn là string
        const existingProductIndex = cart.findIndex(item => item.id == product.id); 

        if (existingProductIndex > -1) {
            // Nếu đã tồn tại, tăng số lượng
            cart[existingProductIndex].quantity += 1;
        } else {
            // Nếu chưa tồn tại, thêm mới
            cart.push(product);
        }

        saveCart(cart);
    }

    // Cập nhật số lượng sản phẩm trên icon Giỏ hàng
    function updateCartCount() {
        const cart = getCart();
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('.cart-count'); 

        cartCountElements.forEach(el => {
            el.textContent = totalItems;
            // Chỉ hiển thị số lượng khi có sản phẩm (lớn hơn 0)
            el.style.display = totalItems > 0 ? 'inline-block' : 'none'; 
        });
    }

    // Hàm xử lý sự kiện click nút "Thêm vào giỏ"
    function handleAddToCartListeners() {
        const buttons = document.querySelectorAll('.product-card .add-cart'); 
        buttons.forEach((btn, index) => {
            const productCard = btn.closest('.product-card');
            
            // Gán ID dựa trên thứ tự xuất hiện, bắt đầu từ 1
            if (productCard && !productCard.dataset.id) {
                productCard.dataset.id = index + 1; 
            }
            
            // Xóa event listener cũ (nếu có) và gán mới
            btn.removeEventListener('click', addToCartHandler); 
            btn.addEventListener('click', addToCartHandler);
        });
    }

    function addToCartHandler(e) {
        const btn = e.currentTarget;
        const productCard = btn.closest('.product-card');

        if (productCard) {
            // 1. Lấy thông tin sản phẩm
            const productId = productCard.dataset.id;
            const productName = productCard.querySelector('h3').innerText;
            const productPriceText = productCard.querySelector('.price').innerText;
            const productImage = productCard.querySelector('img').src; 

            // Xử lý giá: Loại bỏ "đ" và dấu chấm/phẩy, chuyển về số 
            const priceValue = parseInt(productPriceText.replace(/\./g, '').replace('đ', '').trim());

            const product = {
                id: productId, // ID là string
                name: productName,
                price: priceValue, // Price là number
                image: productImage,
                quantity: 1 
            };
            
            // 2. Thêm vào Giỏ hàng
            addToCart(product);

            // 3. Hiệu ứng nút
            const currentLang = localStorage.getItem('lang') || 'vi'; 
            const addedText = currentLang === 'vi' ? '✅ Đã thêm' : '✅ Added';
            const defaultText = translations['add_to_cart_btn'][currentLang];

            btn.innerText = addedText;
            btn.style.background = '#4caf50';
            
            // Tắt hiệu ứng sau 1.5s
            setTimeout(() => {
                btn.innerText = defaultText;
                btn.style.background = '';
            }, 1500);
        }
    }


    // Hàm chạy toàn bộ logic Giỏ hàng
    function setupCartLogic() {
        // Cập nhật số lượng giỏ hàng lần đầu khi tải trang
        updateCartCount(); 
        
        // Gán sự kiện Thêm vào Giỏ hàng (chỉ chạy trên collection.html)
        if (document.querySelector('.product-card')) {
            handleAddToCartListeners();
        }

        // Cần xuất các hàm ra global để dùng trên cart.html sau này
        window.getCart = getCart;
        window.saveCart = saveCart;
        window.updateCartCount = updateCartCount;
    }

    // GỌI HÀM LOGIC GIỎ HÀNG TẠI ĐÂY
    setupCartLogic();

    // --- LOGIC GIỎ HÀNG KẾT THÚC ---


    // --- LOGIC CAROUSEL SÁCH --- (Chỉ áp dụng cho index.html)
    window.addEventListener('load', () => {
        const carouselWrapper = document.querySelector('.part-carousel-wrapper');
        const carousel = document.getElementById('part-carousel');

        if (carouselWrapper && carousel) {
            carousel.style.display = 'inline-flex';
            carousel.style.flexWrap = 'nowrap';
            carousel.style.transition = 'none';
            carousel.style.willChange = 'transform';

            const original = carousel.innerHTML;
            carousel.innerHTML += original;

            const scrollSpeed = 0.5;
            let position = 0;
            let isPaused = false;
            let isDown = false;
            let startX;

            function autoScroll() {
                if (!isPaused && !isDown) {
                    position -= scrollSpeed;
                    const totalWidth = carousel.scrollWidth / 2;
                    if (Math.abs(position) >= totalWidth) {
                        position = 0;
                    }
                    carousel.style.transform = `translateX(${position}px)`;
                }
                requestAnimationFrame(autoScroll);
            }

            carouselWrapper.addEventListener('mouseenter', () => isPaused = true);
            carouselWrapper.addEventListener('mouseleave', () => isPaused = false);

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

            const exploreSection = document.getElementById('explore-section');
            if (exploreSection) exploreSection.classList.add('visible');

            requestAnimationFrame(autoScroll);
        }
    });
});