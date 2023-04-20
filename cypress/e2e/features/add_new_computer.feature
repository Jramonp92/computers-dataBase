Feature:  Add new computer

    Rule: Happy Path - Aceptance Criteria
    
    Scenario Outline: Adding a new computer - Click Create Button
        Given I am on the add new computer page
        When I Fill the form with "<computerName>" - "<introduced>" - "<discontinued>" - "<company>" and I click the create button  
        Then I must be redirected to the list page and I must see a message indicating the computer "<computerName>" has been created

    Scenario Outline: Adding a new computer - Click Cancel Button
        Given I am on the add new computer page
        When I Fill the form with "<computerName>" - "<introduced>" - "<discontinued>" - "<company>" and I click the cancel button  
        Then I must be redirected to the list page and the computer "<computerName>" shall not exist
   
    Examples:
    | computerName  | introduced         | discontinued  | company    |
    | Mac ms1       | 1992-12-01         | 1994-12-01    | Apple Inc. |
    | RocketLaunch  | 1999-12-08         | 2000-12-08    | RCA        |

