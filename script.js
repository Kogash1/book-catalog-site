// База данных книг каталога
const BOOKS_DB = {
    "master-i-margarita": {
        title: "Мастер и Маргарита",
        author: "Михаил Афанасьевич Булгаков",
        authorAnchor: "authors.html#bulgakov",
        genre: "Фэнтези / Классическая проза",
        category: "Художественная литература",
        year: "2026 г.",
        price: 850,
        rating: "4.95",
        reviewsCount: "1 420",
        convenience: "9.8/10",
        coverClass: "cover-1",
        subtitle: "Подарочное иллюстрированное издание",
        isbn: "978-5-17-090333-8",
        binding: "Твердый переплет (7БЦ) с золотым тиснением и ляссе",
        paper: "80 г/м², офсетная белая (не просвечивает)",
        weight: "460 г / 130×205 мм (512 страниц)",
        digital: "EPUB, FB2, PDF + Аудиокнига (14 ч. 20 мин., читает А. Клюквин)",
        description: "Бессмертный философско-мистический роман Михаила Булгакова. Весенним днем в Москве на Патриарших прудах появляется загадочный иностранец Воланд со своей свитой, переплетая сатиру на столичный быт, историю самоотверженной любви Мастера и Маргариты и библейские главы о Понтии Пилате.",
        fragmentTitle: "Глава 1. Никогда не разговаривайте с неизвестными",
        fragmentText: "Однажды весною, в час небывало жаркого заката, в Москве, на Патриарших прудах, появились два гражданина. Первый из них, одетый в летнюю серенькую пару, был маленького роста, упитан, лыс, свою приличную шляпу пирожком нес в руке, а на хорошо выбритом лице его помещались сверхъестественных размеров очки в черной роговой оправе...",
        sameAuthor: ["sobache-serdtse", "belaya-gvardiya"],
        similar: ["faust", "portret-doriana-greya"],
        reviews: [
            { name: "Екатерина Смирнова", score: 5, conv: 10, text: "Прекрасное издание! Бумага действительно плотная 80 г/м², глаза не устают, корешок прошитый — книга раскрывается на 180 градусов.", photos: true },
            { name: "Игорь Петров", score: 5, conv: 9, text: "Любимый роман в достойном оформлении. Шрифт четкий, иллюстрации атмосферные.", photos: false }
        ]
    },
    "ten-little-indians": {
        title: "Десять негритят",
        author: "Агата Кристи",
        authorAnchor: "authors.html#christie",
        genre: "Классический детектив",
        category: "Художественная литература",
        year: "2025 г.",
        price: 690,
        rating: "4.89",
        reviewsCount: "980",
        convenience: "9.6/10",
        coverClass: "cover-2",
        subtitle: "Золотой фонд мирового детектива",
        isbn: "978-5-04-112450-2",
        binding: "Твердый переплет с матовой ламинацией",
        paper: "75 г/м², офсетная кремовая",
        weight: "320 г / 130×200 мм (320 страниц)",
        digital: "EPUB, FB2 + Аудиокнига (8 ч. 10 мин., читает С. Чонишвили)",
        description: "Десять совершенно незнакомых друг с другом людей получают приглашение приехать в роскошный особняк на уединенном острове. Но хозяина на месте не оказывается, а во время ужина граммофон предъявляет каждому гостю смертельное обвинение. Отрезанные от материка бурей, герои начинают погибать один за другим по тексту детской считалки.",
        fragmentTitle: "Глава 1. На пути к острову",
        fragmentText: "В углу вагона первого класса для курящих сидел мистер судья Уоргрейв, недавно ушедший в отставку. Он затягивался сигарой и с живым интересом пробегал глазами политические новости в газете «Таймс». Он отложил газету и посмотрел в окно...",
        sameAuthor: ["sobache-serdtse", "belaya-gvardiya"],
        similar: ["portret-doriana-greya", "faust"],
        reviews: [
            { name: "Марина К.", score: 5, conv: 10, text: "Эталон герметичного детектива! Прочитала за одну ночь, невозможно догадаться, кто убийца, до самого эпилога.", photos: true }
        ]
    },
    "brief-history-of-time": {
        title: "Краткая история времени",
        author: "Стивен Хокинг",
        authorAnchor: "authors.html#hawking",
        genre: "Наука / Физика и космология",
        category: "Нехудожественная литература",
        year: "2024 г.",
        price: 990,
        rating: "4.82",
        reviewsCount: "640",
        convenience: "9.7/10",
        coverClass: "cover-3",
        subtitle: "От Большого взрыва до черных дыр",
        isbn: "978-5-17-148892-1",
        binding: "Твердый переплет, увеличенный формат",
        paper: "90 г/м², мелованная матовая с цветными схемами",
        weight: "540 г / 145×215 мм (288 страниц)",
        digital: "PDF, EPUB + Аудиокнига (7 ч. 45 мин.)",
        description: "Знаменитый научно-популярный бестселлер великого физика-теоретика Стивена Хокинга. Автор простым и увлекательным языком без сложных формул рассказывает о происхождении Вселенной, природе пространства и времени, черных дырах, теории суперструн и поисках единой теории всего.",
        fragmentTitle: "Глава 1. Наши представления о Вселенной",
        fragmentText: "Однажды известный ученый (говорят, что это был Бертран Рассел) читал публичную лекцию по астрономии. Он рассказал, как Земля вращается вокруг Солнца, а Солнце, в свою очередь, обращается вокруг центра огромного скопления звезд, которое называют нашей Галактикой...",
        sameAuthor: ["thinking-fast-and-slow"],
        similar: ["dune", "thinking-fast-and-slow"],
        reviews: [
            { name: "Алексей В.", score: 5, conv: 10, text: "Отличная плотная бумага и наглядные иллюстрации. Сложные вещи о космосе объясняются максимально понятно.", photos: true }
        ]
    },
    "dune": {
        title: "Дюна. Хроники Арракиса",
        author: "Фрэнк Герберт",
        authorAnchor: "authors.html#herbert",
        genre: "Научная фантастика",
        category: "Художественная литература",
        year: "2026 г.",
        price: 1120,
        rating: "4.91",
        reviewsCount: "1 150",
        convenience: "9.9/10",
        coverClass: "cover-4",
        subtitle: "Иллюстрированное коллекционное издание",
        isbn: "978-5-17-112904-0",
        binding: "Твердый переплет с рельефным тиснением фольгой",
        paper: "85 г/м², офсетная повышенной белизны",
        weight: "790 г / 150×220 мм (768 страниц)",
        digital: "EPUB, FB2 + Многоголосая аудиокнига (23 ч. 15 мин.)",
        description: "Величайший научно-фантастический эпос XX века. Песчаная планета Арракис — единственный во Вселенной источник бесценной Пряности. Когда Дом Атрейдесов попадает в смертельную ловушку барона Харконнена, юному Полу Атрейдесу предстоит возглавить пустынных фрименов и изменить судьбу всей Галактической Империи.",
        fragmentTitle: "Книга 1. Дюна — Начало пути",
        fragmentText: "В последнюю неделю перед отлетом на Арракис, когда вся эта преддорожная суматоха достигла почти невыносимого накала, к матери мальчика пришла в гости глубокая старуха. Ночь стояла теплая в замке Каладан, и древняя каменная громада, служившая верой и правдой двадцати шести поколениям Атрейдесов, перед переменой погоды, как обычно, отпотевала прохладой...",
        sameAuthor: ["brief-history-of-time"],
        similar: ["master-i-margarita", "faust"],
        reviews: [
            { name: "Дмитрий Н.", score: 5, conv: 10, text: "Монументальное издание! Несмотря на 768 страниц, книгу очень удобно держать в руках, перевод классический.", photos: true }
        ]
    },
    "thinking-fast-and-slow": {
        title: "Думай медленно… решай быстро",
        author: "Даниэль Канеман",
        authorAnchor: "authors.html",
        genre: "Психология / Нон-фикшн",
        category: "Нехудожественная литература",
        year: "2025 г.",
        price: 940,
        rating: "4.87",
        reviewsCount: "890",
        convenience: "9.5/10",
        coverClass: "cover-5",
        subtitle: "Бестселлер лауреата Нобелевской премии",
        isbn: "978-5-17-080053-7",
        binding: "Твердый переплет",
        paper: "80 г/м², офсетная белая",
        weight: "610 г / 145×215 мм (656 страниц)",
        digital: "EPUB, PDF + Аудиокнига (19 ч. 50 мин.)",
        description: "Нобелевский лауреат Даниэль Канеман объясняет, почему мы совершаем нерациональные поступки и как работают две системы нашего мышления: «Система 1» (быстрая, автоматическая и эмоциональная) и «Система 2» (медленная, осознанная и логическая).",
        fragmentTitle: "Введение. Две системы мышления",
        fragmentText: "У каждого из нас есть множество впечатлений и мыслей, которые возникают на пике сознательной деятельности, и мы редко задумываемся, откуда они берутся. Как мы умудряемся мгновенно считать раздражение в голосе собеседника по первому слову по телефону?..",
        sameAuthor: ["brief-history-of-time"],
        similar: ["brief-history-of-time", "dune"],
        reviews: [
            { name: "Ольга С.", score: 5, conv: 9, text: "Книга перевернула взгляд на принятие решений в работе и финансах. Читается вдумчиво, бумага плотная.", photos: false }
        ]
    },
    "little-prince": {
        title: "Маленький принц (с авторскими иллюстрациями)",
        author: "Антуан де Сент-Экзюпери",
        authorAnchor: "authors.html",
        genre: "Детская литература / Сказки-притчи",
        category: "Детская литература",
        year: "2026 г.",
        price: 590,
        rating: "4.96",
        reviewsCount: "1 580",
        convenience: "10/10",
        coverClass: "cover-6",
        subtitle: "Полное собрание цветных акварелей автора",
        isbn: "978-5-699-91420-3",
        binding: "Твердый пухлый переплет с тиснением",
        paper: "120 г/м², мелованная плотная бумага",
        weight: "380 г / 170×230 мм (128 страниц)",
        digital: "PDF, EPUB + Аудиоспектакль с симфоническим оркестром (2 ч. 10 мин.)",
        description: "Самая трогательная и мудрая сказка-притча в мировой литературе в классическом переводе Норы Галь. Книга о дружбе, любви, ответственности за тех, кого мы приручили, и умении видеть сердцем. Издание на плотной мелованной бумаге с оригинальными акварелями Антуана де Сент-Экзюпери.",
        fragmentTitle: "Глава 1. Рисунок удава",
        fragmentText: "Когда мне было шесть лет, в книге под названием «Правдивые истории», где рассказывалось про девственные леса, я увидел однажды удивительную картинку. На картинке огромная змея — удав — глотала хищного зверя...",
        sameAuthor: ["master-i-margarita"],
        similar: ["master-i-margarita", "portret-doriana-greya"],
        reviews: [
            { name: "Наталья Романова", score: 5, conv: 10, text: "Покупала ребенку в подарок — восторг! Бумага 120 г/м² как в художественном альбоме, акварели яркие.", photos: true }
        ]
    },
    "sobache-serdtse": {
        title: "Собачье сердце",
        author: "Михаил Афанасьевич Булгаков",
        authorAnchor: "authors.html#bulgakov",
        genre: "Сатирическая фантастика / Классика",
        category: "Художественная литература",
        year: "2025 г.",
        price: 520,
        rating: "4.92",
        reviewsCount: "1 110",
        convenience: "9.7/10",
        coverClass: "cover-2",
        subtitle: "Повести и рассказы 1920-х годов",
        isbn: "978-5-17-098112-1",
        binding: "Твердый переплет",
        paper: "80 г/м², офсетная белая",
        weight: "290 г / 130×200 мм (256 страниц)",
        digital: "EPUB, FB2 + Аудиокнига (4 ч. 30 мин.)",
        description: "Блестящая сатирическая повесть о смелом научном эксперименте профессора Филиппа Филипповича Преображенского и доктора Борменталя, пересадивших бездомному псу Шарику человеческий гипофиз.",
        fragmentTitle: "Глава 1. В подворотне",
        fragmentText: "У-у-у-у-у-гу-гу-гу-уу! О, гляньте на меня, я погибаю! Вьюга в подворотне ревет мне отходную, и я вою с нею. Пропал я, пропал! Негодяй в грязном колпаке — повар столовой нормального питания служащих Центрального Совета Народного Хозяйства — плеснул кипятком и обварил мне левый бок...",
        sameAuthor: ["master-i-margarita", "belaya-gvardiya"],
        similar: ["faust", "ten-little-indians"],
        reviews: [
            { name: "Сергей М.", score: 5, conv: 10, text: "Классика на все времена, каждую фразу знаешь наизусть. Качество печати отличное.", photos: false }
        ]
    },
    "belaya-gvardiya": {
        title: "Белая гвардия",
        author: "Михаил Афанасьевич Булгаков",
        authorAnchor: "authors.html#bulgakov",
        genre: "Историческая литература / Роман",
        category: "Художественная литература",
        year: "2025 г.",
        price: 640,
        rating: "4.86",
        reviewsCount: "790",
        convenience: "9.6/10",
        coverClass: "cover-3",
        subtitle: "Полная авторская редакция",
        isbn: "978-5-17-105421-3",
        binding: "Твердый переплет",
        paper: "80 г/м², офсетная",
        weight: "370 г / 130×205 мм (384 страницы)",
        digital: "EPUB, FB2 + Аудиокнига (11 ч. 40 мин.)",
        description: "Пронзительный исторический роман о судьбе интеллигентной семьи Турбиных в вихре событий зимы 1918 года. Дом с кремовыми шторами становится последним островком тепла, чести и человечности среди рушащегося мира.",
        fragmentTitle: "Часть первая. Белый снег",
        fragmentText: "Велик был год и страшен год по Рождестве Христовом 1918, от начала же революции второй. Был он обилен летом солнцем, а зимою снегом, и особенно высоко в небе стояли две звезды: звезда пастушеская — вечерняя Венера и красный, дрожащий Марс...",
        sameAuthor: ["master-i-margarita", "sobache-serdtse"],
        similar: ["master-i-margarita", "portret-doriana-greya"],
        reviews: [
            { name: "Елена П.", score: 5, conv: 9, text: "Невероятно уютный и одновременно трагичный роман. Отличная верстка и шрифт.", photos: true }
        ]
    },
    "faust": {
        title: "Фауст",
        author: "Иоганн Вольфганг Гёте",
        authorAnchor: "authors.html",
        genre: "Классическая драма / Мистика",
        category: "Художественная литература",
        year: "2024 г.",
        price: 780,
        rating: "4.88",
        reviewsCount: "710",
        convenience: "9.7/10",
        coverClass: "cover-5",
        subtitle: "Перевод Б. Л. Пастернака с гравюрами Гюстава Доре",
        isbn: "978-5-389-08412-4",
        binding: "Твердый переплет с золотым тиснением",
        paper: "85 г/м², офсетная",
        weight: "490 г / 140×210 мм (544 страницы)",
        digital: "EPUB, PDF + Аудиоспектакль (13 ч. 00 мин.)",
        description: "Вершина мировой философской поэзии, вдохновившая Михаила Булгакова на создание «Мастера и Маргариты». История доктора Фауста, заключившего сделку с Мефистофелем в поисках высшего смысла бытия и вечной молодости.",
        fragmentTitle: "Пролог на небесах",
        fragmentText: "Звучит солнце по-старому в братстве дневных светил, и свой предписанный обход свершает с громом громовым...",
        sameAuthor: ["portret-doriana-greya"],
        similar: ["master-i-margarita", "portret-doriana-greya"],
        reviews: [
            { name: "Виктор Д.", score: 5, conv: 10, text: "Иллюстрации и комментарии в конце книги помогают разобраться во всех аллюзиях.", photos: true }
        ]
    },
    "portret-doriana-greya": {
        title: "Портрет Дориана Грея",
        author: "Оскар Уайльд",
        authorAnchor: "authors.html",
        genre: "Мистический роман / Классика",
        category: "Художественная литература",
        year: "2026 г.",
        price: 610,
        rating: "4.90",
        reviewsCount: "1 340",
        convenience: "9.8/10",
        coverClass: "cover-4",
        subtitle: "Коллекционная серия зарубежной классики",
        isbn: "978-5-17-089143-6",
        binding: "Твердый переплет",
        paper: "80 г/м², офсетная белая",
        weight: "310 г / 130×200 мм (320 страниц)",
        digital: "EPUB, FB2 + Аудиокнига (8 ч. 50 мин.)",
        description: "Знаменитый философский роман Оскара Уайльда о невероятно красивом юноше Дориане Грее, чей живописный портрет берет на себя следы времени, пороков и преступлений своего владельца, позволяя самому Дориану оставаться вечно молодым.",
        fragmentTitle: "Глава 1. Мастерская художника",
        fragmentText: "Мастерская была наполнена густым благоуханием роз, а когда в саду поднимался летний ветерок, он доносил сквозь открытую дверь то пьянящий запах сирени, то нежный аромат розовых цветов боярышника...",
        sameAuthor: ["faust"],
        similar: ["master-i-margarita", "faust"],
        reviews: [
            { name: "Алина Т.", score: 5, conv: 10, text: "Книга полна блестящих афоризмов на каждой странице! Оформление очень стильное.", photos: true }
        ]
    }
};

