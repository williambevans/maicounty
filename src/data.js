const texasCounties = `
[
    {
        "name": "Anderson County",
        "location": "Palestine, TX",
        "courthouse_address": "500 N Church St, Palestine, TX 75801",
        "website": "http://www.co.anderson.tx.us/",
        "appraisal_district_office_address": "801 North Perry St, Palestine, TX 75801",
        "registration_office_address": "500 N Church St, Palestine, TX 75801",
        "local_municipality": "City of Palestine",
        "elected_officials": {
            "County Judge": "Robert Johnston",
            "Sheriff": "Greg Taylor",
            "District Clerk": "Deborah Oglesbee",
            "County Clerk": "Mark Staples",
            "County Treasurer": "Denise Munson"
        },
        "commissioner_court_minutes": "http://www.co.anderson.tx.us/page/anderson.Commissioners.Court"
    },
    {
        "name": "Andrews County",
        "location": "Andrews, TX",
        "courthouse_address": "201 N Main St, Andrews, TX 79714",
        "website": "http://www.co.andrews.tx.us/",
        "appraisal_district_office_address": "202 NW 2nd St, Andrews, TX 79714",
        "registration_office_address": "201 N Main St, Andrews, TX 79714",
        "local_municipality": "City of Andrews",
        "elected_officials": {
            "County Judge": "Richard H. Dolgener",
            "Sheriff": "Rusty Stewart",
            "District Clerk": "Kimberly Walker",
            "County Clerk": "Robbie Beauchamp",
            "County Treasurer": "Becky Spinks"
        },
        "commissioner_court_minutes": "http://www.co.andrews.tx.us/page/andrews.Commissioners.Court"
    },
    {
        "name": "Angelina County",
        "location": "Lufkin, TX",
        "courthouse_address": "215 E Lufkin Ave, Lufkin, TX 75901",
        "website": "http://www.angelinacounty.net/",
        "appraisal_district_office_address": "606 S First St, Lufkin, TX 75901",
        "registration_office_address": "215 E Lufkin Ave, Lufkin, TX 75901",
        "local_municipality": "City of Lufkin",
        "elected_officials": {
            "County Judge": "Don Lymbery",
            "Sheriff": "Greg Sanches",
            "District Clerk": "Patricia Jones",
            "County Clerk": "Amy Fincher",
            "County Treasurer": "Deborah Mathews"
        },
        "commissioner_court_minutes": "http://www.angelinacounty.net/page/angelina.Commissioners.Court"
    },
    {
        "name": "Aransas County",
        "location": "Rockport, TX",
        "courthouse_address": "301 N Live Oak St, Rockport, TX 78382",
        "website": "http://www.aransascounty.org/",
        "appraisal_district_office_address": "501 S Church St, Rockport, TX 78382",
        "registration_office_address": "301 N Live Oak St, Rockport, TX 78382",
        "local_municipality": "City of Rockport",
        "elected_officials": {
            "County Judge": "C.H. 'Burt' Mills Jr.",
            "Sheriff": "Bill Mills",
            "District Clerk": "Pam Heard",
            "County Clerk": "Valerie K. Amason",
            "County Treasurer": "Debbie Harper"
        },
        "commissioner_court_minutes": "http://www.aransascounty.org/page/aransas.Commissioners.Court"
    },
    {
        "name": "Archer County",
        "location": "Archer City, TX",
        "courthouse_address": "100 S Center St, Archer City, TX 76351",
        "website": "http://www.co.archer.tx.us/",
        "appraisal_district_office_address": "112 E Walnut St, Archer City, TX 76351",
        "registration_office_address": "100 S Center St, Archer City, TX 76351",
        "local_municipality": "City of Archer City",
        "elected_officials": {
            "County Judge": "Randall Jackson",
            "Sheriff": "Staci Beesinger",
            "District Clerk": "Leslie Graham",
            "County Clerk": "Karen Prim",
            "County Treasurer": "Sherri Gamblin"
        },
        "commissioner_court_minutes": "http://www.co.archer.tx.us/page/archer.Commissioners.Court"
    },
    {
        "name": "Armstrong County",
        "location": "Claude, TX",
        "courthouse_address": "100 Trice St, Claude, TX 79019",
        "website": "http://www.co.armstrong.tx.us/",
        "appraisal_district_office_address": "100 Trice St, Claude, TX 79019",
        "registration_office_address": "100 Trice St, Claude, TX 79019",
        "local_municipality": "City of Claude",
        "elected_officials": {
            "County Judge": "Hugh Reed",
            "Sheriff": "Melissa Anderson",
            "District Clerk": "Sherry Edwards",
            "County Clerk": "Tina Craig",
            "County Treasurer": "Janelle Shepherd"
        },
        "commissioner_court_minutes": "http://www.co.armstrong.tx.us/page/armstrong.Commissioners.Court"
    },
    {
        "name": "Atascosa County",
        "location": "Jourdanton, TX",
        "courthouse_address": "1 Courthouse Circle Dr, Jourdanton, TX 78026",
        "website": "http://www.atascosacounty.texas.gov/",
        "appraisal_district_office_address": "624 N Main St, Pleasanton, TX 78064",
        "registration_office_address": "1 Courthouse Circle Dr, Jourdanton, TX 78026",
        "local_municipality": "City of Jourdanton",
        "elected_officials": {
            "County Judge": "Robert Hurley",
            "Sheriff": "David Soward",
            "District Clerk": "Nicole Vielma",
            "County Clerk": "Pauline Resendez",
            "County Treasurer": "Laura Pawelek"
        },
        "commissioner_court_minutes": "http://www.atascosacounty.texas.gov/page/atascosa.Commissioners.Court"
    },
    {
        "name": "Austin County",
        "location": "Bellville, TX",
        "courthouse_address": "1 E Main St, Bellville, TX 77418",
        "website": "http://www.austincounty.com/",
        "appraisal_district_office_address": "906 E Amelia St, Bellville, TX 77418",
        "registration_office_address": "1 E Main St, Bellville, TX 77418",
        "local_municipality": "City of Bellville",
        "elected_officials": {
            "County Judge": "Tim Lapham",
            "Sheriff": "Jack Brandes",
            "District Clerk": "Rhonda Spiess",
            "County Clerk": "Carrie Gregor",
            "County Treasurer": "Katherine Henson"
        },
        "commissioner_court_minutes": "http://www.austincounty.com/page/austin.Commissioners.Court"
    },
    {
        "name": "Bailey County",
        "location": "Muleshoe, TX",
        "courthouse_address": "300 S 1st St, Muleshoe, TX 79347",
        "website": "http://www.co.bailey.tx.us/",
        "appraisal_district_office_address": "300 S 1st St, Muleshoe, TX 79347",
        "registration_office_address": "300 S 1st St, Muleshoe, TX 79347",
        "local_municipality": "City of Muleshoe",
        "elected_officials": {
            "County Judge": "Sherri Harrison",
            "Sheriff": "Richard Wills",
            "District Clerk": "Rebecca Tubbs",
            "County Clerk": "Paula Butler",
            "County Treasurer": "Leigh Ann Powell"
        },
        "commissioner_court_minutes": "http://www.co.bailey.tx.us/page/bailey.Commissioners.Court"
    }
]
`;
export default texasCounties;
