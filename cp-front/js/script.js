// ===== FUNCIONALIDADES DO ECO-TREND =====

// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    console.log('EcoTrend - E-commerce Sustentável carregado com sucesso!');
    
    // Inicializa todas as funcionalidades
    initializeCarousel();
    initializeFilters();
    initializeProductGallery();
    initializeContactForm();
    initializeFAQ();
    initializeScrollEffects();
    initializeQuantityControls();
});

// ===== CARROSSEL HERO =====
function initializeCarousel() {
    const carousel = document.getElementById('heroCarousel');
    if (carousel) {
        // Configurações adicionais do carrossel
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 5000, // 5 segundos entre slides
            pause: 'hover', // Pausa no hover
            wrap: true, // Loop infinito
            keyboard: true // Controle por teclado
        });
        
        // Adiciona indicadores de progresso
        addCarouselProgress();
    }
}

function addCarouselProgress() {
    const carousel = document.getElementById('heroCarousel');
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-item');
    slides.forEach((slide, index) => {
        const progressBar = document.createElement('div');
        progressBar.className = 'progresso-carrossel';
        progressBar.style.cssText = `
            position: absolute;
            bottom: 0;
            left: 0;
            height: 3px;
            background: rgba(255,255,255,0.3);
            width: 100%;
            z-index: 10;
        `;
        
        const progress = document.createElement('div');
        progress.className = 'barra-progresso-carrossel';
        progress.style.cssText = `
            height: 100%;
            background: white;
            width: 0%;
            transition: width 5s linear;
        `;
        
        progressBar.appendChild(progress);
        slide.appendChild(progressBar);
        
        // Anima a barra de progresso quando o slide está ativo
        if (index === 0) {
            setTimeout(() => {
                progress.style.width = '100%';
            }, 100);
        }
    });
}

// ===== FILTROS DE PRODUTOS =====
function initializeFilters() {
    const filterInputs = document.querySelectorAll('.filters-sidebar input');
    const clearFiltersBtn = document.getElementById('clearFilters');
    
    if (filterInputs.length > 0) {
        filterInputs.forEach(input => {
            input.addEventListener('change', applyFilters);
        });
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
}

function applyFilters() {
    const selectedCategories = getSelectedCategories();
    const selectedPriceRange = getSelectedPriceRange();
    const selectedBrands = getSelectedBrands();
    const selectedRatings = getSelectedRatings();
    
    // Simula filtragem de produtos
    console.log('Aplicando filtros:', {
        categories: selectedCategories,
        priceRange: selectedPriceRange,
        brands: selectedBrands,
        ratings: selectedRatings
    });
    
    // Aqui você implementaria a lógica real de filtragem
    filterProducts(selectedCategories, selectedPriceRange, selectedBrands, selectedRatings);
}

function getSelectedCategories() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(cb => cb.id);
}

function getSelectedPriceRange() {
    const selectedRadio = document.querySelector('input[name="price"]:checked');
    return selectedRadio ? selectedRadio.id : null;
}

function getSelectedBrands() {
    const brandCheckboxes = document.querySelectorAll('input[id^="brand"]:checked');
    return Array.from(brandCheckboxes).map(cb => cb.id);
}

function getSelectedRatings() {
    const ratingCheckboxes = document.querySelectorAll('input[id^="rating"]:checked');
    return Array.from(ratingCheckboxes).map(cb => cb.id);
}

function filterProducts(categories, priceRange, brands, ratings) {
    // Simula filtragem - em produção, isso seria uma chamada AJAX
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    const products = productsGrid.querySelectorAll('.col-md-6, .col-lg-3, .col-lg-4');
    let visibleCount = 0;
    
    products.forEach(product => {
        // Simula lógica de filtragem
        const shouldShow = Math.random() > 0.3; // 70% de chance de mostrar
        
        if (shouldShow) {
            product.style.display = 'block';
            visibleCount++;
        } else {
            product.style.display = 'none';
        }
    });
    
    // Atualiza contador de produtos
    updateProductCount(visibleCount);
}

function updateProductCount(count) {
    const productCountElement = document.getElementById('productCount');
    if (productCountElement) {
        productCountElement.textContent = count;
    }
}

function clearAllFilters() {
    const checkboxes = document.querySelectorAll('.filters-sidebar input[type="checkbox"]');
    const radios = document.querySelectorAll('.filters-sidebar input[type="radio"]');
    
    checkboxes.forEach(cb => cb.checked = false);
    radios.forEach(radio => {
        if (radio.id === 'price1') radio.checked = true;
    });
    
    // Mostra todos os produtos novamente
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        const products = productsGrid.querySelectorAll('.col-md-6, .col-lg-3, .col-lg-4');
        products.forEach(product => {
            product.style.display = 'block';
        });
        updateProductCount(products.length);
    }
}

