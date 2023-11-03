var classroomSupplies = ["pen", "paper", "desk", "computer"]
console.log(classroomSupplies); // pen, paper, desk, computer
sort(classroomSupplies); 
console.log(classroomSupplies); // desk, computer, paper, pen




var travelPlaces = [];
    travelPlaces.push("Toronto");
    travelPlaces.push("New York");
    travelPlaces.push("Australia");
    travelPlaces.push("Spain");
console.log(travelPlaces); // Toronto, New York, Australia, Spain




var bakingRecipies = ["brownies", "cookies", "cakes", "tarts"];
bakingRecipies.pop(3);
console.log(bakingRecipies); // brownies, cookies, cakes



var schedule = [
        ["COMP 1170", "MDIA 1055", "MDIA 1106", "MDIA 1620"],
        ["Fundamentals Frontend Web Tech", "Vector Graphics", "Design", "Basic Systems Operations and Prog"],
        [3.0, 3.0, 3.0, 3.0]
    ];

    console.table(schedule); // COMP 1170, MDIA 1055, MDIA 1106, MDIA 1620, Fundamentals Frontend Web Tech, Vector Graphics, Design, Basic Systems Operations and Prog, 3.0, 3.0, 3.0, 3.0

var sentence = `i am taking ${schedule[0][2]}, ${schedule[1][2]} that is worth ${schedule[2][2]} credits`

    console.log(sentence); // i am taking MDIA 1106, Design that is worth 3 credits