import { GameScene, Camera } from 'engine';

export class StartScene extends GameScene {
    constructor() {
        super();
    }
    
    private initialized = false;
    
    start() {
        super.start();
        
        if (this.initialized) return;
        this.initialized = true;
        
        let camera = this.camera = new Camera(this);
        camera.clearColor = 'black';
    }
}
