new Vue({
    el: '#app',
    data: {
        startGame: true,
        logs: [],

        monsterLife: 100,
        monsterLifeBar: {
            width: '400px'
        },

        playerLife: 100,
        playerLifeBar: {
            width: '400px'
        },

        attackIntervalId: null
    },
    methods: {
        attack: function() {
            monsterHits = this.getRandom();
            playerHits = this.getRandom();
            this.logs.push("monster hits player for " + monsterHits);
            this.logs.push("player hits monster for " + playerHits);

            this.reducePlayerLife(monsterHits);
            this.reduceMonsterLife(playerHits);

            let playAgain;
            if (this.playerLife <= 0) {
                clearInterval(this.attackIntervalId);
                playAgain = confirm("You Lost! Wanna play again?");
            } else if (this.monsterLife <= 0) {
                clearInterval(this.attackIntervalId);
                playAgain = confirm("You Won! Wanna play again?");
            }

            if (playAgain) {
                this.giveUp();
            }
        },
        specialAttack: function() {
            this.attackIntervalId = setInterval(() => {
                this.attack();
            }, 500);
        },
        getRandom: function() {
            return Math.floor(Math.random() *  10 + 1);
        },
        reducePlayerLife: function(diff) {
            this.playerLife -= diff;
            this.playerLifeBar.width = this.playerLife * 4 + 'px';
        },
        reduceMonsterLife: function(diff) {
            this.monsterLife -= diff;
            this.monsterLifeBar.width = this.monsterLife * 4 + 'px';
        },
        heal: function() {
            let healValue;
            if (100 - this.playerLife < 10) {
                healValue = 100 - this.playerLife;
            } else {
                healValue = 10;
            }
            this.logs.push("player heals for " + healValue);
            this.playerLife += healValue;
            this.playerLifeBar.width = this.playerLife * 4 + 'px';
        },
        giveUp: function() {
            this.startGame = true;
            this.logs = [];
            this.monsterLife = this.playerLife = 100;
            this.monsterLifeBar.width = this.playerLifeBar.width = '400px'
            clearInterval(this.attackIntervalId);
        }
    }
})