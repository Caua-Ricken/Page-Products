# 📦 Products Page

Aplicação web desenvolvida para gerenciamento de produtos e controle de estoque, permitindo cadastrar categorias, produtos e acompanhar a disponibilidade dos itens de forma simples, intuitiva e organizada.

---

## 🚀 Funcionalidades

- ✅ Cadastro de categorias
- ✅ Listagem de categorias
- ✅ Edição de categorias
- ✅ Exclusão de categorias
- ✅ Cadastro de produtos
- ✅ Listagem de produtos
- ✅ Edição de produtos
- ✅ Exclusão de produtos
- ✅ Associação de produtos às categorias
- ✅ Filtro de produtos por categoria
- ✅ Controle de estoque dos produtos
- ✅ Dashboard ilustrativa
- ✅ Validação dos campos obrigatórios
- ✅ Persistência dos dados em banco de dados MySQL

---

# 🛠 Tecnologias Utilizadas

## Front-end

- React
- React Router DOM
- CSS

## Back-end

- Node.js
- Express
- Sequelize

## Banco de Dados

- MySQL

## Ferramentas

- Nodemon
- Git
- GitHub

## Hospedagem

- Front-end: Vercel
- Back-end: Render

---

# 📁 Arquitetura

## Back-end

O back-end foi desenvolvido seguindo o padrão **MVC (Model-View-Controller)**, separando responsabilidades entre:

- Models
- Controllers
- Rotas
- Configuração do banco de dados

Essa arquitetura foi escolhida para manter o projeto organizado, facilitar a manutenção e permitir futuras expansões.

---

## Front-end

O front-end foi desenvolvido utilizando **React**, mantendo uma estrutura simples e organizada.

A aplicação foi dividida em:

- Pages
- Components
- Arquivos CSS
- Configuração de rotas
- Arquivo principal da aplicação

Essa organização facilita a reutilização de componentes e a manutenção do projeto.

---

# 📋 Campos da Categoria

| Campo | Tipo |
|--------|------|
| Nome | Texto |
| Descrição | Texto |

---

# 📋 Campos do Produto

| Campo | Tipo |
|--------|------|
| Nome | Texto |
| Descrição | Texto |
| Categoria | Seleção |
| Preço | Decimal |
| Estoque | Inteiro |

---

# ✔ Validações

- O nome da categoria é obrigatório.
- O nome do produto é obrigatório.
- O produto deve estar vinculado a uma categoria.
- O preço deve ser informado.
- O estoque deve ser maior ou igual a zero.

---

# 📊 Dashboard

A aplicação possui uma dashboard ilustrativa contendo informações resumidas sobre o sistema, como:

- Quantidade de categorias cadastradas
- Quantidade de produtos cadastrados
- Total de itens em estoque
- Produtos com estoque baixo

> **Observação:** Nesta versão, os indicadores apresentados possuem finalidade demonstrativa.

---

# 📦 Controle de Estoque

O sistema permite acompanhar a quantidade disponível de cada produto através do estoque cadastrado.

Entre os recursos disponíveis estão:

- Visualização dos produtos cadastrados;
- Filtro por categoria;
- Identificação de produtos com baixo estoque;
- Organização do catálogo de produtos.

---

# 🚧 Movimentações de Estoque

A estrutura da aplicação já possui uma página destinada ao gerenciamento de movimentações de estoque.

Nesta versão, essa funcionalidade encontra-se em desenvolvimento e foi adicionada apenas para demonstrar a arquitetura prevista para futuras implementações.

---

# 🌐 Aplicação Online

A aplicação encontra-se publicada e pode ser acessada através do link abaixo:

### 🔗 Aplicação Web

https://page-products-bgd7efdry-caua-ricken.vercel.app

---

# 🤖 Uso de Inteligência Artificial

Ferramentas de Inteligência Artificial foram utilizadas como apoio durante o desenvolvimento do projeto, principalmente para:

- Auxílio na construção de componentes React;
- Ajustes e refinamentos de CSS;
- Organização da arquitetura do projeto;
- Solução de dúvidas relacionadas ao Express e Sequelize;
- Apoio durante o processo de hospedagem da aplicação.

A lógica de negócio, modelagem do banco de dados, implementação das funcionalidades e integração entre front-end e back-end foram desenvolvidas e adaptadas para atender aos objetivos do projeto.

---

# 📌 Autor

Desenvolvido por **Cauã Ricken**

### GitHub

https://github.com/Caua-Ricken
