# Cookie&Soda

## Toolstacks

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=black)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

<hr>

## About Cookie&Soda

> This api handles all the backend data for Cookie&Soda, Keeps track of stock and allow the user to order and to check its status.

<hr>

## .env

> .env file should contain the following information

```Javascript
PORT=3000

DB_DEVELOPMENT=database_name_test
DB_USER={your postgres user} // postgres
DB_PASS={yout postgres password} // postgres
DB_HOST=localhost
DB_PORT=5432

jwtSecret={your secret}
```

<hr>

## Routes

> The following routes and function explanation

### `Users Routes (userRoutes.js)`

```Javascript
router.post("/signup", (req, res) => {
  return userController.Signup(req, res);
//   `Required body`
//     - name
//     - surname
//     - email
//     - password
//     - gender
//     - DOB
//     - contact_number
});

router.post("/login", (req, res) => {
  return userController.Login(req, res);
//   `Required body`
//     - email
//     - password
});
router.get("/verify", (req, res) => {
  return userController.Verify(req, res);
//   `Required header`
//     - x-auth-token
});
router.get("/profile", middleware, (req, res) => {
  return userController.getProfile(req, res);
//   `Required header`
//     - x-auth-token
});
router.put("/update-profile", middleware, (req, res) => {
  return userController.updateProfile(req, res);
//   `Required body`
//     - name
//     - surname
//     - avatar
//     - gender
//     - contact_number
});
router.delete("/delete-profile", middleware, (req, res) => {
  return userController.deleteProfile(req, res);
//   `Required header`
//     - x-auth-token
});
```

<hr>

### `Admin Routes (usersRoutes.js & productRoutes.js)`

```Javascript
// UserRoutes.js
router.get("/", middleware, (req, res) => {
    return adminController.getUsers(req, res);
    //   `Required header`
    //     - x-auth-token
});

// ProductRoutes.js
router.post("/add-product", (req, res) => {
  return adminController.addProduct(req, res);
    //   `Required header`
    //     - x-auth-token

    //   `Required body`
    //     - title
    //     - desc
    //     - price
    //     - sale (boolean)
    //     - img1
    //     - img2
    //     - img3
    //     - img4
});
router.put("/update-product/:id", (req, res) => {
  return adminController.updateProduct(req, res);
    //   `Required header`
    //     - x-auth-token

    //   `Required body`
    //     - x-auth-token
    //     - title
    //     - desc
    //     - price
    //     - sale (boolean)
    //     - img1
    //     - img2
    //     - img3
    //     - img4
});
router.delete("/delete-product/:id", (req, res) => {
  return adminController.deleteProduct(req, res);
    //   `Required header`
    //     - x-auth-token

    //   `Required params`
    //     - product ID
});

```

<hr>

### `Produtc Routes (productRoutes.js)`

```Javascript
// UserRoutes.js
router.get("/", async (req, res) => {
  try {
    let products = await knex("products");

    if (products.length === 0) {
      return Error(res, "Table Products is Empty");
    } else {
      return StatsOk(res, products);
    }
  } catch (error) {
    return InternalErr(res, error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // Require params of product id
    let product = await knex("products").where("id", req.params.id);

    if (product.length === 0) {
      return Error(res, "Product Not Found");
    } else {
      return StatsOk(res, product);
    }
  } catch (error) {
    return InternalErr(res, error.message);
  }
});

```

<hr>

## Middleware

> The middleware function requires a header with value <b>x-auth-token</b>

`example of a request`

```Javascript
fetch(``, {
    headers: {
        'x-auth-token': token
    }
})
```

<hr>

## Controllers

### `Response`

> Handles all the responses to keep responses the same context

- StatsOk,
- Error,
- InternalErr,

### `Users`

> This file contains the functions for

- Signup,
- Login,
- Verify,
- getProfile,
- updateProfile,
- deleteProfile,

### `Admin`

> This file contains the functions for

- addProduct,
- updateProduct,
- deleteProduct,
