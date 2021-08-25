    let dealer_upCard = 0;
    let hand = [0,0];
    let handValue = 0;
    let handType = "";
    let player_action = "";
    let correct_action = "r";
    let correct_rule = "";
    let cards = [2,3,4,5,6,7,8,9,10,10,10,10,11];

    function dealCards(){
        setTimeout(() => {
        clearMessages();
        setPlayerHand();
        setDealer_upCard();
        while(handValue == 21)
            setPlayerHand();
        setHandType();
        setCorrectAction();
        displayCards(); }, 200);
    };
    
    function setPlayerHand(){
        for(var i = 0; i < 2; i++){
            randInt = Math.floor(Math.random() * 13);
            hand[i] = cards[randInt];
        }
        setHandValue();
    };

    function setDealer_upCard(){
        randInt = Math.floor(Math.random() * 13);
        dealer_upCard = cards[randInt];
    };

    function setHandValue(){
        let value = hand[0] + hand[1];
        handValue = value;
    };

    function setPlayerAction(action){
        player_action = action;
        if(handValue !== 0)
            getResult();
    };

    function setHandType(){
        if (hand[0] == hand[1])
            handType = "pair";
        else if(hand[0] == 11 || hand[1] == 11)
            handType = "soft";
        else if (hand[0] !== 0 && hand[1] !== 0)
            handType = "hard";
        else
            console.log("Error setting hand Type: Hand not initialized.");
    };

    function setCorrectAction(){
        switch(handType){
        case "hard":
            findCorrectStrategy(hardHand);
            break;
        case "soft":
            findCorrectStrategy(softHand);
            break;
        case "pair":
            findCorrectStrategy(pairHand);
            break;
        default: 
            console.log("Error setting correct action.");
        }
    };

    function findCorrectStrategy(stratarray){
        for (var i in stratarray){
            if (stratarray[i].hand == handValue){
                correct_rule = stratarray[i].rule;
                correct_action = stratarray[i][dealer_upCard];
            }
        }
    };

    function getResult(){
        if(player_action == correct_action){
            document.getElementById("result").innerHTML = "<span style='color:#92cc41'>Correct!</span>";

        }
        else
            document.getElementById("result").innerHTML = "<span style='color:#92002c'>Incorrect! </span> " + correct_rule;
        
    };

    function displayCards(){
        document.getElementById("d_cards").innerHTML = cardToImage(dealer_upCard);
       document.getElementById("p_card0").innerHTML = cardToImage(hand[0]);
       document.getElementById("p_card1").innerHTML = cardToImage(hand[1]);
    };

    function cardToImage(cardValue){
        if(cardValue == 10){
            rand10card = Math.floor((Math.random() * 4) + 8);
            return cardImages[rand10card];
        }
        else {
            for (var i in cards)
                if (cardValue == cards[i])
                    return cardImages[i];
        }
    }

    function clearMessages(){
        document.getElementById("deal").innerHTML = "Deal";
        document.getElementById("result").innerHTML = "";
    }   

let cardImages = [ 
    "<img alt='2' src='images/2d.png'> ",
    "<img alt='3' src='images/3d.png'> ",
    "<img alt='4' src='images/4d.png'> ",
    "<img alt='5' src='images/5d.png'> ",
    "<img alt='6' src='images/6d.png'> ",
    "<img alt='7' src='images/7d.png'> ",
    "<img alt='8' src='images/8d.png'> ",
    "<img alt='9' src='images/9d.png'> ",
    "<img alt='10' src='images/10d.png'> ",
    "<img alt='J' src='images/Jd.png'> ",
    "<img alt='Q' src='images/Qd.png'> ",
    "<img alt='K' src='images/Kd.png'> ",
    "<img alt='A' src='images/Ad.png'> "
    ];

