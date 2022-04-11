Feature: Calculator tests

  Scenario Outline: As a user, I can count

    Given I am on the main page
    When I enter first number <firstvalue> and second number <secondvalue>
    And I select operator <operator>
    And I click Go button
    Then I should see result - <answer>

    Examples:
      | firstvalue | secondvalue | operator | answer |
      | 2          | 1           | +        | 3      |
      | fgh        | xbre        | +        | NaN    |
      | 12         | ad          | +        | NaN    |
      | w          | 1           | +        | NaN    |
      | 2          | #           | +        | NaN    |
      | 1.6        | 1.4         | +        | 3      |
      | 2          | 4           | -        | -2     |
      | 1          | qw          | -        | NaN    |
      | sdf        | 12          | -        | NaN    |
      | afsad      | saga        | -        | NaN    |
      | 1          | $           | -        | NaN    |
      | 6.7        | 6           | -        | 0      |
      | 10         | 5           | /        | 2      |
      | dfjk       | ifn         | /        | NaN    |
      | 65         | cvkn        | /        | NaN    |
      | ovlb       | 4           | /        | NaN    |
      | 34         | *           | /        | NaN    |
      | 36.6       | 3           | /        | 12.2   |
      | 7          | 3           | *        | 21     |
      | dfb        | cvz         | *        | NaN    |
      | 84         | xc          | *        | NaN    |
      | lmp        | 4           | *        | NaN    |
      | ;          | 9           | *        | NaN    |
      | 1.5        | 2           | *        | 3      |
      | 10         | 100         | %        | 10     |
      | sdfkn      | trn         | %        | NaN    |
      | vbN        | 3           | %        | NaN    | 
      | 8          | mk          | %        | NaN    |
      | +          | 6           | %        | NaN    |
      | 100        | 5.5         | %        | 0.055  |





