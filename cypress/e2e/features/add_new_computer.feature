Feature:  Add new computer

    Rule: Happy Path - Aceptance Criteria
    
    Scenario Outline: Adding a new computer - Click Create Button
        When I Fill the form with "<computerName>" - "<introduced>" - "<discontinued>" - "<company>" and I click the create button  
        Then I must be redirected to the list page and I must see a message indicating the computer "<computerName>" has been created
        Examples:
        | computerName  | introduced         | discontinued  | company    |
        | Mac ms1       | 1992-12-01         | 1994-12-01    | Apple Inc. |
        | RocketLaunch  | 1999-12-08         | 2000-12-08    | RCA        |

    Scenario Outline: Adding a new computer - Click Cancel Button
        When I Fill the form with "<computerName>" - "<introduced>" - "<discontinued>" - "<company>" and I click the cancel button  
        Then I must be redirected to the list page and the computer "<computerName>" shall not exist
        Examples:
        | computerName  | introduced         | discontinued  | company    |
        | Mac ms1       | 1992-12-01         | 1994-12-01    | Apple Inc. |
        | RocketLaunch  | 1999-12-08         | 2000-12-08    | RCA        |

    Rule: Negative Scenarios - Edge cases

    Scenario Outline: Adding a new computer - Invalid inputs
        When I Fill the form with "<computerName>" - "<introduced>" - "<discontinued>" - "<company>" and I click the create button  
        Then I must get the following error "<error>"
        Examples:
        | computerName                                  | introduced         | discontinued  | company    | error                                                          |
        | RocketLaunch                                  | 1999-12-08         | 1998-12-08    | RCA        | Discontinued date is before introduction date                  |
        | Mac ms1                                       | YYYY-MM-DD         | 1994-12-01    | Apple Inc. | java.time.format.DateTimeParseException                        |
        | RocketLaunch                                  | 1999-12-08         | YYYT-MM-DD    | RCA        | java.time.format.DateTimeParseException                        |
        | {selectall}{backspace}                        | 1992-12-01         | 1994-12-01    | Apple Inc. | Failed to refine type : Predicate isEmpty() did not fail.      |
        | a  a{moveToStart}{del}{moveToEnd}{backspace}  | 1992-12-01         | 1994-12-01    | Apple Inc. | Failed to refine type : Predicate isEmpty() did not fail.      | 
        #Last one sends an empty space, little cypress bdd trick 