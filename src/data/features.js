// Feature list rendered as numbered terminal cards (FeaturesGrid.vue).
// Drawn from the real app: subtasks, deadlines/reminders, swipe actions,
// sorting/filters, theming, local-first.

export const FEATURES = [
  {
    icon: '└─',
    title: 'Subtasks & cascade completion',
    details:
      'Break tasks into nested subtasks. Complete a parent and its children cascade — finish a checklist with one tap.',
  },
  {
    icon: '⏰',
    title: 'Deadlines & smart reminders',
    details:
      'Set due dates with pre-reminders, quiet hours, and snooze. Kitsudo nudges you ahead of time and respects your sleep.',
  },
  {
    icon: '↔',
    title: 'Swipe to complete or delete',
    details:
      'Fast gestures right where your thumb is. Swipe one way to complete, the other to delete — with undo.',
  },
  {
    icon: '⇅',
    title: 'Smart sorting & filters',
    details:
      'Sort by deadline, priority, or creation, and filter to exactly what matters now. Your list stays focused.',
  },
  {
    icon: '🎨',
    title: 'Catppuccin & Material You',
    details:
      'Five palettes and 14 accents, plus dynamic Material You color. Make Kitsudo look like yours.',
  },
  {
    icon: '🔒',
    title: 'Local-first & private',
    details:
      'Everything lives on your device. No account, no cloud, no tracking — your tasks are yours alone.',
  },
]
