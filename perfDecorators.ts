import { performance } from 'perf_hooks';

export function timing() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {

    const value = descriptor.value;
    descriptor.value = async function (...args: any[]) {
        console.log(`Class: ${target.constructor.name}, Method: ${propertyKey}`);
      const start = performance.now();
      const out = await value.apply(this, args);
      const end = performance.now();
      console.log(end - start);
      return out;
    };
  };
}
