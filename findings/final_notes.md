## Approach: 

I started giving some manual testing to the site to identify all the possibles outcomes and the best candidates to automate, when I had everything identified my second step was to create
the project and setup cypress with cucumber, creating a quick test just to check it worked as expected, decided to use @badeball/cypress-cucumber-preprocessor since is one of the most used 
dependencies for cypress-cucumber.

About the way I structured the framework, I decided to go with the classic Page Object Model with a little modification, steps definition doesn't hold any logic and only calls the methods
created on the page file, on the page file all the elements we used from the dom were wrapped into an object called elements, just to simply reutilize them when needed. 

After the setup I thougt that using a fixture with a JSON file to populate the form with a computer for every company in the select could be the best approach,
however after some quick tests and thinking it better, it looks like it was going to add more complexity and time to the suite, so I stick to the easiest approach and 
used parwise testing with boundary testing to narrow the number of tests and to make some simple example tables covering the most common cases.

### to resume the approach was: 

- Analisis
- Setup
- Writing the test scenarios
- Defining the steps
- Defining the methods for each step

## Summary of findings: 


- Computer Name can be filled with blank spaces and the computer creation success
- There's no validation in the frontend for the form
- Tied to the last one, there's no max or min size for the name, which leads you to the creation of a computer with an absurd name that breaks the front end in the table list.
- The error messages are not descriptive, literally is just returning the exception throw by Java
- Sucess message after creation is done with a warning alert instead of success alert, which to the end user is odd and confusing.
- List Table can be broken easily filtering by a valid computer and then sending white spaces(See pagination in attached image number 1)
- Tied to the last one, when the page is broken if you click the previous button, then you end with a status 400 and page not available.


## Issues I found while creating the tool: 

- @badeball/cypress-cucumber-preprocessor doesn't have the gherkin clause 'AND' so I combined steps (Not Ideally).
- The library also doesn't gives you the ability to use '^' in the step glue, so I used unique names for the steps.
- Locators in the website were not the best, so I stick with the ID and and in some cases like the messages I went with the text inside the element.



