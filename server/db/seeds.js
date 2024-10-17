use dataSource;

db.dropDatabase();

// db.recordtypes.insertMany([
//     {type: "01"},
//     {type: "02"},
//     {type: "03"},
//     {type: "04"},
//     {type: "05"}
// ])

// db.phonenumbers.insertMany([
//     {phoneNo: "0141"},
//     {phoneNo: "0151"},
//     {phoneNo: "0161"},
//     {phoneNo: "01506"},
//     {phoneNo: "0113"},
//     {phoneNo: "0114"},
//     {phoneNo: "0115"},
//     {phoneNo: "0116"},
//     {phoneNo: "0117"},
//     {phoneNo: "01200"},
//     {phoneNo: "01202"},
//     {phoneNo: "01234"},
//     {phoneNo: "01389"},
//     {phoneNo: "01526"},
//     {phoneNo: "01528"},
//     {phoneNo: "01702"},
//     {phoneNo: "01792"},
//     {phoneNo: "01865"},
//     {phoneNo: "01872"},
//     {phoneNo: "01952"},
//     {phoneNo: "020"},

// ])

// db.languages.insertMany([
//     {language: "English"},
//     {language: "Scottish"},
//     {language: "British Sign Language"},
//     {language: "Welsh"},
//     {language: "Gaelic"},
//     {language: "Irish"},
//     {language: "Cornish"},
//     {language: "Manx"},
//     {language: "Angloromani"},
//     {language: "Shelta"}

// ])


// db.cars.insertMany([
//     {car: "Ford Focus ST"},
//     {car: "Ford Fiesta ST"},
//     {car: "Ford Galaxy"},
//     {car: "Ford Ka"},
//     {car: "Vauxhall Corsa"},
//     {car: "Vauxhall Astra"},
//     {car: "Vauxhall Insignia"},
//     {car: "Vauxhall Adam"},
//     {car: "Mercedes-Benz A Class AMG"},
//     {car: "Mercedes-Benz C Class AMG"},
//     {car: "Mercedes-Benz C Class Coupe"},
//     {car: "Mercedes-Benz AMG GT"},
//     {car: "Audi A1"},
//     {car: "Audi A3"},
//     {car: "Audi A4"},
//     {car: "Audi R8"},
//     {car: "Range Rover Sport"},
//     {car: "Range Rover Evoque"},
//     {car: "Range Rover Vogue"},
//     {car: "Land Rover Discovery"},

// ])

// db.vans.insertMany([
//     {van: "Peugeot Boxer"},
//     {van: "Peugeot Expert"},
//     {van: "Peugeot Partner"},
//     {van: "Peugeot J5"},
//     {van: "Vauxhall Corsa"},
//     {van: "Vauxhall Astra"},
//     {van: "Vauxhall Insignia"},
//     {van: "Vauxhall Adam"},
//     {van: "Mercedes-Benz Vaneo"},
//     {van: "Mercedes-Benz Vario"},
//     {van: "Mercedes-Benz Vito"},
//     {van: "Mercedes-Benz Sprinter"},
//     {van: "Volkswagon Caddy"},
//     {van: "Volkswagon Routan"},
//     {van: "Volkswagon LT"},
//     {van: "Volkswagon Crafter"},
//     {van: "Ford Transit"},
//     {van: "Ford Transit Connect"},
//     {van: "Ford Toureno Custom"},
//     {van: "Ford Model T"},

// ])


// db.address.insertMany([
//     {address: "22, Glendale Road, stirling FK11 5TY"},
//     {address: "98 Edinburgh Road, Livingston, EH54 3RE"},
//     {address: "123 Fake Lane, Fakeland, G12 3RE"},
//     {address: "1, Glasgow Road, Edinburgh, EH56 4RE"},
//     {address: "10, Pinetree Avenue, Lenzie, G66 7YU"},
//     {address: "44, Anfield road, Liverpool, L12 7TY"},
//     {address: "Grand Arcade, Lisington lane, London, W1 6TY"},
//     {address: "32, Man Street, Leeds, LS1 2EE"},
//     {address: "150, Inglewood Avenue, Bradford,BD45 3RE"},
//     {address: "64, Busy Street, London, W2 3RT"}
    

// ])

// db.email.insertMany([
//     {email: "@hotmail.com"},
//     {email: "@hotmail.co.uk"},
//     {email: "@live.com"},
//     {email: "@live.co.uk"},
//     {email: "@gmail.com"},
//     {email: "@googlemail.com"},
//     {email: "@helloworld.com"},
//     {email: "@aol.com"},
//     {email: "@outlook.com"},
//     {email: "@example.com"}
    

