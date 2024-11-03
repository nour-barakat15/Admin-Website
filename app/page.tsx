// /app/page.tsx
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/screens/User');
  return null;
}
