Feature:  Just open the page to verify everything is working

    Scenario: Verifying Opening
        Given I am on the home page
        When I click the add button
        Then I am redirected to the add page
