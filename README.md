# Rede Raízes do Nordeste

Protótipo front-end desenvolvido para o estudo de caso "Rede Raízes do Nordeste", proposto na disciplina de Projeto Multidisciplinar da UNINTER.

---

## Sobre o Projeto

A Rede Raízes do Nordeste é uma franquia fictícia de lanchonetes regionais que busca modernizar seus processos de atendimento e operação por meio de canais digitais.

Este projeto apresenta um protótipo responsivo que simula a jornada do cliente, desde a escolha da unidade até o acompanhamento do pedido, contemplando aspectos como fidelização, LGPD e integração com serviços externos de pagamento.

---

## Identificação Acadêmica

| Informação  | Detalhes                                  |
| ----------- | ----------------------------------------- |
| Aluno       | Gustavo Seiji Grandi Fujii                |
| RU          | 4668718                                   |
| Curso       | CST Análise e Desenvolvimento de Sistemas |
| Instituição | UNINTER                                   |

---

## Tecnologias Utilizadas

* React
* Vite
* JavaScript
* HTML5
* CSS3 Responsivo
* Dados simulados em `src/data.js`

---

## Estrutura do Projeto

```text
src/
├── components/
├── assets/
├── data.js
├── App.jsx
├── main.jsx
└── styles/
```

---

## Como Executar

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

Após iniciar o servidor, acesse a URL exibida no terminal.

---

## Funcionalidades Implementadas

### Atendimento ao Cliente

* Página inicial da marca
* Seleção de unidade
* Cardápio filtrado por unidade
* Visualização de detalhes dos produtos
* Carrinho de compras
* Alteração de quantidade de itens
* Simulação de checkout
* Acompanhamento do status do pedido

### Fidelização e Privacidade

* Programa de fidelidade
* Consentimento LGPD simulado
* Controle fictício de pontos

### Documentação Técnica

* Requisitos do sistema
* Decisões técnicas adotadas
* Limitações do protótipo

---

## Decisões Técnicas

O projeto foi desenvolvido utilizando React e Vite para facilitar a organização do código e a separação das funcionalidades em componentes reutilizáveis.

A navegação foi implementada de forma simplificada, utilizando âncoras, evitando a necessidade de bibliotecas adicionais de roteamento.

Os dados das unidades, produtos e demais informações foram centralizados em `src/data.js`, permitindo simular diferentes cenários de negócio sem dependência de um banco de dados.

O fluxo de pagamento é apenas uma simulação e representa a integração com serviços externos, conforme descrito no estudo de caso.

O consentimento LGPD também é simulado. Nenhum dado pessoal real é coletado, armazenado ou processado pela aplicação.

---

## Requisitos Atendidos

* Interface responsiva para dispositivos móveis e desktop
* Organização do código por componentes
* Separação dos dados simulados
* Fluxo completo de pedido
* Programa de fidelidade
* Consentimento LGPD
* Produtos específicos por unidade
* Simulação de pagamento externo
* Documentação das principais decisões técnicas

---

## Limitações

* Não possui back-end ou banco de dados
* Não possui autenticação de usuários
* O carrinho é mantido apenas durante a sessão da aplicação
* O pagamento externo é apenas ilustrativo
* O status dos pedidos é gerado localmente no front-end
* Aspectos de escalabilidade e alta disponibilidade são tratados apenas de forma conceitual

---

## Testes Manuais Sugeridos

1. Navegar entre todas as seções do sistema.
2. Testar a aplicação em diferentes tamanhos de tela.
3. Selecionar diferentes unidades e verificar a alteração do cardápio.
4. Adicionar produtos ao carrinho.
5. Alterar quantidades e remover itens.
6. Finalizar um pedido e acompanhar a evolução do status.
7. Simular falha de pagamento.
8. Validar o comportamento da área de fidelidade e do consentimento LGPD.

---

## Observação

Este projeto foi desenvolvido exclusivamente para fins acadêmicos como parte das atividades da disciplina de Projeto Multidisciplinar.
