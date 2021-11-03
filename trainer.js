    let dealer_upCard = 0;
    let hand = [0,0];
    let handValue = 0;
    let handType = "";
    let player_action = "";
    let correct_action = "none";
    let correct_rule = "";
    let cards = [2,3,4,5,6,7,8,9,10,10,10,10,11];

    function dealCards(){
        
        setTimeout(() => { //small delay to prevent card face changing before the rotate animation
        clearMessages();
        setPlayerHand();
        setDealer_upCard();
        while(handValue == 21) //avoids dealing the player a natural "blackjack"
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
        //though two hands might have the same total, hands composed of pairs or Aces have different strategies
        if (hand[0] == hand[1])
            handType = "pair"; //hands where both cards are identical
        else if(hand[0] == 11 || hand[1] == 11)
            handType = "soft"; //hands with exactly one Ace 
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
                correct_rule = stratarray[i].rule; //the "rule" is an exhaustive description of how to play a particular hand
                correct_action = stratarray[i][dealer_upCard]; //the optimal strategy usually depends on the dealer's face-up card
            }
        }
    };

    function getResult(){
        if(player_action == correct_action){
            document.getElementById("result").innerHTML = "<span style='color:#f7d51d'>Correct!</span>";

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
        //matches the card value to a corresponding PNG image of a random suit
        if(cardValue == 10){ //special case; multiple cards have a value of ten (10,J,Q,K)
            rand10card = Math.floor((Math.random() * 4) + 8); //ten-cards start at the 8th element of the card array
            randomSuit = Math.floor((Math.random() * 4));
            getCard = rand10card * 4 + randomSuit; //each card has four corresponding images in the CardImages array, one for each suit
            return cardImages[getCard];
        }
        else {
            for (var i in cards)
                if (cardValue == cards[i])
                    card = i;
                    randomSuit = Math.floor((Math.random() * 4));
                    getCard = (card * 4) + randomSuit;
                    return cardImages[getCard];
        }
    }

    function clearMessages(){
        document.getElementById("deal").innerHTML = "Deal";
        document.getElementById("result").innerHTML = "";
    }   

let cardImages = [ 
    "<img alt='2' src='images/_2c.png'> ",
    "<img alt='2' src='images/_2d.png'> ",
    "<img alt='2' src='images/_2h.png'> ",
    "<img alt='2' src='images/_2s.png'> ",
    "<img alt='3' src='images/_3c.png'> ",
    "<img alt='3' src='images/_3d.png'> ",
    "<img alt='3' src='images/_3h.png'> ",
    "<img alt='3' src='images/_3s.png'> ",
    "<img alt='4' src='images/_4c.png'> ",
    "<img alt='4' src='images/_4d.png'> ",
    "<img alt='4' src='images/_4h.png'> ",
    "<img alt='4' src='images/_4s.png'> ",
    "<img alt='5' src='images/_5c.png'> ",
    "<img alt='5' src='images/_5d.png'> ",
    "<img alt='5' src='images/_5h.png'> ",
    "<img alt='5' src='images/_5s.png'> ",
    "<img alt='6' src='images/_6c.png'> ",
    "<img alt='6' src='images/_6d.png'> ",
    "<img alt='6' src='images/_6h.png'> ",
    "<img alt='6' src='images/_6s.png'> ",
    "<img alt='7' src='images/_7c.png'> ",
    "<img alt='7' src='images/_7d.png'> ",
    "<img alt='7' src='images/_7h.png'> ",
    "<img alt='7' src='images/_7s.png'> ",
    "<img alt='8' src='images/_8c.png'> ",
    "<img alt='8' src='images/_8d.png'> ",
    "<img alt='8' src='images/_8h.png'> ",
    "<img alt='8' src='images/_8s.png'> ",
    "<img alt='9' src='images/_9c.png'> ",
    "<img alt='9' src='images/_9d.png'> ",
    "<img alt='9' src='images/_9h.png'> ",
    "<img alt='9' src='images/_9s.png'> ",
    "<img alt='10' src='images/_10c.png'> ",
    "<img alt='10' src='images/_10d.png'> ",
    "<img alt='10' src='images/_10h.png'> ",
    "<img alt='10' src='images/_10s.png'> ",
    "<img alt='J' src='images/_Jc.png'> ",
    "<img alt='J' src='images/_Jd.png'> ",
    "<img alt='J' src='images/_Jh.png'> ",
    "<img alt='J' src='images/_Js.png'> ",
    "<img alt='Q' src='images/_Qc.png'> ",
    "<img alt='Q' src='images/_Qd.png'> ",
    "<img alt='Q' src='images/_Qh.png'> ",
    "<img alt='Q' src='images/_Qs.png'> ",
    "<img alt='K' src='images/_Kc.png'> ",
    "<img alt='K' src='images/_Kd.png'> ",
    "<img alt='K' src='images/_Kh.png'> ",
    "<img alt='K' src='images/_Ks.png'> ",
    "<img alt='A' src='images/_Ac.png'> ",
    "<img alt='A' src='images/_Ad.png'> ",
    "<img alt='A' src='images/_Ah.png'> ",
    "<img alt='A' src='images/_As.png'> "
    
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
