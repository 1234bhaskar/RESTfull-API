# RESTfull-API
A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.
REST is a set of architectural constraints, not a protocol or a standard. API developers can implement REST in a variety of ways.
HTTP Methods
In HTTP there are five methods that are commonly used in a REST-based Architecture i.e., POST, GET, PUT, PATCH, and DELETE ,Also called CRUD operation.
GET: The HTTP GET method is used to read 
POST: The POST verb is most often utilized to create new resources
PUT: It is used for updating the capabilities
PATCH:It is also used for updating but,not the complete resource.
DELETE: It is used to delete a resource identified by a URI

**In this repositry i have practiced the RestApi methods that are esential for creating a full stack web Application
1.make a server using express and node js.
2.set up a datbase using mongoDB
3.connect your database with your server(i.e app.js) using
```bash
mongoose
  .connect("mongodb://127.0.0.1:27017/wikiDB", {
    useNewUrlParser: true,
  })
  ```

  
  4.Create a schema like this:-
 ```bash
 const articlSchema = {
  title: String,
  content: String,
};
```

5.then create a model .
6.And you are good to go 😊

A. POST Method
```bash
app.post("/6pp", async (req, res) => {
  const articles = await Article.create(req.body);

  res.status(200).json({
    success: true,
    articles,
  });
});


```

-app.post("set the route/url",create a function for request,response()
in order to create write modle.create(req.body)
<br>

*(if using postman create a new request ,go to body ,choose json ,create a entry like this:-
```bash
{
  "title":"Back-end",
  "content":"Server and Database is Created using this."
}
```
*setup respective url(i.e http://localhost:3000/6pp) ,set the method to POST and and then Send)
-now you have created your first Api.
)👏👏👏👏👏