let hardHand = [
    {
        "hand": 5,
        "rule": "8 or less always hits.",
        "2" : "h",
        "3" : "h",
        "4" : "h",
        "5" : "h",
        "6" : "h",
        "7" : "h",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 6,
        "rule": "8 or less always hits.",
        "2" : "h",
        "3" : "h",
        "4" : "h",
        "5" : "h",
        "6" : "h",
        "7" : "h",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 7,
        "rule": "8 or less always hits.",
        "2" : "h",
        "3" : "h",
        "4" : "h",
        "5" : "h",
        "6" : "h",
        "7" : "h",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 8,
        "rule": "8 or less always hits.",
        "2" : "h",
        "3" : "h",
        "4" : "h",
        "5" : "h",
        "6" : "h",
        "7" : "h",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 9,
        "rule": "9 doubles against dealer 3 through 6, otherwise hit.",
        "2" : "h",
        "3" : "d",
        "4" : "d",
        "5" : "d",
        "6" : "d",
        "7" : "h",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 10,
        "rule": "10 doubles against dealer 2 through 9, otherwise hit.",
        "2" : "d",
        "3" : "d",
        "4" : "d",
        "5" : "d",
        "6" : "d",
        "7" : "d",
        "8" : "d",
        "9" : "d",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 11,
        "rule": "11 doubles against dealer 2-10, hits against dealer Ace.",
        "2" : "d",
        "3" : "d",
        "4" : "d",
        "5" : "d",
        "6" : "d",
        "7" : "d",
        "8" : "d",
        "9" : "d",
        "10" : "d",
        "11" : "h"
    },
    {
        "hand": 12,
        "rule": "12 stands against dealer 4 through 6, otherwise hit.",
        "2" : "h",
        "3" : "h",
        "4" : "s",
        "5" : "s",
        "6" : "s",
        "7" : "h",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 13,
        "rule": "13 stands against dealer 2 through 6, otherwise hit.",
        "2" : "s",
        "3" : "s",
        "4" : "s",
        "5" : "s",
        "6" : "s",
        "7" : "h",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 14,
        "rule": "14 stands against dealer 2 through 6, otherwise hit.",
        "2" : "s",
        "3" : "s",
        "4" : "s",
        "5" : "s",
        "6" : "s",
        "7" : "h",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 15,
        "rule": "15 stands against dealer 2 through 6, otherwise hit.",
        "2" : "s",
        "3" : "s",
        "4" : "s",
        "5" : "s",
        "6" : "s",
        "7" : "h",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 16,
        "rule": "16 stands against dealer 2 through 6, otherwise hit.",
        "2" : "s",
        "3" : "s",
        "4" : "s",
        "5" : "s",
        "6" : "s",
        "7" : "h",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 17,
        "rule": "17 and up always stands.",
        "2" : "s",
        "3" : "s",
        "4" : "s",
        "5" : "s",
        "6" : "s",
        "7" : "s",
        "8" : "s",
        "9" : "s",
        "10" : "s",
        "11" : "s"
    },
    {
        "hand": 18,
        "rule": "17 and up always stands.",
        "2" : "s",
        "3" : "s",
        "4" : "s",
        "5" : "s",
        "6" : "s",
        "7" : "s",
        "8" : "s",
        "9" : "s",
        "10" : "s",
        "11" : "s"
    },
    {
        "hand": 19,
        "rule": "17 and up always stands.",
        "2" : "s",
        "3" : "s",
        "4" : "s",
        "5" : "s",
        "6" : "s",
        "7" : "s",
        "8" : "s",
        "9" : "s",
        "10" : "s",
        "11" : "s"
    },
    {
        "hand": 20,
        "rule": "17 and up always stands.",
        "2" : "s",
        "3" : "s",
        "4" : "s",
        "5" : "s",
        "6" : "s",
        "7" : "s",
        "8" : "s",
        "9" : "s",
        "10" : "s",
        "11" : "s"
    }
]

