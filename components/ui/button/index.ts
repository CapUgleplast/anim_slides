import { type VariantProps, cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md',
  {
    variants: {
      variant: {
        default: 'bg-primary h-auto text-black',
        link: 'button-underlined',
        'link-alt': 'button-reverse-underlined',
        icon: 'rounded border border-dark'
      },
      size: {
        default: 'h-10 px-4 py-2',
        xs: 'h-7 rounded px-2',
        sm: 'text-xs leading-3 py-[5px] px-2',
        lg: 'h-11 rounded-md px-8',
        icon: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
