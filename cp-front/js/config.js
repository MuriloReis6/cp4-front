/**
 * EcoTrend - Arquivo de Configuração
 * 
 * Este arquivo centraliza todas as configurações e constantes
 * utilizadas em toda a aplicação, facilitando manutenção e customização.
 * 
 * @author Desenvolvedor EcoTrend
 * @version 2.0.0
 */

const EcoTrendConfig = {
    // ============================================================================
    // CONFIGURAÇÕES DO SITE
    // ============================================================================
    
    // Informações da empresa
    company: {
        name: 'EcoTrend',
        tagline: 'Produtos Sustentáveis e Ecológicos',
        description: 'Descubra produtos sustentáveis para um estilo de vida mais consciente',
        website: 'https://ecotrend.com',
        email: 'contato@ecotrend.com',
        phone: '(11) 99999-9999',
        address: 'São Paulo, SP',
        socialMedia: {
            instagram: 'https://instagram.com/ecotrend',
            facebook: 'https://facebook.com/ecotrend',
            twitter: 'https://twitter.com/ecotrend',
            linkedin: 'https://linkedin.com/company/ecotrend'
        }
    },
    
    // ============================================================================
    // CONFIGURAÇÕES DO CARROSSEL
    // ============================================================================
    
    carousel: {
        // Configurações gerais
        interval: 5000,                    // Tempo entre slides (5 segundos)
        pauseOnHover: true,                // Pausa quando o mouse está sobre o carrossel
        enableKeyboard: true,              // Permite navegação por teclado
        enableTouch: true,                 // Permite navegação por toque
        enableAutoPlay: true,              // Reprodução automática
        showIndicators: true,              // Mostra indicadores de navegação
        showControls: true,                // Mostra controles de navegação
        
        // Configurações de transição
        transition: {
            type: 'slide',                 // Tipo de transição (slide, fade, zoom)
            duration: 600,                 // Duração da transição em ms
            easing: 'ease-in-out'          // Função de easing
        },
        
        // Configurações de progresso
        progress: {
            enabled: true,                 // Habilita barra de progresso
            height: '4px',                 // Altura da barra
            color: 'rgba(255, 255, 255, 0.8)', // Cor da barra
            position: 'bottom'             // Posição da barra
        }
    },
    
    // ============================================================================
    // CONFIGURAÇÕES DE ANIMAÇÃO
    // ============================================================================
    
    animation: {
        // Configurações de scroll
        scroll: {
            threshold: 0.1,                // Quando animar elementos no scroll
            margin: '0px 0px -50px 0px',  // Margem para trigger da animação
            duration: 600,                 // Duração da animação em ms
            easing: 'ease-out'             // Função de easing
        },
        
        // Configurações de hover
        hover: {
            scale: 1.05,                   // Escala no hover
            translateY: -8,                // Movimento vertical no hover
            shadow: '0 8px 25px rgba(0, 0, 0, 0.15)', // Sombra no hover
            duration: 300                  // Duração da transição em ms
        },
        
        // Configurações de entrada
        entrance: {
            fadeIn: true,                  // Habilita fade in
            slideUp: true,                 // Habilita slide up
            stagger: 100,                  // Delay entre elementos em ms
            duration: 600                  // Duração da animação em ms
        }
    },
    
    // ============================================================================
    // CONFIGURAÇÕES DE NOTIFICAÇÃO
    // ============================================================================
    
    notification: {
        // Configurações gerais
        enabled: true,                     // Habilita sistema de notificações
        position: 'top-right',             // Posição das notificações
        maxVisible: 3,                     // Máximo de notificações visíveis
        
        // Configurações de timing
        timing: {
            autoHide: true,                // Esconde automaticamente
            autoHideDelay: 3000,           // Tempo para esconder (3 segundos)
            showDuration: 300,             // Duração da entrada
            hideDuration: 300              // Duração da saída
        },
        
        // Posições disponíveis
        positions: {
            'top-right': {
                top: '20px',
                right: '20px'
            },
            'top-left': {
                top: '20px',
                left: '20px'
            },
            'bottom-right': {
                bottom: '20px',
                right: '20px'
            },
            'bottom-left': {
                bottom: '20px',
                left: '20px'
            },
            'top-center': {
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)'
            },
            'bottom-center': {
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)'
            }
        }
    },
    
    // ============================================================================
    // CONFIGURAÇÕES DO CARRINHO
    // ============================================================================
    
    cart: {
        // Configurações gerais
        enabled: true,                     // Habilita funcionalidade do carrinho
        persistent: true,                  // Persiste dados entre sessões
        maxItems: 50,                      // Máximo de itens no carrinho
        
        // Configurações de quantidade
        quantity: {
            min: 1,                        // Quantidade mínima
            max: 10,                       // Quantidade máxima
            step: 1                        // Incremento/decremento
        },
        
        // Configurações de preço
        currency: {
            code: 'BRL',                   // Código da moeda
            symbol: 'R$',                  // Símbolo da moeda
            format: 'pt-BR',               // Formato de localização
            decimals: 2                    // Casas decimais
        },
        
        // Configurações de frete
        shipping: {
            freeShippingThreshold: 150,    // Valor para frete grátis
            defaultShippingCost: 15,       // Custo padrão do frete
            maxShippingDays: 15            // Prazo máximo de entrega
        }
    },
    
    // ============================================================================
    // CONFIGURAÇÕES DE FILTROS
    // ============================================================================
    
    filters: {
        // Configurações gerais
        enabled: true,                     // Habilita sistema de filtros
        persistent: true,                  // Persiste filtros entre páginas
        maxVisibleResults: 50,             // Máximo de resultados visíveis
        
        // Tipos de filtros disponíveis
        types: {
            category: true,                // Filtro por categoria
            price: true,                   // Filtro por preço
            brand: true,                   // Filtro por marca
            rating: true,                  // Filtro por avaliação
            sustainability: true,           // Filtro por sustentabilidade
            material: true,                // Filtro por material
            origin: true                   // Filtro por origem
        },
        
        // Configurações de preço
        priceRanges: [
            { id: 'price1', label: 'Até R$ 50', min: 0, max: 50 },
            { id: 'price2', label: 'R$ 50 - R$ 100', min: 50, max: 100 },
            { id: 'price3', label: 'R$ 100 - R$ 200', min: 100, max: 200 },
            { id: 'price4', label: 'Acima de R$ 200', min: 200, max: null }
        ]
    },
    
    // ============================================================================
    // CONFIGURAÇÕES DE FORMULÁRIOS
    // ============================================================================
    
    forms: {
        // Configurações gerais
        validation: {
            enabled: true,                 // Habilita validação
            realTime: true,                // Validação em tempo real
            showErrors: true,              // Mostra erros de validação
            scrollToError: true            // Rola para o primeiro erro
        },
        
        // Configurações de contato
        contact: {
            maxMessageLength: 1000,        // Tamanho máximo da mensagem
            requiredFields: ['firstName', 'lastName', 'email', 'subject', 'message'],
            emailDomains: ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com']
        },
        
        // Configurações de newsletter
        newsletter: {
            enabled: true,                 // Habilita inscrição na newsletter
            doubleOptIn: true,             // Confirmação dupla de email
            maxEmailsPerDay: 1             // Máximo de emails por dia
        }
    },
    
    // ============================================================================
    // CONFIGURAÇÕES DE PERFORMANCE
    // ============================================================================
    
    performance: {
        // Configurações de lazy loading
        lazyLoading: {
            enabled: true,                 // Habilita lazy loading
            threshold: 0.1,                // Threshold para carregamento
            placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjlmYSIvPjwvc3ZnPg=='
        },
        
        // Configurações de cache
        cache: {
            enabled: true,                 // Habilita cache
            duration: 3600000,             // Duração do cache (1 hora)
            maxSize: 50                    // Máximo de itens em cache
        },
        
        // Configurações de debounce/throttle
        events: {
            scroll: {
                throttle: 16               // Throttle para scroll (~60fps)
            },
            resize: {
                debounce: 250              // Debounce para resize
            },
            search: {
                debounce: 300              // Debounce para busca
            }
        }
    },
    
    // ============================================================================
    // CONFIGURAÇÕES DE ACESSIBILIDADE
    // ============================================================================
    
    accessibility: {
        // Configurações gerais
        enabled: true,                     // Habilita recursos de acessibilidade
        
        // Configurações de navegação
        navigation: {
            skipLinks: true,               // Links para pular conteúdo
            focusIndicators: true,         // Indicadores de foco
            keyboardNavigation: true       // Navegação por teclado
        },
        
        // Configurações de contraste
        contrast: {
            highContrastMode: false,       // Modo de alto contraste
            colorBlindFriendly: true       // Cores amigáveis para daltônicos
        },
        
        // Configurações de texto
        text: {
            resizable: true,               // Permite redimensionar texto
            minFontSize: 12,               // Tamanho mínimo da fonte
            maxFontSize: 24                // Tamanho máximo da fonte
        }
    },
    
    // ============================================================================
    // CONFIGURAÇÕES DE ANALYTICS
    // ============================================================================
    
    analytics: {
        // Configurações gerais
        enabled: false,                    // Habilita analytics (desabilitado por padrão)
        
        // Configurações de eventos
        events: {
            pageView: true,                // Rastreia visualizações de página
            productView: true,             // Rastreia visualizações de produto
            addToCart: true,               // Rastreia adições ao carrinho
            purchase: true,                // Rastreia compras
            search: true,                  // Rastreia buscas
            formSubmission: true           // Rastreia envios de formulário
        },
        
        // Configurações de privacidade
        privacy: {
            anonymizeIP: true,             // Anonimiza endereços IP
            respectDoNotTrack: true,       // Respeita cabeçalho DNT
            cookieConsent: true            // Requer consentimento para cookies
        }
    },
    
    // ============================================================================
    // CONFIGURAÇÕES DE DEBUG
    // ============================================================================
    
    debug: {
        // Configurações gerais
        enabled: false,                    // Habilita modo debug
        
        // Configurações de console
        console: {
            logLevel: 'info',              // Nível de log (error, warn, info, debug)
            showTimestamps: true,          // Mostra timestamps nos logs
            showCallStack: false           // Mostra call stack nos logs
        },
        
        // Configurações de performance
        performance: {
            measureTimings: false,         // Mede tempos de execução
            showMetrics: false,            // Mostra métricas de performance
            logSlowOperations: true        // Loga operações lentas
        }
    }
};

