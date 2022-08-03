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
      const input = this.hexToDecimal(
        '3b3fe7ed9088bc6bb13ddc0f7575c91f2d7f6658831dafb0bb73dbb87e6f81b7'
      );
      const outpup = this.hexToDecimal(
        '33fcf87b0ea07ed5032d167d5df2573d4927cc3d674375c6de832706b237f8b5'
      );
      if (BigInt(input) > BigInt(outpup)) {
        console.log(true);
      }
      res({newHash, nounce: nounce.toString()});
    });
  }
}

// wait till its deliver
export interface IResponse {
  newHash: string;
  nounce: BigInt | number;
}