// ===== GALERIA DE PRODUTOS =====
function initializeProductGallery() {
    // Adiciona eventos de hover para os cards de produtos
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Função para trocar imagem principal (usada na página de produto)
function changeImage(imageSrc) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = imageSrc;
        
        // Adiciona efeito de transição
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.style.opacity = '1';
        }, 150);
    }
}

// ===== FORMULÁRIO DE CONTATO =====
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

function handleContactForm(event) {
    event.preventDefault();
    
    // Coleta dados do formulário
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Validação básica
    if (!validateContactForm(data)) {
        return;
    }
    
    // Simula envio do formulário
    showFormSuccess();
    
    // Limpa o formulário
    event.target.reset();
}

function validateContactForm(data) {
    const errors = [];
    
    if (!data.firstName.trim()) {
        errors.push('Nome é obrigatório');
    }
    
    if (!data.lastName.trim()) {
        errors.push('Sobrenome é obrigatório');
    }
    
    if (!data.email.trim() || !isValidEmail(data.email)) {
        errors.push('E-mail válido é obrigatório');
    }
    
    if (!data.subject) {
        errors.push('Assunto é obrigatório');
    }
    
    if (!data.message.trim()) {
        errors.push('Mensagem é obrigatória');
    }
    
    if (errors.length > 0) {
        showFormErrors(errors);
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormSuccess() {
    const successAlert = document.createElement('div');
    successAlert.className = 'alert alert-success alert-dismissible fade show';
    successAlert.innerHTML = `
        <i class="bi bi-check-circle me-2"></i>
        Mensagem enviada com sucesso! Entraremos em contato em breve.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(successAlert, form);
    
    // Remove o alerta após 5 segundos
    setTimeout(() => {
        if (successAlert.parentNode) {
            successAlert.remove();
        }
    }, 5000);
}

function showFormErrors(errors) {
    const errorAlert = document.createElement('div');
    errorAlert.className = 'alert alert-danger alert-dismissible fade show';
    errorAlert.innerHTML = `
        <i class="bi bi-exclamation-triangle me-2"></i>
        <strong>Erro:</strong> ${errors.join(', ')}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(errorAlert, form);
    
    // Remove o alerta após 5 segundos
    setTimeout(() => {
        if (errorAlert.parentNode) {
            errorAlert.remove();
        }
    }, 5000);
}

// ===== FAQ =====
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.accordion-item');
    
    faqItems.forEach(item => {
        const button = item.querySelector('.accordion-button');
        const content = item.querySelector('.accordion-collapse');
        
        if (button && content) {
            button.addEventListener('click', function() {
                // Adiciona efeito de rolagem suave
                setTimeout(() => {
                    content.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                }, 300);
            });
        }
    });
}

// ===== EFEITOS DE SCROLL =====
function initializeScrollEffects() {
    // Header transparente no scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
    
    // Animações de entrada
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observa elementos para animação
    const animateElements = document.querySelectorAll('.category-card, .product-card, .benefit-item');
    animateElements.forEach(el => observer.observe(el));
}

// ===== CONTROLES DE QUANTIDADE =====
function initializeQuantityControls() {
    // Funções globais para controle de quantidade
    window.decreaseQuantity = function() {
        const quantityInput = document.getElementById('quantity');
        if (quantityInput) {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        }
    };
    
    window.increaseQuantity = function() {
        const quantityInput = document.getElementById('quantity');
        if (quantityInput) {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue < 10) {
                quantityInput.value = currentValue + 1;
            }
        }
    };
}

// ===== FUNCIONALIDADES ADICIONAIS =====

// Adiciona ao carrinho
function addToCart(productId, productName, price) {
    // Simula adição ao carrinho
    console.log(`Produto adicionado: ${productName} - R$ ${price}`);
    
    // Atualiza contador do carrinho
    updateCartCount();
    
    // Mostra notificação
    showNotification(`${productName} adicionado ao carrinho!`, 'success');
}

