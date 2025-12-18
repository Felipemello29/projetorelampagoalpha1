// ==========================================
// 1. DADOS (Data) - ATUALIZADO PARA LOCAL
// ==========================================

const cardsData = [
    {
        city: "Nærøyfjorden",
        country: "NORWAY",
        // Antes era https://..., agora é o caminho local
        image: "./img/norway.jpg" 
    },
    {
        city: "Antelope Canyon",
        country: "UNITED STATES",
        image: "./img/usa.jpg"
    },
    {
        city: "Grossglockner",
        country: "AUSTRIA",
        image: "./img/austria.jpg"
    }
];

const journalData = [
    {
        image: "./img/yosemite.jpg", // Imagem local
        date: "MAY 30, 2017",
        title: "An Unforgettable",
        description: "If you only have one day to visit Yosemite National Park and you want to make the most out of it."
    },
    {
        image: "./img/bridge.jpg", // Imagem local
        date: "MAY 28, 2017",
        title: "Symphonies in Steel",
        description: "Crossing the Golden Gate Bridge from San Francisco, you arrive in Marin even before landing on solid ground."
    }
];

// ==========================================
// 2. COMPONENTES (Functions)
// ==========================================

function criarHeader() {
    const headerEl = document.createElement('header');
    const navEl = document.createElement('nav');
    const ulEl = document.createElement('ul');

    headerEl.style.width = '100%';
    headerEl.style.padding = '20px 0';
    headerEl.style.backgroundColor = '#222';
    headerEl.style.color = '#fff';
    headerEl.style.fontFamily = 'sans-serif';

    ulEl.style.display = 'flex';
    ulEl.style.justifyContent = 'center';
    ulEl.style.alignItems = 'center';
    ulEl.style.listStyle = 'none';
    ulEl.style.margin = '0';
    ulEl.style.padding = '0';
    ulEl.style.gap = '40px';

    // Ícones SVG continuam iguais pois são código, não arquivos
    const locationIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
    const searchIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;

    const itensMenu = [
        { tipo: 'texto', label: 'ABOUT' },
        { tipo: 'texto', label: 'EXPLORE' },
        { tipo: 'icone-central', html: locationIconSvg },
        { tipo: 'texto', label: 'JOURNAL' },
        { tipo: 'busca', label: 'SEARCH', iconHtml: searchIconSvg }
    ];

    itensMenu.forEach(item => {
        const liEl = document.createElement('li');
        const linkEl = document.createElement('a');
        linkEl.href = '#';
        linkEl.style.textDecoration = 'none';
        linkEl.style.color = 'inherit';
        linkEl.style.display = 'flex';
        linkEl.style.alignItems = 'center';
        linkEl.style.fontSize = '14px';
        linkEl.style.fontWeight = 'bold';
        linkEl.style.letterSpacing = '1px';

        if (item.tipo === 'texto') {
            linkEl.textContent = item.label;
        } else if (item.tipo === 'icone-central') {
            linkEl.innerHTML = item.html;
            liEl.style.transform = "scale(1.2)";
        } else if (item.tipo === 'busca') {
            linkEl.innerHTML = item.iconHtml + item.label;
        }
        liEl.appendChild(linkEl);
        ulEl.appendChild(liEl);
    });

    navEl.appendChild(ulEl);
    headerEl.appendChild(navEl);
    return headerEl;
}

