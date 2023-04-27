# Teste de Integração com Jest, Fetch API e Yup

## Instalação

Para instalar as dependências do projeto, abra o terminal ou CMD na raiz do
projeto e execute o seguinte comando:

```
npm install
```

## Execução dos testes

Para executar todos os testes, rode o seguinte comando:

```
npm run test
```

Caso deseje salvar os reports em um arquivo específicos, execute:

```
npm run test:report -- <NOME DO ARQUIVO DE REPORT.txt>
```

Também é possível executar um teste em específico:

```
npm run test -- test/<NOME DO ARQUIVO DE TESTE>.test.js
```

Por exemplo, `npm run test -- test/cenario-2.test.js` executa apenas o Cenário 2 de testes.

## Documentações

- [Jest](https://jestjs.io/pt-BR/docs/getting-started)
- [Node Fetch](https://github.com/node-fetch/node-fetch)
- [Yup](https://github.com/jquense/yup)
