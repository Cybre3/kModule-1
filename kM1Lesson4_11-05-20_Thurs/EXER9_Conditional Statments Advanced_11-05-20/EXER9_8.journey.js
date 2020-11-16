function main(budget, season) {
    let location = '';
    let percentOfBudget = 0;
    let whereStay = '';

    
    if (budget > 1000) {
        whereStay = 'Hotel';
        location = 'Europe';
        percentOfBudget = 0.90;
    } else {
        if (budget <= 100) {
            location = 'Bulgaria';
            switch (season) {
                case 'summer':
                    whereStay = 'Camping';                     
                    percentOfBudget = 0.30;
                    break;
                case 'winter':
                    whereStay = 'Hotel'; 
                    percentOfBudget = 0.70;
                    break;
            }
        } else if (budget <= 1000) {
            location = 'Balkans';
            switch (season) {
                case 'summer':
                    whereStay = 'Camping';                    
                    percentOfBudget = 0.40;
                    break;
                case 'winter':
                    whereStay = 'Hotel'; 
                    percentOfBudget = 0.80;
                    break;      
            }
        }
            
    }
    let amountSpent = budget * percentOfBudget;

    console.log(`Somewhere in ${location}`);
    console.log(`${whereStay} - ${amountSpent.toFixed(2)}`);

}

main(50, 'summer');
main(75, 'winter');
main(312, 'summer');
main(678.53, 'winter');
main(1500, 'summer');
