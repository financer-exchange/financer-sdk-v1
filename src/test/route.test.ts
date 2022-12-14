import SDK, { NetworkType } from '../main'

const CoinsMapping: { [key: string]: string } = {
  APTOS: '0x1::aptos_coin::AptosCoin',
  BTC: '0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::TestCoinsV1::BTC',
}

describe('Route Module', () => {
  const sdk = new SDK('https://fullnode.devnet.aptoslabs.com', NetworkType.Devnet)

  test('getRouteSwapExactCoinForCoin (no route)', async () => {
    const trades = await sdk.route.getRouteSwapExactCoinForCoin({
      fromCoin: CoinsMapping.APTOS,
      toCoin: CoinsMapping.BTC,
      amount: 1e20.toString(),
    })
    console.log(trades)
    expect(trades.length).toBeGreaterThanOrEqual(1)
    expect(trades[0].priceImpact.toNumber()).toBeGreaterThan(0.99)
  })

  test('getRouteSwapExactCoinForCoin', async () => {
    const trades = await sdk.route.getRouteSwapExactCoinForCoin({
      fromCoin: CoinsMapping.APTOS,
      toCoin: CoinsMapping.BTC,
      amount: '100000',
    })
    console.log(trades)
    expect(1).toBe(1)
  })

  test('swapExactCoinToCoinPayload', async () => {
    const trades = await sdk.route.getRouteSwapExactCoinForCoin({
      fromCoin: CoinsMapping.APTOS,
      toCoin: CoinsMapping.BTC,
      amount: '100000',
    })
    expect(trades.length).toBeGreaterThanOrEqual(1)
    const output = sdk.route.swapExactCoinForCoinPayload({
      trade: trades[0],
      slippage: 0.05,
    })
    console.log(output)
    expect(1).toBe(1)
  })

  test('getRouteSwapCoinForExactCoin', async () => {
    const trades = await sdk.route.getRouteSwapCoinForExactCoin({
      fromCoin: CoinsMapping.APTOS,
      toCoin: CoinsMapping.BTC,
      amount: '100000',
    })
    console.log(trades)
    expect(1).toBe(1)
  })

  test('swapCoinForExactCoinPayload', async () => {
    const trades = await sdk.route.getRouteSwapCoinForExactCoin({
      fromCoin: CoinsMapping.APTOS,
      toCoin: CoinsMapping.BTC,
      amount: '100000',
    })
    expect(trades.length).toBeGreaterThanOrEqual(1)
    const output = sdk.route.swapCoinForExactCoinPayload({
      trade: trades[0],
      slippage: 0.05,
    })
    console.log(output)
    expect(1).toBe(1)
  })
})