function criarOutdoor() {
    const sectionEl = document.createElement('section');
    sectionEl.style.display = 'flex';
    sectionEl.style.flexDirection = 'column';
    sectionEl.style.justifyContent = 'center';
    sectionEl.style.alignItems = 'center';
    sectionEl.style.height = '500px';
    sectionEl.style.textAlign = 'center';
    sectionEl.style.backgroundColor = '#333';
    
    // ATUALIZADO: Caminho local para a imagem de fundo do banner
    sectionEl.style.backgroundImage = "url('./img/outdoor-bg.jpg')";
    
    sectionEl.style.backgroundSize = 'cover';
    sectionEl.style.backgroundPosition = 'center';
    sectionEl.style.color = '#fff';
    sectionEl.style.fontFamily = "'Times New Roman', serif";

    const titleEl = document.createElement('h1');
    titleEl.textContent = 'The Great Outdoors';
    titleEl.style.fontSize = '48px';
    titleEl.style.fontWeight = 'bold';
    titleEl.style.margin = '0 0 10px 0';
    titleEl.style.textShadow = '0 2px 4px rgba(0,0,0,0.5)';

    const subtitleEl = document.createElement('p');
    subtitleEl.textContent = 'Wander often. Wonder always.';
    subtitleEl.style.fontSize = '16px';
    subtitleEl.style.color = '#eee';
    subtitleEl.style.fontStyle = 'italic';
    subtitleEl.style.fontFamily = 'sans-serif';
    subtitleEl.style.margin = '0 0 40px 0';
    subtitleEl.style.textShadow = '0 1px 2px rgba(0,0,0,0.5)';

    const playContainerEl = document.createElement('div');
    playContainerEl.style.width = '60px';
    playContainerEl.style.height = '60px';
    playContainerEl.style.borderRadius = '50%';
    playContainerEl.style.border = '2px solid rgba(255, 255, 255, 0.5)';
    playContainerEl.style.display = 'flex';
    playContainerEl.style.justifyContent = 'center';
    playContainerEl.style.alignItems = 'center';
    playContainerEl.style.cursor = 'pointer';
    playContainerEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;

    sectionEl.appendChild(titleEl);
    sectionEl.appendChild(subtitleEl);
    sectionEl.appendChild(playContainerEl);
    return sectionEl;
}

function criarExploreSection() {
    const sectionEl = document.createElement('section');
    sectionEl.style.backgroundColor = '#111';
    sectionEl.style.color = '#fff';
    sectionEl.style.padding = '80px 20px 40px 20px';
    sectionEl.style.textAlign = 'center';
    sectionEl.style.display = 'flex';
    sectionEl.style.flexDirection = 'column';
    sectionEl.style.alignItems = 'center';
    sectionEl.style.fontFamily = 'sans-serif';

    const titleEl = document.createElement('h2');
    titleEl.textContent = 'Explore the World';
    titleEl.style.fontSize = '36px';
    titleEl.style.fontWeight = 'normal';
    titleEl.style.margin = '0 0 25px 0';

    const textEl = document.createElement('p');
    textEl.textContent = 'We seek to provide the most authentic content from athletes, adventurers, explorers and travellers around the world. Our long-term mission is to educate, inspire and enable all peoples to experience & protect wilderness.';
    textEl.style.fontSize = '14px';
    textEl.style.lineHeight = '1.8';
    textEl.style.color = '#ccc';
    textEl.style.maxWidth = '600px';
    textEl.style.margin = '0';

    sectionEl.appendChild(titleEl);
    sectionEl.appendChild(textEl);
    return sectionEl;
}

function criarCard(city, country, image) {
    const cardEl = document.createElement('article');
    cardEl.style.width = '300px';
    cardEl.style.height = '400px';
    
    // A variável 'image' agora receberá o caminho local passado pelo array
    cardEl.style.backgroundImage = `url('${image}')`;
    
    cardEl.style.backgroundSize = 'cover';
    cardEl.style.backgroundPosition = 'center';
    cardEl.style.position = 'relative';
    cardEl.style.display = 'flex';
    cardEl.style.flexDirection = 'column';
    cardEl.style.justifyContent = 'flex-end';
    cardEl.style.alignItems = 'center';
    cardEl.style.paddingBottom = '30px';
    cardEl.style.cursor = 'pointer';
    cardEl.style.transition = 'transform 0.3s ease';
    
    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.bottom = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '40%';
    overlay.style.background = 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)';
    overlay.style.zIndex = '0';
    cardEl.appendChild(overlay);

    const cityEl = document.createElement('h3');
    cityEl.textContent = city;
    cityEl.style.color = '#fff';
    cityEl.style.fontSize = '24px';
    cityEl.style.fontFamily = "'Times New Roman', serif";
    cityEl.style.margin = '0 0 8px 0';
    cityEl.style.zIndex = '1';

    const countryEl = document.createElement('span');
    countryEl.textContent = country;
    countryEl.style.color = '#ddd';
    countryEl.style.fontSize = '12px';
    countryEl.style.fontFamily = 'sans-serif';
    countryEl.style.textTransform = 'uppercase';
    countryEl.style.letterSpacing = '1px';
    countryEl.style.zIndex = '1';

    cardEl.appendChild(cityEl);
    cardEl.appendChild(countryEl);

    cardEl.onmouseenter = () => cardEl.style.transform = 'translateY(-5px)';
    cardEl.onmouseleave = () => cardEl.style.transform = 'translateY(0)';

    return cardEl;
}

