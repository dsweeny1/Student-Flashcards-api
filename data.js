const students = [
    {
        name: 'Anthony Shellman',
        favoriteBands: ['Rubber'],
        favoriteFoods: ['Pizza'],
        pets: ['None (yet)'],
        location: 'Denver, CO'
    },
    {
        name: 'Beth Wilson',
        favoriteBands: ['Country Music'],
        favoriteFoods: ['Thai'],
        pets: ['Jimmy Dog'],
        location: 'Colorado'
    },
    {
        name: 'Dinne Kopelevich',
        favoriteBands: ['Bat For Lashes'],
        favoriteFoods: ['Dumplings'],
        pets: ['None (yet)'],
        location: 'Denver, CO (for now)'
    },
    {
        name: 'Matt Press',
        favoriteBands: ['Domi and JD Beck'],
        favoriteFoods: ['Artichokes'],
        pets: ['Bird'],
        location: 'Denver, CO'
    },
    {
        name: 'Tori Fields',
        favoriteBands: ['...all the music'],
        favoriteFoods: ['Pesto Pasta'],
        pets: ['Lacey the pupperflake'],
        location: 'Albuquerque, NM'
    },
    {
        name: 'Dana Chapman',
        favoriteBands: ['The Amazing Devil', 'Evanescence', 'Florence + the Machine'],
        favoriteFoods: ['Sushi', 'Poke Bowls', 'Bibimbop'],
        pets: ['Loki (Doge)'],
        location: 'Panama City, FL'
    },
    {
        name: 'Marianne Barton',
        favoriteBands: ['Country Music'],
        favoriteFoods: ['Italian', 'Thai', 'Cuban'],
        pets: ['Penny the chocolate lab', 'Chloe the yellow lab'],
        location: 'Boulder, CO'
    },
    {
        name: 'Andrew Knapick',
        favoriteBands: ['Slipknot', 'Bob Marley', 'Natalia Lafourcade'],
        favoriteFoods: ['Mexican', 'Indian', 'Thai', 'Japanese'],
        pets: ['None (yet)'],
        location: 'Mexico City, MX'
    },
    {
        name: 'Colby Pearce',
        favoriteBands: ['Grateful Dead', 'Kevin Morby', 'Freddie Gibbs'],
        favoriteFoods: ['Ramen'],
        pets: ['Pepita the dog'],
        location: 'Littleton, CO'
    },
    {
        name: 'Piper Jarrett',
        favoriteBands: ['The Beatles'],
        favoriteFoods: ['Spaghetti'],
        pets: ['Thai the cat'],
        location: 'Denver, CO'
    },
    {
        name: 'Catalyst ForChange',
        favoriteBands: ['The Weekend', 'Daft Punk', 'Com Truise'],
        favoriteFoods: ['Sushi', 'Pad Thai', Korma],
        pets: ['Maurice the cat', 'Ginger the chihuahua'],
        location: 'Denver, CO'
    },
    {
        name: 'Will Hobson',
        favoriteBands: ['Barenaked Ladies', 'Postmodern Jukebox'],
        favoriteFoods: ['Burgers', 'Breakfast Foods'],
        pets: ['Stone the cat'],
        location: 'Knoxville, TN'
    },
    {
        name: 'Lee Young',
        favoriteBands: ['Anderson .Paak', 'LaRue', 'The Kount', 'A Tribe Called Quest'],
        favoriteFoods: ['Sweet Potato Pie', 'Mango Flavored Anything'],
        pets: ['Mamba the boxer'],
        location: 'Denver, CO'
    },
    {
        name: 'Carissa Gross',
        favoriteBands: ['Odeza', 'Sylvan Esso', 'Tourist'],
        favoriteFoods: ['Vegetables', 'Apples & Peanut Butter'],
        pets: ['Olive'],
        location: 'Golden, CO'
    },
    {
        name: 'Scott Gaines',
        favoriteBands: ['Florence + the Machine'],
        favoriteFoods: ['TexMex'],
        pets: ['Oscar the golden', 'Walter the mutt'],
        location: 'Denver, CO'
    },
    {
        name: "Dani Lopez-Cruz",
        favoriteBands: ["The Cure", "Sad Lovers and Giants", "Caifanes", "Double Virgo", "Jaguares", "Robert Glasper",  "Black Jazz Consortium", "Depeche Mode", "N.E.R.D."],
        favoriteFoods: [ "Enhiladas", "Rice Bowls", "Mediterranean food", "Pozole", "Ceviche" ],
        pets: ['None'],
        location: "Denver, Co"
    },
    {
        name: 'Alycia Canavan',
        favoriteBands: ['The original Broadway cast of any musical'],
        favoriteFoods: ['Champagne Mangos', 'Bibimbap', 'Sourdough Toast'],
        pets: ['Che the tuxedo cat'],
        location: 'Eugene, OR'
    },
    {
        name: 'Morgan Berry',
        favoriteBands: ['Trevor Hall', 'Twiddle'],
        favoriteFoods: ['All things Mediterranean', 'Tabouli', 'Hummus and Pita', 'Dolmas'],
        pets: ['Morgan the dog'],
        location: 'Boulder, CO'
    },
    {
        name: 'Cole Anthony',
        favoriteBands: ['LCD Soundsystem'],
        favoriteFoods: ['Carbs'],
        pets: ['Bean the dog'],
        location: 'Denver, CO'
    },
    {
        name: 'Nicole Forseth',
        favoriteBands: ['Glass Animals'],
        favoriteFoods: ['Sushi', 'Tacos', 'Cheesecake'],
        pets: ['Katara the cat'],
        location: 'Broomfield, CO'
    },
    {
        name: 'Stephanie Guzman',
        favoriteBands: ['Goth Babe', 'Blood Cultures', 'DRAMA', 'Bomba Estereo', 'The Cure', 'Tourist'],
        favoriteFoods: ['Hamburgers', 'Chicken Flautas', 'Key Lime Pie'],
        pets: ['Oscar the dog'],
        location: 'East Texas'
    },
    {
        name: 'Hazel Pablo',
        favoriteBands: ['Point North', 'They', 'Foster the People', 'Paramore', 'Chainsmokers', 'Emotional Oranges'],
        favoriteFoods: ['DESSERT', 'Sushi', 'Pizza'],
        pets: ['Rogue', 'Apollo'],
        location: 'Denver, CO'
    },
    {
        name: 'Ali Nix',
        favoriteBands: ['Nirvana', 'Kasbo', 'Glass Animals'],
        favoriteFoods: ['Mac n Cheese', 'Indian', 'Mexican'],
        pets: ['Mika the dog'],
        location: 'Denver, CO'
    },
    {
        name: 'Jedeo Manirikumwenatwe',
        favoriteBands: ['Coldplay'],
        favoriteFoods: ['Sushi'],
        pets: ['Luna', 'Layla'],
        location: 'Wellington, CO'
    },
    {
        name: 'Emily Miles',
        favoriteBands: ['I love all music but am selective about my country, rap, metal, and electronic music'],
        favoriteFoods: ['The edible kind'],
        pets: ['Nova the Diva Queen', 'Nebula the Adorable Dumpster Gremlin'],
        location: 'Planet Earth'
    },
    {
        name: 'Michael Martinelli',
        favoriteBands: ['Paradise Lost', 'Cradle of Filth'],
        favoriteFoods: ['Mexican', 'Italian'],
        pets: ['Loki', 'Sophie', 'Lazarus'],
        location: 'Littleton, CO'
    },
    {
        name: 'Hunter Monroe',
        favoriteBands: ['STS9', 'Daft Punk'],
        favoriteFoods: ['Pizza', 'Tacos'],
        pets: ['Rex the cat', 'Leo the cat'],
        location: 'Denver, CO'
    },
    {
        name: 'Hannah Celemen',
        favoriteBands: ['Paramore', 'Charlie Puth'],
        favoriteFoods: ['Thai Curry', 'Mechado', 'Tacos'],
        pets: ['Lyra', 'Ouni'],
        location: 'Denver, CO'
    },
    {
        name: 'Derek Cooper',
        favoriteBands: ['Metallica', 'Armin van Burren'],
        favoriteFoods: ['Pad Kra Pow', 'Etouffee'],
        pets: ['Holly the cat'],
        location: 'Denver, CO'
    },
    {
        name: 'Danielle Sweeny',
        favoriteBands: ['Robyn', 'Nelly', 'Modest Mouse', 'Dan Deacon'],
        favoriteFoods: ['Poke Bowls', 'Mac n Cheese', 'Street Tacos'],
        pets: ['None, yet'],
        location: 'Denver, CO'
    }
]