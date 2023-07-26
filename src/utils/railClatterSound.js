import { Howl } from "howler";
import kedeng from '/src/assets/sound-effects/kedeng.mp3'

const railClatterSound = new Howl({
    src: [kedeng]
});

export default railClatterSound;