// ============================================================================
// FUNÇÕES UTILITÁRIAS DE CONFIGURAÇÃO
// ============================================================================

/**
 * Obtém uma configuração específica
 * @param {string} path - Caminho da configuração (ex: 'carousel.interval')
 * @param {*} defaultValue - Valor padrão se a configuração não existir
 * @returns {*} Valor da configuração
 */
function getConfig(path, defaultValue = null) {
    const keys = path.split('.');
    let value = EcoTrendConfig;
    
    for (const key of keys) {
        if (value && typeof value === 'object' && key in value) {
            value = value[key];
        } else {
            return defaultValue;
        }
    }
    
    return value;
}

/**
 * Define uma configuração específica
 * @param {string} path - Caminho da configuração
 * @param {*} value - Valor a ser definido
 */
function setConfig(path, value) {
    const keys = path.split('.');
    let current = EcoTrendConfig;
    
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!(key in current) || typeof current[key] !== 'object') {
            current[key] = {};
        }
        current = current[key];
    }
    
    current[keys[keys.length - 1]] = value;
}

/**
 * Verifica se uma configuração está habilitada
 * @param {string} path - Caminho da configuração
 * @returns {boolean} True se habilitada
 */
function isConfigEnabled(path) {
    return getConfig(path, false) === true;
}

/**
 * Obtém todas as configurações
 * @returns {Object} Objeto com todas as configurações
 */
function getAllConfig() {
    return JSON.parse(JSON.stringify(EcoTrendConfig));
}

// ============================================================================
// EXPOSIÇÃO DAS FUNÇÕES
// ============================================================================

// Disponibiliza funções globalmente
window.EcoTrendConfig = EcoTrendConfig;
window.getConfig = getConfig;
window.setConfig = setConfig;
window.isConfigEnabled = isConfigEnabled;
window.getAllConfig = getAllConfig;

// Log de inicialização (apenas em modo debug)
if (getConfig('debug.enabled', false)) {
    console.log('🌱 EcoTrend Config carregado:', {
        version: '2.0.0',
        timestamp: new Date().toISOString(),
        config: getAllConfig()
    });
}
