export async function POST(request: Request) {
    const res = await request.json()
    return new Response("dsfdsf", {
        status: 200,
        headers: { 'Set-Cookie': `token=${res.token}` },
    })
}