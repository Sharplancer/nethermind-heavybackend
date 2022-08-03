/* eslint-disable node/no-unsupported-features/es-builtins */
import {Keccak} from 'sha3';

export class HashCalculationService {
  async calculateHash(inputHash: string): Promise<IResponse> {
    return this.wait(inputHash);
  }
  private hexToDecimal(hexValue: string): number {
    return parseInt(hexValue, 16);
  }
  private keecakHash(value: BigInt): string {
    const newhash = new Keccak(256);
    newhash.update(value.toString());
    return newhash.digest('hex');
  }
  private async wait(inputHash: string): Promise<IResponse> {
    return new Promise(res => {
      const intVal = BigInt(this.hexToDecimal(inputHash));
      let newHash: string;
      let convertNewHashToDecimal: BigInt;
      let nounce: any = 0;
      do {
        nounce = nounce + 1;
        const newHashInput = intVal + BigInt(nounce);
        newHash = this.keecakHash(newHashInput);
        convertNewHashToDecimal = BigInt(this.hexToDecimal(newHash));
        console.log("currentNounce", nounce)
      } while (convertNewHashToDecimal >= intVal);
      res({newHash, nounce: nounce.toString()});
    });
  }
}

// wait till its deliver
export interface IResponse {
  newHash: string;
  nounce: BigInt | number;
}