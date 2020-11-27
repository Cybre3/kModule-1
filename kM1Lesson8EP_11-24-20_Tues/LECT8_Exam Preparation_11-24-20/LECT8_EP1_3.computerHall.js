/*

        March to May    June to August
Day     10.50 per hour  12.60 per hour 
Night   8.4 per hour    10.20 per hour

​discounts​:
• if a group​​ >= 4
    the cost per person is ​reduced​ by ​10%
• if hours >= 5
    the price is ​reduced by 50% per person
    
calculate ​price per person per hour and the total amount​.

Input 4 lines​:
    • On the ​first​ line 
        - the ​month​ - a text with options:
            "​January​", "​February​", "​March​", "​April​", "​May​","​June​", "​July​", "​August​", "​September​", "​October​", "​November​", "​December​"
    • On the ​second​ line 
        - ​the number of hours spent​, an ​integer​​[1...10]
    • On the ​third​ line 
        - ​the number of people in the group, an integer​​[1...10]
    • The ​fourth​ line 
        - ​time of the day​ - either "​day​" or "​night​"

    Output two lines​:
        • On the ​first line​: 
            "​Price per person for one hour: {price per person per hour}​"
        • On the ​second line​: 
            "​Total cost of the visit: {total price}​"

    round price to second decimal place
*/

function main(month, numHoursSpent, numOfPPL, timeOfDay) {

    // check the month to get the price
    // if else if else...
        // if (month === March || month === April || monthm === May)
            // do a thing
        // else if (month === June || month === July || monthm === August)
            // do a thing
        // else 
            // do a thing
    
        // swtich
        // switch (month)
            // case March:
            // case April:
            // case May:
                // switch(timeOfDay)
                    // case day:
                    // let price = 10.50
                        // do the day thing
                        // does the number of people get discount
                        // if(numOfPPL >= 4)
                            // the cost per person is ​reduced​ by ​10%
                            // numOfPPL -= numOfPPL * 0.1; ==> numOfPPL - (numOfPPL * .1)
                            // 10.50 - 10%
                        // does num hours get discount
                        // if(numHoursSpent >= 5)
                            // the price is ​reduced by 50% per person
                            // price - 50 %
                            // price -= price * 0.5;
                        
                        // print out the final price per person
                        // calculate total
                        // let total = price * numOfPPL * numHoursSpent
                        // print total price
                        // break;
                    // case night:
                        // do the night thing
                        // does the number of people get discount
                        // if(numOfPPL >= 4)
                            // the cost per person is ​reduced​ by ​10%
                            // numOfPPL -= numOfPPL * 0.1; ==> numOfPPL - (numOfPPL * .1)
                            // 10.50 - 10%
                        // does num hours get discount
                        // if(numHoursSpent >= 5)
                            // the price is ​reduced by 50% per person
                            // price - 50 %
                            // price -= price * 0.5;
                        
                        // print out the final price per person
                        // calculate total
                        // let total = price * numOfPPL * numHoursSpent
                        // print total price
                        // break;
                // break;
            // case June:
            // case July:
            // case August:
                // check time of day
                // if(timeOfDay === day)
                    // do the day thing
                    // does the number of people get discount
                        // if(numOfPPL >= 4)
                            // the cost per person is ​reduced​ by ​10%
                            // numOfPPL -= numOfPPL * 0.1; ==> numOfPPL - (numOfPPL * .1)
                            // 10.50 - 10%
                        // does num hours get discount
                        // if(numHoursSpent >= 5)
                            // the price is ​reduced by 50% per person
                            // price - 50 %
                            // price -= price * 0.5;
                        
                        // print out the final price per person
                        // calculate total
                        // let total = price * numOfPPL * numHoursSpent
                        // print total price
                // else
                    // do the night thing
                    // does the number of people get discount
                        // if(numOfPPL >= 4)
                            // the cost per person is ​reduced​ by ​10%
                            // numOfPPL -= numOfPPL * 0.1; ==> numOfPPL - (numOfPPL * .1)
                            // 10.50 - 10%
                        // does num hours get discount
                        // if(numHoursSpent >= 5)
                            // the price is ​reduced by 50% per person
                            // price - 50 %
                            // price -= price * 0.5;
                        
                        // print out the final price per person
                        // calculate total
                        // let total = price * numOfPPL * numHoursSpent
                        // print total price
                // break;
}

main('March', 3, 3, 'day');
// Price per person for one hour: 10.50
// Total cost of the visit: 94.50

// The price is ​10.50​. (​March​​day​) per person.
// (10.50 * 3) * 3 = 94.50 total price​ for the whole visit

main('July', 5, 5, 'night');
// Price per person for one hour: 4.59
// Total cost of the visit: 114.75

// The price is ​10.20​. (​July​​night​) per person.
// People are ​more than 4​ => ​10.20 – (10.20 *0.1) = 9.18​. 
// The hours are ​5 => 9.18 - (9.18 *0.5) = 4.59 per person​.
// (4.59 * 5) * 5 = 114.75 total price​ for the whole visit