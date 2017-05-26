import { ChildProcess, exec } from 'child_process';

export class Commander {

    private currentProcess: ChildProcess = null;

    constructor() {

    }

    execute(command: string): Promise<ICommanderExecuteResult> {

        return new Promise((resolve, reject) => {

            this.currentProcess = exec(command, {cwd: '/romi'}, (error: Error, stdout: string, stderr: string) => {
                if (!error) {
                    resolve({stdout, stderr});
                } else {
                    reject(error);
                }
            });

            // this.currentProcess.stdout.pipe(process.stdout);
            // this.currentProcess.stderr.pipe(process.stderr);
        });
    }

    destroy() {
        this.currentProcess.kill('SIGHUP');
        this.currentProcess = null;
    }

}

export interface ICommanderExecuteResult {
    stdout: string;
    stderr: string;
}