// Инициализация счетчиков корзины, сравнения и бонусов
function updateHeaderCounters() {
    const compareList = JSON.parse(localStorage.getItem('compareBooks') || '["Мастер и Маргарита", "Десять негритят"]');
    const cartCount = parseInt(localStorage.getItem('cartCount') || '2', 10);
    const bonusPoints = parseInt(localStorage.getItem('bonusPoints') || '350', 10);

    document.querySelectorAll('.js-compare-count').forEach(el => el.textContent = compareList.length);
    document.querySelectorAll('.js-cart-count').forEach(el => el.textContent = cartCount);
    document.querySelectorAll('.js-bonus-count').forEach(el => el.textContent = bonusPoints);
}

function addToCart(bookTitle) {
    let count = parseInt(localStorage.getItem('cartCount') || '2', 10);
    localStorage.setItem('cartCount', count + 1);
    updateHeaderCounters();
    alert(`Книга «${bookTitle}» добавлена в корзину!`);
}

function addToCompare(bookTitle) {
    let list = JSON.parse(localStorage.getItem('compareBooks') || '["Мастер и Маргарита", "Десять негритят"]');
    if (!list.includes(bookTitle)) {
        list.push(bookTitle);
        localStorage.setItem('compareBooks', JSON.stringify(list));
        updateHeaderCounters();
        alert(`Книга «${bookTitle}» добавлена в список сравнения!`);
    } else {
        alert(`Книга «${bookTitle}» уже находится в списке сравнения.`);
    }
}

