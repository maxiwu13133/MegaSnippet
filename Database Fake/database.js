// Create the user class
class User {
    // User class constructor
    constructor(username, password, className, src, gameScores, friends, achievements, titles, setTitle, servers){
        // Must provide a username and password
        this.username = username;
        this.password = password;

        // Set remaining optional properties
        if (className == undefined || className == null){
            this.className = "";
        }
        else {
            this.className = className;
        }

        if (src == undefined || src == null){
            this.profileImageSrc = "#";
        }
        else {
            this.profileImageSrc = src;
        }

        if (gameScores == undefined || gameScores == null){
            this.gameScores = {
                ticTacToe: 0, 
                hangman: 0, 
                sudoku: 0, 
                connect4: 0, 
                rps: 0, 
                wordSearch: 0
            };
        }
        else {
            this.gameScores = {
                ticTacToe: gameScores.ticTacToe, 
                hangman: gameScores.hangman, 
                sudoku: gameScores.sudoku, 
                connect4: gameScores.connect4, 
                rps: gameScores.rps, 
                wordSearch: gameScores.wordSearch
            };
        }

        if (friends == undefined || friends == null){
            this.friends = [];
        }
        else {
            this.friends = friends;
        }

        if (achievements == undefined || achievements == null){
            this.achievements = [];
        }
        else {
            this.achievements = achievements;
        }

        if (titles == undefined || titles == null){
            this.titles = [];
        }
        else {
            this.titles = titles;
        }

        if (setTitle == undefined || setTitle == null){
            this.setTitle = "";
        }
        else {
            this.setTitle = setTitle;
        }
        
        if (servers == undefined || servers == null){
            this.chatServers = [];
        }
        else {
            this.chatServers = servers;
        }
    }

    setProfileImage(src) {
        this.profileImageSrc = src;
    }

    addTicTacToeGameScore(score) {
        this.gameScores[ticTacToe] += score;
    }

    addHangmanGameScore(score) {
        this.gameScores[hangman] += score;
    }

    addSudokuGameScore(score) {
        this.gameScores[sudoku] += score;
    }

    addconnect4GameScore(score) {
        this.gameScores[connect4] += score;
    }

    addRpsGameScore(score) {
        this.gameScores[rps] += score;
    }

    addWordSearchGameScore(score) {
        this.gameScores[wordSearch] += score;
    }

    getTotalScore(){
        let total = 0;
        total += this.gameScores.ticTacToe + this.gameScores.hangman + this.gameScores.sudoku + this.gameScores.connect4 + 
        this.gameScores.rps + this.gameScores.wordSearch;
        return total;
    }

    addFriend(friendName){
        this.friends.push(friendName)
    }

    addAchievement(achievement){
        this.achievements.push(achievement)
    }

    addTitle(title){
        this.titles.push(title)
    }

    setCurrentTitle(selectedTitle){
        this.setTitle = selectedTitle;
    }

    addChatServer(server){
        this.chatServers.push(server)
    }

    printUserInfo(){
        console.log(this.username)
        console.log(this.password)
        console.log(this.className)
        console.log(this.profileImageSrc)
        console.log(this.gameScores)
        console.log(this.friends)
        console.log(this.achievements)
        console.log(this.titles)
        console.log(this.setTitle)
        console.log(this.chatServers)
    }
}

let user1 = new User(
    username = "Ralph", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage1.jpg",
    gameScores = {
        ticTacToe: 2000, 
        hangman: 2000, 
        sudoku: 2000, 
        connect4: 2000, 
        rps: 1000, 
        wordSearch: 1000
    },
    friends = [],
    achievement = [],
    titles = ["Champion of MegaSnippet", "Master of MegaSnippet"],
    setTitle = "Master of MegaSnippet",
    servers = []
    )

let user2 = new User(
    username = "Carlie", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage2.jpg",
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 3000, 
        connect4: 400, 
        rps: 400, 
        wordSearch: 3000
    },
    friends = [],
    achievement = [],
    titles = ['Puzzle Master'],
    setTitle = "Puzzle Master",
    servers = []
    )

let user3 = new User(
    username = "Prajvirdeep", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage8.jpg",
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 800, 
        connect4: 500, 
        rps: 4000, 
        wordSearch: 300
    },
    friends = [],
    achievement = [],
    titles = ['Luck Blessed'],
    setTitle = "Luck Blessed",
    servers = []
    )

let user4 = new User(
    username = "Mochizuki", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage4.jpg",
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 500, 
        connect4: 4000, 
        rps: 200, 
        wordSearch: 1000
    },
    friends = [],
    achievement = [],
    titles = ['Connection Maker'],
    setTitle = "Connection Maker",
    servers = []
    )

