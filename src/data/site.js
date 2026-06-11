// Single source of truth for external links and configurable bits.

export const REPO_URL = "https://github.com/hecker-01/Kitsudo";
export const RELEASES_URL = "https://github.com/hecker-01/Kitsudo/releases";
export const AUTHOR_URL = "https://heckr.dev";

// Leave empty until there's a Play Store listing. The badge stays hidden while this is empty.
export const PLAY_URL =
  "https://play.google.com/store/apps/details?id=dev.heckr.kitsudo";

// Currently in closed testing — flip to true when the Play Store listing goes public.
// While false, the Play Store badge/link is disabled and shows "Coming soon" on click.
export const PLAY_AVAILABLE = false;

export const AUTHOR = "heckr.dev";
export const APP_NAME = "Kitsudo";
export const TAGLINE =
  "A local task planner for Android. Subtasks, deadlines, and your own themes, on your phone and watch.";

// Screenshot manifest. Add filenames here to match files in public/screenshots/.
// Empty -> the carousel shows placeholder frames. These render in a phone frame.
export const SCREENSHOTS = [
  "home.jpg",
  "subtask.jpg",
  "deadline.jpg",
  "themes.jpg",
];

// Wear OS shots render in a round watch frame instead (square ~432x432 looks best).
export const WEAR_SHOTS = [
  "wear.png",
  "wear_subtasks.png",
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
  "> No account required. No tracking. Fully local.",
  "> Ready!",
];
