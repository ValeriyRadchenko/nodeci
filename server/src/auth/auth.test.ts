import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { auth } from './auth';
import chaiSubset = require('chai-subset');

chai.use(chaiSubset);
chai.use(chaiAsPromised);
chai.should();
const expect = chai.expect;

describe('auth service test', () => {
    it('should return string token', async () => {
        let token = await auth.sign({uid: 1});
        expect(typeof token === 'string').to.be.true;
    });
});