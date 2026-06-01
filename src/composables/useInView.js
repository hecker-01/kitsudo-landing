import { ref, onMounted, onUnmounted } from "vue";

/**
 * IntersectionObserver wrapper. Bind the returned `target` ref to an element;
 * `isInView` flips true when it scrolls into view (used to trigger animations).
 *
 * @param {object} [opts]
 * @param {boolean} [opts.once=true]   stop observing after first reveal
 * @param {number}  [opts.threshold=0.2]
 * @param {string}  [opts.rootMargin='0px 0px -10% 0px']
 */
export function useInView(opts = {}) {
  const {
    once = true,
    threshold = 0.2,
    rootMargin = "0px 0px -10% 0px",
  } = opts;
  const target = ref(null);
  const isInView = ref(false);
  let observer = null;

  onMounted(() => {
    if (typeof IntersectionObserver === "undefined") {
      isInView.value = true; // graceful fallback
      return;
    }
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isInView.value = true;
          if (once && observer) observer.disconnect();
        } else if (!once) {
          isInView.value = false;
        }
      },
      { threshold, rootMargin },
    );
    if (target.value) observer.observe(target.value);
  });

  onUnmounted(() => observer && observer.disconnect());

  return { target, isInView };
}
