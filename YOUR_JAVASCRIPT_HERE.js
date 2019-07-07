// Write your JS here


var weapon = {type:"axe", damage: 2}
var hero = {name:"Bassam", heroic: true, inventory:[], health:10, weapon}


function rest (hero) {
    if (hero.health == 10) {
        window.alert("Health is already 10")
    } else {
        hero.health = 10
    }

    return hero
}

function pickUpItem (hero, weapon) {

    weapon.type = 'dagger'
    weapon.damage = 2
    hero.inventory.push(weapon)

    
}

function equipWeapon (hero){
    if (hero.inventory.length > 0) {
        var temp = ""
        temp = hero.weapon
        hero.weapon = hero.inventory[0]
        hero.inventory[0] = temp
    }
}

function displayStats (hero) {
    
}



        
        
        
    

    