function updateCartCount() {
    const cartBadge = document.querySelector('.badge');
    if (cartBadge) {
        const currentCount = parseInt(cartBadge.textContent);
        cartBadge.textContent = currentCount + 1;
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = `
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
    `;
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Remove automaticamente após 3 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// ===== UTILITÁRIOS =====

// Formatação de preços
function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

// Debounce para otimização de performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle para otimização de scroll
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== INICIALIZAÇÃO DE COMPONENTES ESPECÍFICOS =====

// Inicializa tooltips do Bootstrap
function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Inicializa popovers do Bootstrap
function initializePopovers() {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
}

// ===== EVENTOS DE WINDOW =====

// Otimização de performance para scroll
window.addEventListener('scroll', throttle(function() {
    // Lógica de scroll otimizada
}, 16)); // ~60fps

// Resize handler
window.addEventListener('resize', debounce(function() {
    // Ajustes responsivos
    console.log('Janela redimensionada');
}, 250));

// ===== EXPORTAÇÃO DE FUNÇÕES =====

// Disponibiliza funções globalmente se necessário
window.EcoTrend = {
    addToCart,
    formatPrice,
    showNotification,
    changeImage,
    updateCartQuantity,
    removeCartItem,
    updateCartTotal
};

// ===== FUNCIONALIDADES DO CARRINHO =====

// Inicializa funcionalidades do carrinho
function initializeCart() {
    const quantityBtns = document.querySelectorAll('.quantity-btn');
    const removeBtns = document.querySelectorAll('.remove-item-btn');
    
    // Eventos para botões de quantidade
    quantityBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const isPlus = this.classList.contains('plus');
            const quantitySpan = this.parentNode.querySelector('.quantity');
            let quantity = parseInt(quantitySpan.textContent);
            
            if (isPlus) {
                quantity++;
            } else if (quantity > 1) {
                quantity--;
            }
            
            quantitySpan.textContent = quantity;
            updateCartTotal();
        });
    });
    
    // Eventos para botões de remover
    removeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            cartItem.style.animation = 'slideOut 0.3s ease forwards';
            
            setTimeout(() => {
                cartItem.remove();
                updateCartTotal();
                updateCartBadge();
            }, 300);
        });
    });
}

// Atualiza quantidade no carrinho
function updateCartQuantity(itemId, newQuantity) {
    const quantitySpan = document.querySelector(`[data-item-id="${itemId}"] .quantity`);
    if (quantitySpan) {
        quantitySpan.textContent = newQuantity;
        updateCartTotal();
    }
}

// Remove item do carrinho
function removeCartItem(itemId) {
    const cartItem = document.querySelector(`[data-item-id="${itemId}"]`);
    if (cartItem) {
        cartItem.remove();
        updateCartTotal();
        updateCartBadge();
    }
}

// Atualiza total do carrinho
function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;
    
    cartItems.forEach(item => {
        const priceText = item.querySelector('.cart-item-price').textContent;
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const price = parseFloat(priceText.replace('R$ ', '').replace(',', '.'));
        
        total += price * quantity;
    });
    
    const totalElement = document.querySelector('.total-price');
    if (totalElement) {
        totalElement.textContent = formatPrice(total);
    }
}

// Atualiza badge do carrinho
function updateCartBadge() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalItems = Array.from(cartItems).reduce((sum, item) => {
        return sum + parseInt(item.querySelector('.quantity').textContent);
    }, 0);
    
    const cartBadge = document.querySelector('.cart-badge');
    if (cartBadge) {
        cartBadge.textContent = totalItems;
        
        // Esconde badge se não houver itens
        if (totalItems === 0) {
            cartBadge.style.display = 'none';
        } else {
            cartBadge.style.display = 'flex';
        }
    }
}

// Adiciona ao carrinho
function addToCart(productId, productName, productPrice, productImage) {
    // Simula adição ao carrinho
    showNotification('Produto adicionado ao carrinho!', 'success');
    
    // Atualiza badge do carrinho
    const cartBadge = document.querySelector('.cart-badge');
    if (cartBadge) {
        const currentCount = parseInt(cartBadge.textContent) || 0;
        cartBadge.textContent = currentCount + 1;
    }
}

// ===== FUNÇÕES PARA PÁGINA DE PRODUTO =====

// Seleciona tamanho do produto
function selectSize(element) {
    // Remove seleção anterior
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.classList.remove('selected');
    });
    
    // Adiciona seleção ao elemento clicado
    element.classList.add('selected');
    
    // Mostra notificação
    showNotification(`Tamanho ${element.textContent} selecionado!`, 'info');
}

// Seleciona cor do produto
function selectColor(element) {
    // Remove seleção anterior
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.classList.remove('selected');
    });
    
    // Adiciona seleção ao elemento clicado
    element.classList.add('selected');
    
    // Mostra notificação
    showNotification('Cor selecionada!', 'info');
}

// Adiciona/remove da lista de desejos
function toggleWishlist(element) {
    element.classList.toggle('active');
    
    if (element.classList.contains('active')) {
        showNotification('Produto adicionado à lista de desejos!', 'success');
        element.innerHTML = '<i class="bi bi-heart-fill"></i>';
    } else {
        showNotification('Produto removido da lista de desejos!', 'info');
        element.innerHTML = '<i class="bi bi-heart"></i>';
    }
}

// Diminui quantidade
function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput && parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

// Aumenta quantidade
function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput && parseInt(quantityInput.value) < 10) {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    }
}

// Função para mostrar notificações
function showNotification(message, type = 'info') {
    // Cria elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-size: 14px;
    `;
    
    notification.textContent = message;
    
    // Adiciona ao body
    document.body.appendChild(notification);
    
    // Mostra notificação
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove notificação após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Inicializa carrinho quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    initializeCart();
});
