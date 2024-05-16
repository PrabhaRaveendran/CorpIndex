Feature: Branch features

  
  Scenario: Verify Branch creation
    Given I am in login page
    When I enter valid username and password
	And I click on login button
    Then I should see be able to create a branch
      Then I should see me 

  Scenario: Verify Voucher Head creation
    Given i am able to login to the page 
    When I create a voucher head 
    Then I should be able to view them in the Voucher head list    

      
