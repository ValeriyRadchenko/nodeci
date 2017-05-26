import { GIT } from '../git/git';
import Timer = NodeJS.Timer;
import { EventEmitter } from 'events';

class Job extends EventEmitter {
    intervalId: Timer;

    constructor(public git: GIT, public interval: number) {
        super();
    }

    start() {
        this.intervalId = setInterval(async () => {
            try {
                let result = await this.git.check();
                this.emit('check', result);

                if (result) {
                    this.emit('need-update');
                }
            } catch (error) {
                console.log(error);
            }


        }, this.interval);
    }

    stop() {
        clearInterval(this.intervalId);
    }

}

class JobController {

    jobs: Job[];

    run(branch: string, interval: number) {
        const git = new GIT(branch);
        return new Job(git, interval);
    }

}

export const jobController = new JobController();
let job = jobController.run('origin/master', 500);
job.on('check', (data: boolean) => {
    console.log(data);
});
job.start();
setTimeout(() => {
    job.stop();
}, 10000);