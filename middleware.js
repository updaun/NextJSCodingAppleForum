import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(request) {

    // jwt 토큰 인증 후 write 리다이렉트
    // const session = await getToken({req: request})
    // console.log("🚀 ~ middleware ~ session:", session)
    
    // if ( request.nextUrl.pathname.startsWith('/write') ) {
    //     if (session == null) {
    //         return NextResponse.redirect(new URL('/api/auth/signin', request.url));
    //     }
    // }

    // 특정 경로에 대한 미들웨어
    // if ( request.nextUrl.pathname.startsWith('/list') ) {
    //     console.log(new Date())
    //     console.log("🚀 ~ middleware ~ request.headers.get('sec-ch-ua-platform'):", request.headers.get('sec-ch-ua-platform'))
    //     return NextResponse.next()
    // }

    // 미들웨어 종료 예제
    // NextResponse.next() // 통과
    // NextResponse.redirect('/login') // 리다이렉트
    // NextResponse.rewrite('/login') // 리라이트 현재페이지 유지하고 새창

    // 쿠키 미들웨어
    // request.cookies.get('쿠키이름')  //출력
    // request.cookies.has('쿠키이름')  //존재확인
    // request.cookies.delete('쿠키이름')  //삭제
    
    // const response = NextResponse.next()
    // response.cookies.set({
    //     name: 'mode',
    //     value: 'dark',
    //     maxAge: 3600,
    //     httpOnly : true
    // })  
    // return response  //쿠키생성
} 