function criarGaleriaExplore() {
    const containerEl = document.createElement('div');
    containerEl.style.backgroundColor = '#111';
    containerEl.style.padding = '0 20px 80px 20px';
    containerEl.style.display = 'flex';
    containerEl.style.flexDirection = 'column';
    containerEl.style.alignItems = 'center';

    const gridEl = document.createElement('div');
    gridEl.style.display = 'flex';
    gridEl.style.justifyContent = 'center';
    gridEl.style.gap = '30px';
    gridEl.style.flexWrap = 'wrap';
    gridEl.style.marginBottom = '60px';

    cardsData.forEach(dados => {
        const novoCard = criarCard(dados.city, dados.country, dados.image);
        gridEl.appendChild(novoCard);
    });

    const seeMoreLink = document.createElement('a');
    seeMoreLink.textContent = 'SEE MORE >';
    seeMoreLink.href = '#';
    seeMoreLink.style.color = '#3b82f6';
    seeMoreLink.style.textDecoration = 'none';
    seeMoreLink.style.fontSize = '12px';
    seeMoreLink.style.fontWeight = 'bold';
    seeMoreLink.style.fontFamily = 'sans-serif';
    seeMoreLink.style.letterSpacing = '1px';

    containerEl.appendChild(gridEl);
    containerEl.appendChild(seeMoreLink);
    return containerEl;
}

function criarJournalPost(imageSrc, date, title, text) {
    const postEl = document.createElement('article');
    postEl.style.display = 'flex';
    postEl.style.flexDirection = 'column';
    postEl.style.alignItems = 'center';
    postEl.style.width = '350px';
    postEl.style.textAlign = 'center';
    postEl.style.marginBottom = '20px';

    const imgEl = document.createElement('img');
    imgEl.src = imageSrc; // Recebe o caminho local
    imgEl.style.width = '100%';
    imgEl.style.height = '200px';
    imgEl.style.objectFit = 'cover';
    imgEl.style.marginBottom = '20px';
    imgEl.style.borderRadius = '2px';

    const dateEl = document.createElement('span');
    dateEl.textContent = date;
    dateEl.style.fontSize = '10px';
    dateEl.style.letterSpacing = '1px';
    dateEl.style.fontWeight = 'bold';
    dateEl.style.color = '#3b82f6';
    dateEl.style.marginBottom = '10px';
    dateEl.style.textTransform = 'uppercase';

    const titleEl = document.createElement('h3');
    titleEl.textContent = title;
    titleEl.style.fontSize = '22px';
    titleEl.style.fontFamily = "'Times New Roman', serif";
    titleEl.style.color = '#fff';
    titleEl.style.margin = '0 0 10px 0';

    const descEl = document.createElement('p');
    descEl.textContent = text;
    descEl.style.fontSize = '13px';
    descEl.style.lineHeight = '1.6';
    descEl.style.color = '#aaa';
    descEl.style.margin = '0';

    postEl.appendChild(imgEl);
    postEl.appendChild(dateEl);
    postEl.appendChild(titleEl);
    postEl.appendChild(descEl);
    return postEl;
}

