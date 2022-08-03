import { Request, Response } from 'express'
import { BigNumber } from 'bignumber.js'
import keccak256 from 'keccak256'
import { HashCalculationService } from './service'

export const calculation = async (req: Request, res: Response) => {
  try {
    const { hash } = req.query as { hash: string}
    const hashCalcService = new HashCalculationService()
    const result = await hashCalcService.calculateHash(hash);
    return res.status(200).json({ result, success: true })
  } catch(e) {
    return res.status(500).json({ message: "backend error"})
  }
}
