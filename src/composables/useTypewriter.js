import { ref, watch, onUnmounted } from "vue";

/**
 * Char-by-char reveal of `text`.
 *
 * @param {import('vue').Ref<string>|string} text  source string (ref or plain)
 * @param {object} [opts]
 * @param {number} [opts.delay=45]   ms between characters
 * @param {number} [opts.startDelay=0] ms before typing begins
 * @param {boolean} [opts.start=true]  begin immediately
 * @returns {{ output: import('vue').Ref<string>, isComplete: import('vue').Ref<boolean>, run: () => void }}
 */
export function useTypewriter(text, opts = {}) {
  const { delay = 45, startDelay = 0, start = true } = opts;
  const output = ref("");
  const isComplete = ref(false);

  let timer = null;
  let kickoff = null;

  const source = () => (typeof text === "string" ? text : text.value || "");

  function clear() {
    if (timer) clearTimeout(timer);
    if (kickoff) clearTimeout(kickoff);
    timer = null;
    kickoff = null;
  }

  function run() {
    clear();
    output.value = "";
    isComplete.value = false;
    const full = source();

    const type = (i) => {
      if (i >= full.length) {
        isComplete.value = true;
        return;
      }
      output.value = full.slice(0, i + 1);
      timer = setTimeout(() => type(i + 1), delay);
    };

    kickoff = setTimeout(() => type(0), startDelay);
  }

  if (start) run();

  // Re-run if a reactive source changes.
  if (typeof text !== "string") {
    watch(text, () => start && run());
  }

  onUnmounted(clear);

  return { output, isComplete, run };
}
