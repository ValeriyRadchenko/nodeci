import { Commander, ICommanderExecuteResult } from '../commander/commander';

export class GIT {

    private commander: Commander = new Commander();
    private branch: string;

    constructor(branch: string) {
        this.branch = branch;
    }

    async check(): Promise<boolean> {
        try {
            await this.commander.execute('git remote update');
            let remoteResult: ICommanderExecuteResult = await this.commander.execute(`git rev-parse ${this.branch}`);
            let localResult: ICommanderExecuteResult = await this.commander.execute('git rev-parse @');

            if (remoteResult.stdout !== localResult.stdout) {
                return true;
            }

            return false;

        } catch (error) {
            console.log(error);
            return false;
        } finally {
            this.commander.destroy();
        }
    }

    async update(): Promise<ICommanderExecuteResult> {
        return this.commander.execute('git pull origin master');
    }

}

