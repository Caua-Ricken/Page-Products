📦 Products Page

Aplicação web desenvolvida para gerenciamento de produtos e controle de estoque, permitindo cadastrar categorias, produtos e acompanhar a disponibilidade dos itens de forma simples e intuitiva.

🚀 Funcionalidades
Cadastro de categorias
Listagem de categorias
Edição de categorias
Exclusão de categorias
Cadastro de produtos
Listagem de produtos
Edição de produtos
Exclusão de produtos
Associação de produtos a categorias
Filtro de produtos por categoria
Controle de estoque dos produtos
Dashboard ilustrativa com indicadores
Validação dos campos obrigatórios
Persistência dos dados em banco de dados MySQL
🛠 Tecnologias utilizadas
Front-end
React
React Router DOM
CSS
Back-end
Node.js
Express
Sequelize
Banco de dados
MySQL
Ferramentas
Nodemon (ambiente de desenvolvimento)
Git e GitHub
Hospedagem
Front-end: Vercel
Back-end: Render
Banco de dados: MySQL
📁 Arquitetura Back-End

O back-end foi desenvolvido seguindo o padrão MVC (Model-View-Controller), separando responsabilidades entre:

Models
Controllers
Rotas
Configuração do banco de dados

Essa estrutura foi escolhida para manter o projeto organizado, facilitar a manutenção e permitir futuras expansões da aplicação.

📁 Arquitetura Front-end

O front-end foi desenvolvido utilizando React, buscando manter uma organização simples e escalável. A estrutura foi dividida em:

Pages
Components
Arquivos de estilo (CSS)
Configuração de rotas
Arquivo principal da aplicação

As páginas são responsáveis pela renderização das telas da aplicação, enquanto os componentes concentram elementos reutilizáveis. Os estilos foram separados em arquivos CSS para facilitar a manutenção e organização do projeto.

Essa estrutura foi escolhida para tornar o código mais organizado, facilitar a reutilização de componentes e simplificar futuras implementações.

📋 Campos da categoria
Campo	Tipo
Nome	Texto
Descrição	Texto
📋 Campos do produto
Campo	Tipo
Nome	Texto
Descrição	Texto
Categoria	Seleção
Preço	Decimal
Estoque	Inteiro
✔ Validações
O nome da categoria é obrigatório.
O nome do produto é obrigatório.
O produto deve possuir uma categoria cadastrada.
O preço deve ser informado.
O estoque deve ser maior ou igual a zero.
📊 Dashboard

A aplicação conta com uma dashboard ilustrativa apresentando informações resumidas sobre o sistema, como:

Quantidade de categorias cadastradas
Quantidade de produtos cadastrados
Total de itens em estoque
Produtos com estoque baixo

Observação: Os indicadores apresentados na dashboard possuem caráter ilustrativo nesta versão da aplicação.

📦 Controle de Estoque

Cada produto possui um estoque associado, permitindo acompanhar a quantidade disponível de cada item.

Além disso, a aplicação permite:

Visualizar produtos com baixo estoque;
Filtrar produtos por categoria;
Organizar os produtos de forma simples e intuitiva.
🚧 Movimentações de Estoque

A aplicação possui uma página destinada ao controle de movimentações de estoque.

Nesta versão, a funcionalidade encontra-se em desenvolvimento e está disponível apenas como demonstração da estrutura do sistema.

🌐 Aplicação Online

A aplicação foi publicada utilizando serviços gratuitos e pode ser acessada diretamente pelo navegador.

Aplicação Web

https://page-products-bfjoezz9d-caua-ricken.vercel.app/

🤖 Uso de Inteligência Artificial

Ferramentas de Inteligência Artificial foram utilizadas como apoio durante o desenvolvimento, principalmente para auxiliar em ajustes de CSS, refinamentos visuais, estruturação de componentes React e solução de dúvidas relacionadas ao Node.js, Express, Sequelize e hospedagem da aplicação.

O uso dessas ferramentas contribuiu para otimizar o desenvolvimento, permitindo maior foco na implementação da lógica da aplicação, integração entre front-end e back-end e organização do projeto.

📌 Autor

Desenvolvido por Cauã Ricken

GitHub

https://github.com/Caua-Ricken
