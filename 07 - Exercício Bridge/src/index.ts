import IConsole from "./platforms/IConsole";import PlayStation from "./platforms/PlayStation";
import AdvancedPlay from "./transmission/AdvancedPlay";
import Play from "./transmission/Play";
import Xbox from "./platforms/Xbox";

function startGame(platform : IConsole){
    console.log("carregando");
    const game = new Play(platform);
    game.playing();
    game.result();
}
function startAdvancedGame(platform : IConsole){
    console.log("carregando");
    const game = new AdvancedPlay(platform)
    game.playing();
    game.result();
    game.challenge();
}

startGame(new PlayStation());
startAdvancedGame(new Xbox());
startAdvancedGame(new PlayStation());
