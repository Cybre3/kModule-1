function main(days, listPatientPerDay) {
    let patientsUntreated = 0;
    let patientsTreated = 0;
    let doctors = 7;

    for (let i = 1; i <= days; i++) {
        let patients = listPatientPerDay.shift();
        if (i % 3 === 0 && patientsUntreated > patientsTreated) {
            doctors++;
        }
        if (patients >= doctors) {
            patientsUntreated += (patients - doctors);
        }
        patientsTreated += doctors;
    }
    console.log(`Treated patients: ${patientsTreated}.`);
    console.log(`Untreated patients: ${patientsUntreated}.`);
}

main(4, [7, 27, 9, 1]);
main(9, [20, 549, 247, 291, 933, 244, 880, 168, 849]);