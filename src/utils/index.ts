import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value); //bool
export const isVoid = (value: unknown) => value === null || value === undefined || value === ''
export const clearObject = (object: {[key: string]: unknown}) => {
  const result = { ...object };
  // Object.assign({}, object);
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

// 组建初始化只加载一次 custom hooks
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // TODO
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

// debounce
export const useDebounce = <V> (value: V, delay?: number) => {
  const [debounceValue, setDounceValue] = useState(value);
  useEffect(() => { 
    // 每次value变化以后设置一个定时器
    const timeout = setTimeout(() => setDounceValue(value), delay);
    console.log(1);
    //上一次useEffect运行完之后，执行return
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};
