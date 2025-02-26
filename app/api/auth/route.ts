export async function POST(request: Request) {
    const res = await request.json()
    return new Response(JSON.stringify({ message: 'Cookie set with expiration' }), {
        status: 200,
        headers: { 'Set-Cookie': `_token=${res.token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600` },
    })
}
export async function GET(request: Request) {
    return new Response(JSON.stringify({ message: 'Cookie set with expiration' }), {
        status: 200,
        headers: { 'Set-Cookie': `_token=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0` },
    })
}
