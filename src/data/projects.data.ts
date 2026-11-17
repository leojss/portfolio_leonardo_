import type { Project } from '@/types/project'

/**
 * Adicione novos projetos aqui. Cada projeto é renderizado automaticamente
 * no grid, no filtro de categorias e no modal de estudo de caso.
 * Imagens devem ficar em /public/images/portfolio/... ou
 * /public/images/projects/<slug>/...
 */

const COMMON_STACK = {
  backend: ['Python'],
  database: ['SQL Server'],
  frontend: ['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
}

export const projects: Project[] = [
  {
    id: 'termo-desconto',
    title: 'Termo de Desconto',
    category: 'software-engineering',
    tags: ['Python', 'SQL Server', 'React', 'Tailwind CSS'],
    summary:
      'Aplicação para emissão de termos de desconto, permitindo que lojistas regularizem pagamentos de verbas em atraso de forma padronizada e rastreável.',
    problemStatement:
      'A negociação de descontos para quitação de verbas em atraso de lojistas era feita manualmente, com documentos gerados caso a caso, sujeitos a erro de digitação e sem padronização entre empreendimentos, dificultando auditoria e controle financeiro.',
    solution:
      'Desenvolvi uma aplicação web que centraliza o cadastro dos dados do locatário e do empreendimento, permite adicionar múltiplos descontos com encargos e vencimentos, e gera automaticamente o termo em PDF pronto para assinatura, reduzindo drasticamente o tempo de elaboração e eliminando inconsistências.',
    architecture: {
      description:
        'Aplicação web com formulário dinâmico no frontend, backend em Python responsável pelas regras de negócio e geração do documento, e persistência dos dados contratuais em SQL Server.',
      flowSteps: [
        '1. Usuário seleciona o empreendimento e preenche os dados do locatário',
        '2. Descontos e encargos são adicionados dinamicamente ao termo',
        '3. Backend Python valida os dados e aplica as regras de negócio',
        '4. Registro é persistido no SQL Server para histórico e auditoria',
        '5. Documento final é gerado em PDF para assinatura das partes',
      ],
      stack: COMMON_STACK,
    },
    screenshots: [
      {
        url: '/images/portfolio/termo_desconto.png',
        caption: 'Formulário de emissão de termo de desconto com dados do locatário e descontos aplicados.',
        isCover: true,
      },
    ],
  },
  {
    id: 'rel-infogen',
    title: 'Relatórios InfoGen',
    category: 'software-engineering',
    tags: ['Python', 'SQL Server', 'React', 'Tailwind CSS'],
    summary:
      'Portal que centraliza todos os relatórios gerenciais da empresa em um único ponto de acesso, substituindo planilhas e relatórios dispersos.',
    problemStatement:
      'Relatórios gerenciais ficavam espalhados entre diferentes sistemas, e-mails e planilhas, dificultando o acesso rápido à informação pelos gestores e gerando retrabalho na consolidação de dados para tomada de decisão.',
    solution:
      'Construí um portal web que integra e organiza os relatórios gerenciais da empresa por categoria, com backend em Python responsável pela consolidação e exposição dos dados vindos do SQL Server, oferecendo um ponto único e confiável de consulta para os gestores.',
    architecture: {
      description:
        'Portal centralizador que consome dados consolidados do banco corporativo e os apresenta de forma organizada e navegável para os times gerenciais.',
      flowSteps: [
        '1. Dados operacionais são consolidados nas bases SQL Server',
        '2. Backend Python expõe os relatórios via API',
        '3. Portal React organiza os relatórios por categoria e departamento',
        '4. Gestores acessam e exportam os relatórios sob demanda',
      ],
      stack: COMMON_STACK,
    },
    screenshots: [
      {
        url: '/images/portfolio/rel_infogen.png',
        caption: 'Página inicial do portal com os relatórios gerenciais organizados por categoria.',
        isCover: true,
      },
    ],
  },
  {
    id: 'radar-nps',
    title: 'Radar NPS',
    category: 'software-engineering',
    tags: ['Python', 'SQL Server', 'React', 'Tailwind CSS'],
    summary:
      'Plataforma de gestão das pesquisas NPS dos shoppings, com acompanhamento integrado dos tickets abertos no Reclame Aqui.',
    problemStatement:
      'O acompanhamento da satisfação do cliente (NPS) e das reclamações públicas no Reclame Aqui era feito em ferramentas separadas, sem visão unificada, atrasando a resposta das equipes de operação a problemas recorrentes.',
    solution:
      'Desenvolvi uma plataforma que consolida os resultados das pesquisas NPS por shopping e integra o acompanhamento dos tickets abertos no Reclame Aqui em um painel único, com visão executiva do que exige atenção no dia a dia.',
    architecture: {
      description:
        'Plataforma que agrega dados de pesquisas NPS e de tickets de reclamação em um painel executivo único por shopping.',
      flowSteps: [
        '1. Respostas de pesquisas NPS são coletadas e armazenadas no SQL Server',
        '2. Backend Python processa e consolida os indicadores por shopping',
        '3. Tickets do Reclame Aqui são acompanhados junto aos indicadores de NPS',
        '4. Painel React exibe a visão executiva com alertas prioritários',
      ],
      stack: COMMON_STACK,
    },
    screenshots: [
      {
        url: '/images/portfolio/radar_nps.png',
        caption: 'Visão executiva com indicadores monitorados, alertas prioritários e acompanhamento diário.',
        isCover: true,
      },
    ],
  },
  {
    id: 'gestor-capex',
    title: 'Gestor CAPEX',
    category: 'software-engineering',
    tags: ['Python', 'SQL Server', 'React', 'Tailwind CSS'],
    summary:
      'Sistema para gestão das despesas de CAPEX dos shoppings, dando visibilidade e controle sobre investimentos em andamento e planejados.',
    problemStatement:
      'O controle das despesas de capital (CAPEX) dos shoppings era feito em planilhas descentralizadas, dificultando o acompanhamento de orçamento, execução e desvios entre o planejado e o realizado.',
    solution:
      'Criei um sistema de gestão que centraliza o cadastro e acompanhamento das despesas CAPEX por shopping, com backend Python para as regras de aprovação e consolidação, permitindo comparar orçado x realizado em tempo real.',
    architecture: {
      description:
        'Sistema de controle orçamentário que centraliza o ciclo de vida das despesas de capital, do cadastro à execução.',
      flowSteps: [
        '1. Despesas CAPEX são cadastradas por shopping e centro de custo',
        '2. Backend Python aplica regras de aprovação e consolidação',
        '3. Dados são persistidos no SQL Server para histórico e auditoria',
        '4. Painel React compara orçado x realizado por investimento',
      ],
      stack: COMMON_STACK,
    },
    screenshots: [
      {
        url: '/images/portfolio/gestor_capex.png',
        caption: 'Painel de gestão das despesas de CAPEX por shopping.',
        isCover: true,
      },
    ],
  },
  {
    id: 'gestor-apolices',
    title: 'Gestor de Apólices',
    category: 'software-engineering',
    tags: ['Python', 'SQL Server', 'React', 'Tailwind CSS'],
    summary:
      'Sistema para gestão das apólices de seguro dos shoppings e controle proativo de seus vencimentos.',
    problemStatement:
      'O controle de vencimento das apólices de seguro dos shoppings era feito manualmente, com risco real de perda de cobertura por renovações não realizadas a tempo.',
    solution:
      'Implementei um sistema de gestão de apólices com cadastro centralizado por shopping, alertas automáticos de vencimento e histórico de renovações, eliminando o risco de lacunas de cobertura.',
    architecture: {
      description:
        'Sistema de cadastro e monitoramento de apólices com alertas automáticos de vencimento.',
      flowSteps: [
        '1. Apólices são cadastradas com vigência e cobertura por shopping',
        '2. Backend Python monitora prazos e dispara alertas de vencimento',
        '3. Dados históricos de renovações são mantidos no SQL Server',
        '4. Painel React exibe o status de vigência de cada apólice',
      ],
      stack: COMMON_STACK,
    },
    screenshots: [
      {
        url: '/images/portfolio/gestor_apolices.png',
        caption: 'Painel de controle das apólices de seguro e seus respectivos vencimentos.',
        isCover: true,
      },
    ],
  },
  {
    id: 'gestor-atas',
    title: 'Gestor de Atas',
    category: 'software-engineering',
    tags: ['Python', 'SQL Server', 'React', 'Tailwind CSS'],
    summary:
      'Sistema para gestão das atas notariais de assembleias realizadas pelos shoppings, organizando o arquivamento e a consulta desses documentos.',
    problemStatement:
      'As atas notariais de assembleias dos shoppings eram arquivadas de forma dispersa, dificultando a localização rápida de decisões e documentos formais quando necessários para auditorias ou disputas jurídicas.',
    solution:
      'Desenvolvi um sistema de gestão documental que centraliza o cadastro e arquivamento das atas notariais por shopping e assembleia, com busca rápida e histórico organizado cronologicamente.',
    architecture: {
      description:
        'Sistema de gestão documental para atas notariais, com cadastro estruturado e busca por shopping e data da assembleia.',
      flowSteps: [
        '1. Atas são cadastradas e vinculadas ao shopping e à assembleia correspondente',
        '2. Backend Python organiza metadados e indexação para busca',
        '3. Documentos e metadados são armazenados no SQL Server',
        '4. Painel React permite consulta e download rápido das atas',
      ],
      stack: COMMON_STACK,
    },
    screenshots: [
      {
        url: '/images/portfolio/gestor_atas.png',
        caption: 'Painel de gestão das atas notariais de assembleias por shopping.',
        isCover: true,
      },
    ],
  },
  {
    id: 'gestor-compras',
    title: 'Gestor de Compras',
    category: 'software-engineering',
    tags: ['Python', 'SQL Server', 'React', 'Tailwind CSS'],
    summary:
      'Interface entre o sistema de gestão dos shoppings e o vínculo das despesas com suas respectivas notas fiscais e boletos.',
    problemStatement:
      'A vinculação entre despesas lançadas no sistema de gestão e seus documentos fiscais (notas fiscais e boletos) era manual e suscetível a erros, dificultando a conciliação financeira e a auditoria de pagamentos.',
    solution:
      'Construí uma camada de integração que conecta o sistema de gestão dos shoppings aos documentos fiscais, automatizando o vínculo entre despesas, notas fiscais e boletos e reduzindo divergências na conciliação financeira.',
    architecture: {
      description:
        'Camada de integração que associa despesas do sistema de gestão aos respectivos documentos fiscais.',
      flowSteps: [
        '1. Despesas são importadas do sistema de gestão dos shoppings',
        '2. Backend Python associa cada despesa à nota fiscal e boleto correspondente',
        '3. Vínculos e divergências são registrados no SQL Server',
        '4. Painel React exibe o status de conciliação por despesa',
      ],
      stack: COMMON_STACK,
    },
    screenshots: [
      {
        url: '/images/portfolio/gestor_compras.png',
        caption: 'Painel de vínculo entre despesas, notas fiscais e boletos.',
        isCover: true,
      },
    ],
  },
  {
    id: 'bot-interno',
    title: 'Bot Interno',
    category: 'software-engineering',
    tags: ['Python', 'SQL Server', 'React', 'Tailwind CSS'],
    summary:
      'Assistente virtual interno para que colaboradores tirem dúvidas sobre processos e informações dos diferentes departamentos da empresa.',
    problemStatement:
      'Colaboradores gastavam tempo significativo buscando informações sobre processos internos de diferentes departamentos, sobrecarregando as equipes de suporte com perguntas repetitivas.',
    solution:
      'Desenvolvi um bot interno que responde dúvidas frequentes dos colaboradores sobre processos departamentais, com backend em Python para o processamento das perguntas e base de conhecimento estruturada no SQL Server.',
    architecture: {
      description:
        'Assistente virtual interno que processa perguntas dos colaboradores e responde com base em uma base de conhecimento departamental estruturada.',
      flowSteps: [
        '1. Colaborador envia uma dúvida pela interface do bot',
        '2. Backend Python interpreta a pergunta e busca na base de conhecimento',
        '3. Base de conhecimento departamental é mantida no SQL Server',
        '4. Resposta é retornada ao colaborador na interface de chat',
      ],
      stack: COMMON_STACK,
    },
    screenshots: [
      {
        url: '/images/portfolio/bot_interno.png',
        caption: 'Interface de chat do bot interno para dúvidas departamentais.',
        isCover: true,
      },
    ],
  },
]
