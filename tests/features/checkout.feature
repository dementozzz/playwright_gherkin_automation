Feature: SauceDemo UI automation: Checkout

    Scenario: Test
        Given I'll make sure my item cart empty first
        And I'll add several items in my cart
        Then I navigate to cart page
        Then I proceed to checkout step 1: Information
        Given I fill checkout information data
        Then I proceed to checkout step 2: Overview
        Given I verify subtotal & total of items price: Checkout Overview Page
        Then I should finish my checkout process
        And I see the successfull checkout text