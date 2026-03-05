class SoundEffects {
    constructor() {
        this.shootSounds = [
            new Audio("src/assets/audios/shoot.mp3"),
            new Audio("src/assets/audios/shoot.mp3"),
            new Audio("src/assets/audios/shoot.mp3"),
            new Audio("src/assets/audios/shoot.mp3"),
            new Audio("src/assets/audios/shoot.mp3"),
        ];

        this.hitSounds = [
            new Audio("src/assets/audios/hit.mp3"),
            new Audio("src/assets/audios/hit.mp3"),
            new Audio("src/assets/audios/hit.mp3"),
            new Audio("src/assets/audios/hit.mp3"),
            new Audio("src/assets/audios/hit.mp3"),
        ];

        this.lossOfLifeSound  = [
            new Audio("src/assets/audios/loss_of_life.mp3"),
            new Audio("src/assets/audios/loss_of_life.mp3"),
            new Audio("src/assets/audios/loss_of_life.mp3"),
        ];

        this.explosionSound = new Audio("src/assets/audios/explosion.mp3");

        this.nextLevelSound = new Audio("src/assets/audios/next_level.mp3");

        this.gameOverSound = new Audio("src/assets/audios/game_over.mp3");

        this. extraLifeSound = new Audio("src/assets/audios/extra_life.mp3");

        this.currentShootSound = 0;
        this.currentHitSound = 0;
        this.currentLossOfLifeSound = 0;

        this.adjustVolumes();
    }


    playShootSound() {
        this.shootSounds[this.currentShootSound].currentTime = 0;
        this.shootSounds[this.currentShootSound].play();
        this.currentShootSound = 
            (this.currentShootSound + 1) % this.shootSounds.length;
    }


    playHitSound() {
        this.hitSounds[this.currentHitSound].currentTime = 0;
        this.hitSounds[this.currentHitSound].play();
        this.currentHitSound = 
            (this.currentHitSound + 1) % this.hitSounds.length;
    }


    playLossOfLifeSound() {
        this.lossOfLifeSound[this.currentLossOfLifeSound].currentTime = 0;
        this.lossOfLifeSound[this.currentLossOfLifeSound].play();
        this.currentLossOfLifeSound = 
            (this.currentLossOfLifeSound + 1) % this.lossOfLifeSound.length;
    }


    playExplosionSound() {
        this.explosionSound.play();
    }


    playNextLevelSound() {
        this.nextLevelSound.play();
    }


    playGameOverSound() {
        this.gameOverSound.play();
    }


    playExtraLifeSound() {
        this.extraLifeSound.play();
    }


    adjustVolumes() {
        this.hitSounds.forEach((sound) => (sound.volume = 0.5));
        this.shootSounds.forEach((sound) => (sound.volume = 1.0));
        this.lossOfLifeSound.forEach((sound) => (sound.volume = 0.2));
        this.explosionSound.volume = 0.8;            
        this.nextLevelSound.volume = 0.5;
        this.gameOverSound.volume = 1.0;
        this.extraLifeSound.volume = 0.2;
    }
}

export default SoundEffects;