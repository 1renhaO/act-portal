import lazyLoading from './lazyLoading'

export default {
  name: 'SeatMap',
  path: '/seatmap',
  meta: {
    icon: 'fa-wheelchair',
    expanded: false
  },
  component: lazyLoading('seatmap', true),

  children: [
    {
      name: 'Asr',
      path: 'asr',
      component: lazyLoading('seatmap/asr')
    }
  ]
}
