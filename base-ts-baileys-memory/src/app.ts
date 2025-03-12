import 'dotenv/config'
import { createBot, MemoryDB, createProvider, createFlow,addKeyword } from '@builderbot/bot'
import { BaileysProvider } from '@builderbot/provider-baileys'
import 'dotenv/config';


const PORT = process.env.PORT ?? 3001

const welcomeFlow = addKeyword<BaileysProvider, MemoryDB>(['comandoexageradamenteespecifico'])
    .addAnswer('Ey! welcome')
    .addAnswer(`Send image from URL`, { media: 'https://i.imgur.com/0HpzsEm.png' })

const main = async () => {
    const provider = createProvider(BaileysProvider)
    const adapterFlow = createFlow([welcomeFlow])

    const { handleCtx, httpServer } = await createBot({
        flow: adapterFlow,
        database: new MemoryDB(),
        provider: provider
    })
    httpServer(3001)

    provider.server.post('/v1/messages', handleCtx(async (bot, req, res) => {
        const { number, message } = req.body
        await bot.sendMessage(number, message, {})
        return res.end('send')
    }))
}

main()
