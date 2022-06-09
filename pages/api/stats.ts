import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'   

type Data = {
    commits: number
}

const ghAccounts: { readonly [username:string] : number } = {
    'nextjs': 0,
}

async function getNumOfCommits() {
    try {
        const baseURL = `https://api.github.com/repos/`
    } catch(e) {
        console.error(e)
        return 0
    }
}

export default async function handler(
    _req: NextApiRequest, 
    res: NextApiResponse<Data>
) {
    res.status(200).json({
        commits: 0,
    })
}