*https://artigo-cassio.netlify.app/






# Site do Artigo "Explorações Científicas e Filosóficas no Filme Interestelar"


Este projeto consiste em um site responsivo para publicação do artigo "Explorações Científicas e Filosóficas no Filme Interestelar" de Cássio Simas dos Santos.

## Estrutura do Projeto

```
interstellar_site/
├── images/
│   ├── gargantua.jpg       # Imagem do buraco negro Gargantua
│   ├── endurance.jpg       # Imagem da nave Endurance
│   └── ice_planet.jpg      # Imagem do planeta de gelo
├── index.html              # Página principal do site
├── styles.css              # Estilos CSS
├── script.js               # Funcionalidades JavaScript
├── interstellar_article.md # Conteúdo original do artigo
├── site_plan.md            # Plano detalhado do site
├── wireframe.md            # Wireframes do layout
└── README.md               # Este arquivo
```

## Características do Site

- **Design Responsivo**: Adaptado para desktop, tablet e dispositivos móveis
- **Referências Visuais**: Incorpora elementos visuais do filme Interestelar
- **Seção de Comentários**: Permite interação dos leitores
- **Navegação Intuitiva**: Menu de navegação com links para cada seção do artigo
- **Efeitos Visuais**: Parallax, animações de scroll e transições suaves

## Tecnologias Utilizadas

- HTML5
- CSS3 (com Flexbox para layout responsivo)
- JavaScript (vanilla)
- Fontes Google (Space Grotesk e Source Sans Pro)

## Como Visualizar o Site

1. Abra o arquivo `index.html` em qualquer navegador moderno
2. Para uma experiência completa, recomenda-se um servidor web local

### Usando um servidor local Python:

```bash
cd /home/ubuntu/interstellar_site
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000` no navegador.

## Funcionalidades Implementadas

- Menu de navegação responsivo (colapsa em dispositivos móveis)
- Efeito parallax na imagem de fundo do cabeçalho
- Animações de elementos ao rolar a página
- Formulário de comentários (simulado)
- Funcionalidade de resposta a comentários

## Considerações de Implementação

- O sistema de comentários é apenas uma simulação visual. Em uma implementação real, seria necessário um backend para armazenar e gerenciar os comentários.
- As imagens foram otimizadas para carregamento rápido, mantendo a qualidade visual.
- O design prioriza a legibilidade do texto, especialmente importante para um artigo científico/filosófico.

## Próximos Passos

- Implementar um backend real para o sistema de comentários
- Adicionar mais elementos visuais relacionados ao filme
- Incorporar mais animações sutis para melhorar a experiência do usuário
- Implementar compartilhamento em redes sociais

