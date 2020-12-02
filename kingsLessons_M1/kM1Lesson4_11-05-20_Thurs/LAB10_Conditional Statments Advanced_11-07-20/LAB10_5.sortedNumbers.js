// n1, n2, n3

//n1<n2<n3 Ascending  => n1<n2 && n2<n3
//n1>n2>n3 Descending => n1>n2 && n2>n3
// else Not sorted 

function main(n1, n2, n3) {

    if (n1<n2 && n2<n3) {
        console.log('Ascending');
    } else if(n1>n2 && n2>n3) {
        console.log('Descending');
    } else {
        console.log('Not sorted');
    }
}

main(1, 2, 3);
main(3, 2, 1);
