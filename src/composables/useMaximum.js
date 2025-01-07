import { customRef } from "vue";

const useMaximum = (max) => {
  return customRef((track, trigger) => {
    let value = 0;
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        if (newValue <= max) value = newValue;
        trigger();
      }
    };
  });
}

export default useMaximum;