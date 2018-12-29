import { createDecorator } from 'vue-class-component';

export function Middleware(key: string | string[]): ClassDecorator {
  return createDecorator((componentOptions: any) => {
    componentOptions.middleware = key;
  });
}
