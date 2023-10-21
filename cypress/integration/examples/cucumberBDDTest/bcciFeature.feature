Feature:  BCCI Search,ODI Team and Player Rankings Scenarios
 
 Scenario: TC-01 BCCI Home Page
     Given Navigate to the BCCI Website
     When User can see the BCCI homepage

Scenario: TC-02 Search Functionality
    Given Navigate to the BCCI Website
    When User can see the BCCI homepage
    Then Click on Close icon in advertisement
    And User click on Search Icon
    Then Enter cricket in search textbox
    And Click on Search button
    