let softHand = [
    {
        "hand": 13,
        "rule": "Soft 13 (A,2) doubles against dealer 5 through 6, otherwise hit.",
        "2" : "h",
        "3" : "h",
        "4" : "h",
        "5" : "d",
        "6" : "d",
        "7" : "h",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 14,
        "rule": "Soft 14 (A,3) doubles against dealer 5 through 6, otherwise hit.",
        "2" : "h",
        "3" : "h",
        "4" : "h",
        "5" : "d",
        "6" : "d",
        "7" : "h",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 15,
        "rule": "Soft 15 (A,4) doubles against dealer 4 through 6, otherwise hit.",
        "2" : "h",
        "3" : "h",
        "4" : "d",
        "5" : "d",
        "6" : "d",
        "7" : "h",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 16,
        "rule": "Soft 16 (A,5) doubles against dealer 4 through 6, otherwise hit.",
        "2" : "h",
        "3" : "h",
        "4" : "d",
        "5" : "d",
        "6" : "d",
        "7" : "h",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 17,
        "rule": "Soft 17 (A,6) doubles against dealer 3 through 6, otherwise hit.",
        "2" : "h",
        "3" : "d",
        "4" : "d",
        "5" : "d",
        "6" : "d",
        "7" : "h",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 18,
        "rule": "Soft 18 (A,7) doubles against dealer 2 through 6, and hits against 9 through Ace, otherwise stand.",
        "2" : "s",
        "3" : "d",
        "4" : "d",
        "5" : "d",
        "6" : "d",
        "7" : "s",
        "8" : "s",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 19,
        "rule": "Soft 19 (A,8) doubles against dealer 6, otherwise stand.",
        "2" : "s",
        "3" : "s",
        "4" : "s",
        "5" : "s",
        "6" : "s",
        "7" : "s",
        "8" : "s",
        "9" : "s",
        "10" : "s",
        "11" : "s"
    },
    {
        "hand": 20,
        "rule": "Soft 20 (A,9) always stands.",
        "2" : "s",
        "3" : "s",
        "4" : "s",
        "5" : "s",
        "6" : "s",
        "7" : "s",
        "8" : "s",
        "9" : "s",
        "10" : "s",
        "11" : "s"
    }
]

let pairHand = [
    {
        "hand": 4,
        "rule" : "A pair of 2’s splits against dealer 2 through 7, otherwise hit.",
        "2" : "p",
        "3" : "p",
        "4" : "p",
        "5" : "p",
        "6" : "p",
        "7" : "p",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 6,
        "rule" : "A pair of 3’s splits against dealer 2 through 7, otherwise hit.",
        "2" : "p",
        "3" : "p",
        "4" : "p",
        "5" : "p",
        "6" : "p",
        "7" : "p",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 8,
        "rule" : "A pair of 4’s splits against dealer 5 and 6 , otherwise hit.",
        "2" : "h",
        "3" : "h",
        "4" : "h",
        "5" : "p",
        "6" : "p",
        "7" : "h",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 10,
        "rule" : "A pair of 5’s doubles against dealer 2 through 9 otherwise hit.",
        "2" : "d",
        "3" : "d",
        "4" : "d",
        "5" : "d",
        "6" : "d",
        "7" : "d",
        "8" : "d",
        "9" : "d",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 12,
        "rule" : "A pair of 6’s splits against dealer 2 through 6, otherwise hit.",
        "2" : "p",
        "3" : "p",
        "4" : "p",
        "5" : "p",
        "6" : "p",
        "7" : "h",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 14,
        "rule" : "A pair of 7’s splits against dealer 2 through 7, otherwise hit.",
        "2" : "p",
        "3" : "p",
        "4" : "p",
        "5" : "p",
        "6" : "p",
        "7" : "p",
        "8" : "h",
        "9" : "h",
        "10" : "h",
        "11" : "h"
    },
    {
        "hand": 16,
        "rule" : "Always split 8's.",
        "2" : "p",
        "3" : "p",
        "4" : "p",
        "5" : "p",
        "6" : "p",
        "7" : "p",
        "8" : "p",
        "9" : "p",
        "10" : "p",
        "11" : "p"
    },
    {
        "hand": 18,
        "rule" : "Stand on a pair of 9's against dealer 7, 10 or A, otherwise split.",
        "2" : "p",
        "3" : "p",
        "4" : "p",
        "5" : "p",
        "6" : "p",
        "7" : "s",
        "8" : "p",
        "9" : "p",
        "10" : "s",
        "11" : "s"
    },
    {
        "hand": 20,
        "rule" : "Never split tens. Always stand.",
        "2" : "s",
        "3" : "s",
        "4" : "s",
        "5" : "s",
        "6" : "s",
        "7" : "s",
        "8" : "s",
        "9" : "s",
        "10" : "s",
        "11" : "s"
    },
    {
        "hand": 22,
        "rule" : "Always split aces.",
        "2" : "p",
        "3" : "p",
        "4" : "p",
        "5" : "p",
        "6" : "p",
        "7" : "p",
        "8" : "p",
        "9" : "p",
        "10" : "p",
        "11" : "p"
    }
]
