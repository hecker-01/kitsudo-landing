// Single source of truth for external links and configurable bits.

export const REPO_URL = "https://github.com/hecker-01/Kitsudo";
export const RELEASES_URL =
  "https://github.com/hecker-01/Kitsudo/releases/latest";
export const AUTHOR_URL = "https://heckr.dev";

// Leave empty until there's a Play Store listing. The badge stays hidden while this is empty.
export const PLAY_URL = "";

export const AUTHOR = "heckr.dev";
export const APP_NAME = "Kitsudo";
export const TAGLINE =
  "A local-first task planner for Android. Subtasks, deadlines, and your own themes, on your phone and watch.";

// Screenshot manifest. Add filenames here to match files in public/screenshots/.
// Empty -> the carousel shows placeholder frames.
export const SCREENSHOTS = [
  // '1.png',
  // '2.png',
  // '3.png',
];

// Boot-log lines shown by the LoadingScreen on the home page.
export const BOOT_LOG = [
  "> Booting Kitsudo…",
  "> Mounting /tasks … ok",
  "> Loading Room database v2 … ok",
  "> Applying Catppuccin Mocha … ok",
  "> Restoring 14 accent swatches … ok",
  "> Scheduling deadline reminders … ok",
  "> Honoring quiet hours … ok",
  "> Syncing with Wear OS … paired",
  "> No account required. No tracking. Local-first.",
  "> Ready!",
];
