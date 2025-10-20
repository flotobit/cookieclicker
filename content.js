(function() {
  // Wait until the game object is ready
  function unlockAchievements() {
    if (typeof Game !== "undefined" && Game.Achievements) {
      for (let ach of Game.Achievements) {
        if (ach.won !== 1) {
          Game.Win(ach.name);
        }
      }
      console.log("All achievements unlocked!");
    } else {
      // Retry if Game is not ready
      setTimeout(unlockAchievements, 1000);
    }
  }
  unlockAchievements();
})();