// Калькулятор доставки в карточке книги
function calculateDelivery(city) {
    const rates = {
        'Москва': { courier: 'завтра, 200 ₽ (бесплатно от 1500 ₽)', pvz: 'завтра, 120 ₽', pickup: 'сегодня, бесплатно' },
        'Тула': { courier: 'завтра, 180 ₽ (бесплатно от 1200 ₽)', pvz: 'завтра, 90 ₽', pickup: 'сегодня, бесплатно (пр. Ленина, 1)' },
        'Санкт-Петербург': { courier: '1–2 дня, 250 ₽', pvz: '1–2 дня, 150 ₽', pickup: 'завтра, бесплатно' },
        'Уфа': { courier: '2–3 дня, 320 ₽', pvz: '2–3 дня, 190 ₽', pickup: 'через 2 дня, бесплатно' },
        'Екатеринбург': { courier: '2–3 дня, 340 ₽', pvz: '2–3 дня, 210 ₽', pickup: 'через 2 дня, бесплатно' }
    };
    const info = rates[city] || rates['Москва'];
    const resultEl = document.getElementById('delivery-result');
    if (resultEl) {
        resultEl.innerHTML = `
            <li>🚚 <strong>Курьером до двери:</strong> ${info.courier}</li>
            <li>📦 <strong>Пункты выдачи (СДЭК, Boxberry):</strong> ${info.pvz}</li>
            <li>🏪 <strong>Самовывоз из магазина:</strong> ${info.pickup}</li>
        `;
    }
}

