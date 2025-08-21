Feature: SauceDemo UI automation: Sort

    Scenario: Successfully sort item by name (Z to A)
        When I sort item by name: Z to A
        Then I should verify item is sorted correctly: Z to A
          
    Scenario: Successfully sort item by name (A to Z)
        When I sort item by name: A to Z
        Then I should verify item is sorted correctly: A to Z

    Scenario: Successfully sort item by price (Low to High)
        When I sort item by price: Low to High
        Then I should verify item is sorted correctly: lower price to higher price

    Scenario: Successfully sort item by price (High to Low)
        When I sort item by price: High to Low
        Then I should verify item is sorted correctly: higher price to lower price