let user5 = new User(
    username = "Legend", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage5.jpg",
    gameScores = {
        ticTacToe: 4000, 
        hangman: 900, 
        sudoku: 500, 
        connect4: 600, 
        rps: 600, 
        wordSearch: 500
    },
    friends = [],
    achievement = [],
    titles = ['Tic-Tac Champion'],
    setTitle = "Tic-Tac Champion",
    servers = []
    )

let user6 = new User(
    username = "Dark_phantom5", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage6.jpg",
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 400, 
        connect4: 100, 
        rps: 200, 
        wordSearch: 100
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user7 = new User(
    username = "Liliana", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage7.jpg",
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 800, 
        connect4: 400, 
        rps: 600, 
        wordSearch: 200
    },
    friends = [],
    achievement = [],
    titles = ['Friend Maker'],
    setTitle = "Friend Maker",
    servers = []
    )

let user8 = new User(
    username = "Harry", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage3.jpg",
    gameScores = {
        ticTacToe: 500, 
        hangman: 600, 
        sudoku: 2000, 
        connect4: 500, 
        rps: 600, 
        wordSearch: 5000
    },
    friends = [],
    achievement = [],
    titles = ['King of Word Search'],
    setTitle = "King of Word Search",
    servers = []
    )

let user9 = new User(
    username = "Yeet", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage9.jpg",
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 400, 
        connect4: 500, 
        rps: 300, 
        wordSearch: 500
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user10 = new User(
    username = "Aero", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage10.jpg",
    gameScores = {
        ticTacToe: 1400, 
        hangman: 1200, 
        sudoku: 400, 
        connect4: 700, 
        rps: 100, 
        wordSearch: 100
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user11 = new User(
    username = "DeVante", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage11.jpg",
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 700, 
        connect4: 900, 
        rps: 1200, 
        wordSearch: 1000
    },
    friends = [],
    achievement = [],
    titles = ['Friend Maker'],
    setTitle = "Friend Maker",
    servers = []
    )

let user12 = new User(
    username = "Randy", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage12.png",
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 6000, 
        connect4: 100, 
        rps: 400, 
        wordSearch: 100
    },
    friends = [],
    achievement = [],
    titles = ["God of Sodoku", "King of Soduku"],
    setTitle = "God of Sodoku",
    servers = []
    )

let user13 = new User(
    username = "Dregon", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage13.jpg",
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 800, 
        connect4: 1000, 
        rps: 3000, 
        wordSearch: 200
    },
    friends = [],
    achievement = [],
    titles = ['Rock-Paper-Scissors Master'],
    setTitle = "Rock-Paper-Scissors Master",
    servers = []
    )

let user14 = new User(
    username = "Kidd", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage14.png",
    gameScores = {
        ticTacToe: 1500, 
        hangman: 1500, 
        sudoku: 1500, 
        connect4: 1500, 
        rps: 1500, 
        wordSearch: 1500
    },
    friends = [],
    achievement = [],
    titles = ['King / Queen of their Class'],
    setTitle = "King / Queen of their Class",
    servers = []
    )

let user15 = new User(
    username = "IronMAN77", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage15.png",
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 700, 
        connect4: 700, 
        rps: 700, 
        wordSearch: 300
    },
    friends = [],
    achievement = [],
    titles = ['Friend Maker'],
    setTitle = "Friend Maker",
    servers = []
    )

let user16 = new User(
    username = "Sega", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage16.png",
    gameScores = {
        ticTacToe: 100, 
        hangman: 100, 
        sudoku: 900, 
        connect4: 300, 
        rps: 300, 
        wordSearch: 4000
    },
    friends = [],
    achievement = [],
    titles = ['Word Lover'],
    setTitle = "Word Lover",
    servers = []
    )

let user17 = new User(
    username = "RobbinGamer", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage17.png",
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 500, 
        connect4: 400, 
        rps: 300, 
        wordSearch: 1000
    },
    friends = [],
    achievement = [],
    titles = ['Joker'],
    setTitle = "Joker",
    servers = []
    )

let user18 = new User(
    username = "Claudia", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage18.jpg",
    gameScores = {
        ticTacToe: 200, 
        hangman: 5000, 
        sudoku: 200, 
        connect4: 300, 
        rps: 600, 
        wordSearch: 100
    },
    friends = [],
    achievement = [],
    titles = ['Rope Cutter'],
    setTitle = "Rope Cutter",
    servers = []
    )

let user19 = new User(
    username = "Kirito", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage19.jpg",
    gameScores = {
        ticTacToe: 100, 
        hangman: 100, 
        sudoku: 400, 
        connect4: 400, 
        rps: 2400, 
        wordSearch: 400
    },
    friends = [],
    achievement = [],
    titles = ['Stone Face'],
    setTitle = "Stone Face",
    servers = []
    )

