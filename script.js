(() => {
  'use strict';

  const fmt = n => n.toLocaleString('pt-BR');

  const GREEN = '#7dd3a8';
  const PURPLE = '#b49ad4';
  const GREY = '#c8c8d4';
  const TEAL = '#6bbdbd';
  const TEAL_LIGHT = '#a0d8d8';
  const BLUE = '#8894c4';
  const BLUE_LIGHT = '#aab3d9';

  const TONES_GREEN = [
    {c1:'#d4f1dd',c2:'#a8e6cf'},{c1:'#c3ebd3',c2:'#8fd0ad'},
    {c1:'#b8e6c1',c2:'#7dd3a8'},{c1:'#a8d5b5',c2:'#62b389'},{c1:'#8fd0ad',c2:'#4a9c78'}
  ];
  const TONES_PURPLE = [
    {c1:'#ede4f7',c2:'#d4c3ea'},{c1:'#dbd0f0',c2:'#c9b6e8'},
    {c1:'#c9b6e8',c2:'#b49ad4'},{c1:'#b49ad4',c2:'#a78bd4'},{c1:'#a78bd4',c2:'#9173b8'}
  ];
  const TONES_MIX = [
    {c1:'#d4f1dd',c2:'#b8e6c1'},{c1:'#e6dcf7',c2:'#d4c3ea'},
    {c1:'#c3ebd3',c2:'#a8d5b5'},{c1:'#dbd0f0',c2:'#c9b6e8'},{c1:'#b8e6c1',c2:'#8fd0ad'}
  ];

  /* ============================================================
     DADOS
     ============================================================ */

  const WA = {
    total: 254409,
    contacts: [
      {name:'Lala',count:129241,color:GREEN},
      {name:'Matheus',count:125168,color:PURPLE}
    ],
    hours: [
      {label:'21h',sub:'21:00–21:59',value:20840},
      {label:'22h',sub:'22:00–22:59',value:20125},
      {label:'19h',sub:'19:00–19:59',value:19008},
      {label:'23h',sub:'23:00–23:59',value:18646},
      {label:'20h',sub:'20:00–20:59',value:16713}
    ],
    days: [
      {label:'1 mar',sub:'2026',value:3824},
      {label:'18 mai',sub:'2026',value:2867},
      {label:'20 mar',sub:'2026',value:2767},
      {label:'4 jun',sub:'2026',value:2562},
      {label:'24 ago',sub:'2026',value:2199}
    ],
    weeks: [
      {label:'23 fev',sub:'→ 1 mar',value:12605},
      {label:'22 jun',sub:'→ 28 jun',value:9287},
      {label:'13 abr',sub:'→ 19 abr',value:8471},
      {label:'6 abr',sub:'→ 12 abr',value:8470},
      {label:'18 mai',sub:'→ 24 mai',value:7977}
    ],
    silence: {delta:'1d 16h 15m',from:'26 abr · 16:26',to:'28 abr · 08:41'}
  };

  const IG_TEXT = {
    total: 91153,
    contacts: [
      {name:'Lala',count:52597,color:PURPLE},
      {name:'Matheus',count:38556,color:GREEN}
    ],
    hours: [
      {label:'20h',sub:'20:00–20:59',value:8986},
      {label:'21h',sub:'21:00–21:59',value:7776},
      {label:'19h',sub:'19:00–19:59',value:7495},
      {label:'22h',sub:'22:00–22:59',value:7420},
      {label:'18h',sub:'18:00–18:59',value:6716}
    ],
    days: [
      {label:'11 dez',sub:'2025',value:2598},
      {label:'19 fev',sub:'2026',value:2269},
      {label:'17 fev',sub:'2026',value:1727},
      {label:'9 dez',sub:'2025',value:1608},
      {label:'20 jan',sub:'2026',value:1574}
    ],
    weeks: [
      {label:'8 dez',sub:'→ 14 dez',value:8798},
      {label:'2 fev',sub:'→ 8 fev',value:8241},
      {label:'26 jan',sub:'→ 1 fev',value:7090},
      {label:'16 fev',sub:'→ 22 fev',value:6298},
      {label:'12 jan',sub:'→ 18 jan',value:5823}
    ]
  };

  const IG_REELS = {
    total: 5372,
    contacts: [
      {name:'Lala',count:4163,color:PURPLE},
      {name:'Matheus',count:1209,color:GREEN}
    ]
  };

  const TT = {
    total: 17596,
    contacts: [
      {name:'Lala',count:9753,color:TEAL},
      {name:'Matheus',count:7843,color:TEAL_LIGHT}
    ]
  };

  const TW = {
    total: 87980,
    contacts: [
      {name:'Lala',count:48765,color:BLUE},
      {name:'Matheus',count:39215,color:BLUE_LIGHT}
    ]
  };

  const ALL = {
    total: 462401,
    contacts: [
      {name:'Lala',count:244519,color:PURPLE},
      {name:'Matheus',count:211991,color:GREEN},
      {name:'Anexos',count:5891,color:GREY}
    ],
    hours: [
      {label:'21h',sub:'21:00–21:59',value:29013},
      {label:'22h',sub:'22:00–22:59',value:27545},
      {label:'19h',sub:'19:00–19:59',value:26503},
      {label:'20h',sub:'20:00–20:59',value:26109},
      {label:'23h',sub:'23:00–23:59',value:18646}
    ],
    days: [
      {label:'1 mar',sub:'2026',value:3824},
      {label:'18 mai',sub:'2026',value:2867},
      {label:'20 mar',sub:'2026',value:2767},
      {label:'11 dez',sub:'2025',value:2598},
      {label:'4 jun',sub:'2026',value:2562}
    ],
    weeks: [
      {label:'23 fev',sub:'→ 1 mar',value:12605},
      {label:'22 jun',sub:'→ 28 jun',value:9287},
      {label:'8 dez',sub:'→ 14 dez',value:8993},
      {label:'13 abr',sub:'→ 19 abr',value:8471},
      {label:'6 abr',sub:'→ 12 abr',value:8470}
    ],
    split: {
      whatsapp: {count:254409,pct:55.0},
      instagram: {count:102416,pct:22.2},
      twitter: {count:87980,pct:19.0},
      tiktok: {count:17596,pct:3.8}
    }
  };

  /* ============================================================
     HELPERS
     ============================================================ */

  function barsHTML(items, tones) {
    const max = Math.max(...items.map(i => i.value));
    return items.map((it, i) => {
      const t = tones[i % tones.length];
      return `
        <div class="bar-row">
          <div class="bar-label">${it.label}${it.sub ? `<small>${it.sub}</small>` : ''}</div>
          <div class="bar-track">
            <div class="bar-fill" style="--w:${(it.value/max*100).toFixed(2)}%;--c1:${t.c1};--c2:${t.c2};--d:${i*100+200}ms;"></div>
          </div>
          <div class="bar-value">${fmt(it.value)}</div>
        </div>`;
    }).join('');
  }

  function legendHTML(contacts, total) {
    return contacts.map(c => {
      const pct = (c.count/total*100).toFixed(1).replace('.', ',');
      return `
        <li>
          <span class="dot" style="background:${c.color}"></span>
          <span class="lg-name">${c.name}</span>
          <span class="lg-count">${fmt(c.count)}</span>
          <span class="lg-pct" style="background:${c.color}">${pct}%</span>
        </li>`;
    }).join('');
  }

  function donutSVG(contacts, total, uid) {
    const R = 80, size = 220, CIRC = 2 * Math.PI * R;
    let defs = '', arcs = '', offset = 0;
    contacts.forEach((c, i) => {
      if (c.count <= 0) return;
      const len = CIRC * (c.count/total);
      defs += `<linearGradient id="g_${uid}_${i}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c.color}" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="${c.color}"/>
      </linearGradient>`;
      arcs += `<circle cx="${size/2}" cy="${size/2}" r="${R}" fill="none"
        stroke="url(#g_${uid}_${i})" stroke-width="30"
        stroke-dasharray="${len} ${CIRC}" stroke-dashoffset="${-offset}"
        transform="rotate(-90 ${size/2} ${size/2})"/>`;
      offset += len;
    });
    return `
      <svg class="donut" viewBox="0 0 ${size} ${size}">
        <defs>${defs}</defs>
        <circle cx="${size/2}" cy="${size/2}" r="${R}" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="30"/>
        ${arcs}
        <text x="${size/2}" y="${size/2-3}" text-anchor="middle" class="donut-num" data-count="${total}">0</text>
        <text x="${size/2}" y="${size/2+18}" text-anchor="middle" class="donut-cap">MENSAGENS</text>
      </svg>`;
  }

  function donutHTML(contacts, total, uid) {
    return `<div class="donut-wrap">${donutSVG(contacts, total, uid)}</div>
      <ul class="legend">${legendHTML(contacts, total)}</ul>`;
  }

  function donutHorizontalHTML(contacts, total, uid) {
    return `<div class="donut-horizontal">${donutSVG(contacts, total, uid)}
      <ul class="legend">${legendHTML(contacts, total)}</ul></div>`;
  }

  function miniStatsHTML(items) {
    if (!items || !items.length) return '';
    return `<div class="mini-stats">${items.map(s => `
      <div class="mini-stat">
        <span class="mini-value">${s.value}</span>
        <span class="mini-label">${s.label}</span>
      </div>`).join('')}</div>`;
  }

  function funFactHTML(text) {
    if (!text) return '';
    return `<div class="fun-fact">
      <span class="fun-fact-label">E se...</span>
      <p class="fun-fact-text">${text}</p>
    </div>`;
  }

  function coincidenceHTML(text) {
    if (!text) return '';
    return `<div class="coincidence">
      <span class="fun-fact-label">O nosso 8</span>
      <p class="fun-fact-text">${text}</p>
    </div>`;
  }

  function whisperHTML(text) {
    return text ? `<p class="whisper">${text}</p>` : '';
  }

  function silenceCardHTML(data) {
    return `<div class="silence-big">${data.delta}</div>
      <p class="silence-sub">sem nenhuma mensagem</p>
      <div class="silence-timeline">
        <div class="tl-point"><span class="tl-dot ga"></span><span class="tl-date">${data.from}</span></div>
        <div class="tl-line"><span class="tl-gap">${data.delta}</span></div>
        <div class="tl-point"><span class="tl-dot pa"></span><span class="tl-date">${data.to}</span></div>
      </div>`;
  }

  /* ============================================================
     SLIDE BUILDER
     ============================================================ */

  function slide({section, tag, tagClass, title, sub, visual, miniStats, funFact, coincidence, insight, whisper}) {
    return `
      <section class="slide" data-section="${section}">
        <div class="slide-inner">
          <span class="slide-tag ${tagClass}">${tag}</span>
          <h2 class="slide-title">${title}</h2>
          ${sub ? `<p class="slide-sub">${sub}</p>` : ''}
          ${visual}
          ${whisperHTML(whisper)}
          ${miniStatsHTML(miniStats)}
          ${coincidenceHTML(coincidence)}
          ${funFactHTML(funFact)}
          ${insight ? `<p class="insight">"${insight}"</p>` : ''}
        </div>
      </section>`;
  }

  function heroSlide() {
    return `
      <section class="slide" data-section="overall">
        <div class="slide-inner">
          <!-- 2h30, a sua boca na minha -->
          <span class="slide-tag tag-mix">Recap 2025–2026</span>
          <h1 class="hero-title">Um ano desde aquela dúvida às 19:41</h1>
          <p class="slide-sub">17 de novembro de 2025 a 17 de novembro de 2026</p>
          <div class="hero-big"><span data-count="${ALL.total}">0</span></div>
          <div class="hero-big-label">mensagens trocadas</div>
          <div class="hero-chips">
            <span class="chip chip-green">WhatsApp · 254.409</span>
            <span class="chip chip-purple">Instagram · 102.416</span>
            <span class="chip chip-blue">Twitter · 87.980</span>
            <span class="chip chip-teal">TikTok · 17.596</span>
          </div>
          ${miniStatsHTML([
            {value:'365',label:'dias de conversa'},
            {value:'1.267',label:'msgs por dia'},
            {value:'800 km',label:'de distância'},
            {value:'8 anos',label:'de diferença'}
          ])}
          ${coincidenceHTML('<strong>800 km</strong> nos separam. <strong>8 anos</strong> de diferença. <strong>8</strong> é o nosso número. E olha só: as duas semanas mais parecidas do ano tiveram <strong>8.471</strong> e <strong>8.470</strong> mensagens. O horário das <strong>8 da noite</strong> no Instagram rendeu exatamente <strong>8.986</strong> mensagens. Não é coincidência. É a gente.')}
          ${funFactHTML('Se cada mensagem durasse <strong>1 segundo</strong>, seriam <strong>128 horas</strong> de conversa. É o equivalente a ouvir o álbum <strong>"Até o Próximo Carnaval"</strong>, do Sotam, <strong>233 vezes seguidas</strong>, <strong>sem pausa</strong>.')}
          <p class="insight">"Um ano inteiro de conversa. Eu e você, a 800 km de distância."</p>
        </div>
      </section>`;
  }

  function tiktokSlide() {
    return slide({
      section:'tiktok', tag:'TikTok', tagClass:'tag-teal',
      title:'Nossas DMs e TikToks',
      sub:'17.596 mensagens em quase 1 ano',
      visual: donutHTML(TT.contacts, TT.total, 'tt'),
      miniStats: [
        {value:'17.596',label:'mensagens'},
        {value:'9.753',label:'suas (55,4%)'},
        {value:'7.843',label:'minhas (44,6%)'},
        {value:'10.433',label:'textos · 7.163 vídeos'}
      ],
      coincidence: 'Você manda vídeo, eu mando texto. <strong>87,8%</strong> dos vídeos são seus (<strong>6.286</strong> contra 877 meus). <strong>66,8%</strong> dos textos são meus (<strong>6.966</strong> contra 3.467 seus). O TikTok é onde você me enche de vídeo, 17 por dia.',
      funFact: 'Se cada vídeo durasse <strong>30 segundos</strong>, seriam <strong>59,7 horas de vídeo</strong> que trocamos em um ano.',
      insight: 'No TikTok você manda vídeo. Eu respondo tudo. É o nosso jeito.'
    });
  }

  function twitterSlide() {
    return slide({
      section:'twitter', tag:'Twitter', tagClass:'tag-blue',
      title:'Nossos tweets',
      sub:'87.980 mensagens',
      visual: donutHTML(TW.contacts, TW.total, 'tw'),
      miniStats: [
        {value:'87.980',label:''},
        {value:'48.765',label:'suas (55,4%)'},
        {value:'39.215',label:'minhas (44,6%)'},
        {value:'52.165',label:'textos · 35.815 posts'}
      ],
      coincidence: 'Aqui foi onde tudo começou. Muitos posts. Muita piada. Muitas dúvidas',
      funFact: 'Se cada mensagem do Twitter durasse <strong>1 minuto</strong>, seriam <strong>61 dias seguidos</strong> de conversa.',
      insight: 'Não teve print da maioria, mas eu lembro. Eram muitas. E todas sem pretensão (obviamente).'
    });
  }

  function closingSlide() {
    return `
      <section class="slide" data-section="closing">
        <div class="slide-inner">
          <span class="closing-heart">♡</span>
          <h2 class="closing-title">Pois é.</h2>
          <div class="closing-message">
            <p>Foram <strong>365 dias</strong> desde aquela mensagem <em>(quase)</em> sem intenções.</p>
            <p>Milhares e milhares de mensagens todo dia.<br>Você me carregando no seu bolso<br>e eu te carregando no meu.</p>
            <p>Viramos parte um do outro. Do nada.<br>Sem esperar. Sem procurar.</p>
            <p class="closing-signature">Obrigado por esses 365 dias,<br>minha eterna melhor amiga<br>e futura esposa. ♡</p>
            <p class="closing-punchline">Espero que no próximo ano esse número esteja bem menor pois vai ser um sinal que todos nossos planos deram certo.</p>
          </div>
          <div class="overall-card">
            <span class="overall-value" data-count="${ALL.total}">0</span>
            <span class="overall-label">mensagens em 1 ano</span>
          </div>
        </div>
      </section>`;
  }

  /* ============================================================
     BUILD SLIDES
     ============================================================ */

  const slidesHTML = [
    heroSlide(),

    slide({
      section:'overall', tag:'Tudo junto', tagClass:'tag-mix',
      title:'Se cada mensagem fosse 1 metro',
      sub:'462.401 metros de conversa — 462,4 km',
      visual: donutHTML(ALL.contacts, ALL.total, 'all'),
      miniStats: [
        {value:'462,4 km',label:'no total'},
        {value:'244,5 km',label:'seus'},
        {value:'212,0 km',label:'meus'},
        {value:'337,6 km',label:'faltando'}
      ],
      funFact:'Passamos da metade dos <strong>800 km</strong> que nos separam. Para chegar até você, ainda faltariam <strong>337,6 km</strong>. Se cada mensagem fosse 1 metro, a gente já construiu mais da metade da estrada entre a gente.',
      insight:'Um dia a gente fecha essa distância. E não vai precisar de mensagem nenhuma.'
    }),

    slide({
      section:'overall', tag:'Tudo junto', tagClass:'tag-mix',
      title:'Quando a gente mais conversa',
      sub:'nossos horários de pico combinados',
      visual: `<div class="bars">${barsHTML(ALL.hours, TONES_MIX)}</div>`,
      miniStats: [
        {value:'21h',label:'horário de pico'},
        {value:'29.013',label:'só nesse horário'},
        {value:'127.816',label:'entre 19h e 23h'},
        {value:'35,5h',label:'no top 5 · 1s/msg'}
      ],
      funFact:'Entre 19h e 23h a gente trocou <strong>127.816 mensagens</strong>. Se cada uma durasse 1 segundo, seriam <strong>35,5 horas</strong> falando. O equivalente a ouvir o álbum <strong>"Até o Próximo Carnaval"</strong>, do Sotam, <strong>65 vezes seguidas</strong>.',
      insight:'21h é nosso horário favorito.'
    }),

    slide({
      section:'overall', tag:'Tudo junto', tagClass:'tag-mix',
      title:'Nossos dias mais intensos',
      sub:'os dias e semanas em que mais nos falamos',
      visual: `
        <div class="two-col">
          <div class="col">
            <h3 class="col-title">Dias mais movimentados</h3>
            <div class="bars">${barsHTML(ALL.days, TONES_MIX)}</div>
          </div>
          <div class="col">
            <h3 class="col-title">Semanas mais movimentadas</h3>
            <div class="bars">${barsHTML(ALL.weeks, TONES_MIX)}</div>
          </div>
        </div>`,
      miniStats: [
        {value:'3.824',label:'melhor dia · 1 mar'},
        {value:'12.605',label:'melhor semana'},
        {value:'1.267',label:'média por dia'},
        {value:'3x',label:'acima da média'}
      ],
      coincidence:'Em duas semanas <strong>seguidas de 6 a 12 de abril</strong> e de <strong>13 a 19 de abril</strong> a gente trocou <strong>8.470</strong> e <strong>8.471</strong> mensagens. Uma diferença de <strong>1</strong>. O 8 apareceu de novo.',
      funFact:'No dia <strong>1 de março de 2026</strong> foram <strong>3.824 mensagens</strong>. Na semana de 23 de fevereiro a 1 de março, foram 12.605. Quase <strong>7 dias inteiros</strong> de conversa acumulada em 7 dias reais.',
      insight:'Alguns dias viraram maratonas. E a gente nem percebeu.'
    }),

    slide({
      section:'overall', tag:'Tudo junto', tagClass:'tag-mix',
      title:'Onde a gente mais conversa',
      sub:'a divisão entre as quatro plataformas',
      visual: `
        <div class="split-bar">
          <div class="split-segment" style="width:${ALL.split.whatsapp.pct}%; background:linear-gradient(135deg, #7dd3a8, #62b389);">
            <span class="split-label">WhatsApp</span>
            <span class="split-value">${fmt(ALL.split.whatsapp.count)}</span>
            <span class="split-pct">${ALL.split.whatsapp.pct}%</span>
          </div>
          <div class="split-segment" style="width:${ALL.split.instagram.pct}%; background:linear-gradient(135deg, #b49ad4, #9173b8);">
            <span class="split-label">Instagram</span>
            <span class="split-value">${fmt(ALL.split.instagram.count)}</span>
            <span class="split-pct">${ALL.split.instagram.pct}%</span>
          </div>
          <div class="split-segment" style="width:${ALL.split.twitter.pct}%; background:linear-gradient(135deg, #8894c4, #6d7aaf);">
            <span class="split-label">Twitter</span>
            <span class="split-value">${fmt(ALL.split.twitter.count)}</span>
            <span class="split-pct">${ALL.split.twitter.pct}%</span>
          </div>
          <div class="split-segment small" style="width:${ALL.split.tiktok.pct}%; background:linear-gradient(135deg, #6bbdbd, #4fa3a3);">
            <span class="split-pct">${ALL.split.tiktok.pct}%</span>
          </div>
        </div>`,
      miniStats: [
        {value:'254.409',label:'WhatsApp'},
        {value:'102.416',label:'Instagram'},
        {value:'87.980',label:'Twitter'},
        {value:'17.596',label:'TikTok'}
      ],
      funFact:'Se cada mensagem durasse 1 segundo, teríamos escutado <strong>"Até o Próximo Carnaval"</strong> do Sotam <strong>233 vezes seguidas</strong>: 128 no WhatsApp, 52 no Instagram, 44 no Twitter e 9 no TikTok. Se cada uma durasse 1 minuto, seriam <strong>321 dias falando</strong>. Quase 11 meses diretos de conversa.'
    }),

    slide({
      section:'whatsapp', tag:'WhatsApp', tagClass:'tag-green',
      title:'Quem manda mais no WhatsApp?',
      sub:'254.409 mensagens em 290 dias',
      visual: donutHTML(WA.contacts, WA.total, 'wa'),
      miniStats: [
        {value:'50,8%',label:'Lala'},
        {value:'49,2%',label:'Matheus'},
        {value:'4.073',label:'de diferença'},
        {value:'290',label:'dias'}
      ],
      funFact:'A diferença foi de <strong>4.073 mensagens suas a mais que as minhas</strong>. Se cada uma fosse 1 metro, seria uma distância de <strong>4 km</strong>. Nem 1% dos 800 km entre a gente.',
      insight:'Igualmente desocupados.'
    }),

    slide({
      section:'whatsapp', tag:'WhatsApp', tagClass:'tag-green',
      title:'Nossos horários no WhatsApp',
      sub:'quando a gente mais falou por aqui',
      visual: `<div class="bars">${barsHTML(WA.hours, TONES_GREEN)}</div>`,
      miniStats: [
        {value:'21h',label:'horário de pico'},
        {value:'20.840',label:'só nesse horário'},
        {value:'95.332',label:'entre 19h e 23h'},
        {value:'26,5h',label:'no top 5 · 1s/msg'}
      ],
      whisper:'Não aparece 2h30, mas tem a sua boca na minha.',
      funFact:'Entre 19h e 23h foram <strong>95.332 mensagens</strong>. Se cada uma durasse 1 segundo, seriam <strong>26,5 horas</strong> falando.',
      insight:'Quase 100 mil mensagens só entre 19h e 23h. É quando a gente tá parado :).'
    }),

    slide({
      section:'whatsapp', tag:'WhatsApp', tagClass:'tag-green',
      title:'Nossos dias e semanas no WhatsApp',
      sub:'quando a conversa ficou mais intensa',
      visual: `
        <div class="two-col">
          <div class="col">
            <h3 class="col-title">Dias mais movimentados</h3>
            <div class="bars">${barsHTML(WA.days, TONES_GREEN)}</div>
          </div>
          <div class="col">
            <h3 class="col-title">Semanas mais movimentadas</h3>
            <div class="bars">${barsHTML(WA.weeks, TONES_GREEN)}</div>
          </div>
        </div>`,
      miniStats: [
        {value:'3.824',label:'melhor dia · 1 mar'},
        {value:'12.605',label:'melhor semana'},
        {value:'290',label:'dias de conversa'},
        {value:'877',label:'média por dia'}
      ],
      funFact:'No dia <strong>1 de março</strong> foram 3.824 mensagens. Se cada uma durasse 1 segundo, seriam <strong>64 minutos</strong> seguidos de conversa. Se fosse 1 minuto, seria como falar <strong>2,6 dias sem parar</strong>. É como se a gente tivesse emendado um fim de semana inteiro em uma terça.',
      insight:'Março foi disparado o nosso mês mais intenso.'
    }),

    slide({
      section:'whatsapp', tag:'WhatsApp', tagClass:'tag-green',
      title:'O maior silêncio da gente',
      sub:'o maior intervalo sem mensagem no WhatsApp',
      visual: silenceCardHTML(WA.silence),
      miniStats: [
        {value:'1d 16h',label:'de duração'},
        {value:'26 abr',label:'última mensagem'},
        {value:'28 abr',label:'retomada'},
        {value:'40h',label:'sem falar'}
      ],
      funFact:'<strong>40 horas de silêncio absoluto.</strong> Daria para ver 13 filmes, dormir quase 2 noites inteiras. Mesmo assim a gente não trocou uma única palavra no WhatsApp. Depois voltamos como se nada tivesse acontecido.',
      insight:'Quase 2 dias de silêncio. Mas voltamos. Sempre voltamos.'
    }),

    slide({
      section:'instagram', tag:'Instagram · Textos', tagClass:'tag-purple',
      title:'Quem manda mais no Instagram?',
      sub:'91.153 mensagens de texto trocadas em 1 ano',
      visual: donutHTML(IG_TEXT.contacts, IG_TEXT.total, 'igt'),
      miniStats: [
        {value:'57,7%',label:'Lala'},
        {value:'42,3%',label:'Matheus'},
        {value:'14.041',label:'de diferença'},
        {value:'250',label:'média por dia'}
      ],
      funFact:'Você mandou <strong>52.597 textos no Insta</strong> e eu 38.556. A diferença de <strong>14.041 mensagens</strong> é quase <strong>36% mais mensagens suas que minhas</strong>. Se cada uma fosse 1 metro, seria uma estrada de <strong>14 km</strong> só de diferença.',
      insight:'No Insta você fala muito mais que eu. Muito mais.'
    }),

    slide({
      section:'instagram', tag:'Instagram · Textos', tagClass:'tag-purple',
      title:'Nossos horários no Instagram',
      sub:'quando a gente mais conversou por aqui',
      visual: `<div class="bars">${barsHTML(IG_TEXT.hours, TONES_PURPLE)}</div>`,
      miniStats: [
        {value:'20h',label:'horário de pico'},
        {value:'8.986',label:'só nesse horário'},
        {value:'38.393',label:'no top 5'},
        {value:'42,1%',label:'do total'}
      ],
      funFact:'Só no horário das <strong>20h</strong> foram <strong>8.986 mensagens</strong> ao longo do ano. De novo, 8 (da noite). Em média, 25 por dia nesse horário, quase uma a cada 2 minutos. Se cada uma durasse 1 segundo, seria <strong>2,5 horas</strong> falando só das 20h às 21h.',
      insight:'8 da noite é nosso horário favorito no Instagram.'
    }),

    slide({
      section:'instagram', tag:'Instagram · Textos', tagClass:'tag-purple',
      title:'Nossos dias e semanas no Instagram',
      sub:'quando os textos ficaram mais intensos',
      visual: `
        <div class="two-col">
          <div class="col">
            <h3 class="col-title">Dias mais movimentados</h3>
            <div class="bars">${barsHTML(IG_TEXT.days, TONES_PURPLE)}</div>
          </div>
          <div class="col">
            <h3 class="col-title">Semanas mais movimentadas</h3>
            <div class="bars">${barsHTML(IG_TEXT.weeks, TONES_PURPLE)}</div>
          </div>
        </div>`,
      miniStats: [
        {value:'2.598',label:'melhor dia · 11 dez'},
        {value:'8.795',label:'melhor semana'},
        {value:'250',label:'média por dia'},
        {value:'Dez',label:'mês mais intenso'}
      ],
      coincidence:'Na semana de <strong>8 a 14 de dezembro</strong>, <strong>8.795</strong> mensagens. Começa com 8. Termina com 8. E foi a semana mais intensa do Instagram no ano. De novo, o nosso número.',
      funFact:'No dia <strong>11 de dezembro de 2025</strong> a gente trocou <strong>2.598 textos</strong>',
      insight:'Dezembro e fevereiro foram os nossos meses mais intensos. A gente tava se conhecendo, né, rs'
    }),

    slide({
      section:'instagram', tag:'Instagram · Reels', tagClass:'tag-purple',
      title:'Nossos reels compartilhados',
      sub:'5.372 reels em um ano — e você manda muito mais',
      visual: donutHorizontalHTML(IG_REELS.contacts, IG_REELS.total, 'igr'),
      miniStats: [
        {value:'5.372',label:'reels no total'},
        {value:'77,5%',label:'enviados por você'},
        {value:'20h',label:'horário de pico · 410'},
        {value:'8 dez',label:'melhor semana · 241'}
      ],
      funFact:'Se cada reel durasse <strong>30 segundos</strong>, seriam <strong>44,8 horas de vídeo</strong>. E você mandou <strong>3,4x mais reels que eu</strong>: 4.163 seus contra 1.209 meus.',
      insight:'Você manda muito mais reels que eu. E eu amo todos.'
    }),

    tiktokSlide(),
    twitterSlide(),
    closingSlide()
  ];

  /* ============================================================
     MOUNT
     ============================================================ */

  const carousel = document.getElementById('carousel');
  carousel.innerHTML = slidesHTML.join('');

  const slides = carousel.querySelectorAll('.slide');
  const totalEl = document.getElementById('total');
  const currentEl = document.getElementById('current');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const clickPrev = document.getElementById('clickPrev');
  const clickNext = document.getElementById('clickNext');
  const progressEl = document.getElementById('progress');
  const sectionEl = document.getElementById('sectionIndicator');

  totalEl.textContent = slides.length;

  function countUp(el, target, duration = 1600) {
    if (el.dataset.animated === 'true') return;
    el.dataset.animated = 'true';
    const easeOut = t => 1 - Math.pow(1 - t, 3);
    const t0 = performance.now();
    (function step(now) {
      const p = Math.min((now - t0) / duration, 1);
      el.textContent = fmt(Math.round(target * easeOut(p)));
      if (p < 1) requestAnimationFrame(step);
    })(performance.now());
  }

  const SECTIONS = {
    overall:   {label:'Tudo junto',cls:'section-overall'},
    whatsapp:  {label:'WhatsApp',cls:'section-whatsapp'},
    instagram: {label:'Instagram',cls:'section-instagram'},
    tiktok:    {label:'TikTok',cls:'section-tiktok'},
    twitter:   {label:'Twitter',cls:'section-twitter'},
    closing:   {label:'Para você',cls:'section-overall'}
  };

  function updateSection(section) {
    const s = SECTIONS[section] || SECTIONS.overall;
    sectionEl.textContent = s.label;
    sectionEl.className = 'section-indicator ' + s.cls;
  }

  function updateNav(index) {
    currentEl.textContent = index + 1;
    const atStart = index === 0;
    const atEnd = index === slides.length - 1;
    prevBtn.disabled = atStart;
    nextBtn.disabled = atEnd;
    clickPrev.disabled = atStart;
    clickNext.disabled = atEnd;
    updateSection(slides[index].dataset.section);
  }

  function updateProgress() {
    const max = carousel.scrollWidth - carousel.clientWidth;
    const pct = max > 0 ? (carousel.scrollLeft / max) * 100 : 0;
    progressEl.style.width = pct + '%';
  }

  function getCurrentIndex() {
    const w = carousel.clientWidth;
    if (w <= 0) return 0;
    const idx = Math.round(carousel.scrollLeft / w);
    return Math.max(0, Math.min(slides.length - 1, idx));
  }

  function animateSlide(idx) {
    const slide = slides[idx];
    if (!slide || slide.dataset.animated === 'true') return;
    slide.dataset.animated = 'true';
    slide.classList.add('visible');
    slide.querySelectorAll('[data-count]').forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      if (!isNaN(target)) countUp(el, target);
    });
  }

  function goTo(index) {
    const clamped = Math.max(0, Math.min(slides.length - 1, index));
    const target = clamped * carousel.clientWidth;
    carousel.scrollTo({left: target, behavior: 'smooth'});
  }

  function goNext() { goTo(getCurrentIndex() + 1); }
  function goPrev() { goTo(getCurrentIndex() - 1); }

  /* ---------- scroll handling ---------- */
  let scrollRaf = null;
  function onScroll() {
    if (scrollRaf) return;
    scrollRaf = requestAnimationFrame(() => {
      scrollRaf = null;
      const idx = getCurrentIndex();
      updateNav(idx);
      animateSlide(idx);
      updateProgress();
    });
  }

  carousel.addEventListener('scroll', onScroll, {passive: true});

  /* ---------- navigation buttons ---------- */
  nextBtn.addEventListener('click', goNext);
  prevBtn.addEventListener('click', goPrev);
  clickNext.addEventListener('click', goNext);
  clickPrev.addEventListener('click', goPrev);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {e.preventDefault(); goNext();}
    if (e.key === 'ArrowLeft') {e.preventDefault(); goPrev();}
  });

  /* ---------- resize: re-snap to current slide ---------- */
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const idx = getCurrentIndex();
      carousel.scrollTo({left: idx * carousel.clientWidth, behavior: 'auto'});
    }, 120);
  });

  /* ---------- initial state ---------- */
  requestAnimationFrame(() => {
    updateNav(0);
    animateSlide(0);
    updateProgress();
  });

})();
