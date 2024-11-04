

const { Telegraf } = require('telegraf')

const TOKEN = '7802831334:AAEGQqsAb54fxfcKtE1RBCnnHSnUKSwj-KE'
const bot = new Telegraf(TOKEN)

const web_link = 'https://indra-snowy.vercel.app/'

bot.start((ctx) =>

    ctx.replyWithPhoto(
        { url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dfgfacs-442909bd-024f-4e62-9716-c5b72aad1dcb.png/v1/fill/w_894,h_894/indra_mangekyo_sharingan_by_jormxdos_dfgfacs-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZnZmFjcy00NDI5MDliZC0wMjRmLTRlNjItOTcxNi1jNWI3MmFhZDFkY2IucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.mnaj5zvdJZ31IR2vmvLdGioLY4_soLvcPT3Wz6JP_Ao' },
        // { caption: "cat photo", 
        { reply_markup: { inline_keyboard: [[{ text: "Open Indra", web_app: { url: web_link } }]] } }
    )

)

bot.launch()