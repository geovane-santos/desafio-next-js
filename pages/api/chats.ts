import prisma from '../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body
    const chat = await prisma.chat.create({ data: { message } })
    res.status(201).json(chat)
  } else if (req.method === 'GET') {
    const chats = await prisma.chat.findMany()
    res.status(200).json(chats)
  } else {
    res.status(405).end()
  }
}