import { Commander, ICommanderExecuteResult } from '../commander/commander';

export class GIT {

    commander: Commander = new Commander();

    async check() {
        try {
            await this.commander.execute('git remote update');
            let remoteResult: ICommanderExecuteResult = await this.commander.execute('git rev-parse origin/master');
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

    async update() {
        await this.commander.execute('git pull origin master');
    }

}

