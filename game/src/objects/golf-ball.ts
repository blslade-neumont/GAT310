import { GameObject, GameObjectOptions, CircleCollisionMask } from 'engine';

const GOLF_BALL_RADIUS = 12;

export class GolfBallObject extends GameObject {
    constructor(opts?: GameObjectOptions) {
        super('GolfBall', opts);
        this.mask = new CircleCollisionMask(this, GOLF_BALL_RADIUS);
    }
    
    renderImpl(context: CanvasRenderingContext2D) {
        context.fillStyle = 'white';
        context.beginPath();
        context.ellipse(0, 0, GOLF_BALL_RADIUS, GOLF_BALL_RADIUS, 0, 0, 2 * Math.PI);
        context.fill();
    }
}