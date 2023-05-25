import { Howl } from "howler";
import kedeng from '/src/assets/kedeng.mp3'

const railClatterSound = new Howl({
    src: [kedeng]
});

export default railClatterSound;