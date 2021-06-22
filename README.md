# rodar aplicação

para rodar em ambiente de desenvolvimento
```
$ npm run start:dev
```

# criar um migrate

Criamos um arquivo de migration dentro de ./database/migrations
```
$ npm run seq:migration:create -- --name=<nome-do-migration>
```

# subir uma migration

Após criar uma migration, esse comando executa as alterações no banco
```
$ npm run seq:db:migration
```
