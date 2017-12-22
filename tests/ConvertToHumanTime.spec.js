/* eslint-env mocha, browser */

import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import convertToHumanTime from '../src/ConvertToHumanTime';

chai.use(dirtyChai);

describe('ConvertToHumanTime', () => {
  it('should exists the convertToHumanTime function', () => {
    expect(convertToHumanTime).to.exist();
    expect(convertToHumanTime).to.be.a('function');
  });
  it('should convert to 0:00 if 0ms is provided as parameter', () => {
    expect(convertToHumanTime(0)).to.be.equal('0:00');
  });
  it('should receive 1000ms and convert to 0:01', () => {
    expect(convertToHumanTime(1000)).to.be.equal('0:01');
  });
  it('should receive 10000ms and convert to 0:10', () => {
    expect(convertToHumanTime(10000)).to.be.equal('0:10');
  });
  it('should receive 70000ms and convert to 1:10', () => {
    expect(convertToHumanTime(70000)).to.be.equal('1:10');
  });
  it('should receive 313733ms and convert to 5:13', () => {
    expect(convertToHumanTime(313733)).to.be.equal('5:14');
  });
  it('should receive 275026ms and convert to 4:35', () => {
    expect(convertToHumanTime(275026)).to.be.equal('4:35');
  });
});
