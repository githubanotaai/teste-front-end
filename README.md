<h1>Front-end Test - Anota AI</h1>

This test is presented to the Front End development candidates to evaluate technical
knowledge. You will have 6 hours to complete the challenge.

<strong>Prerequisites:</strong>

● Use a SPA framework/library of your choice (Angular 2+, React or Vuejs) that
you will need to have already installed with its dependencies.
Notes
● You can use a complementary framework/library (bootstrap, angular material,
etc.) for handling the style of the page and listing the data. Or if you prefer, you
can use only CSS, which is good.
● We will be happy if you use design patterns in your project. But this is optional.
● Don't be alarmed, we don't expect everyone to be able to complete all the tasks,
this test is the same one presented for candidates of all experience levels, so do
what you can without worrying.
● Instructions on how to send the test are at the end of this file.
The Challenge
Your challenge is to create a digital menu using a SPA framework. For this, we provide
you with some HTML and CSS files with a very simple basic structure of the page that
you will work on. We will also provide the API that should be used, as well as a file with
the same structure in JSON for those who are unable to use the API.
Feel free to change the structure and appearance of the given base files, do whatever
you want, maybe make it responsive.

<strong>Tasks</strong>
1 - Create a workspace and an initial application with the SPA framework of your
choice. If you wish, you can also create a new Git repository to send us the link at the
end of the test.
2 - Create a list of products on the homepage. Choose one of the following three
options for you to access the JSON list:
- Send a HTTP GET request to the URI below to receive the JSON list:
https://front-end-test-app.s3.amazonaws.com/menu.json
- Use the list of items exported in file menu.js that you can import using the syntax
below (considering that last part as the path to the file menu.js):
import menu from "./menu.js"
- Copy the contents of the file menu.js to a variable in your code.
3 - Insert an option to delete product (the product must be removed from the list on the
front-end)
4 - Insert option to rate a product from 1 to 5.
5 - Insert a “search field” and implement product filtering feature where the user can
filter the products by title or description.

<strong>BONUS</strong> - Create a new page with a form to insert new products on the menu. To
do this, you’ll need to add routes for navigation between pages and you will also need
to store the list of products in some way to work on it while the application is running, as
we will not provide a route for inserting products in our API. No problem if the added
data is lost when the page is reloaded.

<strong>Instructions</strong>

To start the test, fork this repository, create a branch with its full name and then send us the pull request. If you just clone the repository you will not be able to push and then it will be more complicated to make the pull request. The choice of libraries, databases, architecture, etc. is at your discretion.
Change the README file explaining what it takes to run your application.
Paste the branch name into the GUPY system and indicate the completion of the test
If you want you can leave us feedback regarding the test
