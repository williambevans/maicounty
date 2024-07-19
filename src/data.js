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
    },
    {
        "name": "Bandera County",
        "location": "Bandera, TX",
        "courthouse_address": "500 Main St, Bandera, TX 78003",
        "website": "http://www.banderacounty.org/",
        "appraisal_district_office_address": "1206 Main St, Bandera, TX 78003",
        "registration_office_address": "500 Main St, Bandera, TX 78003",
        "local_municipality": "City of Bandera",
        "elected_officials": {
            "County Judge": "Richard Evans",
            "Sheriff": "Dan Butts",
            "District Clerk": "Jeannette Watson",
            "County Clerk": "Donna Klaeger",
            "County Treasurer": "Melinda Bradley"
        },
        "commissioner_court_minutes": "http://www.banderacounty.org/page/bandera.Commissioners.Court"
    },
    {
        "name": "Bastrop County",
        "location": "Bastrop, TX",
        "courthouse_address": "804 Pecan St, Bastrop, TX 78602",
        "website": "http://www.co.bastrop.tx.us/",
        "appraisal_district_office_address": "210 Jackson St, Bastrop, TX 78602",
        "registration_office_address": "804 Pecan St, Bastrop, TX 78602",
        "local_municipality": "City of Bastrop",
        "elected_officials": {
            "County Judge": "Paul Pape",
            "Sheriff": "Maurice Cook",
            "District Clerk": "Debbie Herman",
            "County Clerk": "Rose Pietsch",
            "County Treasurer": "Connie Rodriguez"
        },
        "commissioner_court_minutes": "http://www.co.bastrop.tx.us/page/bastrop.Commissioners.Court"
    },
    {
        "name": "Baylor County",
        "location": "Seymour, TX",
        "courthouse_address": "101 S Washington St, Seymour, TX 76380",
        "website": "http://www.co.baylor.tx.us/",
        "appraisal_district_office_address": "101 S Washington St, Seymour, TX 76380",
        "registration_office_address": "101 S Washington St, Seymour, TX 76380",
        "local_municipality": "City of Seymour",
        "elected_officials": {
            "County Judge": "Sherri C. Lemons",
            "Sheriff": "Benny L. Tidwell",
            "District Clerk": "Rebecca A. Parker",
            "County Clerk": "Ginger T. Johnson",
            "County Treasurer": "Angie Lee Turner"
        },
        "commissioner_court_minutes": "http://www.co.baylor.tx.us/page/baylor.Commissioners.Court"
    },
    {
        "name": "Bee County",
        "location": "Beeville, TX",
        "courthouse_address": "105 W Corpus Christi St, Beeville, TX 78102",
        "website": "http://www.co.bee.tx.us/",
        "appraisal_district_office_address": "1600 S Washington St, Beeville, TX 78102",
        "registration_office_address": "105 W Corpus Christi St, Beeville, TX 78102",
        "local_municipality": "City of Beeville",
        "elected_officials": {
            "County Judge": "Stephanie Silvas",
            "Sheriff": "Aldelino Contreras",
            "District Clerk": "Joan K. Elliot",
            "County Clerk": "Debbie Trujillo",
            "County Treasurer": "Debbie Barta"
        },
        "commissioner_court_minutes": "http://www.co.bee.tx.us/page/bee.Commissioners.Court"
    },
    {
        "name": "Bell County",
        "location": "Belton, TX",
        "courthouse_address": "101 E Central Ave, Belton, TX 76513",
        "website": "http://www.bellcountytx.com/",
        "appraisal_district_office_address": "411 E Central Ave, Belton, TX 76513",
        "registration_office_address": "101 E Central Ave, Belton, TX 76513",
        "local_municipality": "City of Belton",
        "elected_officials": {
            "County Judge": "David Blackburn",
            "Sheriff": "Eddie Lange",
            "District Clerk": "Janet Parker",
            "County Clerk": "Shelley Coston",
            "County Treasurer": "David A. Cole"
        },
        "commissioner_court_minutes": "http://www.bellcountytx.com/page/bell.Commissioners.Court"
    },
    {
        "name": "Bexar County",
        "location": "San Antonio, TX",
        "courthouse_address": "100 Dolorosa St, San Antonio, TX 78205",
        "website": "http://www.bexar.org/",
        "appraisal_district_office_address": "411 N Frio St, San Antonio, TX 78207",
        "registration_office_address": "100 Dolorosa St, San Antonio, TX 78205",
        "local_municipality": "City of San Antonio",
        "elected_officials": {
            "County Judge": "Nelson Wolff",
            "Sheriff": "Javier Salazar",
            "District Clerk": "Mary Angie Garcia",
            "County Clerk": "Lucy Adame-Clark",
            "County Treasurer": "Albert Uresti"
        },
        "commissioner_court_minutes": "http://www.bexar.org/page/bexar.Commissioners.Court"
    },
    {
        "name": "Blanco County",
        "location": "Johnson City, TX",
        "courthouse_address": "101 E Pecan Dr, Johnson City, TX 78636",
        "website": "http://www.co.blanco.tx.us/",
        "appraisal_district_office_address": "101 E Pecan Dr, Johnson City, TX 78636",
        "registration_office_address": "101 E Pecan Dr, Johnson City, TX 78636",
        "local_municipality": "City of Johnson City",
        "elected_officials": {
            "County Judge": "Brett Bray",
            "Sheriff": "Don Jackson",
            "District Clerk": "Krystal Chupik",
            "County Clerk": "Laura Walla",
            "County Treasurer": "Jennifer Granberg"
        },
        "commissioner_court_minutes": "http://www.co.blanco.tx.us/page/blanco.Commissioners.Court"
    },
    {
        "name": "Borden County",
        "location": "Gail, TX",
        "courthouse_address": "117 E Wassom St, Gail, TX 79738",
        "website": "http://www.co.borden.tx.us/",
        "appraisal_district_office_address": "117 E Wassom St, Gail, TX 79738",
        "registration_office_address": "117 E Wassom St, Gail, TX 79738",
        "local_municipality": "City of Gail",
        "elected_officials": {
            "County Judge": "Ross Sharp",
            "Sheriff": "Benny Nix",
            "District Clerk": "Patricia Donham",
            "County Clerk": "Patricia Donham",
            "County Treasurer": "Amber Giles"
        },
        "commissioner_court_minutes": "http://www.co.borden.tx.us/page/borden.Commissioners.Court"
    },
    {
        "name": "Borden County",
        "location": "Gail, TX",
        "courthouse_address": "117 E Wassom St, Gail, TX 79738",
        "website": "http://www.co.borden.tx.us/",
        "appraisal_district_office_address": "117 E Wassom St, Gail, TX 79738",
        "registration_office_address": "117 E Wassom St, Gail, TX 79738",
        "local_municipality": "City of Gail",
        "elected_officials": {
            "County Judge": "Ross Sharp",
            "Sheriff": "Benny Nix",
            "District Clerk": "Patricia Donham",
            "County Clerk": "Patricia Donham",
            "County Treasurer": "Amber Giles"
        },
        "commissioner_court_minutes": "http://www.co.borden.tx.us/page/borden.Commissioners.Court"
    },
    {
        "name": "Bosque County",
        "location": "Meridian, TX",
        "courthouse_address": "110 S Main St, Meridian, TX 76665",
        "website": "http://www.bosquecounty.us/",
        "appraisal_district_office_address": "9293 TX-6, Meridian, TX 76665",
        "registration_office_address": "110 S Main St, Meridian, TX 76665",
        "local_municipality": "City of Meridian",
        "elected_officials": {
            "County Judge": "Cindy Vanlandingham",
            "Sheriff": "Trace Hendricks",
            "District Clerk": "Clara M. Dunlap",
            "County Clerk": "Jill McGuire",
            "County Treasurer": "Cindy Medford"
        },
        "commissioner_court_minutes": "http://www.bosquecounty.us/page/bosque.Commissioners.Court"
    },
    {
        "name": "Bowie County",
        "location": "New Boston, TX",
        "courthouse_address": "710 James Bowie Dr, New Boston, TX 75570",
        "website": "http://www.co.bowie.tx.us/",
        "appraisal_district_office_address": "710 James Bowie Dr, New Boston, TX 75570",
        "registration_office_address": "710 James Bowie Dr, New Boston, TX 75570",
        "local_municipality": "City of New Boston",
        "elected_officials": {
            "County Judge": "James Carlow",
            "Sheriff": "James Prince",
            "District Clerk": "Donna Burns",
            "County Clerk": "Dina Downs",
            "County Treasurer": "Linda Clarke"
        },
        "commissioner_court_minutes": "http://www.co.bowie.tx.us/page/bowie.Commissioners.Court"
    },
    {
        "name": "Brazoria County",
        "location": "Angleton, TX",
        "courthouse_address": "111 E Locust St, Angleton, TX 77515",
        "website": "http://www.brazoria-county.com/",
        "appraisal_district_office_address": "500 N Chenango St, Angleton, TX 77515",
        "registration_office_address": "111 E Locust St, Angleton, TX 77515",
        "local_municipality": "City of Angleton",
        "elected_officials": {
            "County Judge": "Matt Sebesta",
            "Sheriff": "Charles S. Wagner",
            "District Clerk": "Rhonda Barchak",
            "County Clerk": "Joyce Hudman",
            "County Treasurer": "Joan Jenkins"
        },
        "commissioner_court_minutes": "http://www.brazoria-county.com/page/brazoria.Commissioners.Court"
    },
    {
        "name": "Brazos County",
        "location": "Bryan, TX",
        "courthouse_address": "300 E 26th St, Bryan, TX 77803",
        "website": "http://www.brazoscountytx.gov/",
        "appraisal_district_office_address": "1673 Briarcrest Dr, Bryan, TX 77802",
        "registration_office_address": "300 E 26th St, Bryan, TX 77803",
        "local_municipality": "City of Bryan",
        "elected_officials": {
            "County Judge": "Duane Peters",
            "Sheriff": "Chris Kirk",
            "District Clerk": "Gabriel Garcia",
            "County Clerk": "Karen McQueen",
            "County Treasurer": "Laura Davis"
        },
        "commissioner_court_minutes": "http://www.brazoscountytx.gov/page/brazos.Commissioners.Court"
    },
    {
        "name": "Brewster County",
        "location": "Alpine, TX",
        "courthouse_address": "201 W Avenue E, Alpine, TX 79830",
        "website": "http://www.brewstercountytx.com/",
        "appraisal_district_office_address": "100 W Avenue E, Alpine, TX 79830",
        "registration_office_address": "201 W Avenue E, Alpine, TX 79830",
        "local_municipality": "City of Alpine",
        "elected_officials": {
            "County Judge": "Eleazar Cano",
            "Sheriff": "Ronny Dodson",
            "District Clerk": "Jo Carter",
            "County Clerk": "Bebe Kaufman",
            "County Treasurer": "Julie Morton"
        },
        "commissioner_court_minutes": "http://www.brewstercountytx.com/page/brewster.Commissioners.Court"
    },
    {
        "name": "Briscoe County",
        "location": "Silverton, TX",
        "courthouse_address": "415 Main St, Silverton, TX 79257",
        "website": "http://www.co.briscoe.tx.us/",
        "appraisal_district_office_address": "415 Main St, Silverton, TX 79257",
        "registration_office_address": "415 Main St, Silverton, TX 79257",
        "local_municipality": "City of Silverton",
        "elected_officials": {
            "County Judge": "Gary W. Henderson",
            "Sheriff": "David Medlin",
            "District Clerk": "Julie Ann Smith",
            "County Clerk": "Jennifer Davis",
            "County Treasurer": "Rhonda Brannon"
        },
        "commissioner_court_minutes": "http://www.co.briscoe.tx.us/page/briscoe.Commissioners.Court"
    },
    {
        "name": "Brooks County",
        "location": "Falfurrias, TX",
        "courthouse_address": "100 E Miller St, Falfurrias, TX 78355",
        "website": "http://www.co.brooks.tx.us/",
        "appraisal_district_office_address": "100 E Miller St, Falfurrias, TX 78355",
        "registration_office_address": "100 E Miller St, Falfurrias, TX 78355",
        "local_municipality": "City of Falfurrias",
        "elected_officials": {
            "County Judge": "Eric Ramos",
            "Sheriff": "Benny Martinez",
            "District Clerk": "Christina Trevino",
            "County Clerk": "Hortencia Lopez",
            "County Treasurer": "Carmen Escamilla"
        },
        "commissioner_court_minutes": "http://www.co.brooks.tx.us/page/brooks.Commissioners.Court"
    },
    {
        "name": "Brown County",
        "location": "Brownwood, TX",
        "courthouse_address": "200 S Broadway St, Brownwood, TX 76801",
        "website": "http://www.co.brown.tx.us/",
        "appraisal_district_office_address": "403 Fisk Ave, Brownwood, TX 76801",
        "registration_office_address": "200 S Broadway St, Brownwood, TX 76801",
        "local_municipality": "City of Brownwood",
        "elected_officials": {
            "County Judge": "E. Ray West",
            "Sheriff": "Vance Hill",
            "District Clerk": "Cheryl Jones",
            "County Clerk": "Sharon Ferguson",
            "County Treasurer": "Judy Schaefer"
        },
        "commissioner_court_minutes": "http://www.co.brown.tx.us/page/brown.Commissioners.Court"
    },
    {
        "name": "Burleson County",
        "location": "Caldwell, TX",
        "courthouse_address": "100 W Buck St, Caldwell, TX 77836",
        "website": "http://www.co.burleson.tx.us/",
        "appraisal_district_office_address": "100 W Buck St, Caldwell, TX 77836",
        "registration_office_address": "100 W Buck St, Caldwell, TX 77836",
        "local_municipality": "City of Caldwell",
        "elected_officials": {
            "County Judge": "Mike Sutherland",
            "Sheriff": "Thomas Norsworthy",
            "District Clerk": "Janice Warzon",
            "County Clerk": "Joanna T. Halfmann",
            "County Treasurer": "Stephanie Hendrick"
        },
        "commissioner_court_minutes": "http://www.co.burleson.tx.us/page/burleson.Commissioners.Court"
    },
    {
        "name": "Burnet County",
        "location": "Burnet, TX",
        "courthouse_address": "220 S Pierce St, Burnet, TX 78611",
        "website": "http://www.burnetcountytexas.org/",
        "appraisal_district_office_address": "223 S Pierce St, Burnet, TX 78611",
        "registration_office_address": "220 S Pierce St, Burnet, TX 78611",
        "local_municipality": "City of Burnet",
        "elected_officials": {
            "County Judge": "James Oakley",
            "Sheriff": "Calvin Boyd",
            "District Clerk": "Janet Parker",
            "County Clerk": "Sharon Schwartz",
            "County Treasurer": "Wanda Thompson"
        },
        "commissioner_court_minutes": "http://www.burnetcountytexas.org/page/burnet.Commissioners.Court"
    },
    {
        "name": "Caldwell County",
        "location": "Lockhart, TX",
        "courthouse_address": "110 S Main St, Lockhart, TX 78644",
        "website": "http://www.co.caldwell.tx.us/",
        "appraisal_district_office_address": "610 San Jacinto St, Lockhart, TX 78644",
        "registration_office_address": "110 S Main St, Lockhart, TX 78644",
        "local_municipality": "City of Lockhart",
        "elected_officials": {
            "County Judge": "Hoppy Haden",
            "Sheriff": "Daniel Law",
            "District Clerk": "Tina Morgan",
            "County Clerk": "Teresa Rodriguez",
            "County Treasurer": "Barbara Gonzales"
        },
        "commissioner_court_minutes": "http://www.co.caldwell.tx.us/page/caldwell.Commissioners.Court"
    },
    {
        "name": "Calhoun County",
        "location": "Port Lavaca, TX",
        "courthouse_address": "211 S Ann St, Port Lavaca, TX 77979",
        "website": "http://www.calhouncotx.org/",
        "appraisal_district_office_address": "231 S Commerce St, Port Lavaca, TX 77979",
        "registration_office_address": "211 S Ann St, Port Lavaca, TX 77979",
        "local_municipality": "City of Port Lavaca",
        "elected_officials": {
            "County Judge": "Richard Meyer",
            "Sheriff": "George Aleman",
            "District Clerk": "Diane Tijerina",
            "County Clerk": "Ester Barr",
            "County Treasurer": "Monica Giron"
        },
        "commissioner_court_minutes": "http://www.calhouncotx.org/page/calhoun.Commissioners.Court"
    },
    {
        "name": "Callahan County",
        "location": "Baird, TX",
        "courthouse_address": "100 W 4th St, Baird, TX 79504",
        "website": "http://www.co.callahan.tx.us/",
        "appraisal_district_office_address": "132 W 4th St, Baird, TX 79504",
        "registration_office_address": "100 W 4th St, Baird, TX 79504",
        "local_municipality": "City of Baird",
        "elected_officials": {
            "County Judge": "John Langston",
            "Sheriff": "Terry Joy",
            "District Clerk": "Linda Clark",
            "County Clerk": "Lisa Estes",
            "County Treasurer": "Wendy Maloney"
        },
        "commissioner_court_minutes": "http://www.co.callahan.tx.us/page/callahan.Commissioners.Court"
    },
    {
        "name": "Cameron County",
        "location": "Brownsville, TX",
        "courthouse_address": "974 E Harrison St, Brownsville, TX 78520",
        "website": "http://www.co.cameron.tx.us/",
        "appraisal_district_office_address": "835 E Levee St, Brownsville, TX 78520",
        "registration_office_address": "974 E Harrison St, Brownsville, TX 78520",
        "local_municipality": "City of Brownsville",
        "elected_officials": {
            "County Judge": "Eddie Treviño Jr.",
            "Sheriff": "Omar Lucio",
            "District Clerk": "Aurora De La Garza",
            "County Clerk": "Sylvia Garza-Perez",
            "County Treasurer": "David Betancourt"
        },
        "commissioner_court_minutes": "http://www.co.cameron.tx.us/page/cameron.Commissioners.Court"
    },
    {
        "name": "Camp County",
        "location": "Pittsburg, TX",
        "courthouse_address": "126 Church St, Pittsburg, TX 75686",
        "website": "http://www.co.camp.tx.us/",
        "appraisal_district_office_address": "126 Church St, Pittsburg, TX 75686",
        "registration_office_address": "126 Church St, Pittsburg, TX 75686",
        "local_municipality": "City of Pittsburg",
        "elected_officials": {
            "County Judge": "A.J. Mason",
            "Sheriff": "Alan McCandless",
            "District Clerk": "Beth Camp",
            "County Clerk": "Vanessa Barrow",
            "County Treasurer": "Judy Sparks"
        },
        "commissioner_court_minutes": "http://www.co.camp.tx.us/page/camp.Commissioners.Court"
    },
    {
        "name": "Carson County",
        "location": "Panhandle, TX",
        "courthouse_address": "501 Main St, Panhandle, TX 79068",
        "website": "http://www.co.carson.tx.us/",
        "appraisal_district_office_address": "501 Main St, Panhandle, TX 79068",
        "registration_office_address": "501 Main St, Panhandle, TX 79068",
        "local_municipality": "City of Panhandle",
        "elected_officials": {
            "County Judge": "Dan Looten",
            "Sheriff": "Tam Terry",
            "District Clerk": "Julie Couch",
            "County Clerk": "Jane Amason",
            "County Treasurer": "Tonya Thompson"
        },
        "commissioner_court_minutes": "http://www.co.carson.tx.us/page/carson.Commissioners.Court"
    },
    {
        "name": "Cass County",
        "location": "Linden, TX",
        "courthouse_address": "604 TX-8, Linden, TX 75563",
        "website": "http://www.co.cass.tx.us/",
        "appraisal_district_office_address": "604 TX-8, Linden, TX 75563",
        "registration_office_address": "604 TX-8, Linden, TX 75563",
        "local_municipality": "City of Linden",
        "elected_officials": {
            "County Judge": "Becky Wilbanks",
            "Sheriff": "Larry Rowe",
            "District Clerk": "Vanessa Walden",
            "County Clerk": "Dixie Criddle",
            "County Treasurer": "Donna M. Abrams"
        },
        "commissioner_court_minutes": "http://www.co.cass.tx.us/page/cass.Commissioners.Court"
    },
    {
        "name": "Castro County",
        "location": "Dimmitt, TX",
        "courthouse_address": "100 E Bedford St, Dimmitt, TX 79027",
        "website": "http://www.co.castro.tx.us/",
        "appraisal_district_office_address": "100 E Bedford St, Dimmitt, TX 79027",
        "registration_office_address": "100 E Bedford St, Dimmitt, TX 79027",
        "local_municipality": "City of Dimmitt",
        "elected_officials": {
            "County Judge": "David L. Allen",
            "Sheriff": "Salvador Rivera",
            "District Clerk": "Elvia Villalva",
            "County Clerk": "Gloria A. Estrada",
            "County Treasurer": "Cecilia G. Borjas"
        },
        "commissioner_court_minutes": "http://www.co.castro.tx.us/page/castro.Commissioners.Court"
    },
    {
        "name": "Chambers County",
        "location": "Anahuac, TX",
        "courthouse_address": "404 Washington Ave, Anahuac, TX 77514",
        "website": "http://www.co.chambers.tx.us/",
        "appraisal_district_office_address": "1222 S Ross Sterling Ave, Anahuac, TX 77514",
        "registration_office_address": "404 Washington Ave, Anahuac, TX 77514",
        "local_municipality": "City of Anahuac",
        "elected_officials": {
            "County Judge": "Jimmy Sylvia",
            "Sheriff": "Brian C. Hawthorne",
            "District Clerk": "Patti Henry",
            "County Clerk": "Heather Hawthorne",
            "County Treasurer": "Eddie Price"
        },
        "commissioner_court_minutes": "http://www.co.chambers.tx.us/page/chambers.Commissioners.Court"
    },
    {
        "name": "Cherokee County",
        "location": "Rusk, TX",
        "courthouse_address": "135 S Main St, Rusk, TX 75785",
        "website": "http://www.co.cherokee.tx.us/",
        "appraisal_district_office_address": "1850 E Rusk St, Jacksonville, TX 75766",
        "registration_office_address": "135 S Main St, Rusk, TX 75785",
        "local_municipality": "City of Rusk",
        "elected_officials": {
            "County Judge": "Chris Davis",
            "Sheriff": "James Campbell",
            "District Clerk": "Vickie Melvin",
            "County Clerk": "Laverne Lusk",
            "County Treasurer": "Patricia Featherston"
        },
        "commissioner_court_minutes": "http://www.co.cherokee.tx.us/page/cherokee.Commissioners.Court"
    },
    {
        "name": "Childress County",
        "location": "Childress, TX",
        "courthouse_address": "100 Ave E NW, Childress, TX 79201",
        "website": "http://www.co.childress.tx.us/",
        "appraisal_district_office_address": "100 Ave E NW, Childress, TX 79201",
        "registration_office_address": "100 Ave E NW, Childress, TX 79201",
        "local_municipality": "City of Childress",
        "elected_officials": {
            "County Judge": "Kim Jones",
            "Sheriff": "Mike Pigg",
            "District Clerk": "Elizabeth Vargas",
            "County Clerk": "Jennifer Lind",
            "County Treasurer": "Rhonda Cook"
        },
        "commissioner_court_minutes": "http://www.co.childress.tx.us/page/childress.Commissioners.Court"
    },
    {
        "name": "Clay County",
        "location": "Henrietta, TX",
        "courthouse_address": "214 N Main St, Henrietta, TX 76365",
        "website": "http://www.co.clay.tx.us/",
        "appraisal_district_office_address": "214 N Main St, Henrietta, TX 76365",
        "registration_office_address": "214 N Main St, Henrietta, TX 76365",
        "local_municipality": "City of Henrietta",
        "elected_officials": {
            "County Judge": "Mike Campbell",
            "Sheriff": "Kenny Lemons",
            "District Clerk": "Misty Thompson",
            "County Clerk": "Sally Heston",
            "County Treasurer": "Tina Swanson"
        },
        "commissioner_court_minutes": "http://www.co.clay.tx.us/page/clay.Commissioners.Court"
    },
    {
        "name": "Cochran County",
        "location": "Morton, TX",
        "courthouse_address": "100 N Main St, Morton, TX 79346",
        "website": "http://www.co.cochran.tx.us/",
        "appraisal_district_office_address": "100 N Main St, Morton, TX 79346",
        "registration_office_address": "100 N Main St, Morton, TX 79346",
        "local_municipality": "City of Morton",
        "elected_officials": {
            "County Judge": "Patrice McKenzie",
            "Sheriff": "Jorge DeLaTorre",
            "District Clerk": "Mary Chavez",
            "County Clerk": "Julie Mays",
            "County Treasurer": "Nancy Wheaton"
        },
        "commissioner_court_minutes": "http://www.co.cochran.tx.us/page/cochran.Commissioners.Court"
    },
    {
        "name": "Coke County",
        "location": "Robert Lee, TX",
        "courthouse_address": "13 E 7th St, Robert Lee, TX 76945",
        "website": "http://www.co.coke.tx.us/",
        "appraisal_district_office_address": "13 E 7th St, Robert Lee, TX 76945",
        "registration_office_address": "13 E 7th St, Robert Lee, TX 76945",
        "local_municipality": "City of Robert Lee",
        "elected_officials": {
            "County Judge": "Kirk Kellam",
            "Sheriff": "Wayne McCutchen",
            "District Clerk": "Evelyn Kramer",
            "County Clerk": "Mary Klein",
            "County Treasurer": "Sharon Henkhaus"
        },
        "commissioner_court_minutes": "http://www.co.coke.tx.us/page/coke.Commissioners.Court"
    },
    {
        "name": "Coleman County",
        "location": "Coleman, TX",
        "courthouse_address": "100 W Liveoak St, Coleman, TX 76834",
        "website": "http://www.co.coleman.tx.us/",
        "appraisal_district_office_address": "100 W Liveoak St, Coleman, TX 76834",
        "registration_office_address": "100 W Liveoak St, Coleman, TX 76834",
        "local_municipality": "City of Coleman",
        "elected_officials": {
            "County Judge": "Billy Bledsoe",
            "Sheriff": "Wayne McCutchen",
            "District Clerk": "Lynda Thomas",
            "County Clerk": "Karen Cook",
            "County Treasurer": "Connie Hays"
        },
        "commissioner_court_minutes": "http://www.co.coleman.tx.us/page/coleman.Commissioners.Court"
    },
    {
        "name": "Collin County",
        "location": "McKinney, TX",
        "courthouse_address": "2100 Bloomdale Rd, McKinney, TX 75071",
        "website": "http://www.collincountytx.gov/",
        "appraisal_district_office_address": "250 Eldorado Pkwy, McKinney, TX 75069",
        "registration_office_address": "2100 Bloomdale Rd, McKinney, TX 75071",
        "local_municipality": "City of McKinney",
        "elected_officials": {
            "County Judge": "Chris Hill",
            "Sheriff": "Jim Skinner",
            "District Clerk": "Andrea Stroh Thompson",
            "County Clerk": "Stacey Kemp",
            "County Treasurer": "Chris Hill"
        },
        "commissioner_court_minutes": "http://www.collincountytx.gov/page/collin.Commissioners.Court"
    },
    {
        "name": "Collingsworth County",
        "location": "Wellington, TX",
        "courthouse_address": "800 W Ave, Wellington, TX 79095",
        "website": "http://www.co.collingsworth.tx.us/",
        "appraisal_district_office_address": "800 W Ave, Wellington, TX 79095",
        "registration_office_address": "800 W Ave, Wellington, TX 79095",
        "local_municipality": "City of Wellington",
        "elected_officials": {
            "County Judge": "Norman Pustejovsky",
            "Sheriff": "Scott Brewster",
            "District Clerk": "Norma Padilla",
            "County Clerk": "Kari King",
            "County Treasurer": "Angela Henry"
        },
        "commissioner_court_minutes": "http://www.co.collingsworth.tx.us/page/collingsworth.Commissioners.Court"
    },
    {
        "name": "Colorado County",
        "location": "Columbus, TX",
        "courthouse_address": "400 Spring St, Columbus, TX 78934",
        "website": "http://www.co.colorado.tx.us/",
        "appraisal_district_office_address": "106 Cardinal Ln, Columbus, TX 78934",
        "registration_office_address": "400 Spring St, Columbus, TX 78934",
        "local_municipality": "City of Columbus",
        "elected_officials": {
            "County Judge": "Ty Prause",
            "Sheriff": "R.H. 'Curly' Wied",
            "District Clerk": "Patricia Sandel",
            "County Clerk": "Mary Scheller",
            "County Treasurer": "Stephanie Eckermann"
        },
        "commissioner_court_minutes": "http://www.co.colorado.tx.us/page/colorado.Commissioners.Court"
    },
    {
        "name": "Comal County",
        "location": "New Braunfels, TX",
        "courthouse_address": "100 Main Plaza, New Braunfels, TX 78130",
        "website": "http://www.co.comal.tx.us/",
        "appraisal_district_office_address": "100 Main Plaza, New Braunfels, TX 78130",
        "registration_office_address": "100 Main Plaza, New Braunfels, TX 78130",
        "local_municipality": "City of New Braunfels",
        "elected_officials": {
            "County Judge": "Sherman Krause",
            "Sheriff": "Mark Reynolds",
            "District Clerk": "Heidi Search",
            "County Clerk": "Bobbie Koepp",
            "County Treasurer": "Tommy Calvert"
        },
        "commissioner_court_minutes": "http://www.co.comal.tx.us/page/comal.Commissioners.Court"
    },
    {
        "name": "Comanche County",
        "location": "Comanche, TX",
        "courthouse_address": "101 W Central Ave, Comanche, TX 76442",
        "website": "http://www.co.comanche.tx.us/",
        "appraisal_district_office_address": "101 W Central Ave, Comanche, TX 76442",
        "registration_office_address": "101 W Central Ave, Comanche, TX 76442",
        "local_municipality": "City of Comanche",
        "elected_officials": {
            "County Judge": "Stephanie Davis",
            "Sheriff": "Chris Pound",
            "District Clerk": "Eva Childers",
            "County Clerk": "Jennifer Watson",
            "County Treasurer": "Dana Pitts"
        },
        "commissioner_court_minutes": "http://www.co.comanche.tx.us/page/comanche.Commissioners.Court"
    },
    {
        "name": "Concho County",
        "location": "Paint Rock, TX",
        "courthouse_address": "152 N Roberts Ave, Paint Rock, TX 76866",
        "website": "http://www.co.concho.tx.us/",
        "appraisal_district_office_address": "152 N Roberts Ave, Paint Rock, TX 76866",
        "registration_office_address": "152 N Roberts Ave, Paint Rock, TX 76866",
        "local_municipality": "City of Paint Rock",
        "elected_officials": {
            "County Judge": "David Dillard",
            "Sheriff": "C.C. Wallace",
            "District Clerk": "Brenda Dickey",
            "County Clerk": "Joy Davis",
            "County Treasurer": "Sandy King"
        },
        "commissioner_court_minutes": "http://www.co.concho.tx.us/page/concho.Commissioners.Court"
    },
    {
        "name": "Cooke County",
        "location": "Gainesville, TX",
        "courthouse_address": "101 S Dixon St, Gainesville, TX 76240",
        "website": "http://www.co.cooke.tx.us/",
        "appraisal_district_office_address": "201 N Dixon St, Gainesville, TX 76240",
        "registration_office_address": "101 S Dixon St, Gainesville, TX 76240",
        "local_municipality": "City of Gainesville",
        "elected_officials": {
            "County Judge": "Jason Brinkley",
            "Sheriff": "Terry Gilbert",
            "District Clerk": "Penny Hall",
            "County Clerk": "Pam Harrison",
            "County Treasurer": "Ronnie E. 'Bear' Mitchell"
        },
        "commissioner_court_minutes": "http://www.co.cooke.tx.us/page/cooke.Commissioners.Court"
    },
    {
        "name": "Coryell County",
        "location": "Gatesville, TX",
        "courthouse_address": "620 E Main St, Gatesville, TX 76528",
        "website": "http://www.coryellcounty.org/",
        "appraisal_district_office_address": "620 E Main St, Gatesville, TX 76528",
        "registration_office_address": "620 E Main St, Gatesville, TX 76528",
        "local_municipality": "City of Gatesville",
        "elected_officials": {
            "County Judge": "Roger Miller",
            "Sheriff": "Scott Williams",
            "District Clerk": "Dee Ann Samuels",
            "County Clerk": "Barbara Simpson",
            "County Treasurer": "Helen Miller"
        },
        "commissioner_court_minutes": "http://www.coryellcounty.org/page/coryell.Commissioners.Court"
    },
    {
        "name": "Cottle County",
        "location": "Paducah, TX",
        "courthouse_address": "811 9th St, Paducah, TX 79248",
        "website": "http://www.co.cottle.tx.us/",
        "appraisal_district_office_address": "811 9th St, Paducah, TX 79248",
        "registration_office_address": "811 9th St, Paducah, TX 79248",
        "local_municipality": "City of Paducah",
        "elected_officials": {
            "County Judge": "Vance Bingham",
            "Sheriff": "Nathan Glass",
            "District Clerk": "Denise Allen",
            "County Clerk": "Barbara Simpson",
            "County Treasurer": "Patty Whitson"
        },
        "commissioner_court_minutes": "http://www.co.cottle.tx.us/page/cottle.Commissioners.Court"
    },
    {
        "name": "Crane County",
        "location": "Crane, TX",
        "courthouse_address": "201 W 6th St, Crane, TX 79731",
        "website": "http://www.co.crane.tx.us/",
        "appraisal_district_office_address": "201 W 6th St, Crane, TX 79731",
        "registration_office_address": "201 W 6th St, Crane, TX 79731",
        "local_municipality": "City of Crane",
        "elected_officials": {
            "County Judge": "Roy Hodges",
            "Sheriff": "Andrew Aguilar",
            "District Clerk": "Stacy Andino",
            "County Clerk": "Kathy Carpenter",
            "County Treasurer": "Lori Miller"
        },
        "commissioner_court_minutes": "http://www.co.crane.tx.us/page/crane.Commissioners.Court"
    },
    {
        "name": "Crockett County",
        "location": "Ozona, TX",
        "courthouse_address": "907 Avenue D, Ozona, TX 76943",
        "website": "http://www.co.crockett.tx.us/",
        "appraisal_district_office_address": "907 Avenue D, Ozona, TX 76943",
        "registration_office_address": "907 Avenue D, Ozona, TX 76943",
        "local_municipality": "City of Ozona",
        "elected_officials": {
            "County Judge": "Fred Deaton",
            "Sheriff": "Robert Rodriguez",
            "District Clerk": "Teresa Pruitt",
            "County Clerk": "Diana Carrasco",
            "County Treasurer": "Lori Miller"
        },
        "commissioner_court_minutes": "http://www.co.crockett.tx.us/page/crockett.Commissioners.Court"
    },
    {
        "name": "Crosby County",
        "location": "Crosbyton, TX",
        "courthouse_address": "201 W Aspen St, Crosbyton, TX 79322",
        "website": "http://www.co.crosby.tx.us/",
        "appraisal_district_office_address": "201 W Aspen St, Crosbyton, TX 79322",
        "registration_office_address": "201 W Aspen St, Crosbyton, TX 79322",
        "local_municipality": "City of Crosbyton",
        "elected_officials": {
            "County Judge": "Johnny Biggerstaff",
            "Sheriff": "Larry Gilbreath",
            "District Clerk": "Carolyn Bingham",
            "County Clerk": "Barbara Simpson",
            "County Treasurer": "Lori Miller"
        },
        "commissioner_court_minutes": "http://www.co.crosby.tx.us/page/crosby.Commissioners.Court"
    },
    {
        "name": "Culberson County",
        "location": "Van Horn, TX",
        "courthouse_address": "300 La Caverna St, Van Horn, TX 79855",
        "website": "http://www.co.culberson.tx.us/",
        "appraisal_district_office_address": "300 La Caverna St, Van Horn, TX 79855",
        "registration_office_address": "300 La Caverna St, Van Horn, TX 79855",
        "local_municipality": "City of Van Horn",
        "elected_officials": {
            "County Judge": "Carlos Urias",
            "Sheriff": "Oscar Carrillo",
            "District Clerk": "Belia Lerma",
            "County Clerk": "Maribel Morales",
            "County Treasurer": "Mary 'Nina' Salcido"
        },
        "commissioner_court_minutes": "http://www.co.culberson.tx.us/page/culberson.Commissioners.Court"
    },
    {
        "name": "Dallam County",
        "location": "Dalhart, TX",
        "courthouse_address": "101 E 5th St, Dalhart, TX 79022",
        "website": "http://www.co.dallam.tx.us/",
        "appraisal_district_office_address": "101 E 5th St, Dalhart, TX 79022",
        "registration_office_address": "101 E 5th St, Dalhart, TX 79022",
        "local_municipality": "City of Dalhart",
        "elected_officials": {
            "County Judge": "Wes Ritchey",
            "Sheriff": "Bruce Scott",
            "District Clerk": "Katherine McKnight",
            "County Clerk": "Kathy Jones",
            "County Treasurer": "Jennifer Bryson"
        },
        "commissioner_court_minutes": "http://www.co.dallam.tx.us/page/dallam.Commissioners.Court"
    },
    {
        "name": "Gaines County",
        "location": "Seminole, TX",
        "courthouse_address": "101 S Main St, Seminole, TX 79360",
        "website": "http://www.co.gaines.tx.us/",
        "appraisal_district_office_address": "101 S Main St, Seminole, TX 79360",
        "registration_office_address": "101 S Main St, Seminole, TX 79360",
        "local_municipality": "City of Seminole",
        "elected_officials": {
            "County Judge": "Tom Keyes",
            "Sheriff": "Ronny Pipkin",
            "District Clerk": "Melissa Sanders",
            "County Clerk": "Jane Barnes",
            "County Treasurer": "Debbie Morrow"
        },
        "commissioner_court_minutes": "http://www.co.gaines.tx.us/page/gaines.Commissioners.Court"
    },
    {
        "name": "Galveston County",
        "location": "Galveston, TX",
        "courthouse_address": "722 Moody Ave, Galveston, TX 77550",
        "website": "http://www.galvestoncountytx.gov/",
        "appraisal_district_office_address": "722 Moody Ave, Galveston, TX 77550",
        "registration_office_address": "722 Moody Ave, Galveston, TX 77550",
        "local_municipality": "City of Galveston",
        "elected_officials": {
            "County Judge": "Mark Henry",
            "Sheriff": "Henry Trochesset",
            "District Clerk": "John Sealy",
            "County Clerk": "Dwight Sullivan",
            "County Treasurer": "Michael Guarino"
        },
        "commissioner_court_minutes": "http://www.galvestoncountytx.gov/page/galveston.Commissioners.Court"
    },
    {
        "name": "Garza County",
        "location": "Post, TX",
        "courthouse_address": "300 W Main St, Post, TX 79356",
        "website": "http://www.co.garza.tx.us/",
        "appraisal_district_office_address": "300 W Main St, Post, TX 79356",
        "registration_office_address": "300 W Main St, Post, TX 79356",
        "local_municipality": "City of Post",
        "elected_officials": {
            "County Judge": "Lee Norman",
            "Sheriff": "Terry Morgan",
            "District Clerk": "Kathy Wilson",
            "County Clerk": "Vickie Boyd",
            "County Treasurer": "Becky Short"
        },
        "commissioner_court_minutes": "http://www.co.garza.tx.us/page/garza.Commissioners.Court"
    },
    {
        "name": "Gillespie County",
        "location": "Fredericksburg, TX",
        "courthouse_address": "101 W Main St, Fredericksburg, TX 78624",
        "website": "http://www.gillespiecounty.org/",
        "appraisal_district_office_address": "101 W Main St, Fredericksburg, TX 78624",
        "registration_office_address": "101 W Main St, Fredericksburg, TX 78624",
        "local_municipality": "City of Fredericksburg",
        "elected_officials": {
            "County Judge": "Mark Stroeher",
            "Sheriff": "Buddy Mills",
            "District Clerk": "Mary Lynn Rusche",
            "County Clerk": "Linda Langerhans",
            "County Treasurer": "Bonnie Kaiser"
        },
        "commissioner_court_minutes": "http://www.gillespiecounty.org/page/gillespie.Commissioners.Court"
    },
    {
        "name": "Glasscock County",
        "location": "Garden City, TX",
        "courthouse_address": "209 N Myrl St, Garden City, TX 79739",
        "website": "http://www.co.glasscock.tx.us/",
        "appraisal_district_office_address": "209 N Myrl St, Garden City, TX 79739",
        "registration_office_address": "209 N Myrl St, Garden City, TX 79739",
        "local_municipality": "City of Garden City",
        "elected_officials": {
            "County Judge": "Kim Halfmann",
            "Sheriff": "Keith Burnett",
            "District Clerk": "Sarah Hearn",
            "County Clerk": "Debbie Mathis",
            "County Treasurer": "Ruth White"
        },
        "commissioner_court_minutes": "http://www.co.glasscock.tx.us/page/glasscock.Commissioners.Court"
    },
    {
        "name": "Goliad County",
        "location": "Goliad, TX",
        "courthouse_address": "127 N Courthouse Square, Goliad, TX 77963",
        "website": "http://www.co.goliad.tx.us/",
        "appraisal_district_office_address": "127 N Courthouse Square, Goliad, TX 77963",
        "registration_office_address": "127 N Courthouse Square, Goliad, TX 77963",
        "local_municipality": "City of Goliad",
        "elected_officials": {
            "County Judge": "Pat Calhoun",
            "Sheriff": "Charles D. Hurley",
            "District Clerk": "Laura Pina",
            "County Clerk": "Susie Alexander",
            "County Treasurer": "Cindy Alford"
        },
        "commissioner_court_minutes": "http://www.co.goliad.tx.us/page/goliad.Commissioners.Court"
    },
    {
        "name": "Gonzales County",
        "location": "Gonzales, TX",
        "courthouse_address": "414 St Joseph St, Gonzales, TX 78629",
        "website": "http://www.co.gonzales.tx.us/",
        "appraisal_district_office_address": "414 St Joseph St, Gonzales, TX 78629",
        "registration_office_address": "414 St Joseph St, Gonzales, TX 78629",
        "local_municipality": "City of Gonzales",
        "elected_officials": {
            "County Judge": "David Bird",
            "Sheriff": "Matthew Atkinson",
            "District Clerk": "Sandra L. Baker",
            "County Clerk": "Lee Riedel",
            "County Treasurer": "Debbie Kolbe"
        },
        "commissioner_court_minutes": "http://www.co.gonzales.tx.us/page/gonzales.Commissioners.Court"
    },
    {
        "name": "Gray County",
        "location": "Pampa, TX",
        "courthouse_address": "205 N Russell St, Pampa, TX 79065",
        "website": "http://www.co.gray.tx.us/",
        "appraisal_district_office_address": "205 N Russell St, Pampa, TX 79065",
        "registration_office_address": "205 N Russell St, Pampa, TX 79065",
        "local_municipality": "City of Pampa",
        "elected_officials": {
            "County Judge": "Richard Peet",
            "Sheriff": "Michael Ryan",
            "District Clerk": "Wanda F. Heard",
            "County Clerk": "Tina Jones",
            "County Treasurer": "Karen Goodman"
        },
        "commissioner_court_minutes": "http://www.co.gray.tx.us/page/gray.Commissioners.Court"
    },
    {
        "name": "Grayson County",
        "location": "Sherman, TX",
        "courthouse_address": "100 W Houston St, Sherman, TX 75090",
        "website": "http://www.co.grayson.tx.us/",
        "appraisal_district_office_address": "100 W Houston St, Sherman, TX 75090",
        "registration_office_address": "100 W Houston St, Sherman, TX 75090",
        "local_municipality": "City of Sherman",
        "elected_officials": {
            "County Judge": "Bill Magers",
            "Sheriff": "Tom Watt",
            "District Clerk": "Tracie White",
            "County Clerk": "Deana Patterson",
            "County Treasurer": "Tina Franklin"
        },
        "commissioner_court_minutes": "http://www.co.grayson.tx.us/page/grayson.Commissioners.Court"
    },
    {
        "name": "Gregg County",
        "location": "Longview, TX",
        "courthouse_address": "101 E Methvin St, Longview, TX 75601",
        "website": "http://www.co.gregg.tx.us/",
        "appraisal_district_office_address": "101 E Methvin St, Longview, TX 75601",
        "registration_office_address": "101 E Methvin St, Longview, TX 75601",
        "local_municipality": "City of Longview",
        "elected_officials": {
            "County Judge": "Bill Stoudt",
            "Sheriff": "Maxey Cerliano",
            "District Clerk": "Stephanie Bazan",
            "County Clerk": "Connie Wade",
            "County Treasurer": "Michelle Gilley"
        },
        "commissioner_court_minutes": "http://www.co.gregg.tx.us/page/gregg.Commissioners.Court"
    },
    {
        "name": "Grimes County",
        "location": "Anderson, TX",
        "courthouse_address": "100 Main St, Anderson, TX 77830",
        "website": "http://www.co.grimes.tx.us/",
        "appraisal_district_office_address": "100 Main St, Anderson, TX 77830",
        "registration_office_address": "100 Main St, Anderson, TX 77830",
        "local_municipality": "City of Anderson",
        "elected_officials": {
            "County Judge": "Joe Fauth",
            "Sheriff": "Don Sowell",
            "District Clerk": "Joan Terrell",
            "County Clerk": "Vanessa Burzynski",
            "County Treasurer": "Teresa Bell"
        },
        "commissioner_court_minutes": "http://www.co.grimes.tx.us/page/grimes.Commissioners.Court"
    },
    {
        "name": "Guadalupe County",
        "location": "Seguin, TX",
        "courthouse_address": "101 E Court St, Seguin, TX 78155",
        "website": "http://www.co.guadalupe.tx.us/",
        "appraisal_district_office_address": "101 E Court St, Seguin, TX 78155",
        "registration_office_address": "101 E Court St, Seguin, TX 78155",
        "local_municipality": "City of Seguin",
        "elected_officials": {
            "County Judge": "Kyle Kutscher",
            "Sheriff": "Arnulfo 'Arnold' Zwicke",
            "District Clerk": "Brandy Duvall",
            "County Clerk": "Teresa Kiel",
            "County Treasurer": "Linda Douglass"
        },
        "commissioner_court_minutes": "http://www.co.guadalupe.tx.us/page/guadalupe.Commissioners.Court"
    },
    {
        "name": "Hale County",
        "location": "Plainview, TX",
        "courthouse_address": "500 Broadway St, Plainview, TX 79072",
        "website": "http://www.co.hale.tx.us/",
        "appraisal_district_office_address": "500 Broadway St, Plainview, TX 79072",
        "registration_office_address": "500 Broadway St, Plainview, TX 79072",
        "local_municipality": "City of Plainview",
        "elected_officials": {
            "County Judge": "Bill Coleman",
            "Sheriff": "David Cochran",
            "District Clerk": "Kim Roberts",
            "County Clerk": "Gracie Gutierrez",
            "County Treasurer": "Juanita Bland"
        },
        "commissioner_court_minutes": "http://www.co.hale.tx.us/page/hale.Commissioners.Court"
    },
    {
        "name": "Hall County",
        "location": "Memphis, TX",
        "courthouse_address": "512 W Main St, Memphis, TX 79245",
        "website": "http://www.co.hall.tx.us/",
        "appraisal_district_office_address": "512 W Main St, Memphis, TX 79245",
        "registration_office_address": "512 W Main St, Memphis, TX 79245",
        "local_municipality": "City of Memphis",
        "elected_officials": {
            "County Judge": "Ray Powell",
            "Sheriff": "Robert Stewart",
            "District Clerk": "Cathy Appleton",
            "County Clerk": "Nikki McGinty",
            "County Treasurer": "Lesa Sanders"
        },
        "commissioner_court_minutes": "http://www.co.hall.tx.us/page/hall.Commissioners.Court"
    },
    {
        "name": "Hamilton County",
        "location": "Hamilton, TX",
        "courthouse_address": "102 N Rice St, Hamilton, TX 76531",
        "website": "http://www.co.hamilton.tx.us/",
        "appraisal_district_office_address": "102 N Rice St, Hamilton, TX 76531",
        "registration_office_address": "102 N Rice St, Hamilton, TX 76531",
        "local_municipality": "City of Hamilton",
        "elected_officials": {
            "County Judge": "Mark Tynes",
            "Sheriff": "Justin Caraway",
            "District Clerk": "Rhonda Martin",
            "County Clerk": "Melanie Reid",
            "County Treasurer": "Joan Rawlings"
        },
        "commissioner_court_minutes": "http://www.co.hamilton.tx.us/page/hamilton.Commissioners.Court"
    },
    {
        "name": "Hansford County",
        "location": "Spearman, TX",
        "courthouse_address": "15 NW Court St, Spearman, TX 79081",
        "website": "http://www.co.hansford.tx.us/",
        "appraisal_district_office_address": "15 NW Court St, Spearman, TX 79081",
        "registration_office_address": "15 NW Court St, Spearman, TX 79081",
        "local_municipality": "City of Spearman",
        "elected_officials": {
            "County Judge": "Tim Glass",
            "Sheriff": "Bob Mahurin",
            "District Clerk": "Susan Owens",
            "County Clerk": "Nancy Terrell",
            "County Treasurer": "Martha Turner"
        },
        "commissioner_court_minutes": "http://www.co.hansford.tx.us/page/hansford.Commissioners.Court"
    },
    {
        "name": "Hardeman County",
        "location": "Quanah, TX",
        "courthouse_address": "300 Main St, Quanah, TX 79252",
        "website": "http://www.co.hardeman.tx.us/",
        "appraisal_district_office_address": "300 Main St, Quanah, TX 79252",
        "registration_office_address": "300 Main St, Quanah, TX 79252",
        "local_municipality": "City of Quanah",
        "elected_officials": {
            "County Judge": "Ron Ingram",
            "Sheriff": "Pat Laughery",
            "District Clerk": "Kelli Allen",
            "County Clerk": "Sharon Neill",
            "County Treasurer": "Brenda Floyd"
        },
        "commissioner_court_minutes": "http://www.co.hardeman.tx.us/page/hardeman.Commissioners.Court"
    },
    {
        "name": "Hardin County",
        "location": "Kountze, TX",
        "courthouse_address": "300 Monroe St, Kountze, TX 77625",
        "website": "http://www.co.hardin.tx.us/",
        "appraisal_district_office_address": "300 Monroe St, Kountze, TX 77625",
        "registration_office_address": "300 Monroe St, Kountze, TX 77625",
        "local_municipality": "City of Kountze",
        "elected_officials": {
            "County Judge": "Wayne McDaniel",
            "Sheriff": "Mark Davis",
            "District Clerk": "Joyce Overstreet",
            "County Clerk": "Carolyn Guidroz",
            "County Treasurer": "Sharon Overstreet"
        },
        "commissioner_court_minutes": "http://www.co.hardin.tx.us/page/hardin.Commissioners.Court"
    },
    {
        "name": "Harris County",
        "location": "Houston, TX",
        "courthouse_address": "201 Caroline St, Houston, TX 77002",
        "website": "http://www.hctx.net/",
        "appraisal_district_office_address": "201 Caroline St, Houston, TX 77002",
        "registration_office_address": "201 Caroline St, Houston, TX 77002",
        "local_municipality": "City of Houston",
        "elected_officials": {
            "County Judge": "Lina Hidalgo",
            "Sheriff": "Ed Gonzalez",
            "District Clerk": "Marilyn Burgess",
            "County Clerk": "Teneshia Hudspeth",
            "County Treasurer": "Dylan Osborne"
        },
        "commissioner_court_minutes": "http://www.hctx.net/page/harris.Commissioners.Court"
    },
    {
        "name": "Harrison County",
        "location": "Marshall, TX",
        "courthouse_address": "200 W Houston St, Marshall, TX 75670",
        "website": "http://www.co.harrison.tx.us/",
        "appraisal_district_office_address": "200 W Houston St, Marshall, TX 75670",
        "registration_office_address": "200 W Houston St, Marshall, TX 75670",
        "local_municipality": "City of Marshall",
        "elected_officials": {
            "County Judge": "Chad Sims",
            "Sheriff": "B.J. Fletcher",
            "District Clerk": "Sherry Griffis",
            "County Clerk": "Cleo Nations",
            "County Treasurer": "Vicky Fry"
        },
        "commissioner_court_minutes": "http://www.co.harrison.tx.us/page/harrison.Commissioners.Court"
    },
    {
        "name": "Hartley County",
        "location": "Channing, TX",
        "courthouse_address": "900 Main St, Channing, TX 79018",
        "website": "http://www.co.hartley.tx.us/",
        "appraisal_district_office_address": "900 Main St, Channing, TX 79018",
        "registration_office_address": "900 Main St, Channing, TX 79018",
        "local_municipality": "City of Channing",
        "elected_officials": {
            "County Judge": "Ronnie Gordon",
            "Sheriff": "Franky Scott",
            "District Clerk": "Kelli Schoenthal",
            "County Clerk": "Sheri Chapman",
            "County Treasurer": "Tonya Potter"
        },
        "commissioner_court_minutes": "http://www.co.hartley.tx.us/page/hartley.Commissioners.Court"
    },
    {
        "name": "Haskell County",
        "location": "Haskell, TX",
        "courthouse_address": "1 Ave D, Haskell, TX 79521",
        "website": "http://www.co.haskell.tx.us/",
        "appraisal_district_office_address": "1 Ave D, Haskell, TX 79521",
        "registration_office_address": "1 Ave D, Haskell, TX 79521",
        "local_municipality": "City of Haskell",
        "elected_officials": {
            "County Judge": "Buddy White",
            "Sheriff": "David Hall",
            "District Clerk": "Tonya Rogers",
            "County Clerk": "Jennifer Miller",
            "County Treasurer": "Kaye Abbott"
        },
        "commissioner_court_minutes": "http://www.co.haskell.tx.us/page/haskell.Commissioners.Court"
    },
    {
        "name": "Hays County",
        "location": "San Marcos, TX",
        "courthouse_address": "712 S Stagecoach Trail, San Marcos, TX 78666",
        "website": "http://www.co.hays.tx.us/",
        "appraisal_district_office_address": "712 S Stagecoach Trail, San Marcos, TX 78666",
        "registration_office_address": "712 S Stagecoach Trail, San Marcos, TX 78666",
        "local_municipality": "City of San Marcos",
        "elected_officials": {
            "County Judge": "Ruben Becerra",
            "Sheriff": "Gary Cutler",
            "District Clerk": "Beverly Crumley",
            "County Clerk": "Elaine Cardenas",
            "County Treasurer": "Vanessa Alvarez"
        },
        "commissioner_court_minutes": "http://www.co.hays.tx.us/page/hays.Commissioners.Court"
    },
    {
        "name": "Hemphill County",
        "location": "Canadian, TX",
        "courthouse_address": "400 Main St, Canadian, TX 79014",
        "website": "http://www.co.hemphill.tx.us/",
        "appraisal_district_office_address": "400 Main St, Canadian, TX 79014",
        "registration_office_address": "400 Main St, Canadian, TX 79014",
        "local_municipality": "City of Canadian",
        "elected_officials": {
            "County Judge": "George Briant",
            "Sheriff": "James Pearson",
            "District Clerk": "Catherine Green",
            "County Clerk": "Lynne Taylor",
            "County Treasurer": "Kathy Esch"
        },
        "commissioner_court_minutes": "http://www.co.hemphill.tx.us/page/hemphill.Commissioners.Court"
    },
    {
        "name": "Henderson County",
        "location": "Athens, TX",
        "courthouse_address": "100 E Tyler St, Athens, TX 75751",
        "website": "http://www.co.henderson.tx.us/",
        "appraisal_district_office_address": "100 E Tyler St, Athens, TX 75751",
        "registration_office_address": "100 E Tyler St, Athens, TX 75751",
        "local_municipality": "City of Athens",
        "elected_officials": {
            "County Judge": "Richard Sanders",
            "Sheriff": "Ray Nutt",
            "District Clerk": "Betty Herriage",
            "County Clerk": "Mary Margaret Wright",
            "County Treasurer": "Denise Stephens"
        },
        "commissioner_court_minutes": "http://www.co.henderson.tx.us/page/henderson.Commissioners.Court"
    },
    {
        "name": "Hidalgo County",
        "location": "Edinburg, TX",
        "courthouse_address": "100 N Closner Blvd, Edinburg, TX 78539",
        "website": "http://www.hidalgocounty.us/",
        "appraisal_district_office_address": "4405 S Professional Dr, Edinburg, TX 78539",
        "registration_office_address": "100 N Closner Blvd, Edinburg, TX 78539",
        "local_municipality": "City of Edinburg",
        "elected_officials": {
            "County Judge": "Richard F. Cortez",
            "Sheriff": "J.E. 'Eddie' Guerra",
            "District Clerk": "Laura Hinojosa",
            "County Clerk": "Arturo Guajardo Jr.",
            "County Treasurer": "Norma L. Garcia"
        },
        "commissioner_court_minutes": "http://www.hidalgocounty.us/page/hidalgo.Commissioners.Court"
    },
    {
        "name": "Loving County",
        "location": "Mentone, TX",
        "courthouse_address": "100 Bell St, Mentone, TX 79754",
        "website": "http://www.co.loving.tx.us/",
        "appraisal_district_office_address": "100 Bell St, Mentone, TX 79754",
        "registration_office_address": "100 Bell St, Mentone, TX 79754",
        "local_municipality": "City of Mentone",
        "elected_officials": {
            "County Judge": "Skeet Jones",
            "Sheriff": "Billy Hopper",
            "District Clerk": "Arlene Hollen",
            "County Clerk": "Donna Thompson",
            "County Treasurer": "Sonia Scott"
        },
        "commissioner_court_minutes": "http://www.co.loving.tx.us/page/loving.Commissioners.Court"
    },
    {
        "name": "Lubbock County",
        "location": "Lubbock, TX",
        "courthouse_address": "904 Broadway St, Lubbock, TX 79401",
        "website": "http://www.co.lubbock.tx.us/",
        "appraisal_district_office_address": "904 Broadway St, Lubbock, TX 79401",
        "registration_office_address": "904 Broadway St, Lubbock, TX 79401",
        "local_municipality": "City of Lubbock",
        "elected_officials": {
            "County Judge": "Curtis Parrish",
            "Sheriff": "Kelly Rowe",
            "District Clerk": "Barbara Sucsy",
            "County Clerk": "Kelly Pinion",
            "County Treasurer": "Sharon Riddle"
        },
        "commissioner_court_minutes": "http://www.co.lubbock.tx.us/page/lubbock.Commissioners.Court"
    },
    {
        "name": "Lynn County",
        "location": "Tahoka, TX",
        "courthouse_address": "1501 Ave J, Tahoka, TX 79373",
        "website": "http://www.co.lynn.tx.us/",
        "appraisal_district_office_address": "1501 Ave J, Tahoka, TX 79373",
        "registration_office_address": "1501 Ave J, Tahoka, TX 79373",
        "local_municipality": "City of Tahoka",
        "elected_officials": {
            "County Judge": "Mike Braddock",
            "Sheriff": "Abel Gonzalez",
            "District Clerk": "Donna Stewart",
            "County Clerk": "Shelly Watson",
            "County Treasurer": "Michele Daniels"
        },
        "commissioner_court_minutes": "http://www.co.lynn.tx.us/page/lynn.Commissioners.Court"
    },
    {
        "name": "Madison County",
        "location": "Madisonville, TX",
        "courthouse_address": "101 W Main St, Madisonville, TX 77864",
        "website": "http://www.co.madison.tx.us/",
        "appraisal_district_office_address": "101 W Main St, Madisonville, TX 77864",
        "registration_office_address": "101 W Main St, Madisonville, TX 77864",
        "local_municipality": "City of Madisonville",
        "elected_officials": {
            "County Judge": "C.W. 'Bill' Young",
            "Sheriff": "Travis Neeley",
            "District Clerk": "Kaycee Jones",
            "County Clerk": "Valerie D. Lankford",
            "County Treasurer": "Cindy Hancock"
        },
        "commissioner_court_minutes": "http://www.co.madison.tx.us/page/madison.Commissioners.Court"
    },
    {
        "name": "Marion County",
        "location": "Jefferson, TX",
        "courthouse_address": "102 W Austin St, Jefferson, TX 75657",
        "website": "http://www.co.marion.tx.us/",
        "appraisal_district_office_address": "102 W Austin St, Jefferson, TX 75657",
        "registration_office_address": "102 W Austin St, Jefferson, TX 75657",
        "local_municipality": "City of Jefferson",
        "elected_officials": {
            "County Judge": "Lex Jones",
            "Sheriff": "David McKnight",
            "District Clerk": "Natalie Beaty",
            "County Clerk": "Vickie Smith",
            "County Treasurer": "Janis Goodson"
        },
        "commissioner_court_minutes": "http://www.co.marion.tx.us/page/marion.Commissioners.Court"
    },
    {
        "name": "Martin County",
        "location": "Stanton, TX",
        "courthouse_address": "301 N Saint Peter St, Stanton, TX 79782",
        "website": "http://www.co.martin.tx.us/",
        "appraisal_district_office_address": "301 N Saint Peter St, Stanton, TX 79782",
        "registration_office_address": "301 N Saint Peter St, Stanton, TX 79782",
        "local_municipality": "City of Stanton",
        "elected_officials": {
            "County Judge": "Bryan Cox",
            "Sheriff": "Brad Ingram",
            "District Clerk": "Sandra Rodriguez",
            "County Clerk": "Bonnie Estep",
            "County Treasurer": "Michelle Guillen"
        },
        "commissioner_court_minutes": "http://www.co.martin.tx.us/page/martin.Commissioners.Court"
    },
    {
        "name": "Mason County",
        "location": "Mason, TX",
        "courthouse_address": "201 Fort McKavitt St, Mason, TX 76856",
        "website": "http://www.co.mason.tx.us/",
        "appraisal_district_office_address": "201 Fort McKavitt St, Mason, TX 76856",
        "registration_office_address": "201 Fort McKavitt St, Mason, TX 76856",
        "local_municipality": "City of Mason",
        "elected_officials": {
            "County Judge": "Jerry Bearden",
            "Sheriff": "Buster Nixon",
            "District Clerk": "Pamela Ortega",
            "County Clerk": "Pamela Ortega",
            "County Treasurer": "Judy Cordes"
        },
        "commissioner_court_minutes": "http://www.co.mason.tx.us/page/mason.Commissioners.Court"
    },
    {
        "name": "Matagorda County",
        "location": "Bay City, TX",
        "courthouse_address": "1700 7th St, Bay City, TX 77414",
        "website": "http://www.co.matagorda.tx.us/",
        "appraisal_district_office_address": "1700 7th St, Bay City, TX 77414",
        "registration_office_address": "1700 7th St, Bay City, TX 77414",
        "local_municipality": "City of Bay City",
        "elected_officials": {
            "County Judge": "Nate McDonald",
            "Sheriff": "Frank Osborne",
            "District Clerk": "Janice Thompson",
            "County Clerk": "Margie Perez",
            "County Treasurer": "Sharon Harper"
        },
        "commissioner_court_minutes": "http://www.co.matagorda.tx.us/page/matagorda.Commissioners.Court"
    },
    {
        "name": "Maverick County",
        "location": "Eagle Pass, TX",
        "courthouse_address": "500 Quarry St, Eagle Pass, TX 78852",
        "website": "http://www.co.maverick.tx.us/",
        "appraisal_district_office_address": "500 Quarry St, Eagle Pass, TX 78852",
        "registration_office_address": "500 Quarry St, Eagle Pass, TX 78852",
        "local_municipality": "City of Eagle Pass",
        "elected_officials": {
            "County Judge": "David Saucedo",
            "Sheriff": "Tom Schmerber",
            "District Clerk": "Gerry Barrera",
            "County Clerk": "Sara Montemayor",
            "County Treasurer": "Rosa Holguin"
        },
        "commissioner_court_minutes": "http://www.co.maverick.tx.us/page/maverick.Commissioners.Court"
    },
    {
        "name": "McCulloch County",
        "location": "Brady, TX",
        "courthouse_address": "199 Court Ave, Brady, TX 76825",
        "website": "http://www.co.mcculloch.tx.us/",
        "appraisal_district_office_address": "199 Court Ave, Brady, TX 76825",
        "registration_office_address": "199 Court Ave, Brady, TX 76825",
        "local_municipality": "City of Brady",
        "elected_officials": {
            "County Judge": "Frank Trammell",
            "Sheriff": "Earl Howell",
            "District Clerk": "Carla Miller",
            "County Clerk": "Margaret Andrews",
            "County Treasurer": "Penny Hughes"
        },
        "commissioner_court_minutes": "http://www.co.mcculloch.tx.us/page/mcculloch.Commissioners.Court"
    },
    {
        "name": "McLennan County",
        "location": "Waco, TX",
        "courthouse_address": "501 Washington Ave, Waco, TX 76701",
        "website": "http://www.co.mclennan.tx.us/",
        "appraisal_district_office_address": "501 Washington Ave, Waco, TX 76701",
        "registration_office_address": "501 Washington Ave, Waco, TX 76701",
        "local_municipality": "City of Waco",
        "elected_officials": {
            "County Judge": "Scott Felton",
            "Sheriff": "Parnell McNamara",
            "District Clerk": "John E. Nash",
            "County Clerk": "Andy Harwell",
            "County Treasurer": "Danny Mims"
        },
        "commissioner_court_minutes": "http://www.co.mclennan.tx.us/page/mclennan.Commissioners.Court"
    },
    {
        "name": "McMullen County",
        "location": "Tilden, TX",
        "courthouse_address": "401 Main St, Tilden, TX 78072",
        "website": "http://www.co.mcmullen.tx.us/",
        "appraisal_district_office_address": "401 Main St, Tilden, TX 78072",
        "registration_office_address": "401 Main St, Tilden, TX 78072",
        "local_municipality": "City of Tilden",
        "elected_officials": {
            "County Judge": "James Teal",
            "Sheriff": "Emiliano Gutierrez",
            "District Clerk": "Martha Salinas",
            "County Clerk": "Daphne Rogers",
            "County Treasurer": "Sandra Cosby"
        },
        "commissioner_court_minutes": "http://www.co.mcmullen.tx.us/page/mcmullen.Commissioners.Court"
    },
    {
        "name": "Medina County",
        "location": "Hondo, TX",
        "courthouse_address": "1100 16th St, Hondo, TX 78861",
        "website": "http://www.co.medina.tx.us/",
        "appraisal_district_office_address": "1100 16th St, Hondo, TX 78861",
        "registration_office_address": "1100 16th St, Hondo, TX 78861",
        "local_municipality": "City of Hondo",
        "elected_officials": {
            "County Judge": "Chris Schuchart",
            "Sheriff": "Randy Brown",
            "District Clerk": "Mary Jane Oberkampf",
            "County Clerk": "Anna Van Dame",
            "County Treasurer": "Marilyn Lovelace"
        },
        "commissioner_court_minutes": "http://www.co.medina.tx.us/page/medina.Commissioners.Court"
    },
    {
        "name": "Menard County",
        "location": "Menard, TX",
        "courthouse_address": "206 E San Saba Ave, Menard, TX 76859",
        "website": "http://www.co.menard.tx.us/",
        "appraisal_district_office_address": "206 E San Saba Ave, Menard, TX 76859",
        "registration_office_address": "206 E San Saba Ave, Menard, TX 76859",
        "local_municipality": "City of Menard",
        "elected_officials": {
            "County Judge": "Richard Cordes",
            "Sheriff": "Rusty Banks",
            "District Clerk": "Nancy Wilson",
            "County Clerk": "Nancy Wilson",
            "County Treasurer": "Susan Hanna"
        },
        "commissioner_court_minutes": "http://www.co.menard.tx.us/page/menard.Commissioners.Court"
    },
    {
        "name": "Midland County",
        "location": "Midland, TX",
        "courthouse_address": "500 N Loraine St, Midland, TX 79701",
        "website": "http://www.co.midland.tx.us/",
        "appraisal_district_office_address": "500 N Loraine St, Midland, TX 79701",
        "registration_office_address": "500 N Loraine St, Midland, TX 79701",
        "local_municipality": "City of Midland",
        "elected_officials": {
            "County Judge": "Terry Johnson",
            "Sheriff": "David Criner",
            "District Clerk": "Donna Henderson",
            "County Clerk": "Brenda Willis",
            "County Treasurer": "Jillian Lee"
        },
        "commissioner_court_minutes": "http://www.co.midland.tx.us/page/midland.Commissioners.Court"
    },
    {
        "name": "Milam County",
        "location": "Cameron, TX",
        "courthouse_address": "102 S Fannin Ave, Cameron, TX 76520",
        "website": "http://www.co.milam.tx.us/",
        "appraisal_district_office_address": "102 S Fannin Ave, Cameron, TX 76520",
        "registration_office_address": "102 S Fannin Ave, Cameron, TX 76520",
        "local_municipality": "City of Cameron",
        "elected_officials": {
            "County Judge": "Steve Young",
            "Sheriff": "Chris White",
            "District Clerk": "Denise McCall",
            "County Clerk": "Joy Graham",
            "County Treasurer": "Margaret Young"
        },
        "commissioner_court_minutes": "http://www.co.milam.tx.us/page/milam.Commissioners.Court"
    },
    {
        "name": "Mills County",
        "location": "Goldthwaite, TX",
        "courthouse_address": "1011 4th St, Goldthwaite, TX 76844",
        "website": "http://www.co.mills.tx.us/",
        "appraisal_district_office_address": "1011 4th St, Goldthwaite, TX 76844",
        "registration_office_address": "1011 4th St, Goldthwaite, TX 76844",
        "local_municipality": "City of Goldthwaite",
        "elected_officials": {
            "County Judge": "Ed Smith",
            "Sheriff": "Clint Hammonds",
            "District Clerk": "Kim Taylor",
            "County Clerk": "Carolyn Foster",
            "County Treasurer": "Pam Rogers"
        },
        "commissioner_court_minutes": "http://www.co.mills.tx.us/page/mills.Commissioners.Court"
    },
    {
        "name": "Mitchell County",
        "location": "Colorado City, TX",
        "courthouse_address": "349 Oak St, Colorado City, TX 79512",
        "website": "http://www.co.mitchell.tx.us/",
        "appraisal_district_office_address": "349 Oak St, Colorado City, TX 79512",
        "registration_office_address": "349 Oak St, Colorado City, TX 79512",
        "local_municipality": "City of Colorado City",
        "elected_officials": {
            "County Judge": "Mark Merrell",
            "Sheriff": "Patrick Toombs",
            "District Clerk": "Tiffany Taylor",
            "County Clerk": "Kayla Bowers",
            "County Treasurer": "Norma Payne"
        },
        "commissioner_court_minutes": "http://www.co.mitchell.tx.us/page/mitchell.Commissioners.Court"
    },
    {
        "name": "Montague County",
        "location": "Montague, TX",
        "courthouse_address": "11339 State Hwy 59 N, Montague, TX 76251",
        "website": "http://www.co.montague.tx.us/",
        "appraisal_district_office_address": "11339 State Hwy 59 N, Montague, TX 76251",
        "registration_office_address": "11339 State Hwy 59 N, Montague, TX 76251",
        "local_municipality": "City of Montague",
        "elected_officials": {
            "County Judge": "Rick Lewis",
            "Sheriff": "Marshall Thomas",
            "District Clerk": "Sharon Womack",
            "County Clerk": "Glenda Henson",
            "County Treasurer": "Diane Robinson"
        },
        "commissioner_court_minutes": "http://www.co.montague.tx.us/page/montague.Commissioners.Court"
    },
    {
        "name": "Montgomery County",
        "location": "Conroe, TX",
        "courthouse_address": "301 N Main St, Conroe, TX 77301",
        "website": "http://www.mctx.org/",
        "appraisal_district_office_address": "301 N Main St, Conroe, TX 77301",
        "registration_office_address": "301 N Main St, Conroe, TX 77301",
        "local_municipality": "City of Conroe",
        "elected_officials": {
            "County Judge": "Mark Keough",
            "Sheriff": "Rand Henderson",
            "District Clerk": "Melisa Miller",
            "County Clerk": "Mark Turnbull",
            "County Treasurer": "Melanie Bush"
        },
        "commissioner_court_minutes": "http://www.mctx.org/page/montgomery.Commissioners.Court"
    },
    {
        "name": "Moore County",
        "location": "Dumas, TX",
        "courthouse_address": "715 S Dumas Ave, Dumas, TX 79029",
        "website": "http://www.co.moore.tx.us/",
        "appraisal_district_office_address": "715 S Dumas Ave, Dumas, TX 79029",
        "registration_office_address": "715 S Dumas Ave, Dumas, TX 79029",
        "local_municipality": "City of Dumas",
        "elected_officials": {
            "County Judge": "Rowdy Rhoades",
            "Sheriff": "J.E. 'Bo' DeArmond",
            "District Clerk": "Melissa Pribble",
            "County Clerk": "Brenda McDowell",
            "County Treasurer": "Sheri Robison"
        },
        "commissioner_court_minutes": "http://www.co.moore.tx.us/page/moore.Commissioners.Court"
    },
    {
        "name": "Morris County",
        "location": "Daingerfield, TX",
        "courthouse_address": "500 Broadnax St, Daingerfield, TX 75638",
        "website": "http://www.co.morris.tx.us/",
        "appraisal_district_office_address": "500 Broadnax St, Daingerfield, TX 75638",
        "registration_office_address": "500 Broadnax St, Daingerfield, TX 75638",
        "local_municipality": "City of Daingerfield",
        "elected_officials": {
            "County Judge": "L.D. Williamson",
            "Sheriff": "Jack Martin",
            "District Clerk": "Melinda King",
            "County Clerk": "Sherri Morris",
            "County Treasurer": "Tracy Johnson"
        },
        "commissioner_court_minutes": "http://www.co.morris.tx.us/page/morris.Commissioners.Court"
    },
    {
        "name": "Motley County",
        "location": "Matador, TX",
        "courthouse_address": "701 Dundee St, Matador, TX 79244",
        "website": "http://www.co.motley.tx.us/",
        "appraisal_district_office_address": "701 Dundee St, Matador, TX 79244",
        "registration_office_address": "701 Dundee St, Matador, TX 79244",
        "local_municipality": "City of Matador",
        "elected_officials": {
            "County Judge": "Terry Scarbrough",
            "Sheriff": "Robert Fisk",
            "District Clerk": "Linda Williams",
            "County Clerk": "Linda Williams",
            "County Treasurer": "Dorothy Golleher"
        },
        "commissioner_court_minutes": "http://www.co.motley.tx.us/page/motley.Commissioners.Court"
    },
    {
        "name": "Nacogdoches County",
        "location": "Nacogdoches, TX",
        "courthouse_address": "101 W Main St, Nacogdoches, TX 75961",
        "website": "http://www.co.nacogdoches.tx.us/",
        "appraisal_district_office_address": "101 W Main St, Nacogdoches, TX 75961",
        "registration_office_address": "101 W Main St, Nacogdoches, TX 75961",
        "local_municipality": "City of Nacogdoches",
        "elected_officials": {
            "County Judge": "Greg Sowell",
            "Sheriff": "Jason Bridges",
            "District Clerk": "Kim Morton",
            "County Clerk": "Brenda Faire",
            "County Treasurer": "Donna Swann"
        },
        "commissioner_court_minutes": "http://www.co.nacogdoches.tx.us/page/nacogdoches.Commissioners.Court"
    },
    {
        "name": "Navarro County",
        "location": "Corsicana, TX",
        "courthouse_address": "300 W 3rd Ave, Corsicana, TX 75110",
        "website": "http://www.co.navarro.tx.us/",
        "appraisal_district_office_address": "300 W 3rd Ave, Corsicana, TX 75110",
        "registration_office_address": "300 W 3rd Ave, Corsicana, TX 75110",
        "local_municipality": "City of Corsicana",
        "elected_officials": {
            "County Judge": "H.M. Davenport Jr.",
            "Sheriff": "Elmer Tanner",
            "District Clerk": "Gale Grayson",
            "County Clerk": "Shelley Michael",
            "County Treasurer": "Sherry Dowd"
        },
        "commissioner_court_minutes": "http://www.co.navarro.tx.us/page/navarro.Commissioners.Court"
    },
    {
        "name": "Newton County",
        "location": "Newton, TX",
        "courthouse_address": "115 Court St, Newton, TX 75966",
        "website": "http://www.co.newton.tx.us/",
        "appraisal_district_office_address": "115 Court St, Newton, TX 75966",
        "registration_office_address": "115 Court St, Newton, TX 75966",
        "local_municipality": "City of Newton",
        "elected_officials": {
            "County Judge": "Kenneth Weeks",
            "Sheriff": "Billy Rowles",
            "District Clerk": "Carla Springer",
            "County Clerk": "Joyce Wiggins",
            "County Treasurer": "Cindy Peveto"
        },
        "commissioner_court_minutes": "http://www.co.newton.tx.us/page/newton.Commissioners.Court"
    },
    {
        "name": "Nolan County",
        "location": "Sweetwater, TX",
        "courthouse_address": "100 E 3rd St, Sweetwater, TX 79556",
        "website": "http://www.co.nolan.tx.us/",
        "appraisal_district_office_address": "100 E 3rd St, Sweetwater, TX 79556",
        "registration_office_address": "100 E 3rd St, Sweetwater, TX 79556",
        "local_municipality": "City of Sweetwater",
        "elected_officials": {
            "County Judge": "Whitley May",
            "Sheriff": "David Warren",
            "District Clerk": "Jennifer Brunn",
            "County Clerk": "Sharon Powers",
            "County Treasurer": "Erma Stephens"
        },
        "commissioner_court_minutes": "http://www.co.nolan.tx.us/page/nolan.Commissioners.Court"
    },
    {
        "name": "Nueces County",
        "location": "Corpus Christi, TX",
        "courthouse_address": "901 Leopard St, Corpus Christi, TX 78401",
        "website": "http://www.co.nueces.tx.us/",
        "appraisal_district_office_address": "901 Leopard St, Corpus Christi, TX 78401",
        "registration_office_address": "901 Leopard St, Corpus Christi, TX 78401",
        "local_municipality": "City of Corpus Christi",
        "elected_officials": {
            "County Judge": "Barbara Canales",
            "Sheriff": "J.C. Hooper",
            "District Clerk": "Sheri Neal",
            "County Clerk": "Kara Sands",
            "County Treasurer": "Sherry Sturgeon"
        },
        "commissioner_court_minutes": "http://www.co.nueces.tx.us/page/nueces.Commissioners.Court"
    },
    {
        "name": "Ochiltree County",
        "location": "Perryton, TX",
        "courthouse_address": "511 S Main St, Perryton, TX 79070",
        "website": "http://www.co.ochiltree.tx.us/",
        "appraisal_district_office_address": "511 S Main St, Perryton, TX 79070",
        "registration_office_address": "511 S Main St, Perryton, TX 79070",
        "local_municipality": "City of Perryton",
        "elected_officials": {
            "County Judge": "Corky Blake",
            "Sheriff": "Terry Bouchard",
            "District Clerk": "Marla Cook",
            "County Clerk": "Stacy Brown",
            "County Treasurer": "Julie Merritt"
        },
        "commissioner_court_minutes": "http://www.co.ochiltree.tx.us/page/ochiltree.Commissioners.Court"
    },
    {
        "name": "Oldham County",
        "location": "Vega, TX",
        "courthouse_address": "105 S Main St, Vega, TX 79092",
        "website": "http://www.co.oldham.tx.us/",
        "appraisal_district_office_address": "105 S Main St, Vega, TX 79092",
        "registration_office_address": "105 S Main St, Vega, TX 79092",
        "local_municipality": "City of Vega",
        "elected_officials": {
            "County Judge": "Don R. Allred",
            "Sheriff": "David Medlin",
            "District Clerk": "Dara Proffitt",
            "County Clerk": "Christine Hunter",
            "County Treasurer": "Ginger Moore"
        },
        "commissioner_court_minutes": "http://www.co.oldham.tx.us/page/oldham.Commissioners.Court"
    },
    {
        "name": "Orange County",
        "location": "Orange, TX",
        "courthouse_address": "801 W Division Ave, Orange, TX 77630",
        "website": "http://www.co.orange.tx.us/",
        "appraisal_district_office_address": "801 W Division Ave, Orange, TX 77630",
        "registration_office_address": "801 W Division Ave, Orange, TX 77630",
        "local_municipality": "City of Orange",
        "elected_officials": {
            "County Judge": "John Gothia",
            "Sheriff": "Lane Mooney",
            "District Clerk": "Vicki Edgerly",
            "County Clerk": "Brandi Robertson",
            "County Treasurer": "Christie Hulsey"
        },
        "commissioner_court_minutes": "http://www.co.orange.tx.us/page/orange.Commissioners.Court"
    },
    {
        "name": "Palo Pinto County",
        "location": "Palo Pinto, TX",
        "courthouse_address": "520 Oak St, Palo Pinto, TX 76484",
        "website": "http://www.co.palo-pinto.tx.us/",
        "appraisal_district_office_address": "520 Oak St, Palo Pinto, TX 76484",
        "registration_office_address": "520 Oak St, Palo Pinto, TX 76484",
        "local_municipality": "City of Palo Pinto",
        "elected_officials": {
            "County Judge": "Shane Long",
            "Sheriff": "Brett McGuire",
            "District Clerk": "Cindy Owens",
            "County Clerk": "Janette Green",
            "County Treasurer": "Tammy Price"
        },
        "commissioner_court_minutes": "http://www.co.palo-pinto.tx.us/page/palopinto.Commissioners.Court"
    },
    {
        "name": "Panola County",
        "location": "Carthage, TX",
        "courthouse_address": "110 S Sycamore St, Carthage, TX 75633",
        "website": "http://www.co.panola.tx.us/",
        "appraisal_district_office_address": "110 S Sycamore St, Carthage, TX 75633",
        "registration_office_address": "110 S Sycamore St, Carthage, TX 75633",
        "local_municipality": "City of Carthage",
        "elected_officials": {
            "County Judge": "David Anderson",
            "Sheriff": "Kevin Lake",
            "District Clerk": "Deborah Morris",
            "County Clerk": "Joyce Lunsford",
            "County Treasurer": "Phyllis Kennedy"
        },
        "commissioner_court_minutes": "http://www.co.panola.tx.us/page/panola.Commissioners.Court"
    },
    {
        "name": "Parker County",
        "location": "Weatherford, TX",
        "courthouse_address": "1 Courthouse Square, Weatherford, TX 76086",
        "website": "http://www.parkercountytx.com/",
        "appraisal_district_office_address": "1 Courthouse Square, Weatherford, TX 76086",
        "registration_office_address": "1 Courthouse Square, Weatherford, TX 76086",
        "local_municipality": "City of Weatherford",
        "elected_officials": {
            "County Judge": "Pat Deen",
            "Sheriff": "Larry Fowler",
            "District Clerk": "Janice McWilliams",
            "County Clerk": "Janice McWilliams",
            "County Treasurer": "Judy Amador"
        },
        "commissioner_court_minutes": "http://www.parkercountytx.com/page/parker.Commissioners.Court"
    },
    {
        "name": "Parmer County",
        "location": "Farwell, TX",
        "courthouse_address": "401 3rd St, Farwell, TX 79325",
        "website": "http://www.co.parmer.tx.us/",
        "appraisal_district_office_address": "401 3rd St, Farwell, TX 79325",
        "registration_office_address": "401 3rd St, Farwell, TX 79325",
        "local_municipality": "City of Farwell",
        "elected_officials": {
            "County Judge": "Daryll Brantley",
            "Sheriff": "Randy Geries",
            "District Clerk": "Tamara Martinez",
            "County Clerk": "Cynthia Davidson",
            "County Treasurer": "Christie Douglas"
        },
        "commissioner_court_minutes": "http://www.co.parmer.tx.us/page/parmer.Commissioners.Court"
    },
    {
        "name": "Pecos County",
        "location": "Fort Stockton, TX",
        "courthouse_address": "103 W Callaghan St, Fort Stockton, TX 79735",
        "website": "http://www.co.pecos.tx.us/",
        "appraisal_district_office_address": "103 W Callaghan St, Fort Stockton, TX 79735",
        "registration_office_address": "103 W Callaghan St, Fort Stockton, TX 79735",
        "local_municipality": "City of Fort Stockton",
        "elected_officials": {
            "County Judge": "Joe Shuster",
            "Sheriff": "Cliff Harris",
            "District Clerk": "Patricia Kennedy",
            "County Clerk": "Cyndi Ward",
            "County Treasurer": "Linda Clark"
        },
        "commissioner_court_minutes": "http://www.co.pecos.tx.us/page/pecos.Commissioners.Court"
    },
    {
        "name": "Polk County",
        "location": "Livingston, TX",
        "courthouse_address": "101 W Church St, Livingston, TX 77351",
        "website": "http://www.co.polk.tx.us/",
        "appraisal_district_office_address": "101 W Church St, Livingston, TX 77351",
        "registration_office_address": "101 W Church St, Livingston, TX 77351",
        "local_municipality": "City of Livingston",
        "elected_officials": {
            "County Judge": "Sydney Murphy",
            "Sheriff": "Byron Lyons",
            "District Clerk": "Bobbye Richards",
            "County Clerk": "Schelana Hock",
            "County Treasurer": "Nikki Williford"
        },
        "commissioner_court_minutes": "http://www.co.polk.tx.us/page/polk.Commissioners.Court"
    },
    {
        "name": "Potter County",
        "location": "Amarillo, TX",
        "courthouse_address": "500 S Fillmore St, Amarillo, TX 79101",
        "website": "http://www.co.potter.tx.us/",
        "appraisal_district_office_address": "500 S Fillmore St, Amarillo, TX 79101",
        "registration_office_address": "500 S Fillmore St, Amarillo, TX 79101",
        "local_municipality": "City of Amarillo",
        "elected_officials": {
            "County Judge": "Nancy Tanner",
            "Sheriff": "Brian Thomas",
            "District Clerk": "Lori Bohannon",
            "County Clerk": "Julie Smith",
            "County Treasurer": "Robyn Cluke"
        },
        "commissioner_court_minutes": "http://www.co.potter.tx.us/page/potter.Commissioners.Court"
    },
    {
        "name": "Presidio County",
        "location": "Marfa, TX",
        "courthouse_address": "300 Highland St, Marfa, TX 79843",
        "website": "http://www.co.presidio.tx.us/",
        "appraisal_district_office_address": "300 Highland St, Marfa, TX 79843",
        "registration_office_address": "300 Highland St, Marfa, TX 79843",
        "local_municipality": "City of Marfa",
        "elected_officials": {
            "County Judge": "Cinderela Guevara",
            "Sheriff": "Danny Dominguez",
            "District Clerk": "Valeria Castillo",
            "County Clerk": "Linda Sandoval",
            "County Treasurer": "Frances Garcia"
        },
        "commissioner_court_minutes": "http://www.co.presidio.tx.us/page/presidio.Commissioners.Court"
    },
    {
        "name": "Rains County",
        "location": "Emory, TX",
        "courthouse_address": "167 Quitman St, Emory, TX 75440",
        "website": "http://www.co.rains.tx.us/",
        "appraisal_district_office_address": "167 Quitman St, Emory, TX 75440",
        "registration_office_address": "167 Quitman St, Emory, TX 75440",
        "local_municipality": "City of Emory",
        "elected_officials": {
            "County Judge": "Wayne Wolfe",
            "Sheriff": "David Traylor",
            "District Clerk": "Debra Boswell",
            "County Clerk": "Linda Wallace",
            "County Treasurer": "Joanne Bowman"
        },
        "commissioner_court_minutes": "http://www.co.rains.tx.us/page/rains.Commissioners.Court"
    },
    {
        "name": "Randall County",
        "location": "Canyon, TX",
        "courthouse_address": "501 16th St, Canyon, TX 79015",
        "website": "http://www.randallcounty.com/",
        "appraisal_district_office_address": "501 16th St, Canyon, TX 79015",
        "registration_office_address": "501 16th St, Canyon, TX 79015",
        "local_municipality": "City of Canyon",
        "elected_officials": {
            "County Judge": "Ernie Houdashell",
            "Sheriff": "Joel Richardson",
            "District Clerk": "Lori Bohannon",
            "County Clerk": "Renita Kennedy",
            "County Treasurer": "Sherry Smith"
        },
        "commissioner_court_minutes": "http://www.randallcounty.com/page/randall.Commissioners.Court"
    },
    {
        "name": "Reagan County",
        "location": "Big Lake, TX",
        "courthouse_address": "300 N Plaza Ave, Big Lake, TX 76932",
        "website": "http://www.co.reagan.tx.us/",
        "appraisal_district_office_address": "300 N Plaza Ave, Big Lake, TX 76932",
        "registration_office_address": "300 N Plaza Ave, Big Lake, TX 76932",
        "local_municipality": "City of Big Lake",
        "elected_officials": {
            "County Judge": "Jim O'Bryan",
            "Sheriff": "Jeff Garner",
            "District Clerk": "Cathy Estes",
            "County Clerk": "Donna Webb",
            "County Treasurer": "Shannon Poynor"
        },
        "commissioner_court_minutes": "http://www.co.reagan.tx.us/page/reagan.Commissioners.Court"
    },
    {
        "name": "Real County",
        "location": "Leakey, TX",
        "courthouse_address": "146 S US Hwy 83, Leakey, TX 78873",
        "website": "http://www.co.real.tx.us/",
        "appraisal_district_office_address": "146 S US Hwy 83, Leakey, TX 78873",
        "registration_office_address": "146 S US Hwy 83, Leakey, TX 78873",
        "local_municipality": "City of Leakey",
        "elected_officials": {
            "County Judge": "Garry Merritt",
            "Sheriff": "Nathan Johnson",
            "District Clerk": "Belinda Hicks",
            "County Clerk": "Dora Beasley",
            "County Treasurer": "Marla Shepperd"
        },
        "commissioner_court_minutes": "http://www.co.real.tx.us/page/real.Commissioners.Court"
    },
    {
        "name": "Red River County",
        "location": "Clarksville, TX",
        "courthouse_address": "200 N Walnut St, Clarksville, TX 75426",
        "website": "http://www.co.red-river.tx.us/",
        "appraisal_district_office_address": "200 N Walnut St, Clarksville, TX 75426",
        "registration_office_address": "200 N Walnut St, Clarksville, TX 75426",
        "local_municipality": "City of Clarksville",
        "elected_officials": {
            "County Judge": "Lori Beauchamp",
            "Sheriff": "John H. Jones",
            "District Clerk": "Leigh Ann Wright",
            "County Clerk": "Rachel Reynolds",
            "County Treasurer": "Joan Britton"
        },
        "commissioner_court_minutes": "http://www.co.red-river.tx.us/page/redriver.Commissioners.Court"
    },
    {
        "name": "Reeves County",
        "location": "Pecos, TX",
        "courthouse_address": "100 E 4th St, Pecos, TX 79772",
        "website": "http://www.co.reeves.tx.us/",
        "appraisal_district_office_address": "100 E 4th St, Pecos, TX 79772",
        "registration_office_address": "100 E 4th St, Pecos, TX 79772",
        "local_municipality": "City of Pecos",
        "elected_officials": {
            "County Judge": "Leo Hung",
            "Sheriff": "Arturo 'Art' Granado",
            "District Clerk": "Patricia 'Patty' Juarez",
            "County Clerk": "Darlene Brown",
            "County Treasurer": "Linda Clark"
        },
        "commissioner_court_minutes": "http://www.co.reeves.tx.us/page/reeves.Commissioners.Court"
    },
    {
        "name": "Refugio County",
        "location": "Refugio, TX",
        "courthouse_address": "808 Commerce St, Refugio, TX 78377",
        "website": "http://www.co.refugio.tx.us/",
        "appraisal_district_office_address": "808 Commerce St, Refugio, TX 78377",
        "registration_office_address": "808 Commerce St, Refugio, TX 78377",
        "local_municipality": "City of Refugio",
        "elected_officials": {
            "County Judge": "Robert Blaschke",
            "Sheriff": "Pinkie Hall",
            "District Clerk": "Kathryn Terry",
            "County Clerk": "Mary Ann Kocurek",
            "County Treasurer": "Phyllis Woodburn"
        },
        "commissioner_court_minutes": "http://www.co.refugio.tx.us/page/refugio.Commissioners.Court"
    },
    {
        "name": "Roberts County",
        "location": "Miami, TX",
        "courthouse_address": "300 E Commercial St, Miami, TX 79059",
        "website": "http://www.co.roberts.tx.us/",
        "appraisal_district_office_address": "300 E Commercial St, Miami, TX 79059",
        "registration_office_address": "300 E Commercial St, Miami, TX 79059",
        "local_municipality": "City of Miami",
        "elected_officials": {
            "County Judge": "Vance R. Johnson",
            "Sheriff": "Dana Miller",
            "District Clerk": "Sandra Ammons",
            "County Clerk": "Susan Heiskell",
            "County Treasurer": "Barbara Alford"
        },
        "commissioner_court_minutes": "http://www.co.roberts.tx.us/page/roberts.Commissioners.Court"
    },
    {
        "name": "Robertson County",
        "location": "Franklin, TX",
        "courthouse_address": "102 W Decherd St, Franklin, TX 77856",
        "website": "http://www.co.robertson.tx.us/",
        "appraisal_district_office_address": "102 W Decherd St, Franklin, TX 77856",
        "registration_office_address": "102 W Decherd St, Franklin, TX 77856",
        "local_municipality": "City of Franklin",
        "elected_officials": {
            "County Judge": "Charles Ellison",
            "Sheriff": "Gerald Yezak",
            "District Clerk": "Janet Tillotson",
            "County Clerk": "Sharon Gibson",
            "County Treasurer": "Betty Beaty"
        },
        "commissioner_court_minutes": "http://www.co.robertson.tx.us/page/robertson.Commissioners.Court"
    },
    {
        "name": "Rockwall County",
        "location": "Rockwall, TX",
        "courthouse_address": "1111 E Yellowjacket Ln, Rockwall, TX 75087",
        "website": "http://www.rockwallcountytexas.com/",
        "appraisal_district_office_address": "1111 E Yellowjacket Ln, Rockwall, TX 75087",
        "registration_office_address": "1111 E Yellowjacket Ln, Rockwall, TX 75087",
        "local_municipality": "City of Rockwall",
        "elected_officials": {
            "County Judge": "David Sweet",
            "Sheriff": "Terry Garrett",
            "District Clerk": "Shelli Miller",
            "County Clerk": "Jennifer Fogg",
            "County Treasurer": "John M. Pruitt"
        },
        "commissioner_court_minutes": "http://www.rockwallcountytexas.com/page/rockwall.Commissioners.Court"
    },
    {
        "name": "Runnels County",
        "location": "Ballinger, TX",
        "courthouse_address": "613 Hutchings Ave, Ballinger, TX 76821",
        "website": "http://www.co.runnels.tx.us/",
        "appraisal_district_office_address": "613 Hutchings Ave, Ballinger, TX 76821",
        "registration_office_address": "613 Hutchings Ave, Ballinger, TX 76821",
        "local_municipality": "City of Ballinger",
        "elected_officials": {
            "County Judge": "Barry Hilliard",
            "Sheriff": "Carl Squyres",
            "District Clerk": "Connie Grantham",
            "County Clerk": "Lisa Peterson",
            "County Treasurer": "Donna Thompson"
        },
        "commissioner_court_minutes": "http://www.co.runnels.tx.us/page/runnels.Commissioners.Court"
    },
    {
        "name": "Rusk County",
        "location": "Henderson, TX",
        "courthouse_address": "115 N Main St, Henderson, TX 75652",
        "website": "http://www.co.rusk.tx.us/",
        "appraisal_district_office_address": "115 N Main St, Henderson, TX 75652",
        "registration_office_address": "115 N Main St, Henderson, TX 75652",
        "local_municipality": "City of Henderson",
        "elected_officials": {
            "County Judge": "Joel Hale",
            "Sheriff": "Jeff Price",
            "District Clerk": "Kathy Cates",
            "County Clerk": "Terri Boren",
            "County Treasurer": "Renee Bowman"
        },
        "commissioner_court_minutes": "http://www.co.rusk.tx.us/page/rusk.Commissioners.Court"
    },
    {
        "name": "Sabine County",
        "location": "Hemphill, TX",
        "courthouse_address": "201 Main St, Hemphill, TX 75948",
        "website": "http://www.co.sabine.tx.us/",
        "appraisal_district_office_address": "201 Main St, Hemphill, TX 75948",
        "registration_office_address": "201 Main St, Hemphill, TX 75948",
        "local_municipality": "City of Hemphill",
        "elected_officials": {
            "County Judge": "Daryl Melton",
            "Sheriff": "Thomas Maddox",
            "District Clerk": "Mary Kay Wilson",
            "County Clerk": "Diana Wedgeworth",
            "County Treasurer": "Sue Hunt"
        },
        "commissioner_court_minutes": "http://www.co.sabine.tx.us/page/sabine.Commissioners.Court"
    },
    {
        "name": "San Augustine County",
        "location": "San Augustine, TX",
        "courthouse_address": "100 W Columbia St, San Augustine, TX 75972",
        "website": "http://www.co.san-augustine.tx.us/",
        "appraisal_district_office_address": "100 W Columbia St, San Augustine, TX 75972",
        "registration_office_address": "100 W Columbia St, San Augustine, TX 75972",
        "local_municipality": "City of San Augustine",
        "elected_officials": {
            "County Judge": "Jeff Boyd",
            "Sheriff": "Robert Cartwright",
            "District Clerk": "Shirley Gordon",
            "County Clerk": "Shanna Williams",
            "County Treasurer": "Janet White"
        },
        "commissioner_court_minutes": "http://www.co.san-augustine.tx.us/page/sanaugustine.Commissioners.Court"
    },
    {
        "name": "San Jacinto County",
        "location": "Coldspring, TX",
        "courthouse_address": "1 State Hwy 150, Coldspring, TX 77331",
        "website": "http://www.co.san-jacinto.tx.us/",
        "appraisal_district_office_address": "1 State Hwy 150, Coldspring, TX 77331",
        "registration_office_address": "1 State Hwy 150, Coldspring, TX 77331",
        "local_municipality": "City of Coldspring",
        "elected_officials": {
            "County Judge": "John Lovett",
            "Sheriff": "Greg Capers",
            "District Clerk": "Sherry Shedd",
            "County Clerk": "Dawn Wright",
            "County Treasurer": "Karen Lane"
        },
        "commissioner_court_minutes": "http://www.co.san-jacinto.tx.us/page/sanjacinto.Commissioners.Court"
    },
    {
        "name": "San Patricio County",
        "location": "Sinton, TX",
        "courthouse_address": "400 W Sinton St, Sinton, TX 78387",
        "website": "http://www.co.san-patricio.tx.us/",
        "appraisal_district_office_address": "400 W Sinton St, Sinton, TX 78387",
        "registration_office_address": "400 W Sinton St, Sinton, TX 78387",
        "local_municipality": "City of Sinton",
        "elected_officials": {
            "County Judge": "David Krebs",
            "Sheriff": "Oscar Rivera",
            "District Clerk": "Laura Garcia",
            "County Clerk": "Gracie Alaniz-Gonzales",
            "County Treasurer": "Elva L. Flores"
        },
        "commissioner_court_minutes": "http://www.co.san-patricio.tx.us/page/sanpatricio.Commissioners.Court"
    },
    {
        "name": "San Saba County",
        "location": "San Saba, TX",
        "courthouse_address": "500 E Wallace St, San Saba, TX 76877",
        "website": "http://www.co.san-saba.tx.us/",
        "appraisal_district_office_address": "500 E Wallace St, San Saba, TX 76877",
        "registration_office_address": "500 E Wallace St, San Saba, TX 76877",
        "local_municipality": "City of San Saba",
        "elected_officials": {
            "County Judge": "The Honorable Byron Theodosis",
            "Sheriff": "Matthew Boswell",
            "District Clerk": "Sherry Lindsey",
            "County Clerk": "Kimberly Cline",
            "County Treasurer": "Christina Davis"
        },
        "commissioner_court_minutes": "http://www.co.san-saba.tx.us/page/sansaba.Commissioners.Court"
    },
    {
        "name": "Schleicher County",
        "location": "Eldorado, TX",
        "courthouse_address": "2 S Divide St, Eldorado, TX 76936",
        "website": "http://www.co.schleicher.tx.us/",
        "appraisal_district_office_address": "2 S Divide St, Eldorado, TX 76936",
        "registration_office_address": "2 S Divide St, Eldorado, TX 76936",
        "local_municipality": "City of Eldorado",
        "elected_officials": {
            "County Judge": "Charlie Bradley",
            "Sheriff": "David Doran",
            "District Clerk": "Nicole Robbins",
            "County Clerk": "Brenda Robinett",
            "County Treasurer": "Sylvia Witt"
        },
        "commissioner_court_minutes": "http://www.co.schleicher.tx.us/page/schleicher.Commissioners.Court"
    },
    {
        "name": "Scurry County",
        "location": "Snyder, TX",
        "courthouse_address": "1806 25th St, Snyder, TX 79549",
        "website": "http://www.co.scurry.tx.us/",
        "appraisal_district_office_address": "1806 25th St, Snyder, TX 79549",
        "registration_office_address": "1806 25th St, Snyder, TX 79549",
        "local_municipality": "City of Snyder",
        "elected_officials": {
            "County Judge": "Ricky Fritz",
            "Sheriff": "Daryl Wright",
            "District Clerk": "Deanna Holbert",
            "County Clerk": "Debbie Lambert",
            "County Treasurer": "Melissa Mowry"
        },
        "commissioner_court_minutes": "http://www.co.scurry.tx.us/page/scurry.Commissioners.Court"
    },
    {
        "name": "Shackelford County",
        "location": "Albany, TX",
        "courthouse_address": "225 S Main St, Albany, TX 76430",
        "website": "http://www.co.shackelford.tx.us/",
        "appraisal_district_office_address": "225 S Main St, Albany, TX 76430",
        "registration_office_address": "225 S Main St, Albany, TX 76430",
        "local_municipality": "City of Albany",
        "elected_officials": {
            "County Judge": "Charles Wagner",
            "Sheriff": "Edward 'Ed' Miller",
            "District Clerk": "Jennifer T. Thompson",
            "County Clerk": "Courtney Phillips",
            "County Treasurer": "Travis Balliew"
        },
        "commissioner_court_minutes": "http://www.co.shackelford.tx.us/page/shackelford.Commissioners.Court"
    },
    {
        "name": "Shelby County",
        "location": "Center, TX",
        "courthouse_address": "200 San Augustine St, Center, TX 75935",
        "website": "http://www.co.shelby.tx.us/",
        "appraisal_district_office_address": "200 San Augustine St, Center, TX 75935",
        "registration_office_address": "200 San Augustine St, Center, TX 75935",
        "local_municipality": "City of Center",
        "elected_officials": {
            "County Judge": "Allison Harbison",
            "Sheriff": "Kevin Windham",
            "District Clerk": "Lori Oliver",
            "County Clerk": "Jennifer Fountain",
            "County Treasurer": "Ann Blackwell"
        },
        "commissioner_court_minutes": "http://www.co.shelby.tx.us/page/shelby.Commissioners.Court"
    },
    {
        "name": "Sherman County",
        "location": "Stratford, TX",
        "courthouse_address": "701 N 3rd St, Stratford, TX 79084",
        "website": "http://www.co.sherman.tx.us/",
        "appraisal_district_office_address": "701 N 3rd St, Stratford, TX 79084",
        "registration_office_address": "701 N 3rd St, Stratford, TX 79084",
        "local_municipality": "City of Stratford",
        "elected_officials": {
            "County Judge": "Benjie B. Edwards",
            "Sheriff": "Ted Allen",
            "District Clerk": "Darla Henson",
            "County Clerk": "Laura Rogers",
            "County Treasurer": "Jeanie Fawver"
        },
        "commissioner_court_minutes": "http://www.co.sherman.tx.us/page/sherman.Commissioners.Court"
    },
    {
        "name": "Smith County",
        "location": "Tyler, TX",
        "courthouse_address": "100 N Broadway Ave, Tyler, TX 75702",
        "website": "http://www.smith-county.com/",
        "appraisal_district_office_address": "100 N Broadway Ave, Tyler, TX 75702",
        "registration_office_address": "100 N Broadway Ave, Tyler, TX 75702",
        "local_municipality": "City of Tyler",
        "elected_officials": {
            "County Judge": "Nathaniel Moran",
            "Sheriff": "Larry Smith",
            "District Clerk": "Lois Rogers",
            "County Clerk": "Karen Phillips",
            "County Treasurer": "Kelli Weatherford"
        },
        "commissioner_court_minutes": "http://www.smith-county.com/page/smith.Commissioners.Court"
    },
    {
        "name": "Somervell County",
        "location": "Glen Rose, TX",
        "courthouse_address": "107 NE Vernon St, Glen Rose, TX 76043",
        "website": "http://www.co.somervell.tx.us/",
        "appraisal_district_office_address": "107 NE Vernon St, Glen Rose, TX 76043",
        "registration_office_address": "107 NE Vernon St, Glen Rose, TX 76043",
        "local_municipality": "City of Glen Rose",
        "elected_officials": {
            "County Judge": "Danny Chambers",
            "Sheriff": "Alan West",
            "District Clerk": "Patricia Boase",
            "County Clerk": "Shelley Birdsong",
            "County Treasurer": "Gayla Moxley"
        },
        "commissioner_court_minutes": "http://www.co.somervell.tx.us/page/somervell.Commissioners.Court"
    },
    {
        "name": "Starr County",
        "location": "Rio Grande City, TX",
        "courthouse_address": "401 N Britton Ave, Rio Grande City, TX 78582",
        "website": "http://www.co.starr.tx.us/",
        "appraisal_district_office_address": "401 N Britton Ave, Rio Grande City, TX 78582",
        "registration_office_address": "401 N Britton Ave, Rio Grande City, TX 78582",
        "local_municipality": "City of Rio Grande City",
        "elected_officials": {
            "County Judge": "Eloy Vera",
            "Sheriff": "Rene Fuentes",
            "District Clerk": "Carlos Villareal",
            "County Clerk": "Omar Escobar",
            "County Treasurer": "Loyda Garza"
        },
        "commissioner_court_minutes": "http://www.co.starr.tx.us/page/starr.Commissioners.Court"
    },
    {
        "name": "Stephens County",
        "location": "Breckenridge, TX",
        "courthouse_address": "200 W Walker St, Breckenridge, TX 76424",
        "website": "http://www.co.stephens.tx.us/",
        "appraisal_district_office_address": "200 W Walker St, Breckenridge, TX 76424",
        "registration_office_address": "200 W Walker St, Breckenridge, TX 76424",
        "local_municipality": "City of Breckenridge",
        "elected_officials": {
            "County Judge": "Michael Roach",
            "Sheriff": "Will Holt",
            "District Clerk": "Jennifer Powell",
            "County Clerk": "Jackie Ensey",
            "County Treasurer": "Stephanie Rodriguez"
        },
        "commissioner_court_minutes": "http://www.co.stephens.tx.us/page/stephens.Commissioners.Court"
    },
    {
        "name": "Sterling County",
        "location": "Sterling City, TX",
        "courthouse_address": "300 4th St, Sterling City, TX 76951",
        "website": "http://www.co.sterling.tx.us/",
        "appraisal_district_office_address": "300 4th St, Sterling City, TX 76951",
        "registration_office_address": "300 4th St, Sterling City, TX 76951",
        "local_municipality": "City of Sterling City",
        "elected_officials": {
            "County Judge": "Charles Ben David",
            "Sheriff": "Tim Pigg",
            "District Clerk": "Kelly French",
            "County Clerk": "Michelle French",
            "County Treasurer": "Kelly Ellis"
        },
        "commissioner_court_minutes": "http://www.co.sterling.tx.us/page/sterling.Commissioners.Court"
    },
    {
        "name": "Stonewall County",
        "location": "Aspermont, TX",
        "courthouse_address": "128 Town Square Ln, Aspermont, TX 79502",
        "website": "http://www.co.stonewall.tx.us/",
        "appraisal_district_office_address": "128 Town Square Ln, Aspermont, TX 79502",
        "registration_office_address": "128 Town Square Ln, Aspermont, TX 79502",
        "local_municipality": "City of Aspermont",
        "elected_officials": {
            "County Judge": "Ronnie C. Karr",
            "Sheriff": "Michael Lange",
            "District Clerk": "Shirley Davis",
            "County Clerk": "Rhonda Ware",
            "County Treasurer": "Marty McGinty"
        },
        "commissioner_court_minutes": "http://www.co.stonewall.tx.us/page/stonewall.Commissioners.Court"
    },
    {
        "name": "Sutton County",
        "location": "Sonora, TX",
        "courthouse_address": "300 E Oak St, Sonora, TX 76950",
        "website": "http://www.co.sutton.tx.us/",
        "appraisal_district_office_address": "300 E Oak St, Sonora, TX 76950",
        "registration_office_address": "300 E Oak St, Sonora, TX 76950",
        "local_municipality": "City of Sonora",
        "elected_officials": {
            "County Judge": "Steven Smith",
            "Sheriff": "Oscar Rivera",
            "District Clerk": "Darla Aguilar",
            "County Clerk": "Peggy Gonzalez",
            "County Treasurer": "Susie Thompson"
        },
        "commissioner_court_minutes": "http://www.co.sutton.tx.us/page/sutton.Commissioners.Court"
    },
    {
        "name": "Swisher County",
        "location": "Tulia, TX",
        "courthouse_address": "119 S Maxwell Ave, Tulia, TX 79088",
        "website": "http://www.co.swisher.tx.us/",
        "appraisal_district_office_address": "119 S Maxwell Ave, Tulia, TX 79088",
        "registration_office_address": "119 S Maxwell Ave, Tulia, TX 79088",
        "local_municipality": "City of Tulia",
        "elected_officials": {
            "County Judge": "Harold Keeter",
            "Sheriff": "Roger Hooker",
            "District Clerk": "Brenda Hudson",
            "County Clerk": "Emalee Hart",
            "County Treasurer": "Kay Hunter"
        },
        "commissioner_court_minutes": "http://www.co.swisher.tx.us/page/swisher.Commissioners.Court"
    },
    {
        "name": "Tarrant County",
        "location": "Fort Worth, TX",
        "courthouse_address": "100 E Weatherford St, Fort Worth, TX 76196",
        "website": "http://www.tarrantcounty.com/",
        "appraisal_district_office_address": "100 E Weatherford St, Fort Worth, TX 76196",
        "registration_office_address": "100 E Weatherford St, Fort Worth, TX 76196",
        "local_municipality": "City of Fort Worth",
        "elected_officials": {
            "County Judge": "Glen Whitley",
            "Sheriff": "Bill Waybourn",
            "District Clerk": "Tom Wilder",
            "County Clerk": "Mary Louise Nicholson",
            "County Treasurer": "Ron Wright"
        },
        "commissioner_court_minutes": "http://www.tarrantcounty.com/page/tarrant.Commissioners.Court"
    },
    {
        "name": "Taylor County",
        "location": "Abilene, TX",
        "courthouse_address": "300 Oak St, Abilene, TX 79602",
        "website": "http://www.co.taylor.tx.us/",
        "appraisal_district_office_address": "300 Oak St, Abilene, TX 79602",
        "registration_office_address": "300 Oak St, Abilene, TX 79602",
        "local_municipality": "City of Abilene",
        "elected_officials": {
            "County Judge": "Downing Bolls",
            "Sheriff": "Ricky Bishop",
            "District Clerk": "Lona Tipton",
            "County Clerk": "Larry G. Bevill",
            "County Treasurer": "Donald Layton"
        },
        "commissioner_court_minutes": "http://www.co.taylor.tx.us/page/taylor.Commissioners.Court"
    },
    {
        "name": "Terrell County",
        "location": "Sanderson, TX",
        "courthouse_address": "105 E Hackberry St, Sanderson, TX 79848",
        "website": "http://www.co.terrell.tx.us/",
        "appraisal_district_office_address": "105 E Hackberry St, Sanderson, TX 79848",
        "registration_office_address": "105 E Hackberry St, Sanderson, TX 79848",
        "local_municipality": "City of Sanderson",
        "elected_officials": {
            "County Judge": "Dale Carruthers",
            "Sheriff": "Keith Hughes",
            "District Clerk": "Margie Singleton",
            "County Clerk": "Kathy Watts",
            "County Treasurer": "Pat Hughes"
        },
        "commissioner_court_minutes": "http://www.co.terrell.tx.us/page/terrell.Commissioners.Court"
    },
    {
        "name": "Terry County",
        "location": "Brownfield, TX",
        "courthouse_address": "500 W Main St, Brownfield, TX 79316",
        "website": "http://www.co.terry.tx.us/",
        "appraisal_district_office_address": "500 W Main St, Brownfield, TX 79316",
        "registration_office_address": "500 W Main St, Brownfield, TX 79316",
        "local_municipality": "City of Brownfield",
        "elected_officials": {
            "County Judge": "J.D. Wagner",
            "Sheriff": "Larry Gilbreath",
            "District Clerk": "Sue Poff",
            "County Clerk": "Kim Carter",
            "County Treasurer": "Judy Burdine"
        },
        "commissioner_court_minutes": "http://www.co.terry.tx.us/page/terry.Commissioners.Court"
    },
    {
        "name": "Throckmorton County",
        "location": "Throckmorton, TX",
        "courthouse_address": "105 N Minter Ave, Throckmorton, TX 76483",
        "website": "http://www.co.throckmorton.tx.us/",
        "appraisal_district_office_address": "105 N Minter Ave, Throckmorton, TX 76483",
        "registration_office_address": "105 N Minter Ave, Throckmorton, TX 76483",
        "local_municipality": "City of Throckmorton",
        "elected_officials": {
            "County Judge": "Billy Thomas",
            "Sheriff": "Brandon Brown",
            "District Clerk": "Linda Benham",
            "County Clerk": "Debra Goff",
            "County Treasurer": "Karen Scobee"
        },
        "commissioner_court_minutes": "http://www.co.throckmorton.tx.us/page/throckmorton.Commissioners.Court"
    },
    {
        "name": "Titus County",
        "location": "Mount Pleasant, TX",
        "courthouse_address": "100 W 1st St, Mount Pleasant, TX 75455",
        "website": "http://www.co.titus.tx.us/",
        "appraisal_district_office_address": "100 W 1st St, Mount Pleasant, TX 75455",
        "registration_office_address": "100 W 1st St, Mount Pleasant, TX 75455",
        "local_municipality": "City of Mount Pleasant",
        "elected_officials": {
            "County Judge": "Brian Lee",
            "Sheriff": "Tim Ingram",
            "District Clerk": "Shannon Fleming",
            "County Clerk": "Kim Jones",
            "County Treasurer": "Crystal Young"
        },
        "commissioner_court_minutes": "http://www.co.titus.tx.us/page/titus.Commissioners.Court"
    },
    {
        "name": "Tom Green County",
        "location": "San Angelo, TX",
        "courthouse_address": "124 W Beauregard Ave, San Angelo, TX 76903",
        "website": "http://www.co.tom-green.tx.us/",
        "appraisal_district_office_address": "124 W Beauregard Ave, San Angelo, TX 76903",
        "registration_office_address": "124 W Beauregard Ave, San Angelo, TX 76903",
        "local_municipality": "City of San Angelo",
        "elected_officials": {
            "County Judge": "Steve Floyd",
            "Sheriff": "David Jones",
            "District Clerk": "Shirley Matlock",
            "County Clerk": "Elizabeth McGill",
            "County Treasurer": "Diana Spieker"
        },
        "commissioner_court_minutes": "http://www.co.tom-green.tx.us/page/tomgreen.Commissioners.Court"
    },
    {
        "name": "Travis County",
        "location": "Austin, TX",
        "courthouse_address": "700 Lavaca St, Austin, TX 78701",
        "website": "http://www.traviscountytx.gov/",
        "appraisal_district_office_address": "700 Lavaca St, Austin, TX 78701",
        "registration_office_address": "700 Lavaca St, Austin, TX 78701",
        "local_municipality": "City of Austin",
        "elected_officials": {
            "County Judge": "Andy Brown",
            "Sheriff": "Sally Hernandez",
            "District Clerk": "Velva Price",
            "County Clerk": "Dana DeBeauvoir",
            "County Treasurer": "Dolores Ortega"
        },
        "commissioner_court_minutes": "http://www.traviscountytx.gov/page/travis.Commissioners.Court"
    },
    {
        "name": "Trinity County",
        "location": "Groveton, TX",
        "courthouse_address": "162 W 1st St, Groveton, TX 75845",
        "website": "http://www.co.trinity.tx.us/",
        "appraisal_district_office_address": "162 W 1st St, Groveton, TX 75845",
        "registration_office_address": "162 W 1st St, Groveton, TX 75845",
        "local_municipality": "City of Groveton",
        "elected_officials": {
            "County Judge": "Doug Page",
            "Sheriff": "Woody Wallace",
            "District Clerk": "Tara Walton",
            "County Clerk": "Amy Maddox",
            "County Treasurer": "Janet Carr"
        },
        "commissioner_court_minutes": "http://www.co.trinity.tx.us/page/trinity.Commissioners.Court"
    },
    {
        "name": "Tyler County",
        "location": "Woodville, TX",
        "courthouse_address": "100 W Bluff St, Woodville, TX 75979",
        "website": "http://www.co.tyler.tx.us/",
        "appraisal_district_office_address": "100 W Bluff St, Woodville, TX 75979",
        "registration_office_address": "100 W Bluff St, Woodville, TX 75979",
        "local_municipality": "City of Woodville",
        "elected_officials": {
            "County Judge": "Jacque Blanchette",
            "Sheriff": "Bryan Weatherford",
            "District Clerk": "Dawn Grimes",
            "County Clerk": "Joyce Young",
            "County Treasurer": "Sue Saunders"
        },
        "commissioner_court_minutes": "http://www.co.tyler.tx.us/page/tyler.Commissioners.Court"
    },
    {
        "name": "Upshur County",
        "location": "Gilmer, TX",
        "courthouse_address": "100 Tyler St, Gilmer, TX 75644",
        "website": "http://www.countyofupshur.com/",
        "appraisal_district_office_address": "100 Tyler St, Gilmer, TX 75644",
        "registration_office_address": "100 Tyler St, Gilmer, TX 75644",
        "local_municipality": "City of Gilmer",
        "elected_officials": {
            "County Judge": "Todd Tefteller",
            "Sheriff": "Larry Webb",
            "District Clerk": "Karen Bunn",
            "County Clerk": "Terri Ross",
            "County Treasurer": "Melva Todd"
        },
        "commissioner_court_minutes": "http://www.countyofupshur.com/page/upshur.Commissioners.Court"
    },
    {
        "name": "Upton County",
        "location": "Rankin, TX",
        "courthouse_address": "205 E 10th St, Rankin, TX 79778",
        "website": "http://www.co.upton.tx.us/",
        "appraisal_district_office_address": "205 E 10th St, Rankin, TX 79778",
        "registration_office_address": "205 E 10th St, Rankin, TX 79778",
        "local_municipality": "City of Rankin",
        "elected_officials": {
            "County Judge": "Dusty Kilgore",
            "Sheriff": "Dan Brown",
            "District Clerk": "Sharon Douglas",
            "County Clerk": "Tami Collins",
            "County Treasurer": "Terry Roberts"
        },
        "commissioner_court_minutes": "http://www.co.upton.tx.us/page/upton.Commissioners.Court"
    },
    {
        "name": "Uvalde County",
        "location": "Uvalde, TX",
        "courthouse_address": "100 N Getty St, Uvalde, TX 78801",
        "website": "http://www.uvaldecounty.com/",
        "appraisal_district_office_address": "100 N Getty St, Uvalde, TX 78801",
        "registration_office_address": "100 N Getty St, Uvalde, TX 78801",
        "local_municipality": "City of Uvalde",
        "elected_officials": {
            "County Judge": "William R. Mitchell",
            "Sheriff": "Charles Mendeke",
            "District Clerk": "Eloy Cano",
            "County Clerk": "Donna Murr",
            "County Treasurer": "Annette Born"
        },
        "commissioner_court_minutes": "http://www.uvaldecounty.com/page/uvalde.Commissioners.Court"
    },
    {
        "name": "Val Verde County",
        "location": "Del Rio, TX",
        "courthouse_address": "400 Pecan St, Del Rio, TX 78840",
        "website": "http://www.valverdecounty.texas.gov/",
        "appraisal_district_office_address": "400 Pecan St, Del Rio, TX 78840",
        "registration_office_address": "400 Pecan St, Del Rio, TX 78840",
        "local_municipality": "City of Del Rio",
        "elected_officials": {
            "County Judge": "Lewis G. Owens Jr.",
            "Sheriff": "Joe Frank Martinez",
            "District Clerk": "Lisa D. Gonzales",
            "County Clerk": "Generosa Gracia",
            "County Treasurer": "Lorenza Martinez"
        },
        "commissioner_court_minutes": "http://www.valverdecounty.texas.gov/page/valverde.Commissioners.Court"
    },
    {
        "name": "Van Zandt County",
        "location": "Canton, TX",
        "courthouse_address": "121 E Dallas St, Canton, TX 75103",
        "website": "http://www.co.van-zandt.tx.us/",
        "appraisal_district_office_address": "121 E Dallas St, Canton, TX 75103",
        "registration_office_address": "121 E Dallas St, Canton, TX 75103",
        "local_municipality": "City of Canton",
        "elected_officials": {
            "County Judge": "Don Kirkpatrick",
            "Sheriff": "Dale Corbett",
            "District Clerk": "Karen Wilson",
            "County Clerk": "Susan Strickland",
            "County Treasurer": "Denise Marks"
        },
        "commissioner_court_minutes": "http://www.co.van-zandt.tx.us/page/vanzandt.Commissioners.Court"
    },
    {
        "name": "Victoria County",
        "location": "Victoria, TX",
        "courthouse_address": "115 N Bridge St, Victoria, TX 77901",
        "website": "http://www.victoriacountytx.org/",
        "appraisal_district_office_address": "115 N Bridge St, Victoria, TX 77901",
        "registration_office_address": "115 N Bridge St, Victoria, TX 77901",
        "local_municipality": "City of Victoria",
        "elected_officials": {
            "County Judge": "Ben Zeller",
            "Sheriff": "T. Michael O'Connor",
            "District Clerk": "Rhonda Symmank",
            "County Clerk": "Dianne L. Carter",
            "County Treasurer": "Stephenie L. Schuetter"
        },
        "commissioner_court_minutes": "http://www.victoriacountytx.org/page/victoria.Commissioners.Court"
    },
    {
        "name": "Walker County",
        "location": "Huntsville, TX",
        "courthouse_address": "1100 University Ave, Huntsville, TX 77340",
        "website": "http://www.co.walker.tx.us/",
        "appraisal_district_office_address": "1100 University Ave, Huntsville, TX 77340",
        "registration_office_address": "1100 University Ave, Huntsville, TX 77340",
        "local_municipality": "City of Huntsville",
        "elected_officials": {
            "County Judge": "Danny Pierce",
            "Sheriff": "Clint McRae",
            "District Clerk": "Randy Barrett",
            "County Clerk": "Kris Fort",
            "County Treasurer": "Stephanie Buchanan"
        },
        "commissioner_court_minutes": "http://www.co.walker.tx.us/page/walker.Commissioners.Court"
    },
    {
        "name": "Waller County",
        "location": "Hempstead, TX",
        "courthouse_address": "836 Austin St, Hempstead, TX 77445",
        "website": "http://www.co.waller.tx.us/",
        "appraisal_district_office_address": "836 Austin St, Hempstead, TX 77445",
        "registration_office_address": "836 Austin St, Hempstead, TX 77445",
        "local_municipality": "City of Hempstead",
        "elected_officials": {
            "County Judge": "Trey Duhon",
            "Sheriff": "R. Glenn Smith",
            "District Clerk": "Debbie Hollan",
            "County Clerk": "Carolee Chesney",
            "County Treasurer": "Elsie Murray"
        },
        "commissioner_court_minutes": "http://www.co.waller.tx.us/page/waller.Commissioners.Court"
    },
    {
        "name": "Ward County",
        "location": "Monahans, TX",
        "courthouse_address": "400 S Allen Ave, Monahans, TX 79756",
        "website": "http://www.co.ward.tx.us/",
        "appraisal_district_office_address": "400 S Allen Ave, Monahans, TX 79756",
        "registration_office_address": "400 S Allen Ave, Monahans, TX 79756",
        "local_municipality": "City of Monahans",
        "elected_officials": {
            "County Judge": "Greg Holly",
            "Sheriff": "M.L. 'Mike' Strickland",
            "District Clerk": "Debra Jenkins",
            "County Clerk": "Jana Sparkman",
            "County Treasurer": "Kim Vines"
        },
        "commissioner_court_minutes": "http://www.co.ward.tx.us/page/ward.Commissioners.Court"
    },
    {
        "name": "Washington County",
        "location": "Brenham, TX",
        "courthouse_address": "100 E Main St, Brenham, TX 77833",
        "website": "http://www.co.washington.tx.us/",
        "appraisal_district_office_address": "100 E Main St, Brenham, TX 77833",
        "registration_office_address": "100 E Main St, Brenham, TX 77833",
        "local_municipality": "City of Brenham",
        "elected_officials": {
            "County Judge": "John Brieden",
            "Sheriff": "Otis Arnold Jr.",
            "District Clerk": "Linda Zwiener",
            "County Clerk": "Beth Rothermel",
            "County Treasurer": "Dora Mendoza"
        },
        "commissioner_court_minutes": "http://www.co.washington.tx.us/page/washington.Commissioners.Court"
    },
    {
        "name": "Webb County",
        "location": "Laredo, TX",
        "courthouse_address": "1000 Houston St, Laredo, TX 78040",
        "website": "http://www.webbcountytx.gov/",
        "appraisal_district_office_address": "1000 Houston St, Laredo, TX 78040",
        "registration_office_address": "1000 Houston St, Laredo, TX 78040",
        "local_municipality": "City of Laredo",
        "elected_officials": {
            "County Judge": "Tano Tijerina",
            "Sheriff": "Martin Cuellar",
            "District Clerk": "Esther Degollado",
            "County Clerk": "Margie Ramirez",
            "County Treasurer": "Delia Peralta"
        },
        "commissioner_court_minutes": "http://www.webbcountytx.gov/page/webb.Commissioners.Court"
    },
    {
        "name": "Wharton County",
        "location": "Wharton, TX",
        "courthouse_address": "100 S Fulton St, Wharton, TX 77488",
        "website": "http://www.co.wharton.tx.us/",
        "appraisal_district_office_address": "100 S Fulton St, Wharton, TX 77488",
        "registration_office_address": "100 S Fulton St, Wharton, TX 77488",
        "local_municipality": "City of Wharton",
        "elected_officials": {
            "County Judge": "Philip Spenrath",
            "Sheriff": "Shannon Srubar",
            "District Clerk": "Joan Remmert",
            "County Clerk": "Jennifer Wylie",
            "County Treasurer": "Nancy Everett"
        },
        "commissioner_court_minutes": "http://www.co.wharton.tx.us/page/wharton.Commissioners.Court"
    },
    {
        "name": "Wheeler County",
        "location": "Wheeler, TX",
        "courthouse_address": "401 Main St, Wheeler, TX 79096",
        "website": "http://www.co.wheeler.tx.us/",
        "appraisal_district_office_address": "401 Main St, Wheeler, TX 79096",
        "registration_office_address": "401 Main St, Wheeler, TX 79096",
        "local_municipality": "City of Wheeler",
        "elected_officials": {
            "County Judge": "Richard Peet",
            "Sheriff": "Michael Ellis",
            "District Clerk": "Glenda Wyatt",
            "County Clerk": "Karen Davis",
            "County Treasurer": "Margaret Mills"
        },
        "commissioner_court_minutes": "http://www.co.wheeler.tx.us/page/wheeler.Commissioners.Court"
    },
    {
        "name": "Wichita County",
        "location": "Wichita Falls, TX",
        "courthouse_address": "900 7th St, Wichita Falls, TX 76301",
        "website": "http://www.co.wichita.tx.us/",
        "appraisal_district_office_address": "900 7th St, Wichita Falls, TX 76301",
        "registration_office_address": "900 7th St, Wichita Falls, TX 76301",
        "local_municipality": "City of Wichita Falls",
        "elected_officials": {
            "County Judge": "Woody Gossom",
            "Sheriff": "David Duke",
            "District Clerk": "Tracy McDaniel",
            "County Clerk": "Lori Bohannon",
            "County Treasurer": "Linda McDaniel"
        },
        "commissioner_court_minutes": "http://www.co.wichita.tx.us/page/wichita.Commissioners.Court"
    },
    {
        "name": "Wilbarger County",
        "location": "Vernon, TX",
        "courthouse_address": "1700 Wilbarger St, Vernon, TX 76384",
        "website": "http://www.co.wilbarger.tx.us/",
        "appraisal_district_office_address": "1700 Wilbarger St, Vernon, TX 76384",
        "registration_office_address": "1700 Wilbarger St, Vernon, TX 76384",
        "local_municipality": "City of Vernon",
        "elected_officials": {
            "County Judge": "Greg Tyra",
            "Sheriff": "Bill Price",
            "District Clerk": "Christine Jones",
            "County Clerk": "Kathryn Spencer",
            "County Treasurer": "Claudia Grantham"
        },
        "commissioner_court_minutes": "http://www.co.wilbarger.tx.us/page/wilbarger.Commissioners.Court"
    },
    {
        "name": "Willacy County",
        "location": "Raymondville, TX",
        "courthouse_address": "576 W Main Ave, Raymondville, TX 78580",
        "website": "http://www.co.willacy.tx.us/",
        "appraisal_district_office_address": "576 W Main Ave, Raymondville, TX 78580",
        "registration_office_address": "576 W Main Ave, Raymondville, TX 78580",
        "local_municipality": "City of Raymondville",
        "elected_officials": {
            "County Judge": "Aurelio Guerra Jr.",
            "Sheriff": "Larry Spence",
            "District Clerk": "Gilbert Lozano",
            "County Clerk": "Annette C. Hinojosa",
            "County Treasurer": "Veronica Gonzalez"
        },
        "commissioner_court_minutes": "http://www.co.willacy.tx.us/page/willacy.Commissioners.Court"
    },
    {
        "name": "Williamson County",
        "location": "Georgetown, TX",
        "courthouse_address": "710 S Main St, Georgetown, TX 78626",
        "website": "http://www.wilco.org/",
        "appraisal_district_office_address": "710 S Main St, Georgetown, TX 78626",
        "registration_office_address": "710 S Main St, Georgetown, TX 78626",
        "local_municipality": "City of Georgetown",
        "elected_officials": {
            "County Judge": "Bill Gravell",
            "Sheriff": "Robert Chody",
            "District Clerk": "Lisa David",
            "County Clerk": "Nancy Rister",
            "County Treasurer": "Jerri Jones"
        },
        "commissioner_court_minutes": "http://www.wilco.org/page/williamson.Commissioners.Court"
    },
    {
        "name": "Wilson County",
        "location": "Floresville, TX",
        "courthouse_address": "1420 3rd St, Floresville, TX 78114",
        "website": "http://www.co.wilson.tx.us/",
        "appraisal_district_office_address": "1420 3rd St, Floresville, TX 78114",
        "registration_office_address": "1420 3rd St, Floresville, TX 78114",
        "local_municipality": "City of Floresville",
        "elected_officials": {
            "County Judge": "Richard L. Jackson",
            "Sheriff": "Joe D. Tackitt Jr.",
            "District Clerk": "Jennifer L. Simpson",
            "County Clerk": "Eva Martinez",
            "County Treasurer": "Ann Pogue"
        },
        "commissioner_court_minutes": "http://www.co.wilson.tx.us/page/wilson.Commissioners.Court"
    },
    {
        "name": "Winkler County",
        "location": "Kermit, TX",
        "courthouse_address": "100 E Winkler St, Kermit, TX 79745",
        "website": "http://www.co.winkler.tx.us/",
        "appraisal_district_office_address": "100 E Winkler St, Kermit, TX 79745",
        "registration_office_address": "100 E Winkler St, Kermit, TX 79745",
        "local_municipality": "City of Kermit",
        "elected_officials": {
            "County Judge": "Charles Wolf",
            "Sheriff": "Darby Taylor",
            "District Clerk": "Bethany Sims",
            "County Clerk": "Sherry Hollander",
            "County Treasurer": "Bethany Brown"
        },
        "commissioner_court_minutes": "http://www.co.winkler.tx.us/page/winkler.Commissioners.Court"
    },
    {
        "name": "Wise County",
        "location": "Decatur, TX",
        "courthouse_address": "101 N Trinity St, Decatur, TX 76234",
        "website": "http://www.co.wise.tx.us/",
        "appraisal_district_office_address": "101 N Trinity St, Decatur, TX 76234",
        "registration_office_address": "101 N Trinity St, Decatur, TX 76234",
        "local_municipality": "City of Decatur",
        "elected_officials": {
            "County Judge": "J.D. Clark",
            "Sheriff": "Lane Akin",
            "District Clerk": "Jennifer Linahan",
            "County Clerk": "Sherry Lemon",
            "County Treasurer": "Katherine Hudson"
        },
        "commissioner_court_minutes": "http://www.co.wise.tx.us/page/wise.Commissioners.Court"
    },
    {
        "name": "Wood County",
        "location": "Quitman, TX",
        "courthouse_address": "100 S Main St, Quitman, TX 75783",
        "website": "http://www.mywoodcounty.com/",
        "appraisal_district_office_address": "100 S Main St, Quitman, TX 75783",
        "registration_office_address": "100 S Main St, Quitman, TX 75783",
        "local_municipality": "City of Quitman",
        "elected_officials": {
            "County Judge": "Lucy Hebron",
            "Sheriff": "Tom Castloo",
            "District Clerk": "Kimberly Golightly",
            "County Clerk": "Kelly Price",
            "County Treasurer": "Sherry Robison"
        },
        "commissioner_court_minutes": "http://www.mywoodcounty.com/page/wood.Commissioners.Court"
    },
    {
        "name": "Yoakum County",
        "location": "Plains, TX",
        "courthouse_address": "412 Cowboy Way, Plains, TX 79355",
        "website": "http://www.co.yoakum.tx.us/",
        "appraisal_district_office_address": "412 Cowboy Way, Plains, TX 79355",
        "registration_office_address": "412 Cowboy Way, Plains, TX 79355",
        "local_municipality": "City of Plains",
        "elected_officials": {
            "County Judge": "Jim Barron",
            "Sheriff": "David Bryant",
            "District Clerk": "Linda Lockridge",
            "County Clerk": "Joyce Long",
            "County Treasurer": "Linda Taylor"
        },
        "commissioner_court_minutes": "http://www.co.yoakum.tx.us/page/yoakum.Commissioners.Court"
    },
    {
        "name": "Young County",
        "location": "Graham, TX",
        "courthouse_address": "516 4th St, Graham, TX 76450",
        "website": "http://www.co.young.tx.us/",
        "appraisal_district_office_address": "516 4th St, Graham, TX 76450",
        "registration_office_address": "516 4th St, Graham, TX 76450",
        "local_municipality": "City of Graham",
        "elected_officials": {
            "County Judge": "John Bullock",
            "Sheriff": "Travis Babcock",
            "District Clerk": "Sherri McBee",
            "County Clerk": "Dee Sechrist",
            "County Treasurer": "Sherri Heine"
        },
        "commissioner_court_minutes": "http://www.co.young.tx.us/page/young.Commissioners.Court"
    },
    {
        "name": "Zapata County",
        "location": "Zapata, TX",
        "courthouse_address": "200 E 7th Ave, Zapata, TX 78076",
        "website": "http://www.co.zapata.tx.us/",
        "appraisal_district_office_address": "200 E 7th Ave, Zapata, TX 78076",
        "registration_office_address": "200 E 7th Ave, Zapata, TX 78076",
        "local_municipality": "City of Zapata",
        "elected_officials": {
            "County Judge": "Joe Rathmell",
            "Sheriff": "Raymundo Del Bosque",
            "District Clerk": "Olga Elizondo",
            "County Clerk": "Olga M. Vela",
            "County Treasurer": "Janie Treviño"
        },
        "commissioner_court_minutes": "http://www.co.zapata.tx.us/page/zapata.Commissioners.Court"
    },
    {
        "name": "Zavala County",
        "location": "Crystal City, TX",
        "courthouse_address": "200 E Uvalde St, Crystal City, TX 78839",
        "website": "http://www.co.zavala.tx.us/",
        "appraisal_district_office_address": "200 E Uvalde St, Crystal City, TX 78839",
        "registration_office_address": "200 E Uvalde St, Crystal City, TX 78839",
        "local_municipality": "City of Crystal City",
        "elected_officials": {
            "County Judge": "Joe Luna",
            "Sheriff": "Efrain Gutierrez",
            "District Clerk": "Cindy Marroquin",
            "County Clerk": "Margarita Alvarez",
            "County Treasurer": "Juan F. Elizondo"
        },
        "commissioner_court_minutes": "http://www.co.zavala.tx.us/page/zavala.Commissioners.Court"
    },
    {
        "name": "Nacogdoches County",
        "location": "Nacogdoches, TX",
        "courthouse_address": "101 W Main St, Nacogdoches, TX 75961",
        "website": "http://www.co.nacogdoches.tx.us/",
        "appraisal_district_office_address": "101 W Main St, Nacogdoches, TX 75961",
        "registration_office_address": "101 W Main St, Nacogdoches, TX 75961",
        "local_municipality": "City of Nacogdoches",
        "elected_officials": {
            "County Judge": "Greg Sowell",
            "Sheriff": "Jason Bridges",
            "District Clerk": "Kim Morton",
            "County Clerk": "Brenda Faire",
            "County Treasurer": "Donna Swann"
        },
        "commissioner_court_minutes": "http://www.co.nacogdoches.tx.us/page/nacogdoches.Commissioners.Court"
    },
    {
        "name": "Navarro County",
        "location": "Corsicana, TX",
        "courthouse_address": "300 W 3rd Ave, Corsicana, TX 75110",
        "website": "http://www.co.navarro.tx.us/",
        "appraisal_district_office_address": "300 W 3rd Ave, Corsicana, TX 75110",
        "registration_office_address": "300 W 3rd Ave, Corsicana, TX 75110",
        "local_municipality": "City of Corsicana",
        "elected_officials": {
            "County Judge": "H.M. Davenport Jr.",
            "Sheriff": "Elmer Tanner",
            "District Clerk": "Gale Grayson",
            "County Clerk": "Shelley Michael",
            "County Treasurer": "Sherry Dowd"
        },
        "commissioner_court_minutes": "http://www.co.navarro.tx.us/page/navarro.Commissioners.Court"
    },
    {
        "name": "Newton County",
        "location": "Newton, TX",
        "courthouse_address": "115 Court St, Newton, TX 75966",
        "website": "http://www.co.newton.tx.us/",
        "appraisal_district_office_address": "115 Court St, Newton, TX 75966",
        "registration_office_address": "115 Court St, Newton, TX 75966",
        "local_municipality": "City of Newton",
        "elected_officials": {
            "County Judge": "Kenneth Weeks",
            "Sheriff": "Billy Rowles",
            "District Clerk": "Carla Springer",
            "County Clerk": "Joyce Wiggins",
            "County Treasurer": "Cindy Peveto"
        },
        "commissioner_court_minutes": "http://www.co.newton.tx.us/page/newton.Commissioners.Court"
    },
    {
        "name": "Nolan County",
        "location": "Sweetwater, TX",
        "courthouse_address": "100 E 3rd St, Sweetwater, TX 79556",
        "website": "http://www.co.nolan.tx.us/",
        "appraisal_district_office_address": "100 E 3rd St, Sweetwater, TX 79556",
        "registration_office_address": "100 E 3rd St, Sweetwater, TX 79556",
        "local_municipality": "City of Sweetwater",
        "elected_officials": {
            "County Judge": "Whitley May",
            "Sheriff": "David Warren",
            "District Clerk": "Jennifer Brunn",
            "County Clerk": "Sharon Powers",
            "County Treasurer": "Erma Stephens"
        },
        "commissioner_court_minutes": "http://www.co.nolan.tx.us/page/nolan.Commissioners.Court"
    },
    {
        "name": "Nueces County",
        "location": "Corpus Christi, TX",
        "courthouse_address": "901 Leopard St, Corpus Christi, TX 78401",
        "website": "http://www.co.nueces.tx.us/",
        "appraisal_district_office_address": "901 Leopard St, Corpus Christi, TX 78401",
        "registration_office_address": "901 Leopard St, Corpus Christi, TX 78401",
        "local_municipality": "City of Corpus Christi",
        "elected_officials": {
            "County Judge": "Barbara Canales",
            "Sheriff": "J.C. Hooper",
            "District Clerk": "Sheri Neal",
            "County Clerk": "Kara Sands",
            "County Treasurer": "Sherry Sturgeon"
        },
        "commissioner_court_minutes": "http://www.co.nueces.tx.us/page/nueces.Commissioners.Court"
    },
    {
        "name": "Ochiltree County",
        "location": "Perryton, TX",
        "courthouse_address": "511 S Main St, Perryton, TX 79070",
        "website": "http://www.co.ochiltree.tx.us/",
        "appraisal_district_office_address": "511 S Main St, Perryton, TX 79070",
        "registration_office_address": "511 S Main St, Perryton, TX 79070",
        "local_municipality": "City of Perryton",
        "elected_officials": {
            "County Judge": "Corky Blake",
            "Sheriff": "Terry Bouchard",
            "District Clerk": "Marla Cook",
            "County Clerk": "Stacy Brown",
            "County Treasurer": "Julie Merritt"
        },
        "commissioner_court_minutes": "http://www.co.ochiltree.tx.us/page/ochiltree.Commissioners.Court"
    },
    {
        "name": "Oldham County",
        "location": "Vega, TX",
        "courthouse_address": "105 S Main St, Vega, TX 79092",
        "website": "http://www.co.oldham.tx.us/",
        "appraisal_district_office_address": "105 S Main St, Vega, TX 79092",
        "registration_office_address": "105 S Main St, Vega, TX 79092",
        "local_municipality": "City of Vega",
        "elected_officials": {
            "County Judge": "Don R. Allred",
            "Sheriff": "David Medlin",
            "District Clerk": "Dara Proffitt",
            "County Clerk": "Christine Hunter",
            "County Treasurer": "Ginger Moore"
        },
        "commissioner_court_minutes": "http://www.co.oldham.tx.us/page/oldham.Commissioners.Court"
    },
    {
        "name": "Orange County",
        "location": "Orange, TX",
        "courthouse_address": "801 W Division Ave, Orange, TX 77630",
        "website": "http://www.co.orange.tx.us/",
        "appraisal_district_office_address": "801 W Division Ave, Orange, TX 77630",
        "registration_office_address": "801 W Division Ave, Orange, TX 77630",
        "local_municipality": "City of Orange",
        "elected_officials": {
            "County Judge": "John Gothia",
            "Sheriff": "Lane Mooney",
            "District Clerk": "Vicki Edgerly",
            "County Clerk": "Brandi Robertson",
            "County Treasurer": "Christie Hulsey"
        },
        "commissioner_court_minutes": "http://www.co.orange.tx.us/page/orange.Commissioners.Court"
    },
    {
        "name": "Palo Pinto County",
        "location": "Palo Pinto, TX",
        "courthouse_address": "520 Oak St, Palo Pinto, TX 76484",
        "website": "http://www.co.palo-pinto.tx.us/",
        "appraisal_district_office_address": "520 Oak St, Palo Pinto, TX 76484",
        "registration_office_address": "520 Oak St, Palo Pinto, TX 76484",
        "local_municipality": "City of Palo Pinto",
        "elected_officials": {
            "County Judge": "Shane Long",
            "Sheriff": "Brett McGuire",
            "District Clerk": "Cindy Owens",
            "County Clerk": "Janette Green",
            "County Treasurer": "Tammy Price"
        },
        "commissioner_court_minutes": "http://www.co.palo-pinto.tx.us/page/palopinto.Commissioners.Court"
    },
    {
        "name": "Panola County",
        "location": "Carthage, TX",
        "courthouse_address": "110 S Sycamore St, Carthage, TX 75633",
        "website": "http://www.co.panola.tx.us/",
        "appraisal_district_office_address": "110 S Sycamore St, Carthage, TX 75633",
        "registration_office_address": "110 S Sycamore St, Carthage, TX 75633",
        "local_municipality": "City of Carthage",
        "elected_officials": {
            "County Judge": "David Anderson",
            "Sheriff": "Kevin Lake",
            "District Clerk": "Deborah Morris",
            "County Clerk": "Joyce Lunsford",
            "County Treasurer": "Phyllis Kennedy"
        },
        "commissioner_court_minutes": "http://www.co.panola.tx.us/page/panola.Commissioners.Court"
    },
    {
        "name": "Parker County",
        "location": "Weatherford, TX",
        "courthouse_address": "1 Courthouse Square, Weatherford, TX 76086",
        "website": "http://www.parkercountytx.com/",
        "appraisal_district_office_address": "1 Courthouse Square, Weatherford, TX 76086",
        "registration_office_address": "1 Courthouse Square, Weatherford, TX 76086",
        "local_municipality": "City of Weatherford",
        "elected_officials": {
            "County Judge": "Pat Deen",
            "Sheriff": "Larry Fowler",
            "District Clerk": "Janice McWilliams",
            "County Clerk": "Janice McWilliams",
            "County Treasurer": "Judy Amador"
        },
        "commissioner_court_minutes": "http://www.parkercountytx.com/page/parker.Commissioners.Court"
    },
    {
        "name": "Parmer County",
        "location": "Farwell, TX",
        "courthouse_address": "401 3rd St, Farwell, TX 79325",
        "website": "http://www.co.parmer.tx.us/",
        "appraisal_district_office_address": "401 3rd St, Farwell, TX 79325",
        "registration_office_address": "401 3rd St, Farwell, TX 79325",
        "local_municipality": "City of Farwell",
        "elected_officials": {
            "County Judge": "Daryll Brantley",
            "Sheriff": "Randy Geries",
            "District Clerk": "Tamara Martinez",
            "County Clerk": "Cynthia Davidson",
            "County Treasurer": "Christie Douglas"
        },
        "commissioner_court_minutes": "http://www.co.parmer.tx.us/page/parmer.Commissioners.Court"
    },
    {
        "name": "Pecos County",
        "location": "Fort Stockton, TX",
        "courthouse_address": "103 W Callaghan St, Fort Stockton, TX 79735",
        "website": "http://www.co.pecos.tx.us/",
        "appraisal_district_office_address": "103 W Callaghan St, Fort Stockton, TX 79735",
        "registration_office_address": "103 W Callaghan St, Fort Stockton, TX 79735",
        "local_municipality": "City of Fort Stockton",
        "elected_officials": {
            "County Judge": "Joe Shuster",
            "Sheriff": "Cliff Harris",
            "District Clerk": "Patricia Kennedy",
            "County Clerk": "Cyndi Ward",
            "County Treasurer": "Linda Clark"
        },
        "commissioner_court_minutes": "http://www.co.pecos.tx.us/page/pecos.Commissioners.Court"
    },
    {
        "name": "Polk County",
        "location": "Livingston, TX",
        "courthouse_address": "101 W Church St, Livingston, TX 77351",
        "website": "http://www.co.polk.tx.us/",
        "appraisal_district_office_address": "101 W Church St, Livingston, TX 77351",
        "registration_office_address": "101 W Church St, Livingston, TX 77351",
        "local_municipality": "City of Livingston",
        "elected_officials": {
            "County Judge": "Sydney Murphy",
            "Sheriff": "Byron Lyons",
            "District Clerk": "Bobbye Richards",
            "County Clerk": "Schelana Hock",
            "County Treasurer": "Nikki Williford"
        },
        "commissioner_court_minutes": "http://www.co.polk.tx.us/page/polk.Commissioners.Court"
    },
    {
        "name": "Potter County",
        "location": "Amarillo, TX",
        "courthouse_address": "500 S Fillmore St, Amarillo, TX 79101",
        "website": "http://www.co.potter.tx.us/",
        "appraisal_district_office_address": "500 S Fillmore St, Amarillo, TX 79101",
        "registration_office_address": "500 S Fillmore St, Amarillo, TX 79101",
        "local_municipality": "City of Amarillo",
        "elected_officials": {
            "County Judge": "Nancy Tanner",
            "Sheriff": "Brian Thomas",
            "District Clerk": "Lori Bohannon",
            "County Clerk": "Julie Smith",
            "County Treasurer": "Robyn Cluke"
        },
        "commissioner_court_minutes": "http://www.co.potter.tx.us/page/potter.Commissioners.Court"
    },
    {
        "name": "Presidio County",
        "location": "Marfa, TX",
        "courthouse_address": "300 Highland St, Marfa, TX 79843",
        "website": "http://www.co.presidio.tx.us/",
        "appraisal_district_office_address": "300 Highland St, Marfa, TX 79843",
        "registration_office_address": "300 Highland St, Marfa, TX 79843",
        "local_municipality": "City of Marfa",
        "elected_officials": {
            "County Judge": "Cinderela Guevara",
            "Sheriff": "Danny Dominguez",
            "District Clerk": "Valeria Castillo",
            "County Clerk": "Linda Sandoval",
            "County Treasurer": "Frances Garcia"
        },
        "commissioner_court_minutes": "http://www.co.presidio.tx.us/page/presidio.Commissioners.Court"
    },
    {
        "name": "Rains County",
        "location": "Emory, TX",
        "courthouse_address": "167 Quitman St, Emory, TX 75440",
        "website": "http://www.co.rains.tx.us/",
        "appraisal_district_office_address": "167 Quitman St, Emory, TX 75440",
        "registration_office_address": "167 Quitman St, Emory, TX 75440",
        "local_municipality": "City of Emory",
        "elected_officials": {
            "County Judge": "Wayne Wolfe",
            "Sheriff": "David Traylor",
            "District Clerk": "Debra Boswell",
            "County Clerk": "Linda Wallace",
            "County Treasurer": "Joanne Bowman"
        },
        "commissioner_court_minutes": "http://www.co.rains.tx.us/page/rains.Commissioners.Court"
    },
    {
        "name": "Randall County",
        "location": "Canyon, TX",
        "courthouse_address": "501 16th St, Canyon, TX 79015",
        "website": "http://www.randallcounty.com/",
        "appraisal_district_office_address": "501 16th St, Canyon, TX 79015",
        "registration_office_address": "501 16th St, Canyon, TX 79015",
        "local_municipality": "City of Canyon",
        "elected_officials": {
            "County Judge": "Ernie Houdashell",
            "Sheriff": "Joel Richardson",
            "District Clerk": "Lori Bohannon",
            "County Clerk": "Renita Kennedy",
            "County Treasurer": "Sherry Smith"
        },
        "commissioner_court_minutes": "http://www.randallcounty.com/page/randall.Commissioners.Court"
    },
    {
        "name": "Reagan County",
        "location": "Big Lake, TX",
        "courthouse_address": "300 N Plaza Ave, Big Lake, TX 76932",
        "website": "http://www.co.reagan.tx.us/",
        "appraisal_district_office_address": "300 N Plaza Ave, Big Lake, TX 76932",
        "registration_office_address": "300 N Plaza Ave, Big Lake, TX 76932",
        "local_municipality": "City of Big Lake",
        "elected_officials": {
            "County Judge": "Jim O'Bryan",
            "Sheriff": "Jeff Garner",
            "District Clerk": "Cathy Estes",
            "County Clerk": "Donna Webb",
            "County Treasurer": "Shannon Poynor"
        },
        "commissioner_court_minutes": "http://www.co.reagan.tx.us/page/reagan.Commissioners.Court"
    },
    {
        "name": "Real County",
        "location": "Leakey, TX",
        "courthouse_address": "146 S US Hwy 83, Leakey, TX 78873",
        "website": "http://www.co.real.tx.us/",
        "appraisal_district_office_address": "146 S US Hwy 83, Leakey, TX 78873",
        "registration_office_address": "146 S US Hwy 83, Leakey, TX 78873",
        "local_municipality": "City of Leakey",
        "elected_officials": {
            "County Judge": "Garry Merritt",
            "Sheriff": "Nathan Johnson",
            "District Clerk": "Belinda Hicks",
            "County Clerk": "Dora Beasley",
            "County Treasurer": "Marla Shepperd"
        },
        "commissioner_court_minutes": "http://www.co.real.tx.us/page/real.Commissioners.Court"
    },
    {
        "name": "Red River County",
        "location": "Clarksville, TX",
        "courthouse_address": "200 N Walnut St, Clarksville, TX 75426",
        "website": "http://www.co.red-river.tx.us/",
        "appraisal_district_office_address": "200 N Walnut St, Clarksville, TX 75426",
        "registration_office_address": "200 N Walnut St, Clarksville, TX 75426",
        "local_municipality": "City of Clarksville",
        "elected_officials": {
            "County Judge": "Lori Beauchamp",
            "Sheriff": "John H. Jones",
            "District Clerk": "Leigh Ann Wright",
            "County Clerk": "Rachel Reynolds",
            "County Treasurer": "Joan Britton"
        },
        "commissioner_court_minutes": "http://www.co.red-river.tx.us/page/redriver.Commissioners.Court"
    },
    {
        "name": "Reeves County",
        "location": "Pecos, TX",
        "courthouse_address": "100 E 4th St, Pecos, TX 79772",
        "website": "http://www.co.reeves.tx.us/",
        "appraisal_district_office_address": "100 E 4th St, Pecos, TX 79772",
        "registration_office_address": "100 E 4th St, Pecos, TX 79772",
        "local_municipality": "City of Pecos",
        "elected_officials": {
            "County Judge": "Leo Hung",
            "Sheriff": "Arturo 'Art' Granado",
            "District Clerk": "Patricia 'Patty' Juarez",
            "County Clerk": "Darlene Brown",
            "County Treasurer": "Linda Clark"
        },
        "commissioner_court_minutes": "http://www.co.reeves.tx.us/page/reeves.Commissioners.Court"
    },
    {
        "name": "Refugio County",
        "location": "Refugio, TX",
        "courthouse_address": "808 Commerce St, Refugio, TX 78377",
        "website": "http://www.co.refugio.tx.us/",
        "appraisal_district_office_address": "808 Commerce St, Refugio, TX 78377",
        "registration_office_address": "808 Commerce St, Refugio, TX 78377",
        "local_municipality": "City of Refugio",
        "elected_officials": {
            "County Judge": "Robert Blaschke",
            "Sheriff": "Pinkie Hall",
            "District Clerk": "Kathryn Terry",
            "County Clerk": "Mary Ann Kocurek",
            "County Treasurer": "Phyllis Woodburn"
        },
        "commissioner_court_minutes": "http://www.co.refugio.tx.us/page/refugio.Commissioners.Court"
    },
    {
        "name": "Roberts County",
        "location": "Miami, TX",
        "courthouse_address": "300 E Commercial St, Miami, TX 79059",
        "website": "http://www.co.roberts.tx.us/",
        "appraisal_district_office_address": "300 E Commercial St, Miami, TX 79059",
        "registration_office_address": "300 E Commercial St, Miami, TX 79059",
        "local_municipality": "City of Miami",
        "elected_officials": {
            "County Judge": "Vance R. Johnson",
            "Sheriff": "Dana Miller",
            "District Clerk": "Sandra Ammons",
            "County Clerk": "Susan Heiskell",
            "County Treasurer": "Barbara Alford"
        },
        "commissioner_court_minutes": "http://www.co.roberts.tx.us/page/roberts.Commissioners.Court"
    },
    {
        "name": "Robertson County",
        "location": "Franklin, TX",
        "courthouse_address": "102 W Decherd St, Franklin, TX 77856",
        "website": "http://www.co.robertson.tx.us/",
        "appraisal_district_office_address": "102 W Decherd St, Franklin, TX 77856",
        "registration_office_address": "102 W Decherd St, Franklin, TX 77856",
        "local_municipality": "City of Franklin",
        "elected_officials": {
            "County Judge": "Charles Ellison",
            "Sheriff": "Gerald Yezak",
            "District Clerk": "Janet Tillotson",
            "County Clerk": "Sharon Gibson",
            "County Treasurer": "Betty Beaty"
        },
        "commissioner_court_minutes": "http://www.co.robertson.tx.us/page/robertson.Commissioners.Court"
    },
    {
        "name": "Rockwall County",
        "location": "Rockwall, TX",
        "courthouse_address": "1111 E Yellowjacket Ln, Rockwall, TX 75087",
        "website": "http://www.rockwallcountytexas.com/",
        "appraisal_district_office_address": "1111 E Yellowjacket Ln, Rockwall, TX 75087",
        "registration_office_address": "1111 E Yellowjacket Ln, Rockwall, TX 75087",
        "local_municipality": "City of Rockwall",
        "elected_officials": {
            "County Judge": "David Sweet",
            "Sheriff": "Terry Garrett",
            "District Clerk": "Shelli Miller",
            "County Clerk": "Jennifer Fogg",
            "County Treasurer": "John M. Pruitt"
        },
        "commissioner_court_minutes": "http://www.rockwallcountytexas.com/page/rockwall.Commissioners.Court"
    },
    {
        "name": "Runnels County",
        "location": "Ballinger, TX",
        "courthouse_address": "613 Hutchings Ave, Ballinger, TX 76821",
        "website": "http://www.co.runnels.tx.us/",
        "appraisal_district_office_address": "613 Hutchings Ave, Ballinger, TX 76821",
        "registration_office_address": "613 Hutchings Ave, Ballinger, TX 76821",
        "local_municipality": "City of Ballinger",
        "elected_officials": {
            "County Judge": "Barry Hilliard",
            "Sheriff": "Carl Squyres",
            "District Clerk": "Connie Grantham",
            "County Clerk": "Lisa Peterson",
            "County Treasurer": "Donna Thompson"
        },
        "commissioner_court_minutes": "http://www.co.runnels.tx.us/page/runnels.Commissioners.Court"
    },
    {
        "name": "Rusk County",
        "location": "Henderson, TX",
        "courthouse_address": "115 N Main St, Henderson, TX 75652",
        "website": "http://www.co.rusk.tx.us/",
        "appraisal_district_office_address": "115 N Main St, Henderson, TX 75652",
        "registration_office_address": "115 N Main St, Henderson, TX 75652",
        "local_municipality": "City of Henderson",
        "elected_officials": {
            "County Judge": "Joel Hale",
            "Sheriff": "Jeff Price",
            "District Clerk": "Kathy Cates",
            "County Clerk": "Terri Boren",
            "County Treasurer": "Renee Bowman"
        },
        "commissioner_court_minutes": "http://www.co.rusk.tx.us/page/rusk.Commissioners.Court"
    },
    {
        "name": "Sabine County",
        "location": "Hemphill, TX",
        "courthouse_address": "201 Main St, Hemphill, TX 75948",
        "website": "http://www.co.sabine.tx.us/",
        "appraisal_district_office_address": "201 Main St, Hemphill, TX 75948",
        "registration_office_address": "201 Main St, Hemphill, TX 75948",
        "local_municipality": "City of Hemphill",
        "elected_officials": {
            "County Judge": "Daryl Melton",
            "Sheriff": "Thomas Maddox",
            "District Clerk": "Mary Kay Wilson",
            "County Clerk": "Diana Wedgeworth",
            "County Treasurer": "Sue Hunt"
        },
        "commissioner_court_minutes": "http://www.co.sabine.tx.us/page/sabine.Commissioners.Court"
    },
    {
        "name": "San Augustine County",
        "location": "San Augustine, TX",
        "courthouse_address": "100 W Columbia St, San Augustine, TX 75972",
        "website": "http://www.co.san-augustine.tx.us/",
        "appraisal_district_office_address": "100 W Columbia St, San Augustine, TX 75972",
        "registration_office_address": "100 W Columbia St, San Augustine, TX 75972",
        "local_municipality": "City of San Augustine",
        "elected_officials": {
            "County Judge": "Jeff Boyd",
            "Sheriff": "Robert Cartwright",
            "District Clerk": "Shirley Gordon",
            "County Clerk": "Shanna Williams",
            "County Treasurer": "Janet White"
        },
        "commissioner_court_minutes": "http://www.co.san-augustine.tx.us/page/sanaugustine.Commissioners.Court"
    },
    {
        "name": "San Jacinto County",
        "location": "Coldspring, TX",
        "courthouse_address": "1 State Hwy 150, Coldspring, TX 77331",
        "website": "http://www.co.san-jacinto.tx.us/",
        "appraisal_district_office_address": "1 State Hwy 150, Coldspring, TX 77331",
        "registration_office_address": "1 State Hwy 150, Coldspring, TX 77331",
        "local_municipality": "City of Coldspring",
        "elected_officials": {
            "County Judge": "John Lovett",
            "Sheriff": "Greg Capers",
            "District Clerk": "Sherry Shedd",
            "County Clerk": "Dawn Wright",
            "County Treasurer": "Karen Lane"
        },
        "commissioner_court_minutes": "http://www.co.san-jacinto.tx.us/page/sanjacinto.Commissioners.Court"
    },
    {
        "name": "San Patricio County",
        "location": "Sinton, TX",
        "courthouse_address": "400 W Sinton St, Sinton, TX 78387",
        "website": "http://www.co.san-patricio.tx.us/",
        "appraisal_district_office_address": "400 W Sinton St, Sinton, TX 78387",
        "registration_office_address": "400 W Sinton St, Sinton, TX 78387",
        "local_municipality": "City of Sinton",
        "elected_officials": {
            "County Judge": "David Krebs",
            "Sheriff": "Oscar Rivera",
            "District Clerk": "Laura Garcia",
            "County Clerk": "Gracie Alaniz-Gonzales",
            "County Treasurer": "Elva L. Flores"
        },
        "commissioner_court_minutes": "http://www.co.san-patricio.tx.us/page/sanpatricio.Commissioners.Court"
    },
    {
        "name": "San Saba County",
        "location": "San Saba, TX",
        "courthouse_address": "500 E Wallace St, San Saba, TX 76877",
        "website": "http://www.co.san-saba.tx.us/",
        "appraisal_district_office_address": "500 E Wallace St, San Saba, TX 76877",
        "registration_office_address": "500 E Wallace St, San Saba, TX 76877",
        "local_municipality": "City of San Saba",
        "elected_officials": {
            "County Judge": "The Honorable Byron Theodosis",
            "Sheriff": "Matthew Boswell",
            "District Clerk": "Sherry Lindsey",
            "County Clerk": "Kimberly Cline",
            "County Treasurer": "Christina Davis"
        },
        "commissioner_court_minutes": "http://www.co.san-saba.tx.us/page/sansaba.Commissioners.Court"
    },
    {
        "name": "Schleicher County",
        "location": "Eldorado, TX",
        "courthouse_address": "2 S Divide St, Eldorado, TX 76936",
        "website": "http://www.co.schleicher.tx.us/",
        "appraisal_district_office_address": "2 S Divide St, Eldorado, TX 76936",
        "registration_office_address": "2 S Divide St, Eldorado, TX 76936",
        "local_municipality": "City of Eldorado",
        "elected_officials": {
            "County Judge": "Charlie Bradley",
            "Sheriff": "David Doran",
            "District Clerk": "Nicole Robbins",
            "County Clerk": "Brenda Robinett",
            "County Treasurer": "Sylvia Witt"
        },
        "commissioner_court_minutes": "http://www.co.schleicher.tx.us/page/schleicher.Commissioners.Court"
    },
    {
        "name": "Scurry County",
        "location": "Snyder, TX",
        "courthouse_address": "1806 25th St, Snyder, TX 79549",
        "website": "http://www.co.scurry.tx.us/",
        "appraisal_district_office_address": "1806 25th St, Snyder, TX 79549",
        "registration_office_address": "1806 25th St, Snyder, TX 79549",
        "local_municipality": "City of Snyder",
        "elected_officials": {
            "County Judge": "Ricky Fritz",
            "Sheriff": "Daryl Wright",
            "District Clerk": "Deanna Holbert",
            "County Clerk": "Debbie Lambert",
            "County Treasurer": "Melissa Mowry"
        },
        "commissioner_court_minutes": "http://www.co.scurry.tx.us/page/scurry.Commissioners.Court"
    },
    {
        "name": "Shackelford County",
        "location": "Albany, TX",
        "courthouse_address": "225 S Main St, Albany, TX 76430",
        "website": "http://www.co.shackelford.tx.us/",
        "appraisal_district_office_address": "225 S Main St, Albany, TX 76430",
        "registration_office_address": "225 S Main St, Albany, TX 76430",
        "local_municipality": "City of Albany",
        "elected_officials": {
            "County Judge": "Charles Wagner",
            "Sheriff": "Edward 'Ed' Miller",
            "District Clerk": "Jennifer T. Thompson",
            "County Clerk": "Courtney Phillips",
            "County Treasurer": "Travis Balliew"
        },
        "commissioner_court_minutes": "http://www.co.shackelford.tx.us/page/shackelford.Commissioners.Court"
    },
    {
        "name": "Shelby County",
        "location": "Center, TX",
        "courthouse_address": "200 San Augustine St, Center, TX 75935",
        "website": "http://www.co.shelby.tx.us/",
        "appraisal_district_office_address": "200 San Augustine St, Center, TX 75935",
        "registration_office_address": "200 San Augustine St, Center, TX 75935",
        "local_municipality": "City of Center",
        "elected_officials": {
            "County Judge": "Allison Harbison",
            "Sheriff": "Kevin Windham",
            "District Clerk": "Lori Oliver",
            "County Clerk": "Jennifer Fountain",
            "County Treasurer": "Ann Blackwell"
        },
        "commissioner_court_minutes": "http://www.co.shelby.tx.us/page/shelby.Commissioners.Court"
    },
    {
        "name": "Sherman County",
        "location": "Stratford, TX",
        "courthouse_address": "701 N 3rd St, Stratford, TX 79084",
        "website": "http://www.co.sherman.tx.us/",
        "appraisal_district_office_address": "701 N 3rd St, Stratford, TX 79084",
        "registration_office_address": "701 N 3rd St, Stratford, TX 79084",
        "local_municipality": "City of Stratford",
        "elected_officials": {
            "County Judge": "Benjie B. Edwards",
            "Sheriff": "Ted Allen",
            "District Clerk": "Darla Henson",
            "County Clerk": "Laura Rogers",
            "County Treasurer": "Jeanie Fawver"
        },
        "commissioner_court_minutes": "http://www.co.sherman.tx.us/page/sherman.Commissioners.Court"
    },
    {
        "name": "Smith County",
        "location": "Tyler, TX",
        "courthouse_address": "100 N Broadway Ave, Tyler, TX 75702",
        "website": "http://www.smith-county.com/",
        "appraisal_district_office_address": "100 N Broadway Ave, Tyler, TX 75702",
        "registration_office_address": "100 N Broadway Ave, Tyler, TX 75702",
        "local_municipality": "City of Tyler",
        "elected_officials": {
            "County Judge": "Nathaniel Moran",
            "Sheriff": "Larry Smith",
            "District Clerk": "Lois Rogers",
            "County Clerk": "Karen Phillips",
            "County Treasurer": "Kelli Weatherford"
        },
        "commissioner_court_minutes": "http://www.smith-county.com/page/smith.Commissioners.Court"
    },
    {
        "name": "Somervell County",
        "location": "Glen Rose, TX",
        "courthouse_address": "107 NE Vernon St, Glen Rose, TX 76043",
        "website": "http://www.co.somervell.tx.us/",
        "appraisal_district_office_address": "107 NE Vernon St, Glen Rose, TX 76043",
        "registration_office_address": "107 NE Vernon St, Glen Rose, TX 76043",
        "local_municipality": "City of Glen Rose",
        "elected_officials": {
            "County Judge": "Danny Chambers",
            "Sheriff": "Alan West",
            "District Clerk": "Patricia Boase",
            "County Clerk": "Shelley Birdsong",
            "County Treasurer": "Gayla Moxley"
        },
        "commissioner_court_minutes": "http://www.co.somervell.tx.us/page/somervell.Commissioners.Court"
    },
    {
        "name": "Starr County",
        "location": "Rio Grande City, TX",
        "courthouse_address": "401 N Britton Ave, Rio Grande City, TX 78582",
        "website": "http://www.co.starr.tx.us/",
        "appraisal_district_office_address": "401 N Britton Ave, Rio Grande City, TX 78582",
        "registration_office_address": "401 N Britton Ave, Rio Grande City, TX 78582",
        "local_municipality": "City of Rio Grande City",
        "elected_officials": {
            "County Judge": "Eloy Vera",
            "Sheriff": "Rene Fuentes",
            "District Clerk": "Carlos Villareal",
            "County Clerk": "Omar Escobar",
            "County Treasurer": "Loyda Garza"
        },
        "commissioner_court_minutes": "http://www.co.starr.tx.us/page/starr.Commissioners.Court"
    },
    {
        "name": "Stephens County",
        "location": "Breckenridge, TX",
        "courthouse_address": "200 W Walker St, Breckenridge, TX 76424",
        "website": "http://www.co.stephens.tx.us/",
        "appraisal_district_office_address": "200 W Walker St, Breckenridge, TX 76424",
        "registration_office_address": "200 W Walker St, Breckenridge, TX 76424",
        "local_municipality": "City of Breckenridge",
        "elected_officials": {
            "County Judge": "Michael Roach",
            "Sheriff": "Will Holt",
            "District Clerk": "Jennifer Powell",
            "County Clerk": "Jackie Ensey",
            "County Treasurer": "Stephanie Rodriguez"
        },
        "commissioner_court_minutes": "http://www.co.stephens.tx.us/page/stephens.Commissioners.Court"
    },
    {
        "name": "Sterling County",
        "location": "Sterling City, TX",
        "courthouse_address": "300 4th St, Sterling City, TX 76951",
        "website": "http://www.co.sterling.tx.us/",
        "appraisal_district_office_address": "300 4th St, Sterling City, TX 76951",
        "registration_office_address": "300 4th St, Sterling City, TX 76951",
        "local_municipality": "City of Sterling City",
        "elected_officials": {
            "County Judge": "Charles Ben David",
            "Sheriff": "Tim Pigg",
            "District Clerk": "Kelly French",
            "County Clerk": "Michelle French",
            "County Treasurer": "Kelly Ellis"
        },
        "commissioner_court_minutes": "http://www.co.sterling.tx.us/page/sterling.Commissioners.Court"
    },
    {
        "name": "Stonewall County",
        "location": "Aspermont, TX",
        "courthouse_address": "128 Town Square Ln, Aspermont, TX 79502",
        "website": "http://www.co.stonewall.tx.us/",
        "appraisal_district_office_address": "128 Town Square Ln, Aspermont, TX 79502",
        "registration_office_address": "128 Town Square Ln, Aspermont, TX 79502",
        "local_municipality": "City of Aspermont",
        "elected_officials": {
            "County Judge": "Ronnie C. Karr",
            "Sheriff": "Michael Lange",
            "District Clerk": "Shirley Davis",
            "County Clerk": "Rhonda Ware",
            "County Treasurer": "Marty McGinty"
        },
        "commissioner_court_minutes": "http://www.co.stonewall.tx.us/page/stonewall.Commissioners.Court"
    },
    {
        "name": "Sutton County",
        "location": "Sonora, TX",
        "courthouse_address": "300 E Oak St, Sonora, TX 76950",
        "website": "http://www.co.sutton.tx.us/",
        "appraisal_district_office_address": "300 E Oak St, Sonora, TX 76950",
        "registration_office_address": "300 E Oak St, Sonora, TX 76950",
        "local_municipality": "City of Sonora",
        "elected_officials": {
            "County Judge": "Steven Smith",
            "Sheriff": "Oscar Rivera",
            "District Clerk": "Darla Aguilar",
            "County Clerk": "Peggy Gonzalez",
            "County Treasurer": "Susie Thompson"
        },
        "commissioner_court_minutes": "http://www.co.sutton.tx.us/page/sutton.Commissioners.Court"
    },
    {
        "name": "Swisher County",
        "location": "Tulia, TX",
        "courthouse_address": "119 S Maxwell Ave, Tulia, TX 79088",
        "website": "http://www.co.swisher.tx.us/",
        "appraisal_district_office_address": "119 S Maxwell Ave, Tulia, TX 79088",
        "registration_office_address": "119 S Maxwell Ave, Tulia, TX 79088",
        "local_municipality": "City of Tulia",
        "elected_officials": {
            "County Judge": "Harold Keeter",
            "Sheriff": "Roger Hooker",
            "District Clerk": "Brenda Hudson",
            "County Clerk": "Emalee Hart",
            "County Treasurer": "Kay Hunter"
        },
        "commissioner_court_minutes": "http://www.co.swisher.tx.us/page/swisher.Commissioners.Court"
    },
    {
        "name": "Tarrant County",
        "location": "Fort Worth, TX",
        "courthouse_address": "100 E Weatherford St, Fort Worth, TX 76196",
        "website": "http://www.tarrantcounty.com/",
        "appraisal_district_office_address": "100 E Weatherford St, Fort Worth, TX 76196",
        "registration_office_address": "100 E Weatherford St, Fort Worth, TX 76196",
        "local_municipality": "City of Fort Worth",
        "elected_officials": {
            "County Judge": "Glen Whitley",
            "Sheriff": "Bill Waybourn",
            "District Clerk": "Tom Wilder",
            "County Clerk": "Mary Louise Nicholson",
            "County Treasurer": "Ron Wright"
        },
        "commissioner_court_minutes": "http://www.tarrantcounty.com/page/tarrant.Commissioners.Court"
    },
    {
        "name": "Taylor County",
        "location": "Abilene, TX",
        "courthouse_address": "300 Oak St, Abilene, TX 79602",
        "website": "http://www.co.taylor.tx.us/",
        "appraisal_district_office_address": "300 Oak St, Abilene, TX 79602",
        "registration_office_address": "300 Oak St, Abilene, TX 79602",
        "local_municipality": "City of Abilene",
        "elected_officials": {
            "County Judge": "Downing Bolls",
            "Sheriff": "Ricky Bishop",
            "District Clerk": "Lona Tipton",
            "County Clerk": "Larry G. Bevill",
            "County Treasurer": "Donald Layton"
        },
        "commissioner_court_minutes": "http://www.co.taylor.tx.us/page/taylor.Commissioners.Court"
    },
    {
        "name": "Terrell County",
        "location": "Sanderson, TX",
        "courthouse_address": "105 E Hackberry St, Sanderson, TX 79848",
        "website": "http://www.co.terrell.tx.us/",
        "appraisal_district_office_address": "105 E Hackberry St, Sanderson, TX 79848",
        "registration_office_address": "105 E Hackberry St, Sanderson, TX 79848",
        "local_municipality": "City of Sanderson",
        "elected_officials": {
            "County Judge": "Dale Carruthers",
            "Sheriff": "Keith Hughes",
            "District Clerk": "Margie Singleton",
            "County Clerk": "Kathy Watts",
            "County Treasurer": "Pat Hughes"
        },
        "commissioner_court_minutes": "http://www.co.terrell.tx.us/page/terrell.Commissioners.Court"
    },
    {
        "name": "Terry County",
        "location": "Brownfield, TX",
        "courthouse_address": "500 W Main St, Brownfield, TX 79316",
        "website": "http://www.co.terry.tx.us/",
        "appraisal_district_office_address": "500 W Main St, Brownfield, TX 79316",
        "registration_office_address": "500 W Main St, Brownfield, TX 79316",
        "local_municipality": "City of Brownfield",
        "elected_officials": {
            "County Judge": "J.D. Wagner",
            "Sheriff": "Larry Gilbreath",
            "District Clerk": "Sue Poff",
            "County Clerk": "Kim Carter",
            "County Treasurer": "Judy Burdine"
        },
        "commissioner_court_minutes": "http://www.co.terry.tx.us/page/terry.Commissioners.Court"
    },
    {
        "name": "Throckmorton County",
        "location": "Throckmorton, TX",
        "courthouse_address": "105 N Minter Ave, Throckmorton, TX 76483",
        "website": "http://www.co.throckmorton.tx.us/",
        "appraisal_district_office_address": "105 N Minter Ave, Throckmorton, TX 76483",
        "registration_office_address": "105 N Minter Ave, Throckmorton, TX 76483",
        "local_municipality": "City of Throckmorton",
        "elected_officials": {
            "County Judge": "Billy Thomas",
            "Sheriff": "Brandon Brown",
            "District Clerk": "Linda Benham",
            "County Clerk": "Debra Goff",
            "County Treasurer": "Karen Scobee"
        },
        "commissioner_court_minutes": "http://www.co.throckmorton.tx.us/page/throckmorton.Commissioners.Court"
    },
    {
        "name": "Titus County",
        "location": "Mount Pleasant, TX",
        "courthouse_address": "100 W 1st St, Mount Pleasant, TX 75455",
        "website": "http://www.co.titus.tx.us/",
        "appraisal_district_office_address": "100 W 1st St, Mount Pleasant, TX 75455",
        "registration_office_address": "100 W 1st St, Mount Pleasant, TX 75455",
        "local_municipality": "City of Mount Pleasant",
        "elected_officials": {
            "County Judge": "Brian Lee",
            "Sheriff": "Tim Ingram",
            "District Clerk": "Shannon Fleming",
            "County Clerk": "Kim Jones",
            "County Treasurer": "Crystal Young"
        },
        "commissioner_court_minutes": "http://www.co.titus.tx.us/page/titus.Commissioners.Court"
    },
    {
        "name": "Tom Green County",
        "location": "San Angelo, TX",
        "courthouse_address": "124 W Beauregard Ave, San Angelo, TX 76903",
        "website": "http://www.co.tom-green.tx.us/",
        "appraisal_district_office_address": "124 W Beauregard Ave, San Angelo, TX 76903",
        "registration_office_address": "124 W Beauregard Ave, San Angelo, TX 76903",
        "local_municipality": "City of San Angelo",
        "elected_officials": {
            "County Judge": "Steve Floyd",
            "Sheriff": "David Jones",
            "District Clerk": "Shirley Matlock",
            "County Clerk": "Elizabeth McGill",
            "County Treasurer": "Diana Spieker"
        },
        "commissioner_court_minutes": "http://www.co.tom-green.tx.us/page/tomgreen.Commissioners.Court"
    },
    {
        "name": "Travis County",
        "location": "Austin, TX",
        "courthouse_address": "700 Lavaca St, Austin, TX 78701",
        "website": "http://www.traviscountytx.gov/",
        "appraisal_district_office_address": "700 Lavaca St, Austin, TX 78701",
        "registration_office_address": "700 Lavaca St, Austin, TX 78701",
        "local_municipality": "City of Austin",
        "elected_officials": {
            "County Judge": "Andy Brown",
            "Sheriff": "Sally Hernandez",
            "District Clerk": "Velva Price",
            "County Clerk": "Dana DeBeauvoir",
            "County Treasurer": "Dolores Ortega"
        },
        "commissioner_court_minutes": "http://www.traviscountytx.gov/page/travis.Commissioners.Court"
    },
    {
        "name": "Trinity County",
        "location": "Groveton, TX",
        "courthouse_address": "162 W 1st St, Groveton, TX 75845",
        "website": "http://www.co.trinity.tx.us/",
        "appraisal_district_office_address": "162 W 1st St, Groveton, TX 75845",
        "registration_office_address": "162 W 1st St, Groveton, TX 75845",
        "local_municipality": "City of Groveton",
        "elected_officials": {
            "County Judge": "Doug Page",
            "Sheriff": "Woody Wallace",
            "District Clerk": "Tara Walton",
            "County Clerk": "Amy Maddox",
            "County Treasurer": "Janet Carr"
        },
        "commissioner_court_minutes": "http://www.co.trinity.tx.us/page/trinity.Commissioners.Court"
    },
    {
        "name": "Tyler County",
        "location": "Woodville, TX",
        "courthouse_address": "100 W Bluff St, Woodville, TX 75979",
        "website": "http://www.co.tyler.tx.us/",
        "appraisal_district_office_address": "100 W Bluff St, Woodville, TX 75979",
        "registration_office_address": "100 W Bluff St, Woodville, TX 75979",
        "local_municipality": "City of Woodville",
        "elected_officials": {
            "County Judge": "Jacque Blanchette",
            "Sheriff": "Bryan Weatherford",
            "District Clerk": "Dawn Grimes",
            "County Clerk": "Joyce Young",
            "County Treasurer": "Sue Saunders"
        },
        "commissioner_court_minutes": "http://www.co.tyler.tx.us/page/tyler.Commissioners.Court"
    },
    {
        "name": "Upshur County",
        "location": "Gilmer, TX",
        "courthouse_address": "100 Tyler St, Gilmer, TX 75644",
        "website": "http://www.countyofupshur.com/",
        "appraisal_district_office_address": "100 Tyler St, Gilmer, TX 75644",
        "registration_office_address": "100 Tyler St, Gilmer, TX 75644",
        "local_municipality": "City of Gilmer",
        "elected_officials": {
            "County Judge": "Todd Tefteller",
            "Sheriff": "Larry Webb",
            "District Clerk": "Karen Bunn",
            "County Clerk": "Terri Ross",
            "County Treasurer": "Melva Todd"
        },
        "commissioner_court_minutes": "http://www.countyofupshur.com/page/upshur.Commissioners.Court"
    },
    {
        "name": "Upton County",
        "location": "Rankin, TX",
        "courthouse_address": "205 E 10th St, Rankin, TX 79778",
        "website": "http://www.co.upton.tx.us/",
        "appraisal_district_office_address": "205 E 10th St, Rankin, TX 79778",
        "registration_office_address": "205 E 10th St, Rankin, TX 79778",
        "local_municipality": "City of Rankin",
        "elected_officials": {
            "County Judge": "Dusty Kilgore",
            "Sheriff": "Dan Brown",
            "District Clerk": "Sharon Douglas",
            "County Clerk": "Tami Collins",
            "County Treasurer": "Terry Roberts"
        },
        "commissioner_court_minutes": "http://www.co.upton.tx.us/page/upton.Commissioners.Court"
    },
    {
        "name": "Uvalde County",
        "location": "Uvalde, TX",
        "courthouse_address": "100 N Getty St, Uvalde, TX 78801",
        "website": "http://www.uvaldecounty.com/",
        "appraisal_district_office_address": "100 N Getty St, Uvalde, TX 78801",
        "registration_office_address": "100 N Getty St, Uvalde, TX 78801",
        "local_municipality": "City of Uvalde",
        "elected_officials": {
            "County Judge": "William R. Mitchell",
            "Sheriff": "Charles Mendeke",
            "District Clerk": "Eloy Cano",
            "County Clerk": "Donna Murr",
            "County Treasurer": "Annette Born"
        },
        "commissioner_court_minutes": "http://www.uvaldecounty.com/page/uvalde.Commissioners.Court"
    },
    {
        "name": "Val Verde County",
        "location": "Del Rio, TX",
        "courthouse_address": "400 Pecan St, Del Rio, TX 78840",
        "website": "http://www.valverdecounty.texas.gov/",
        "appraisal_district_office_address": "400 Pecan St, Del Rio, TX 78840",
        "registration_office_address": "400 Pecan St, Del Rio, TX 78840",
        "local_municipality": "City of Del Rio",
        "elected_officials": {
            "County Judge": "Lewis G. Owens Jr.",
            "Sheriff": "Joe Frank Martinez",
            "District Clerk": "Lisa D. Gonzales",
            "County Clerk": "Generosa Gracia",
            "County Treasurer": "Lorenza Martinez"
        },
        "commissioner_court_minutes": "http://www.valverdecounty.texas.gov/page/valverde.Commissioners.Court"
    },
    {
        "name": "Van Zandt County",
        "location": "Canton, TX",
        "courthouse_address": "121 E Dallas St, Canton, TX 75103",
        "website": "http://www.co.van-zandt.tx.us/",
        "appraisal_district_office_address": "121 E Dallas St, Canton, TX 75103",
        "registration_office_address": "121 E Dallas St, Canton, TX 75103",
        "local_municipality": "City of Canton",
        "elected_officials": {
            "County Judge": "Don Kirkpatrick",
            "Sheriff": "Dale Corbett",
            "District Clerk": "Karen Wilson",
            "County Clerk": "Susan Strickland",
            "County Treasurer": "Denise Marks"
        },
        "commissioner_court_minutes": "http://www.co.van-zandt.tx.us/page/vanzandt.Commissioners.Court"
    },
    {
        "name": "Victoria County",
        "location": "Victoria, TX",
        "courthouse_address": "115 N Bridge St, Victoria, TX 77901",
        "website": "http://www.victoriacountytx.org/",
        "appraisal_district_office_address": "115 N Bridge St, Victoria, TX 77901",
        "registration_office_address": "115 N Bridge St, Victoria, TX 77901",
        "local_municipality": "City of Victoria",
        "elected_officials": {
            "County Judge": "Ben Zeller",
            "Sheriff": "T. Michael O'Connor",
            "District Clerk": "Rhonda Symmank",
            "County Clerk": "Dianne L. Carter",
            "County Treasurer": "Stephenie L. Schuetter"
        },
        "commissioner_court_minutes": "http://www.victoriacountytx.org/page/victoria.Commissioners.Court"
    },
    {
        "name": "Walker County",
        "location": "Huntsville, TX",
        "courthouse_address": "1100 University Ave, Huntsville, TX 77340",
        "website": "http://www.co.walker.tx.us/",
        "appraisal_district_office_address": "1100 University Ave, Huntsville, TX 77340",
        "registration_office_address": "1100 University Ave, Huntsville, TX 77340",
        "local_municipality": "City of Huntsville",
        "elected_officials": {
            "County Judge": "Danny Pierce",
            "Sheriff": "Clint McRae",
            "District Clerk": "Randy Barrett",
            "County Clerk": "Kris Fort",
            "County Treasurer": "Stephanie Buchanan"
        },
        "commissioner_court_minutes": "http://www.co.walker.tx.us/page/walker.Commissioners.Court"
    },
    {
        "name": "Waller County",
        "location": "Hempstead, TX",
        "courthouse_address": "836 Austin St, Hempstead, TX 77445",
        "website": "http://www.co.waller.tx.us/",
        "appraisal_district_office_address": "836 Austin St, Hempstead, TX 77445",
        "registration_office_address": "836 Austin St, Hempstead, TX 77445",
        "local_municipality": "City of Hempstead",
        "elected_officials": {
            "County Judge": "Trey Duhon",
            "Sheriff": "R. Glenn Smith",
            "District Clerk": "Debbie Hollan",
            "County Clerk": "Carolee Chesney",
            "County Treasurer": "Elsie Murray"
        },
        "commissioner_court_minutes": "http://www.co.waller.tx.us/page/waller.Commissioners.Court"
    },
    {
        "name": "Ward County",
        "location": "Monahans, TX",
        "courthouse_address": "400 S Allen Ave, Monahans, TX 79756",
        "website": "http://www.co.ward.tx.us/",
        "appraisal_district_office_address": "400 S Allen Ave, Monahans, TX 79756",
        "registration_office_address": "400 S Allen Ave, Monahans, TX 79756",
        "local_municipality": "City of Monahans",
        "elected_officials": {
            "County Judge": "Greg Holly",
            "Sheriff": "M.L. 'Mike' Strickland",
            "District Clerk": "Debra Jenkins",
            "County Clerk": "Jana Sparkman",
            "County Treasurer": "Kim Vines"
        },
        "commissioner_court_minutes": "http://www.co.ward.tx.us/page/ward.Commissioners.Court"
    },
    {
        "name": "Washington County",
        "location": "Brenham, TX",
        "courthouse_address": "100 E Main St, Brenham, TX 77833",
        "website": "http://www.co.washington.tx.us/",
        "appraisal_district_office_address": "100 E Main St, Brenham, TX 77833",
        "registration_office_address": "100 E Main St, Brenham, TX 77833",
        "local_municipality": "City of Brenham",
        "elected_officials": {
            "County Judge": "John Brieden",
            "Sheriff": "Otis Arnold Jr.",
            "District Clerk": "Linda Zwiener",
            "County Clerk": "Beth Rothermel",
            "County Treasurer": "Dora Mendoza"
        },
        "commissioner_court_minutes": "http://www.co.washington.tx.us/page/washington.Commissioners.Court"
    },
    {
        "name": "Webb County",
        "location": "Laredo, TX",
        "courthouse_address": "1000 Houston St, Laredo, TX 78040",
        "website": "http://www.webbcountytx.gov/",
        "appraisal_district_office_address": "1000 Houston St, Laredo, TX 78040",
        "registration_office_address": "1000 Houston St, Laredo, TX 78040",
        "local_municipality": "City of Laredo",
        "elected_officials": {
            "County Judge": "Tano Tijerina",
            "Sheriff": "Martin Cuellar",
            "District Clerk": "Esther Degollado",
            "County Clerk": "Margie Ramirez",
            "County Treasurer": "Delia Peralta"
        },
        "commissioner_court_minutes": "http://www.webbcountytx.gov/page/webb.Commissioners.Court"
    },
    {
        "name": "Wharton County",
        "location": "Wharton, TX",
        "courthouse_address": "100 S Fulton St, Wharton, TX 77488",
        "website": "http://www.co.wharton.tx.us/",
        "appraisal_district_office_address": "100 S Fulton St, Wharton, TX 77488",
        "registration_office_address": "100 S Fulton St, Wharton, TX 77488",
        "local_municipality": "City of Wharton",
        "elected_officials": {
            "County Judge": "Philip Spenrath",
            "Sheriff": "Shannon Srubar",
            "District Clerk": "Joan Remmert",
            "County Clerk": "Jennifer Wylie",
            "County Treasurer": "Nancy Everett"
        },
        "commissioner_court_minutes": "http://www.co.wharton.tx.us/page/wharton.Commissioners.Court"
    },
    {
        "name": "Wheeler County",
        "location": "Wheeler, TX",
        "courthouse_address": "401 Main St, Wheeler, TX 79096",
        "website": "http://www.co.wheeler.tx.us/",
        "appraisal_district_office_address": "401 Main St, Wheeler, TX 79096",
        "registration_office_address": "401 Main St, Wheeler, TX 79096",
        "local_municipality": "City of Wheeler",
        "elected_officials": {
            "County Judge": "Richard Peet",
            "Sheriff": "Michael Ellis",
            "District Clerk": "Glenda Wyatt",
            "County Clerk": "Karen Davis",
            "County Treasurer": "Margaret Mills"
        },
        "commissioner_court_minutes": "http://www.co.wheeler.tx.us/page/wheeler.Commissioners.Court"
    },
    {
        "name": "Wichita County",
        "location": "Wichita Falls, TX",
        "courthouse_address": "900 7th St, Wichita Falls, TX 76301",
        "website": "http://www.co.wichita.tx.us/",
        "appraisal_district_office_address": "900 7th St, Wichita Falls, TX 76301",
        "registration_office_address": "900 7th St, Wichita Falls, TX 76301",
        "local_municipality": "City of Wichita Falls",
        "elected_officials": {
            "County Judge": "Woody Gossom",
            "Sheriff": "David Duke",
            "District Clerk": "Tracy McDaniel",
            "County Clerk": "Lori Bohannon",
            "County Treasurer": "Linda McDaniel"
        },
        "commissioner_court_minutes": "http://www.co.wichita.tx.us/page/wichita.Commissioners.Court"
    },
    {
        "name": "Wilbarger County",
        "location": "Vernon, TX",
        "courthouse_address": "1700 Wilbarger St, Vernon, TX 76384",
        "website": "http://www.co.wilbarger.tx.us/",
        "appraisal_district_office_address": "1700 Wilbarger St, Vernon, TX 76384",
        "registration_office_address": "1700 Wilbarger St, Vernon, TX 76384",
        "local_municipality": "City of Vernon",
        "elected_officials": {
            "County Judge": "Greg Tyra",
            "Sheriff": "Bill Price",
            "District Clerk": "Christine Jones",
            "County Clerk": "Kathryn Spencer",
            "County Treasurer": "Claudia Grantham"
        },
        "commissioner_court_minutes": "http://www.co.wilbarger.tx.us/page/wilbarger.Commissioners.Court"
    },
    {
        "name": "Willacy County",
        "location": "Raymondville, TX",
        "courthouse_address": "576 W Main Ave, Raymondville, TX 78580",
        "website": "http://www.co.willacy.tx.us/",
        "appraisal_district_office_address": "576 W Main Ave, Raymondville, TX 78580",
        "registration_office_address": "576 W Main Ave, Raymondville, TX 78580",
        "local_municipality": "City of Raymondville",
        "elected_officials": {
            "County Judge": "Aurelio Guerra Jr.",
            "Sheriff": "Larry Spence",
            "District Clerk": "Gilbert Lozano",
            "County Clerk": "Annette C. Hinojosa",
            "County Treasurer": "Veronica Gonzalez"
        },
        "commissioner_court_minutes": "http://www.co.willacy.tx.us/page/willacy.Commissioners.Court"
    },
    {
        "name": "Williamson County",
        "location": "Georgetown, TX",
        "courthouse_address": "710 S Main St, Georgetown, TX 78626",
        "website": "http://www.wilco.org/",
        "appraisal_district_office_address": "710 S Main St, Georgetown, TX 78626",
        "registration_office_address": "710 S Main St, Georgetown, TX 78626",
        "local_municipality": "City of Georgetown",
        "elected_officials": {
            "County Judge": "Bill Gravell",
            "Sheriff": "Robert Chody",
            "District Clerk": "Lisa David",
            "County Clerk": "Nancy Rister",
            "County Treasurer": "Jerri Jones"
        },
        "commissioner_court_minutes": "http://www.wilco.org/page/williamson.Commissioners.Court"
    },
    {
        "name": "Wilson County",
        "location": "Floresville, TX",
        "courthouse_address": "1420 3rd St, Floresville, TX 78114",
        "website": "http://www.co.wilson.tx.us/",
        "appraisal_district_office_address": "1420 3rd St, Floresville, TX 78114",
        "registration_office_address": "1420 3rd St, Floresville, TX 78114",
        "local_municipality": "City of Floresville",
        "elected_officials": {
            "County Judge": "Richard L. Jackson",
            "Sheriff": "Joe D. Tackitt Jr.",
            "District Clerk": "Jennifer L. Simpson",
            "County Clerk": "Eva Martinez",
            "County Treasurer": "Ann Pogue"
        },
        "commissioner_court_minutes": "http://www.co.wilson.tx.us/page/wilson.Commissioners.Court"
    },
    {
        "name": "Winkler County",
        "location": "Kermit, TX",
        "courthouse_address": "100 E Winkler St, Kermit, TX 79745",
        "website": "http://www.co.winkler.tx.us/",
        "appraisal_district_office_address": "100 E Winkler St, Kermit, TX 79745",
        "registration_office_address": "100 E Winkler St, Kermit, TX 79745",
        "local_municipality": "City of Kermit",
        "elected_officials": {
            "County Judge": "Charles Wolf",
            "Sheriff": "Darby Taylor",
            "District Clerk": "Bethany Sims",
            "County Clerk": "Sherry Hollander",
            "County Treasurer": "Bethany Brown"
        },
        "commissioner_court_minutes": "http://www.co.winkler.tx.us/page/winkler.Commissioners.Court"
    },
    {
        "name": "Wise County",
        "location": "Decatur, TX",
        "courthouse_address": "101 N Trinity St, Decatur, TX 76234",
        "website": "http://www.co.wise.tx.us/",
        "appraisal_district_office_address": "101 N Trinity St, Decatur, TX 76234",
        "registration_office_address": "101 N Trinity St, Decatur, TX 76234",
        "local_municipality": "City of Decatur",
        "elected_officials": {
            "County Judge": "J.D. Clark",
            "Sheriff": "Lane Akin",
            "District Clerk": "Jennifer Linahan",
            "County Clerk": "Sherry Lemon",
            "County Treasurer": "Katherine Hudson"
        },
        "commissioner_court_minutes": "http://www.co.wise.tx.us/page/wise.Commissioners.Court"
    },
    {
        "name": "Wood County",
        "location": "Quitman, TX",
        "courthouse_address": "100 S Main St, Quitman, TX 75783",
        "website": "http://www.mywoodcounty.com/",
        "appraisal_district_office_address": "100 S Main St, Quitman, TX 75783",
        "registration_office_address": "100 S Main St, Quitman, TX 75783",
        "local_municipality": "City of Quitman",
        "elected_officials": {
            "County Judge": "Lucy Hebron",
            "Sheriff": "Tom Castloo",
            "District Clerk": "Kimberly Golightly",
            "County Clerk": "Kelly Price",
            "County Treasurer": "Sherry Robison"
        },
        "commissioner_court_minutes": "http://www.mywoodcounty.com/page/wood.Commissioners.Court"
    },
    {
        "name": "Yoakum County",
        "location": "Plains, TX",
        "courthouse_address": "412 Cowboy Way, Plains, TX 79355",
        "website": "http://www.co.yoakum.tx.us/",
        "appraisal_district_office_address": "412 Cowboy Way, Plains, TX 79355",
        "registration_office_address": "412 Cowboy Way, Plains, TX 79355",
        "local_municipality": "City of Plains",
        "elected_officials": {
            "County Judge": "Jim Barron",
            "Sheriff": "David Bryant",
            "District Clerk": "Linda Lockridge",
            "County Clerk": "Joyce Long",
            "County Treasurer": "Linda Taylor"
        },
        "commissioner_court_minutes": "http://www.co.yoakum.tx.us/page/yoakum.Commissioners.Court"
    },
    {
        "name": "Young County",
        "location": "Graham, TX",
        "courthouse_address": "516 4th St, Graham, TX 76450",
        "website": "http://www.co.young.tx.us/",
        "appraisal_district_office_address": "516 4th St, Graham, TX 76450",
        "registration_office_address": "516 4th St, Graham, TX 76450",
        "local_municipality": "City of Graham",
        "elected_officials": {
            "County Judge": "John Bullock",
            "Sheriff": "Travis Babcock",
            "District Clerk": "Sherri McBee",
            "County Clerk": "Dee Sechrist",
            "County Treasurer": "Sherri Heine"
        },
        "commissioner_court_minutes": "http://www.co.young.tx.us/page/young.Commissioners.Court"
    },
    {
        "name": "Zapata County",
        "location": "Zapata, TX",
        "courthouse_address": "200 E 7th Ave, Zapata, TX 78076",
        "website": "http://www.co.zapata.tx.us/",
        "appraisal_district_office_address": "200 E 7th Ave, Zapata, TX 78076",
        "registration_office_address": "200 E 7th Ave, Zapata, TX 78076",
        "local_municipality": "City of Zapata",
        "elected_officials": {
            "County Judge": "Joe Rathmell",
            "Sheriff": "Raymundo Del Bosque",
            "District Clerk": "Olga Elizondo",
            "County Clerk": "Olga M. Vela",
            "County Treasurer": "Janie Treviño"
        },
        "commissioner_court_minutes": "http://www.co.zapata.tx.us/page/zapata.Commissioners.Court"
    },
    {
        "name": "Zavala County",
        "location": "Crystal City, TX",
        "courthouse_address": "200 E Uvalde St, Crystal City, TX 78839",
        "website": "http://www.co.zavala.tx.us/",
        "appraisal_district_office_address": "200 E Uvalde St, Crystal City, TX 78839",
        "registration_office_address": "200 E Uvalde St, Crystal City, TX 78839",
        "local_municipality": "City of Crystal City",
        "elected_officials": {
            "County Judge": "Joe Luna",
            "Sheriff": "Efrain Gutierrez",
            "District Clerk": "Cindy Marroquin",
            "County Clerk": "Margarita Alvarez",
            "County Treasurer": "Juan F. Elizondo"
        },
        "commissioner_court_minutes": "http://www.co.zavala.tx.us/page/zavala.Commissioners.Court"
    }
]
`;
export default texasCounties;
