import React from "react";
import vite from "vite";

function Dice(){
    let GAB = 5;
    let mStr= 2;
    let mDex=1;

        function rangeAttack(){
        const rangeAT = GAB + mDex;
        return rangeAT;
        }

        function meeleAttack(){
        const meeleAt = GAB + mStr;
        return meeleAt;
        }
    
        const attackBonusR = rangeAttack();
        console.log("Range Attack Bonus:", attackBonusR);

        const attackBonusM = meeleAttack();
        console.log("Meele Attack Bonus:", attackBonusM);

        function D20(min = 1,max = 20){
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    const DiceRoll20 = D20();
    console.log("Würfel einen D20:",DiceRoll20);

    function EndAttackM(){
        const NA = meeleAttack() + D20();
        return NA;
    }
    const NahAngriff = EndAttackM();

    console.log("Angriff im Nahkampf:", NahAngriff)

    function EndAttackR(){
        const FA = rangeAttack() + D20();
        return FA;
    }
    const FerAngriff = EndAttackR();
    console.log("Angriff im Fernkampf:", FerAngriff)
    }

export default Dice;