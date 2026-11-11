import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Prototype Viewer · Pitang Labs',
  description: 'Apresentador de protótipos funcionais HTML direto do chat da IDE com molduras de dispositivos e validação de requisitos.',
}

export default function PrototypeViewerPage() {
  redirect('/prototype-viewer.html')
}
