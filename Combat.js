var CombatEngine;
(function CombatEngine(){

	var Weapon = (function(){
		function Weapon(config){
			this.config = config;
		}
		return Weapon;
	})();
	CombatEngine.Weapon = Weapon;

	var Player = (function(){
		function Player(config){
			this.config = config;
		}
		return Player;
	})();
	CombatEngine.Player = Player;

	var Combat = (function(){
		function Combat(player, opponents){
			this.player = player;
			this.opponents = opponents;
		}
		return Combat;

		Combat.prototype.isOver = function()
		{

			return true;
		}

		Combat.prototype.start = function()
		{
			while(!this.isOver())
			{

			}
		};
	})();
	CombatEngine.Combat = Combat;

})(CombatEngine||(CombatEngine = {}));