let user20 = new User(
    username = "Mark1", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage20.jpg",
    gameScores = {
        ticTacToe: 50, 
        hangman: 50, 
        sudoku: 50, 
        connect4: 50, 
        rps: 50, 
        wordSearch: 50
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10,
user11, user12, user13, user14, user15, user16, user17, user18, user19, user20];
let targetClassName = "CST1E";

let currentUser = user1;

let chatLog = {
    "# General": [
        [user1, "Hey everyone, here is a genral chat to discuss anything regarding BCIT.", new Date(2020, 10, 23)],
        [user4, "Sorry I was late to math class, what did I miss", new Date(2020, 10, 23)],
        [user9, "We went over logs and exponents", new Date(2020, 10, 23)],
        [user4, "Cool thanks", new Date(2020, 10, 23)],
        [user7, "Here's a summary of what's due: Math MiniQuiz on Thursday, coding lab on Tuesday, and english assignment Saturday", new Date(2020, 11, 01)],
        [user5, "That's awsome", new Date(2020, 11, 01)],
        [user1, "Big help, thanks", new Date(2020, 11, 02)]
    ],
    "# Games": [
        [user7, "Does anyone want to compare sudoku times", new Date(2020, 10, 23)],
        [user2, "Sure, I got 3:41 on easy", new Date(2020, 10, 23)],
        [user7, "I got 5:01 on hard", new Date(2020, 10, 23)],
        [user9, "4:48 on hard", new Date(2020, 11, 01)],
        [user10, "That's awsome", new Date(2020, 11, 01)],
        [user5, "How did you solve it so fast", new Date(2020, 11, 01)]
    ],
    "# Homework": [
        [user4, "Sorry I was late to math class, what did I miss", new Date(2020, 10, 23)],
        [user9, "We went over logs and exponents", new Date(2020, 10, 23)],
        [user4, "Cool thanks", new Date(2020, 10, 23)],
        [user7, "Here's a summary of what's due: Math MiniQuiz on Thursday, coding lab on Tuesday, and english assignment Saturday", new Date(2020, 11, 01)],
        [user5, "That's awsome", new Date(2020, 11, 01)],
        [user1, "Big help, thanks", new Date(2020, 11, 02)]
    ],
    '# Prajvirdeep': [
        [user1, "Hey, how's it going", new Date(2020, 11, 21)],
        [user3, "Good, thanks", new Date(2020, 11, 21)],
        [user1, "Do you want to be partners for the coding lab", new Date(2020, 11, 29)],
        [user3, "Sure, that would be awesome", new Date(2020, 11, 29)]
    ],
    '# Mochizuki': [
        [user4, "Per the professor's instructions I'll send you a zoom link", new Date(2020, 10, 17)],
        [user4, "Zoom Meeting link: zoom.us/Mochizuki/", new Date(2020, 10, 17)],
        [user1, "Sure, I'll join", new Date(2020, 10, 17)],
    ],
    '# Ling Fei': [
        [user1, "Hey, how's it going", new Date(2020, 11, 21)],
        [user3, "Good, thanks", new Date(2020, 11, 21)],
        [user1, "Do you want to be partners for the coding lab", new Date(2020, 11, 29)],
        [user3, "Sure, that would be awesome", new Date(2020, 11, 29)],
    ],
    '# DeVante': [
        [user1, "Hey, how's it going", new Date(2020, 11, 21)],
        [user3, "Good, thanks", new Date(2020, 11, 21)],
        [user1, "Do you want to be partners for the coding lab", new Date(2020, 11, 29)],
        [user3, "Sure, that would be awesome", new Date(2020, 11, 29)],
    ],
    '# Mary-Jane': [
        [user1, "Hey, how's it going", new Date(2020, 11, 21)],
        [user3, "Good, thanks", new Date(2020, 11, 21)],
        [user1, "Do you want to be partners for the coding lab", new Date(2020, 11, 29)],
        [user3, "Sure, that would be awesome", new Date(2020, 11, 29)],
    ],
    '# Group D': [
        [user1, "Hey, how's it going", new Date(2020, 11, 21)],
        [user3, "Good, thanks", new Date(2020, 11, 21)],
        [user1, "Do you want to be partners for the coding lab", new Date(2020, 11, 29)],
        [user3, "Sure, that would be awesome", new Date(2020, 11, 29)],
    ],
    '# MegaSnippet': [
        [user1, "Hey, how's it going", new Date(2020, 11, 21)],
        [user3, "Good, thanks", new Date(2020, 11, 21)],
        [user1, "Do you want to be partners for the coding lab", new Date(2020, 11, 29)],
        [user3, "Sure, that would be awesome", new Date(2020, 11, 29)],
    ]
}

