import { Disc3, Wallet, PackageCheck, CalendarDays } from 'lucide-react'

const stats = [
  {
    id: 'inventory',
    label: 'Discos en inventario',
    value: '1 284',
    detail: '312 vinilos, 640 CD y 332 casetes',
    icon: Disc3,
  },
  {
    id: 'sales',
    label: 'Ventas de octubre',
    value: 'S/ 18 450',
    detail: 'Acumulado al 15 de octubre',
    icon: Wallet,
  },
  {
    id: 'orders',
    label: 'Pedidos a proveedores',
    value: '23',
    detail: '7 llegan esta semana',
    icon: PackageCheck,
  },
  {
    id: 'events',
    label: 'Eventos programados',
    value: '6',
    detail: 'Hasta el 12 de diciembre',
    icon: CalendarDays,
  },
]

export default stats