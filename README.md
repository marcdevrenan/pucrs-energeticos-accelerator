# Energéticos Accelerator :zap:

## Descrição do Projeto
Projeto proposto pelo Centro de Inovação da PUCRS para as turmas de 2022, baseado no desenvolvimento de um sistema para composição de nota, cálculo de impostos e balanço.

## :bar_chart: Status do Projeto

### Features :game_die:
- [x] Cálculo de venda
- [x] Cálculo de impostos
- [x] Relatório

## :memo: Pré-requisitos
* Necessária a instalação do [NodeJS](https://nodejs.org/).
* Utilização de um bom editor de sua preferência para execução e manipulação do código, como por exemplo o [Visual Studio Code](https://code.visualstudio.com/).

### :rocket: Tecnologias
- [NodeJS 16.13.2 LTS](https://nodejs.org/).
- [Visual Studio Code](https://code.visualstudio.com/).
- [Google Chrome](https://chromeenterprise.google/).

## Relatório de Desenvolvimento :chart_with_upwards_trend:
Para confecção da aplicação proposta na atividade, optei pela utilização da linguagem JavaScript, apesar de não ser a mais confortável me serviu como desafio e prática 
dos conteúdos que venho estudando em torno da tecnologia.

Primeiramente dividi a construção da aplicação em algumas etapas, para facilitar o entendimento e compreensão do que estava sendo solicitado. Após ter ideia de como começar,
busquei implementações simples que me retornariam o resultado esperado sem me preocupar inicialmente com a performance.

Iniciei o projeto com uma implementação baseada nos dados fornecidos pelo desafio, ao qual obtive o resultado esperado no console. Logo em seguida atribuí o uso de funções
para que pudesse implementar um sistema de menu que trouxesse a recursividade esperada para o projeto, onde independente dos inputs, pudessem ser feito testes com dados 
colhidos diretamente da interação com o usuário. Com o sistema funcionando de forma recursiva, incrementei alguns tratamentos básicos de exceção, para dar um pouco mais de
estabilidade nos testes.

Seguindo a resolução do problema, me deparei com o fato de que seria necessário a criação de arrays para armazenar os quantitativos totais de cada ciclo de operação da
aplicação, onde esses dados armazenados seriam peça chave para composição da funcionalidade de relatório. Feito isso, tratei através do parseFloat e do método toFixed a 
organização das casas decimais de cada resultado, deixando o retorno menos poluído.

E como extra da atividade, sugeri um abatimento do valor por unidade de mercadoria mediante ao quantitativo de compra, o que foi computado em uma condicional ternária logo 
no início do cálculo, antes mesmo da atribuição dos tributos.

Então o sistema opera de forma automática, através do input do usuário, trazendo quando necessário o relatório de vendas, tributos e mercadorias até o momento da execução.
Como sugestão para futuras implementações, acredito que o armazenamento dos dados se torna fundamental nesse tipo de aplicação, onde o registro e a persistência de dados
torna mais relevante a sua utilização e o propósito de sua construção.

Sem mais a acrescentar, gostaria de deixar claro a satisfação em poder ser desafiado a testar meus conhecimentos mais uma vez e apresentar uma solução alternativa para a
tarefa sugerida pela equipe do Centro de Inovação da PUCRS.