// ])

// db.lastName.insertMany([
//     {lastName: "Smith"},
//     {lastName: "Baxter"},
//     {lastName: "Anderson"},
//     {lastName: "Martin"},
//     {lastName: "Jenkins"},
//     {lastName: "Barry"},
//     {lastName: "Lescott"},
//     {lastName: "Owen"},
//     {lastName: "James"},
//     {lastName: "Brown"},
//     {lastName: "McGregor"},
//     {lastName: "Murray"},
//     {lastName: "Norman"},
//     {lastName: "Montgomery"},
//     {lastName: "Weir"},
//     {lastName: "Hayes"},

// ])


db.firstName.insertMany([
    {
        firstName: "Raymond",
        lastName: "Smith",
        dob: "1980-03-25",
        email: "raymond.smith@example.com",
        location: "New York"
    },
    {
        firstName: "James",
        lastName: "Johnson",
        dob: "1978-07-15",
        email: "james.johnson@example.com",
        location: "California"
    },
    {
        firstName: "Robert",
        lastName: "Brown",
        dob: "1985-01-30",
        email: "robert.brown@example.com",
        location: "Texas"
    },
    {
        firstName: "John",
        lastName: "Williams",
        dob: "1990-09-10",
        email: "john.williams@example.com",
        location: "Florida"
    },
    {
        firstName: "William",
        lastName: "Jones",
        dob: "1972-12-01",
        email: "william.jones@example.com",
        location: "Illinois"
    },
    {
        firstName: "David",
        lastName: "Miller",
        dob: "1988-04-23",
        email: "david.miller@example.com",
        location: "Ohio"
    },
    {
        firstName: "Richard",
        lastName: "Davis",
        dob: "1983-06-14",
        email: "richard.davis@example.com",
        location: "Arizona"
    },
    {
        firstName: "Joseph",
        lastName: "Garcia",
        dob: "1995-02-27",
        email: "joseph.garcia@example.com",
        location: "Nevada"
    },
    {
        firstName: "Thomas",
        lastName: "Martinez",
        dob: "1981-11-19",
        email: "thomas.martinez@example.com",
        location: "Georgia"
    },
    {
        firstName: "Charles",
        lastName: "Rodriguez",
        dob: "1987-03-08",
        email: "charles.rodriguez@example.com",
        location: "North Carolina"
    },
    {
        firstName: "Daniel",
        lastName: "Wilson",
        dob: "1992-05-17",
        email: "daniel.wilson@example.com",
        location: "New Jersey"
    },
    {
        firstName: "Matthew",
        lastName: "Anderson",
        dob: "1990-08-22",
        email: "matthew.anderson@example.com",
        location: "Virginia"
    },
    {
        firstName: "Anthony",
        lastName: "Thomas",
        dob: "1986-07-01",
        email: "anthony.thomas@example.com",
        location: "Pennsylvania"
    },
    {
        firstName: "Mark",
        lastName: "Taylor",
        dob: "1984-09-12",
        email: "mark.taylor@example.com",
        location: "Michigan"
    },
    {
        firstName: "Donald",
        lastName: "Moore",
        dob: "1982-10-25",
        email: "donald.moore@example.com",
        location: "Colorado"
    },
    {
        firstName: "Steven",
        lastName: "Jackson",
        dob: "1977-01-05",
        email: "steven.jackson@example.com",
        location: "Washington"
    },
    {
        firstName: "Stephen",
        lastName: "White",
        dob: "1993-04-15",
        email: "stephen.white@example.com",
        location: "Oregon"
    },
    {
        firstName: "Paul",
        lastName: "Harris",
        dob: "1991-12-18",
        email: "paul.harris@example.com",
        location: "Kentucky"
    },
    {
        firstName: "Andrew",
        lastName: "Clark",
        dob: "1989-06-05",
        email: "andrew.clark@example.com",
        location: "Minnesota"
    },
    {
        firstName: "Joshua",
        lastName: "Lewis",
        dob: "1996-02-28",
        email: "joshua.lewis@example.com",
        location: "Indiana"
    },
    {
        firstName: "Kenneth",
        lastName: "Walker",
        dob: "1980-05-20",
        email: "kenneth.walker@example.com",
        location: "Missouri"
    },
    {
        firstName: "Dorothy",
        lastName: "Hall",
        dob: "1974-11-10",
        email: "dorothy.hall@example.com",
        location: "Tennessee"
    },
    {
        firstName: "Michelle",
        lastName: "Allen",
        dob: "1985-07-25",
        email: "michelle.allen@example.com",
        location: "Wisconsin"
    },
    {
        firstName: "Donna",
        lastName: "Young",
        dob: "1976-09-30",
        email: "donna.young@example.com",
        location: "Maryland"
    },
    {
        firstName: "Emily",
        lastName: "King",
        dob: "1991-01-12",
        email: "emily.king@example.com",
        location: "South Carolina"
    },
    {
        firstName: "Kimberly",
        lastName: "Scott",
        dob: "1989-03-04",
        email: "kimberly.scott@example.com",
        location: "Alabama"
    },
    {
        firstName: "Ashley",
        lastName: "Green",
        dob: "1992-08-15",
        email: "ashley.green@example.com",
        location: "Oklahoma"
    },
    {
        firstName: "Sandra",
        lastName: "Adams",
        dob: "1979-02-26",
        email: "sandra.adams@example.com",
        location: "Iowa"
    },
    {
        firstName: "Margaret",
        lastName: "Baker",
        dob: "1983-05-19",
        email: "margaret.baker@example.com",
        location: "Kansas"
    },
    {
        firstName: "Betty",
        lastName: "Gonzalez",
        dob: "1984-07-11",
        email: "betty.gonzalez@example.com",
        location: "Louisiana"
    },
    {
        firstName: "Lisa",
        lastName: "Nelson",
        dob: "1986-11-03",
        email: "lisa.nelson@example.com",
        location: "Arkansas"
    },
    {
        firstName: "Karen",
        lastName: "Carter",
        dob: "1990-06-25",
        email: "karen.carter@example.com",
        location: "Mississippi"
    },
    {
        firstName: "Sarah",
        lastName: "Mitchell",
        dob: "1994-08-12",
        email: "sarah.mitchell@example.com",
        location: "Utah"
    },
    {
        firstName: "Jessica",
        lastName: "Perez",
        dob: "1987-04-17",
        email: "jessica.perez@example.com",
        location: "Nebraska"
    },
    {
        firstName: "Susan",
        lastName: "Roberts",
        dob: "1978-09-09",
        email: "susan.roberts@example.com",
        location: "West Virginia"
    },
    {
        firstName: "Barbara",
        lastName: "Turner",
        dob: "1981-05-03",
        email: "barbara.turner@example.com",
        location: "New Mexico"
    },
    {
        firstName: "Elizabeth",
        lastName: "Phillips",
        dob: "1976-02-20",
        email: "elizabeth.phillips@example.com",
        location: "Connecticut"
    },
    {
        firstName: "Linda",
        lastName: "Campbell",
        dob: "1973-12-11",
        email: "linda.campbell@example.com",
        location: "Rhode Island"
    },
    {
        firstName: "Jennifer",
        lastName: "Parker",
        dob: "1990-07-21",
        email: "jennifer.parker@example.com",
        location: "Maine"
    },
    {
        firstName: "Patricia",
        lastName: "Evans",
        dob: "1982-03-29",
        email: "patricia.evans@example.com",
        location: "Montana"
    },
    {
        firstName: "Mary",
        lastName: "Edwards",
        dob: "1978-08-05",
        email: "mary.edwards@example.com",
        location: "North Dakota"
    },
    {
        firstName: "Carol",
        lastName: "Collins",
        dob: "1985-11-15",
        email: "carol.collins@example.com",
        location: "South Dakota"
    },
    {
        firstName: "Oscar",
        lastName: "Lee",
        dob: "1991-04-07",
        email: "oscar.lee@example.com",
        location: "Vermont"
    },
    {
        firstName: "Joanna",
        lastName: "Walker",
        dob: "1987-06-23",
        email: "joanna.walker@example.com",
        location: "New Hampshire"
    },
    {
        firstName: "Bernard",
        lastName: "Hill",
        dob: "1979-10-09",
        email: "bernard.hill@example.com",
        location: "Delaware"
    },
    {
        firstName: "Bobby",
        lastName: "Allen",
        dob: "1992-12-22",
        email: "bobby.allen@example.com",
        location: "Wyoming"
    },
    {
        firstName: "Michael",
        lastName: "Young",
        dob: "1980-03-18",
        email: "michael.young@example.com",
        location: "Idaho"
    },
    {
        firstName: "Christopher",
        lastName: "King",
        dob: "1985-09-13",
        email: "christopher.king@example.com",
        location: "Hawaii"
    },
    {
        firstName: "Nancy",
        lastName: "Wright",
        dob: "1987-01-27",
        email: "nancy.wright@example.com",
        location: "Alaska"
    },
    {
        firstName: "Martin",
        lastName: "Lopez",
        dob: "1975-11-17",
        email: "martin.lopez@example.com",
        location: "Washington, D.C."
    }
])

       