function criarJournalSection() {
    const sectionEl = document.createElement('section');
    sectionEl.style.backgroundColor = '#111';
    sectionEl.style.padding = '80px 20px';
    sectionEl.style.display = 'flex';
    sectionEl.style.flexDirection = 'column';
    sectionEl.style.alignItems = 'center';

    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = 'The Journal';
    sectionTitle.style.fontSize = '36px';
    sectionTitle.style.color = '#fff';
    sectionTitle.style.fontFamily = 'sans-serif';
    sectionTitle.style.marginBottom = '20px';

    const sectionSubtitle = document.createElement('p');
    sectionSubtitle.textContent = 'Our favorite stories about public lands and opportunities for you to get involved in protecting your outdoor experiences.';
    sectionSubtitle.style.color = '#ccc';
    sectionSubtitle.style.fontSize = '14px';
    sectionSubtitle.style.textAlign = 'center';
    sectionSubtitle.style.maxWidth = '600px';
    sectionSubtitle.style.lineHeight = '1.6';
    sectionSubtitle.style.marginBottom = '60px';

    const postsContainer = document.createElement('div');
    postsContainer.style.display = 'flex';
    postsContainer.style.justifyContent = 'center';
    postsContainer.style.gap = '40px';
    postsContainer.style.flexWrap = 'wrap';
    postsContainer.style.marginBottom = '60px';

    journalData.forEach(item => {
        const post = criarJournalPost(item.image, item.date, item.title, item.description);
        postsContainer.appendChild(post);
    });

    const allPostsLink = document.createElement('a');
    allPostsLink.textContent = 'ALL POSTS >';
    allPostsLink.href = '#';
    allPostsLink.style.color = '#3b82f6';
    allPostsLink.style.fontSize = '12px';
    allPostsLink.style.fontWeight = 'bold';
    allPostsLink.style.textDecoration = 'none';
    allPostsLink.style.letterSpacing = '1px';

    sectionEl.appendChild(sectionTitle);
    sectionEl.appendChild(sectionSubtitle);
    sectionEl.appendChild(postsContainer);
    sectionEl.appendChild(allPostsLink);
    return sectionEl;
}

function criarFooter() {
    const footerEl = document.createElement('footer');
    footerEl.style.width = '100%';
    footerEl.style.height = '600px';
    
    // ATUALIZADO: Caminho local para a imagem de fundo do rodapé
    footerEl.style.backgroundImage = "url('./img/footer-bg.jpg')";
    
    footerEl.style.backgroundSize = 'cover';
    footerEl.style.backgroundPosition = 'center';
    footerEl.style.display = 'flex';
    footerEl.style.flexDirection = 'column';
    footerEl.style.justifyContent = 'flex-end';
    footerEl.style.alignItems = 'center';
    footerEl.style.paddingBottom = '60px';
    footerEl.style.fontFamily = 'sans-serif';
    footerEl.style.color = '#fff';

    const contentContainer = document.createElement('div');
    contentContainer.style.display = 'flex';
    contentContainer.style.alignItems = 'center';
    contentContainer.style.gap = '15px';
    contentContainer.style.fontSize = '12px';
    contentContainer.style.flexWrap = 'wrap';
    contentContainer.style.justifyContent = 'center';

    const copyText = document.createElement('span');
    copyText.textContent = '© 2017 THE GREAT OUTDOORS. All rights reserved.';
    
    const separator = document.createElement('span');
    separator.textContent = '|';
    separator.style.margin = '0 5px';

    const navContainer = document.createElement('nav');
    navContainer.style.display = 'flex';
    navContainer.style.gap = '20px';

    const links = ['ABOUT', 'EXPLORE', 'JOURNAL', 'SEARCH'];
    links.forEach(text => {
        const link = document.createElement('a');
        link.textContent = text;
        link.href = '#';
        link.style.color = '#fff';
        link.style.textDecoration = 'none';
        link.style.fontWeight = 'bold';
        navContainer.appendChild(link);
    });

    contentContainer.appendChild(copyText);
    contentContainer.appendChild(separator);
    contentContainer.appendChild(navContainer);
    footerEl.appendChild(contentContainer);
    return footerEl;
}

// ==========================================
// 3. PAGE & EXECUÇÃO
// ==========================================

function criarPage() {
    const pageContainer = document.createElement('div');
    pageContainer.appendChild(criarHeader());
    pageContainer.appendChild(criarOutdoor());
    pageContainer.appendChild(criarExploreSection());
    pageContainer.appendChild(criarGaleriaExplore());
    pageContainer.appendChild(criarJournalSection());
    pageContainer.appendChild(criarFooter());
    return pageContainer;
}

document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.boxSizing = 'border-box';

const page = criarPage();
document.querySelector("body").appendChild(page);