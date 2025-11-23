# Guia de Dicas para Clash Royale

Este projeto é uma página web interativa criada para jogadores de Clash Royale, focada em fornecer dicas e estratégias para melhorar a jogabilidade. A interface é totalmente temática, inspirada no universo do jogo, para criar uma experiência imersiva e divertida.

A aplicação apresenta as dicas em formato de "cartas" e permite que os usuários busquem por estratégias específicas, como gerenciamento de recursos, posicionamento de tropas ou táticas de batalha.

<!-- Adicione aqui um screenshot do seu projeto! -->
<!-- Ex: ![Screenshot do Projeto](url_da_imagem.png) -->

## ✨ Funcionalidades

*   **Interface Temática:** Todo o design, desde as cores e fontes (`Bangers`, `Quicksand`) até as texturas de pedra e madeira, foi cuidadosamente escolhido para simular o ambiente do Clash Royale.
*   **Busca Dinâmica:** Um campo de busca permite que os usuários filtrem as dicas por palavras-chave, encontrando facilmente a estratégia que procuram em tempo real.
*   **Cartas de Dicas:** As dicas são carregadas dinamicamente a partir de um arquivo JSON e exibidas em "cartas" interativas, cada uma com um título, uma descrição e um link para um vídeo de referência no YouTube.
*   **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela, garantindo uma boa experiência tanto em desktops quanto em dispositivos móveis.
*   **Conteúdo Centralizado:** Todas as dicas são armazenadas no arquivo `data.json`, o que facilita a adição, remoção ou edição de conteúdo sem precisar alterar o código HTML ou JavaScript.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias web padrão:

*   **HTML5:** Para a estrutura semântica da página.
*   **CSS3:** Para a estilização avançada e temática, utilizando:
    *   **CSS Variables:** Para um sistema de cores temático e de fácil manutenção.
    *   **Flexbox:** Para a criação de layouts flexíveis.
    *   **Media Queries:** Para garantir a responsividade em diferentes dispositivos.
*   **JavaScript (Vanilla):** Para a manipulação do DOM, implementação da funcionalidade de busca e carregamento dinâmico dos dados a partir do arquivo `data.json`.

## 📂 Estrutura do Projeto

```
/
├── index.html         # Arquivo principal da página
├── style.css          # Folha de estilos com todo o design temático
├── script.js          # Código para a lógica de busca e renderização das dicas
└── data.json          # Banco de dados com as dicas e links
```

OBS:ALGUNS LINKS ESTÃO INDO PARA VÍDEOS INEXISTENTES,DEVIDO AO TEMPO CONSEGUI APENAS COLOCAR POUCOS VIDEOS REAIS

---

### 💡 Dicas para o seu GitHub

*   **Adicione uma imagem:** Capture uma tela do seu projeto em funcionamento e adicione-a ao README para que os visitantes possam ver como ele é.
*   **GitHub Pages:** Você pode hospedar este projeto gratuitamente no GitHub Pages para que qualquer pessoa possa acessá-lo online.
*   **Licença:** Considere adicionar um arquivo `LICENSE` para definir como outras pessoas podem usar seu código.
