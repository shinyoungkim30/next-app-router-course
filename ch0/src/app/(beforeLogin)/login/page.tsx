'use client';

import { useRouter } from 'next/navigation';
import Main from '../_component/Main';

export default function Login() {
  const router = useRouter();

  router.replace('/i/flow/login');

  return <Main />;
}

// 1) router.push (뒤로가기 클릭시 login -> i/flow/login 무한 반복)
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login

// 2) router.replace (이동 후 이전 경로를 삭제, 뒤로가기 클릭시 localhost:3000으로)
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
