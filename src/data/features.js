// Feature list rendered as numbered terminal cards (FeaturesGrid.vue).
// Drawn from the real app: subtasks, deadlines/reminders, swipe actions,
// sorting/filters, theming, local-first.

export const FEATURES = [
  {
    icon: "└─",
    title: "Subtasks & cascade completion",
    details:
      "Break a task into nested subtasks. Tick off the parent and the children check off too, so a whole checklist closes in one tap.",
  },
  {
    icon: "⏰",
    title: "Deadlines & reminders",
    details:
      "Add due dates with early reminders, quiet hours, and snooze. Kitsudo reminds you before things are due and stays quiet at night.",
  },
  {
    icon: "↔",
    title: "Swipe to complete or delete",
    details:
      "Swipe one way to complete a task, the other way to delete it. Both have undo if you slip.",
  },
  {
    icon: "⇅",
    title: "Sorting & filters",
    details:
      "Sort by deadline, priority, or date added, and filter down to what you actually need to see.",
  },
  {
    icon: "🎨",
    title: "Catppuccin & Material You",
    details:
      "Five palettes and 14 accent colors, plus dynamic Material You theming.",
  },
  {
    icon: "🔒",
    title: "Local-first & private",
    details:
      "Everything stays on your device. No account, no cloud, no tracking.",
  },
];