// Загрузка конкретной книги на странице book.html по параметру ?id=...
function loadBookDetailsPage() {
    const titleEl = document.getElementById('js-book-title');
    if (!titleEl) return; // Мы не на странице book.html

    const params = new URLSearchParams(window.location.search);
    const bookId = params.get('id') || 'master-i-margarita';
    const book = BOOKS_DB[bookId] || BOOKS_DB['master-i-margarita'];

    // Обновляем SEO Title и мета-описание страницы
    document.title = `Купить книгу «${book.title}» ${book.author} — отзывы, ISBN ${book.isbn} | Книжный Мир`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', `Книга ${book.title} (${book.author}, ISBN ${book.isbn}). ${book.binding}, бумага ${book.paper}. Читать фрагмент, слушать аудио и отзывы.`);
    }

    // Хлебные крошки и основные поля
    document.getElementById('js-bread-cat').textContent = book.category;
    document.getElementById('js-bread-title').textContent = book.title;
    document.getElementById('js-book-genre').textContent = book.genre;
    titleEl.textContent = book.title;

    const authorLink = document.getElementById('js-book-author');
    authorLink.textContent = book.author;
    authorLink.href = book.authorAnchor;

    document.getElementById('js-book-rating').innerHTML = `⭐ ${book.rating} (${book.reviewsCount} оценок) • Удобство издания: ${book.convenience} • <a href="#reviews" style="color:var(--primary);">Читать отзывы</a>`;

    // Обложка
    const coverBox = document.getElementById('js-book-cover');
    coverBox.className = `book-cover ${book.coverClass}`;
    coverBox.innerHTML = `${book.title}<br><small style="font-size:0.9rem; opacity:0.85; margin-top:10px;">${book.subtitle}</small>`;

    // Цена, бонусы и Сплит
    const bonusEarned = Math.round(book.price * 0.05);
    const splitPart = (book.price / 4).toFixed(2);
    document.getElementById('js-book-price').innerHTML = `${book.price} ₽ <span style="font-size:0.95rem; font-weight:500; color:var(--success);">✓ В наличии (+${bonusEarned} бонусов)</span>`;
    document.getElementById('js-book-split').innerHTML = `В Сплит / Долями: <strong>4 платежа по ${splitPart} ₽</strong> без переплат`;

    // Кнопки корзины и сравнения
    document.getElementById('js-btn-cart').onclick = () => addToCart(book.title);
    document.getElementById('js-btn-compare').onclick = () => addToCompare(book.title);

    // Таблица характеристик
    document.getElementById('js-spec-isbn').textContent = book.isbn;
    document.getElementById('js-spec-year').textContent = book.year;
    document.getElementById('js-spec-binding').textContent = book.binding;
    document.getElementById('js-spec-paper').textContent = book.paper;
    document.getElementById('js-spec-weight').textContent = book.weight;
    document.getElementById('js-spec-digital').textContent = book.digital;
    document.getElementById('js-book-desc').textContent = book.description;

    // Фрагмент и аудио в модальных окнах
    document.getElementById('js-fragment-title').textContent = `Ознакомительный фрагмент — ${book.fragmentTitle}`;
    document.getElementById('js-fragment-text').textContent = book.fragmentText;
    document.getElementById('js-audio-info').textContent = `${book.title} (${book.author}) • Формат: ${book.digital}`;

    // Рендерим связанные книги (другие книги автора + похожие произведения)
    const relatedContainer = document.getElementById('js-related-books');
    const relatedList = [
        ...book.sameAuthor.map(id => ({ id, label: 'Другая книга автора' })),
        ...book.similar.map(id => ({ id, label: 'Похожее произведение' }))
    ].slice(0, 4);

    relatedContainer.innerHTML = relatedList.map(item => {
        const rel = BOOKS_DB[item.id];
        if (!rel) return '';
        return `
            <div class="book-card">
                <a href="book.html?id=${item.id}" class="book-cover ${rel.coverClass}"><span>${rel.title}</span></a>
                <div class="book-body">
                    <span class="book-genre">${item.label}</span>
                    <a href="book.html?id=${item.id}" class="book-title">${rel.title}</a>
                    <a href="${rel.authorAnchor}" class="book-author">${rel.author}</a>
                    <div class="book-rating">⭐ ${rel.rating} (${rel.reviewsCount} оценок)</div>
                    <div class="book-price-row">
                        <span class="price">${rel.price} ₽</span>
                        <a href="book.html?id=${item.id}" class="btn btn-primary">Открыть</a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Рендерим отзывы конкретной книги
    const reviewsContainer = document.getElementById('reviews-list');
    reviewsContainer.innerHTML = book.reviews.map(rev => `
        <div class="card" style="margin-bottom:16px;">
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <strong>${rev.name} (Проверенный покупатель)</strong>
                <span style="color:#d97706; font-weight:700;">⭐ Оценка: ${rev.score}/5 | Удобство издания: ${rev.conv}/10</span>
            </div>
            <p>${rev.text}</p>
            ${rev.photos ? '<div class="genre-tags" style="margin-top:10px;"><span class="tag">📷 Фото: Обложка вживую</span><span class="tag">📷 Фото: Разворот книги</span></div>' : ''}
        </div>
    `).join('');
}

// Модальные окна для фрагмента, аудио и разворотов
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

// Фильтрация и сортировка на странице каталога
function filterCatalog() {
    const category = document.getElementById('filter-category')?.value || 'all';
    const genre = document.getElementById('filter-genre')?.value || 'all';
    const minRating = parseFloat(document.getElementById('filter-rating')?.value || '0');
    const searchQuery = (document.getElementById('filter-search')?.value || '').toLowerCase();
    const sortBy = document.getElementById('sort-select')?.value || 'popular';

    const container = document.getElementById('catalog-books-grid');
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.book-card'));

    cards.forEach(card => {
        const cCat = card.dataset.category;
        const cGenre = card.dataset.genre;
        const cRating = parseFloat(card.dataset.rating);
        const cTitle = card.dataset.title.toLowerCase();
        const cAuthor = card.dataset.author.toLowerCase();

        const matchCat = (category === 'all' || cCat === category);
        const matchGenre = (genre === 'all' || cGenre === genre);
        const matchRating = cRating >= minRating;
        const matchSearch = (!searchQuery || cTitle.includes(searchQuery) || cAuthor.includes(searchQuery));

        card.style.display = (matchCat && matchGenre && matchRating && matchSearch) ? 'flex' : 'none';
    });

    const sorted = cards.sort((a, b) => {
        if (sortBy === 'rating') return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
        if (sortBy === 'date') return parseInt(b.dataset.year) - parseInt(a.dataset.year);
        if (sortBy === 'title') return a.dataset.title.localeCompare(b.dataset.title);
        return parseInt(b.dataset.reviews) - parseInt(a.dataset.reviews);
    });

    sorted.forEach(card => container.appendChild(card));
}

// Добавление отзыва с начислением бонусов
function submitBookReview(event) {
    event.preventDefault();
    const name = document.getElementById('rev-name').value;
    const text = document.getElementById('rev-text').value;
    const score = document.getElementById('rev-score').value;
    const convenience = document.getElementById('rev-convenience').value;
    const hasPhoto = document.getElementById('rev-photo').checked;

    const reviewsList = document.getElementById('reviews-list');
    const newReview = document.createElement('div');
    newReview.className = 'card';
    newReview.style.marginBottom = '16px';
    newReview.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <strong>${name}</strong>
            <span style="color:#d97706; font-weight:700;">⭐ Оценка: ${score}/5 | Удобство издания: ${convenience}/10</span>
        </div>
        <p>${text}</p>
        ${hasPhoto ? '<div class="genre-tags" style="margin-top:10px;"><span class="tag">📷 Фото обложки (прикреплено)</span><span class="tag">📷 Фото разворота (прикреплено)</span></div>' : ''}
    `;
    reviewsList.prepend(newReview);

    let bonus = parseInt(localStorage.getItem('bonusPoints') || '350', 10);
    bonus += hasPhoto ? 50 : 20;
    localStorage.setItem('bonusPoints', bonus);
    updateHeaderCounters();

    event.target.reset();
    alert(`Спасибо за отзыв! На ваш бонусный счет начислено ${hasPhoto ? 50 : 20} баллов.`);
}

document.addEventListener('DOMContentLoaded', () => {
    updateHeaderCounters();
    loadBookDetailsPage();
    if (document.getElementById('delivery-city')) {
        calculateDelivery(document.getElementById('delivery-city').value);
    }
});