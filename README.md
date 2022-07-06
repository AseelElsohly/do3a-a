## Do3aa Project Back
This is the back-end for DO3AA Project


## Description 
this project is about Do3aa 
we can add , delete , update and search about any do3aa
this backend is developed by using nestjs and prisma for generating sql database

## API End-points 
```bash
$ [POST] localhost/do3aa/add #adding new do3aa
    body:{
        "do3aa":"some do3aa to add"
    }
$ [POST] localhost/do3aa/search #search for do3aa with the sent word in body
    body:{
        "do3aa":"some do3aa to search"
    }
$ [PATCH] localhost/do3aa/update/:id #Update do3aa with id sent and data in body
    body:{
        "do3aa":"new do3aa data"
    }
$ [GET] localhost/do3aa/list/all #List all do3aa in table
$ [GET] localhost/do3aa/list/:id #Find do3aa with id sent
$ [DELETE] localhost/do3aa/delete/:id #delete do3aa with id sent
```


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Notes
Do not forget to make a copy of the .env.example file and remoove .exmaple section from the name. Update the DATABASE_URL rnv varible so it matches your system specifications 

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
